// export const showPushNotification = async (
//     title: string,
//     body: string,
//     tag: string = "campaign-event"
//   ) => {
//     console.log("[showPushNotification] 호출됨", { title, body, tag });
//     try {
//       const reg = await navigator.serviceWorker.getRegistration();
//       console.log("[showPushNotification] 등록 정보:", reg);
//       if (Notification.permission === "granted" && reg) {
//         reg.showNotification(title, {
//           body,
//           icon: "/icon.png",
//           tag,
//           vibrate: [200, 100, 200],
//         } as any);
//         console.log("[showPushNotification] 알림 호출 성공");
//       } else {
//         console.warn("[showPushNotification] 알림 권한이 없거나 서비스 워커 등록 실패");
//       }
//     } catch (err) {
//       console.error("[showPushNotification] 에러 발생", err);
//     }
//   };
  
// 개선된, 여러 번 호출해도 작동하는 알림 함수
export const showPushNotification = async (
    title: string,
    body: string,
    tag: string = "campaign-event"
  ) => {
    // 고유한 태그 생성 (타임스탬프 추가)
    const uniqueTag = `${tag}-${Date.now()}`;
    console.log("[showPushNotification] 호출됨", { title, body, originalTag: tag, uniqueTag });
    
    try {
      // 권한 확인
      if (Notification.permission !== "granted") {
        console.warn("[showPushNotification] 알림 권한이 없음");
        const permission = await Notification.requestPermission();
        if (permission !== "granted") {
          console.error("[showPushNotification] 알림 권한 거부됨");
          return;
        }
      }
  
      // 서비스 워커 확인
      const reg = await navigator.serviceWorker.getRegistration();
      console.log("[showPushNotification] 서비스 워커 등록 정보:", reg);
      
      if (!reg) {
        console.error("[showPushNotification] 등록된 서비스 워커가 없음");
        return;
      }
  
      // 서비스 워커가 활성화 상태인지 확인
      if (!reg.active) {
        console.warn("[showPushNotification] 서비스 워커가 활성화되지 않음, 대기 중...");
        // 서비스 워커 활성화 대기
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const updatedReg = await navigator.serviceWorker.getRegistration();
        if (!updatedReg?.active) {
          console.error("[showPushNotification] 서비스 워커 활성화 타임아웃");
          return;
        }
      }
  
      // 알림 표시 (고유 태그 및 데이터 사용)
      await reg.showNotification(title, {
        body,
        icon: "/icon.png", // 아이콘이 없는 경우 이 경로를 수정하세요
        tag: uniqueTag,    // 고유 태그 사용
        vibrate: [200, 100, 200],
        requireInteraction: true,
        renotify: true,
        data: {
          timestamp: Date.now(),
          originalTag: tag,
          id: Math.random().toString(36).substring(2, 15)
        }
      });
      
      console.log("[showPushNotification] 알림 호출 성공");
    } catch (err) {
      console.error("[showPushNotification] 에러 발생", err);
    }
  };