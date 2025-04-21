import { create } from "zustand";

interface SSEStore {
  eventSource: EventSource | null;
  initSSE: (id: string, tenant_id: string, onMessage: (data: any) => void) => void;
  closeSSE: () => void;
}

export const useSSEStore = create<SSEStore>((set, get) => ({
  eventSource: null,

  initSSE: (id, tenant_id, onMessage) => {
    const current = get().eventSource;
  
    console.log("💡 [SSE 상태 확인] 기존 연결 여부:", current ? "존재함" : "없음");
  
    if (current) {
      console.log("🛑 SSE 이미 연결되어 있음, 재연결 생략");
      return;
    }
  
    const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
    const url = `${DOMAIN}/notification/${tenant_id}/subscribe/${id}`;
    const es = new EventSource(url);
    console.log("🟢 [Zustand SSE 연결 생성]:", url);
  
    es.addEventListener("message", (event) => {
      if (event.data !== "Connected!!") {
        try {
          const parsed = JSON.parse(event.data);
          console.log("📩 [Zustand SSE 수신]", parsed);
          onMessage(parsed);
        } catch (error) {
          console.error("SSE 메시지 파싱 오류:", error);
        }
      } else {
        console.log("✅ [SSE Connected!! 메시지]");
      }
    });
  
    es.onerror = (err) => {
      console.error("🚨 [Zustand SSE 에러 발생]", err);
    };
  
    set({ eventSource: es });
  },  

  closeSSE: () => {
    const current = get().eventSource;
    if (current) {
      console.log("🧹 [Zustand SSE 연결 종료]");
      current.close();
      set({ eventSource: null });
    }
  },
}));