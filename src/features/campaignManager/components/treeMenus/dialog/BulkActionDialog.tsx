"use client";

import React, { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { useTabStore } from "@/store/tabStore";
import { useAvailableMenuStore } from "@/store/useAvailableMenuStore";
import { Separator } from "react-contexify";
import { useApiForMultiUpdateCampaignProgressStatus } from "../hook/useApiForMultiUpdateCampaignProgressStatus";

// shadcn UI 컴포넌트
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, Pause, StopCircle } from "lucide-react";

interface IContextMenuProps {
  node: any;
  setIsCampaignAddPopupOpen: (open: boolean) => void;
  setIsDeleteDialogOpen: (open: boolean) => void;
  setIsRenameDialogOpen: (open: boolean) => void;
}

const statusMap = {
  start: { code: "1", label: "시작", icon: <Play className="h-4 w-4 mr-1" />, color: "text-green-600" },
  complete: { code: "2", label: "멈춤", icon: <Pause className="h-4 w-4 mr-1" />, color: "text-yellow-600" },
  stop: { code: "3", label: "중지", icon: <StopCircle className="h-4 w-4 mr-1" />, color: "text-red-600" },
};

// Portal Dialog 컴포넌트 - body에 직접 마운트
const BulkActionDialog = ({
  isOpen,
  onClose,
  onConfirm,
  actionKey,
  campaignCount,
  isLoading,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  actionKey: string;
  campaignCount: number;
  isLoading: boolean;
}) => {
  if (!isOpen || typeof document === "undefined") return null;

  const dialogContent = (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={(e) => {
        // 배경 클릭 시 닫기
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="bg-white rounded-lg shadow-lg max-w-md w-full p-4 mx-4" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center mb-4">
          {actionKey && statusMap[actionKey as keyof typeof statusMap]?.icon}
          <h2 className="text-xl font-medium ml-1">
            캠페인 일괄 {actionKey && statusMap[actionKey as keyof typeof statusMap]?.label}
          </h2>
        </div>
        
        <div className="py-2">
          {campaignCount > 0 ? (
            <p>
              선택한 캠페인({campaignCount}개)을 일괄 
              {actionKey && ` ${statusMap[actionKey as keyof typeof statusMap]?.label}`} 
              하시겠습니까?
            </p>
          ) : (
            <p className="text-red-500">선택된 캠페인이 없습니다.</p>
          )}
        </div>
        
        <div className="flex justify-end gap-2 mt-4">
          <button
            className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={onClose}
            disabled={isLoading}
          >
            취소
          </button>
          <button
            className={`px-3 py-1 rounded-md text-white ${
              isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
            onClick={onConfirm}
            disabled={isLoading || campaignCount === 0}
          >
            {isLoading ? "처리 중..." : "확인"}
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(dialogContent, document.body);
};

const IContextMenuForCampaignGroupAtCampaignGroup: React.FC<IContextMenuProps> = ({
  node,
  setIsCampaignAddPopupOpen,
  setIsDeleteDialogOpen,
  setIsRenameDialogOpen,
}) => {
  const { addTabCurrentOnly } = useTabStore.getState();
  const availableMenuIds = useAvailableMenuStore(
    state => state.availableMenuIdsForCampaignGroupTabCampaignGroup
  );
  const { updateCampaignsStatus, isLoading } = useApiForMultiUpdateCampaignProgressStatus();

  // Dialog 상태 관리 - 완전히 커스텀 구현
  const [customDialog, setCustomDialog] = useState({
    open: false,
    actionKey: ""
  });

  // Dialog 열기
  const openDialog = useCallback((actionKey: string) => {
    setCustomDialog({
      open: true,
      actionKey
    });
  }, []);

  // Dialog 닫기
  const closeDialog = useCallback(() => {
    setCustomDialog({
      open: false,
      actionKey: ""
    });
  }, []);

  // 확인 버튼 핸들러
  const handleConfirmBulkAction = useCallback(async () => {
    const { actionKey } = customDialog;
    if (!actionKey || !statusMap[actionKey as keyof typeof statusMap]) return;

    try {
      await updateCampaignsStatus(
        node.campaignIds,
        statusMap[actionKey as keyof typeof statusMap].code
      );
      closeDialog();
      alert(`캠페인 일괄 ${statusMap[actionKey as keyof typeof statusMap].label} 처리가 완료되었습니다.`);
    } catch (e: any) {
      closeDialog();
      alert(`처리 중 오류가 발생했습니다: ${e?.message || '알 수 없는 오류'}`);
    }
  }, [customDialog, updateCampaignsStatus, node.campaignIds, closeDialog]);

  // 일괄 액션 메뉴 아이템 생성
  const bulkActionItems = ["start", "complete", "stop"].map((key, idx) => ({
    id: 39 + idx,
    group: 1,
    key: `bulk-${key}`,
    label: (
      <div className={`flex items-center ${statusMap[key as keyof typeof statusMap].color}`}>
        {statusMap[key as keyof typeof statusMap].icon}
        {isLoading ? "처리 중..." : `캠페인 그룹 일괄 ${statusMap[key as keyof typeof statusMap].label}`}
      </div>
    ),
    action: (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isLoading) {
        openDialog(key);
      }
    },
  }));

  const menuItems = [
    {
      id: 38,
      group: 1,
      key: "bulk-update",
      label: "캠페인 그룹 일괄 수정",
      action: () => {
        addTabCurrentOnly({
          id: 1,
          title: `캠페인 그룹 관리: ${node.name}`,
          uniqueKey: `groupBulkUpdate_${node.group_id}_${Date.now()}`,
          params: { groupId: node.group_id, groupName: node.name },
        });
      },
    },
    ...bulkActionItems,
    { id: 42, group: 2, key: "rename", label: "캠페인 그룹 이름 변경", action: () => setIsRenameDialogOpen(true) },
    { id: 43, group: 2, key: "delete", label: "캠페인 그룹 삭제", action: () => setIsDeleteDialogOpen(true) },
    { id: 44, group: 3, key: "add-campaign", label: "캠페인 그룹에 캠페인 추가", action: () => setIsCampaignAddPopupOpen(true) },
    { id: 45, group: 3, key: "resend", label: "캠페인 그룹 실시간 재발신", action: () => addTabCurrentOnly({ id: 24, title: `재발신: ${node.name}`, uniqueKey: `resend_${node.group_id}_${Date.now()}`, params: { groupId: node.group_id, groupName: node.name } }) },
  ];

  const visibleMenuItems = availableMenuIds?.length
    ? menuItems.filter(item => availableMenuIds.includes(item.id))
    : [];

  if (!visibleMenuItems.length) return null;

  const renderMenuItems = () => {
    const elements: React.ReactElement[] = [];
    let currentGroup = -1;
    visibleMenuItems.forEach(item => {
      if (currentGroup !== -1 && item.group !== currentGroup) {
        elements.push(<Separator key={`sep-${item.group}`} />);
      }
      elements.push(
        <div
          key={item.key}
          className="contexify-custom-item hover:bg-gray-100"
          style={{ fontSize: "13px", padding: "4px 6px", borderRadius: "3px" }}
          onClick={item.action}
        >
          {item.label}
        </div>
      );
      currentGroup = item.group;
    });
    return elements;
  };

  return (
    <>
      {renderMenuItems()}
      
      {/* 커스텀 Portal Dialog 사용 */}
      <BulkActionDialog
        isOpen={customDialog.open}
        onClose={closeDialog}
        onConfirm={handleConfirmBulkAction}
        actionKey={customDialog.actionKey}
        campaignCount={node.campaignIds?.length || 0}
        isLoading={isLoading}
      />
    </>
  );
};

export default IContextMenuForCampaignGroupAtCampaignGroup;