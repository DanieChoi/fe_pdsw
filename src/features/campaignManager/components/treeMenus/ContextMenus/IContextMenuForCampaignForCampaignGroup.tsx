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
import { useSideMenuCampaignGroupTabStore } from "@/store/storeForSideMenuCampaignGroupTab";
import { useAvailableMenuStore } from "@/store/useAvailableMenuStore"; // 권한 관리 스토어 추가
import { Check } from "lucide-react";
import { useState, useRef } from "react";
import BlackListCountPopup from '@/features/campaignManager/components/popups/BlackListCountPopup';
import { toast } from 'react-toastify';
import { useApiForCampaignBlacklistCount } from "@/features/listManager/hooks/useApiForCampaignBlacklistCount";
import { cn } from "@/lib/utils";
import Image from "next/image";
import useApiForCampaignListDelete from "@/features/listManager/hooks/useApiForCampaignListDelete";
import { useApiForCampaignStatusUpdate } from "@/features/campaignManager/hooks/useApiForCampaignStatusUpdate";
import IDialogButtonForCampaingDelete from "../dialog/IDialogButtonForCampaingDelete";
import React from "react";
import { useCampainManagerStore } from "@/store/campainManagerStore";
import { useApiForMain } from "@/features/auth/hooks/useApiForMain";
import { useMainStore } from "@/store/mainStore";
import { useAuthStore } from "@/store/authStore";

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

// 인터페이스 정의
interface ContextMenuForTreeNodeProps {
  children: React.ReactNode;
  item: {
    id: any;
    label: string;
    type: any;
    status: CampaignStatus;
  };
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

export function IContextMenuForCampaignForCampaignGroup({
  children,
  item,
  onEdit,
  onMonitor,
  onHandleCampaignCopy,
  tenantIdForCampaignTab,
}: ContextMenuForTreeNodeProps) {
  const isFolder = item.type === "folder";
  const { simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu, setCampaignIdForCopyCampaign, addTab, addMultiTab } = useTabStore();

  // Zustand 스토어에서 updateCampaignStatus 함수 가져오기
  const { updateCampaignStatus, refetchTreeDataForCampaignGroupTab } = useSideMenuCampaignGroupTabStore();

  // 권한 관리 스토어에서 사용 가능한 메뉴 ID 가져오기
  const availableMenuIds = useAvailableMenuStore(
    (state) => state.availableMenuIdsForCampaignGroupTabCampaign
  );

  const [isBlacklistPopupOpen, setIsBlacklistPopupOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<CampaignStatus>(item.status);
  const [blackListCount, setBlackListCount] = useState<number>(0);
  const preventCloseRef = useRef(false);

  const { tenant_id, role_id, session_key } = useAuthStore();

  const { tenants
    , setCampaigns
    , selectedCampaign
    , setSelectedCampaign
  } = useMainStore();

  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      setCampaigns(data.result_data);
      // if( tenant_id === 0){
      //   setCampaigns(data.result_data);
      // }else{
      //   setCampaigns(data.result_data.filter(data=>data.tenant_id === tenant_id));
      // }
      setSelectedCampaign(data.result_data.filter((campaign) => campaign.campaign_id === selectedCampaign?.campaign_id)[0]);
    }
  });

  // 상태 관련 정보
  const statusInfo = {
    started: { label: "시작", color: "#22c55e" },
    pending: { label: "멈춤", color: "#eab308" },
    stopped: { label: "중지", color: "#ef4444" },
  };

  const updateCampaignStatusMutation = useApiForCampaignStatusUpdate({
    onSuccess: (data) => {
      // toast.success("캠페인 상태가 변경되었습니다22.");
      preventCloseRef.current = true;
      
      console.log("캠페인 상태 업데이트");
    
      fetchMain({
        session_key: session_key,
        tenant_id: tenant_id
      });

    },
    onError: (error) => {
      toast.error(error.message || "상태 변경 중 오류가 발생했습니다.");
    },
  });

  const { mutate: deleteCampaignList } = useApiForCampaignListDelete({
    // onSuccess: (data) => {
    //   toast.success(".");
    // },
    // onError: (error) => {
    //   toast.error(error.message || "리스트 삭제 중 오류가 발생했습니다.");
    // },
  });

  const handleCampaignListDelete = (campaignId: any) => {
    if (currentStatus !== 'stopped') {
      toast.error("캠페인이 중지 상태일 때만 리스트를 삭제할 수 있습니다.");
      return;
    }
    deleteCampaignList(campaignId);
  };

  const handleEditMenuClick = () => {
    if (onEdit) {
      onEdit();
      return;
    }

    simulateHeaderMenuClick(2);
    setCampaignIdForUpdateFromSideMenu(item.id);
  };

  const handleProgressInfoClick = (campaignId: any, campaignName: string) => {
    const uniqueKey = `progress-info-${campaignId}-${Date.now()}`;

    addMultiTab({
      id: 21,
      uniqueKey: uniqueKey,
      title: `캠페인 진행정보 - ${campaignName}`,
      icon: '',
      href: '',
      content: null,
      campaignId: campaignId
    });
  };

  const handleRebroadcastClick = (campaignId: any) => {
    setCampaignIdForUpdateFromSideMenu(campaignId);
    addTab({
      id: 20,
      uniqueKey: '20',
      title: '재발신 설정',
      icon: '',
      href: '',
      content: null,
    });
  };

  const handleMonitorClick = (tenantIdForCampaignTab:any , campaignId: any, campaignName: string) => {
    // if (onMonitor) {
    //   onMonitor();
    //   return;
    // }

    console.log("캠페인 그룹에서 상담원 상태 모니터 클릭 했을때 tenantId : ", tenantIdForCampaignTab);
    

    const uniqueKey = `monitor-${Date.now()}`;

    addMultiTab({
      id: 22,
      uniqueKey: uniqueKey,
      title: `상담사 상태 모니터 - ${campaignName}`,
      icon: '',
      href: '',
      content: null,
      campaignId: campaignId,
      params: {
        campaignId: campaignId,
        campaignName: campaignName,
        tenantId: tenantIdForCampaignTab,
      }
    });
  };

  const handleCampaignCopy = () => {
    if (onHandleCampaignCopy) {
      onHandleCampaignCopy();
      return;
    }

    console.log(`캠페인 복사: ${item.label} (ID: ${item.id})`);
    setCampaignIdForUpdateFromSideMenu(item.id);
    setCampaignIdForCopyCampaign(item.id);
    addTab({
      id: 130,
      uniqueKey: "130",
      title: "캠페인 복사",
      icon: "",
      href: "",
      content: null,
    });
  };

  const onCampaignDelete = (status: string) => {
    if (status !== 'stopped') {
      toast.error("캠페인이 중지 상태일 때만 삭제할 수 있습니다.");
      return;
    }

    // 다이얼로그 열기
    setIsDeleteDialogOpen(true);
  };

  const getStatusNumber = (status: CampaignStatus): number => {
    switch (status) {
      case 'started': return 1;
      case 'pending': return 2;
      case 'stopped': return 3;
      default: return 0;
    }
  };

  const handleStartClick = async (status: CampaignStatus) => {
    if (currentStatus === status || updateCampaignStatusMutation.isPending) {
      return;
    }

    try {
      preventCloseRef.current = true;

      // 상태 번호 얻기
      const statusNumber = getStatusNumber(status);

      // API 호출
      await updateCampaignStatusMutation.mutateAsync({
        campaign_id: Number(item.id),
        campaign_status: statusNumber
      });

      // 로컬 상태 업데이트
      setCurrentStatus(status);

      // 트리 데이터의 상태도 업데이트 (API 호출이 성공한 후)
      updateCampaignStatus(item.id, statusNumber);

      // 전체 트리 데이터 다시 가져오기 (렌더링 강제)
      await refetchTreeDataForCampaignGroupTab();

    } catch (error) {
      console.error('Error changing campaign status:', error);
    }
  };

  // 캠페인 블랙리스트 건수 조회 API 호출
  const { mutate: fetchCampaignBlacklistCount } = useApiForCampaignBlacklistCount({
    onSuccess: (data) => {
      setBlackListCount(data.result_data.blacklist_count);
      setTimeout(() => {
        setIsBlacklistPopupOpen(true);
      }, 100);
    }
  });

  // 캠페인 블랙리스트 건수 조회 클릭 이벤트
  const handleBlacklistCountCheckClick = () => {
    fetchCampaignBlacklistCount(Number(item.id));
  };

  // 메뉴 아이템 정의 (JSON의 SGC 값 기준)
  const menuItems = [
    // 첫 번째 그룹
    {
      id: 46,
      group: 1,
      key: "edit-campaign",
      label: "캠페인 수정",
      action: handleEditMenuClick
    },
    {
      id: 47,
      group: 1,
      key: "start-division",
      label: "시작구분",
      isSubmenu: true,
      subItems: [
        { id: 48, key: "start", label: "시작", status: "started" },
        { id: 49, key: "pause", label: "멈춤", status: "pending" },
        { id: 50, key: "stop", label: "중지", status: "stopped" }
      ],
      render: () => (
        <ContextMenuSub>
          <ContextMenuSubTrigger onPointerDown={() => { preventCloseRef.current = false; }}>
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
            className="min-w-[110px] p-1"
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
                      src={getStatusIcon(status) || ''}
                      alt={status}
                      width={16}
                      height={16}
                    />
                  </div>
                  <span>{statusInfo[status].label}</span>
                </div>

                {currentStatus === status && (
                  <Check className="h-3 w-3 text-green-500" />
                )}
              </ContextMenuItem>
            ))}
          </ContextMenuSubContent>
        </ContextMenuSub>
      )
    },
    {
      id: 51,
      group: 1,
      key: "progress-info",
      label: "캠페인 진행정보",
      action: () => handleProgressInfoClick(item.id, item.label)
    },

    // 두 번째 그룹
    {
      id: 52,
      group: 2,
      key: "rebroadcast",
      label: "재발신",
      action: () => handleRebroadcastClick(item.id)
    },

    // 세 번째 그룹
    {
      id: 53,
      group: 3,
      key: "copy-campaign",
      label: "캠페인 복사",
      action: handleCampaignCopy
    },
    {
      id: 54,
      group: 3,
      key: "delete-campaign",
      label: "캠페인 삭제",
      action: () => onCampaignDelete(currentStatus),
      className: "text-red-500",
      condition: !isFolder
    },

    // 네 번째 그룹
    {
      id: 55,
      group: 4,
      key: "delete-campaign-list",
      label: "캠페인 리스트 삭제",
      action: () => handleCampaignListDelete(item.id),
      condition: currentStatus === 'stopped'
    },
    {
      id: 56,
      group: 4,
      key: "monitor",
      label: "상담사 상태 모니터22",
      action: () => handleMonitorClick(tenantIdForCampaignTab, item.id, item.label)
    },
    {
      id: 57,
      group: 4,
      key: "blacklist-count",
      label: "블랙리스트 건수 조회",
      action: handleBlacklistCountCheckClick
    }
  ];

  // 권한에 따라 메뉴 항목 필터링
  const visibleMenuItems = availableMenuIds?.length > 0
    ? menuItems.filter(item =>
      availableMenuIds.includes(item.id) &&
      (item.condition === undefined || item.condition)
    )
    : [];

  // 표시할 메뉴 항목이 없으면 기본 컨텍스트 메뉴만 표시
  if (visibleMenuItems.length === 0) {
    return (
      <ContextMenu>
        <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
        <ContextMenuContent className="w-[150px]">
          <ContextMenuItem disabled>
            권한이 없습니다
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  }

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
        <ContextMenuContent className="w-[150px]">
          {visibleMenuItems.map((item, index, arr) => {
            // 현재 아이템과 이전 아이템이 다른 그룹인 경우 구분선 추가
            const prevItem = index > 0 ? arr[index - 1] : null;
            const showSeparator = prevItem && prevItem.group !== item.group;

            return (
              <React.Fragment key={item.key}>
                {showSeparator && <ContextMenuSeparator className="my-1" />}

                {item.isSubmenu ? (
                  item.render()
                ) : (
                  <ContextMenuItem
                    onClick={item.action}
                    className={item.className}
                  >
                    {item.label}
                  </ContextMenuItem>
                )}
              </React.Fragment>
            );
          })}
        </ContextMenuContent>
      </ContextMenu>

      {/* 블랙리스트 팝업 */}
      {isBlacklistPopupOpen && (
        <BlackListCountPopup
          campaignId={item.id}
          blackListCount={blackListCount}
          isOpen={isBlacklistPopupOpen}
          onConfirm={() => setIsBlacklistPopupOpen(false)}
          onCancel={() => setIsBlacklistPopupOpen(false)}
        />
      )}

      {/* 캠페인 삭제 다이얼로그 */}
      {isDeleteDialogOpen && (
        <IDialogButtonForCampaingDelete
          isOpen={isDeleteDialogOpen}
          onOpenChange={(open) => setIsDeleteDialogOpen(open)}
          campaignId={item.id}
          campaignName={item.label}
          tenant_id={tenantIdForCampaignTab}
        />
      )}
    </>
  );
}