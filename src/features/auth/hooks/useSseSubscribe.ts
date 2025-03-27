import { useEffect } from 'react';

type SseEventHandler = (
  announce: string,
  command: string,
  data: any,
  kind: string,
  rawEventData: any
) => void;

/**
 * SSE 구독을 위한 커스텀 훅
 * @param tenantId 테넌트 ID
 * @param onEvent 이벤트 수신 시 호출할 콜백 함수
 */
export const useSseSubscribe = (
  tenantId: string | number,
  onEvent: SseEventHandler
) => {
  useEffect(() => {
    if (!tenantId) return;

    const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
    const eventSource = new EventSource(
      `${DOMAIN}/api/v1/notification/${tenantId}/subscribe`
    );

    eventSource.addEventListener("message", (event) => {
      if (event.data === "Connected!!") return;
      
      try {
        const eventData = JSON.parse(event.data);
        onEvent(
          eventData.announce,
          eventData.command,
          eventData.data,
          eventData.kind,
          eventData // 원본 데이터도 전달
        );
      } catch (error) {
        console.error('Error parsing SSE data:', error);
      }
    });
    
    // 에러 처리
    eventSource.addEventListener("error", (err) => {
      console.error('SSE connection error:', err);
      // 필요시 재연결 로직 추가 가능
    });

    return () => {
      eventSource.close();
    };
  }, [tenantId, onEvent]);
};