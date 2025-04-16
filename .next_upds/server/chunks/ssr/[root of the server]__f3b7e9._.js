module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/_components/NotificationSetup.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/components/NotificationSetup.tsx
__turbopack_esm__({
    "NotificationSetup": (()=>NotificationSetup),
    "showPushNotification": (()=>showPushNotification)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const NotificationSetup = ()=>{
    const [swRegistration, setSwRegistration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const registerSWAndRequestPermission = async ()=>{
            if ("serviceWorker" in navigator && "PushManager" in window) {
                try {
                    // 기존 서비스 워커 등록 해제
                    const registrations = await navigator.serviceWorker.getRegistrations();
                    for (const registration of registrations){
                        await registration.unregister();
                        console.log("기존 SW 등록 해제됨");
                    }
                    // 새 서비스 워커 등록
                    const registration = await navigator.serviceWorker.register("/sw.js", {
                        scope: "/"
                    });
                    console.log("SW 등록 완료", registration);
                    setSwRegistration(registration);
                    // 서비스 워커 상태 확인
                    if (registration.active) {
                        console.log("SW가 이미 활성화됨");
                    } else if (registration.installing) {
                        console.log("SW 설치 중...");
                        const installingWorker = registration.installing;
                        installingWorker?.addEventListener("statechange", ()=>{
                            console.log("SW 상태 변경:", installingWorker.state);
                            if (installingWorker.state === "activated") {
                                console.log("SW 활성화 완료!");
                            }
                        });
                    } else if (registration.waiting) {
                        console.log("SW 대기 중...");
                    }
                    // 알림 권한 요청
                    const permission = await Notification.requestPermission();
                    console.log("알림 권한 상태:", permission);
                    if (permission !== "granted") {
                        console.warn("알림 권한이 필요합니다.");
                    }
                } catch (err) {
                    console.error("SW 등록 실패", err);
                }
            } else {
                console.warn("이 브라우저는 서비스 워커 또는 푸시 알림을 지원하지 않습니다.");
            }
        };
        registerSWAndRequestPermission();
    }, []);
    return null;
};
const showPushNotification = async (title, body, tag = "campaign-event")=>{
    console.log("[showPushNotification] 호출됨", {
        title,
        body,
        tag
    });
    try {
        // 권한 확인 및 요청
        if (Notification.permission !== "granted") {
            console.warn("[showPushNotification] 알림 권한이 없음");
            const permission = await Notification.requestPermission();
            if (permission !== "granted") {
                console.error("[showPushNotification] 알림 권한 거부됨");
                return;
            }
        }
        // 서비스 워커 등록 확인
        const reg = await navigator.serviceWorker.getRegistration();
        console.log("[showPushNotification] 서비스 워커 등록 정보:", reg);
        if (!reg) {
            console.error("[showPushNotification] 등록된 서비스 워커가 없음");
            return;
        }
        // 활성화 확인
        if (!reg.active) {
            console.warn("[showPushNotification] 서비스 워커가 활성화되지 않음, 대기 중...");
            await new Promise((resolve)=>setTimeout(resolve, 1500));
            const updatedReg = await navigator.serviceWorker.getRegistration();
            if (!updatedReg?.active) {
                console.error("[showPushNotification] 서비스 워커 활성화 타임아웃");
                return;
            }
        }
        // 알림 표시
        await reg.showNotification(title, {
            body,
            icon: "/icon.png",
            tag,
            vibrate: [
                200,
                100,
                200
            ],
            requireInteraction: true
        }); // vibrate 허용을 위해 타입 단언
        console.log("[showPushNotification] 알림 호출 성공");
    } catch (err) {
        console.error("[showPushNotification] 에러 발생", err);
    }
};
}}),
"[project]/src/components/providers/ClientProvider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
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
__turbopack_esm__({
    "default": (()=>ClientProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$NotificationSetup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/NotificationSetup.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// QueryClient를 전역에서 관리하도록 설정
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000
        }
    }
});
function ClientProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastContainer"], {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                newestOnTop: true,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true
            }, void 0, false, {
                fileName: "[project]/src/components/providers/ClientProvider.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$NotificationSetup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationSetup"], {}, void 0, false, {
                fileName: "[project]/src/components/providers/ClientProvider.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/providers/ClientProvider.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__f3b7e9._.js.map