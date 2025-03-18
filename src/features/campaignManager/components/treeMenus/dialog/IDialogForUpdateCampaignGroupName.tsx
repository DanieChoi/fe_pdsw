"use client";

import React, { FC, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApiForCampaignGroupNameUpdate } from "@/features/campaignManager/hooks/useApiForCampaignGroupNameUpdate";
import { toast } from "react-toastify";
import CommonDialogWithCustomAlertStyle from "@/components/shared/layout/CommonDialogWithCustomAlertStyle";

interface IDialogForUpdateCampaignGroupNameProps {
  isOpen: boolean;
  onClose: () => void;
  groupId: number;
  tenantId: number;
  currentGroupName: string;
  onSuccess?: () => void;
}

const IDialogForUpdateCampaignGroupName: FC<IDialogForUpdateCampaignGroupNameProps> = ({
  isOpen,
  onClose,
  groupId,
  tenantId,
  currentGroupName,
  onSuccess,
}) => {
  const [groupName, setGroupName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setGroupName(currentGroupName);
      setError("");
    }
  }, [isOpen, currentGroupName]);

  const { mutate: updateGroupName, isPending } = useApiForCampaignGroupNameUpdate({
    onSuccess: () => {
      toast.success("캠페인 그룹 이름이 변경되었습니다.");
      onClose();
      onSuccess?.();
    },
    onError: (error) => {
      console.error("캠페인 그룹 이름 변경 실패:", error);
      toast.error("캠페인 그룹 이름 변경에 실패했습니다.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 유효성 검사
    if (!groupName.trim()) {
      setError("그룹 이름을 입력해주세요.");
      return;
    }

    // 이름이 변경되지 않은 경우
    if (groupName === currentGroupName) {
      onClose();
      return;
    }

    // API 호출
    updateGroupName({
      group_id: groupId,
      group_name: groupName,
      tenant_id: tenantId,
    });
  };

  return (
    <CommonDialogWithCustomAlertStyle
      isOpen={isOpen}
      onClose={onClose}
      title="캠페인 그룹 이름 변경"
      width="w-[30%] max-w-[1200px] min-w-[500px]"
      showButtons={false} // 내부에서 커스텀 버튼 사용
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-sm text-gray-600 mb-4">
          새로운 캠페인 그룹 이름을 입력해주세요.
        </p>
        <div className="space-y-2">
          <Label htmlFor="groupName">그룹 이름</Label>
          <Input
            id="groupName"
            value={groupName}
            onChange={(e) => {
              setGroupName(e.target.value);
              setError("");
            }}
            placeholder="그룹 이름을 입력하세요"
            className={error ? "border-red-500" : ""}
            disabled={isPending}
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
        <div className="flex justify-end space-x-2 mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={isPending}
            className="w-20"
          >
            취소
          </Button>
          <Button type="submit" disabled={isPending} className="w-20">
            {isPending ? "저장 중..." : "저장"}
          </Button>
        </div>
      </form>
    </CommonDialogWithCustomAlertStyle>
  );
};

export default IDialogForUpdateCampaignGroupName;
