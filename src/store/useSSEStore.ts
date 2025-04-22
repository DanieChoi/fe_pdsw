// 'use client';

// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// interface SSEState {
//   isConnected: boolean;
//   connectionCount: number;
//   messageCount: number;
//   lastConnectedAt: string | null;
//   url: string | null;
//   eventSource: EventSource | null;
  
//   // 연결 상태 정보 반환
//   getConnectionInfo: () => {
//     isConnected: boolean;
//     connectionCount: number;
//     messageCount: number;
//     lastConnectedAt: string | null;
//     url: string | null;
//   };
  
//   // SSE 초기화
//   initSSE: (userId: string, tenantId: number, onMessage: (data: any) => void) => void;
  
//   // SSE 연결 종료
//   closeSSE: () => void;
  
//   // 연결 상태 업데이트
//   setConnectionState: (isConnected: boolean) => void;
  
//   // 메시지 카운트 증가
//   incrementMessageCount: () => void;
// }

// // 로컬 스토리지에 연결 상태를 저장하기 위한 persist 미들웨어 사용
// export const useSSEStore = create<SSEState>()(
//   persist(
//     (set, get) => ({
//       isConnected: false,
//       connectionCount: 0,
//       messageCount: 0,
//       lastConnectedAt: null,
//       url: null,
//       eventSource: null,
      
//       // 연결 상태 정보 조회
//       getConnectionInfo: () => ({
//         isConnected: get().isConnected,
//         connectionCount: get().connectionCount,
//         messageCount: get().messageCount,
//         lastConnectedAt: get().lastConnectedAt,
//         url: get().url,
//       }),
      
//       // SSE 초기화 및 연결
//       initSSE: (userId, tenantId, onMessage) => {
//         // 이미 연결된 상태면 다시 연결하지 않음
//         if (get().eventSource && get().isConnected) {
//           console.log('SSE 이미 연결되어 있음, 기존 연결 유지');
//           return;
//         }
        
//         // 기존 연결이 있으면 정리
//         if (get().eventSource) {
//           get().closeSSE();
//         }
        
//         try {
//           const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
//           const url = `${DOMAIN}/notification/${tenantId}/subscribe/${userId}`;
          
//           console.log(`🔄 [SSE 연결 시도] URL: ${url}`);
          
//           const eventSource = new EventSource(url);
          
//           // 연결 성공 이벤트
//           eventSource.onopen = () => {
//             console.log('🟢 [SSE 연결 성공]');
//             set((state) => ({
//               isConnected: true,
//               connectionCount: state.connectionCount + 1,
//               lastConnectedAt: new Date().toISOString(),
//               url: url,
//               eventSource: eventSource,
//             }));
//           };
          
//           // 메시지 수신 이벤트
//           eventSource.addEventListener('message', (event) => {
//             // 초기 연결 메시지는 무시
//             if (event.data === 'Connected!!') {
//               return;
//             }
            
//             try {
//               const data = JSON.parse(event.data);
//               onMessage(data);
              
//               // 메시지 카운터 증가
//               set((state) => ({
//                 messageCount: state.messageCount + 1,
//               }));
//             } catch (error) {
//               console.error('SSE 메시지 파싱 오류:', error);
//             }
//           });
          
//           // 에러 처리
//           eventSource.onerror = (error) => {
//             console.error('🔴 [SSE 연결 오류]', error);
            
//             // 연결 상태 업데이트
//             set((state) => ({
//               isConnected: false,
//             }));
            
//             // 3초 후 재연결 시도
//             setTimeout(() => {
//               console.log('🔄 [SSE 재연결 시도]');
//               get().initSSE(userId, tenantId, onMessage);
//             }, 3000);
//           };
          
//           set({ eventSource });
//         } catch (error) {
//           console.error('SSE 초기화 오류:', error);
//         }
//       },
      
//       // SSE 연결 종료
//       closeSSE: () => {
//         const { eventSource } = get();
//         if (eventSource) {
//           console.log('🔌 [SSE 연결 종료]');
//           eventSource.close();
//           set({
//             eventSource: null,
//             isConnected: false,
//           });
//         }
//       },
      
//       // 연결 상태 업데이트
//       setConnectionState: (isConnected) => {
//         set({ isConnected });
//       },
      
//       // 메시지 카운트 증가
//       incrementMessageCount: () => {
//         set((state) => ({
//           messageCount: state.messageCount + 1,
//         }));
//       },
//     }),
//     {
//       name: 'sse-storage', // 로컬 스토리지 키 이름
//       partialize: (state) => ({
//         // 저장할 상태 필드만 선택
//         connectionCount: state.connectionCount,
//         messageCount: state.messageCount,
//         lastConnectedAt: state.lastConnectedAt,
//       }),
//     }
//   )
// );

'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 전역 싱글톤을 위한 브라우저 window 확장
declare global {
  interface Window {
    __SSE_INSTANCE__?: {
      eventSource: EventSource | null;
      active: boolean;
      userId: string | null;
      tenantId: number | null;
      initTimestamp: number; // 초기화 타임스탬프 추가
    };
  }
}

// 새로운 로컬 스토리지 이름 - 기존 값을 무시하기 위해
const STORAGE_KEY = 'sse-storage-v2';

// 애플리케이션 실행 시 로컬 스토리지 초기화
if (typeof window !== 'undefined') {
  // 기존 스토리지 키 삭제 (초기화 목적)
  localStorage.removeItem('sse-storage');
  
  // 위의 초기화를 한번만 하기 위해 체크
  if (!localStorage.getItem('sse-reset-done')) {
    localStorage.setItem('sse-reset-done', 'true');
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      state: {
        connectionCount: 0,
        messageCount: 0
      },
      version: 0
    }));
  }
}

// 글로벌 상태 초기화
if (typeof window !== 'undefined' && !window.__SSE_INSTANCE__) {
  window.__SSE_INSTANCE__ = {
    eventSource: null,
    active: false,
    userId: null,
    tenantId: null,
    initTimestamp: Date.now()
  };
}

interface SSEState {
  isConnected: boolean;
  connectionCount: number;
  messageCount: number;
  lastConnectedAt: string | null;
  url: string | null;
  connectionId: string;
  
  getConnectionInfo: () => {
    isConnected: boolean;
    connectionCount: number;
    messageCount: number;
    lastConnectedAt: string | null;
    url: string | null;
    connectionId: string;
  };
  
  initSSE: (userId: string, tenantId: number, onMessage: (data: any) => void) => void;
  closeSSE: () => void;
  incrementMessageCount: () => void;
  resetCounters: () => void;
}

const generateConnectionId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

export const useSSEStore = create<SSEState>()(
  persist(
    (set, get) => ({
      isConnected: typeof window !== 'undefined' ? !!window.__SSE_INSTANCE__?.active : false,
      connectionCount: 0,
      messageCount: 0,
      lastConnectedAt: null,
      url: null,
      connectionId: generateConnectionId(),
      
      getConnectionInfo: () => ({
        isConnected: typeof window !== 'undefined' ? !!window.__SSE_INSTANCE__?.active : false,
        connectionCount: get().connectionCount,
        messageCount: get().messageCount,
        lastConnectedAt: get().lastConnectedAt,
        url: get().url,
        connectionId: get().connectionId,
      }),
      
      resetCounters: () => {
        set({
          connectionCount: 0,
          messageCount: 0
        });
      },
      
      initSSE: (userId, tenantId, onMessage) => {
        // 브라우저 환경 확인
        if (typeof window === 'undefined') return;
        
        // 이미 전역 연결이 존재하는지 확인
        if (
          window.__SSE_INSTANCE__?.eventSource && 
          window.__SSE_INSTANCE__?.active &&
          window.__SSE_INSTANCE__?.userId === userId &&
          window.__SSE_INSTANCE__?.tenantId === tenantId
        ) {
          console.log('🔵 [SSE 이미 연결되어 있음] 기존 연결 재사용, 연결 ID:', get().connectionId);
          
          // 연결 정보만 업데이트하고 반환
          set({
            isConnected: true,
          });
          
          return;
        }
        
        // 기존 전역 연결이 있으면 정리
        if (window.__SSE_INSTANCE__?.eventSource) {
          console.log('🔄 [SSE 재연결 시도] 이전 연결 종료');
          window.__SSE_INSTANCE__.eventSource.close();
          window.__SSE_INSTANCE__.eventSource = null;
          window.__SSE_INSTANCE__.active = false;
        }
        
        try {
          const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
          const url = `${DOMAIN}/notification/${tenantId}/subscribe/${userId}`;
          
          console.log(`🔄 [SSE 연결 시도] URL: ${url}`);
          
          // 새 EventSource 생성
          const eventSource = new EventSource(url);
          
          // 전역 객체에 할당
          window.__SSE_INSTANCE__ = {
            eventSource,
            active: false,
            userId,
            tenantId,
            initTimestamp: Date.now()
          };
          
          // 연결 성공 이벤트
          eventSource.onopen = () => {
            console.log('🟢 [SSE 연결 성공] 연결 ID:', get().connectionId);
            
            if (window.__SSE_INSTANCE__) {
              window.__SSE_INSTANCE__.active = true;
            }
            
            // 새 페이지 로드에서 첫 번째 연결인 경우에만 카운트 증가
            // 첫 연결이라면 connectionCount는 이미 0으로 초기화되어 있어야 함
            if (get().connectionCount === 0) {
              set((state) => ({
                isConnected: true,
                connectionCount: 1, // 카운트를 1로 설정 (0에서 증가)
                lastConnectedAt: new Date().toISOString(),
                url: url,
              }));
              console.log('📈 [SSE 연결 카운트] 첫 번째 연결 (카운트: 1)');
            } else {
              // 이미 카운트가 증가된 경우라면 다시 증가시키지 않음
              set({
                isConnected: true,
                lastConnectedAt: new Date().toISOString(),
                url: url,
              });
              console.log('📊 [SSE 연결 카운트] 유지 (카운트: ' + get().connectionCount + ')');
            }
          };
          
          // 메시지 수신 이벤트
          eventSource.addEventListener('message', (event) => {
            // 초기 연결 메시지는 무시
            if (event.data === 'Connected!!') {
              console.log('✅ [SSE 초기 연결 확인] 연결 ID:', get().connectionId);
              return;
            }
            
            try {
              const data = JSON.parse(event.data);
              onMessage(data);
              
              // 메시지 카운터 증가
              set((state) => ({
                messageCount: state.messageCount + 1,
              }));
            } catch (error) {
              console.error('❌ [SSE 메시지 파싱 오류]:', error);
            }
          });
          
          // 에러 처리
          eventSource.onerror = (error) => {
            console.error('🔴 [SSE 연결 오류] 연결 ID:', get().connectionId, error);
            
            // 연결 상태 업데이트
            if (window.__SSE_INSTANCE__) {
              window.__SSE_INSTANCE__.active = false;
            }
            
            set({ isConnected: false });
            
            // 3초 후 재연결 시도
            setTimeout(() => {
              console.log('🔄 [SSE 재연결 시도] 이전 연결 ID:', get().connectionId);
              get().initSSE(userId, tenantId, onMessage);
            }, 3000);
          };
        } catch (error) {
          console.error('❌ [SSE 초기화 오류]:', error);
          if (window.__SSE_INSTANCE__) {
            window.__SSE_INSTANCE__.active = false;
          }
        }
      },
      
      closeSSE: () => {
        if (typeof window === 'undefined') return;
        
        if (window.__SSE_INSTANCE__?.eventSource) {
          console.log('🔌 [SSE 연결 종료] 연결 ID:', get().connectionId);
          window.__SSE_INSTANCE__.eventSource.close();
          window.__SSE_INSTANCE__.eventSource = null;
          window.__SSE_INSTANCE__.active = false;
          set({ isConnected: false });
        }
      },
      
      incrementMessageCount: () => {
        set((state) => ({
          messageCount: state.messageCount + 1,
        }));
      },
    }),
    {
      name: STORAGE_KEY, // 새 스토리지 키 사용
      partialize: (state) => ({
        connectionCount: state.connectionCount,
        messageCount: state.messageCount,
        lastConnectedAt: state.lastConnectedAt,
        connectionId: state.connectionId,
      }),
    }
  )
);