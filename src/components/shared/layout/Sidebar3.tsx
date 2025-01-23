// src/features/campaignManager/components/SidebarContainer.tsx
import { useState, useEffect } from 'react';
import {
  handleMouseMoveForSidebar,
  handleMouseUpForSidebar,
  getStatusIcon,
  handleNodeToggleForSidebar,
  handleNodeSelectForSidebar,
  processTreeItemsForSidebar,
  sortTreeItemsForSidebar,
} from '@/components/shared/layout/utils/utils';
import { TabData, FilterType, SortType, TreeItem } from '@/features/campaignManager/types/typeForSidebar2';
import SidebarPresenter from './SidebarPresenter';
import { tabsData } from './data/menuData';
import CommonButton from '../CommonButton';
import { useApiForGetTenantList } from '@/features/auth/hooks/useApiForGetTennantList';
import { useApiForGetCampaignList } from '@/features/auth/hooks/useApiForGetCampaignList';

export default function SidebarContainer() {
  const [width, setWidth] = useState(330);
  const [selectedTabId, setSelectedTabId] = useState(tabsData[0].id);
  const [selectedNodeId, setSelectedNodeId] = useState<string>();
  const [isResizing, setIsResizing] = useState(false);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [sortType, setSortType] = useState<SortType>('name');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [treeData, setTreeData] = useState<TabData[]>(tabsData);

  const { 
    data: tenantsData,
    isLoading: isLoadingTenants,
    error: tenantsError
  } = useApiForGetTenantList();

  const {
    data: campaignData,
    isLoading: isLoadingCampaigns,
    error: campaignError
  } = useApiForGetCampaignList();

  // 테넌트와 캠페인 데이터 로그 출력
  useEffect(() => {
    if (tenantsData) {
      console.log('Tenants Data:', tenantsData);
    }
  }, [tenantsData]);

  useEffect(() => {
    if (campaignData) {
      console.log('Campaign Data:', campaignData);
    }
  }, [campaignData]);

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => handleMouseMoveForSidebar(e, isResizing, setWidth);
    const mouseUpHandler = () => handleMouseUpForSidebar(setIsResizing);

    if (isResizing) {
      window.addEventListener('mousemove', mouseMoveHandler);
      window.addEventListener('mouseup', mouseUpHandler);
    }

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mouseup', mouseUpHandler);
    };
  }, [isResizing]);

  const handleNodeToggle = (nodeId: string) => {
    handleNodeToggleForSidebar(nodeId, expandedNodes, setExpandedNodes);
  };

  const handleNodeSelect = (nodeId: string) => {
    handleNodeSelectForSidebar(nodeId, setSelectedNodeId);
  };

  const handleSort = async (type: SortType) => {
    try {
      setSortType(type);
      setIsLoading(true);
      const sortedData = treeData.map((tab) => ({
        ...tab,
        items: sortTreeItemsForSidebar(tab.items, type),
      }));
      setTreeData(sortedData);
    } catch (err) {
      setError('데이터 정렬에 실패했습니다');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilter = async (type: FilterType) => {
    try {
      setFilterType(type);
      setIsLoading(true);
      const filteredData = tabsData.map((tab) => ({
        ...tab,
        items: processTreeItemsForSidebar(tab.items, type),
      }));
      setTreeData(filteredData);
    } catch (err) {
      setError('데이터 필터링에 실패했습니다');
    } finally {
      setIsLoading(false);
    }
  };

  if (error || tenantsError || campaignError) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="text-center space-y-4 bg-white rounded-xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-red-500">오류가 발생했습니다</h2>
          <p className="text-gray-600">
            {error || tenantsError?.message || campaignError?.message || '데이터를 불러오는데 실패했습니다'}
          </p>
          <CommonButton 
            variant="outline"
            onClick={() => window.location.reload()}
            className="mt-2"
          >
            다시 시도
          </CommonButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SidebarPresenter
        width={width}
        selectedTabId={selectedTabId}
        selectedNodeId={selectedNodeId}
        isResizing={isResizing}
        expandedNodes={expandedNodes}
        tabs={treeData}
        getStatusIcon={getStatusIcon}
        onTabChange={setSelectedTabId}
        onNodeToggle={handleNodeToggle}
        onNodeSelect={handleNodeSelect}
        onResizeStart={() => setIsResizing(true)}
        onSort={handleSort}
        onFilter={handleFilter}
        selectedSort={sortType}
        selectedFilter={filterType}
        isLoading={isLoading || isLoadingTenants || isLoadingCampaigns}
        error={error}
      />
      <style jsx global>{`
        .hoverable-tree-item {
          transition: background-color 0.2s ease, box-shadow 0.2s ease;
        }

        .hoverable-tree-item:hover {
          background-color: #f0f9ff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transform: scale(1.02);
          z-index: 1;
        }

        .hoverable-tree-item .tree-item-content {
          transition: color 0.2s ease;
        }

        .hoverable-tree-item:hover .tree-item-content {
          color: #2563eb;
        }
      `}</style>
    </div>
  );
}