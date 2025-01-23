// src/features/campaignManager/components/SidebarContainer.tsx
"use client";

import { useState, useEffect } from 'react';
import { getStatusIcon } from '@/components/shared/layout/utils/utils';
import { FilterType, SortType, TreeItem } from '@/features/campaignManager/types/typeForSidebar2';
import { baseTabs, TabId } from '@/features/campaignManager/components/data/baseTabs';
import { TreeMenusForCampaigns } from '@/features/campaignManager/components/treeMenus/TreeMenusForCampaigns';
import { TreeMenusForAgentTab } from '@/features/campaignManager/components/treeMenus/TreeMenusForAgentTab';
import { TreeMenusForAgentGroupTab } from '@/features/campaignManager/components/treeMenus/TreeMenusForAgentGroupTab';

// ★ 추가: 기존에 TreeMenusForCampaigns 내부에서 사용하던 API 훅을 여기서 가져옵니다.
import { useApiForGetTreeMenuDataForCampaignTab } from "@/features/auth/hooks/useApiForGetTreeMenuDataForCampaignTab";
import { TabActions } from './comp/TabActions';

export default function SidebarContainer() {
  const [width, setWidth] = useState(330);
  const [selectedTabId, setSelectedTabId] = useState<TabId>('campaign');
  const [selectedNodeId, setSelectedNodeId] = useState<string>();
  const [isResizing, setIsResizing] = useState(false);

  // ⭐ expandedNodes: Set<string> (어떤 노드가 펼쳐져 있는지)
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const [sortType, setSortType] = useState<SortType>('name');
  const [filterType, setFilterType] = useState<FilterType>('all');

  // ★ 추가: 트리 데이터 가져오기
  const { treeData, isLoading, error } = useApiForGetTreeMenuDataForCampaignTab();

  // ----------------------------
  // 리사이징 관련 핸들러
  // ----------------------------
  const handleResizeStart = () => {
    setIsResizing(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing) return;
    const newWidth = e.clientX;
    setWidth(Math.max(200, Math.min(600, newWidth))); // 최소 200px, 최대 600px
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  // ----------------------------
  // 트리 노드 토글/선택 핸들러
  // ----------------------------
  const handleNodeToggle = (nodeId: string) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  };

  const handleNodeSelect = (nodeId: string) => {
    setSelectedNodeId(nodeId);
  };

  // ----------------------------
  // 특정 레벨까지 자동으로 펼치기 (예: 2 레벨)
  // ----------------------------
  // 이미 한번 펼친 적 있으면 또 펼치지 않도록 하는 플래그
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized && !isLoading && !error && treeData && treeData.length > 0) {
      const items = treeData[0].items || [];
      const newExpanded = new Set<string>();

      const expandUpToLevel = (nodes: TreeItem[], currentLevel: number, maxLevel: number) => {
        for (const node of nodes) {
          // currentLevel < maxLevel 이면 펼치기
          if (currentLevel < maxLevel) {
            newExpanded.add(node.id);
          }
          if (node.children) {
            expandUpToLevel(node.children, currentLevel + 1, maxLevel);
          }
        }
      };

      // 예: 2 레벨까지 자동으로 펼친다
      expandUpToLevel(items, 0, 3);

      setExpandedNodes(newExpanded);
      setInitialized(true); // 다시 안 불리도록
    }
  }, [initialized, isLoading, error, treeData]);

  // ----------------------------
  // 탭에 따라 다른 트리 컴포넌트 렌더
  // ----------------------------
  const renderTreeMenu = () => {
    // 공통 props
    const commonProps = {
      expandedNodes,
      selectedNodeId,
      getStatusIcon,
      onNodeToggle: handleNodeToggle,
      onNodeSelect: handleNodeSelect,
    };

    switch (selectedTabId) {
      case 'campaign':
        // 여기서 treeData, isLoading, error를 넘겨주도록 수정
        return (
          <TreeMenusForCampaigns
            {...commonProps}
            treeData={treeData}
            isLoading={isLoading}
            error={error ? new Error(error.message) : null}
          />
        );
      case 'agent':
        return <TreeMenusForAgentTab />;
      case 'agent-group':
        return <TreeMenusForAgentGroupTab />;
      default:
        return null;
    }
  };
  console.log("treeData check : ", treeData);
  


  // ----------------------------
  // 최종 렌더
  // ----------------------------
  return (
    <div className="flex h-full bg-white border-r">
      <div className="flex flex-col w-full" style={{ width: `${width}px` }}>
        {/* 헤더 */}

          <div className="flex-none flex items-center justify-between p-2 bg-gray-50 px-3 border-b">
            <div className="flex items-center gap-2 py-1.5">
              <img src="/sidebar-menu/phone_icon.svg" alt="navigation" className="w-4 h-4" />
              <span className="text-sm text-gray-800 font-medium">
                {baseTabs.find(tab => tab.id === selectedTabId)?.label} 
              </span>
            </div>
            <div className="flex items-center gap-1">
                <TabActions
                  tabId={selectedTabId}
                  // onFilter={onFilter || (() => {})}
                  // onSort={onSort || (() => {})}
                  // selectedFilter={selectedFilter}
                  // selectedSort={selectedSort}
                />
            </div>
          </div>

        
        {/* <div className="flex-none flex items-center justify-between p-3 bg-gray-50 border-b">
          <span className="text-sm font-medium text-gray-800">
            {baseTabs.find(tab => tab.id === selectedTabId)?.label}
          </span>
        </div> */}

        {/* 트리 메뉴 영역 */}
        {renderTreeMenu()}

        {/* 하단 탭 메뉴 */}
        <div className="flex-none border-t">
          {baseTabs.map(tab => (
            <button
              key={tab.id}
              className={`w-full text-left px-4 py-2 text-sm font-medium 
                ${
                  selectedTabId === tab.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                }`}
              onClick={() => setSelectedTabId(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 리사이즈 핸들 */}
      <div
        className="w-1 cursor-col-resize hover:bg-gray-300 active:bg-gray-400"
        onMouseDown={handleResizeStart}
      />
    </div>
  );
}
