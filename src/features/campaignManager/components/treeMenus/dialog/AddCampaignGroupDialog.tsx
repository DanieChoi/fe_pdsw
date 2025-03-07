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

  // 이벤트 전파를 확실히 방지하는 제출 핸들러
  const handleSubmit = (e?: React.MouseEvent | React.FormEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (groupName.trim()) {
      onAddGroup(groupName, groupId || "");
      handleClose();
    }
  };

  // 닫기 핸들러를 내부에서 관리
  const handleClose = (e?: React.MouseEvent | React.KeyboardEvent | Event) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // setTimeout으로 이벤트 루프 분리
    setTimeout(() => {
      onClose();
    }, 0);
  };

  // 입력 폼 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    e.stopPropagation();
    setter(e.target.value);
  };

  return (
    <CommonDialogForSideMenu
      isOpen={isOpen}
      onClose={handleClose}
      title="그룹 추가"
      description="새로운 캠페인 그룹을 등록합니다."
    >
      {/* form 태그로 감싸고 onSubmit 핸들러 추가 */}
      <form onSubmit={handleSubmit} onClick={e => e.stopPropagation()}>
        <div className="space-y-4">
          {/* 그룹 아이디 */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="groupId" onClick={e => e.stopPropagation()}>캠페인 그룹 아이디</Label>
            <Input
              id="groupId"
              value={groupId}
              onChange={e => handleChange(e, setGroupId)}
              onClick={e => e.stopPropagation()}
              placeholder="그룹 아이디를 입력하세요"
            />
          </div>

          {/* 그룹명 */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="groupName" onClick={e => e.stopPropagation()}>캠페인 그룹명</Label>
            <Input
              id="groupName"
              value={groupName}
              onChange={e => handleChange(e, setGroupName)}
              onClick={e => e.stopPropagation()}
              placeholder="그룹명을 입력하세요"
            />
          </div>

          {/* 하단 버튼 */}
          <div className="flex justify-end space-x-2 pt-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                handleClose(e);
              }}
            >
              취소
            </Button>
            <Button 
              type="submit"
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                handleSubmit(e);
              }}
              disabled={!groupName.trim()}
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