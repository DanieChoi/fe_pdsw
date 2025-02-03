// src/features/campaignManager/components/treeMenus/TreeMenusForAgentTab.tsx
"use client";

import { useState, useEffect } from 'react';
import { TreeItem } from '@/features/campaignManager/types/typeForSidebar2';
import { useApiToFetchCounselorTreeData } from "@/features/campaignManager/hooks/useApiToFetchCounselorTreeData";
import { TreeNode } from './TreeNode';
import { useSideMenuStore } from "@/store/sideMenuStore";
import { Building2, User, Users } from 'lucide-react';
import { TreeNodeForTenantWithAgent } from './TreeNodeForTenantWithAgent';

export function TreeMenusForAgentTab() {
  const { data: treeData, isLoading, error } = useApiToFetchCounselorTreeData();
  const selectedNodeId = useSideMenuStore((state) => state.selectedNodeId);
  const setSelectedNodeId = useSideMenuStore((state) => state.setSelectedNodeId);

  // 확장된 노드 상태 관리
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [initialized, setInitialized] = useState(false);

  // 노드 토글 핸들러
  const handleNodeToggle = (nodeId: string) => {
    setExpandedNodes((prev) => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  };

  console.log("treeData : ", treeData);
  

  // 초기 확장 설정
  useEffect(() => {
    if (!initialized && !isLoading && !error && treeData && treeData.length > 0) {
      const items = treeData[0].items || [];
      const newExpanded = new Set<string>();

      const expandUpToLevel = (nodes: TreeItem[], currentLevel: number, maxLevel: number) => {
        for (const node of nodes) {
          if (currentLevel < maxLevel) {
            newExpanded.add(node.id);
          }
          if (node.children) {
            expandUpToLevel(node.children, currentLevel + 1, maxLevel);
          }
        }
      };

      // 상담원 트리메뉴의 경우 2레벨까지 자동으로 펼치기
      expandUpToLevel(items, 0, 2);

      setExpandedNodes(newExpanded);
      setInitialized(true);
    }
  }, [initialized, isLoading, error, treeData]);

  // 상태에 따른 아이콘 반환 함수
  const getStatusIcon = (type?: string) => {
    // console.log("type : ", type);
    
    switch(type) {
      case 'counselor':
        return <User className="h-4 w-4 text-gray-500" />;
      case 'team':
        return <Users className="h-4 w-4 text-gray-500" />;
      case 'group':
        return <Building2 className="h-4 w-4 text-gray-500" />;
      default:
        return null;
    }
  };
  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">Error loading data</div>;
  }

  const items = treeData?.[0]?.items || [];

  return (
    <div className="flex-1 overflow-auto">
      {items.map((item: TreeItem) => (
        <TreeNodeForTenantWithAgent
          key={item.id}
          item={item}
          level={0}
          expandedNodes={expandedNodes}
          selectedNodeId={selectedNodeId}
          onNodeToggle={handleNodeToggle}
          onNodeSelect={setSelectedNodeId}
        />
      ))}
    </div>
  );
}