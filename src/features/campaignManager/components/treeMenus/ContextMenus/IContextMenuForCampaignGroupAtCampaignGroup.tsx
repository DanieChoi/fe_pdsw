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
  fontSize: "14px",       // 글씨 크기
  padding: "2px 5px",     // 아이템 여백
  minWidth: "120px",      // 최소 너비
  cursor: "pointer",      // 마우스 커서
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
      <Item
        key="bulk-update"
        style={itemStyle}
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
      </Item>

      <Item
        key="bulk-start"
        style={itemStyle}
        onClick={() => console.log(`캠페인 그룹 일괄 시작: ${node.name}`)}
      >
        캠페인 그룹 일괄 시작
      </Item>

      <Item
        key="bulk-complete"
        style={itemStyle}
        onClick={() => console.log(`캠페인 그룹 일괄 완료: ${node.name}`)}
      >
        캠페인 그룹 일괄 완료
      </Item>

      <Item
        key="bulk-stop"
        style={itemStyle}
        onClick={() => console.log(`캠페인 그룹 일괄 중지: ${node.name}`)}
      >
        캠페인 그룹 일괄 중지
      </Item>

      <Separator key="separator-1" />

      <Item
        key="rename"
        style={itemStyle}
        onClick={() => {
          console.log("캠페인 그룹 이름 변경:", node);
          setIsRenameDialogOpen(true);
        }}
      >
        캠페인 그룹 이름 변경
      </Item>

      <Item
        key="delete"
        style={itemStyle}
        onClick={() => {
          console.log(`캠페인 그룹 삭제: ${node.name}`);
          setIsDeleteDialogOpen(true);
        }}
      >
        캠페인 그룹 삭제
      </Item>

      <Separator key="separator-2" />

      <Item
        key="add-campaign"
        style={itemStyle}
        onClick={() => {
          console.log(`캠페인 추가/제외: ${node.name}`);
          setIsCampaignAddPopupOpen(true);
        }}
      >
        캠페인 그룹에 캠페인 추가
      </Item>

      <Item
        key="resend"
        style={itemStyle}
        onClick={() => console.log(`캠페인 그룹 실시간 재발신: ${node.name}`)}
      >
        캠페인 그룹 실시간 재발신
      </Item>
    </>
  );
};

export default IContextMenuForCampaignGroupAtCampaignGroup;