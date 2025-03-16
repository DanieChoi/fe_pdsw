"use client";

import { useState, useEffect } from "react";
import { TreeNodeForSideBarCampaignGroupTab } from "./TreeNodeForSideBarCampaignGroupTab";
import { useAuthStore } from "@/store/authStore";
import { useSideMenuCampaignGroupTabStore } from "@/store/storeForSideMenuCampaignGroupTab";

export function TreeMenusForCampaignGroupTab() {
  const { tenant_id } = useAuthStore();
  
  // 스토어에서 가져오기
  const { 
    treeData, 
    isLoading, 
    error, 
    expandedNodes, 
    selectedNodeId,
    fetchTreeData, 
    toggleNode, 
    selectNode,
    sortField,
    sortDirection,
    expandAllNodes, // 초기 펼치기용으로 유지
    selectedNodeType // 현재 선택된 노드 타입을 위해 추가
  } = useSideMenuCampaignGroupTabStore();

  // 초기 로드 시 모든 노드 펼치기 유지 (처음에는 다 펼쳐진 상태로 시작)
  useEffect(() => {
    const fetchData = async () => {
      await fetchTreeData(tenant_id);
      expandAllNodes(); // 초기에는 모든 노드 펼치기 유지
    };
    
    fetchData();
  }, [tenant_id, fetchTreeData, expandAllNodes]);
  
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