"use client";

import { TreeNodeProps } from "@/components/shared/layout/SidebarPresenter";
import { ContextMenuForTreeNode } from "./ContextMenuForTreeNode";
import { ChevronRight, ChevronDown, Folder, FileText } from "lucide-react";
import { useTabStore } from '@/store/tabStore';
import { useCallback } from 'react';

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

  const { addTab, openedTabs, setActiveTab } = useTabStore();

  // 1) 더블클릭하면 캠페인 탭 열기
  // const handleDoubleClick = useCallback(() => {
  //   // 캠페인 타입이 아니면 무시
  //   if (item.type !== "campaign") return;

  //   // 이미 열려있는 탭인지 찾아보기
  //   const existingTab = openedTabs.find(
  //     (tab) => tab.id === 3 && tab.campaignId === item.id
  //   );
  //   if (existingTab) {
  //     // 이미 열려 있다면 탭만 활성화
  //     setActiveTab(existingTab.id, existingTab.uniqueKey);
  //     return;
  //   }

  //   // 2) 없는 경우 새로운 uniqueKey
  //   const newTabKey = `3-${item.id}-${Date.now()}`;

  //   // 3) addTab에 campaignId를 담아서 전달
  //   const newTab = {
  //     id: 2,
  //     uniqueKey: newTabKey,
  //     title: `캠페인 관리 - ${item.label}`,
  //     icon: "header-menu/캠페인관리.svg",
  //     href: "/campaign",
  //     campaignId: item.id, // ★ 여기서 campaignId를 넣어줌
  //     content: null
  //   };

  //   addTab(newTab);
  //   // addTab 내부에서 활성화까지 처리하므로 별도 setActiveTab 필요 없음
  // }, [item, openedTabs, addTab, setActiveTab]);

  const handleDoubleClick = useCallback(() => {
    if (item.type !== "campaign") return;
  
    const existingTab = openedTabs.find(tab => 
      tab.id === 2 && tab.campaignId === item.id
    );
  
    if (existingTab) {
      setActiveTab(existingTab.id, existingTab.uniqueKey);
      return;
    }
  
    const newTabKey = `2-${item.id}-${Date.now()}`;
    const newTab = {
      id: 2,
      uniqueKey: newTabKey,
      title: `캠페인 관리 - ${item.label}`,
      icon: "header-menu/캠페인관리.svg",
      href: "/campaign",
      campaignId: item.id,
      content: null
    };
  
    addTab(newTab);
  }, [item, addTab, openedTabs, setActiveTab]);

  // 일반 클릭
  const handleClick = useCallback(() => {
    onNodeSelect(item.id);
    if (hasChildren) {
      onNodeToggle(item.id);
    }
  }, [item.id, hasChildren, onNodeSelect, onNodeToggle]);

  // 우클릭 메뉴 예시
  const handleEdit = () => {
    console.log('Edit clicked:', { id: item.id, label: item.label, type: item.type });
  };

  const handleDelete = () => {
    console.log('Delete clicked:', { id: item.id, label: item.label, type: item.type });
  };

  const handleMonitor = () => {
    console.log('Monitor clicked:', { id: item.id, label: item.label, type: item.type });
  };

  const handleCopy = () => {
    console.log('Copy clicked:', { id: item.id, label: item.label, type: item.type });
  };
  
  return (
    <div className="select-none">
      <ContextMenuForTreeNode
        item={item}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onMonitor={handleMonitor}
        onCopy={handleCopy}
      >
        <div
          className={`flex items-center hover:bg-gray-100 rounded-lg px-2 py-1.5 cursor-pointer transition-colors duration-150
            ${isSelected ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : ""}`}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
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

            {item.type === "folder" ? (
              <Folder className="h-4 w-4 text-gray-400" />
            ) : (
              statusIcon ? (
                <img src={statusIcon} alt="status" className="w-4 h-4" />
              ) : (
                <FileText className="h-4 w-4 text-gray-400" />
              )
            )}

            <span className={`text-sm ${isSelected ? "font-medium" : ""}`}>
              {item.label}
            </span>
          </div>
        </div>
      </ContextMenuForTreeNode>

      {hasChildren && isExpanded && (
        <div>
          {item.children?.map((child) => (
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
