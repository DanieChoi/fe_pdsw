import React, { useState } from "react";
import { useTabStore } from "@/store/tabStore";
import { useAvailableMenuStore } from "@/store/useAvailableMenuStore";
import { Separator } from "react-contexify";
import { useApiForMultiUpdateCampaignProgressStatus } from "../hook/useApiForMultiUpdateCampaignProgressStatus";

// Shadcn UI 컴포넌트
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, Play, Pause, StopCircle } from "lucide-react";

interface IContextMenuForCampaignGroupAtCampaignGroupProps {
  node: any;
  setIsCampaignAddPopupOpen: (open: boolean) => void;
  setIsDeleteDialogOpen: (open: boolean) => void;
  setIsRenameDialogOpen: (open: boolean) => void;
}

// 공통 스타일 설정
const itemStyle: React.CSSProperties = {
  fontSize: "13px",
  padding: "4px 6px",
  borderRadius: "3px",
};

const statusMap = {
  start: { 
    code: "1", 
    label: "시작",
    icon: <Play className="h-4 w-4 mr-1" />,
    color: "text-green-600"
  },
  complete: { 
    code: "2", 
    label: "멈춤",
    icon: <Pause className="h-4 w-4 mr-1" />,
    color: "text-yellow-600"
  },
  stop: { 
    code: "3", 
    label: "중지",
    icon: <StopCircle className="h-4 w-4 mr-1" />,
    color: "text-red-600"
  },
};

const IContextMenuForCampaignGroupAtCampaignGroup: React.FC<IContextMenuForCampaignGroupAtCampaignGroupProps> = ({
  node,
  setIsCampaignAddPopupOpen,
  setIsDeleteDialogOpen,
  setIsRenameDialogOpen,
}) => {
  const { addTabCurrentOnly } = useTabStore.getState();

  // 사용 가능한 메뉴 ID들을 스토어에서 가져오기
  const availableMenuIds = useAvailableMenuStore(
    (state) => state.availableMenuIdsForCampaignGroupTabCampaignGroup
  );

  // 캠페인 상태 일괄 변경 훅
  const { updateCampaignsStatus, isLoading } = useApiForMultiUpdateCampaignProgressStatus();

  // Dialog 상태 관리
  const [bulkActionDialog, setBulkActionDialog] = useState({
    open: false,
    actionKey: "",
    isConfirmDialog: false,
    isLoading: false
  });

  // 결과 dialog 상태 관리
  const [resultDialog, setResultDialog] = useState({
    open: false,
    title: "",
    description: null as React.ReactNode,
    isError: false
  });

  // 캠페인 그룹 내 캠페인 ID 배열 추출
  const campaignIds: string[] = node.campaignIds || [];

  // Dialog를 닫는 핸들러
  const handleCloseDialog = () => {
    setBulkActionDialog(prev => ({ ...prev, open: false }));
  };

  // 결과 Dialog를 닫는 핸들러
  const handleCloseResultDialog = () => {
    setResultDialog(prev => ({ ...prev, open: false }));
  };

  // 확인 버튼 핸들러
  const handleConfirmBulkAction = async () => {
    const actionKey = bulkActionDialog.actionKey;
    if (!actionKey || !statusMap[actionKey as keyof typeof statusMap]) return;
    
    // 로딩 상태 설정
    setBulkActionDialog(prev => ({ ...prev, isLoading: true }));
    
    try {
      // API 호출
      const result = await updateCampaignsStatus(
        campaignIds,
        statusMap[actionKey as keyof typeof statusMap].code
      );
      
      // 기존 다이얼로그 닫기
      setBulkActionDialog({ open: false, actionKey: "", isConfirmDialog: false, isLoading: false });
      
      // 결과 다이얼로그 표시
      setResultDialog({
        open: true,
        title: `일괄 ${statusMap[actionKey as keyof typeof statusMap].label} 결과`,
        description: (
          <div className="space-y-3">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span>
                총 <span className="font-semibold">{result?.totalCount}</span>개 캠페인 중 
                <span className="font-semibold text-green-600"> {result?.successCount}</span>개 성공, 
                {result?.failCount > 0 && (
                  <span className="font-semibold text-red-600"> {result?.failCount}</span>
                )}
                {result?.failCount === 0 && (
                  <span className="font-semibold"> {result?.failCount}</span>
                )}개 실패
              </span>
            </div>
            
            {result?.results && result.results.filter(r => !r.success).length > 0 && (
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mt-1 mr-2" />
                <div>
                  <p className="font-medium">실패 캠페인:</p>
                  <p className="text-red-600">{result.results.filter(r => !r.success).map(r => r.campaignId).join(", ")}</p>
                </div>
              </div>
            )}
          </div>
        ),
        isError: false
      });
    } catch (e: any) {
      // 기존 다이얼로그 닫기
      setBulkActionDialog({ open: false, actionKey: "", isConfirmDialog: false, isLoading: false });
      
      // 에러 다이얼로그 표시
      setResultDialog({
        open: true,
        title: `일괄 ${statusMap[actionKey as keyof typeof statusMap].label} 실패`,
        description: (
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2" />
            <span>{e?.message || `일괄 ${statusMap[actionKey as keyof typeof statusMap].label} 작업 중 오류가 발생했습니다.`}</span>
          </div>
        ),
        isError: true
      });
    }
  };
  
  // 일괄 액션 메뉴 아이템 (시작, 멈춤, 중지)
  const bulkActionItems = ["start", "complete", "stop"].map((actionKey, idx) => ({
    id: 39 + idx,
    group: 1,
    key: `bulk-${actionKey}`,
    label: (
      <div className={`flex items-center ${statusMap[actionKey as keyof typeof statusMap].color}`}>
        {statusMap[actionKey as keyof typeof statusMap].icon}
        {isLoading && bulkActionDialog.actionKey === actionKey
          ? `일괄 ${statusMap[actionKey as keyof typeof statusMap].label} 중...`
          : `캠페인 그룹 일괄 ${statusMap[actionKey as keyof typeof statusMap].label}`
        }
      </div>
    ),
    action: () => {
      // 확인 Dialog 표시
      setBulkActionDialog({
        open: true,
        actionKey,
        isConfirmDialog: true,
        isLoading: false
      });
    }
  }));

  // 메뉴 아이템 정의 (메뉴 ID, 그룹, 레이블, 동작 함수)
  const menuItems = [
    // 첫 번째 그룹 (일괄 작업)
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
          params: {
            groupId: node.group_id,
            groupName: node.name,
          },
        });
      }
    },
    ...bulkActionItems,
    // 두 번째 그룹 (이름 변경, 삭제)
    {
      id: 42,
      group: 2,
      key: "rename",
      label: "캠페인 그룹 이름 변경",
      action: () => {
        setIsRenameDialogOpen(true);
      }
    },
    {
      id: 43,
      group: 2,
      key: "delete",
      label: "캠페인 그룹 삭제",
      action: () => {
        setIsDeleteDialogOpen(true);
      }
    },
    // 세 번째 그룹 (캠페인 추가, 재발신)
    {
      id: 44,
      group: 3,
      key: "add-campaign",
      label: "캠페인 그룹에 캠페인 추가",
      action: () => {
        setIsCampaignAddPopupOpen(true);
      }
    },
    {
      id: 45,
      group: 3,
      key: "resend",
      label: "캠페인 그룹 실시간 재발신",
      action: () => {
        addTabCurrentOnly({
          id: 24,
          title: `재발신: ${node.name}`,
          campaignId: node.group_id,
          campaignName: node.name,
          uniqueKey: `groupBulkUpdate_${node.group_id}_${Date.now()}`,
          params: {
            groupId: node.group_id,
            groupName: node.name,
          },
        });
      }
    }
  ];

  // 허용된 메뉴 ID에 따라 메뉴 아이템 필터링
  const visibleMenuItems = availableMenuIds?.length > 0
    ? menuItems.filter(item => availableMenuIds.includes(item.id))
    : [];

  if (visibleMenuItems.length === 0) {
    return null;
  }

  // 메뉴 렌더링 함수 (구분선 처리 포함)
  const renderMenuItems = () => {
    const elements: React.ReactElement[] = [];
    let currentGroup = -1;

    visibleMenuItems.forEach(item => {
      // 그룹이 변경되면 구분선 추가 (첫 그룹 제외)
      if (currentGroup !== -1 && item.group !== currentGroup) {
        elements.push(<Separator key={`separator-${item.group}`} />);
      }

      // 메뉴 아이템 추가
      elements.push(
        <div
          key={item.key}
          style={itemStyle}
          className="contexify-custom-item hover:bg-gray-100"
          onClick={item.action}
        >
          {item.label}
        </div>
      );

      currentGroup = item.group;
    });

    return elements;
  };

  // 캠페인 목록 텍스트 생성
  const campaignListText = campaignIds.length > 0 
    ? campaignIds.length <= 5 
      ? campaignIds.join(", ")
      : `${campaignIds.slice(0, 5).join(", ")} 외 ${campaignIds.length - 5}개`
    : "";

  return (
    <>
      {renderMenuItems()}
      
      {/* 일괄 동작 확인 Dialog (시작, 멈춤, 중지) */}
      <Dialog open={bulkActionDialog.open} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              {bulkActionDialog.actionKey && statusMap[bulkActionDialog.actionKey as keyof typeof statusMap] && (
                <>
                  <span className={statusMap[bulkActionDialog.actionKey as keyof typeof statusMap].color}>
                    {statusMap[bulkActionDialog.actionKey as keyof typeof statusMap].icon}
                  </span>
                  일괄 {statusMap[bulkActionDialog.actionKey as keyof typeof statusMap].label} 확인
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          
          <div className="py-4">
            <div className="space-y-4">
              <p>다음 캠페인에 대해 <strong>일괄 {bulkActionDialog.actionKey && statusMap[bulkActionDialog.actionKey as keyof typeof statusMap]?.label}</strong> 작업을 진행하시겠습니까?</p>
              
              <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                <p className="text-sm font-medium">선택된 캠페인 ({campaignIds.length}개)</p>
                <p className="text-sm text-gray-700 mt-1">{campaignListText}</p>
              </div>
            </div>
          </div>
          
          <DialogFooter className="sm:justify-end gap-2">
            <Button 
              variant="outline" 
              onClick={handleCloseDialog}
              disabled={bulkActionDialog.isLoading}
            >
              취소
            </Button>
            <Button 
              variant="default" 
              onClick={handleConfirmBulkAction}
              disabled={bulkActionDialog.isLoading}
              className={`${bulkActionDialog.actionKey && statusMap[bulkActionDialog.actionKey as keyof typeof statusMap]?.color.replace('text-', 'bg-').replace('-600', '-500')} hover:opacity-90`}
            >
              {bulkActionDialog.isLoading ? "처리 중..." : "확인"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* 결과 Dialog */}
      <Dialog open={resultDialog.open} onOpenChange={handleCloseResultDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className={resultDialog.isError ? "text-red-600" : ""}>
              {resultDialog.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="py-2">
            {resultDialog.description}
          </div>
          
          <DialogFooter className="sm:justify-end">
            <Button 
              variant="default" 
              onClick={handleCloseResultDialog}
            >
              확인
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default IContextMenuForCampaignGroupAtCampaignGroup;