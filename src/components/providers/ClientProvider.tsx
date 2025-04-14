// // C:\nproject\fe_pdsw\src\components\providers\ClientProvider.tsx
// "use client";

// import { NotificationSetup } from "@/app/_components/NotificationSetup";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // ✅ QueryClient를 전역에서 관리하도록 설정
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 60 * 1000,
//     },
//   },
// });

// export default function ClientProvider({ children }: { children: React.ReactNode }) {
//   return (
//     <QueryClientProvider client={queryClient}>
//       {children}

//       {/* Toast 메시지 */}
//       <ToastContainer
//         position="top-center"
//         autoClose={2000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       /> 
//       <NotificationSetup />

//       {/* React Query 개발자 도구 */}
//       {/* <ReactQueryDevtools initialIsOpen={false} /> */}
//     </QueryClientProvider>
//   );
// }


"use client";

import { NotificationSetup } from "@/app/_components/NotificationSetup";
import { NotificationListener } from "@/app/_components/NotificationListener"; // 추가
import { AppNotificationSetup } from "@/components/shared/CustomNoticePopUpForBrowser"; // 추가
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// QueryClient를 전역에서 관리하도록 설정
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {/* Toast 메시지 */}
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
      <NotificationListener /> {/* 추가 */}
      <AppNotificationSetup /> {/* 추가: 인앱 알림 컨테이너 */}

      {/* React Query 개발자 도구 */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}