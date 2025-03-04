
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
//   Edit, Copy, Activity, Trash2, Monitor, Settings, Search, List, Clock, History,
//   UserCheck, Shield, RefreshCcw, AlertTriangle, Check, ChevronRight
// } from "lucide-react";
// import { useState, useRef } from "react";
// import BlackListCountPopup from '@/features/campaignManager/components/popups/BlackListCountPopup';
// import { toast } from 'react-toastify';
// import { useApiForCampaignStatusUpdate } from "../../hooks/useApiForCampaignStatusUpdate";
// import { useApiForCampaignBlacklistCount } from "@/features/listManager/hooks/useApiForCampaignBlacklistCount";

// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import useApiForCampaignListDelete from "@/features/listManager/hooks/useApiForCampaignListDelete";

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

// export function ContextMenuForTreeNode({
//   children,
//   item,
//   onEdit,
//   onMonitor,
//   onHandleCampaignCopy,
// }: ContextMenuForTreeNodeProps) {
//   const isFolder = item.type === "folder";
//   const { simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu, addTab, simulateHeaderMenuClick } = useTabStore();
//   const [isBlacklistPopupOpen, setIsBlacklistPopupOpen] = useState(false);
//   const [currentStatus, setCurrentStatus] = useState<CampaignStatus>(item.status);
//   const [blackListCount, setBlackListCount] = useState<number>(0);
//   const preventCloseRef = useRef(false);

//   // 상태 관련 정보
//   const statusInfo = {
//     started: { label: "시작", color: "#22c55e" },
//     pending: { label: "멈춤", color: "#eab308" },
//     stopped: { label: "중지", color: "#ef4444" },
//   };

//   const updateCampaignStatusMutation = useApiForCampaignStatusUpdate({
//     onSuccess: (data) => {
//       toast.success("캠페인 상태가 성공적으로 변경되었습니다.", {
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });

//       // API 호출 완료 후에도 창이 닫히지 않도록 플래그 유지
//       preventCloseRef.current = true;
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

//   const handleCampaignListDelete = (campaingId: any) => {

//     console.log('캠페인 리스트 삭제 클릭 id ??? : ', campaingId);
    

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

//     // Call the mutation with campaign ID
//     deleteCampaignList(campaingId);
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

//   const handleRebroadcastClick = () => {
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
//     console.log('캠페인 삭제 클릭 : ', status);
//     const uniqueKey = `monitor-${Date.now()}`;

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
//       uniqueKey: uniqueKey,
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

//   const handleStartClick = async (status: CampaignStatus) => {
//     // 이미 선택된 상태거나 로딩 중이면 무시
//     if (currentStatus === status || updateCampaignStatusMutation.isPending) {
//       return;
//     }

//     try {
//       console.log('Status change requested:', {
//         campaignId: item.id,
//         campaignName: item.label,
//         previousStatus: currentStatus,
//         newStatus: status
//       });

//       // 메뉴를 열린 상태로 유지하기 위한 플래그 설정
//       preventCloseRef.current = true;

//       // API 호출
//       await updateCampaignStatusMutation.mutateAsync({
//         campaign_id: Number(item.id),
//         campaign_status: getStatusNumber(status)
//       });

//       // 로컬 상태 업데이트
//       setCurrentStatus(status);

//       console.log('Status changed successfully:', {
//         campaignId: item.id,
//         campaignName: item.label,
//         status: status,
//         timestamp: new Date().toISOString()
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

//   //캠페인 블랙리스트 건수 조회 api 호출
//   const { mutate: fetchCampaignBlacklistCount } = useApiForCampaignBlacklistCount({
//     onSuccess: (data) => {
//       setBlackListCount(data.result_data.blacklist_count);
//       setTimeout(() => {
//         setIsBlacklistPopupOpen(true);
//       }, 100);
//     }
//   });

//   //캠페인 블랙리스트 건수 조회 클릭 이벤트.
//   const handleBlacklistCountCheckClick = () => {
//     fetchCampaignBlacklistCount(Number(item.id));
//   };

//   return (
//     <>
//       <ContextMenu>
//         <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
//         <ContextMenuContent className="w-[150px]">
//           <ContextMenuItem onClick={handleEditMenuClick} className="flex items-center text-sm">
//             {/* <Edit className="mr-2 h-4 w-4 text-gray-500" /> */}
//             캠페인 수정
//           </ContextMenuItem>

//           <ContextMenuSub>
//             <ContextMenuSubTrigger
//               className="flex items-center text-sm"
//               onPointerDown={(e) => {
//                 // 트리거 클릭 시 preventClose 플래그 초기화
//                 preventCloseRef.current = false;
//               }}
//             >
//               {/* <Search className="mr-2 h-4 w-4 text-gray-500" /> */}
//               <span className="flex items-center">
//                 시작구분:
//                 <span className="ml-1 flex items-center">
//                   <div className="w-4 h-4 mr-1">
//                     <Image
//                       src={getStatusIcon(currentStatus) || ''}
//                       alt={currentStatus}
//                       width={16}
//                       height={16}
//                     />
//                   </div>
//                   {statusInfo[currentStatus].label}
//                 </span>
//               </span>
//             </ContextMenuSubTrigger>

//             <ContextMenuSubContent
//               className="min-w-[120px] p-1"
//               onPointerDownOutside={(e) => {
//                 if (preventCloseRef.current) {
//                   // 상태 변경 후 메뉴가 닫히지 않도록 처리
//                   e.preventDefault();
//                   preventCloseRef.current = false;
//                 }
//               }}
//             >
//               {(Object.keys(statusInfo) as Array<CampaignStatus>).map((status) => (
//                 <ContextMenuItem
//                   key={status}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleStartClick(status);
//                     preventCloseRef.current = true;
//                   }}
//                   className={cn(
//                     "flex items-center justify-between text-sm px-2 py-1.5",
//                     currentStatus === status ? "bg-gray-50" : "",
//                     updateCampaignStatusMutation.isPending ? "opacity-70" : ""
//                   )}
//                   disabled={updateCampaignStatusMutation.isPending}
//                 >
//                   <div className="flex items-center">
//                     <div className="w-4 h-4 mr-2">
//                       <Image
//                         src={getStatusIcon(status) || ''}
//                         alt={status}
//                         width={16}
//                         height={16}
//                       />
//                     </div>
//                     <span>{statusInfo[status].label}</span>
//                   </div>

//                   {/* 현재 선택된 상태에만 체크 표시 */}
//                   {currentStatus === status && (
//                     <Check className="h-4 w-4 text-green-500" />
//                   )}
//                 </ContextMenuItem>
//               ))}
//             </ContextMenuSubContent>
//           </ContextMenuSub>

//           <ContextMenuItem
//             onClick={() => handleProgressInfoClick(item.id, item.label)}
//             className="flex items-center text-sm"
//           >
//             {/* <Settings className="mr-2 h-4 w-4 text-gray-500" /> */}
//             캠페인 진행정보
//           </ContextMenuItem>

//           <ContextMenuSeparator className="my-1" />

//           <ContextMenuItem
//             onClick={handleRebroadcastClick}
//             className="flex items-center text-sm"
//           >
//             {/* <RefreshCcw className="mr-2 h-4 w-4 text-gray-500" /> */}
//             재발신
//           </ContextMenuItem>

//           <ContextMenuSeparator className="my-1" />

//           <ContextMenuItem
//             onClick={onHandleCampaignCopy}
//             className="flex items-center text-sm"
//           >
//             {/* <Copy className="mr-2 h-4 w-4 text-gray-500" /> */}
//             캠페인 복사
//           </ContextMenuItem>

//           {!isFolder && (
//             <ContextMenuItem
//               onClick={() => onCampaignDelete(currentStatus, item.id, item.label)}
//               className="flex items-center text-sm text-red-500"
//             >
//               {/* <Trash2 className="mr-2 h-4 w-4" /> */}
//               캠페인 삭제
//             </ContextMenuItem>
//           )}

//           <ContextMenuSeparator className="my-1" />

//           {/* current status가 stopped 일 경우 캠페인 리스트 삭제 버튼 출력 */}
//           {currentStatus === 'stopped' && (
//             <ContextMenuItem
//               onClick={() => handleCampaignListDelete(item.id)}
//               className="flex items-center text-sm"
//             >
//               {/* <List className="mr-2 h-4 w-4 text-gray-500" /> */}
//               캠페인 리스트 삭제
//             </ContextMenuItem>
//           )}

//           <ContextMenuSeparator className="my-1" />

//           <ContextMenuItem
//             onClick={() => handleMonitorClick(item.id, item.label)}
//             className="flex items-center text-sm"
//           >
//             {/* <Activity className="mr-2 h-4 w-4 text-gray-500" /> */}
//             상담원 상태 모니터
//           </ContextMenuItem>

//           <ContextMenuItem
//             onClick={handleBlacklistCountCheckClick}
//             className="flex items-center text-sm"
//           >
//             {/* <Shield className="mr-2 h-4 w-4 text-gray-500" /> */}
//             블랙리스트 건수 조회
//           </ContextMenuItem>
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
import {
  Edit,
  Copy,
  Activity,
  Trash2,
  Monitor,
  Settings,
  Search,
  List,
  Clock,
  History,
  UserCheck,
  Shield,
  RefreshCcw,
  AlertTriangle,
  Check,
  ChevronRight,
} from "lucide-react";
import { useState, useRef } from "react";
import BlackListCountPopup from '@/features/campaignManager/components/popups/BlackListCountPopup';
import { toast } from "react-toastify";
import { useApiForCampaignStatusUpdate } from "../../hooks/useApiForCampaignStatusUpdate";
import { useApiForCampaignBlacklistCount } from "@/features/listManager/hooks/useApiForCampaignBlacklistCount";
import { cn } from "@/lib/utils";
import Image from "next/image";
import useApiForCampaignListDelete from "@/features/listManager/hooks/useApiForCampaignListDelete";

export type CampaignStatus = "started" | "pending" | "stopped";

export const getStatusIcon = (status?: string) => {
  switch (status) {
    case "started":
      return "/sidebar-menu/tree_play.svg";
    case "pending":
      return "/sidebar-menu/tree_pause.svg";
    case "stopped":
      return "/sidebar-menu/tree_stop.svg";
    default:
      return null;
  }
};

interface ContextMenuForTreeNodeProps {
  children: React.ReactNode;
  item: {
    id: string;
    label: string;
    type: any;
    status: CampaignStatus;
  };
  onEdit: () => void;
  onMonitor: () => void;
  onHandleCampaignCopy: () => void;
}

export function ContextMenuForTreeNode({
  children,
  item,
  onEdit,
  onMonitor,
  onHandleCampaignCopy,
}: ContextMenuForTreeNodeProps) {
  const isFolder = item.type === "folder";
  // 신버젼에서는 simulateHeaderMenuClick와 addMultiTab 대신 openTabV2를 사용합니다.
  const { openTabV2, addTab } = useTabStore();
  const [isBlacklistPopupOpen, setIsBlacklistPopupOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<CampaignStatus>(item.status);
  const [blackListCount, setBlackListCount] = useState<number>(0);
  const preventCloseRef = useRef(false);

  const statusInfo = {
    started: { label: "시작", color: "#22c55e" },
    pending: { label: "멈춤", color: "#eab308" },
    stopped: { label: "중지", color: "#ef4444" },
  };

  const updateCampaignStatusMutation = useApiForCampaignStatusUpdate({
    onSuccess: (data) => {
      toast.success("캠페인 상태가 성공적으로 변경되었습니다.", {
        position: "top-center",
        autoClose: 3000,
      });
      // API 호출 완료 후 메뉴가 닫히지 않도록 플래그 유지
      preventCloseRef.current = true;
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
      console.log("캠페인 리스트 삭제 성공 : ", data);
      toast.success("캠페인 리스트가 성공적으로 삭제되었습니다.", {
        position: "top-center",
        autoClose: 3000,
      });
    },
    onError: (error) => {
      toast.error(error.message || "리스트 삭제 중 오류가 발생했습니다.", {
        position: "top-center",
        autoClose: 3000,
      });
    },
  });

  const handleCampaignListDelete = (campaignId: any) => {
    console.log("캠페인 리스트 삭제 클릭 id : ", campaignId);
    if (currentStatus !== "stopped") {
      toast.error("캠페인이 중지 상태일 때만 리스트를 삭제할 수 있습니다.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    deleteCampaignList(campaignId);
  };

  // 캠페인 수정: tabId 2 사용 (신버전)
  const handleEditMenuClick = () => {
    openTabV2(2, "캠페인 수정", { campaignId: item.id });
  };

  // 캠페인 진행정보: tabId 21 사용 (신버전)
  const handleProgressInfoClick = (campaignId: any, campaignName: string) => {
    openTabV2(21, `캠페인 진행정보 - ${campaignName}`, { campaignId });
  };

  // 재발신 설정: tabId 20 사용 (신버전)
  const handleRebroadcastClick = () => {
    openTabV2(20, "재발신 설정");
  };

  // 상담원 상태 모니터: tabId 22 사용 (신버전)
  const handleMonitorClick = (campaignId: any, campaignName: string) => {
    openTabV2(22, `상담원 상태 모니터 - ${campaignName}`, { campaignId });
  };

  const onCampaignDelete = (status: string, campaignId: any, campaignName: string) => {
    console.log("캠페인 삭제 클릭 : ", status);
    if (status !== "stopped") {
      toast.error("캠페인이 중지 상태일 때만 삭제할 수 있습니다.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    openTabV2(131, `상담원 삭제 - ${campaignName}`, { campaignId, campaignName });
  };

  const getStatusNumber = (status: CampaignStatus): number => {
    switch (status) {
      case "started":
        return 1;
      case "pending":
        return 2;
      case "stopped":
        return 3;
      default:
        return 0;
    }
  };

  const handleStartClick = async (status: CampaignStatus) => {
    if (currentStatus === status || updateCampaignStatusMutation.isPending) {
      return;
    }
    try {
      console.log("Status change requested:", {
        campaignId: item.id,
        campaignName: item.label,
        previousStatus: currentStatus,
        newStatus: status,
      });
      preventCloseRef.current = true;
      await updateCampaignStatusMutation.mutateAsync({
        campaign_id: Number(item.id),
        campaign_status: getStatusNumber(status),
      });
      setCurrentStatus(status);
      console.log("Status changed successfully:", {
        campaignId: item.id,
        campaignName: item.label,
        status: status,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error changing campaign status:", {
        campaignId: item.id,
        campaignName: item.label,
        attemptedStatus: status,
        error: error,
      });
    }
  };

  const { mutate: fetchCampaignBlacklistCount } = useApiForCampaignBlacklistCount({
    onSuccess: (data) => {
      setBlackListCount(data.result_data.blacklist_count);
      setTimeout(() => {
        setIsBlacklistPopupOpen(true);
      }, 100);
    },
  });

  const handleBlacklistCountCheckClick = () => {
    fetchCampaignBlacklistCount(Number(item.id));
  };

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
        <ContextMenuContent className="w-[150px]">
          <ContextMenuItem onClick={handleEditMenuClick} className="flex items-center text-sm">
            캠페인 수정
          </ContextMenuItem>

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
                      src={getStatusIcon(currentStatus) || ""}
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
                    handleStartClick(status);
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
                        src={getStatusIcon(status) || ""}
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

          <ContextMenuItem
            onClick={() => handleProgressInfoClick(item.id, item.label)}
            className="flex items-center text-sm"
          >
            캠페인 진행정보
          </ContextMenuItem>

          <ContextMenuSeparator className="my-1" />

          <ContextMenuItem
            onClick={handleRebroadcastClick}
            className="flex items-center text-sm"
          >
            재발신
          </ContextMenuItem>

          <ContextMenuSeparator className="my-1" />

          <ContextMenuItem
            onClick={onHandleCampaignCopy}
            className="flex items-center text-sm"
          >
            캠페인 복사
          </ContextMenuItem>

          {!isFolder && (
            <ContextMenuItem
              onClick={() => onCampaignDelete(currentStatus, item.id, item.label)}
              className="flex items-center text-sm text-red-500"
            >
              캠페인 삭제
            </ContextMenuItem>
          )}

          <ContextMenuSeparator className="my-1" />

          {currentStatus === "stopped" && (
            <ContextMenuItem
              onClick={() => handleCampaignListDelete(item.id)}
              className="flex items-center text-sm"
            >
              캠페인 리스트 삭제
            </ContextMenuItem>
          )}

          <ContextMenuSeparator className="my-1" />

          <ContextMenuItem
            onClick={() => handleMonitorClick(item.id, item.label)}
            className="flex items-center text-sm"
          >
            상담원 상태 모니터
          </ContextMenuItem>

          <ContextMenuItem
            onClick={handleBlacklistCountCheckClick}
            className="flex items-center text-sm"
          >
            블랙리스트 건수 조회
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      {isBlacklistPopupOpen && (
        <BlackListCountPopup
          campaignId={item.id}
          blackListCount={blackListCount}
          isOpen={isBlacklistPopupOpen}
          onConfirm={() => setIsBlacklistPopupOpen(false)}
          onCancel={() => setIsBlacklistPopupOpen(false)}
        />
      )}
    </>
  );
}
