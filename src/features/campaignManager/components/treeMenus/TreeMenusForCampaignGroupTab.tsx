"use client";

import { useEffect } from "react";
import { TreeNodeForSideBarCampaignGroupTab } from "./TreeNodeForSideBarCampaignGroupTab";
import { useAuthStore } from "@/store/authStore";
import { useSideMenuCampaignGroupTabStore } from "@/store/storeForSideMenuCampaignGroupTab";
import SearchBarForSideMenuForCampaignGroupTab from "./searchbar/SearchBarForSideMenuForCampaignGroupTab";
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
    selectNode,
    expandAllLevels // 모든 레벨을 확장하는 함수 추가
  } = useSideMenuCampaignGroupTabStore();

  console.log("treeData : ", treeData);

  // 초기 데이터 로드
  useEffect(() => {
    console.log("tenant_id is exist ?: ", tenant_id);
    fetchTreeData(tenant_id);
  }, [tenant_id, fetchTreeData]);
  
  // 데이터가 로드된 후 테넌트와 그룹 레벨 확장
  useEffect(() => {
    if (treeData.length > 0) {
      // 테넌트와 그룹 레벨까지만 확장
      useSideMenuCampaignGroupTabStore.getState().expandTenantAndGroup();
    }
  }, [treeData]);
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center border-b">
        <SearchBarForSideMenuForCampaignGroupTab/>
      </div>
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
    </div>
  );
}