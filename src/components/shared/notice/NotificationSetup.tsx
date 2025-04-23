// /src/app/_components/NotificationSetup.tsx
"use client";

import { useEffect } from "react";
import { sseManager } from "@/lib/sseManager";
import { useAuthStore } from "@/store";

export function NotificationSetup() {
  const { id, tenant_id } = useAuthStore((s) => ({
    id: s.id,
    tenant_id: s.tenant_id,
  }));

  console.log("🔔 [NotificationSetup] id:", id, "tenant_id:", tenant_id);
  

  useEffect(() => {
    console.log("🔔 [NotificationSetup] 마운트, id:", id, "tenant_id:", tenant_id);

    // 조건 빠진 부분 없이 모두 기록
    if (typeof window === "undefined") {
      console.warn("⚠️ [NotificationSetup] window is undefined");
      return;
    }
    if (!(window as any).EventSource) {
      console.warn("⚠️ [NotificationSetup] EventSource 미지원 브라우저");
      return;
    }
    if (!id || !tenant_id) {
      console.warn("⚠️ [NotificationSetup] 아직 auth 정보 없음 id:", id, "tenant_id:", tenant_id);
      return;
    }
    if ((window as any).__SSE_INITED__) {
      console.log("♻️ [NotificationSetup] 이미 init 됨, 스킵");
      return;
    }

    // 실제 연결
    console.log("🔌 [NotificationSetup] sseManager.init 호출 시작");
    sseManager.init(String(id), String(tenant_id));
    (window as any).__SSE_INITED__ = true;

    // subscribe
    const unsub = sseManager.subscribe((event) => {
      console.log("📩 [NotificationSetup] subscribe 받은 이벤트:", event);
      window.dispatchEvent(new CustomEvent("sse-message", { detail: event }));
    });

    return () => {
      unsub();
      console.log("🔕 [NotificationSetup] 구독 해제");
      // Note: 연결은 유지, 필요 시 sseManager.close() 직접 호출
    };
  }, [id, tenant_id]);

  return null;
}
