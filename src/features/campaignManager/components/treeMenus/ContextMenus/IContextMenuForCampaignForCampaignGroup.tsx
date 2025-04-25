// "use client";

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { toast } from 'react-toastify';
// import Image from "next/image";
// import { Check, ChevronRight } from "lucide-react";
// import { cn } from "@/lib/utils";

// import { useTabStore } from "@/store/tabStore";
// import { useSideMenuCampaignGroupTabStore } from "@/store/storeForSideMenuCampaignGroupTab";
// import { useAvailableMenuStore } from "@/store/useAvailableMenuStore";
// import { useApiForCampaignBlacklistCount } from "@/features/listManager/hooks/useApiForCampaignBlacklistCount";
// import useApiForCampaignListDelete from "@/features/listManager/hooks/useApiForCampaignListDelete";
// import { useApiForCampaignStatusUpdate } from "@/features/campaignManager/hooks/useApiForCampaignStatusUpdate";
// import { useApiForMain } from "@/features/auth/hooks/useApiForMain";
// import { useMainStore } from "@/store/mainStore";
// import { useAuthStore } from "@/store/authStore";

// import IDialogButtonForCampaingDelete from "../dialog/IDialogButtonForCampaingDelete";
// import BlackListCountPopup from '@/features/campaignManager/components/popups/BlackListCountPopup';

// export type CampaignStatus = 'started' | 'pending' | 'stopped';

// export const getStatusIcon = (status?: string) => {
//   switch (status) {
//     case 'started':
//       return '/sidebar-menu/tree_play.svg';
//     case 'pending':
//       return '/sidebar-menu/tree_pause.svg';
//     case 'stopped':
//       return '/sidebar-menu/tree_stop.svg';
//     default:
//       return null;
//   }
// };

// // 인터페이스 정의
// interface ContextMenuForTreeNodeProps {
//   children: React.ReactNode;
//   item: {
//     id: any;
//     label: string;
//     type: any;
//     status: CampaignStatus;
//   };
//   onEdit?: () => void;
//   onMonitor?: () => void;
//   onHandleCampaignCopy?: () => void;
//   tenantIdForCampaignTab: any;
// }

// export const getStatusFromFlag = (flag?: number): CampaignStatus => {
//   switch (flag) {
//     case 1: return 'started';
//     case 2: return 'pending';
//     case 3: return 'stopped';
//     default: return 'stopped';
//   }
// };

// // 메뉴 구분선 컴포넌트
// const MenuSeparator = () => {
//   return <div className="h-px bg-gray-200 my-1" />;
// };

// // 메인 컴포넌트
// export function IContextMenuForCampaignForCampaignGroup({
//   children,
//   item,
//   onEdit,
//   onMonitor,
//   onHandleCampaignCopy,
//   tenantIdForCampaignTab,
// }: ContextMenuForTreeNodeProps) {
//   const menuRef = useRef<HTMLDivElement>(null);
//   const subMenuRef = useRef<HTMLDivElement>(null);
//   const isFolder = item.type === "folder";
//   const { simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu, setCampaignIdForCopyCampaign, addTab, addMultiTab } = useTabStore();

//   // Zustand 스토어에서 updateCampaignStatus 함수 가져오기
//   const { updateCampaignStatus, refetchTreeDataForCampaignGroupTab } = useSideMenuCampaignGroupTabStore();

//   // 권한 관리 스토어에서 사용 가능한 메뉴 ID 가져오기
//   const availableMenuIds = useAvailableMenuStore(
//     (state) => state.availableMenuIdsForCampaignGroupTabCampaign
//   );

//   const [isBlacklistPopupOpen, setIsBlacklistPopupOpen] = useState(false);
//   const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
//   const [currentStatus, setCurrentStatus] = useState<CampaignStatus>(item.status);
//   const [blackListCount, setBlackListCount] = useState<number>(0);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
//   const [hoveredItem, setHoveredItem] = useState<string | null>(null);
//   const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [menuWidth, setMenuWidth] = useState(120); // 메뉴 너비 상태 추가

//   const { tenant_id, session_key } = useAuthStore();

//   const {
//     setCampaigns,
//     selectedCampaign,
//     setSelectedCampaign
//   } = useMainStore();

//   // 컴포넌트가 마운트될 때 상태 초기화
//   useEffect(() => {
//     setCurrentStatus(item.status);
//   }, [item.status]);

//   // 메뉴 너비 측정 (메뉴가 열렸을 때)
//   useEffect(() => {
//     if (menuOpen && menuRef.current) {
//       setMenuWidth(menuRef.current.offsetWidth);
//     }
//   }, [menuOpen]);

//   const { mutate: fetchMain } = useApiForMain({
//     onSuccess: (data) => {
//       setCampaigns(data.result_data);
//       if (selectedCampaign) {
//         const updatedCampaign = data.result_data.find(
//           (campaign) => campaign.campaign_id === selectedCampaign.campaign_id
//         );
//         if (updatedCampaign) {
//           setSelectedCampaign(updatedCampaign);
//         }
//       }
//       // 데이터 리프레시 후 사이드 메뉴 트리 데이터도 업데이트
//       refetchTreeDataForCampaignGroupTab();
//     }
//   });

//   // 상태 관련 정보
//   const statusInfo = {
//     started: { label: "시작", color: "#22c55e" },
//     pending: { label: "멈춤", color: "#eab308" },
//     stopped: { label: "중지", color: "#ef4444" },
//   };

//   const updateCampaignStatusMutation = useApiForCampaignStatusUpdate({
//     onSuccess: () => {
//       console.log("캠페인 상태 업데이트");
//       fetchMain({
//         session_key: session_key,
//         tenant_id: tenant_id
//       });
//       setIsProcessing(false);
//     },
//     onError: (error) => {
//       toast.error(error.message || "상태 변경 중 오류가 발생했습니다.");
//       setIsProcessing(false);
//     },
//   });

//   const { mutate: deleteCampaignList } = useApiForCampaignListDelete({
//     onSuccess: () => {
//       toast.success("캠페인 리스트가 삭제되었습니다.");
//       refetchTreeDataForCampaignGroupTab();
//       setIsProcessing(false);
//     },
//     onError: (error) => {
//       toast.error(error?.message || "리스트 삭제 중 오류가 발생했습니다.");
//       setIsProcessing(false);
//     }
//   });

//   const handleContextMenu = useCallback((e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation(); // 버블링 방지

//     // 현재 처리 중이면 메뉴를 열지 않음
//     if (isProcessing) return;

//     // 기존에 열려 있는 메뉴 닫기
//     setActiveSubMenu(null);
//     setHoveredItem(null);

//     // 새 메뉴 위치 설정
//     setMenuPosition({ x: e.clientX, y: e.clientY });
//     setMenuOpen(true);
//   }, [isProcessing]);

//   const handleCampaignListDelete = useCallback((campaignId: any) => {
//     if (currentStatus !== 'stopped') {
//       toast.error("캠페인이 중지 상태일 때만 리스트를 삭제할 수 있습니다.");
//       return;
//     }
//     setIsProcessing(true);
//     deleteCampaignList(campaignId);
//     setMenuOpen(false);
//   }, [currentStatus, deleteCampaignList]);

//   const handleEditMenuClick = useCallback(() => {
//     if (onEdit) {
//       onEdit();
//       return;
//     }

//     simulateHeaderMenuClick(2);
//     setCampaignIdForUpdateFromSideMenu(item.id);
//     setMenuOpen(false);
//   }, [onEdit, simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu, item.id]);

//   const handleProgressInfoClick = useCallback((campaignId: any, campaignName: string) => {
//     const uniqueKey = `progress-info-${campaignId}-${Date.now()}`;

//     addMultiTab({
//       id: 21,
//       uniqueKey: uniqueKey,
//       title: `캠페인 진행정보 - ${campaignName}`,
//       icon: '',
//       href: '',
//       content: null,
//       campaignId: campaignId
//     });
//     setMenuOpen(false);
//   }, [addMultiTab]);

//   const handleRebroadcastClick = useCallback((campaignId: any) => {
//     setCampaignIdForUpdateFromSideMenu(campaignId);
//     addTab({
//       id: 20,
//       uniqueKey: '20',
//       title: '재발신 설정',
//       icon: '',
//       href: '',
//       content: null,
//     });
//     setMenuOpen(false);
//   }, [setCampaignIdForUpdateFromSideMenu, addTab]);

//   const handleMonitorClick = useCallback((tenantIdForCampaignTab: any, campaignId: any, campaignName: string) => {
//     console.log("캠페인 그룹에서 상담원 상태 모니터 클릭 했을때 tenantId : ", tenantIdForCampaignTab);

//     const uniqueKey = `monitor-${Date.now()}`;

//     addMultiTab({
//       id: 22,
//       uniqueKey: uniqueKey,
//       title: `상담사 상태 모니터 - ${campaignName}`,
//       icon: '',
//       href: '',
//       content: null,
//       campaignId: campaignId,
//       params: {
//         campaignId: campaignId,
//         campaignName: campaignName,
//         tenantId: tenantIdForCampaignTab,
//       }
//     });
//     setMenuOpen(false);
//   }, [addMultiTab]);

//   const handleCampaignCopy = useCallback(() => {
//     // if (onHandleCampaignCopy) {
//     //   onHandleCampaignCopy();
//     //   return;
//     // }

//     console.log(`캠페인 복사: ${item.label} (ID: ${item.id})`);
//     setCampaignIdForUpdateFromSideMenu(item.id);
//     setCampaignIdForCopyCampaign(item.id);
//     // setSelectedNodeType(item.type);
//     addTab({ id: 130, uniqueKey: "130", title: "캠페인 복사", icon: "", href: "", content: null });
//     setMenuOpen(false);
//   }, [onHandleCampaignCopy, item.label, item.id, setCampaignIdForUpdateFromSideMenu, setCampaignIdForCopyCampaign, addTab]);

//   const onCampaignDelete = useCallback((status: string) => {
//     if (status !== 'stopped') {
//       toast.error("캠페인이 중지 상태일 때만 삭제할 수 있습니다.");
//       return;
//     }

//     // 다이얼로그 열기
//     setIsDeleteDialogOpen(true);
//     setMenuOpen(false);
//   }, []);

//   const getStatusNumber = (status: CampaignStatus): number => {
//     switch (status) {
//       case 'started': return 1;
//       case 'pending': return 2;
//       case 'stopped': return 3;
//       default: return 0;
//     }
//   };

//   const handleStartClick = useCallback(async (status: CampaignStatus) => {
//     if (currentStatus === status || updateCampaignStatusMutation.isPending || isProcessing) {
//       return;
//     }

//     try {
//       setIsProcessing(true);

//       // 상태 번호 얻기
//       const statusNumber = getStatusNumber(status);

//       // API 호출
//       await updateCampaignStatusMutation.mutateAsync({
//         campaign_id: Number(item.id),
//         campaign_status: statusNumber
//       });

//       // 로컬 상태 업데이트
//       setCurrentStatus(status);

//       // 트리 데이터의 상태도 업데이트 (API 호출이 성공한 후)
//       updateCampaignStatus(item.id, statusNumber);

//       // 메뉴 닫기
//       setMenuOpen(false);
//       setActiveSubMenu(null);

//     } catch (error) {
//       console.error('Error changing campaign status:', error);
//       setIsProcessing(false);
//     }
//   }, [currentStatus, updateCampaignStatusMutation, item.id, updateCampaignStatus, isProcessing]);

//   // 캠페인 블랙리스트 건수 조회 API 호출
//   const { mutate: fetchCampaignBlacklistCount } = useApiForCampaignBlacklistCount({
//     onSuccess: (data) => {
//       setBlackListCount(data.result_data.blacklist_count);
//       setTimeout(() => {
//         setIsBlacklistPopupOpen(true);
//       }, 100);
//     }
//   });

//   // 캠페인 블랙리스트 건수 조회 클릭 이벤트
//   const handleBlacklistCountCheckClick = useCallback(() => {
//     fetchCampaignBlacklistCount(Number(item.id));
//     setMenuOpen(false);
//   }, [fetchCampaignBlacklistCount, item.id]);

//   // 메뉴 아이템 정의 (JSON의 SGC 값 기준)
//   const menuItems = [
//     // 첫 번째 그룹
//     {
//       id: 46,
//       group: 1,
//       key: "edit-campaign",
//       label: "캠페인 수정",
//       action: handleEditMenuClick
//     },
//     {
//       id: 47,
//       group: 1,
//       key: "start-division",
//       label: "시작구분",
//       isSubmenu: true,
//       renderLabel: () => (
//         <div className="flex items-center text-xs">
//           시작구분:
//           <span className="ml-1 flex items-center">
//             <div className="w-3 h-3 mr-1">
//               <Image
//                 src={getStatusIcon(currentStatus) || ''}
//                 alt={currentStatus}
//                 width={12}
//                 height={12}
//               />
//             </div>
//             {statusInfo[currentStatus].label}
//           </span>
//         </div>
//       ),
//       subItems: [
//         { id: 48, key: "start", label: "시작", status: "started" },
//         { id: 49, key: "pause", label: "멈춤", status: "pending" },
//         { id: 50, key: "stop", label: "중지", status: "stopped" }
//       ]
//     },
//     {
//       id: 51,
//       group: 1,
//       key: "progress-info",
//       label: "캠페인 진행정보",
//       action: () => handleProgressInfoClick(item.id, item.label)
//     },

//     // 두 번째 그룹
//     {
//       id: 52,
//       group: 2,
//       key: "rebroadcast",
//       label: "재발신",
//       action: () => handleRebroadcastClick(item.id)
//     },

//     // 세 번째 그룹
//     {
//       id: 53,
//       group: 3,
//       key: "copy-campaign",
//       label: "캠페인 복사",
//       action: handleCampaignCopy
//     },
//     {
//       id: 54,
//       group: 3,
//       key: "delete-campaign",
//       label: "캠페인 삭제",
//       action: () => onCampaignDelete(currentStatus),
//       className: "text-red-500",
//       condition: !isFolder
//     },

//     // 네 번째 그룹
//     {
//       id: 55,
//       group: 4,
//       key: "delete-campaign-list",
//       label: "캠페인 리스트 삭제",
//       action: () => handleCampaignListDelete(item.id),
//       condition: currentStatus === 'stopped'
//     },
//     {
//       id: 56,
//       group: 4,
//       key: "monitor",
//       label: "상담사 상태 모니터",
//       action: () => handleMonitorClick(tenantIdForCampaignTab, item.id, item.label)
//     },
//     {
//       id: 57,
//       group: 4,
//       key: "blacklist-count",
//       label: "블랙리스트 건수 조회",
//       action: handleBlacklistCountCheckClick
//     }
//   ];

//   // 권한에 따라 메뉴 항목 필터링
//   const visibleMenuItems = availableMenuIds?.length > 0
//     ? menuItems.filter(item =>
//       availableMenuIds.includes(item.id) &&
//       (item.condition === undefined || item.condition)
//     )
//     : [];

//   // 다이얼로그 닫힘 처리 함수
//   const handleDialogClose = useCallback((open: boolean) => {
//     if (!open) {
//       setIsDeleteDialogOpen(false);
//       // 데이터 리프레시
//       setTimeout(() => {
//         refetchTreeDataForCampaignGroupTab();
//       }, 100);
//     }
//   }, [refetchTreeDataForCampaignGroupTab]);

//   // 메뉴 항목 hover 이벤트 처리
//   const handleMenuItemMouseEnter = useCallback((key: string) => {
//     setHoveredItem(key);

//     // 서브메뉴 항목이면 서브메뉴를 열고 그렇지 않으면 닫기
//     const menuItem = menuItems.find(item => item.key === key);
//     if (menuItem && menuItem.isSubmenu) {
//       setActiveSubMenu(key);
//     } else {
//       setActiveSubMenu(null);
//     }
//   }, [menuItems]);

//   // 메뉴 항목 hover 이벤트 처리
//   const handleMenuItemMouseLeave = useCallback(() => {
//     // 서브메뉴가 열려있을 때는 호버 상태 유지
//     if (!activeSubMenu) {
//       setHoveredItem(null);
//     }
//   }, [activeSubMenu]);

//   // 이벤트 핸들러 등록 및 정리
//   useEffect(() => {
//     // 외부 클릭 시 메뉴 닫기
//     const handleClickOutside = (e: MouseEvent) => {
//       // 블랙리스트 팝업이나 삭제 다이얼로그가 열려있으면 무시
//       if (isBlacklistPopupOpen || isDeleteDialogOpen) {
//         return;
//       }

//       // 메뉴 외부 클릭 처리
//       if (menuRef.current && !menuRef.current.contains(e.target as Node) &&
//         subMenuRef.current && !subMenuRef.current.contains(e.target as Node)) {
//         setMenuOpen(false);
//         setActiveSubMenu(null);
//         setHoveredItem(null);
//       }
//     };

//     // ESC 키 누르면 메뉴 닫기
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') {
//         setMenuOpen(false);
//         setActiveSubMenu(null);
//         setHoveredItem(null);
//       }
//     };

//     if (menuOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//       document.addEventListener('keydown', handleKeyDown);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [menuOpen, isBlacklistPopupOpen, isDeleteDialogOpen]);

//   // 마우스 이벤트 등록: 서브메뉴를 벗어나면 닫기
//   const handleSubMenuMouseLeave = useCallback(() => {
//     // 일정 시간 후에 서브메뉴 닫기 (갑작스럽게 닫히는 것 방지)
//     setTimeout(() => {
//       if (!hoveredItem) {
//         setActiveSubMenu(null);
//       }
//     }, 100);
//   }, [hoveredItem]);

//   return (
//     <>
//       <div onContextMenu={handleContextMenu}>
//         {children}
//       </div>

//       {/* 컨텍스트 메뉴 */}
//       {menuOpen && visibleMenuItems.length > 0 && (
//         <div
//           ref={menuRef}
//           className="fixed min-w-[120px] bg-white rounded-md shadow-md border border-gray-200 z-50 py-1"
//           style={{
//             left: `${menuPosition.x}px`,
//             top: `${menuPosition.y}px`
//           }}
//         >
//           {visibleMenuItems.map((item, index, arr) => {
//             // 현재 아이템과 이전 아이템이 다른 그룹인 경우 구분선 추가
//             const prevItem = index > 0 ? arr[index - 1] : null;
//             const showSeparator = prevItem && prevItem.group !== item.group;
//             const isHovered = hoveredItem === item.key;
//             const isSubmenuActive = activeSubMenu === item.key;

//             return (
//               <React.Fragment key={item.key}>
//                 {showSeparator && <MenuSeparator />}

//                 <div
//                   className="relative"
//                   onMouseEnter={() => handleMenuItemMouseEnter(item.key)}
//                   onMouseLeave={handleMenuItemMouseLeave}
//                 >
//                   <button
//                     type="button"
//                     className={cn(
//                       "w-full flex items-center justify-between text-xs px-2 py-1.5",
//                       isHovered ? "bg-blue-50" : "",
//                       item.className
//                     )}
//                     onClick={item.isSubmenu ? undefined : item.action}
//                     disabled={isProcessing}
//                   >
//                     {item.isSubmenu ? (
//                       <div className="flex items-center justify-between w-full">
//                         {item.renderLabel?.()}
//                         <ChevronRight className="h-3 w-3 ml-1" />
//                       </div>
//                     ) : (
//                       item.label
//                     )}
//                   </button>

//                   {/* 서브메뉴 */}
//                   {item.isSubmenu && isSubmenuActive && (
//                     <div
//                       ref={subMenuRef}
//                       className="absolute right-0 top-0 min-w-[100px] bg-white rounded-md shadow-md border border-gray-200 z-50 py-1"
//                       style={{
//                         marginTop: '-1px',
//                         transform: 'translateX(100%)',  // 오른쪽으로 100% 이동 (부모 요소 너비만큼)
//                         marginRight: '-2px'
//                       }}
//                       onMouseLeave={handleSubMenuMouseLeave}
//                     >
//                       {item.subItems.map((subItem) => (
//                         <button
//                           key={subItem.key}
//                           type="button"
//                           className={cn(
//                             "w-full text-left flex items-center justify-between text-xs px-2 py-1.5",
//                             hoveredItem === subItem.key ? "bg-blue-50" : "",
//                             currentStatus === subItem.status ? "bg-gray-50" : "",
//                             (updateCampaignStatusMutation.isPending || currentStatus === subItem.status || isProcessing)
//                               ? "opacity-70 cursor-not-allowed"
//                               : "cursor-pointer"
//                           )}
//                           onClick={() => handleStartClick(subItem.status as CampaignStatus)}
//                           disabled={updateCampaignStatusMutation.isPending || currentStatus === subItem.status || isProcessing}
//                           onMouseEnter={() => setHoveredItem(subItem.key)}
//                         >
//                           <div className="flex items-center">
//                             <div className="w-3 h-3 mr-1">
//                               <Image
//                                 src={getStatusIcon(subItem.status) || ''}
//                                 alt={subItem.status}
//                                 width={12}
//                                 height={12}
//                               />
//                             </div>
//                             <span>{subItem.label}</span>
//                           </div>
//                           {currentStatus === subItem.status && (
//                             <Check className="h-2 w-2 text-green-500 ml-1" />
//                           )}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </React.Fragment>
//             );
//           })}
//         </div>
//       )}

//       {/* 블랙리스트 팝업 */}
//       {isBlacklistPopupOpen && (
//         <BlackListCountPopup
//           campaignId={item.id}
//           blackListCount={blackListCount}
//           isOpen={isBlacklistPopupOpen}
//           onConfirm={() => setIsBlacklistPopupOpen(false)}
//           onCancel={() => setIsBlacklistPopupOpen(false)}
//         />
//       )}

//       {/* 캠페인 삭제 다이얼로그 */}
//       {isDeleteDialogOpen && (
//         <IDialogButtonForCampaingDelete
//           isOpen={isDeleteDialogOpen}
//           onOpenChange={handleDialogClose}
//           campaignId={item.id}
//           campaignName={item.label}
//           tenant_id={tenantIdForCampaignTab}
//         />
//       )}
//     </>
//   );
// }

// src/features/campaignManager/components/context/IContextMenuForCampaignForCampaignGroup.tsx
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { toast } from 'react-toastify';
import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { useTabStore } from "@/store/tabStore";
import { useSideMenuCampaignGroupTabStore } from "@/store/storeForSideMenuCampaignGroupTab";
import { useAvailableMenuStore } from "@/store/useAvailableMenuStore";
import { useApiForCampaignBlacklistCount } from "@/features/listManager/hooks/useApiForCampaignBlacklistCount";
import useApiForCampaignListDelete from "@/features/listManager/hooks/useApiForCampaignListDelete";
import { useApiForCampaignStatusUpdate } from "@/features/campaignManager/hooks/useApiForCampaignStatusUpdate";
import { useApiForMain } from "@/features/auth/hooks/useApiForMain";
import { useMainStore } from "@/store/mainStore";
import { useAuthStore } from "@/store/authStore";

import IDialogButtonForCampaingDelete from "../dialog/IDialogButtonForCampaingDelete";
import BlackListCountPopup from '@/features/campaignManager/components/popups/BlackListCountPopup';

export type CampaignStatus = 'started' | 'pending' | 'stopped';

export const getStatusIcon = (status?: string) => {
  switch (status) {
    case 'started': return '/sidebar-menu/tree_play.svg';
    case 'pending': return '/sidebar-menu/tree_pause.svg';
    case 'stopped': return '/sidebar-menu/tree_stop.svg';
    default: return null;
  }
};

interface ContextMenuForTreeNodeProps {
  children: React.ReactNode;
  item: { id: any; label: string; type: any; status: CampaignStatus };
  onEdit?: () => void;
  onMonitor?: () => void;
  onHandleCampaignCopy?: () => void;
  tenantIdForCampaignTab: any;
}

export const getStatusFromFlag = (flag?: number): CampaignStatus => {
  switch (flag) {
    case 1: return 'started';
    case 2: return 'pending';
    case 3: return 'stopped';
    default: return 'stopped';
  }
};

// Separator between menu groups
const MenuSeparator = () => <div className="h-px bg-gray-200 my-2" />;

export function IContextMenuForCampaignForCampaignGroup({
  children,
  item,
  onEdit,
  onMonitor,
  onHandleCampaignCopy,
  tenantIdForCampaignTab,
}: ContextMenuForTreeNodeProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const subMenuRef = useRef<HTMLDivElement>(null);
  const isFolder = item.type === "folder";
  const { simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu, setCampaignIdForCopyCampaign, addTab, addMultiTab } = useTabStore();
  const { updateCampaignStatus, refetchTreeDataForCampaignGroupTab } = useSideMenuCampaignGroupTabStore();
  const availableMenuIds = useAvailableMenuStore(state => state.availableMenuIdsForCampaignGroupTabCampaign);

  const [isBlacklistPopupOpen, setIsBlacklistPopupOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<CampaignStatus>(item.status);
  const [blackListCount, setBlackListCount] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isProcessing, setIsProcessing] = useState(false);
  const [menuWidth, setMenuWidth] = useState(140);

  const { tenant_id, session_key } = useAuthStore();
  const { setCampaigns, selectedCampaign, setSelectedCampaign } = useMainStore();

  useEffect(() => { setCurrentStatus(item.status); }, [item.status]);
  useEffect(() => { if (menuOpen && menuRef.current) setMenuWidth(menuRef.current.offsetWidth); }, [menuOpen]);

  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      setCampaigns(data.result_data);
      if (selectedCampaign) {
        const updated = data.result_data.find(c => c.campaign_id === selectedCampaign.campaign_id);
        if (updated) setSelectedCampaign(updated);
      }
      refetchTreeDataForCampaignGroupTab();
    }
  });

  const statusInfo = {
    started: { label: "시작", color: "#22c55e" },
    pending: { label: "멈춤", color: "#eab308" },
    stopped: { label: "중지", color: "#ef4444" },
  };

  const updateCampaignStatusMutation = useApiForCampaignStatusUpdate({
    onSuccess: () => { fetchMain({ session_key, tenant_id }); setIsProcessing(false); },
    onError: (err) => { toast.error(err.message || "상태 변경 오류"); setIsProcessing(false); }
  });

  const { mutate: deleteCampaignList } = useApiForCampaignListDelete({
    onSuccess: () => { toast.success("캠페인 리스트가 삭제되었습니다."); refetchTreeDataForCampaignGroupTab(); setIsProcessing(false); },
    onError: (err) => { toast.error(err?.message || "리스트 삭제 오류"); setIsProcessing(false); }
  });

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation();
    if (isProcessing) return;
    setActiveSubMenu(null); setHoveredItem(null);
    setMenuPosition({ x: e.clientX, y: e.clientY }); setMenuOpen(true);
  }, [isProcessing]);

  const handleDeleteList = useCallback((id: any) => {
    if (currentStatus !== 'stopped') return toast.error("중지 상태만 삭제 가능");
    setIsProcessing(true); deleteCampaignList(id); setMenuOpen(false);
  }, [currentStatus, deleteCampaignList]);

  const handleEdit = useCallback(() => {
    if (onEdit) { onEdit(); } else {
      simulateHeaderMenuClick(2);
      setCampaignIdForUpdateFromSideMenu(item.id);
    }
    setMenuOpen(false);
  }, [onEdit, simulateHeaderMenuClick, item.id]);

  const handleProgress = useCallback((id: any, name: string) => {
    const key = `progress-info-${id}-${Date.now()}`;
    addMultiTab({ id:21, uniqueKey:key, title:`캠페인 진행정보 - ${name}`, icon:'', href:'', content:null, campaignId:id });
    setMenuOpen(false);
  }, [addMultiTab]);

  const handleRebroadcast = useCallback((id: any) => {
    setCampaignIdForUpdateFromSideMenu(id);
    addTab({ id:20, uniqueKey:'20', title:'재발신 설정', icon:'', href:'', content:null });
    setMenuOpen(false);
  }, []);

  const handleMonitor = useCallback((tenantId:any, id:any, name:string) => {
    const key = `monitor-${Date.now()}`;
    addMultiTab({ id:22, uniqueKey:key, title:`상담사 상태 모니터 - ${name}`, icon:'', href:'', content:null, campaignId:id, params:{ campaignId:id, campaignName:name, tenantId } });
    setMenuOpen(false);
  }, [addMultiTab]);

  const handleCopy = useCallback(() => {
    setCampaignIdForUpdateFromSideMenu(item.id);
    setCampaignIdForCopyCampaign(item.id);
    addTab({ id:130, uniqueKey:'130', title:'캠페인 복사', icon:'', href:'', content:null });
    setMenuOpen(false);
  }, [item.id]);

  const handleDelete = useCallback(() => {
    if (currentStatus !== 'stopped') return toast.error("중지 상태만 삭제 가능");
    setIsDeleteDialogOpen(true); setMenuOpen(false);
  }, [currentStatus]);

  const getStatusNumber = (s:CampaignStatus) => s==='started'?1:s==='pending'?2:3;

  const handleStatusChange = useCallback(async (s:CampaignStatus) => {
    if (currentStatus===s||updateCampaignStatusMutation.isPending||isProcessing) return;
    try {
      setIsProcessing(true);
      await updateCampaignStatusMutation.mutateAsync({ campaign_id:Number(item.id), campaign_status:getStatusNumber(s) });
      setCurrentStatus(s);
      updateCampaignStatus(item.id, getStatusNumber(s));
      setMenuOpen(false); setActiveSubMenu(null);
    } catch { setIsProcessing(false); }
  }, [currentStatus, isProcessing]);

  const { mutate: fetchBlackCount } = useApiForCampaignBlacklistCount({ onSuccess: d => { setBlackListCount(d.result_data.blacklist_count); setTimeout(() => setIsBlacklistPopupOpen(true), 100); }});
  const handleBlackClick = useCallback(() => { fetchBlackCount(item.id); setMenuOpen(false); }, [item.id]);

  const menuItems = [
    { id:46, group:1, key:'edit-campaign', label:'캠페인 수정', action:handleEdit },
    {
      id:47, group:1, key:'start-division', isSubmenu:true,
      renderLabel:() => <div className="flex items-center text-xs">시작구분:<span className="ml-1 flex items-center"><div className="w-3 h-3 mr-1"><Image src={getStatusIcon(currentStatus)||''} alt={currentStatus} width={12} height={12}/></div>{statusInfo[currentStatus].label}</span></div>,
      subItems:[ { id:48,key:'start',label:'시작',status:'started' },{ id:49,key:'pause',label:'멈춤',status:'pending' },{ id:50,key:'stop',label:'중지',status:'stopped' } ]
    },
    { id:51, group:1, key:'progress-info', label:'캠페인 진행정보', action:() => handleProgress(item.id,item.label) },
    { id:52, group:2, key:'rebroadcast', label:'재발신', action:() => handleRebroadcast(item.id) },
    { id:53, group:3, key:'copy-campaign', label:'캠페인 복사', action:handleCopy },
    { id:54, group:3, key:'delete-campaign', label:'캠페인 삭제', action:handleDelete, className:'text-red-500', condition:!isFolder },
    { id:55, group:4, key:'delete-campaign-list', label:'캠페인 리스트 삭제', action:() => handleDeleteList(item.id), condition:currentStatus==='stopped' },
    { id:56, group:4, key:'monitor', label:'상담사 상태 모니터', action:() => handleMonitor(tenantIdForCampaignTab,item.id,item.label) },
    { id:57, group:4, key:'blacklist-count', label:'블랙리스트 건수 조회', action:handleBlackClick }
  ];

  const visibleMenuItems = availableMenuIds?.length ? menuItems.filter(i => availableMenuIds.includes(i.id) && (i.condition===undefined||i.condition)) : [];

  const handleDialogClose = useCallback((open:boolean) => { if (!open) { setIsDeleteDialogOpen(false); setTimeout(() => refetchTreeDataForCampaignGroupTab(),100); } }, []);
  const handleItemEnter = useCallback((key:string) => { setHoveredItem(key); setActiveSubMenu(menuItems.find(i=>i.key===key)?.isSubmenu ? key : null); }, []);
  const handleItemLeave = useCallback(() => { if (!activeSubMenu) setHoveredItem(null); }, [activeSubMenu]);

  useEffect(() => {
    const onClickOutside = (e:MouseEvent) => {
      if (isBlacklistPopupOpen||isDeleteDialogOpen) return;
      if (menuRef.current&&!menuRef.current.contains(e.target as Node)&&subMenuRef.current&&!subMenuRef.current.contains(e.target as Node)) {
        setMenuOpen(false); setActiveSubMenu(null); setHoveredItem(null);
      }
    };
    const onEsc = (e:KeyboardEvent) => { if (e.key==='Escape') { setMenuOpen(false); setActiveSubMenu(null); setHoveredItem(null); } };
    if (menuOpen) { document.addEventListener('mousedown',onClickOutside); document.addEventListener('keydown',onEsc); }
    return () => { document.removeEventListener('mousedown',onClickOutside); document.removeEventListener('keydown',onEsc); };
  }, [menuOpen,isBlacklistPopupOpen,isDeleteDialogOpen]);

  const handleSubMenuLeave = useCallback(() => { setTimeout(() => { if (!hoveredItem) setActiveSubMenu(null); }, 100); }, [hoveredItem]);

  return (
    <>
      <div onContextMenu={handleContextMenu}>{children}</div>

      {menuOpen && visibleMenuItems.length > 0 && (
        <div
          ref={menuRef}
          className="fixed bg-white rounded-md shadow-md border border-gray-200 z-50 py-2 px-2"
          style={{ left: `${menuPosition.x}px`, top: `${menuPosition.y}px`, minWidth: `${menuWidth}px` }}
        >
          {visibleMenuItems.map((item,i,arr) => {
            const prev = i>0 ? arr[i-1] : null;
            const sep = prev && prev.group!==item.group;
            const hover = hoveredItem===item.key;
            const subActive = activeSubMenu===item.key;

            return (
              <React.Fragment key={item.key}>
                {sep && <MenuSeparator />} 
                <div className="relative" onMouseEnter={() => handleItemEnter(item.key)} onMouseLeave={handleItemLeave}>
                  <button
                    type="button"
                    className={cn(
                      "w-full flex items-center justify-between text-xs px-3 py-2",
                      hover && "bg-blue-50",
                      item.className
                    )}
                    onClick={!item.isSubmenu ? item.action : undefined}
                    disabled={isProcessing}
                  >
                    {item.isSubmenu ? (
                      <div className="flex items-center justify-between w-full">
                        {item.renderLabel?.()}
                        <ChevronRight className="h-3 w-3 ml-1" />
                      </div>
                    ) : item.label}
                  </button>

                  {item.isSubmenu && subActive && (
                    <div
                      ref={subMenuRef}
                      className="absolute right-0 top-0 bg-white rounded-md shadow-md border border-gray-200 z-50 py-2 px-2"
                      style={{ transform: 'translateX(100%)', marginTop: '-2px', minWidth: '120px' }}
                      onMouseLeave={handleSubMenuLeave}
                    >
                      {item.subItems.map(sub => (
                        <button
                          key={sub.key}
                          type="button"
                          className={cn(
                            "w-full text-left flex items-center justify-between text-xs px-3 py-2",
                            hoveredItem===sub.key && "bg-blue-50",
                            currentStatus===sub.status && "bg-gray-50",
                            (updateCampaignStatusMutation.isPending||currentStatus===sub.status||isProcessing)
                              ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
                          )}
                          onClick={() => handleStatusChange(sub.status as CampaignStatus)}
                          disabled={updateCampaignStatusMutation.isPending||currentStatus===sub.status||isProcessing}
                          onMouseEnter={() => setHoveredItem(sub.key)}
                        >
                          <div className="flex items-center">
                            <div className="w-3 h-3 mr-1">
                              <Image src={getStatusIcon(sub.status)||''} alt={sub.status} width={12} height={12}/>
                            </div>
                            <span>{sub.label}</span>
                          </div>
                          {currentStatus===sub.status && <Check className="h-2 w-2 text-green-500 ml-1" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      )}

      {isBlacklistPopupOpen && (
        <BlackListCountPopup
          campaignId={item.id}
          blackListCount={blackListCount}
          isOpen={isBlacklistPopupOpen}
          onConfirm={() => setIsBlacklistPopupOpen(false)}
          onCancel={() => setIsBlacklistPopupOpen(false)}
        />
      )}

      {isDeleteDialogOpen && (
        <IDialogButtonForCampaingDelete
          isOpen={isDeleteDialogOpen}
          onOpenChange={handleDialogClose}
          campaignId={item.id}
          campaignName={item.label}
          tenant_id={tenantIdForCampaignTab}
        />
      )}
    </>
  );
}
