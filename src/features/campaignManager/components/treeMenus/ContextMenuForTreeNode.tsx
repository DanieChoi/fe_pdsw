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
import { CampaignStatus } from "./CampaignContextMenuForTreeNode";
import { useState } from "react";
import BlackListCountPopup from '@/features/campaignManager/components/popups/BlackListCountPopup';

interface ContextMenuForTreeNodeProps {
  children: React.ReactNode;
  item: {
    id: string;
    label: string;
    type: any;
    status: CampaignStatus;
  };
  onEdit: () => void;
  onDelete: () => void;
  onMonitor: () => void;
  onHandleCampaignCopy: () => void;
}

export function ContextMenuForTreeNode({
  children,
  item,
  onEdit,
  onDelete,
  onMonitor,
  onHandleCampaignCopy,
}: ContextMenuForTreeNodeProps) {
  const isFolder = item.type === "folder";
  const { simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu, addTab } = useTabStore();
  const [isBlacklistPopupOpen, setIsBlacklistPopupOpen] = useState(false);

  const handleEditMenuClick = () => {
    simulateHeaderMenuClick(2);
    setCampaignIdForUpdateFromSideMenu(item.id);
  };

  const handleProgressInfoClick = () => {
    simulateHeaderMenuClick(21);
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

  const handleMonitorClick = () => {
    addTab({
      id: 22,
      uniqueKey: '22',
      title: '상담원 상태 모니터',
      icon: '',
      href: '',
      content: null,
    });
  };

  const handleStartClick = (status: CampaignStatus) => {
    simulateHeaderMenuClick(14);
    // Here you would typically update the campaign status via API
    console.log(`Changing status to: ${status}`);
  };

  const handleBlacklistCountCheckClick = () => {
    document.body.click();
    setTimeout(() => {
      setIsBlacklistPopupOpen(true);
    }, 100);
  };

  // Function to render the checkbox based on current status
  const renderStatusCheckbox = (currentStatus: CampaignStatus, targetStatus: CampaignStatus) => {
    return currentStatus === targetStatus ? (
      <Check className="mr-2 h-4 w-4 text-green-500" />
    ) : (
      <div className="w-4 h-4 mr-2 border rounded" />
    );
  };

  return (
    <>
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem onClick={handleEditMenuClick}>
          <Edit className="mr-2 h-4 w-4" />
          캠페인 수정
        </ContextMenuItem>
        
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Search className="mr-2 h-4 w-4" />
            시작구분
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem onClick={() => handleStartClick('started')} className="flex items-center">
              {renderStatusCheckbox(item.status, 'started')}
              시작
            </ContextMenuItem>
            <ContextMenuItem onClick={() => handleStartClick('pending')} className="flex items-center">
              {renderStatusCheckbox(item.status, 'pending')}
              멈춤
            </ContextMenuItem>
            <ContextMenuItem onClick={() => handleStartClick('stopped')} className="flex items-center">
              {renderStatusCheckbox(item.status, 'stopped')}
              중지
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>

        <ContextMenuItem onClick={handleProgressInfoClick}>
          <Settings className="mr-2 h-4 w-4" />
          캠페인 진행정보
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuItem onClick={handleRebroadcastClick}>
          <RefreshCcw className="mr-2 h-4 w-4" />
          재발신
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuItem onClick={handleMonitorClick}>
          <Monitor className="mr-2 h-4 w-4" />
          상담원 상태 모니터
        </ContextMenuItem>

        <ContextMenuItem onClick={onHandleCampaignCopy}>
          <Copy className="mr-2 h-4 w-4" />
          캠페인 복사
        </ContextMenuItem>

        {!isFolder && (
          <ContextMenuItem onClick={onDelete} className="text-red-500">
            <Trash2 className="mr-2 h-4 w-4" />
            캠페인 삭제
          </ContextMenuItem>
        )}

        <ContextMenuSeparator />

        <ContextMenuItem onClick={handleBlacklistCountCheckClick}>
          <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
          블랙리스트 건수 조회
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
    {isBlacklistPopupOpen && (
        <BlackListCountPopup
          campaignId={item.id}
          isOpen={isBlacklistPopupOpen}
          onConfirm={() => setIsBlacklistPopupOpen(false)}
          onCancel={() => setIsBlacklistPopupOpen(false)}
        />
      )}
    </>
  );
}