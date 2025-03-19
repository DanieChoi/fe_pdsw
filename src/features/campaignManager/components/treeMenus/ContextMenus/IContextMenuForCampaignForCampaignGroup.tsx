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
}: ContextMenuForTreeNodeProps) {
  const isFolder = item.type === "folder";
  const { simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu, setCampaignIdForCopyCampaign, addTab, addMultiTab } = useTabStore();

  // Zustand 스토어에서 updateCampaignStatus 함수 가져오기
  const { updateCampaignStatus, refetchTreeData } = useSideMenuCampaignGroupTabStore();

  const [isBlacklistPopupOpen, setIsBlacklistPopupOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<CampaignStatus>(item.status);
  const [blackListCount, setBlackListCount] = useState<number>(0);
  const preventCloseRef = useRef(false);

  // 상태 관련 정보
  const statusInfo = {
    started: { label: "시작", color: "#22c55e" },
    pending: { label: "멈춤", color: "#eab308" },
    stopped: { label: "중지", color: "#ef4444" },
  };

  const updateCampaignStatusMutation = useApiForCampaignStatusUpdate({
    onSuccess: (data) => {
      toast.success("캠페인 상태가 변경되었습니다.");
      preventCloseRef.current = true;
    },
    onError: (error) => {
      toast.error(error.message || "상태 변경 중 오류가 발생했습니다.");
    },
  });

  const { mutate: deleteCampaignList } = useApiForCampaignListDelete({
    onSuccess: (data) => {
      toast.success("캠페인 리스트가 삭제되었습니다.");
    },
    onError: (error) => {
      toast.error(error.message || "리스트 삭제 중 오류가 발생했습니다.");
    },
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

  const handleRebroadcastClick = () => {
    addTab({
      id: 20,
      uniqueKey: '20',
      title: '재발신 설정',
      icon: '',
      href: '',
      content: null,
    });
  };

  const handleMonitorClick = (campaignId: any, campaignName: string) => {
    if (onMonitor) {
      onMonitor();
      return;
    }

    const uniqueKey = `monitor-${Date.now()}`;

    addMultiTab({
      id: 22,
      uniqueKey: uniqueKey,
      title: `상담원 상태 모니터 - ${campaignName}`,
      icon: '',
      href: '',
      content: null,
      campaignId: campaignId
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
      await refetchTreeData();

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


  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
        <ContextMenuContent className="w-[150px]">
          <ContextMenuItem onClick={handleEditMenuClick} >
            캠페인 수정
          </ContextMenuItem>

          <ContextMenuSub>
            <ContextMenuSubTrigger
             
              onPointerDown={() => {
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

          <ContextMenuItem
            onClick={() => handleProgressInfoClick(item.id, item.label)}

          >
            캠페인 진행정보
          </ContextMenuItem>

          <ContextMenuSeparator className="my-1" />

          <ContextMenuItem
            onClick={handleRebroadcastClick}
          >
            재발신
          </ContextMenuItem>

          <ContextMenuSeparator className="my-1" />

          <ContextMenuItem
            onClick={handleCampaignCopy}
          >
            캠페인 복사
          </ContextMenuItem>

          {!isFolder && (
            <ContextMenuItem
              onClick={() => onCampaignDelete(currentStatus)}
              className="text-red-500"
            >
              캠페인 삭제
            </ContextMenuItem>
          )}

          <ContextMenuSeparator className="my-1" />

          {currentStatus === 'stopped' && (
            <ContextMenuItem
              onClick={() => handleCampaignListDelete(item.id)}
            >
              캠페인 리스트 삭제
            </ContextMenuItem>
          )}


          <ContextMenuItem
            onClick={() => handleMonitorClick(item.id, item.label)}
          >
            상담원 상태 모니터
          </ContextMenuItem>

          <ContextMenuItem
            onClick={handleBlacklistCountCheckClick}
          >
            블랙리스트 건수 조회
          </ContextMenuItem>
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
        />

      )}
    </>
  );
}