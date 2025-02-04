"use client";

import { useState, useEffect } from 'react';
import { TreeItem } from '@/features/campaignManager/types/typeForSidebar2';
import { TreeNodeForTenantWithAgent } from './TreeNodeForTenantWithAgent';
import { Skeleton } from "@/components/ui/skeleton";
import { useSideMenuStore } from "@/store/sideMenuStore";
import { useApiForGetDataForSidebarCounselorTab } from "@/features/auth/hooks/useApiForGetDataForSidebarCounselorTab";
export function TreeMenusForAgentTab() {
  const { data: treeData, isLoading, error } = useApiForGetDataForSidebarCounselorTab();
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

  // 초기 확장 설정 (2레벨까지 자동 확장)
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

      // 2레벨까지 자동 확장
      expandUpToLevel(items, 0, 2);

      setExpandedNodes(newExpanded);
      setInitialized(true);
    }
  }, [initialized, isLoading, error, treeData]);

  // 로딩 상태 UI
  if (isLoading) {
    return (
      <div className="p-4 space-y-3">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-11/12" />
        <Skeleton className="h-6 w-10/12" />
        <Skeleton className="h-6 w-9/12" />
      </div>
    );
  }

  // 에러 상태 UI
  if (error) {
    return (
      <div className="p-4 text-red-600 bg-red-50 rounded-md">
        데이터를 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.
      </div>
    );
  }
  console.log("treeData at agent tab: ", treeData);

  // 데이터가 없는 경우 UI
  if (!treeData?.length) {
    return (
      <div className="p-4 text-gray-500 text-center">
        표시할 데이터가 없습니다.
      </div>
    );
  }

  const items = treeData[0].items || [];
  

  return (
    <div className="flex-1 overflow-auto px-2">
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