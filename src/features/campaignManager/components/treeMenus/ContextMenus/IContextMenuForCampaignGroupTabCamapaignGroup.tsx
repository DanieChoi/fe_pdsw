"use client";

import React, { FC } from "react";
import { useTabStore } from "@/store/tabStore";
import { Item, Separator } from "react-contexify";

interface IContextMenuForCampaignGroupTabCamapaignProps {
  node: any;
  setIsCampaignAddPopupOpen: (open: boolean) => void;
  setIsDeleteDialogOpen: (open: boolean) => void;
  setIsRenameDialogOpen: (open: boolean) => void;
}

// 메뉴 아이템 배열을 반환하는 함수
export const getCampaignGroupMenuItems = (
  node: any,
  setIsCampaignAddPopupOpen: (open: boolean) => void,
  setIsDeleteDialogOpen: (open: boolean) => void, 
  setIsRenameDialogOpen: (open: boolean) => void
) => {
  const { addTabCurrentOnly } = useTabStore.getState();

  return [
    <Item
      key="bulk-update"
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
    </Item>,
    <Item 
      key="bulk-start" 
      onClick={() => console.log(`캠페인 그룹 일괄 시작: ${node.name}`)}
    >
      캠페인 그룹 일괄 시작
    </Item>,
    <Item 
      key="bulk-complete" 
      onClick={() => console.log(`캠페인 그룹 일괄 완료: ${node.name}`)}
    >
      캠페인 그룹 일괄 완료
    </Item>,
    <Item 
      key="bulk-stop" 
      onClick={() => console.log(`캠페인 그룹 일괄 중지: ${node.name}`)}
    >
      캠페인 그룹 일괄 중지
    </Item>,
    <Separator key="separator-1" />,
    <Item
      key="rename"
      onClick={() => { 
        console.log("캠페인 그룹 이름 변경:", node);
        console.log(`캠페인 그룹 tenant_id: ${node.tenant_id}`);
        console.log(`캠페인 그룹 group_id: ${node.group_id}`);
        setIsRenameDialogOpen(true);
      }}
    >
      캠페인 그룹 이름 변경
    </Item>,
    <Item
      key="delete"
      onClick={() => {
        console.log(`캠페인 그룹 삭제: ${node.name}`);
        setIsDeleteDialogOpen(true);
      }}
    >
      캠페인 그룹 삭제
    </Item>,
    <Separator key="separator-2" />,
    <Item
      key="add-campaign"
      onClick={() => {
        console.log(`캠페인 추가/제외: ${node.name}`);
        setIsCampaignAddPopupOpen(true);
      }}
    >
      캠페인 그룹에 캠페인 추가
    </Item>,
    <Item 
      key="resend" 
      onClick={() => console.log(`캠페인 그룹 실시간 재발신: ${node.name}`)}
    >
      캠페인 그룹 실시간 재발신
    </Item>
  ];
};

// 컴포넌트는 배열 반환 함수를 호출
const IContextMenuForCampaignGroupTabCamapaignGroup: FC<IContextMenuForCampaignGroupTabCamapaignProps> = (props) => {
  return <>{getCampaignGroupMenuItems(
    props.node, 
    props.setIsCampaignAddPopupOpen, 
    props.setIsDeleteDialogOpen, 
    props.setIsRenameDialogOpen
  )}</>;
};

export default IContextMenuForCampaignGroupTabCamapaignGroup;