// src/providers/SSEProvider.tsx
"use client";

import { ReactNode, useCallback } from "react";
import useSharedEventSource from "@/hooks/useSharedEventSource";
import { useSSEStore } from "@/store/useSSEStore";

interface SSEProviderProps {
  id: string;          // 로그인한 user_id
  tenantId: number;    // 로그인한 tenant_id
  children: ReactNode;
}

export default function SSEProvider({
  id,
  tenantId,
  children,
}: SSEProviderProps) {
  /* --------------------------------------------------
     1)  환경변수에서 API 도메인 읽기
  -------------------------------------------------- */
  const DOMAIN = process.env.NEXT_PUBLIC_API_URL!;
  const url = `${DOMAIN}/notification/${tenantId}/subscribe/${id}`;

  /* --------------------------------------------------
     2)  Zustand 스토어에서 messageCount만 갱신
         (setState를 직접 호출해도 OK)
  -------------------------------------------------- */
  const incrementMessageCount = useCallback(() => {
    useSSEStore.setState((state) => ({
      messageCount: state.messageCount + 1,
    }));
  }, []);

  /* --------------------------------------------------
     3)  SSE 수신 콜백
  -------------------------------------------------- */
  const handleSSE = useCallback(
    (raw: string) => {
      try {
        const data = JSON.parse(raw);

        /* Footer(또는 다른 컴포넌트)로 브로드캐스트 */
        window.dispatchEvent(
          new CustomEvent("sse-message", { detail: data }),
        );

        /* messageCount 1 증가 */
        incrementMessageCount();
      } catch (err) {
        console.error("🚨 [SSEProvider] JSON 파싱 실패:", err);
      }
    },
    [incrementMessageCount],
  );

  /* --------------------------------------------------
     4)  연결 상태 변화(선택사항)
  -------------------------------------------------- */
  const handleStatus = useCallback((connected: boolean) => {
    useSSEStore.setState({ isConnected: connected });
  }, []);

  /* --------------------------------------------------
     5)  Shared Worker 기반 EventSource 구독
  -------------------------------------------------- */
  useSharedEventSource(url, handleSSE, handleStatus);

  return <>{children}</>;
}
