"use client";

import { useEffect } from "react";
import { TreeNodeForSideBarCampaignGroupTab } from "./TreeNodeForSideBarCampaignGroupTab";
import { useAuthStore } from "@/store/authStore";
import { useSideMenuCampaignGroupTabStore } from "@/store/storeForSideMenuCampaignGroupTab";

export function TreeMenusForCampaignGroupTab() {
  const { tenant_id } = useAuthStore();
  
  const { 
    treeData, 
    isLoading, 
    error, 
    expandedNodes, 
    selectedNodeId,
    fetchTreeData, 
    toggleNode, 
    selectNode
  } = useSideMenuCampaignGroupTabStore();

  console.log("treeData : ", treeData);

  // 초기 데이터 로드만 담당
  useEffect(() => {
    console.log("tenant_id is exist ?: ", tenant_id);
    fetchTreeData(tenant_id);
    // fetchTreeData 내부에서 테넌트 레벨만 자동 확장됨
  }, [tenant_id, fetchTreeData]);
  
  return (
    <div className="flex flex-grow overflow-y-auto min-h-0 tree-node">
      <div className="w-full">
        {treeData.map((node) => (
          <TreeNodeForSideBarCampaignGroupTab
            key={node.id}
            node={node}
            level={0}
            expandedNodes={expandedNodes}
            selectedNodeId={selectedNodeId}
            onNodeToggle={toggleNode}
            onNodeSelect={selectNode}
          />
        ))}
      </div>
    </div>
  );
}