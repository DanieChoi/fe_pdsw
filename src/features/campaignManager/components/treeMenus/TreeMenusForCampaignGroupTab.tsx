"use client";

import { useEffect } from "react";
import { TreeNodeForSideBarCampaignGroupTab } from "./TreeNodeForSideBarCampaignGroupTab";
import { useAuthStore } from "@/store/authStore";
import { useSideMenuCampaignGroupTabStore } from "@/store/storeForSideMenuCampaignGroupTab";
import SearchBarForSideMenuForCampaignGroupTab from "./searchbar/SearchBarForSideMenuForCampaignGroupTab";
import { useApiForGetTreeDataForCampaignGroupTab } from "@/features/campaignManager/hooks/useApiForGetTreeDataForCampaignGroupTab";

export function TreeMenusForCampaignGroupTab() {
  const { tenant_id } = useAuthStore();
  
  console.log("tenant_id :!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ", tenant_id);
  

  // TanStack Query 커스텀 훅 사용 (tenant_id 자동 적용)
  const { isLoading, error, data } = useApiForGetTreeDataForCampaignGroupTab(tenant_id);
  
  // Zustand 스토어에서 UI 상태 가져오기
  const { 
    treeData, 
    expandedNodes, 
    selectedNodeId,
    toggleNode, 
    selectNode,
    expandTenantAndGroup
  } = useSideMenuCampaignGroupTabStore();

  console.log("treeData ㅁㅅ 캠페인 탭: ", treeData);
  
  // 데이터가 로드된 후 테넌트와 그룹 레벨 확장
  useEffect(() => {
    if (treeData.length > 0) {
      // 테넌트와 그룹 레벨까지만 확장
      useSideMenuCampaignGroupTabStore.getState().expandTenantAndGroup();
    }
  }, [treeData]);
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center border-b">
        <SearchBarForSideMenuForCampaignGroupTab/>
      </div>
      <div className="flex flex-grow overflow-y-auto min-h-0 tree-node">
        <div className="w-full">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">데이터를 불러오는 중...</div>
          ) : error ? (
            <div className="p-4 text-center text-red-500">오류 발생: {error.message}</div>
          ) : treeData.length === 0 ? (
            <div className="p-4 text-center text-gray-500">표시할 데이터가 없습니다</div>
          ) : (
            treeData.map((node) => (
              <TreeNodeForSideBarCampaignGroupTab
                key={node.id}
                node={node}
                level={0}
                expandedNodes={expandedNodes}
                selectedNodeId={selectedNodeId}
                onNodeToggle={toggleNode}
                onNodeSelect={selectNode}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}