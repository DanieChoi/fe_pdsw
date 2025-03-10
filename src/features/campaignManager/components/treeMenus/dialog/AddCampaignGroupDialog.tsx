// src/components/AddCampaignGroupDialog.tsx

"use client";

import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CommonDialogForSideMenu from "@/components/shared/CommonDialog/CommonDialogForSideMenu";
import { useApiForCreateCampaignGroup } from "@/features/preferences/hooks/useApiForCreateCampaignGroup";
import { toast } from "react-toastify";

interface AddCampaignGroupDialogProps {
  isOpen: boolean;
  onClose: (e?: React.MouseEvent | React.KeyboardEvent | Event) => void;
  tenantId: number; // string에서 number로 변경
  tenantName: string;
  onAddGroup?: (groupName: string, groupCode: string) => void;
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

  // 캠페인 그룹 생성 API 호출 훅 사용
  const { mutate, isPending } = useApiForCreateCampaignGroup({
    onSuccess: (data, variables, context) => {
      console.log("캠페인 그룹 생성 성공:", data);
      toast.success("캠페인 그룹이 추가되었습니다.");
      // onAddGroup 콜백이 존재하면 호출 (추가적인 작업이 필요할 경우)
      if (onAddGroup) {
        onAddGroup(groupName, groupId);
      }
      handleClose();
    },
    onError: (error, variables, context) => {
      console.error("캠페인 그룹 생성 실패:", error);
      // 필요시 에러 메시지를 사용자에게 보여줄 수 있습니다.
      alert(error.message || "캠페인 그룹 생성에 실패하였습니다.");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation(); // 이벤트 전파 방지
    
    if (groupName.trim() && groupId.trim()) {
      // 훅을 통해 API 호출 (tenantId는 이미 number 타입이므로 변환 불필요)
      mutate({
        group_id: groupId,
        tenant_id: tenantId, // Number() 변환 제거
        group_name: groupName,
      });
    }
  };

  const handleClose = (e?: React.MouseEvent | React.KeyboardEvent | Event) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation(); // 이벤트 전파 방지
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
              disabled={isPending}
            >
              취소
            </Button>
            <Button 
              type="submit" 
              disabled={isPending || !groupName.trim() || !groupId.trim()}
              onPointerDown={stopPropagation}
            >
              {isPending ? "생성 중..." : "그룹 추가"}
            </Button>
          </div>
        </div>
      </form>
    </CommonDialogForSideMenu>
  );
}

export default AddCampaignGroupDialog;