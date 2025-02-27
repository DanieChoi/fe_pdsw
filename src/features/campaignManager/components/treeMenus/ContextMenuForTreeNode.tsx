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
  Edit, Copy, Activity, Trash2, Monitor, Settings, Search, List, Clock, History,
  UserCheck, Shield, RefreshCcw, AlertTriangle, Check
} from "lucide-react";
import { useState } from "react";
import BlackListCountPopup from '@/features/campaignManager/components/popups/BlackListCountPopup';
import { toast } from 'react-toastify';
import { useApiForCampaignStatusUpdate } from "../../hooks/useApiForCampaignStatusUpdate";
import { useApiForCampaignBlacklistCount } from "@/features/listManager/hooks/useApiForCampaignBlacklistCount";
import { CustomCheckbox } from "@/components/shared/CustomCheckbox";
export type CampaignStatus = 'started' | 'pending' | 'stopped';

interface ContextMenuForTreeNodeProps {
  children: React.ReactNode;
  item: {
    id: string;
    label: string;
    type: any;
    status: CampaignStatus;
  };
  onEdit: () => void;
  // onDelete: () => void;
  onMonitor: () => void;
  onHandleCampaignCopy: () => void;
}

export function ContextMenuForTreeNode({
  children,
  item,
  onEdit,
  // onDelete,
  onMonitor,
  onHandleCampaignCopy,
}: ContextMenuForTreeNodeProps) {
  const isFolder = item.type === "folder";
  const { simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu, addTab, addMultiTab } = useTabStore();
  const [isBlacklistPopupOpen, setIsBlacklistPopupOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<CampaignStatus>(item.status);
  const [blackListCount, setBlackListCount] = useState<number>(0);

  const updateCampaignStatusMutation = useApiForCampaignStatusUpdate({
    onSuccess: (data) => {
      
      toast.success("캠페인 상태가 성공적으로 변경되었습니다.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    },
    onError: (error) => {
      toast.error(error.message || "상태 변경 중 오류가 발생했습니다.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    },
  });

  const handleEditMenuClick = () => {
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
      campaignId: campaignId  // 캠페인 ID 설정
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
    const uniqueKey = `monitor-${Date.now()}`;
    
    addMultiTab({
      id: 22,
      uniqueKey: uniqueKey,
      title: `상담원 상태 모니터 - ${campaignName}`,
      icon: '',
      href: '',
      content: null,
      campaignId: campaignId  // 캠페인 ID 설정
    });
  };

  const onCampaignDelete = (campaignId: any, campaignName: string) => {
    console.log('캠페인 삭제 클릭');
    const uniqueKey = `monitor-${Date.now()}`;
    
    addTab({
      id: 131,
      uniqueKey: uniqueKey,
      title: `상담원 삭제 - ${campaignName}`,
      icon: '',
      href: '',
      content: null,
      campaignId: campaignId,  // 캠페인 ID 설정
      campaignName: campaignName
    });

  }

  const getStatusNumber = (status: CampaignStatus): number => {
    switch (status) {
      case 'started': return 1;
      case 'pending': return 2;
      case 'stopped': return 3;
      default: return 0;
    }
  };

  const handleStartClick = async (status: CampaignStatus) => {
    try {
      console.log('Status change requested:', {
        campaignId: item.id,
        campaignName: item.label,
        previousStatus: currentStatus,
        newStatus: status
      });

      // API 호출
      await updateCampaignStatusMutation.mutateAsync({
        campaign_id: Number(item.id),
        campaign_status: getStatusNumber(status)
      });

      // 로컬 상태 업데이트
      setCurrentStatus(status);
      // simulateHeaderMenuClick(14);

      console.log('Status changed successfully:', {
        campaignId: item.id,
        campaignName: item.label,
        status: status,
        timestamp: new Date().toISOString()
      });

    } catch (error) {
      console.error('Error changing campaign status:', {
        campaignId: item.id,
        campaignName: item.label,
        attemptedStatus: status,
        error: error
      });
    }
  };

  //캠페인 블랙리스트 건수 조회 api 호출
  const { mutate: fetchCampaignBlacklistCount } = useApiForCampaignBlacklistCount({
    onSuccess: (data) => {
      setBlackListCount(data.result_data.blacklist_count);
      setTimeout(() => {
        setIsBlacklistPopupOpen(true);
      }, 100);
    }
  });

  //캠페인 블랙리스트 건수 조회 클릭 이벤트.
  const handleBlacklistCountCheckClick = () => {
    fetchCampaignBlacklistCount(Number(item.id));
  };

  const renderStatusCheckbox = (targetStatus: CampaignStatus) => {
    const isLoading = updateCampaignStatusMutation.isPending && currentStatus === targetStatus;

    return currentStatus === targetStatus ? (
      <Check className={`mr-2 h-4 w-4 text-green-500 ${isLoading ? 'opacity-50' : ''}`} />
    ) : (
      <div className={`w-4 h-4 mr-2 border rounded ${isLoading ? 'opacity-50' : ''}`} />
    );
  };

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
        <ContextMenuContent className="w-[150px]">
          <ContextMenuItem onClick={handleEditMenuClick}>
            {/* <Edit className="mr-2 h-4 w-4" /> */}
            캠페인 수정
          </ContextMenuItem>

          <ContextMenuSub>
            <ContextMenuSubTrigger>
              {/* <Search className="mr-2 h-4 w-4" /> */}
              시작구분
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-[35px]">
              <ContextMenuItem
                onClick={() => handleStartClick('started')}
                className="flex items-center"
                disabled={updateCampaignStatusMutation.isPending}
              >
                {renderStatusCheckbox('started')}
                시작
              </ContextMenuItem>
              <ContextMenuItem
                onClick={() => handleStartClick('pending')}
                className="flex items-center"
                disabled={updateCampaignStatusMutation.isPending}
              >
                {renderStatusCheckbox('pending')}
                멈춤
              </ContextMenuItem>
              <ContextMenuItem
                onClick={() => handleStartClick('stopped')}
                className="flex items-center"
                disabled={updateCampaignStatusMutation.isPending}
              >
                {renderStatusCheckbox('stopped')}
                중지
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>


          <ContextMenuItem onClick={() => handleProgressInfoClick(item.id, item.label)}>
            캠페인 진행정보
          </ContextMenuItem>

          <ContextMenuSeparator />

          <ContextMenuItem onClick={handleRebroadcastClick}>
            {/* <RefreshCcw className="mr-2 h-4 w-4" /> */}
            재발신
          </ContextMenuItem>

          <ContextMenuSeparator />

          <ContextMenuItem onClick={onHandleCampaignCopy}>
            {/* <Copy className="mr-2 h-4 w-4" /> */}
            캠페인 복사
          </ContextMenuItem>
          {/* () => onCampaignDelete(item.id, item.label) */}
          {!isFolder && (
            <ContextMenuItem onClick={() => onCampaignDelete(item.id, item.label)} className="text-red-500">
              {/* <Trash2 className="mr-2 h-4 w-4" /> */}
              캠페인 삭제
            </ContextMenuItem>
          )}

          <ContextMenuSeparator />

          <ContextMenuItem onClick={() => handleMonitorClick(item.id, item.label)}>
            상담원 상태 모니터
          </ContextMenuItem>

          <ContextMenuItem onClick={handleBlacklistCountCheckClick}>
            {/* <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" /> */}
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