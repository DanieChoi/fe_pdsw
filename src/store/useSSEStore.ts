import { create } from "zustand";

interface SSEStore {
  eventSource: EventSource | null;
  connectionCount: number;
  messageCount: number;
  lastConnectedAt: string | null;
  connectionsHistory: string[];
  initSSE: (id: string, tenant_id: number, onMessage: (data: any) => void) => void;
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
    const current = get().eventSource;
    const connectionCount = get().connectionCount;
    const connectionsHistory = get().connectionsHistory;
  
    // 현재 연결 상태 로깅
    console.log(`💡 [SSE 상태 확인] 연결 횟수: ${connectionCount}, 기존 연결 여부: ${current ? "존재함" : "없음"}`);
  
    if (current) {
      console.log("🛑 SSE 이미 연결되어 있음, 재연결 생략");
      // 기존 연결 정보 로깅
      console.log(`🔍 [SSE 현재 연결] URL: ${current.url}`);
      return;
    }
  
    const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
    const url = `${DOMAIN}/notification/${tenant_id}/subscribe/${id}`;
    const es = new EventSource(url);
    
    // 새 연결 생성 시점 기록
    const now = new Date();
    const connectionTimestamp = now.toISOString();
    const connectionInfo = `${connectionTimestamp} - ${url} (사용자 ID: ${id})`;
    
    console.log(`🟢 [Zustand SSE 연결 #${connectionCount + 1} 생성]: ${url}`);
    
    // 연결 이력에 추가
    set(state => ({ 
      eventSource: es,
      connectionCount: state.connectionCount + 1,
      lastConnectedAt: connectionTimestamp,
      connectionsHistory: [...state.connectionsHistory, connectionInfo]
    }));
  
    es.addEventListener("open", () => {
      console.log(`✅ [SSE 연결 #${get().connectionCount} 성공] ${url}`);
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
      console.error(`🚨 [Zustand SSE 에러 발생 #${get().connectionCount}]`, err);
      // 연결 복구 로직이 필요하면 여기에 추가
    };
  },  

  closeSSE: () => {
    const current = get().eventSource;
    if (current) {
      console.log(`🧹 [Zustand SSE 연결 #${get().connectionCount} 종료]`);
      current.close();
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
      connectionsHistory: get().connectionsHistory
    };
  }
}));