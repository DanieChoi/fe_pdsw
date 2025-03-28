// import { useEffect } from 'react';

// export const themeColors = {
//     primary: {
//       bgColor: 'bg-[#5BC2C1]',
//       gradientFrom: 'from-[#5BC2C1]',
//       gradientTo: 'to-[#4A9E9D]',
//       textColor: 'text-white'
//     },
//     secondary: {
//       bgColor: 'bg-[#4A90E2]',
//       gradientFrom: 'from-[#5A9FE8]',
//       gradientTo: 'to-[#3A80D2]',
//       textColor: 'text-white'
//     },
//     event: {
//       bgColor: 'bg-[#4A90E2]', // 푸른색 계열로 변경
//       gradientFrom: 'from-[#5A9FE8]',
//       gradientTo: 'to-[#3A80D2]',
//       textColor: 'text-white'
//     }
//   };

// type SseEventHandler = (
//   announce: string,
//   command: string,
//   data: any,
//   kind: string,
//   rawEventData: any
// ) => void;

// /**
//  * SSE 구독을 위한 커스텀 훅
//  * @param tenantId 테넌트 ID
//  * @param onEvent 이벤트 수신 시 호출할 콜백 함수
//  */
// export const useSseSubscribe = (
//   tenantId: string | number,
//   onEvent: SseEventHandler
// ) => {
//   useEffect(() => {
//     if (!tenantId) return;

//     const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
//     const eventSource = new EventSource(
//       `${DOMAIN}/api/v1/notification/${tenantId}/subscribe`
//     );

//     eventSource.addEventListener("message", (event) => {
//       if (event.data === "Connected!!") return;
      
//       try {
//         const eventData = JSON.parse(event.data);
//         onEvent(
//           eventData.announce,
//           eventData.command,
//           eventData.data,
//           eventData.kind,
//           eventData // 원본 데이터도 전달
//         );
//       } catch (error) {
//         console.error('Error parsing SSE data:', error);
//       }
//     });
    
//     // 에러 처리
//     eventSource.addEventListener("error", (err) => {
//       console.error('SSE connection error:', err);
//       // 필요시 재연결 로직 추가 가능
//     });

//     return () => {
//       eventSource.close();
//     };
//   }, [tenantId, onEvent]);
// };

"use client";

import { useState, useEffect, useCallback } from 'react';
import { isEqual } from 'lodash';
import { useAuthStore, useMainStore } from '@/store';
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useEnvironmentStore } from "@/store/environmentStore";
import { useQueryClient } from "@tanstack/react-query";
import { FooterDataType, processEventMessage } from '@/components/shared/layout/utils/eventMessageUtils';
import { toast } from '@/components/shared/layout/CustomToast';

// themeColors 정의
export const themeColors = {
  event: {
    bgColor: 'bg-[#4A90E2]',
    gradientFrom: 'from-[#5A9FE8]',
    gradientTo: 'to-[#3A80D2]',
    textColor: 'text-white'
  },
  error: {
    background: '#f8d7da',
    border: '#f5c2c7',
    text: '#842029',
  },
  success: {
    background: '#d1e7dd',
    border: '#badbcc',
    text: '#0f5132',
  },
  warning: {
    background: '#fff3cd',
    border: '#ffecb5',
    text: '#664d03',
  },
  info: {
    background: '#cff4fc',
    border: '#b6effb',
    text: '#055160',
  }
};

// useSseSubscribe 훅의 반환 타입 정의
interface UseSseSubscribeReturn {
  footerDataList: FooterDataType[];
  clearAllMessages: () => void;
  isConnected: boolean;
}

export const useSseSubscribe = (): UseSseSubscribeReturn => {
  const [footerDataList, setFooterDataList] = useState<FooterDataType[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const { tenant_id, role_id } = useAuthStore();
  const { campaigns, setCampaigns } = useMainStore();
  const { useAlramPopup } = useEnvironmentStore();
  const queryClient = useQueryClient();

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

  // 이벤트 메시지 처리 함수
  const footerDataSet = useCallback((announce: string, command: string, data: any, kind: string, tempEventData: any): void => {
    console.log("footerDataSet announce = ", announce);
    console.log("footerDataSet command = ", command);
    console.log("footerDataSet data = ", data);
    console.log("footerDataSet kind = ", kind);
    console.log("footerDataSet tempEventData = ", tempEventData);

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

    // Footer 데이터 업데이트
    if (result.messageList && result.messageList.length > 0) {
      setFooterDataList((prev) => [
        ...result.messageList,
        ...prev.slice(0, Math.max(0, 10 - result.messageList.length))
      ]);
    }

    // 토스트 알림 처리 - useAlramPopup이 1일 경우에만
    if (useAlramPopup === 1 && result.toastMessage) {
      try {
        setTimeout(() => {
          toast.event(
            result.toastMessage,
            {
              colors: themeColors.event,
              duration: 3000
            }
          );
          console.log('Toast message triggered:', result.toastMessage);
        }, 0);
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

  // SSE 연결 및 재연결 로직
  useEffect(() => {
    let eventSource: EventSource | null = null;
    let retryTimeout: ReturnType<typeof setTimeout>;

    const connectSSE = () => {
      const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
      eventSource = new EventSource(
        `${DOMAIN}/api/v1/notification/${tenant_id}/subscribe`
      );

      eventSource.addEventListener("open", () => {
        console.log("SSE connection opened");
        setIsConnected(true);
      });

      eventSource.addEventListener("message", (event) => {
        console.log("sse event message = ", event.data);

        // Connected!! 메시지 처리
        if (event.data === "Connected!!") {
          console.log("SSE Connected successfully");
          setIsConnected(true);
          return;
        }

        try {
          const tempEventData = JSON.parse(event.data);
          footerDataSet(
            tempEventData["announce"],
            tempEventData["command"],
            tempEventData["data"],
            tempEventData["kind"],
            tempEventData
          );
        } catch (err) {
          console.error('Error processing SSE event:', err);
        }
      });

      eventSource.addEventListener("error", (err) => {
        console.error('SSE connection error:', err);
        setIsConnected(false);
        if (eventSource) {
          eventSource.close();
        }
        // 재연결 시도 로직: 5초 후 재연결
        retryTimeout = setTimeout(() => {
          console.log("Reconnecting SSE...");
          connectSSE();
        }, 5000);
      });
    };

    // 최초 연결
    connectSSE();

    // 컴포넌트 언마운트 시 정리
    return () => {
      if (eventSource) {
        eventSource.close();
      }
      clearTimeout(retryTimeout);
      setIsConnected(false);
    };
  }, [tenant_id, role_id, footerDataSet]);

  // 초기 데이터 로드
  useEffect(() => {
    if (campaigns && campaigns.length === 0) {
      fetchMain({
        session_key: '',
        tenant_id: tenant_id,
      });
    }
  }, [campaigns, fetchMain, tenant_id]);

  return {
    footerDataList,
    clearAllMessages,
    isConnected
  };
};
