"use client";

import { useEffect, useState } from "react";
import { NotificationSetup } from "@/app/_components/NotificationSetup";
import { NotificationListener } from "@/app/_components/NotificationListener";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  const [isEnvLoaded, setIsEnvLoaded] = useState(false);

  useEffect(() => {
    const checkRuntimeEnv = () => {
      if (typeof window !== "undefined" && window.__RUNTIME_CONFIG__) {
        console.log("🛠️ RUNTIME_CONFIG 로딩됨:", window.__RUNTIME_CONFIG__);
        setIsEnvLoaded(true);
      } else {
        console.warn("⚠️ window.__RUNTIME_CONFIG__ 아직 로드 안됨");
      }
    };

    // 최초 1회 확인
    checkRuntimeEnv();

    // 혹시 모르니까 100ms 간격으로 재확인 (최대 1초 시도)
    const interval = setInterval(() => {
      if (window.__RUNTIME_CONFIG__) {
        setIsEnvLoaded(true);
        clearInterval(interval);
      }
    }, 100);

    // 1초 넘으면 중단
    setTimeout(() => {
      clearInterval(interval);
    }, 1000);
  }, []);

  if (!isEnvLoaded) {
    return <div className="text-center py-10 text-sm text-gray-500">환경 설정 로딩 중...</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
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
      {/* <NotificationSetup /> */}
      {/* <NotificationListener /> */}
      {/* <AppNotificationSetup /> */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
