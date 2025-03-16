// src\features\campaignManager\components\treeMenus\TreeMenusForAgentGroupTab.tsx
"use client";

import { useState, useEffect } from "react";
import { TreeNodeForSideBarCampaignGroupTab } from "./TreeNodeForSideBarCampaignGroupTab";
import { useAuthStore } from "@/store/authStore";
import { useSideMenuCampaignGroupTabStore } from "@/store/storeForSideMenuCampaignGroupTab";

export function TreeMenusForCampaignGroupTab() {
  const { tenant_id } = useAuthStore();
  
  // Use the store instead of local state
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
    sortDirection
  } = useSideMenuCampaignGroupTabStore();

  // Fetch tree data on component mount
  useEffect(() => {
    fetchTreeData(tenant_id);
  }, [tenant_id, fetchTreeData]);
  
  // Debug logging
  useEffect(() => {
    if (treeData.length > 0) {
      console.log("==== Tree structure data (including campaigns) ====");
      console.log("Tree data:", treeData);
      console.log("Current sort settings:", { field: sortField, direction: sortDirection });
    }
  }, [treeData, sortField, sortDirection]);
  
  // Loading state
  if (isLoading) {
    return (
      <div className="flex-1 overflow-auto p-4">
        <div className="flex justify-center items-center h-full">
          <div className="animate-pulse text-gray-500">트리 데이터를 불러오는 중...</div>
        </div>
      </div>
    );
  }
  
  // Error state
  if (error) {
    return (
      <div className="flex-1 overflow-auto p-4">
        <div className="bg-red-50 text-red-600 p-4 rounded-md">
          <h3 className="font-semibold">데이터 불러오기 실패</h3>
          <p className="text-sm mt-1">{error.message || '알 수 없는 오류가 발생했습니다.'}</p>
        </div>
      </div>
    );
  }

  // Empty state
  if (treeData.length === 0) {
    return (
      <div className="flex-1 overflow-auto p-4">
        <div className="flex justify-center items-center h-full">
          <div className="text-gray-500">데이터가 없습니다.</div>
        </div>
      </div>
    );
  }

  // Debug expanded nodes
  console.log("Expanded nodes:", Array.from(expandedNodes));

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