/**  /public/workers/sseSharedWorker.js  **/
/* global self */

let es = null;          // 싱글톤 EventSource
let ports = new Set();  // 접속한 모든 페이지의 MessagePort 집합

function broadcast(message) {
  ports.forEach(p => p.postMessage(message));
}

function openES(url) {
  if (es) return;                   // 이미 열려있으면 무시
  es = new EventSource(url);

  broadcast({ type: 'status', payload: { connected: false, url } });

  es.addEventListener('open', () => {
    broadcast({ type: 'status', payload: { connected: true, url } });
  });

  es.addEventListener('message', ev => {
    broadcast({ type: 'sse', payload: ev.data });
  });

  es.onerror = err => {
    broadcast({ type: 'error', payload: err });
    // 기본 back‑off 재연결 사용
  };
}

self.onconnect = ({ ports: [port] }) => {
  ports.add(port);

  port.onmessage = ({ data }) => {
    const { type, payload } = data;
    if (type === 'init') openES(payload.url);
    if (type === 'close' && es) {
      es.close();
      es = null;
      broadcast({ type: 'status', payload: { connected: false } });
    }
  };

  port.start();
};
