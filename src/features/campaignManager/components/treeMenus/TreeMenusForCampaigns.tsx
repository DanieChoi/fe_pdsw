// src/features/campaignManager/components/treeMenus/TreeMenusForCampaigns.tsx
"use client";

import { TreeItem } from '@/features/campaignManager/types/typeForSidebar2';
import { TreeNode } from './TreeNode';

// ★ SidebarContainer에서 내려주는 props
interface TreeMenuProps {
  treeData: any[]; // 실제 타입에 맞게 지정
  isLoading: boolean;
  error: Error | null;
  expandedNodes: Set<string>;
  selectedNodeId?: string;
  getStatusIcon: (status?: string) => string | null;
  onNodeToggle: (nodeId: string) => void;
  onNodeSelect: (nodeId: string) => void;
}

export function TreeMenusForCampaigns({
  treeData,
  isLoading,
  error,
  expandedNodes,
  selectedNodeId,
  getStatusIcon,
  onNodeToggle,
  onNodeSelect,
}: TreeMenuProps) {

  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">{error.message}</div>;
  }

  // ★ treeData에서 items 가져오기
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
          onNodeToggle={onNodeToggle}
          onNodeSelect={onNodeSelect}
        />
      ))}
    </div>
  );
}
