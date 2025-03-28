// C:\nproject\fe_pdsw\src\features\auth\hooks\useSseSubscribe.ts

// C:\nproject\fe_pdsw\src\features\auth\hooks\useSseSubscribe.ts

import { useState, useEffect, useCallback, useRef } from 'react';
import { isEqual } from 'lodash';
import { useAuthStore, useMainStore } from '@/store';
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useEnvironmentStore } from "@/store/environmentStore";
import { useQueryClient } from "@tanstack/react-query";
import { FooterDataType, processEventMessage } from '@/components/shared/layout/utils/eventMessageUtils';
import { toast } from '@/components/shared/layout/CustomToast';

// themeColors 정의 (기존과 동일)
export const themeColors = {
  event: {
    bgColor: 'bg-[#4A90E2]',
    gradientFrom: 'from-[#5A9FE8]',
    gradientTo: 'to-[#3A80D2]',
    textColor: 'text-white'
  },
  error: {
    bgColor: 'bg-[#f8d7da]',
    gradientFrom: 'from-[#f5c2c7]',
    gradientTo: 'to-[#f8d7da]',
    textColor: 'text-[#842029]'
  },
  success: {
    bgColor: 'bg-[#d1e7dd]',
    gradientFrom: 'from-[#badbcc]',
    gradientTo: 'to-[#d1e7dd]',
    textColor: 'text-[#0f5132]'
  },
  warning: {
    bgColor: 'bg-[#fff3cd]',
    gradientFrom: 'from-[#ffecb5]',
    gradientTo: 'to-[#fff3cd]',
    textColor: 'text-[#664d03]'
  },
  info: {
    bgColor: 'bg-[#cff4fc]',
    gradientFrom: 'from-[#b6effb]',
    gradientTo: 'to-[#cff4fc]',
    textColor: 'text-[#055160]'
  }
};

// 상수 정의
const HEALTH_CHECK_INTERVAL = 30000; // 30초마다 연결 상태 확인
const MAX_RECONNECT_ATTEMPTS = 10;   // 최대 재연결 시도 횟수
const MAX_BACKOFF_TIME = 30000;      // 최대 백오프 시간 (30초)
const DUPLICATE_EVENT_TIME = 5000;   // 중복 이벤트 판단 시간 (5초)

// useSseSubscribe 훅의 반환 타입 정의
interface UseSseSubscribeReturn {
  footerDataList: FooterDataType[];
  clearAllMessages: () => void;
  isConnected: boolean;
  forceReconnect: () => void; // 연결 강제 재시도 함수 추가
}

export const useSseSubscribe = (): UseSseSubscribeReturn => {
  const [footerDataList, setFooterDataList] = useState<FooterDataType[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const { tenant_id, role_id } = useAuthStore();
  const { campaigns, setCampaigns } = useMainStore();
  const { useAlramPopup } = useEnvironmentStore();
  const queryClient = useQueryClient();
  
  // EventSource 인스턴스를 저장할 ref
  const eventSourceRef = useRef<EventSource | null>(null);
  
  // 재연결 관련 정보를 저장할 ref
  const reconnectRef = useRef({
    attempts: 0,
    maxAttempts: MAX_RECONNECT_ATTEMPTS,
    timeoutId: null as NodeJS.Timeout | null,
    backoffTime: 1000, // 초기 재연결 대기시간 (1초)
    healthCheckId: null as NodeJS.Timeout | null,
    lastMessageTime: Date.now(), // 마지막 메시지 수신 시간
  });
  
  // 마지막으로 처리된 이벤트 데이터를 저장하는 ref
  const lastEventDataRef = useRef({
    announce: "",
    data: null as any,
    kind: "",
    timestamp: 0, // 이벤트 타임스탬프
    eventId: "", // 이벤트 고유 ID
  });

  // 캠페인 정보 조회 api 호출
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      setCampaigns(data.result_data);
    }
  });

  // 모든 메시지 지우기 함수
  const clearAllMessages = useCallback(() => {
    setFooterDataList([]);
  }, []);

  // 연결 강제 재시도 함수 - 외부에서 호출 가능
  const forceReconnect = useCallback(() => {
    console.log("Force reconnecting SSE...");
    // 재연결 시도 카운터 초기화
    reconnectRef.current.attempts = 0;
    reconnectRef.current.backoffTime = 1000;
    
    // 기존 타이머 정리
    if (reconnectRef.current.timeoutId) {
      clearTimeout(reconnectRef.current.timeoutId);
      reconnectRef.current.timeoutId = null;
    }
    
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
    
    // 상태 업데이트
    setIsConnected(false);
    
    // 즉시 재연결 시도
    setupSSEConnection();
  }, []);

  // 연결 상태 확인 함수
  const checkConnection = useCallback(() => {
    // 연결 객체가 없거나 연결이 닫힌 상태면 재연결
    if (!eventSourceRef.current || 
        eventSourceRef.current.readyState === EventSource.CLOSED || 
        eventSourceRef.current.readyState === EventSource.CONNECTING) {
      console.log("Health check: SSE connection is not in OPEN state, reconnecting...");
      forceReconnect();
      return false;
    }
    
    // 마지막 메시지 수신 후 너무 오래 지났으면 연결이 좋지 않은 것으로 판단
    const now = Date.now();
    const timeSinceLastMessage = now - reconnectRef.current.lastMessageTime;
    if (timeSinceLastMessage > HEALTH_CHECK_INTERVAL * 3) {
      console.log(`Health check: No messages for ${timeSinceLastMessage/1000}s, reconnecting...`);
      forceReconnect();
      return false;
    }
    
    console.log("Health check: SSE connection is healthy");
    return true;
  }, [forceReconnect]);

  // 이벤트 메시지 처리 함수
  const footerDataSet = useCallback((announce: string, command: string, data: any, kind: string, tempEventData: any): void => {
    // 마지막 메시지 수신 시간 업데이트
    reconnectRef.current.lastMessageTime = Date.now();
    
    // 이벤트 ID 생성 또는 추출 (서버에서 제공하는 경우)
    const eventId = tempEventData.id || `${announce}-${kind}-${JSON.stringify(data)}-${Date.now()}`;
    
    // 중복 이벤트 확인 - 이벤트 ID가 같거나 유사한 내용이 짧은 시간 내 들어온 경우
    const now = Date.now();
    if (
      (lastEventDataRef.current.eventId === eventId || 
       (lastEventDataRef.current.announce === announce &&
        isEqual(lastEventDataRef.current.data, data) &&
        lastEventDataRef.current.kind === kind)) &&
      now - lastEventDataRef.current.timestamp < DUPLICATE_EVENT_TIME
    ) {
      console.log(`Ignoring duplicate event (${announce}) within ${DUPLICATE_EVENT_TIME/1000}s`);
      return;
    }

    // 처리된 이벤트 정보 업데이트
    lastEventDataRef.current = {
      announce,
      data,
      kind,
      timestamp: now,
      eventId,
    };

    console.log("Processing SSE event:", { announce, command, kind });

    // 유틸리티 함수 호출하여 이벤트 처리 결과 가져오기
    const result = processEventMessage(
      announce,
      command,
      data,
      kind,
      campaigns,
      queryClient,
      tenant_id,
      role_id
    );

    // Footer 데이터 업데이트 - 최대 50개로 제한
    if (result.messageList && result.messageList.length > 0) {
      setFooterDataList((prev) => [
        ...result.messageList,
        ...prev
      ].slice(0, 50));
    }

    // 토스트 알림 처리 - useAlramPopup이 1일 경우에만
    if (useAlramPopup === 1 && result.toastMessage) {
      try {
        toast.event(
          result.toastMessage,
          {
            colors: themeColors.event,
            duration: 3000
          }
        );
      } catch (err) {
        console.error('Error showing toast:', err);
      }
    }

    // 필요한 경우 캠페인 정보 다시 가져오기
    if (result.shouldFetchMain) {
      fetchMain({
        session_key: '',
        tenant_id: tenant_id,
      });
    }

    // 장비 상태 변경 이벤트 처리
    if (result.shouldFireDeviceEvent && result.deviceEventDetails) {
      const deviceStatusEvent = new CustomEvent('deviceStatusChange', {
        detail: {
          device_id: result.deviceEventDetails.device_id,
          device_status: result.deviceEventDetails.device_status
        }
      });
      window.dispatchEvent(deviceStatusEvent);
    }
  }, [campaigns, queryClient, tenant_id, role_id, useAlramPopup, fetchMain]);

  // 헬스 체크 타이머 설정 함수
  const setupHealthCheck = useCallback(() => {
    // 기존 타이머가 있으면 정리
    if (reconnectRef.current.healthCheckId) {
      clearInterval(reconnectRef.current.healthCheckId);
    }
    
    // 새 타이머 설정
    reconnectRef.current.healthCheckId = setInterval(() => {
      checkConnection();
    }, HEALTH_CHECK_INTERVAL);
    
    return () => {
      if (reconnectRef.current.healthCheckId) {
        clearInterval(reconnectRef.current.healthCheckId);
        reconnectRef.current.healthCheckId = null;
      }
    };
  }, [checkConnection]);

  // SSE 연결 설정 함수
  const setupSSEConnection = useCallback(() => {
    // 현재 연결 시도 중이면 중복 실행 방지
    if (eventSourceRef.current && eventSourceRef.current.readyState === EventSource.CONNECTING) {
      console.log("SSE connection already in progress, skipping duplicate connection attempt");
      return;
    }
    
    // 기존 연결이 있으면 정리
    if (eventSourceRef.current) {
      console.log("Closing existing SSE connection before creating a new one");
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }

    // 재연결 타이머가 있으면 정리
    if (reconnectRef.current.timeoutId) {
      clearTimeout(reconnectRef.current.timeoutId);
      reconnectRef.current.timeoutId = null;
    }

    if (!tenant_id) {
      console.log("No tenant ID available, skipping SSE connection");
      return;
    }

    try {
      const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
      const timestamp = Date.now(); // 캐시 방지를 위한 타임스탬프
      const url = `${DOMAIN}/api/v1/notification/${tenant_id}/subscribe?_=${timestamp}`;
      
      console.log(`Connecting to SSE endpoint: ${url}`);
      
      // EventSource 옵션 설정 (브라우저 호환성 확인 필요)
      const eventSource = new EventSource(url, {
        withCredentials: true // 필요한 경우 credential 포함
      });
      
      eventSourceRef.current = eventSource;

      // 연결 시 처리
      eventSource.addEventListener("open", () => {
        console.log("SSE connection opened successfully");
        setIsConnected(true);
        
        // 연결 성공 시 재연결 카운터 초기화
        reconnectRef.current.attempts = 0;
        reconnectRef.current.backoffTime = 1000;
        reconnectRef.current.lastMessageTime = Date.now();
        
        // 연결 상태 확인 타이머 설정
        setupHealthCheck();
      });

      // 메시지 수신 처리
      eventSource.addEventListener("message", (event) => {
        // 연결 확인 메시지는 간단히 처리
        if (event.data === "Connected!!" || event.data === "ping") {
          console.log("SSE heartbeat received:", event.data);
          reconnectRef.current.lastMessageTime = Date.now();
          setIsConnected(true);
          return;
        }
        
        try {
          const eventData = JSON.parse(event.data);
          footerDataSet(
            eventData.announce || "",
            eventData.command || "",
            eventData.data || {},
            eventData.kind || "",
            eventData
          );
        } catch (err) {
          console.error('Error parsing SSE event data:', err, event.data);
        }
      });

      // 에러 처리
      eventSource.addEventListener("error", (err) => {
        console.error('SSE connection error:', err);
        setIsConnected(false);
        
        // 연결 종료
        eventSource.close();
        eventSourceRef.current = null;
        
        // 헬스 체크 타이머 정리
        if (reconnectRef.current.healthCheckId) {
          clearInterval(reconnectRef.current.healthCheckId);
          reconnectRef.current.healthCheckId = null;
        }
        
        // 최대 재시도 횟수 이내면 지수 백오프로 재연결
        if (reconnectRef.current.attempts < reconnectRef.current.maxAttempts) {
          const backoffTime = reconnectRef.current.backoffTime;
          console.log(`Attempting to reconnect in ${backoffTime/1000} seconds (attempt ${reconnectRef.current.attempts + 1}/${reconnectRef.current.maxAttempts})...`);
          
          reconnectRef.current.timeoutId = setTimeout(() => {
            reconnectRef.current.attempts++;
            // 다음 재연결 대기 시간은 2배로 증가 (최대 30초)
            reconnectRef.current.backoffTime = Math.min(backoffTime * 2, MAX_BACKOFF_TIME);
            setupSSEConnection();
          }, backoffTime);
        } else {
          console.error(`Failed to reconnect after ${reconnectRef.current.maxAttempts} attempts`);
          // 사용자에게 연결 실패 알림
          toast.event(
            "서버 연결이 실패했습니다. 페이지를 새로고침 해주세요.",
            {
              colors: themeColors.error,
              duration: 10000
            }
          );
          
          // 다시 시도할 수 있도록 30초 후 재시도 카운터 초기화
          reconnectRef.current.timeoutId = setTimeout(() => {
            reconnectRef.current.attempts = 0;
            reconnectRef.current.backoffTime = 1000;
            // 사용자가 페이지를 확인 중이면 다시 연결 시도
            if (document.visibilityState === 'visible') {
              setupSSEConnection();
            }
          }, 30000);
        }
      });
    } catch (err) {
      console.error('Error creating SSE connection:', err);
      setIsConnected(false);
    }
  }, [tenant_id, footerDataSet, setupHealthCheck]);
  
  // 네트워크 상태 변경 핸들러
  const handleNetworkChange = useCallback(() => {
    if (navigator.onLine) {
      console.log("Network is back online, attempting to reconnect SSE");
      // 온라인 상태로 변경되면 연결 재시도
      forceReconnect();
    } else {
      console.log("Network is offline, closing SSE connection");
      // 오프라인 상태로 변경되면 연결 종료
      setIsConnected(false);
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }
    }
  }, [forceReconnect]);

  // SSE 구독 설정 - 컴포넌트 마운트 시 한 번만 실행
  useEffect(() => {
    if (tenant_id) {
      // 초기 연결 설정
      setupSSEConnection();
      
      // 네트워크 상태 변경 이벤트 리스너 등록
      window.addEventListener('online', handleNetworkChange);
      window.addEventListener('offline', handleNetworkChange);
    }
    
    // 컴포넌트 언마운트 시 정리
    return () => {
      // 네트워크 이벤트 리스너 제거
      window.removeEventListener('online', handleNetworkChange);
      window.removeEventListener('offline', handleNetworkChange);
      
      // 연결 종료
      if (eventSourceRef.current) {
        console.log("Closing SSE connection on unmount");
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }
      
      // 모든 타이머 정리
      if (reconnectRef.current.timeoutId) {
        clearTimeout(reconnectRef.current.timeoutId);
        reconnectRef.current.timeoutId = null;
      }
      
      if (reconnectRef.current.healthCheckId) {
        clearInterval(reconnectRef.current.healthCheckId);
        reconnectRef.current.healthCheckId = null;
      }
    };
  }, [tenant_id, setupSSEConnection, handleNetworkChange]);

  // 컴포넌트가 포커스를 얻었을 때 연결 확인 및 필요시 재연결
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        console.log("Page became visible, checking SSE connection");
        
        // 연결 상태 확인
        if (!checkConnection()) {
          console.log("Connection check failed after visibility change, forcing reconnect");
          forceReconnect();
        }
      }
    };

    // 윈도우 포커스 변경 감지
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [checkConnection, forceReconnect]);

  // 초기 데이터 로드
  useEffect(() => {
    if (tenant_id && (!campaigns || campaigns.length === 0)) {
      fetchMain({
        session_key: '',
        tenant_id: tenant_id,
      });
    }
  }, [campaigns, fetchMain, tenant_id]);

  return {
    footerDataList,
    clearAllMessages,
    isConnected,
    forceReconnect
  };
};