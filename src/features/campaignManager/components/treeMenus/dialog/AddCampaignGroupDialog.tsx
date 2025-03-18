

"use client";

import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useApiForCreateCampaignGroup } from "@/features/preferences/hooks/useApiForCreateCampaignGroup";
import { useSideMenuCampaignGroupTabStore } from "@/store/storeForSideMenuCampaignGroupTab";
import GroupIdDuplicateModal from "./GroupIdDuplicateModal";
import CommonDialogWithCustomAlertStyle from "@/components/shared/layout/CommonDialogWithCustomAlertStyle";

interface AddCampaignGroupDialogProps {
  isOpen: boolean;
  onClose: (e?: React.MouseEvent | React.KeyboardEvent | Event) => void;
  tenantId: number;
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
  const [isDuplicateModalOpen, setIsDuplicateModalOpen] = useState(false);
  const [groupIdList, setGroupIdList] = useState<string[]>([]);
  const [isValidated, setIsValidated] = useState(false);
  const [isCheckingDuplicate, setIsCheckingDuplicate] = useState(false);

    const { refetchTreeData } = useSideMenuCampaignGroupTabStore();
  

  // 다이얼로그가 열릴 때마다 폼 초기화
  useEffect(() => {
    if (isOpen) {
      setGroupName("");
      setGroupId("");
      setIsValidated(false);
    }
  }, [isOpen]);

  // 중복 검사에 필요한 store에서 treeData 가져오기
  const { treeData } = useSideMenuCampaignGroupTabStore();

  // 현재 테넌트에 속한 그룹 아이디 목록 가져오기
  const getGroupIdsInTenant = (tenantId: number) => {
    const groupIds: string[] = [];
    
    // treeData를 탐색하여 현재 tenant_id에 속한 그룹들의 group_id를 수집
    const findGroupsInTenant = (nodes: any[]) => {
      nodes.forEach(node => {
        if (node.type === 'tenant' && node.tenant_id === tenantId) {
          if (node.children) {
            node.children.forEach((child: any) => {
              if (child.type === 'group' && child.group_id) {
                groupIds.push(child.group_id.toString());
              }
            });
          }
        } else if (node.children) {
          findGroupsInTenant(node.children);
        }
      });
    };

    findGroupsInTenant(treeData);
    return groupIds;
  };

  // 그룹 아이디 중복 체크 함수
  const checkDuplicateGroupId = (groupId: string): boolean => {
    const groupIds = getGroupIdsInTenant(tenantId);
    return groupIds.includes(groupId);
  };

  // 중복 체크 및 중복 다이얼로그 열기
  const handleCheckDuplicate = () => {
    if (!groupId.trim()) return false;
    
    setIsCheckingDuplicate(true);
    const groupIds = getGroupIdsInTenant(tenantId);
    console.log(`테넌트 ${tenantId}의 그룹 ID 목록:`, groupIds);
    setGroupIdList(groupIds);
    
    const isDuplicate = checkDuplicateGroupId(groupId);
    if (isDuplicate) {
      console.log(`그룹 ID '${groupId}' 중복 확인됨`);
      setIsDuplicateModalOpen(true);
      setIsValidated(false);
      setIsCheckingDuplicate(false);
      return true;
    }
    
    // 중복이 없다면 유효함을 표시
    setIsValidated(true);
    setIsCheckingDuplicate(false);
    toast.success("사용 가능한 그룹 ID입니다.");
    return false;
  };

  // 새로운 그룹 아이디 적용
  const handleNewGroupId = (newId: string) => {
    setGroupId(newId);
    setIsDuplicateModalOpen(false);
    setIsValidated(true);
  };

  // 그룹 아이디 변경
  const handleGroupIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setGroupId(newValue);
    setIsValidated(false);
  };

  // 캠페인 그룹 생성 API 호출 훅 사용
  const { mutate, isPending } = useApiForCreateCampaignGroup({
    onSuccess: (data, variables, context) => {
      console.log("캠페인 그룹 생성 성공:", data);
      toast.success("캠페인 그룹이 추가되었습니다.");
      if (onAddGroup) {
        onAddGroup(groupName, groupId);
      }

      refetchTreeData();

      handleClose();
    },
    onError: (error, variables, context) => {
      console.error("캠페인 그룹 생성 실패:", error);
      alert(error.message || "캠페인 그룹 생성에 실패하였습니다.");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (groupName.trim() && groupId.trim()) {
      if (!isValidated) {
        toast.warning("먼저 그룹 ID 중복 확인을 해주세요.");
        return;
      }
      mutate({
        group_id: groupId,
        tenant_id: tenantId,
        group_name: groupName,
      });
    }
  };

  const handleClose = (e?: React.MouseEvent | React.KeyboardEvent | Event) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    onClose(e);
  };

  // 모든 인풋에 이벤트 전파 방지 적용
  const stopPropagation = (e: React.UIEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <CommonDialogWithCustomAlertStyle
        isOpen={isOpen}
        onClose={handleClose}
        title="그룹 추가"
        showButtons={false} // 내장 버튼 대신 폼 내 버튼 사용
        width="max-w-sm"
      >
        <div>
          <p className="mb-4">새로운 캠페인 그룹을 등록합니다.</p>
          <form onSubmit={handleSubmit} onClick={stopPropagation} onPointerDown={stopPropagation}>
            <div className="space-y-4">
              {/* 그룹 아이디 - 중복 확인 버튼 */}
              <div className="flex flex-col space-y-1">
                <Label htmlFor="groupId">캠페인 그룹 아이디</Label>
                <div className="flex gap-2">
                  <Input
                    id="groupId"
                    value={groupId}
                    onChange={handleGroupIdChange}
                    placeholder="그룹 아이디를 입력하세요"
                    onClick={stopPropagation}
                    onPointerDown={stopPropagation}
                    className="rounded-r-none"
                  />
                  <Button 
                    type="button"
                    onClick={handleCheckDuplicate}
                    disabled={!groupId.trim() || isCheckingDuplicate}
                    className="rounded-l-none"
                    onPointerDown={stopPropagation}
                  >
                    {isCheckingDuplicate ? "확인중..." : isValidated ? "✓ 확인됨" : "중복 확인"}
                  </Button>
                </div>
                {isValidated && (
                  <p className="text-xs text-green-500 mt-1">사용 가능한 그룹 아이디입니다.</p>
                )}
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
                  disabled={isPending || !groupName.trim() || !groupId.trim() || !isValidated}
                  onPointerDown={stopPropagation}
                >
                  {isPending ? "생성 중..." : "그룹 추가"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </CommonDialogWithCustomAlertStyle>

      {/* 중복 확인 다이얼로그 */}
      {isDuplicateModalOpen && (
        <GroupIdDuplicateModal
          isOpen={isDuplicateModalOpen}
          onClose={() => setIsDuplicateModalOpen(false)}
          groupId={groupId}
          tenantName={tenantName}
          groupIdList={groupIdList}
          onNewIdSubmit={handleNewGroupId}
        />
      )}
    </>
  );
}

export default AddCampaignGroupDialog;
