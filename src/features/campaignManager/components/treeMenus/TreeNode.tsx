"use client";

import { TreeNodeProps } from "@/components/shared/layout/SidebarPresenter";
import { ContextMenuForTreeNode } from "./ContextMenuForTreeNode";
import { FileText } from "lucide-react";
import { useTabStore } from '@/store/tabStore';
import { useCallback } from 'react';
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { FolderContextMenu } from "./FolderContextMenuForTreeNode";
import Image from "next/image";

export function TreeNode({
  item,
  level,
  expandedNodes,
  selectedNodeId,
  getStatusIcon,
  onNodeToggle,
  onNodeSelect,
}: TreeNodeProps) {
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedNodes.has(item.id);
  const isSelected = selectedNodeId === item.id;
  const statusIcon = getStatusIcon(item.status);

  const { simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu, setCampaignIdForCopyCampaign, addTab } = useTabStore();

  const handleDoubleClick = useCallback(() => {
    if (item.type !== "campaign") return;
    simulateHeaderMenuClick(2);
    setCampaignIdForUpdateFromSideMenu(item.id);
  }, [item, simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu]);

  const handleClick = useCallback(() => {
    onNodeSelect(item.id);
    if (hasChildren) {
      onNodeToggle(item.id);
    }
  }, [item.id, hasChildren, onNodeSelect, onNodeToggle]);

  const handleEdit = () => {
    console.log('Edit clicked:', { id: item.id, label: item.label, type: item.type });
  };

  const handleDelete = () => {
    console.log('Delete clicked:', { id: item.id, label: item.label, type: item.type });
  };

  const handleMonitor = () => {
    console.log('Monitor clicked:', { id: item.id, label: item.label, type: item.type });
  };

  const onHandleCampaignCopy = () => {
    console.log('Copy clicked:', { id: item.id, label: item.label, type: item.type });
    setCampaignIdForUpdateFromSideMenu(item.id);
    setCampaignIdForCopyCampaign(item.id);

    addTab({
      id: 130,
      uniqueKey: '130',
      title: '캠페인 복사',
      icon: '',
      href: '',
      content: null,
    });    
  };
  
  return (
    <div className="select-none">
      {item.type === "folder" ? (
        <ContextMenu>
          <ContextMenuTrigger>
            <div
              className={`flex items-center hover:bg-gray-100 px-2 py-1.5 cursor-pointer transition-colors duration-150
                ${isSelected ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : ""}`}
              onClick={handleClick}
              style={{ paddingLeft: `${level * 16 + 8}px` }}
            >
              <div className="flex items-center w-full gap-2">
                {hasChildren ? (
                  isExpanded ? (
                    <Image src="/tree-menu/minus_for_tree.png" alt="접기" width={12} height={12} />
                  ) : (
                    <Image src="/tree-menu/plus_icon_for_tree.png" alt="펼치기" width={12} height={12} />
                  )
                ) : (
                  <span className="w-4" />
                )}
                <Image src="/tree-menu/tennant_office.png" alt="테넌트" width={14} height={12} />
                
                <span className={`text-sm ${isSelected ? "font-medium" : ""}`}>
                  {item.label}
                </span>
              </div>
            </div>
          </ContextMenuTrigger>
          <FolderContextMenu item={item} />
        </ContextMenu>
      ) : (
        <ContextMenuForTreeNode
          item={item}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onMonitor={handleMonitor}
          onHandleCampaignCopy={onHandleCampaignCopy}
        >
          <div
            className={`flex items-center hover:bg-gray-100 px-2 py-1.5 cursor-pointer transition-colors duration-150
              ${isSelected ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : ""}`}
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
            style={{ paddingLeft: `${level * 16 + 8}px` }}
          >
            <div className="flex items-center w-full gap-2">
              {hasChildren ? (
                isExpanded ? (
                  <Image src="/tree-menu/minus_for_tree.png" alt="접기" width={12} height={12} />
                ) : (
                  <Image src="/tree-menu/plus_icon_for_tree.png" alt="펼치기" width={12} height={12} />
                )
              ) : (
                <span className="w-4" />
              )}
              {statusIcon ? (
                <Image src={statusIcon} alt="status" width={12} height={12} />
              ) : (
                <FileText className="h-4 w-4 text-gray-400" />
              )}
              <span className={`text-sm ${isSelected ? "font-medium" : ""}`}>
                {item.label}
              </span>
            </div>
          </div>
        </ContextMenuForTreeNode>
      )}

      {hasChildren && isExpanded && (
        <div>
          {item.children?.map((child: typeof item) => (
            <TreeNode
              key={child.id}
              item={child}
              level={level + 1}
              expandedNodes={expandedNodes}
              selectedNodeId={selectedNodeId}
              getStatusIcon={getStatusIcon}
              onNodeToggle={onNodeToggle}
              onNodeSelect={onNodeSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}