"use client";

import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CommonDialogForSideMenu from "@/components/shared/CommonDialog/CommonDialogForSideMenu";
import { useApiForCreateCampaignGroup } from "@/features/preferences/hooks/useApiForCreateCampaignGroup";
import { toast } from "react-toastify";
import { useSideMenuCampaignGroupTabStore } from "@/store/storeForSideMenuCampaignGroupTab";
import CustomAlert from "@/components/shared/layout/CustomAlert";

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

  // 다이얼로그가 열릴 때마다 폼 초기화
  useEffect(() => {
    if (isOpen) {
      setGroupName("");
      setGroupId("");
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
          // 이 테넌트의 자식 노드들 중 그룹 타입인 것들의 ID 추출
          if (node.children) {
            node.children.forEach((child: any) => {
              if (child.type === 'group' && child.group_id) {
                groupIds.push(child.group_id.toString());
              }
            });
          }
        } else if (node.children) {
          // 재귀적으로 자식 노드들 탐색
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
    if (!groupId.trim()) return;
    
    const groupIds = getGroupIdsInTenant(tenantId);
    setGroupIdList(groupIds);
    
    if (checkDuplicateGroupId(groupId)) {
      setIsDuplicateModalOpen(true);
      return true;
    }
    return false;
  };

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
      // 중복 체크 후 중복이 없을 경우에만 API 호출
      if (!handleCheckDuplicate()) {
        mutate({
          group_id: groupId,
          tenant_id: tenantId,
          group_name: groupName,
        });
      }
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

  // 그룹 아이디 변경 및 포커스 아웃 시 중복 체크
  const handleGroupIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupId(e.target.value);
  };

  return (
    <>
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
                onChange={handleGroupIdChange}
                onBlur={() => handleCheckDuplicate()}
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

      {/* 중복 확인 다이얼로그 */}
      {isDuplicateModalOpen && (
        <CustomAlert
          isOpen={isDuplicateModalOpen}
          onClose={() => setIsDuplicateModalOpen(false)}
          title="그룹 아이디 중복"
          type="1"
          message={
            <div>
              <p className="mb-2">입력하신 그룹 아이디 '{groupId}'는 이미 사용 중입니다.</p>
              <p className="mb-2">현재 테넌트({tenantName})의 그룹 아이디 목록:</p>
              <div className="max-h-40 overflow-y-auto bg-gray-50 p-2 border rounded text-xs">
                {groupIdList.length > 0 ? (
                  <ul className="list-disc pl-4">
                    {groupIdList.map((id, index) => (
                      <li key={index}>{id}</li>
                    ))}
                  </ul>
                ) : (
                  <p>등록된 그룹이 없습니다.</p>
                )}
              </div>
            </div>
          }
          width="max-w-md"
        />
      )}
    </>
  );
}

export default AddCampaignGroupDialog;