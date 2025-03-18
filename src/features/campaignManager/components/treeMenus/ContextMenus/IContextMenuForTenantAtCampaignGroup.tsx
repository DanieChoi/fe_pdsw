// src/features/campaignManager/components/treeMenus/ContextMenus/IContextMenuForTenantAtCampaignGroup.tsx
import React from "react";
import { Item } from "react-contexify";

interface IContextMenuForTenantAtCampaignGroupProps {
  nodeName: string;
  onAddGroup: () => void;
}

const IContextMenuForTenantAtCampaignGroup: React.FC<IContextMenuForTenantAtCampaignGroupProps> = ({ nodeName, onAddGroup }) => {
  return (
    <Item
      onClick={() => {
        console.log(`캠페인 그룹 추가: ${nodeName}`);
        onAddGroup();
      }}
      style={{ color: "#0070F3", fontSize: "14px" }}
    >
      캠페인 그룹 추가
    </Item>
  );
};

export default IContextMenuForTenantAtCampaignGroup;
