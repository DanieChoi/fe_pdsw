import { create } from "zustand";

interface SSEStore {
  eventSource: EventSource | null;
  connectionCount: number;
  messageCount: number;
  lastConnectedAt: string | null;
  connectionsHistory: string[];
  initSSE: (
    id: string,
    tenant_id: number,
    onMessage: (data: any) => void
  ) => void;
  closeSSE: () => void;
  getConnectionInfo: () => {
    isConnected: boolean;
    url: string | null;
    connectionCount: number;
    messageCount: number;
    lastConnectedAt: string | null;
    connectionsHistory: string[];
  };
}

export const useSSEStore = create<SSEStore>((set, get) => ({
  eventSource: null,
  connectionCount: 0,
  messageCount: 0,
  lastConnectedAt: null,
  connectionsHistory: [],

  initSSE: (id, tenant_id, onMessage) => {
    if (typeof window !== 'undefined') {
      const globalSSE = (window as any).SSE_GLOBAL as EventSource | undefined;
      if (globalSSE) {
        console.log("♻️ [SSE] 전역 SSE 객체 이미 존재. 중복 연결 방지.");
        return;
      }
    }

    const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
    const url = `${DOMAIN}/notification/${tenant_id}/subscribe/${id}`;
    const es = new EventSource(url);

    if (typeof window !== 'undefined') {
      (window as any).SSE_GLOBAL = es;
    }

    const now = new Date().toISOString();
    set(state => ({
      eventSource: es,
      connectionCount: state.connectionCount + 1,
      lastConnectedAt: now,
      connectionsHistory: [...state.connectionsHistory, `${now} - ${url}`],
    }));

    es.addEventListener("open", () => {
      console.log(`✅ [SSE 연결 성공]: ${url}`);
    });

    es.addEventListener("message", (event) => {
      if (event.data !== "Connected!!") {
        try {
          const parsed = JSON.parse(event.data);
          set(state => ({ messageCount: state.messageCount + 1 }));
          console.log(`📩 [Zustand SSE 수신 #${get().messageCount}]`, parsed);
          onMessage(parsed);
        } catch (error) {
          console.error("SSE 메시지 파싱 오류:", error);
        }
      } else {
        console.log("✅ [SSE Connected!! 메시지]");
      }
    });

    es.onerror = (err) => {
      console.error("🚨 [SSE 에러 발생]", err);
      // 필요시 재시도 로직 추가 가능
    };
  },

  closeSSE: () => {
    const current = get().eventSource;
    if (current) {
      console.log(`🧹 [Zustand SSE 연결 종료]`);
      current.close();

      if (typeof window !== 'undefined') {
        delete (window as any).SSE_GLOBAL;
      }

      set({ eventSource: null });
    }
  },

  getConnectionInfo: () => {
    const current = get().eventSource;
    return {
      isConnected: current !== null,
      url: current ? current.url : null,
      connectionCount: get().connectionCount,
      messageCount: get().messageCount,
      lastConnectedAt: get().lastConnectedAt,
      connectionsHistory: get().connectionsHistory,
    };
  }
}));
