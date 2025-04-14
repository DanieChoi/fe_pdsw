// 알림 옵션 인터페이스 확장
interface ExtendedNotificationOptions extends NotificationOptions {
    actions?: Array<{action: string, title: string}>;
    timestamp?: number;
  }
  
  // 업데이트된 알림 함수 (showPushNotification)
  export const showPushNotification = async (
    title: string,
    body: string,
    tag: string = "task-notification",
    options: {
      priority?: "low" | "normal" | "high",
      taskId?: string,
      category?: string
    } = {}
  ) => {
    // 고유한 태그 생성
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
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const updatedReg = await navigator.serviceWorker.getRegistration();
        if (!updatedReg?.active) {
          console.error("[showPushNotification] 서비스 워커 활성화 타임아웃");
          return;
        }
      }
  
      // 우선순위에 따른 아이콘 결정
      let iconPath = "/task-icon.png";
      let badgePath = "/badge-icon.png";
      
      if (options.priority === "high") {
        iconPath = "/task-icon-high.png";
      } else if (options.priority === "low") {
        iconPath = "/task-icon-low.png";
      }
  
      // 액션 버튼 설정
      const actions = [
        { action: "view", title: "확인" },
        { action: "dismiss", title: "나중에" }
      ];
  
      // 알림 표시 (ExtendedNotificationOptions 타입으로 변환)
      await reg.showNotification(title, {
        body,
        icon: iconPath,         // 메인 아이콘
        badge: badgePath,       // 작은 모노크롬 아이콘 (주로 안드로이드)
        tag: uniqueTag,
        actions: actions,       // 액션 버튼
        requireInteraction: false, // 자동으로 사라지도록 설정
        silent: false,          // 소리 재생
        timestamp: Date.now(),  // 타임스탬프 추가
        vibrate: [100, 50, 100], // 부드러운 진동 패턴
        data: {
          timestamp: Date.now(),
          originalTag: tag,
          id: Math.random().toString(36).substring(2, 15),
          priority: options.priority || "normal",
          taskId: options.taskId,
          category: options.category
        }
      } as ExtendedNotificationOptions);
      
      console.log("[showPushNotification] 알림 호출 성공");
    } catch (err) {
      console.error("[showPushNotification] 에러 발생", err);
    }
  };