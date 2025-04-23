'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import isEqual from 'lodash/isEqual';

type EventData = {
  announce: string;
  command: string;
  data: any;
  kind: string;
  campaign_id: string;
  skill_id?: string;
  [key: string]: any;
};

type ConnectionInfo = {
  isConnected: boolean;
  url: string | null;
  connectionCount: number;
  messageCount: number;
  lastConnectedAt: Date | null;
};

type SSEState = {
  eventSource: EventSource | null;
  isConnected: boolean;
  lastEventData: EventData | null;
  connectionCount: number;
  messageCount: number;
  lastConnectedAt: Date | null;
  userId: string | null;
  tenantId: string | null;
  reconnectAttempts: number;
  
  // 초기화 함수
  initSSE: (userId: string, tenantId: string, messageHandler: (data: EventData) => void) => void;
  
  // 연결 관리 함수
  connect: (userId: string, tenantId: string, messageHandler: (data: EventData) => void) => void;
  disconnect: () => void;
  closeSSE: () => void; // disconnect의 별칭
  
  // 이벤트 데이터 관리
  setLastEventData: (eventData: EventData) => void;
  
  // 연결 정보 가져오기
  getConnectionInfo: () => ConnectionInfo;
  
  // 연결 복구 (페이지 새로고침 후)
  restoreConnection: () => void;
};

// 메시지 핸들러를 전역으로 저장
let globalMessageHandler: ((data: EventData) => void) | null = null;

// 이미 처리한 메시지 ID 추적 (전역 중복 방지)
const processedMessageIds = new Set<string>();

export const useSSEStore = create<SSEState>()(
  persist(
    (set, get) => ({
      eventSource: null,
      isConnected: false,
      lastEventData: null,
      connectionCount: 0,
      messageCount: 0,
      lastConnectedAt: null,
      userId: null,
      tenantId: null,
      reconnectAttempts: 0,

      initSSE: (userId: string, tenantId: string, messageHandler: (data: EventData) => void) => {
        // 메시지 핸들러를 전역 변수에 저장
        globalMessageHandler = messageHandler;
        
        // 기존 연결이 있으면 먼저 닫기
        const { disconnect, connect } = get();
        disconnect();
        
        // 사용자 정보 저장
        set({ 
          userId, 
          tenantId,
          reconnectAttempts: 0 // 재연결 시도 카운터 초기화
        });
        
        // 새 연결 설정
        connect(userId, tenantId, messageHandler);
      },

      connect: (userId: string, tenantId: string, messageHandler: (data: EventData) => void) => {
        // 브라우저 환경인지 확인
        if (typeof window === 'undefined' || !window.EventSource || !userId || !tenantId) {
          console.warn('SSE 연결 실패: 브라우저 환경이 아니거나 필수 파라미터가 누락되었습니다.');
          return;
        }

        try {
          // DOMAIN 가져오기
          const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
          
          if (!DOMAIN) {
            console.error('SSE 연결 실패: NEXT_PUBLIC_API_URL이 정의되지 않았습니다.');
            return;
          }

          console.info("[SSE Store] 연결 시도:", DOMAIN);

          // 이전 연결 닫기
          const { disconnect } = get();
          disconnect();

          // 새 EventSource 생성
          const sseUrl = `${DOMAIN}/notification/${tenantId}/subscribe/${userId}`;
          const eventSource = new EventSource(sseUrl);
          
          // 디버깅용 전역 변수 설정
          (window as any).__sseConnection = {
            url: sseUrl,
            instance: eventSource,
            createdAt: new Date()
          };

          // 연결 이벤트 리스너
          eventSource.onopen = () => {
            console.log('🔌 SSE 연결됨:', sseUrl);
            set({ 
              isConnected: true,
              connectionCount: get().connectionCount + 1,
              lastConnectedAt: new Date(),
              reconnectAttempts: 0 // 연결 성공 시 재연결 시도 카운터 초기화
            });
            
            // 로컬 스토리지에 연결 정보 저장
            localStorage.setItem('sse-connection-url', sseUrl);
            localStorage.setItem('sse-connection-time', new Date().toISOString());
          };

          // 에러 이벤트 리스너
          eventSource.onerror = (error) => {
            console.error('🚨 SSE 에러:', error);
            set({ isConnected: false });
            
            // 재연결 시도 로직 - 최대 10회 시도 후 지수 백오프 적용
            const { reconnectAttempts } = get();
            const newAttempts = reconnectAttempts + 1;
            set({ reconnectAttempts: newAttempts });
            
            // 백오프 시간 계산 (최소 2초, 최대 2분)
            const backoffTime = Math.min(120000, Math.pow(1.5, Math.min(10, newAttempts)) * 1000);
            
            console.log(`🔄 SSE 재연결 시도 예정 (${newAttempts}번째): ${backoffTime/1000}초 후`);
            
            setTimeout(() => {
              if (get().eventSource === eventSource) {
                const { connect } = get();
                connect(userId, tenantId, messageHandler);
              }
            }, backoffTime);
          };

          // 메시지 이벤트 리스너
          eventSource.addEventListener('message', (event) => {
            if (event.data === "Connected!!") {
              console.log("SSE 연결 확인 메시지 수신");
              return;
            }
            
            try {
              const eventData: EventData = JSON.parse(event.data);
              
              // 유효한 메시지 확인
              if (!eventData.announce || !eventData.command) {
                console.log("⚠️ 유효하지 않은 메시지 형식:", eventData);
                return;
              }
              
              // 메시지 고유 ID 생성 (중복 방지용)
              const messageId = `${eventData.announce}_${eventData.command}_${eventData.campaign_id || ''}_${JSON.stringify(eventData.data || {})}`;
              
              // 이미 처리한 메시지는 스킵
              if (processedMessageIds.has(messageId)) {
                console.log("🔄 중복 메시지 스킵:", messageId);
                return;
              }
              
              // 메시지 ID 저장 (최대 500개까지 저장)
              processedMessageIds.add(messageId);
              if (processedMessageIds.size > 500) {
                const oldestId = processedMessageIds.values().next().value;
                if (oldestId !== undefined) {
                  processedMessageIds.delete(oldestId);
                }
              }
              
              // 상태 업데이트
              set({ 
                lastEventData: eventData,
                messageCount: get().messageCount + 1
              });
              
              console.log("✅ 메시지 처리:", {
                announce: eventData.announce,
                command: eventData.command
              });
              
              // 메시지 핸들러 호출
              messageHandler(eventData);
              
              // 커스텀 이벤트 발생
              const sseEvent = new CustomEvent('sse-message', { 
                detail: eventData 
              });
              window.dispatchEvent(sseEvent);
            } catch (error) {
              console.error('SSE 메시지 처리 중 오류:', error);
            }
          });

          // 스토어에 EventSource 저장
          set({ eventSource });
          
        } catch (error) {
          console.error('🚨 SSE 연결 중 오류:', error);
          set({ isConnected: false });
        }
      },

      disconnect: () => {
        const { eventSource } = get();
        if (eventSource) {
          eventSource.close();
          console.log('🔌 SSE 연결 종료');
          
          // 연결 정보 삭제
          localStorage.removeItem('sse-connection-url');
          localStorage.removeItem('sse-connection-time');
          
          // 전역 변수 정리
          if (typeof window !== 'undefined') {
            (window as any).__sseConnection = null;
          }
        }
        set({ eventSource: null, isConnected: false });
      },

      closeSSE: () => {
        // disconnect의 별칭 (Footer.tsx와 인터페이스 일관성을 위해)
        const { disconnect } = get();
        disconnect();
      },

      setLastEventData: (eventData: EventData) => {
        set({ lastEventData: eventData });
      },

      getConnectionInfo: () => {
        const { isConnected, connectionCount, messageCount, lastConnectedAt } = get();
        const eventSource = get().eventSource;
        
        return {
          isConnected,
          url: eventSource ? (eventSource as any).url : null,
          connectionCount,
          messageCount, 
          lastConnectedAt
        };
      },
      
      restoreConnection: () => {
        const { userId, tenantId } = get();
        
        // 사용자 ID와 테넌트 ID가 있으면 연결 복구 시도
        if (userId && tenantId && globalMessageHandler) {
          console.log('🔄 SSE 연결 복구 시도:', { userId, tenantId });
          const { connect } = get();
          connect(userId, tenantId, globalMessageHandler);
        } else {
          console.warn('⚠️ SSE 연결 복구 실패: 사용자 정보 부족');
        }
      }
    }),
    {
      name: 'sse-storage', // 로컬 스토리지 키 이름
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ 
        // EventSource 객체는 serialize할 수 없으므로 제외
        isConnected: state.isConnected,
        lastEventData: state.lastEventData,
        connectionCount: state.connectionCount,
        messageCount: state.messageCount,
        lastConnectedAt: state.lastConnectedAt,
        userId: state.userId,
        tenantId: state.tenantId,
        reconnectAttempts: state.reconnectAttempts
      }),
    }
  )
);

// 연결 상태 감시 기능 (브라우저 환경에서만 실행)
if (typeof window !== 'undefined') {
  // 페이지 로드 시 SSE 연결 복구 시도
  window.addEventListener('load', () => {
    console.log("📄 페이지 로드됨 - SSE 연결 복구 시도");
    setTimeout(() => {
      useSSEStore.getState().restoreConnection();
    }, 1000);
  });
  
  // 주기적으로 연결 상태 확인 및 필요시 재연결 (30초마다)
  let connectionCheckInterval: number;
  
  const setupConnectionCheck = () => {
    connectionCheckInterval = window.setInterval(() => {
      const { isConnected, eventSource, userId, tenantId } = useSSEStore.getState();
      
      if (!isConnected && userId && tenantId && globalMessageHandler) {
        console.log("🔌 SSE 연결 끊김 감지 - 자동 재연결 시도");
        useSSEStore.getState().connect(userId, tenantId, globalMessageHandler);
      } else if (eventSource && eventSource.readyState === EventSource.CLOSED) {
        console.log("🔌 SSE 연결 상태 이상 감지 (CLOSED) - 재연결 시도");
        if (userId && tenantId && globalMessageHandler) {
          useSSEStore.getState().connect(userId, tenantId, globalMessageHandler);
        }
      }
    }, 30000);
  };
  
  // 페이지 표시 상태 모니터링
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      console.log("📱 페이지 포커스 - SSE 연결 상태 확인");
      
      // 연결 상태 확인 및 필요시 재연결
      const { isConnected, userId, tenantId } = useSSEStore.getState();
      if (!isConnected && userId && tenantId && globalMessageHandler) {
        console.log("🔌 SSE 재연결 시도 (페이지 포커스 복귀)");
        useSSEStore.getState().connect(userId, tenantId, globalMessageHandler);
      }
      
      // 연결 상태 감시 인터벌 설정
      setupConnectionCheck();
    } else {
      // 백그라운드로 갈 때 인터벌 해제 (선택적)
      // clearInterval(connectionCheckInterval);
    }
  });
  
  // 초기 연결 상태 감시 인터벌 설정
  setupConnectionCheck();
}