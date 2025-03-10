"use client";

import { useState, useEffect } from "react";
import { 
  useApiForCombinedDataForSideMenuForCampaignTab,
  useApiForSideMenuTreeData
} from "@/features/preferences/hooks/useApiForCampaignGroupList";
import { TreeNode } from "@/features/campaignManager/types/typeForCampaignGroupForSideBar";
import { TreeNodeForSideBarCampaignGroupTab } from "./TreeNodeForSideBarCampaignGroupTab";

// 샘플 트리 데이터
const sampleTreeData: TreeNode[] = [
  {
    id: "tenant-1",
    name: "테넌트 A",
    type: "tenant",
    children: [
      { id: "group-1", name: "그룹 A1", type: "group" },
      { id: "group-2", name: "그룹 A2", type: "group" },
    ],
  },
  {
    id: "tenant-2",
    name: "테넌트 B",
    type: "tenant",
    children: [
      { id: "group-3", name: "그룹 B1", type: "group" },
      { id: "group-4", name: "그룹 B2", type: "group" },
    ],
  },
];

export function TreeMenusForCampaignGroupTab() {
  // 상태 관리
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(["tenant-1", "tenant-2"]));
  const [selectedNodeId, setSelectedNodeId] = useState<string | undefined>();
  
  // tenant_id는 실제 환경에서는 context나 store에서 가져올 수 있습니다
  const tenant_id = 2; // 예시 테넌트 ID
  
  // 통합 데이터 가져오기
  // const { data: combinedData, isLoading: isLoadingCombined, error: errorCombined } = 
  //   useApiForCombinedDataForSideMenuForCampaignTab(tenant_id);
    
  // 트리 구조 데이터 가져오기
  const { data: treeData, isLoading: isLoadingTree, error: errorTree } = 
    useApiForSideMenuTreeData(tenant_id);

  // 노드 확장/축소 토글
  const handleNodeToggle = (nodeId: string) => {
    setExpandedNodes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  };

  console.log("treeData : ", treeData);
  

  // 노드 선택
  const handleNodeSelect = (nodeId: string) => {
    setSelectedNodeId(nodeId);
  };


  // 트리 데이터 로드 시 콘솔에 로그 출력
  useEffect(() => {
    if (treeData) {
      console.log("==== 변환된 트리 구조 데이터 ====");
      console.log("트리 데이터:", treeData);
      
      // 첫 번째 테넌트 노드를 자동으로 확장
      if (treeData.length > 0) {
        setExpandedNodes(prev => {
          const newSet = new Set(prev);
          newSet.add(treeData[0].id);
          return newSet;
        });
      }
    }
  }, [treeData]);

  // 실제 데이터 또는 샘플 데이터 사용
  const displayData = treeData || sampleTreeData;

  return (
    <div className="flex-1 overflow-auto p-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">캠페인 그룹 관리</h2>
        <p className="text-sm text-gray-500">테넌트와 그룹을 관리할 수 있습니다.</p>
      </div>
      
      <div className="space-y-1">
        {displayData.map((node) => (
          <TreeNodeForSideBarCampaignGroupTab
            key={node.id}
            node={node}
            level={0}
            expandedNodes={expandedNodes}
            selectedNodeId={selectedNodeId}
            onNodeToggle={handleNodeToggle}
            onNodeSelect={handleNodeSelect}
          />
        ))}
      </div>
    </div>
  );
}