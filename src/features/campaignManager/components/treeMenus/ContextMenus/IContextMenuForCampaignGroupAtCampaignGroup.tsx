import React, { JSX, useState } from "react";
import { useTabStore } from "@/store/tabStore";
import { useAvailableMenuStore } from "@/store/useAvailableMenuStore";
import { Separator } from "react-contexify";
import { useApiForMultiUpdateCampaignProgressStatus } from "../hook/useApiForMultiUpdateCampaignProgressStatus";
import CustomAlert from "@/components/shared/layout/CustomAlert";

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

// 상태값 매핑
const statusMap: Record<string, string> = {
  start: "1",
  complete: "2",
  stop: "3",
};

const IContextMenuForCampaignGroupAtCampaignGroup: React.FC<IContextMenuForCampaignGroupAtCampaignGroupProps> = ({
  node,
  setIsCampaignAddPopupOpen,
  setIsDeleteDialogOpen,
  setIsRenameDialogOpen,
}) => {
  const { addTabCurrentOnly } = useTabStore.getState();

  // Get available menu IDs from the store
  const availableMenuIds = useAvailableMenuStore(
    (state) => state.availableMenuIdsForCampaignGroupTabCampaignGroup
  );

  // 캠페인 상태 일괄 변경 훅
  const { updateCampaignsStatus, isLoading } = useApiForMultiUpdateCampaignProgressStatus();

  // CustomAlert 상태
  const [alert, setAlert] = useState<{
    open: boolean;
    title: string;
    message: React.ReactNode;
    type?: string;
  }>({ open: false, title: "", message: "", type: "1" });

  // 캠페인 그룹 내 캠페인 ID 배열 추출 (예시: node.campaignIds)
  const campaignIds: string[] = node.campaignIds || [];

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
    {
      id: 39,
      group: 1,
      key: "bulk-start",
      label: isLoading ? "일괄 시작 중..." : "캠페인 그룹 일괄 시작",
      action: async () => {
        if (isLoading) return;
        try {
          const result = await updateCampaignsStatus(campaignIds, statusMap["start"]);
          setAlert({
            open: true,
            title: "일괄 시작 결과",
            message: (
              <>
                <div>총 {result?.totalCount}개 캠페인 중 {result?.successCount}개 성공, {result?.failCount}개 실패</div>
                {result?.results && result.results.filter(r => !r.success).length > 0 && (
                  <div className="mt-2 text-red-500">
                    실패 캠페인: {result.results.filter(r => !r.success).map(r => r.campaignId).join(", ")}
                  </div>
                )}
              </>
            ),
            type: "1"
          });
        } catch (e: any) {
          setAlert({
            open: true,
            title: "일괄 시작 실패",
            message: e?.message || "일괄 시작 실패",
            type: "1"
          });
        }
      }
    },
    {
      id: 40,
      group: 1,
      key: "bulk-complete",
      label: isLoading ? "일괄 멈춤 중..." : "캠페인 그룹 일괄 멈춤",
      action: async () => {
        if (isLoading) return;
        try {
          const result = await updateCampaignsStatus(campaignIds, statusMap["complete"]);
          setAlert({
            open: true,
            title: "일괄 멈춤 결과",
            message: (
              <>
                <div>총 {result?.totalCount}개 캠페인 중 {result?.successCount}개 성공, {result?.failCount}개 실패</div>
                {result?.results && result.results.filter(r => !r.success).length > 0 && (
                  <div className="mt-2 text-red-500">
                    실패 캠페인: {result.results.filter(r => !r.success).map(r => r.campaignId).join(", ")}
                  </div>
                )}
              </>
            ),
            type: "1"
          });
        } catch (e: any) {
          setAlert({
            open: true,
            title: "일괄 멈춤 실패",
            message: e?.message || "일괄 멈춤 실패",
            type: "1"
          });
        }
      }
    },
    {
      id: 41,
      group: 1,
      key: "bulk-stop",
      label: isLoading ? "일괄 중지 중..." : "캠페인 그룹 일괄 중지",
      action: async () => {
        if (isLoading) return;
        try {
          const result = await updateCampaignsStatus(campaignIds, statusMap["stop"]);
          setAlert({
            open: true,
            title: "일괄 중지 결과",
            message: (
              <>
                <div>총 {result?.totalCount}개 캠페인 중 {result?.successCount}개 성공, {result?.failCount}개 실패</div>
                {result?.results && result.results.filter(r => !r.success).length > 0 && (
                  <div className="mt-2 text-red-500">
                    실패 캠페인: {result.results.filter(r => !r.success).map(r => r.campaignId).join(", ")}
                  </div>
                )}
              </>
            ),
            type: "1"
          });
        } catch (e: any) {
          setAlert({
            open: true,
            title: "일괄 중지 실패",
            message: e?.message || "일괄 중지 실패",
            type: "1"
          });
        }
      }
    },

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
    const elements: JSX.Element[] = [];
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
          className="contexify-custom-item"
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
      {alert.open && (
        <CustomAlert
          isOpen={alert.open}
          title={alert.title}
          message={alert.message}
          type={alert.type || "1"}
          onClose={() => setAlert(a => ({ ...a, open: false }))}
        />
      )}
    </>
  );
};

export default IContextMenuForCampaignGroupAtCampaignGroup;