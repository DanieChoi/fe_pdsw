"use client";

import { useState, useEffect } from "react";
import { useApiForGetCampaignGroupTabTreeMenuData } from "@/features/preferences/hooks/useApiForGetCampaignGroupTabTreeMenuData";
import { TreeNode } from "@/features/campaignManager/types/typeForCampaignGroupForSideBar";
import { TreeNodeForSideBarCampaignGroupTab } from "./TreeNodeForSideBarCampaignGroupTab";
import { Building, Users, MessageSquare, Search } from "lucide-react";

// 샘플 트리 데이터 (캠페인 노드 포함)
const sampleTreeData: TreeNode[] = [
  {
    id: "tenant-1",
    name: "테넌트 A",
    type: "tenant",
    children: [
      { 
        id: "group-1", 
        name: "그룹 A1", 
        type: "group",
        children: [
          { id: "campaign-1", name: "캠페인 A1-1", type: "campaign", campaign_id: 101 },
          { id: "campaign-2", name: "캠페인 A1-2", type: "campaign", campaign_id: 102 }
        ]
      },
      { 
        id: "group-2", 
        name: "그룹 A2", 
        type: "group",
        children: [
          { id: "campaign-3", name: "캠페인 A2-1", type: "campaign", campaign_id: 103 }
        ]
      },
    ],
  },
  {
    id: "tenant-2",
    name: "테넌트 B",
    type: "tenant",
    children: [
      { 
        id: "group-3", 
        name: "그룹 B1", 
        type: "group",
        children: [
          { id: "campaign-4", name: "캠페인 B1-1", type: "campaign", campaign_id: 201 }
        ]
      },
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
  
  // 트리 구조 데이터 가져오기 (캠페인 포함)
  const { data: treeData, isLoading: isLoadingTree, error: errorTree } = 
    useApiForGetCampaignGroupTabTreeMenuData(tenant_id);

  // 노드 확장/축소 토글
  const handleNodeToggle = (nodeId: string) => {
    console.log("노드 토글:", nodeId);
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

  console.log("treeData with campaigns: ", treeData);
  
  // 노드 선택
  const handleNodeSelect = (nodeId: string) => {
    setSelectedNodeId(nodeId);
  };

  // ID로 노드 찾기 도우미 함수
  const findNodeById = (nodes: TreeNode[], id: string): TreeNode | undefined => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const found = findNodeById(node.children, id);
        if (found) return found;
      }
    }
    return undefined;
  };

  // 모든 노드 리스트 가져오기
  const getAllNodes = (nodes: TreeNode[]): TreeNode[] => {
    let result: TreeNode[] = [];
    
    for (const node of nodes) {
      result.push(node);
      if (node.children && node.children.length > 0) {
        result = [...result, ...getAllNodes(node.children)];
      }
    }
    
    return result;
  };

  // 디버깅: 캠페인 노드 찾기
  useEffect(() => {
    if (treeData) {
      const allNodes = getAllNodes(treeData);
      const campaignNodes = allNodes.filter(node => node.type === "campaign");
      console.log("캠페인 노드 목록:", campaignNodes);
    }
  }, [treeData]);

  // 트리 데이터 로드 시 콘솔에 로그 출력 및 초기 확장 설정
  useEffect(() => {
    if (treeData) {
      console.log("==== 변환된 트리 구조 데이터 (캠페인 포함) ====");
      console.log("트리 데이터:", treeData);
      
      // 모든 노드를 자동으로 확장 (개발 모드에서 테스트용)
      const newExpandedNodes = new Set<string>();
      
      // 모든 노드를 순회하면서 ID 추가
      const addAllNodeIds = (nodes: TreeNode[]) => {
        nodes.forEach(node => {
          newExpandedNodes.add(node.id);
          if (node.children && node.children.length > 0) {
            addAllNodeIds(node.children);
          }
        });
      };
      
      addAllNodeIds(treeData);
      setExpandedNodes(newExpandedNodes);
    }
  }, [treeData]);

  // 실제 데이터 또는 샘플 데이터 사용
  const displayData = treeData || sampleTreeData;
  
  // 로딩 상태 표시
  if (isLoadingTree) {
    return (
      <div className="flex-1 overflow-auto p-4">
        <div className="flex justify-center items-center h-full">
          <div className="animate-pulse text-gray-500">트리 데이터를 불러오는 중...</div>
        </div>
      </div>
    );
  }
  
  // 에러 상태 표시
  if (errorTree) {
    return (
      <div className="flex-1 overflow-auto p-4">
        <div className="bg-red-50 text-red-600 p-4 rounded-md">
          <h3 className="font-semibold">데이터 불러오기 실패</h3>
          <p className="text-sm mt-1">{errorTree.message || '알 수 없는 오류가 발생했습니다.'}</p>
        </div>
      </div>
    );
  }

  // 확장된 노드 디버깅
  console.log("확장된 노드 목록:", Array.from(expandedNodes));

  return (
    <div className="flex-1 overflow-auto p-4">
      {/* <div className="mb-4">
        <h2 className="text-lg font-semibold">캠페인 그룹 관리</h2>
        <p className="text-sm text-gray-500">테넌트, 캠페인 그룹, 캠페인을 관리할 수 있습니다.</p>
      </div> */}
      
      {/* 테넌트/그룹/캠페인 통계 표시 */}
      {/* <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-blue-50 p-3 rounded-md">
          <div className="text-sm text-blue-600 font-medium">테넌트</div>
          <div className="text-xl font-bold">{countNodesByType(displayData, "tenant")}</div>
        </div>
        <div className="bg-indigo-50 p-3 rounded-md">
          <div className="text-sm text-indigo-600 font-medium">캠페인 그룹</div>
          <div className="text-xl font-bold">{countNodesByType(displayData, "group")}</div>
        </div>
        <div className="bg-green-50 p-3 rounded-md">
          <div className="text-sm text-green-600 font-medium">캠페인</div>
          <div className="text-xl font-bold">{countNodesByType(displayData, "campaign")}</div>
        </div>
      </div> */}
      
      <div className="space-y-1 border rounded-md p-2">
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

// 특정 타입의 노드 개수 세기
function countNodesByType(nodes: TreeNode[], type: string): number {
  let count = 0;
  
  function countRecursive(nodeList: TreeNode[]) {
    for (const node of nodeList) {
      if (node.type === type) count++;
      if (node.children) countRecursive(node.children);
    }
  }
  
  countRecursive(nodes);
  return count;
}