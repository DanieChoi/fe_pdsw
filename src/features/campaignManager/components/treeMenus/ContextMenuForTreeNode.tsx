// "use client";

// import {
//   ContextMenu,
//   ContextMenuContent,
//   ContextMenuItem,
//   ContextMenuSub,
//   ContextMenuSubContent,
//   ContextMenuSubTrigger,
//   ContextMenuTrigger,
//   ContextMenuSeparator,
// } from "@/components/ui/context-menu";
// import { useTabStore } from "@/store/tabStore";
// import {
//   Check,
// } from "lucide-react";
// import { useState, useRef, JSX } from "react";
// import BlackListCountPopup from '@/features/campaignManager/components/popups/BlackListCountPopup';
// import { toast } from 'react-toastify';
// import { useApiForCampaignStatusUpdate } from "../../hooks/useApiForCampaignStatusUpdate";
// import { useApiForCampaignBlacklistCount } from "@/features/listManager/hooks/useApiForCampaignBlacklistCount";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import useApiForCampaignListDelete from "@/features/listManager/hooks/useApiForCampaignListDelete";
// import { CheckCampaignSaveReturnCode } from '@/components/common/common';
// import CustomAlert, { CustomAlertRequest } from '@/components/shared/layout/CustomAlert';
// import { useAvailableMenuStore } from "@/store/useAvailableMenuStore";
// import React from "react";
// import { useCampainManagerStore } from "@/store/campainManagerStore";
// import { useMainStore } from "@/store/mainStore";
// import { useApiForMain } from "@/features/auth/hooks/useApiForMain";
// import { useAuthStore } from "@/store/authStore";

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

// const errorMessage: CustomAlertRequest = {
//   isOpen: false,
//   message: '',
//   title: '캠페인',
//   type: '1',
//   onClose: () => { },
//   onCancle: () => { },
// };

// interface ContextMenuForTreeNodeProps {
//   children: React.ReactNode;
//   item: {
//     id: string;
//     label: string;
//     type: any;
//     status: CampaignStatus;
//   };
//   onEdit: () => void;
//   onMonitor: () => void;
//   onHandleCampaignCopy: () => void;
// }

// // 메뉴 아이템 정의 인터페이스
// interface MenuItemDefinition {
//   menuId?: number;
//   key: string;
//   title?: string;
//   onClick?: () => void;
//   render?: () => JSX.Element;
//   type?: "separator";
//   condition?: boolean;
//   className?: string;
// }

// export function ContextMenuForTreeNode({
//   children,
//   item,
//   onEdit,
//   onMonitor,
//   onHandleCampaignCopy,
// }: ContextMenuForTreeNodeProps) {
//   const isFolder = item.type === "folder";
//   const { simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu, addTab, addMultiTab } = useTabStore();
//   const [isBlacklistPopupOpen, setIsBlacklistPopupOpen] = useState(false);
//   const [currentStatus, setCurrentStatus] = useState<CampaignStatus>(item.status);
//   const [tempStatus, setTempStatus] = useState<CampaignStatus>(item.status);
//   const [blackListCount, setBlackListCount] = useState<number>(0);
//   const preventCloseRef = useRef(false);
//   const [alertState, setAlertState] = useState<CustomAlertRequest>(errorMessage);
//   const { availableCampaignTabCampaignContextMenuIds } = useAvailableMenuStore();

//   const { tenant_id, role_id, session_key } = useAuthStore();

//   const { tenants
//     , setCampaigns
//     , selectedCampaign
//     , setSelectedCampaign
//   } = useMainStore();

//   const { openedTabs } = useTabStore();

//   const { mutate: fetchMain } = useApiForMain({
//     onSuccess: (data) => {
//       setCampaigns(data.result_data);
//       // if( tenant_id === 0){
//       //   setCampaigns(data.result_data);
//       // }else{
//       //   setCampaigns(data.result_data.filter(data=>data.tenant_id === tenant_id));
//       // }
//       setSelectedCampaign(data.result_data.filter((campaign) => campaign.campaign_id === selectedCampaign?.campaign_id)[0]);
//     }
//   });

//   // 상태 관련 정보
//   const statusInfo = {
//     started: { label: "시작", color: "#22c55e" },
//     pending: { label: "멈춤", color: "#eab308" },
//     stopped: { label: "중지", color: "#ef4444" },
//   };

//   const updateCampaignStatusMutation = useApiForCampaignStatusUpdate({
//     onSuccess: (data) => {
//       // API 호출 완료 후에도 창이 닫히지 않도록 플래그 유지
//       preventCloseRef.current = true;
//       if (data.result_code === 0) {
//         setAlertState({
//           ...errorMessage,
//           isOpen: true,
//           type: '2',
//           message: '캠페인 상태가 성공적으로 변경되었습니다.',
//           onClose: () => setAlertState((prev) => ({ ...prev, isOpen: false })),
//           onCancle: () => setAlertState((prev) => ({ ...prev, isOpen: false }))
//         });

//         // 로컬 상태 업데이트
//         setCurrentStatus(tempStatus);



//       } else {
//         setAlertState({
//           ...errorMessage,
//           isOpen: true,
//           type: '2',
//           message: CheckCampaignSaveReturnCode(data.reason_code),
//           onClose: () => setAlertState((prev) => ({ ...prev, isOpen: false })),
//           onCancle: () => setAlertState((prev) => ({ ...prev, isOpen: false }))
//         });
//       }
//     },
//     onError: (error) => {
//       toast.error(error.message || "상태 변경 중 오류가 발생했습니다.", {
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     },
//   });

//   const { mutate: deleteCampaignList } = useApiForCampaignListDelete({
//     onSuccess: (data) => {
//       console.log('캠페인 리스트 삭제 성공 : ', data);
//       toast.success("캠페인 리스트가 성공적으로 삭제되었습니다.", {
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     },
//     onError: (error) => {
//       toast.error(error.message || "리스트 삭제 중 오류가 발생했습니다.", {
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     },
//   });

//   const handleCampaignListDelete = (campaignId: any) => {
//     if (currentStatus !== 'stopped') {
//       toast.error("캠페인이 중지 상태일 때만 리스트를 삭제할 수 있습니다.", {
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//       return;
//     }
//     deleteCampaignList(campaignId);
//   };

//   const handleEditMenuClick = () => {
//     simulateHeaderMenuClick(2);
//     setCampaignIdForUpdateFromSideMenu(item.id);
//   };

//   const handleProgressInfoClick = (campaignId: any, campaignName: string) => {
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
//   };

//   const handleRebroadcastClick = (campaignId: any) => {
//     setCampaignIdForUpdateFromSideMenu(campaignId);
//     addTab({
//       id: 20,
//       uniqueKey: '20',
//       title: '재발신 설정',
//       icon: '',
//       href: '',
//       content: null,
//     });
//   };

//   const handleMonitorClick = (campaignId: any, campaignName: string) => {
//     const uniqueKey = `monitor-${Date.now()}`;
//     addMultiTab({
//       id: 22,
//       uniqueKey: uniqueKey,
//       title: `상담원 상태 모니터 - ${campaignName}`,
//       icon: '',
//       href: '',
//       content: null,
//       campaignId: campaignId
//     });
//   };

//   const onCampaignDelete = (status: string, campaignId: any, campaignName: string) => {
//     if (status !== 'stopped') {
//       toast.error("캠페인이 중지 상태일 때만 삭제할 수 있습니다.", {
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//       return;
//     }
//     addTab({
//       id: 131,
//       uniqueKey: `monitor-${Date.now()}`,
//       title: `상담원 삭제 - ${campaignName}`,
//       icon: '',
//       href: '',
//       content: null,
//       campaignId: campaignId,
//       campaignName: campaignName
//     });
//   };

//   const getStatusNumber = (status: CampaignStatus): number => {
//     switch (status) {
//       case 'started': return 1;
//       case 'pending': return 2;
//       case 'stopped': return 3;
//       default: return 0;
//     }
//   };

//   const handleCampaingProgressUpdate = async (status: CampaignStatus) => {
//     if (currentStatus === status || updateCampaignStatusMutation.isPending) {
//       return;
//     }
//     setTempStatus(status);
//     try {
//       preventCloseRef.current = true;
//       await updateCampaignStatusMutation.mutateAsync({
//         campaign_id: Number(item.id),
//         campaign_status: getStatusNumber(status)
//       });

//       // tofix:
//       fetchMain({
//         session_key: session_key,
//         tenant_id: tenant_id
//       });

//     } catch (error) {
//       console.error('Error changing campaign status:', {
//         campaignId: item.id,
//         campaignName: item.label,
//         attemptedStatus: status,
//         error: error
//       });
//     }
//   };

//   // 캠페인 블랙리스트 건수 조회 API 호출
//   const { mutate: fetchCampaignBlacklistCount } = useApiForCampaignBlacklistCount({
//     onSuccess: (data) => {
//       setBlackListCount(data.result_data.blacklist_count);
//       setTimeout(() => {
//         setIsBlacklistPopupOpen(true);
//       }, 100);
//     }
//   });

//   const handleBlacklistCountCheckClick = () => {
//     fetchCampaignBlacklistCount(Number(item.id));
//   };

//   // 상태 서브메뉴 렌더링
//   const renderStatusSubMenu = () => (
//     <ContextMenuSub>
//       <ContextMenuSubTrigger
//         className="flex items-center text-sm"
//         onPointerDown={(e) => {
//           preventCloseRef.current = false;
//         }}
//       >
//         <span className="flex items-center">
//           시작구분:
//           <span className="ml-1 flex items-center">
//             <div className="w-4 h-4 mr-1">
//               <Image
//                 src={getStatusIcon(currentStatus) || ''}
//                 alt={currentStatus}
//                 width={16}
//                 height={16}
//               />
//             </div>
//             {statusInfo[currentStatus].label}
//           </span>
//         </span>
//       </ContextMenuSubTrigger>
//       <ContextMenuSubContent
//         className="min-w-[120px] p-1"
//         onPointerDownOutside={(e) => {
//           if (preventCloseRef.current) {
//             e.preventDefault();
//             preventCloseRef.current = false;
//           }
//         }}
//       >
//         {(Object.keys(statusInfo) as Array<CampaignStatus>).map((status) => (
//           <ContextMenuItem
//             key={status}
//             onClick={(e) => {
//               e.stopPropagation();
//               handleCampaingProgressUpdate(status);
//               preventCloseRef.current = true;
//             }}
//             className={cn(
//               "flex items-center justify-between text-sm px-2 py-1.5",
//               currentStatus === status ? "bg-gray-50" : "",
//               updateCampaignStatusMutation.isPending ? "opacity-70" : ""
//             )}
//             disabled={updateCampaignStatusMutation.isPending}
//           >
//             <div className="flex items-center">
//               <div className="w-4 h-4 mr-2">
//                 <Image
//                   src={getStatusIcon(status) || ''}
//                   alt={status}
//                   width={16}
//                   height={16}
//                 />
//               </div>
//               <span>{statusInfo[status].label}</span>
//             </div>
//             {currentStatus === status && (
//               <Check className="h-4 w-4 text-green-500" />
//             )}
//           </ContextMenuItem>
//         ))}
//       </ContextMenuSubContent>
//     </ContextMenuSub>
//   );

//   // 메인 메뉴 아이템들을 배열로 분리
//   const mainMenuItems: MenuItemDefinition[] = [
//     { key: "edit", title: "캠페인 수정", onClick: handleEditMenuClick, menuId: 19 },
//     { key: "status", render: renderStatusSubMenu, menuId: 20 },
//     { key: "progress", title: "캠페인 진행정보", onClick: () => handleProgressInfoClick(item.id, item.label), menuId: 24 },
//     { key: "separator1", type: "separator" },
//     { key: "rebroadcast", title: "재발신", onClick: () => handleRebroadcastClick(item.id), menuId: 25 },
//     { key: "separator2", type: "separator" },
//     { key: "copy", title: "캠페인 복사", onClick: onHandleCampaignCopy, menuId: 26 },
//     { key: "delete", title: "캠페인 삭제", onClick: () => onCampaignDelete(currentStatus, item.id, item.label), condition: !isFolder, className: "text-red-500", menuId: 27 },
//     { key: "separator3", type: "separator" },
//     { key: "listDelete", title: "캠페인 리스트 삭제", onClick: () => handleCampaignListDelete(item.id), condition: currentStatus === 'stopped', menuId: 28 },
//     { key: "monitor", title: "상담원 상태 모니터", onClick: () => handleMonitorClick(item.id, item.label), menuId: 29 },
//     { key: "blacklist", title: "블랙리스트 건수 조회", onClick: handleBlacklistCountCheckClick, menuId: 30 },
//   ];

//   const filteredMenuItems = mainMenuItems.filter((menuItem) => {
//     // separator는 권한 체크 없이 포함
//     if (menuItem.type === "separator") return true;

//     // menuId가 없는 항목은 무조건 표시 (이전 코드의 호환성 유지)
//     if (menuItem.menuId === undefined) return true;

//     // 권한이 있는 메뉴만 표시
//     return availableCampaignTabCampaignContextMenuIds.includes(menuItem.menuId);
//   });

//   // 수정이 필요한 부분만 변경했습니다.
//   return (
//     <>
//       <ContextMenu>
//         <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
//         <ContextMenuContent className="w-[150px]">
//           {filteredMenuItems.map((menuItem) => {
//             if (menuItem.condition === false) return null;
//             if (menuItem.type === "separator") {
//               return <ContextMenuSeparator key={menuItem.key} className="my-1" />;
//             }
//             if (menuItem.render) {
//               // key 속성을 추가하여 React 오류 해결
//               return <React.Fragment key={menuItem.key}>{menuItem.render()}</React.Fragment>;
//             }
//             return (
//               <ContextMenuItem
//                 key={menuItem.key}
//                 onClick={menuItem.onClick}
//                 className={cn("flex items-center text-sm", menuItem.className)}
//               >
//                 {menuItem.title}
//               </ContextMenuItem>
//             );
//           })}
//         </ContextMenuContent>
//       </ContextMenu>

//       {isBlacklistPopupOpen && (
//         <BlackListCountPopup
//           campaignId={item.id}
//           blackListCount={blackListCount}
//           isOpen={isBlacklistPopupOpen}
//           onConfirm={() => setIsBlacklistPopupOpen(false)}
//           onCancel={() => setIsBlacklistPopupOpen(false)}
//         />
//       )}
//       <CustomAlert
//         message={alertState.message}
//         title={alertState.title}
//         type={alertState.type}
//         isOpen={alertState.isOpen}
//         onClose={() => {
//           alertState.onClose();
//         }}
//         onCancle={() => setAlertState((prev) => ({ ...prev, isOpen: false }))}
//       />
//     </>
//   );
// }


"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";
import { useTabStore } from "@/store/tabStore";
import { Check } from "lucide-react";
import { useState, useRef, useEffect, JSX } from "react";
import BlackListCountPopup from '@/features/campaignManager/components/popups/BlackListCountPopup';
import { toast } from 'react-toastify';
import { useApiForCampaignStatusUpdate } from "../../hooks/useApiForCampaignStatusUpdate";
import { useApiForCampaignBlacklistCount } from "@/features/listManager/hooks/useApiForCampaignBlacklistCount";
import { cn } from "@/lib/utils";
import Image from "next/image";
import useApiForCampaignListDelete from "@/features/listManager/hooks/useApiForCampaignListDelete";
import { CheckCampaignSaveReturnCode } from '@/components/common/common';
import { useAvailableMenuStore } from "@/store/useAvailableMenuStore";
import React from "react";
import { useMainStore } from "@/store/mainStore";
import { useApiForMain } from "@/features/auth/hooks/useApiForMain";
import { useAuthStore } from "@/store/authStore";
import CommonDialogWithCustomAlertStyle from "@/components/shared/layout/CommonDialogWithCustomAlertStyle"; // 추가

export type CampaignStatus = 'started' | 'pending' | 'stopped';

export const getStatusIcon = (status?: string) => {
  switch (status) {
    case 'started':
      return '/sidebar-menu/tree_play.svg';
    case 'pending':
      return '/sidebar-menu/tree_pause.svg';
    case 'stopped':
      return '/sidebar-menu/tree_stop.svg';
    default:
      return null;
  }
};

interface ContextMenuForTreeNodeProps {
  children: React.ReactNode;
  item: {
    id: number | string; // 두 가지 타입 모두 지원하도록 변경
    label: string;
    type: any;
    status: CampaignStatus;
  };
  onEdit: () => void;
  onMonitor: () => void;
  onHandleCampaignCopy: () => void;
}

// 메뉴 아이템 정의 인터페이스
interface MenuItemDefinition {
  menuId?: number;
  key: string;
  title?: string;
  onClick?: () => void;
  render?: () => JSX.Element;
  type?: "separator";
  condition?: boolean;
  className?: string;
}

export function ContextMenuForTreeNode({
  children,
  item,
  onEdit,
  onMonitor,
  onHandleCampaignCopy,
}: ContextMenuForTreeNodeProps) {
  const isFolder = item.type === "folder";
  const { simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu, addTab, addMultiTab, openedTabs } = useTabStore();
  const [isBlacklistPopupOpen, setIsBlacklistPopupOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<CampaignStatus>(item.status);
  const [tempStatus, setTempStatus] = useState<CampaignStatus>(item.status);
  const [blackListCount, setBlackListCount] = useState<number>(0);
  const preventCloseRef = useRef(false);
  const { availableCampaignTabCampaignContextMenuIds } = useAvailableMenuStore();

  const { tenant_id, role_id, session_key } = useAuthStore();

  const {
    setCampaigns,
    selectedCampaign,
    setSelectedCampaign
  } = useMainStore();

  // ------------------------------------------
  // (A) 일반 알림/에러 다이얼로그용 state
  // ------------------------------------------
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);
  const [alertDialogTitle, setAlertDialogTitle] = useState("알림");
  const [alertDialogMessage, setAlertDialogMessage] = useState<React.ReactNode>("");

  // 알림 다이얼로그 닫기 핸들러
  const closeAlertDialog = () => {
    setIsAlertDialogOpen(false);
  };

  // 알림/에러 다이얼로그 열기 함수
  const showAlertDialog = (message: React.ReactNode, title = "알림") => {
    setAlertDialogTitle(title);
    setAlertDialogMessage(message);
    setIsAlertDialogOpen(true);
  };

  // ------------------------------------------
  // (B) 캠페인 리스트 삭제 확인 다이얼로그용 state
  // ------------------------------------------
  const [isDeleteListDialogOpen, setIsDeleteListDialogOpen] = useState(false);
  const [deleteListDialogTitle, setDeleteListDialogTitle] = useState("캠페인 리스트 삭제");
  const [deleteListDialogMessage, setDeleteListDialogMessage] = useState<React.ReactNode>("");

  // 삭제 다이얼로그 닫기 핸들러
  const closeDeleteListDialog = () => {
    setIsDeleteListDialogOpen(false);
  };

  // ------------------------------------------
  // 컨텍스트 메뉴가 열려있을 때, 다이얼로그가 열리면
  // 우클릭 메뉴를 비활성화하는 로직 (선택사항)
  // ------------------------------------------
  const [isAnyDialogOpen, setIsAnyDialogOpen] = useState(false);
  useEffect(() => {
    setIsAnyDialogOpen(isAlertDialogOpen || isDeleteListDialogOpen || isBlacklistPopupOpen);
  }, [isAlertDialogOpen, isDeleteListDialogOpen, isBlacklistPopupOpen]);

  // ------------------------------------------
  // API 훅들
  // ------------------------------------------
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      setCampaigns(data.result_data);
      setSelectedCampaign(
        data.result_data.find((camp: any) => camp.campaign_id === selectedCampaign?.campaign_id) || null
      );
    },
  });

  const updateCampaignStatusMutation = useApiForCampaignStatusUpdate({
    onSuccess: (data) => {
      preventCloseRef.current = true;
      if (data.result_code === 0) {
        // 성공 시
        setCurrentStatus(tempStatus);
        showAlertDialog("캠페인 상태가 성공적으로 변경되었습니다.", "캠페인");

        // CampaignManager 탭(ID: 2)이 열려 있는 경우만 다시 fetch
        const isCampaignManagerTabOpen = openedTabs.some(tab => tab.id === 2);
        if (isCampaignManagerTabOpen) {
          fetchMain({ session_key, tenant_id });
        }
      } else {
        // 실패 시
        showAlertDialog(
          CheckCampaignSaveReturnCode(data.reason_code),
          "캠페인 상태 변경 오류"
        );
      }
    },
    onError: (error) => {
      toast.error(error.message || "상태 변경 중 오류가 발생했습니다.", {
        position: "top-center",
        autoClose: 3000,
      });
    },
  });

  const { mutate: deleteCampaignList } = useApiForCampaignListDelete({
    onSuccess: (data) => {
      toast.success("캠페인 리스트가 성공적으로 삭제되었습니다.", {
        position: "top-center",
        autoClose: 3000,
      });
      // 삭제 후 메인 목록 갱신
      fetchMain({ session_key, tenant_id });

      

    },
    onError: (error) => {
      toast.error(error.message || "리스트 삭제 중 오류가 발생했습니다.", {
        position: "top-center",
        autoClose: 3000,
      });
    },
  });

  // ------------------------------------------
  // (B) 캠페인 리스트 삭제 로직
  // ------------------------------------------
  const handleCampaignListDelete = (campaignId: number | string) => {
    if (currentStatus !== 'stopped') {
      toast.error("캠페인이 중지 상태일 때만 리스트를 삭제할 수 있습니다.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    // 숫자로 변환 (API가 number 타입을 기대하기 때문)
    const numericCampaignId = Number(campaignId);

    // 다이얼로그 내용 세팅
    setDeleteListDialogTitle("캠페인 리스트 삭제");
    setDeleteListDialogMessage(
      <>
        캠페인 아이디: {numericCampaignId}
        <br />
        캠페인 이름: {item.label}
        <br />
        <br />
        발신리스트 삭제 시 발신리스트와 캠페인 진행정보가 초기화됩니다.
        <br />
        삭제된 발신리스트와 캠페인 진행정보는 복구가 불가능합니다.
        <br />
        <br />
        정말 삭제하시겠습니까?
      </>
    );
    // 다이얼로그 열기
    setIsDeleteListDialogOpen(true);
  };

  // 삭제 다이얼로그에서 "확인" 버튼 누르면 호출될 함수
  const confirmDeleteList = () => {
    // 실제 삭제 진행 (number 타입으로 변환)
    deleteCampaignList(Number(item.id));
    // 다이얼로그 닫기
    setIsDeleteListDialogOpen(false);
  };

  // ------------------------------------------
  // 기타 메뉴 클릭 핸들러
  // ------------------------------------------
  const handleEditMenuClick = () => {
    simulateHeaderMenuClick(2);
    setCampaignIdForUpdateFromSideMenu(String(item.id));
  };

  const handleProgressInfoClick = (campaignId: number | string, campaignName: string) => {
    const uniqueKey = `progress-info-${campaignId}-${Date.now()}`;
    addMultiTab({
      id: 21,
      uniqueKey,
      title: `캠페인 진행정보 - ${campaignName}`,
      icon: '',
      href: '',
      content: null,
      campaignId: String(campaignId)
    });
  };

  const handleRebroadcastClick = (campaignId: number | string) => {
    setCampaignIdForUpdateFromSideMenu(String(campaignId));
    addTab({
      id: 20,
      uniqueKey: '20',
      title: '재발신 설정',
      icon: '',
      href: '',
      content: null,
    });
  };

  const handleMonitorClick = (campaignId: number | string, campaignName: string) => {
    const uniqueKey = `monitor-${Date.now()}`;
    addMultiTab({
      id: 22,
      uniqueKey,
      title: `상담원 상태 모니터 - ${campaignName}`,
      icon: '',
      href: '',
      content: null,
      campaignId: String(campaignId)
    });
  };

  const onCampaignDelete = (status: string, campaignId: number | string, campaignName: string) => {
    if (status !== 'stopped') {
      toast.error("캠페인이 중지 상태일 때만 삭제할 수 있습니다.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    addTab({
      id: 131,
      uniqueKey: `monitor-${Date.now()}`,
      title: `상담원 삭제 - ${campaignName}`,
      icon: '',
      href: '',
      content: null,
      campaignId: String(campaignId),
      campaignName
    });
  };

  const getStatusNumber = (status: CampaignStatus): number => {
    switch (status) {
      case 'started': return 1;
      case 'pending': return 2;
      case 'stopped': return 3;
      default: return 0;
    }
  };

  const handleCampaingProgressUpdate = async (status: CampaignStatus) => {
    if (currentStatus === status || updateCampaignStatusMutation.isPending) {
      return;
    }
    setTempStatus(status);
    try {
      preventCloseRef.current = true;
      await updateCampaignStatusMutation.mutateAsync({
        campaign_id: Number(item.id),
        campaign_status: getStatusNumber(status)
      });
    } catch (error) {
      console.error('Error changing campaign status:', error);
    }
  };

  // ------------------------------------------
  // 블랙리스트 건수 조회
  // ------------------------------------------
  const { mutate: fetchCampaignBlacklistCount } = useApiForCampaignBlacklistCount({
    onSuccess: (data) => {
      setBlackListCount(data.result_data.blacklist_count);
      setIsBlacklistPopupOpen(true);
    }
  });

  const handleBlacklistCountCheckClick = () => {
    fetchCampaignBlacklistCount(Number(item.id));
  };

  // ------------------------------------------
  // 상태 서브메뉴 렌더링
  // ------------------------------------------
  const statusInfo = {
    started: { label: "시작", color: "#22c55e" },
    pending: { label: "멈춤", color: "#eab308" },
    stopped: { label: "중지", color: "#ef4444" },
  };

  const renderStatusSubMenu = () => (
    <ContextMenuSub>
      <ContextMenuSubTrigger
        className="flex items-center text-sm"
        onPointerDown={(e) => {
          preventCloseRef.current = false;
        }}
      >
        <span className="flex items-center">
          시작구분:
          <span className="ml-1 flex items-center">
            <div className="w-4 h-4 mr-1">
              <Image
                src={getStatusIcon(currentStatus) || ''}
                alt={currentStatus}
                width={16}
                height={16}
              />
            </div>
            {statusInfo[currentStatus].label}
          </span>
        </span>
      </ContextMenuSubTrigger>
      <ContextMenuSubContent
        className="min-w-[120px] p-1"
        onPointerDownOutside={(e) => {
          if (preventCloseRef.current) {
            e.preventDefault();
            preventCloseRef.current = false;
          }
        }}
      >
        {(Object.keys(statusInfo) as Array<CampaignStatus>).map((status) => (
          <ContextMenuItem
            key={status}
            onClick={(e) => {
              e.stopPropagation();
              handleCampaingProgressUpdate(status);
              preventCloseRef.current = true;
            }}
            className={cn(
              "flex items-center justify-between text-sm px-2 py-1.5",
              currentStatus === status ? "bg-gray-50" : "",
              updateCampaignStatusMutation.isPending ? "opacity-70" : ""
            )}
            disabled={updateCampaignStatusMutation.isPending}
          >
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2">
                <Image
                  src={getStatusIcon(status) || ''}
                  alt={status}
                  width={16}
                  height={16}
                />
              </div>
              <span>{statusInfo[status].label}</span>
            </div>
            {currentStatus === status && (
              <Check className="h-4 w-4 text-green-500" />
            )}
          </ContextMenuItem>
        ))}
      </ContextMenuSubContent>
    </ContextMenuSub>
  );

  // ------------------------------------------
  // 컨텍스트 메뉴 아이템 정의
  // ------------------------------------------
  const mainMenuItems: MenuItemDefinition[] = [
    { key: "edit", title: "캠페인 수정", onClick: handleEditMenuClick, menuId: 19 },
    { key: "status", render: renderStatusSubMenu, menuId: 20 },
    { key: "progress", title: "캠페인 진행정보", onClick: () => handleProgressInfoClick(Number(item.id), item.label), menuId: 24 },
    { key: "separator1", type: "separator" },
    { key: "rebroadcast", title: "재발신", onClick: () => handleRebroadcastClick(Number(item.id)), menuId: 25 },
    { key: "separator2", type: "separator" },
    { key: "copy", title: "캠페인 복사", onClick: onHandleCampaignCopy, menuId: 26 },
    {
      key: "delete",
      title: "캠페인 삭제",
      onClick: () => onCampaignDelete(currentStatus, Number(item.id), item.label),
      condition: !isFolder,
      className: "text-red-500",
      menuId: 27
    },
    { key: "separator3", type: "separator" },
    {
      key: "listDelete",
      title: "캠페인 리스트 삭제",
      onClick: () => handleCampaignListDelete(Number(item.id)),
      condition: currentStatus === 'stopped',
      menuId: 28
    },
    {
      key: "monitor",
      title: "상담원 상태 모니터",
      onClick: () => handleMonitorClick(Number(item.id), item.label),
      menuId: 29
    },
    {
      key: "blacklist",
      title: "블랙리스트 건수 조회",
      onClick: handleBlacklistCountCheckClick,
      menuId: 30
    },
  ];

  const filteredMenuItems = mainMenuItems.filter((menuItem) => {
    if (menuItem.type === "separator") return true; // 구분선은 무조건 표시
    if (menuItem.menuId === undefined) return true; // menuId가 없으면 권한체크 없이 표시
    return availableCampaignTabCampaignContextMenuIds.includes(menuItem.menuId);
  });

  // ------------------------------------------
  // 최종 리턴
  // ------------------------------------------
  return (
    <>
      {/* 우클릭 컨텍스트 메뉴 */}
      <ContextMenu>
        {/* 다이얼로그가 열려있으면 우클릭 메뉴 비활성화(선택사항) */}
        <ContextMenuTrigger asChild disabled={isAnyDialogOpen}>
          {children}
        </ContextMenuTrigger>
        <ContextMenuContent className="w-[150px]">
          {filteredMenuItems.map((menuItem) => {
            if (menuItem.condition === false) return null;
            if (menuItem.type === "separator") {
              return <ContextMenuSeparator key={menuItem.key} className="my-1" />;
            }
            if (menuItem.render) {
              return (
                <React.Fragment key={menuItem.key}>
                  {menuItem.render()}
                </React.Fragment>
              );
            }
            return (
              <ContextMenuItem
                key={menuItem.key}
                onClick={(e) => {
                  e.stopPropagation();
                  if (menuItem.onClick) {
                    menuItem.onClick();
                  }
                }}
                className={cn("flex items-center text-sm", menuItem.className)}
              >
                {menuItem.title}
              </ContextMenuItem>
            );
          })}
        </ContextMenuContent>
      </ContextMenu>

      {/* 블랙리스트 조회 팝업 */}
      {isBlacklistPopupOpen && (
        <BlackListCountPopup
          campaignId={item.id}
          blackListCount={blackListCount}
          isOpen={isBlacklistPopupOpen}
          onConfirm={() => setIsBlacklistPopupOpen(false)}
          onCancel={() => setIsBlacklistPopupOpen(false)}
        />
      )}

      {/* (B) 캠페인 리스트 삭제 다이얼로그 */}
      <CommonDialogWithCustomAlertStyle
        title={deleteListDialogTitle}
        isOpen={isDeleteListDialogOpen}
        onClose={confirmDeleteList}   // "확인" 버튼
        onCancel={closeDeleteListDialog} // "닫기" 버튼
        width="max-w-lg"
        showButtons
        confirmDisabled={false}
      >
        {deleteListDialogMessage}
      </CommonDialogWithCustomAlertStyle>

      {/* (A) 일반 알림/에러 다이얼로그 */}
      <CommonDialogWithCustomAlertStyle
        title={alertDialogTitle}
        isOpen={isAlertDialogOpen}
        onClose={closeAlertDialog} // "확인" 버튼
        onCancel={closeAlertDialog} // "닫기" 버튼 (원하면 생략 가능)
        width="max-w-md"
        showButtons
      >
        {alertDialogMessage}
      </CommonDialogWithCustomAlertStyle>
    </>
  );
}