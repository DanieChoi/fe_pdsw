"use client";

import { useState, useEffect } from 'react';
import { TreeItem } from '@/features/campaignManager/types/typeForSidebar2';
import { TreeNode } from './TreeNode';

interface TreeMenuProps {
  treeData: any[];
  isLoading: boolean;
  error: Error | null;
  selectedNodeId?: string;
  getStatusIcon: (status?: string) => string | null;
  onNodeSelect: (nodeId: string) => void;
}

export function TreeMenusForCampaigns({
  treeData,
  isLoading,
  error,
  selectedNodeId,
  getStatusIcon,
  onNodeSelect,
}: TreeMenuProps) {
  // 확장 상태를 컴포넌트 내부로 이동
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [initialized, setInitialized] = useState(false);

  // 노드 토글 핸들러를 컴포넌트 내부로 이동
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

  // 초기 확장 로직을 컴포넌트 내부로 이동
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

      // 캠페인 트리메뉴의 경우 3레벨까지 자동으로 펼치기
      expandUpToLevel(items, 0, 3);

      setExpandedNodes(newExpanded);
      setInitialized(true);
    }
  }, [initialized, isLoading, error, treeData]);

  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">{error.message}</div>;
  }

  const items = treeData?.[0]?.items || [];

  return (
    <div className="flex-1 overflow-auto">
      {items.map((item: TreeItem) => (
        <TreeNode
          key={item.id}
          item={item}
          level={0}
          expandedNodes={expandedNodes}
          selectedNodeId={selectedNodeId}
          getStatusIcon={getStatusIcon}
          onNodeToggle={handleNodeToggle}
          onNodeSelect={onNodeSelect}
        />
      ))}
    </div>
  );
}