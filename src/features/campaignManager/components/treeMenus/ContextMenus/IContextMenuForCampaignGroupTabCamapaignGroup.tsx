
"use client";

import React, { FC, useState } from "react";
import { useTabStore } from "@/store/tabStore";
import { useApiForDeleteCampaignGroup } from "@/features/campaignManager/hooks/useApiForDeleteCampaignGroup";
import { Button } from "@/components/ui/button";
import CommonDialogForSideMenu from "@/components/shared/CommonDialog/CommonDialogForSideMenu";
import IDialogForUpdateCampaignGroupName from "../dialog/IDialogForUpdateCampaignGroupName";
import { toast } from "react-toastify";
import { CommonMenuItem } from "@/components/shared/CommonContextMenu";

interface IContextMenuForCampaignGroupTabCamapaignProps {
  node: any;
  setIsCampaignAddPopupOpen: (open: boolean) => void;
}

const IContextMenuForCampaignGroupTabCamapaignGroup: FC<IContextMenuForCampaignGroupTabCamapaignProps> = ({
  node,
  setIsCampaignAddPopupOpen,
}) => {
  const { addTabCurrentOnly } = useTabStore(); // 새로 추가한 헬퍼 함수 사용
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isRenameDialogOpen, setIsRenameDialogOpen] = useState(false);

  // 캠페인 그룹 삭제 훅 사용
  const { mutate: deleteCampaignGroup, isPending: isDeleting } = useApiForDeleteCampaignGroup({
    onSuccess: () => {
      // 성공 후 처리
      toast.success("캠페인 그룹이 삭제되었습니다.");
      setIsDeleteDialogOpen(false);
      // 필요에 따라 추가 알림 표시
    },
    onError: (error) => {
      // 에러 처리
      alert(`캠페인 그룹 삭제 실패: ${error.message}`);
    }
  });

  // 삭제 확인
  const confirmDelete = () => {
    if (node && node.group_id) {
      deleteCampaignGroup(node.group_id);
    }
  };

  // 다이얼로그 닫기 핸들러
  const handleCloseDialog = () => {
    setIsDeleteDialogOpen(false);
  };

  // 이름 변경 다이얼로그 닫기 핸들러
  const handleCloseRenameDialog = () => {
    setIsRenameDialogOpen(false);
  };

  // 이름 변경 성공 핸들러
  const handleRenameSuccess = () => {
    // 여기에서 필요한 경우 리렌더링이나 데이터 갱신 로직을 추가할 수 있음
    // 예: queryClient.invalidateQueries('campaignGroups');
  };

  return (
    <>
      <CommonMenuItem
        onClick={() => {
          console.log(`캠페인 그룹 일괄 수정: ${node.name}`);
          
          // 새 탭 생성 후 추가 (기존에 같은 ID 탭들은 자동으로 제거됨)
          addTabCurrentOnly({
            id: 1, // 메뉴 ID
            title: `캠페인 그룹 관리: ${node.name}`,
            uniqueKey: `groupBulkUpdate_${node.group_id}_${Date.now()}`, // 타임스탬프 추가로 고유성 보장
            params: {
              groupId: node.group_id,
              groupName: node.name,
            },
          });
        }}
      >
        캠페인 그룹 일괄 수정
      </CommonMenuItem>
      <CommonMenuItem
        onClick={() => console.log(`캠페인 그룹 일괄 시작: ${node.name}`)}
      >
        캠페인 그룹 일괄 시작
      </CommonMenuItem>
      <CommonMenuItem
        onClick={() => console.log(`캠페인 그룹 일괄 완료: ${node.name}`)}
      >
        캠페인 그룹 일괄 완료
      </CommonMenuItem>
      <CommonMenuItem
        onClick={() => console.log(`캠페인 그룹 일괄 중지: ${node.name}`)}
      >
        캠페인 그룹 일괄 중지
      </CommonMenuItem>
      <CommonMenuItem
        onClick={() => { 
          console.log("캠페인 그룹 이름 변경:", node);
          console.log(`캠페인 그룹 tenant_id: ${node.tenant_id}`);
          console.log(`캠페인 그룹 group_id: ${node.group_id}`);
          setIsRenameDialogOpen(true);
        }}
      >
        캠페인 그룹 이름 변경
      </CommonMenuItem>
      <CommonMenuItem
        onClick={() => {
          console.log(`캠페인 그룹 삭제: ${node.name}`);
          setIsDeleteDialogOpen(true);
        }}
      >
        캠페인 그룹 삭제
      </CommonMenuItem>
      <CommonMenuItem
        onClick={() => {
          console.log(`캠페인 추가/제외: ${node.name}`);
          setIsCampaignAddPopupOpen(true);
        }}
      >
        캠페인 그룹에 캠페인 추가
      </CommonMenuItem>
      <CommonMenuItem
        onClick={() => console.log(`캠페인 그룹 실시간 재발신: ${node.name}`)}
      >
        캠페인 그룹 실시간 재발신
      </CommonMenuItem>

      {/* 캠페인 그룹 삭제 다이얼로그 */}
      <CommonDialogForSideMenu
        isOpen={isDeleteDialogOpen}
        onClose={handleCloseDialog}
        title="캠페인 그룹 삭제"
        description={`정말로 캠페인 그룹 '${node?.name}'을(를) 삭제하시겠습니까?`}
      >
        <div className="space-y-4">
          <p className="text-destructive font-medium">이 작업은 되돌릴 수 없습니다.</p>

          <div className="flex justify-end space-x-2 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={handleCloseDialog}
              disabled={isDeleting}
              className="w-20"
            >
              취소
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={confirmDelete}
              disabled={isDeleting}
              className="w-20"
            >
              {isDeleting ? "삭제 중..." : "삭제"}
            </Button>
          </div>
        </div>
      </CommonDialogForSideMenu>

      {/* 캠페인 그룹 이름 변경 다이얼로그 */}
      {isRenameDialogOpen && (
        <IDialogForUpdateCampaignGroupName
          isOpen={isRenameDialogOpen}
          onClose={handleCloseRenameDialog}
          groupId={node?.group_id}
          tenantId={node?.tenant_id}
          currentGroupName={node?.name}
          onSuccess={handleRenameSuccess}
        />
      )}
    </>
  );
};

export default IContextMenuForCampaignGroupTabCamapaignGroup;