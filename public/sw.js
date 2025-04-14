// // C:\nproject\fe_pdsw\public\sw.js
// self.addEventListener("install", (event) => {
//     console.log("[Service Worker] 설치됨");
//     // 즉시 활성화
//     self.skipWaiting();
//   });
  
//   self.addEventListener("activate", (event) => {
//     console.log("[Service Worker] 활성화됨");
//     // 활성화 즉시 모든 클라이언트 제어
//     event.waitUntil(clients.claim());
//   });
  
//   self.addEventListener("push", function (event) {
//     const data = event.data?.json() ?? {};
  
//     console.log("[Service Worker] Push Event Received:", data);
  
//     event.waitUntil(
//       self.registration.showNotification(data.title || "알림", {
//         body: data.body || "새로운 알림이 있습니다.",
//         icon: "/icon.png",
//         tag: data.tag ?? "campaign-event",
//         renotify: true,
//       })
//     );
//   });

// C:\nproject\fe_pdsw\public\sw.js
self.addEventListener("install", (event) => {
    console.log("[Service Worker] 설치됨");
    // 즉시 활성화
    self.skipWaiting();
  });
  
  self.addEventListener("activate", (event) => {
    console.log("[Service Worker] 활성화됨");
    // 활성화 즉시 모든 클라이언트 제어
    event.waitUntil(clients.claim());
  });
  
  // 알림 닫힘 이벤트 처리
  self.addEventListener("notificationclose", (event) => {
    console.log("[Service Worker] 알림이 닫힘:", event.notification.tag);
  });
  
  // 알림 클릭 이벤트 처리
  self.addEventListener("notificationclick", (event) => {
    console.log("[Service Worker] 알림이 클릭됨:", event.notification.tag);
    
    // 알림 닫기
    event.notification.close();
    
    // 필요한 경우 클라이언트 창 포커스
    event.waitUntil(
      clients.matchAll({type: 'window'}).then(clientList => {
        if (clientList.length > 0) {
          return clientList[0].focus();
        }
        return clients.openWindow('/');
      })
    );
  });
  
  self.addEventListener("push", function (event) {
    // 데이터 파싱 시도 (실패하면 기본값 사용)
    let data = {};
    try {
      data = event.data ? event.data.json() : {};
    } catch (e) {
      console.error("[Service Worker] Push 데이터 파싱 실패:", e);
      data = {};
    }
  
    console.log("[Service Worker] Push Event Received:", data);
  
    // 타임스탬프가 없으면 현재 시간 추가
    if (!data.timestamp) {
      data.timestamp = Date.now();
    }
  
    // 태그가 없으면 고유한 태그 생성
    const tag = data.tag ? `${data.tag}-${data.timestamp}` : `notification-${Date.now()}`;
  
    event.waitUntil(
      self.registration.showNotification(data.title || "알림", {
        body: data.body || "새로운 알림이 있습니다.",
        icon: "/icon.png",
        tag: tag,
        renotify: true,
        data: {
          ...data,
          timestamp: data.timestamp || Date.now()
        }
      })
    );
  });