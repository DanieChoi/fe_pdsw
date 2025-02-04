// src/features/campaignManager/components/treeMenus/TreeNodeForTenantWithAgent.tsx

"use client";

import { ChevronRight, ChevronDown, Building2, User, Users } from "lucide-react";
import { useCallback } from 'react';
import { ContextMenuForAgentNode } from "./ContextMenuForAgentNode";
import { TreeItem } from "../../types/typeForSidebar2";

interface TreeNodeProps {
  item: TreeItem;
  level: number;
  expandedNodes: Set<string>;
  selectedNodeId?: string;
  onNodeToggle: (nodeId: string) => void;
  onNodeSelect: (nodeId: string) => void;
}

export function TreeNodeForTenantWithAgent({
  item,
  level,
  expandedNodes,
  selectedNodeId,
  onNodeToggle,
  onNodeSelect,
}: TreeNodeProps) {
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedNodes.has(item.id);
  const isSelected = selectedNodeId === item.id;

  // type에 따른 아이콘 렌더링
  const renderIcon = () => {
    switch (item.type) {
      case 'counselor':
        return <User className="h-4 w-4 text-gray-500" />;
      case 'team':
        return <Users className="h-4 w-4 text-gray-500" />;
      case 'group':
        return <Building2 className="h-4 w-4 text-gray-500" />;
      default:
        return <Building2 className="h-4 w-4 text-gray-500" />;
    }
  };

  // 일반 클릭
  const handleClick = useCallback(() => {
    // console.log('Node clicked: (tenantId)', item.tenantId);

    onNodeSelect(item.id);
    if (hasChildren) {
      onNodeToggle(item.id);
    }
  }, [item.id, hasChildren, onNodeSelect, onNodeToggle]);

  // 우클릭 메뉴 기능
  const handleEdit = () => {
    console.log('Edit agent:', { id: item.id, label: item.label, type: item.type });
  };

  const handleDelete = () => {
    console.log('Delete agent:', { id: item.id, label: item.label, type: item.type });
  };

  const handleManage = () => {
    console.log('Manage agent:', { id: item.id, label: item.label, type: item.type });
  };

  return (
    <div className="select-none">
      <ContextMenuForAgentNode
        item={{
          type: item.type,
          id: item.id,
          label: item.label,
          tenantId: item.tenantId ?? '' // tenantId 전달
        }}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onManage={handleManage}
      >
        <div
          className={`flex items-center hover:bg-gray-100 rounded-lg px-2 py-1.5 cursor-pointer transition-colors duration-150
            ${isSelected ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : ""}`}
          onClick={handleClick}
          style={{ paddingLeft: `${level * 16 + 8}px` }}
        >
          <div className="flex items-center w-full gap-2">
            {hasChildren ? (
              isExpanded ? (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-500" />
              )
            ) : (
              <span className="w-4" />
            )}

            {renderIcon()}

            <span className={`text-sm ${isSelected ? "font-medium" : ""}`}>
              {item.label}
            </span>
          </div>
        </div>
      </ContextMenuForAgentNode>

      {hasChildren && isExpanded && (
        <div>
          {item.children?.map((child) => (
            <TreeNodeForTenantWithAgent
              key={child.id}
              item={child}
              level={level + 1}
              expandedNodes={expandedNodes}
              selectedNodeId={selectedNodeId}
              onNodeToggle={onNodeToggle}
              onNodeSelect={onNodeSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}