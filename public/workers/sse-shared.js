// public/workers/sse-shared.js
/* eslint-disable no-restricted-globals */

let es = null;           // 싱글톤 EventSource
let currentUrl = '';     // 현재 연결 URL
const ports = new Set(); // 페이지(또는 같은 탭 내 프레임)들의 Port 모음

// 새로 연결해 달라는 메시지가 오면 호출
function ensureConnection(url) {
  if (es && currentUrl === url && es.readyState !== EventSource.CLOSED) return;

  if (es) es.close();     // URL이 바뀌었다면 기존 연결 종료
  currentUrl = url;

  es = new EventSource(url);

  es.onmessage = (evt) => {
    // 손쉬운 전파: 등록된 모든 Port 로 그대로 전달
    ports.forEach((p) => p.postMessage({ type: 'sse', data: evt.data }));
  };

  es.onerror = (err) => {
    console.error('[SharedWorker] SSE error', err);
  };
}

// SharedWorker 진입점
self.onconnect = (e) => {
  const port = e.ports[0];
  ports.add(port);

  port.onmessage = (evt) => {
    const { type, url } = evt.data || {};
    if (type === 'init') ensureConnection(url);
    if (type === 'close') {
      // 페이지가 리스너만 제거하고 싶을 때
      ports.delete(port);
      if (ports.size === 0) {
        es?.close();
        es = null;
        currentUrl = '';
      }
    }
  };

  port.start();
};
