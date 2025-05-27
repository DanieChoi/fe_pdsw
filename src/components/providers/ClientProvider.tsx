
"use client";

import { useEffect, useState } from "react";
import { Settings } from "lucide-react";
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

// 톱니바퀴(Settings) 아이콘 로더
const SettingsLoader = () => (
  <div className="flex items-center justify-center py-10">
    <Settings className="w-5 h-5 text-indigo-500 animate-spin mr-3" />
    <span className="text-sm text-gray-600">환경 설정 로딩중...</span>
  </div>
);

// 대안 1: 그라데이션 바 로더 (GitHub/Linear 스타일)
const GradientBarLoader = () => (
  <div className="flex flex-col items-center justify-center py-10 space-y-3">
    <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
      <div className="w-full h-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-full animate-pulse transform scale-x-75 origin-left"></div>
    </div>
    <span className="text-sm text-gray-600">환경 설정 로딩중...</span>
  </div>
);

// 대안 2: 웨이브 도트 애니메이션 (Discord 스타일)
const WaveDotsLoader = () => (
  <div className="flex items-center justify-center py-10">
    <div className="flex space-x-1 mr-4">
      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms', animationDuration: '1400ms' }}></div>
      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce" style={{ animationDelay: '200ms', animationDuration: '1400ms' }}></div>
      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce" style={{ animationDelay: '400ms', animationDuration: '1400ms' }}></div>
      <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-red-500 rounded-full animate-bounce" style={{ animationDelay: '600ms', animationDuration: '1400ms' }}></div>
    </div>
    <span className="text-sm text-gray-600">환경 설정 로딩중...</span>
  </div>
);

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
    // ⚙️ 톱니바퀴(Settings) 아이콘 로더 적용!
    return <SettingsLoader />;
    
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