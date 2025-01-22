// src/features/campaignManager/components/SidebarContainer.tsx
import { useState, useEffect } from 'react';
import { getStatusIcon } from '@/components/shared/layout/utils/utils';
import { FilterType, SortType } from '@/features/campaignManager/types/typeForSidebar2';
import { baseTabs, TabId } from '@/features/campaignManager/components/data/baseTabs';
import { TreeMenusForCampaigns } from '@/features/campaignManager/components/treeMenus/TreeMenusForCampaigns';
import { TreeMenusForAgentTab } from '@/features/campaignManager/components/treeMenus/TreeMenusForAgentTab';
import { TreeMenusForAgentGroupTab } from '@/features/campaignManager/components/treeMenus/TreeMenusForAgentGroupTab';

export default function SidebarContainer() {
  const [width, setWidth] = useState(330);
  const [selectedTabId, setSelectedTabId] = useState<TabId>('campaign');
  const [selectedNodeId, setSelectedNodeId] = useState<string>();
  const [isResizing, setIsResizing] = useState(false);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [sortType, setSortType] = useState<SortType>('name');
  const [filterType, setFilterType] = useState<FilterType>('all');

  // 리사이징 관련 핸들러
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

  const renderTreeMenu = () => {
    const commonProps = {
      expandedNodes,
      selectedNodeId,
      getStatusIcon,
      onNodeToggle: handleNodeToggle,
      onNodeSelect: handleNodeSelect,
    };

    switch (selectedTabId) {
      case 'campaign':
        return <TreeMenusForCampaigns {...commonProps} />;
      case 'agent':
        return <TreeMenusForAgentTab />;
      case 'agent-group':
        return <TreeMenusForAgentGroupTab />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-full bg-white border-r">
      <div className="flex flex-col w-full" style={{ width: `${width}px` }}>
        {/* 헤더 */}
        <div className="flex-none flex items-center justify-between p-3 bg-gray-50 border-b">
          <span className="text-sm font-medium text-gray-800">
            {baseTabs.find(tab => tab.id === selectedTabId)?.label}
          </span>
        </div>

        {/* 트리 메뉴 영역 */}
        {renderTreeMenu()}

        {/* 하단 탭 메뉴 */}
        <div className="flex-none border-t">
          {baseTabs.map(tab => (
            <button
              key={tab.id}
              className={`w-full text-left px-4 py-2 text-sm font-medium 
                ${selectedTabId === tab.id 
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