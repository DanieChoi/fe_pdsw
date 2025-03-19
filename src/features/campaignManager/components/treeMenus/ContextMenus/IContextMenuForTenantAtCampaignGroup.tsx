// src/features/campaignManager/components/treeMenus/ContextMenus/IContextMenuForTenantAtCampaignGroup.tsx
import React from "react";

interface IContextMenuForTenantAtCampaignGroupProps {
  nodeName: string;
  onAddGroup: () => void;
}

const IContextMenuForTenantAtCampaignGroup: React.FC<IContextMenuForTenantAtCampaignGroupProps> = ({ nodeName, onAddGroup }) => {
  return (
    <div
      className="contexify-custom-item"
      onClick={() => {
        console.log(`캠페인 그룹 추가: ${nodeName}`);
        onAddGroup();
      }}
    >
      캠페인 그룹 추가
    </div>
  );
};

export default IContextMenuForTenantAtCampaignGroup;
