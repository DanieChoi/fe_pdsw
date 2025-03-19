// src/features/campaignManager/components/ContextMenus/IContextMenuForCampaignGroupAtCampaignGroup.tsx
import React from "react";
import { useTabStore } from "@/store/tabStore";
import { Item, Separator } from "react-contexify";

interface IContextMenuForCampaignGroupAtCampaignGroupProps {
  node: any;
  setIsCampaignAddPopupOpen: (open: boolean) => void;
  setIsDeleteDialogOpen: (open: boolean) => void;
  setIsRenameDialogOpen: (open: boolean) => void;
}

// 공통 스타일 설정
const itemStyle: React.CSSProperties = {
  fontSize: "13px",       // 글씨 크기
  padding: "4px 6px",     // 아이템 여백
  borderRadius: "3px",
};

const IContextMenuForCampaignGroupAtCampaignGroup: React.FC<IContextMenuForCampaignGroupAtCampaignGroupProps> = ({
  node,
  setIsCampaignAddPopupOpen,
  setIsDeleteDialogOpen,
  setIsRenameDialogOpen,
}) => {
  const { addTabCurrentOnly } = useTabStore.getState();

  return (
    <>
      <div
        key="bulk-update"
        style={itemStyle}
        className="contexify-custom-item"
        onClick={() => {
          console.log(`캠페인 그룹 일괄 수정: ${node.name}`);
          addTabCurrentOnly({
            id: 1,
            title: `캠페인 그룹 관리: ${node.name}`,
            uniqueKey: `groupBulkUpdate_${node.group_id}_${Date.now()}`,
            params: {
              groupId: node.group_id,
              groupName: node.name,
            },
          });
        }}
      >
        캠페인 그룹 일괄 수정
      </div>

      <div
        key="bulk-start"
        style={itemStyle}
        className="contexify-custom-item"
        onClick={() => console.log(`캠페인 그룹 일괄 시작: ${node.name}`)}
      >
        캠페인 그룹 일괄 시작
      </div>

      <div
        key="bulk-complete"
        style={itemStyle}
        className="contexify-custom-item"
        onClick={() => console.log(`캠페인 그룹 일괄 완료: ${node.name}`)}
      >
        캠페인 그룹 일괄 완료
      </div>

      <div
        key="bulk-stop"
        style={itemStyle}
        className="contexify-custom-item"
        onClick={() => console.log(`캠페인 그룹 일괄 중지: ${node.name}`)}
      >
        캠페인 그룹 일괄 중지
      </div>

      <Separator key="separator-1" />

      <div
        key="rename"
        style={itemStyle}
        className="contexify-custom-item"
        onClick={() => {
          console.log("캠페인 그룹 이름 변경:", node);
          setIsRenameDialogOpen(true);
        }}
      >
        캠페인 그룹 이름 변경
      </div>

      <div
        key="delete"
        style={itemStyle}
        className="contexify-custom-item"
        onClick={() => {
          console.log(`캠페인 그룹 삭제: ${node.name}`);
          setIsDeleteDialogOpen(true);
        }}
      >
        캠페인 그룹 삭제
      </div>

      <Separator key="separator-2" />

      <div
        key="add-campaign"
        style={itemStyle}
        className="contexify-custom-item"
        onClick={() => {
          console.log(`캠페인 추가/제외: ${node.name}`);
          setIsCampaignAddPopupOpen(true);
        }}
      >
        캠페인 그룹에 캠페인 추가
      </div>

      <div
        key="resend"
        style={itemStyle}
        className="contexify-custom-item"
        onClick={() => console.log(`캠페인 그룹 실시간 재발신: ${node.name}`)}
      >
        캠페인 그룹 실시간 재발신
      </div>
    </>
  );
};

export default IContextMenuForCampaignGroupAtCampaignGroup;