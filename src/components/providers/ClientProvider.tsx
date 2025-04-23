// src/components/providers/ClientProvider.tsx
"use client";

import { useEffect, useState } from "react";
import { NotificationSetup } from "@/app/_components/NotificationSetup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// --- 👇 [추가] 필요한 스토어 및 훅 import ---
import { useSSEStore } from "@/store/useSSEStore";
import { useAuthStore } from "@/store"; // 로그인 상태 확인 등 필요시

// --- 👇 [추가] SSE 메시지 핸들러 정의 (login.ts 와 동일 로직) ---
// 이 함수는 전역 이벤트 디스패치 역할
const appSseMessageHandler = (eventData: any) => { // eventData 타입은 필요시 더 구체화
  const sseEvent = new CustomEvent('sse-message', { detail: eventData });
  window.dispatchEvent(sseEvent);
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

// --- SSE 연결 복구를 담당하는 컴포넌트 ---
const SSEManager = () => {
  // --- 👇 [수정] Zustand 상태를 개별적으로 선택하여 무한 루프 경고 방지 ---
  // useSSEStore에서 필요한 상태와 함수를 개별적으로 가져옵니다.
  const userId = useSSEStore(state => state.userId);
  const tenantId = useSSEStore(state => state.tenantId);
  const isConnected = useSSEStore(state => state.isConnected);
  const restoreConnection = useSSEStore(state => state.restoreConnection);

  // 선택적: 로그인 상태 확인
  const isLoggedIn = !!useAuthStore(state => state.id);

  useEffect(() => {
    // 복구 조건:
    // 1. 로그인 상태여야 함 (선택적이지만 권장)
    // 2. Zustand 스토어에서 userId와 tenantId가 복구되었어야 함
    // 3. 현재 SSE 연결이 활성 상태가 아니어야 함
    if (isLoggedIn && userId && tenantId && !isConnected) {
      // 약간의 지연을 주어 Zustand hydration이 완료될 시간을 확보 (선택적)
      const timerId = setTimeout(() => {
        console.log("🔄 [SSEManager] Attempting SSE connection restore...");
        restoreConnection(appSseMessageHandler); // 핸들러 함수 전달
      }, 500); // 0.5초 지연 (환경에 따라 조절)

      return () => clearTimeout(timerId); // cleanup 함수에서 타이머 제거
    } else {
       // console.log("ℹ️ [SSEManager] SSE restore conditions not met.", { isLoggedIn, userId, tenantId, isConnected });
    }

  // 의존성 배열: 이 값들이 변경될 때마다 effect 재실행 고려
  }, [isLoggedIn, userId, tenantId, isConnected, restoreConnection]);

  // 이 컴포넌트는 UI를 렌더링하지 않음
  return null;
};


// --- ClientProvider 컴포넌트 ---
export default function ClientProvider({ children }: { children: React.ReactNode }) {
  const [isEnvLoaded, setIsEnvLoaded] = useState(false);

  useEffect(() => {
    // --- 기존 env 로딩 로직 유지 ---
    const checkRuntimeEnv = () => {
      if (typeof window !== "undefined" && window.__RUNTIME_CONFIG__) {
        console.log("🛠️ RUNTIME_CONFIG 로딩됨:", window.__RUNTIME_CONFIG__);
        setIsEnvLoaded(true);
      } else {
        // console.warn("⚠️ window.__RUNTIME_CONFIG__ 아직 로드 안됨");
      }
    };

    let interval: NodeJS.Timeout | null = null;
    let timeout: NodeJS.Timeout | null = null;

    // window 객체와 __RUNTIME_CONFIG__가 즉시 사용 가능하지 않을 수 있으므로 확인 로직 추가
    if (typeof window !== "undefined") {
      if (!window.__RUNTIME_CONFIG__) {
          checkRuntimeEnv(); // 최초 확인

          interval = setInterval(() => {
            if (window.__RUNTIME_CONFIG__) {
              setIsEnvLoaded(true);
              if(interval) clearInterval(interval);
              if(timeout) clearTimeout(timeout);
            }
          }, 100); // 100ms 간격 확인

          timeout = setTimeout(() => {
            if(interval) clearInterval(interval);
            if (!window.__RUNTIME_CONFIG__) {
                 console.error("🚨 RUNTIME_CONFIG 로딩 실패 (1초 초과)");
                 // 필요한 경우 여기서 로딩 실패 처리
            }
          }, 1000); // 1초 후 타임아웃
      } else {
           setIsEnvLoaded(true); // 이미 로드된 경우
      }
    }


    // Cleanup 함수: 컴포넌트 언마운트 시 인터벌/타임아웃 제거
    return () => {
      if(interval) clearInterval(interval);
      if(timeout) clearTimeout(timeout);
    };
  }, []); // 마운트 시 1회 실행

  // 환경 설정 로딩 중 UI
  if (!isEnvLoaded) {
    return <div className="text-center py-10 text-sm text-gray-500">환경 설정 로딩 중...</div>;
  }

  // 환경 설정 로드 완료 후 실제 컨텐츠 렌더링
  return (
    <QueryClientProvider client={queryClient}>
      {/* 👇 SSEManager 컴포넌트 렌더링 (SSE 연결 복구 시도) */}
      <SSEManager />

      {children}

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <NotificationSetup />
      {/* Other global components or providers */}
    </QueryClientProvider>
  );
}