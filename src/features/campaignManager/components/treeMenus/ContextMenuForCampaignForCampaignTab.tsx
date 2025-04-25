"use client";

import React, { useState, useRef, JSX, useEffect } from "react";
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
import { toast } from "react-toastify";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { useAvailableMenuStore } from "@/store/useAvailableMenuStore";
import { useMainStore } from "@/store/mainStore";
import { useAuthStore } from "@/store/authStore";
import { useApiForMain } from "@/features/auth/hooks/useApiForMain";
import { useApiForCampaignStatusUpdate } from "@/features/campaignManager/hooks/useApiForCampaignStatusUpdate";
import { useApiForCampaignBlacklistCount } from "@/features/listManager/hooks/useApiForCampaignBlacklistCount";
import useApiForCampaignListDelete from "@/features/listManager/hooks/useApiForCampaignListDelete";
import BlackListCountPopup from "@/features/campaignManager/components/popups/BlackListCountPopup";
import CustomAlert, { CustomAlertRequest } from "@/components/shared/layout/CustomAlert";
import IDialogButtonForCampaingDelete from "./dialog/IDialogButtonForCampaingDelete";
import { customAlertService } from "@/components/shared/layout/utils/CustomAlertService";


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

const errorMessage: CustomAlertRequest = {
  isOpen: false,
  message: '',
  title: '캠페인',
  type: '1',
  onClose: () => { },
  onCancle: () => { },
};

interface ContextMenuForTreeNodeProps {
  children: React.ReactNode;
  item: {
    id: string;
    label: string;
    type: any;
    status: CampaignStatus;
  };
  tenantIdForCampaignTab: any;
  onEdit: () => void;
  onMonitor: () => void;
  onHandleCampaignCopy: () => void;
}

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

export function ContextMenuForCampaignForCampaignTab({
  children,
  item,
  onEdit,
  onMonitor,
  tenantIdForCampaignTab,
  onHandleCampaignCopy,
}: ContextMenuForTreeNodeProps) {
  const isFolder = item.type === "folder";
  const { simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu, addTab, addMultiTab, addOnlyTab } = useTabStore();
  const [isBlacklistPopupOpen, setIsBlacklistPopupOpen] = useState(false);
  const [blackListCount, setBlackListCount] = useState<number>(0);
  const [maxBlacklistCount, setMaxBlacklistCount] = useState<number>(1000000);
  const [commonBlacklistCount, setCommonBlacklistCount] = useState<number>(0);

  const preventCloseRef = useRef(false);
  const [alertState, setAlertState] = useState<CustomAlertRequest>(errorMessage);
  const { availableCampaignTabCampaignContextMenuIds } = useAvailableMenuStore();

  const { tenant_id, role_id, session_key } = useAuthStore();
  const { campaigns, setCampaigns, selectedCampaign, setSelectedCampaign } = useMainStore();

  // Get current status directly from the campaigns store to ensure we always have the latest status
  const currentCampaign = campaigns?.find((c: any) => c.campaign_id === Number(item.id));
  const [displayStatus, setDisplayStatus] = useState<CampaignStatus>(item.status);


  // Update the displayed status whenever the item prop or campaigns state changes
  useEffect(() => {
    if (currentCampaign) {
      const statusMap: Record<number, CampaignStatus> = {
        1: "started",
        2: "pending",
        3: "stopped"
      };
      const updatedStatus = statusMap[currentCampaign.campaign_status] || item.status;
      setDisplayStatus(updatedStatus);
    } else {
      setDisplayStatus(item.status);
    }
  }, [currentCampaign, item.status, campaigns]);

  // ====== API HOOKS ======
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      setCampaigns(data.result_data);
      setSelectedCampaign(
        data.result_data.find(
          (c: any) => c.campaign_id === selectedCampaign?.campaign_id
        ) || null
      );
    },
  });

  const updateCampaignStatusMutation = useApiForCampaignStatusUpdate({
    onSuccess: () => {
      preventCloseRef.current = true;
      // Refresh campaigns data after status update

      customAlertService.success(
        '캠페인 상태가 성공적으로 변경되었습니다!',
        '캠페인 상태 변경 완료'
      );;


      fetchMain({ session_key, tenant_id });
    },
    onError: (error) => {
      toast.error(error.message || "상태 변경 중 오류가 발생했습니다.");
    },
  });

  const { mutate: deleteCampaignList } = useApiForCampaignListDelete({});
  const { mutate: fetchCampaignBlacklistCount } = useApiForCampaignBlacklistCount({
    onSuccess: (data) => {
      setBlackListCount(data.result_data.blacklist_count);
      setMaxBlacklistCount(data.result_data.max_count);
      setCommonBlacklistCount(data.result_data.common_count);
      setTimeout(() => {
        setIsBlacklistPopupOpen(true);
      }, 100);
    },
  });

  // ====== HELPER FUNCTIONS ======
  const statusInfo = {
    started: { label: "시작", color: "#22c55e" },
    pending: { label: "멈춤", color: "#eab308" },
    stopped: { label: "중지", color: "#ef4444" },
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

  const handleEditMenuClick = () => {
    simulateHeaderMenuClick(2);
    setCampaignIdForUpdateFromSideMenu(item.id);
  };

  // tofix-0424 동일한 캠페인 진행 정보 탭이 중복으로 추가 되지 않도록 수정 필요 
  const handleProgressInfoClick = (campaignId: string, campaignName: string) => {
    const uniqueKey = `progress-info-${campaignId}-${Date.now()}`;
    useTabStore.getState().addOnlyTab(
      {
        id: 21,
        uniqueKey,
        title: `캠페인 진행정보 - ${campaignName}`,
        icon: '',
        href: '',
        content: null,
        campaignId,
      },
      (tab) => tab.id === 21 && tab.campaignId === campaignId
    );
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

  const handleMonitorClick = (tenantIdForCampaignTab: any, campaignId: any, campaignName: string) => {
    console.log("tenantId 확인 at 캠페인탭 : ", tenantIdForCampaignTab);

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
        sessionKey: session_key,
        campaignId: campaignId,
        tenantId: tenantIdForCampaignTab,
      },
    });
  };

  const handleCampaignListDelete = (campaignId: any) => {
    if (displayStatus !== "stopped") {
      toast.error("캠페인이 중지 상태일 때만 리스트를 삭제할 수 있습니다.");
      return;
    }
    deleteCampaignList(campaignId);
  };

  const handleCampaingProgressUpdate = async (status: CampaignStatus) => {
    if (displayStatus === status || updateCampaignStatusMutation.isPending) {
      return;
    }

    try {
      preventCloseRef.current = true;
      // Set optimistic update for better UX
      setDisplayStatus(status);

      await updateCampaignStatusMutation.mutateAsync({
        campaign_id: Number(item.id),
        campaign_status: getStatusNumber(status),
      });

      // The fetchMain will be called in onSuccess callback
    } catch (error) {
      // Revert to the actual status if there's an error
      if (currentCampaign) {
        const statusMap: Record<number, CampaignStatus> = {
          1: "started",
          2: "pending",
          3: "stopped"
        };
        setDisplayStatus(statusMap[currentCampaign.campaign_status] || item.status);
      } else {
        setDisplayStatus(item.status);
      }

      console.error('Error changing campaign status:', {
        campaignId: item.id,
        campaignName: item.label,
        attemptedStatus: status,
        error: error,
      });
    }
  };

  const handleBlacklistCountCheckClick = () => {
    fetchCampaignBlacklistCount(Number(item.id));
  };

  // ====== SUB MENU FOR STATUS ======
  const renderStatusSubMenu = () => (
    <ContextMenuSub>
      <ContextMenuSubTrigger
        className="flex items-center text-sm"
        onPointerDown={() => {
          preventCloseRef.current = false;
        }}
      >
        <span className="flex items-center">
          시작구분:
          <span className="ml-1 flex items-center">
            <div className="w-4 h-4 mr-1">
              <Image
                src={getStatusIcon(displayStatus) || ''}
                alt={displayStatus}
                width={16}
                height={16}
              />
            </div>
            {statusInfo[displayStatus].label}
          </span>
        </span>
      </ContextMenuSubTrigger>
      <ContextMenuSubContent
        className="min-w-[120px] p-1"
      // onPointerDownOutside={(e) => {
      //   if (preventCloseRef.current) {
      //     e.preventDefault();
      //     preventCloseRef.current = false;
      //   }
      // }}
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
              displayStatus === status ? "bg-gray-50" : "",
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
            {displayStatus === status && (
              <Check className="h-4 w-4 text-green-500" />
            )}
          </ContextMenuItem>
        ))}
      </ContextMenuSubContent>
    </ContextMenuSub>
  );

  // ====== MAIN MENU ======
  const mainMenuItems: MenuItemDefinition[] = [
    {
      key: "edit",
      title: "캠페인 수정",
      onClick: handleEditMenuClick,
      menuId: 19,
    },
    {
      key: "status",
      render: renderStatusSubMenu,
      menuId: 20,
    },
    {
      key: "progress",
      title: "캠페인 진행정보",
      onClick: () => handleProgressInfoClick(item.id, item.label),
      menuId: 24,
    },
    {
      key: "separator1",
      type: "separator",
    },
    {
      key: "rebroadcast",
      title: "재발신",
      onClick: () => handleRebroadcastClick(item.id),
      menuId: 25,
    },
    {
      key: "separator2",
      type: "separator",
    },
    {
      key: "copy",
      title: "캠페인 복사",
      onClick: onHandleCampaignCopy,
      menuId: 26,
    },
    {
      key: "delete",
      // 캠페인 삭제를 다이얼로그 버튼으로 대체
      render: () => (
        <div className="py-1" key="delete">
          <IDialogButtonForCampaingDelete
            campaignId={item.id}
            tenant_id={tenantIdForCampaignTab}
            campaignName={item.label}
            variant="ghost"
            size="sm"
            className="w-full justify-start text-left text-red-500"
            buttonText="캠페인 삭제"
            isDisabled={displayStatus !== 'stopped'}
          />
        </div>
      ),
      condition: !isFolder,
      className: "",
      menuId: 27,
    },
    {
      key: "separator3",
      type: "separator",
    },
    {
      key: "listDelete",
      title: "캠페인 리스트 삭제",
      onClick: () => handleCampaignListDelete(item.id),
      condition: displayStatus === 'stopped',
      menuId: 28,
    },
    {
      key: "monitor",
      title: "상담사 상태 모니터",
      onClick: () => handleMonitorClick(tenantIdForCampaignTab, item.id, item.label),
      menuId: 29,
    },
    {
      key: "blacklist",
      title: "블랙리스트 건수 조회",
      onClick: handleBlacklistCountCheckClick,
      menuId: 30,
    },
  ];

  const filteredMenuItems = mainMenuItems.filter((menuItem) => {
    if (menuItem.type === "separator") return true;
    if (menuItem.menuId === undefined) return true;
    return availableCampaignTabCampaignContextMenuIds.includes(menuItem.menuId);
  });

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
        <ContextMenuContent className="w-[150px]">
          {filteredMenuItems.map((menuItem) => {
            if (menuItem.condition === false) return null;
            if (menuItem.type === "separator") {
              return (
                <ContextMenuSeparator
                  key={menuItem.key}
                  className="my-1"
                />
              );
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
                onClick={menuItem.onClick}
                className={cn("flex items-center text-sm", menuItem.className)}
              >
                {menuItem.title}
              </ContextMenuItem>
            );
          })}
        </ContextMenuContent>
      </ContextMenu>

      {isBlacklistPopupOpen && (
        <BlackListCountPopup
          campaignId={item.id}
          blackListCount={blackListCount}
          maxBlacklistCount={maxBlacklistCount}
          commonBlacklistCount={commonBlacklistCount}
          isOpen={isBlacklistPopupOpen}
          onConfirm={() => setIsBlacklistPopupOpen(false)}
          onCancel={() => setIsBlacklistPopupOpen(false)}
        />
      )}

      <CustomAlert
        message={alertState.message}
        title={alertState.title}
        type={alertState.type}
        isOpen={alertState.isOpen}
        onClose={() => {
          alertState.onClose();
        }}
        onCancle={() => setAlertState((prev) => ({ ...prev, isOpen: false }))}
      />
    </>
  );
}