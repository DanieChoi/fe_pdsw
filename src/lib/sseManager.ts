// // src/lib/sseManager.ts
// 'use client';

// export type OnMessage = (payload: any) => void;

// let worker: SharedWorker | null = null;

// // 각 페이지가 호출하는 API
// export function connectSSE(url: string, listener: OnMessage) {
//   if (typeof window === 'undefined' || !('SharedWorker' in window)) {
//     console.error('SharedWorker 미지원 - 폴백 로직 필요');
//     return;
//   }

//   // 워커 인스턴스는 탭에서 하나만
//   if (!worker) {
//     worker = new SharedWorker('/workers/sse-shared.js', { name: 'SSEWorker' });
//   }

//   const port = worker.port;

//   // 메시지 수신 → JSON 파싱 후 콜백
//   const handle = (e: MessageEvent) => {
//     if (e.data?.type === 'sse') {
//       try {
//         if (e.data.data !== "Connected!!"){
//             listener(JSON.parse(e.data.data));
//         } 
//       } catch (err) {
//         console.error('JSON parse error', err);
//       }
//     }
//   };

//   port.addEventListener('message', handle);
//   port.postMessage({ type: 'init', url });
//   port.start();

//   // 해제 함수 반환
//   return () => {
//     port.removeEventListener('message', handle);
//     port.postMessage({ type: 'close' });
//   };
// }


// src/lib/sseManager.ts
'use client';

export type OnMessage = (payload: any) => void;

function getGlobalWorker(): SharedWorker | null {
  if (typeof window === 'undefined') return null;

  if (!(window as any).__SSE_SHARED_WORKER__) {
    try {
      (window as any).__SSE_SHARED_WORKER__ = new SharedWorker('/workers/sse-shared.js', { name: 'SSEWorker' });
    } catch (e) {
      console.error('[SSE] SharedWorker 생성 실패', e);
      return null;
    }
  }

  return (window as any).__SSE_SHARED_WORKER__;
}

export function connectSSE(url: string, listener: OnMessage) {
  const shared = getGlobalWorker();
  if (!shared) return;

  const port = shared.port;

  const handle = (e: MessageEvent) => {
    if (e.data?.type === 'sse') {
      try {
        if (e.data.data !== 'Connected!!') {
          listener(JSON.parse(e.data.data));
        }
      } catch (err) {
        console.error('[SSE] JSON 파싱 오류', err);
      }
    }
  };

  port.addEventListener('message', handle);
  port.postMessage({ type: 'init', url });
  port.start();

  return () => {
    port.removeEventListener('message', handle);
    port.postMessage({ type: 'close' });
  };
}
