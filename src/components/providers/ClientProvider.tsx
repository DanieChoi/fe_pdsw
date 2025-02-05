"use client";

import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCounselorStoreForSideBar } from "@/store/counselorStoreForSideBar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  const { updateTreeData } = useCounselorStoreForSideBar();

  useEffect(() => {
    /** 
     * ✅ WebSocket 연결 (Redis Pub/Sub 구독) - 현재 비활성화 (주석 처리)
     * - 현재는 기존 API 요청 기반의 트리 데이터 갱신 방식 유지
     * - 추후 Redis 기반 실시간 업데이트 적용 시 활성화 가능
     */

    // const socket = new WebSocket("wss://your-backend/ws/counselor-status");

    // socket.onopen = () => {
    //   console.log("✅ WebSocket Connected for Counselor Tree");
    // };

    // socket.onmessage = (event) => {
    //   try {
    //     const updatedData = JSON.parse(event.data);
    //
    //     // 🔽 여기서 트리 데이터를 업데이트해야 함
    //     updateTreeData(updatedData);
    //
    //     console.log("🔄 Counselor Tree Updated:", updatedData);
    //   } catch (error) {
    //     console.error("❌ Error processing WebSocket message:", error);
    //   }
    // };

    // socket.onclose = () => {
    //   console.log("❌ WebSocket Disconnected");
    // };

    // return () => {
    //   socket.close();
    // };

  }, [updateTreeData]);

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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
