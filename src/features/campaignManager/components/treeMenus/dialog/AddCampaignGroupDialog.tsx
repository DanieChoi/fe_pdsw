"use client";

import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CommonDialogForSideMenu from "@/components/shared/CommonDialog/CommonDialogForSideMenu";

interface AddCampaignGroupDialogProps {
  isOpen: boolean;
  onClose: (e?: React.MouseEvent | React.KeyboardEvent | Event) => void;
  tenantId: string;
  tenantName: string;
  onAddGroup: (groupName: string, groupCode: string) => void;
}

export function AddCampaignGroupDialog({
  isOpen,
  onClose,
  tenantId,
  tenantName,
  onAddGroup,
}: AddCampaignGroupDialogProps) {
  const [groupName, setGroupName] = useState("");
  const [groupId, setGroupId] = useState("");

  // 다이얼로그가 열릴 때마다 폼 초기화
  useEffect(() => {
    if (isOpen) {
      setGroupName("");
      setGroupId("");
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation(); // 이벤트 전파 방지 추가
    
    if (groupName.trim()) {
      onAddGroup(groupName, groupId);
      handleClose();
    }
  };

  const handleClose = (e?: React.MouseEvent | React.KeyboardEvent | Event) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation(); // 이벤트 전파 방지 추가
    }
    
    onClose(e);
  };

  // 모든 인풋에 이벤트 전파 방지 적용
  const stopPropagation = (e: React.UIEvent) => {
    e.stopPropagation();
  };

  return (
    <CommonDialogForSideMenu
      isOpen={isOpen}
      onClose={handleClose}
      title="그룹 추가"
      description="새로운 캠페인 그룹을 등록합니다."
    >
      <form onSubmit={handleSubmit} onClick={stopPropagation} onPointerDown={stopPropagation}>
        <div className="space-y-4">
          {/* 그룹 아이디 */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="groupId">캠페인 그룹 아이디</Label>
            <Input
              id="groupId"
              value={groupId}
              onChange={(e) => setGroupId(e.target.value)}
              placeholder="그룹 아이디를 입력하세요"
              onClick={stopPropagation}
              onPointerDown={stopPropagation}
            />
          </div>

          {/* 그룹명 */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="groupName">캠페인 그룹명</Label>
            <Input
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="그룹명을 입력하세요"
              onClick={stopPropagation}
              onPointerDown={stopPropagation}
            />
          </div>

          {/* 하단 버튼 */}
          <div className="flex justify-end space-x-2 pt-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleClose}
              onPointerDown={stopPropagation}
            >
              취소
            </Button>
            <Button 
              type="submit" 
              disabled={!groupName.trim()}
              onPointerDown={stopPropagation}
            >
              그룹 추가
            </Button>
          </div>
        </div>
      </form>
    </CommonDialogForSideMenu>
  );
}

export default AddCampaignGroupDialog;