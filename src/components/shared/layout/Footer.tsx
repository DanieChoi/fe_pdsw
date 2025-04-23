// 'use client';

// import { useState, useEffect, useCallback, useRef } from "react";
// import { ChevronUp, ChevronDown, Bell, BellOff, Trash } from "lucide-react";
// import { debounce, isEqual } from 'lodash';
// import { useAuthStore, useMainStore } from '@/store';
// import { Resizable } from "re-resizable";
// import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
// import { useEnvironmentStore } from "@/store/environmentStore";
// import { toast, initToasts } from "./CustomToast";
// import { useApiForGetTreeMenuDataForSideMenu } from "@/features/auth/hooks/useApiForGetTreeMenuDataForSideMenu";
// import { useApiForGetTreeDataForCampaignGroupTab } from "@/features/campaignManager/hooks/useApiForGetTreeDataForCampaignGroupTab";
// import { useSSEStore } from "@/store/useSSEStore";
// import { useFooterDataProcessor } from "./utils/footer_dataset";

// export type FooterDataType = {
//   time: string;
//   type: string;
//   message: string;
// };

// export interface FooterProps {
//   footerHeight: number;      // 열려 있을 때 푸터의 높이(px)
//   startResizing?: () => void; // 드래그로 푸터 높이를 조절하기 위한 함수
//   onToggleDrawer?: (isOpen: boolean) => void; // 부모 컴포넌트에 열림/닫힘 상태 전달
//   onResizeHeight?: (height: number) => void; // 리사이즈된 높이를 부모 컴포넌트에 전달
//   onResizeStart?: () => void; // 리사이즈 시작 이벤트
//   onResizeEnd?: (height: number) => void; // 리사이즈 종료 이벤트 - height 매개변수 추가
// }

// export default function Footer({
//   footerHeight,
//   onToggleDrawer,
//   onResizeHeight,
//   onResizeStart,
//   onResizeEnd
// }: FooterProps) {
//   const [isExpanded, setIsExpanded] = useState(false);   // D(1단) / W(2단) 모드 토글
//   const [isDrawerOpen, setIsDrawerOpen] = useState(true); // 푸터 열기/닫기 토글
//   const [footerDataList, setFooterDataList] = useState<FooterDataType[]>([]);
//   const [currentHeight, setCurrentHeight] = useState(footerHeight);
//   const { id, tenant_id, role_id } = useAuthStore();
//   const { campaigns, setCampaigns } = useMainStore();
//   const { useAlramPopup } = useEnvironmentStore();
//   const { initSSE, closeSSE, getConnectionInfo } = useSSEStore();

//   const { invalidateTreeMenuData } = useApiForGetTreeMenuDataForSideMenu();
//   const { invalidateCampaignGroupTreeData } = useApiForGetTreeDataForCampaignGroupTab();

//   const lastProcessedMessageRef = useRef<string | null>(null);
//   const processEventDataRef = useRef<any>(null);

//   const debouncedInvalidate = useCallback(
//     debounce(() => {
//       invalidateTreeMenuData();
//       invalidateCampaignGroupTreeData();
//     }, 500),
//     [invalidateTreeMenuData, invalidateCampaignGroupTreeData]
//   );

//   useEffect(() => {
//     initToasts();
//   }, []);

//   // 부모 컴포넌트에 열림/닫힘 상태 변경 알림
//   useEffect(() => {
//     if (onToggleDrawer) {
//       onToggleDrawer(isDrawerOpen);
//     }
//   }, [isDrawerOpen, onToggleDrawer]);

//   // D(1단) <-> W(2단) 전환
//   const toggleExpanded = () => {
//     setIsExpanded((prev) => !prev);
//     // 만약 닫혀 있었다면(32px 상태) W 모드 누를 때 자동 열기 (원치 않으면 제거)
//     if (!isDrawerOpen) {
//       setIsDrawerOpen(true);
//       if (onToggleDrawer) {
//         onToggleDrawer(true);
//       }
//     }
//   };

//   // 열기/닫기
//   const toggleDrawer = () => {
//     const newState = !isDrawerOpen;
//     setIsDrawerOpen(newState);
//     if (onToggleDrawer) {
//       onToggleDrawer(newState);
//     }
//   };

//   // 알림 모두 비우기 기능
//   const handleClearNotifications = () => {
//     setFooterDataList([]);
//   };

//   //캠페인 정보 조회 api 호출
//   const { mutate: fetchMain } = useApiForMain({
//     onSuccess: (data) => {
//       setCampaigns(data.result_data);
//     }
//   });

//   // Helper function to add a message to footerDataList
//   const addMessageToFooterList = useCallback((time: string, type: string, message: string) => {
//     if (message !== '') {
//       setFooterDataList((prev) => [
//         {
//           time,
//           type,
//           message
//         },
//         ...prev.slice(0, 9) // 상위 10개만 보이게
//       ]);
//     }
//   }, []);

//   const logConnectionStatus = useCallback(() => {
//     const connectionInfo = getConnectionInfo();
//     console.log("📊 [SSE 연결 상태]", {
//       연결됨: connectionInfo.isConnected,
//       URL: connectionInfo.url,
//       총연결횟수: connectionInfo.connectionCount,
//       메시지수신횟수: connectionInfo.messageCount,
//       마지막연결시간: connectionInfo.lastConnectedAt,
//     });
//   }, [getConnectionInfo]);

//   // Initialize the hook for processing footer data
//   // Important: This must be after all the callback definitions to avoid dependency issues
//   const { processEventData } = useFooterDataProcessor(
//     campaigns,
//     fetchMain,
//     useAlramPopup,
//     debouncedInvalidate,
//     tenant_id,
//     addMessageToFooterList
//   );

//   // Store the latest processEventData function in a ref to avoid dependency cycles
//   useEffect(() => {
//     processEventDataRef.current = processEventData;
//   }, [processEventData]);

//   // Connection status logging
//   useEffect(() => {
//     // 브라우저 환경이고, 사용자 ID가 있는 경우에만 실행
//     if (typeof window !== 'undefined' && id !== '') {
//       // 10초마다 연결 상태 로깅
//       const statusInterval = setInterval(() => {
//         logConnectionStatus();
//       }, 10000);

//       return () => {
//         clearInterval(statusInterval);
//       };
//     }
//   }, [id, logConnectionStatus]);

//   // SSE 구독 코드 수정
//   useEffect(() => {
//     // 브라우저 환경인지 확인
//     if (typeof window !== 'undefined' && window.EventSource && id !== '') {
//       // 초기 연결 상태 로깅
//       console.log(`🔄 [SSE 연결 시도] 사용자 ID: ${id}, 테넌트 ID: ${tenant_id}`);

//       // SSE 이벤트 메시지 핸들러
//       const handleSSEMessage = (tempEventData: any) => {
//         try {
//           const { announce, command, data, kind, campaign_id } = tempEventData;

//           // 메시지 중복 체크를 위한 고유 ID 생성
//           const messageId = `${announce}_${command}_${campaign_id}_${JSON.stringify(data)}`;

//           // 이미 처리한 메시지인지 확인
//           if (lastProcessedMessageRef.current === messageId) {
//             console.log("🔄 [중복 메시지 감지] 처리 건너뜀:", messageId);
//             return;
//           }

//           // 메시지 ID 업데이트
//           lastProcessedMessageRef.current = messageId;

//           // Use the ref to get the latest process function
//           if (processEventDataRef.current) {
//             processEventDataRef.current(
//               announce,
//               command,
//               data,
//               kind,
//               campaign_id,
//               tempEventData
//             );
//           }
//         } catch (error) {
//           console.error("🚨 [SSE 메시지 처리 오류]", error);
//         }
//       };

//       // Zustand 스토어를 통해 SSE 연결 초기화
//       initSSE(id, tenant_id, handleSSEMessage);

//       // 연결 직후 상태 로깅
//       const timer = setTimeout(() => {
//         logConnectionStatus();
//       }, 1000);

//       // 컴포넌트 언마운트 시 연결 종료
//       return () => {
//         clearTimeout(timer);
//         console.log("🔌 [Footer 컴포넌트 언마운트] SSE 연결 종료");
//         closeSSE();
//       };
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [id, tenant_id, initSSE, closeSSE]);

//   // 높이 변경 핸들러
//   const handleResizeStop = (e: any, direction: any, ref: any, d: any) => {
//     const newHeight = currentHeight + d.height;
//     setCurrentHeight(newHeight);

//     if (onResizeHeight) {
//       onResizeHeight(newHeight);
//     }

//     if (onResizeEnd) {
//       onResizeEnd(newHeight);
//     }
//   };

//   return (
//     <Resizable
//       size={{
//         width: '100%',
//         height: isDrawerOpen ? currentHeight : 32
//       }}
//       minHeight={100}
//       maxHeight={500}
//       enable={{
//         top: isDrawerOpen,
//         right: false,
//         bottom: false,
//         left: false,
//         topRight: false,
//         bottomRight: false,
//         bottomLeft: false,
//         topLeft: false
//       }}
//       className={`
//         border-t text-sm text-gray-600 bg-[#FBFBFB] flex flex-col duration-300 ease-in-out group relative h-[1px] before:content-[''] before:absolute hover:before:bg-[#5BC2C1]
//         ${isExpanded ? "fixed left-0 right-0 bottom-0 z-50" : "relative"}
//       `}
//       onResizeStart={onResizeStart}
//       onResizeStop={handleResizeStop}
//     >
//       {/* 상단 바 영역 */}
//       <div className="flex-none pt-[5px] pb-[4px] px-[20px] border-b bg-white flex justify-between items-center">
//         <div className="flex items-center gap-1">
//           <span className="text-[13px] text-[#333]">현재 진행 상태 </span>
//           <span className="text-[12px] text-[#666] bg-gray-100 px-1 rounded">
//             {footerDataList.length > 0 ? (
//               <span className="text-[#666] bg-gray-100 px-1 rounded">
//                 {footerDataList.length}건
//               </span>
//             ) : (
//               <span className="text-[#666] bg-gray-100 px-1 rounded">
//                 0건
//               </span>
//             )}
//           </span>
//         </div>

//         <div className="flex items-center gap-2">
//           {useAlramPopup === 1 ? (
//             <>
//               <span title="알림 활성화">
//                 <Bell className="w-4 h-4 text-blue-500" />
//               </span>
//               <button onClick={handleClearNotifications} title="알림 모두 비우기">
//                 <Trash className="w-4 h-4 text-gray-500" />
//               </button>
//             </>
//           ) : (
//             <span title="알림 비활성화">
//               <BellOff className="w-4 h-4 text-gray-400" />
//             </span>
//           )}

//           {/* 열기/닫기 버튼 */}
//           <button
//             onClick={toggleDrawer}
//             className=""
//             title={isDrawerOpen ? "닫기" : "열기"}
//           >
//             {isDrawerOpen ? (
//               <ChevronDown className="w-4 h-4" />
//             ) : (
//               <ChevronUp className="w-4 h-4" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* 푸터 내부 콘텐츠: isDrawerOpen이 true일 때만 렌더링 */}
//       {isDrawerOpen && (
//         <div className="flex-1 flex overflow-hidden">
//           {/* D(1단) -> w-full, W(2단) -> w-1/2 + 오른쪽 테이블 */}
//           <div
//             className={`
//               ${isExpanded ? "w-1/2" : "w-full"}
//               overflow-auto py-[7px] px-[20px]
//               ${isExpanded ? "border-r" : ""}
//             `}
//           >
//             <table className="w-full text-sm">
//               <tbody>
//                 {footerDataList.map((log, index) => (
//                   <tr key={index}>
//                     <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
//                     <td className="whitespace-nowrap text-[13px] px-1 hidden">[{log.type}]</td>
//                     <td className="text-[13px]">{log.message}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* 2단(W) 모드일 때만 오른쪽 테이블 표시 */}
//           {isExpanded && (
//             <div className="w-1/2 overflow-auto py-[7px] px-[20px]">
//               <table className="w-full text-sm">
//                 <tbody>
//                   {footerDataList.map((log, index) => (
//                     <tr key={index}>
//                       <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
//                       <td className="whitespace-nowrap text-[13px] px-1 hidden">[{log.type}]</td>
//                       <td className="text-[13px]">{log.message}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       )}
//     </Resizable>
//   );
// }

'use client';

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronUp, ChevronDown, Bell, BellOff, Trash } from "lucide-react";
import { debounce } from 'lodash';
import { useAuthStore, useMainStore } from '@/store';
import { Resizable } from "re-resizable";
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useEnvironmentStore } from "@/store/environmentStore";
import { toast, initToasts } from "./CustomToast";
import { useApiForGetTreeMenuDataForSideMenu } from "@/features/auth/hooks/useApiForGetTreeMenuDataForSideMenu";
import { useApiForGetTreeDataForCampaignGroupTab } from "@/features/campaignManager/hooks/useApiForGetTreeDataForCampaignGroupTab";
import { useSSEStore } from "@/store/useSSEStore";
import { useFooterDataProcessor } from "./utils/footer_dataset";

export type FooterDataType = {
  time: string;
  type: string;
  message: string;
};

export interface FooterProps {
  footerHeight: number;      // 열려 있을 때 푸터의 높이(px)
  startResizing?: () => void; // 드래그로 푸터 높이를 조절하기 위한 함수
  onToggleDrawer?: (isOpen: boolean) => void; // 부모 컴포넌트에 열림/닫힘 상태 전달
  onResizeHeight?: (height: number) => void; // 리사이즈된 높이를 부모 컴포넌트에 전달
  onResizeStart?: () => void; // 리사이즈 시작 이벤트
  onResizeEnd?: (height: number) => void; // 리사이즈 종료 이벤트 - height 매개변수 추가
}

export default function Footer({
  footerHeight,
  onToggleDrawer,
  onResizeHeight,
  onResizeStart,
  onResizeEnd
}: FooterProps) {
  const [isExpanded, setIsExpanded] = useState(false);   // D(1단) / W(2단) 모드 토글
  const [isDrawerOpen, setIsDrawerOpen] = useState(true); // 푸터 열기/닫기 토글
  const [footerDataList, setFooterDataList] = useState<FooterDataType[]>([]);
  const [currentHeight, setCurrentHeight] = useState(footerHeight);
  const { id, tenant_id, role_id } = useAuthStore();
  const { campaigns, setCampaigns } = useMainStore();
  const { useAlramPopup } = useEnvironmentStore();
  
  // 향상된 SSE 스토어 사용
  const { 
    initSSE, 
    closeSSE, 
    getConnectionInfo,
    isConnected: sseConnected
  } = useSSEStore();

  const { invalidateTreeMenuData } = useApiForGetTreeMenuDataForSideMenu();
  const { invalidateCampaignGroupTreeData } = useApiForGetTreeDataForCampaignGroupTab();

  const lastProcessedMessageRef = useRef<string | null>(null);
  const processEventDataRef = useRef<any>(null);
  const sseInitializedRef = useRef<boolean>(false);

  const debouncedInvalidate = useCallback(
    debounce(() => {
      invalidateTreeMenuData();
      invalidateCampaignGroupTreeData();
    }, 500),
    [invalidateTreeMenuData, invalidateCampaignGroupTreeData]
  );

  useEffect(() => {
    initToasts();
  }, []);

  // 부모 컴포넌트에 열림/닫힘 상태 변경 알림
  useEffect(() => {
    if (onToggleDrawer) {
      onToggleDrawer(isDrawerOpen);
    }
  }, [isDrawerOpen, onToggleDrawer]);

  // D(1단) <-> W(2단) 전환
  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
    // 만약 닫혀 있었다면(32px 상태) W 모드 누를 때 자동 열기 (원치 않으면 제거)
    if (!isDrawerOpen) {
      setIsDrawerOpen(true);
      if (onToggleDrawer) {
        onToggleDrawer(true);
      }
    }
  };

  // 열기/닫기
  const toggleDrawer = () => {
    const newState = !isDrawerOpen;
    setIsDrawerOpen(newState);
    if (onToggleDrawer) {
      onToggleDrawer(newState);
    }
  };

  // 알림 모두 비우기 기능
  const handleClearNotifications = () => {
    setFooterDataList([]);
  };

  //캠페인 정보 조회 api 호출
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      setCampaigns(data.result_data);
    }
  });

  // Helper function to add a message to footerDataList - memoized to prevent unnecessary re-renders
  const addMessageToFooterList = useCallback((time: string, type: string, message: string) => {
    if (message !== '') {
      setFooterDataList((prev) => [
        {
          time,
          type,
          message
        },
        ...prev.slice(0, 9) // 상위 10개만 보이게
      ]);
    }
  }, []);

  // 연결 상태 로깅 함수 - memoized
  const logConnectionStatus = useCallback(() => {
    const connectionInfo = getConnectionInfo();
    console.log("📊 [SSE 연결 상태]", {
      연결됨: connectionInfo.isConnected,
      URL: connectionInfo.url,
      총연결횟수: connectionInfo.connectionCount,
      메시지수신횟수: connectionInfo.messageCount,
      마지막연결시간: connectionInfo.lastConnectedAt,
    });
  }, [getConnectionInfo]);

  // SSE 메시지 처리기 - memoized
  const handleSSEMessage = useCallback((tempEventData: any) => {
    try {
      const { announce, command, data, kind, campaign_id } = tempEventData;

      // 메시지 중복 체크를 위한 고유 ID 생성
      const messageId = `${announce}_${command}_${campaign_id}_${JSON.stringify(data)}`;

      // 이미 처리한 메시지인지 확인
      if (lastProcessedMessageRef.current === messageId) {
        console.log("🔄 [중복 메시지 감지] 처리 건너뜀:", messageId);
        return;
      }

      // 메시지 ID 업데이트
      lastProcessedMessageRef.current = messageId;

      // Use the ref to get the latest process function
      if (processEventDataRef.current) {
        processEventDataRef.current(
          announce,
          command,
          data,
          kind,
          campaign_id,
          tempEventData
        );
      }
    } catch (error) {
      console.error("🚨 [SSE 메시지 처리 오류]", error);
    }
  }, []);

  // Initialize the hook for processing footer data
  // Important: This must be after all the callback definitions to avoid dependency issues
  const { processEventData } = useFooterDataProcessor(
    campaigns,
    fetchMain,
    useAlramPopup,
    debouncedInvalidate,
    tenant_id,
    addMessageToFooterList
  );

  // Store the latest processEventData function in a ref to avoid dependency cycles
  useEffect(() => {
    processEventDataRef.current = processEventData;
  }, [processEventData]);

  // Connection status logging at interval
  useEffect(() => {
    // 브라우저 환경이고, 사용자 ID가 있는 경우에만 실행
    if (typeof window !== 'undefined' && id !== '') {
      // 10초마다 연결 상태 로깅
      const statusInterval = setInterval(() => {
        logConnectionStatus();
      }, 10000);

      return () => {
        clearInterval(statusInterval);
      };
    }
  }, [id, logConnectionStatus]);

  // SSE 연결 설정 - 컴포넌트 마운트시 한 번만 초기화
  useEffect(() => {
    // 브라우저 환경인지 확인 및 사용자 ID 확인
    if (typeof window !== 'undefined' && window.EventSource && id !== '' && !sseInitializedRef.current) {
      // 초기 연결 상태 로깅
      console.log(`🔄 [SSE 연결 초기화] 사용자 ID: ${id}, 테넌트 ID: ${tenant_id}`);
      
      // SSE 연결 초기화 (Zustand 스토어를 통해)
      initSSE(id, tenant_id, handleSSEMessage);
      
      // 초기화 완료 플래그 설정
      sseInitializedRef.current = true;
      
      // 연결 직후 상태 로깅
      const timer = setTimeout(() => {
        logConnectionStatus();
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [id, tenant_id, initSSE, handleSSEMessage, logConnectionStatus]);

  // 컴포넌트 언마운트 시 연결 종료 방지 (페이지 이동 시 연결 유지)
  // SSE 연결은 앱 종료 시에만 종료하거나, 명시적으로 종료해야 할 때만 종료합니다.
  useEffect(() => {
    return () => {
      // 여기서는 closeSSE()를 호출하지 않음 - 연결을 유지하기 위해
      console.log("🔌 [Footer 컴포넌트 언마운트] SSE 연결 유지");
    };
  }, []);

  // 브라우저 종료 시 SSE 연결 종료를 위한 이벤트 리스너
  useEffect(() => {
    const handleBeforeUnload = () => {
      console.log("🌐 [브라우저 종료] SSE 연결 종료");
      closeSSE();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [closeSSE]);

  // 높이 변경 핸들러
  const handleResizeStop = (e: any, direction: any, ref: any, d: any) => {
    const newHeight = currentHeight + d.height;
    setCurrentHeight(newHeight);

    if (onResizeHeight) {
      onResizeHeight(newHeight);
    }

    if (onResizeEnd) {
      onResizeEnd(newHeight);
    }
  };

  // SSE 연결 상태 표시
  const ConnectionStatusIndicator = () => (
    <div 
      className={`w-2 h-2 rounded-full mr-1 ${sseConnected ? 'bg-green-500' : 'bg-red-500'}`} 
      title={sseConnected ? "SSE 연결됨" : "SSE 연결 안됨"}
    />
  );

  return (
    <Resizable
      size={{
        width: '100%',
        height: isDrawerOpen ? currentHeight : 32
      }}
      minHeight={100}
      maxHeight={500}
      enable={{
        top: isDrawerOpen,
        right: false,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false
      }}
      className={`
        border-t text-sm text-gray-600 bg-[#FBFBFB] flex flex-col duration-300 ease-in-out group relative h-[1px] before:content-[''] before:absolute hover:before:bg-[#5BC2C1]
        ${isExpanded ? "fixed left-0 right-0 bottom-0 z-50" : "relative"}
      `}
      onResizeStart={onResizeStart}
      onResizeStop={handleResizeStop}
    >
      {/* 상단 바 영역 */}
      <div className="flex-none pt-[5px] pb-[4px] px-[20px] border-b bg-white flex justify-between items-center">
        <div className="flex items-center gap-1">
          <ConnectionStatusIndicator />
          <span className="text-[13px] text-[#333]">현재 진행 상태 </span>
          <span className="text-[12px] text-[#666] bg-gray-100 px-1 rounded">
            {footerDataList.length > 0 ? (
              <span className="text-[#666] bg-gray-100 px-1 rounded">
                {footerDataList.length}건
              </span>
            ) : (
              <span className="text-[#666] bg-gray-100 px-1 rounded">
                0건
              </span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {useAlramPopup === 1 ? (
            <>
              <span title="알림 활성화">
                <Bell className="w-4 h-4 text-blue-500" />
              </span>
              <button onClick={handleClearNotifications} title="알림 모두 비우기">
                <Trash className="w-4 h-4 text-gray-500" />
              </button>
            </>
          ) : (
            <span title="알림 비활성화">
              <BellOff className="w-4 h-4 text-gray-400" />
            </span>
          )}

          {/* 열기/닫기 버튼 */}
          <button
            onClick={toggleDrawer}
            className=""
            title={isDrawerOpen ? "닫기" : "열기"}
          >
            {isDrawerOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* 푸터 내부 콘텐츠: isDrawerOpen이 true일 때만 렌더링 */}
      {isDrawerOpen && (
        <div className="flex-1 flex overflow-hidden">
          {/* D(1단) -> w-full, W(2단) -> w-1/2 + 오른쪽 테이블 */}
          <div
            className={`
              ${isExpanded ? "w-1/2" : "w-full"}
              overflow-auto py-[7px] px-[20px]
              ${isExpanded ? "border-r" : ""}
            `}
          >
            <table className="w-full text-sm">
              <tbody>
                {footerDataList.map((log, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
                    <td className="whitespace-nowrap text-[13px] px-1 hidden">[{log.type}]</td>
                    <td className="text-[13px]">{log.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      )}
    </Resizable>
  );
}