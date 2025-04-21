"use client";

import { useEffect, useState } from "react"; // useState 추가
import { TreeNodeForSideBarCampaignGroupTab } from "./TreeNodeForSideBarCampaignGroupTab";
import { useAuthStore } from "@/store/authStore";
import { useSideMenuCampaignGroupTabStore } from "@/store/storeForSideMenuCampaignGroupTab";
import SearchBarForSideMenuForCampaignGroupTab from "./searchbar/SearchBarForSideMenuForCampaignGroupTab";
import { useApiForGetTreeDataForCampaignGroupTab } from "@/features/campaignManager/hooks/useApiForGetTreeDataForCampaignGroupTab";

export function TreeMenusForCampaignGroupTab() {
  // forceUpdate 상태 추가
  const [forceUpdate, setForceUpdate] = useState(0);

  const { tenant_id } = useAuthStore();

  // TanStack Query 커스텀 훅 사용 (tenant_id 자동 적용)
  const { isLoading, error, data } = useApiForGetTreeDataForCampaignGroupTab(tenant_id);

  // Zustand 스토어에서 UI 상태 가져오기 - removeCampaignFromGroup 추가
  const {
    treeData,
    expandedNodes,
    selectedNodeId,
    toggleNode,
    selectNode,
    expandTenantAndGroup,
    removeCampaignFromGroup // 이 함수를 추가
  } = useSideMenuCampaignGroupTabStore();

  console.log("TreeMenusForCampaignGroupTab 렌더링", treeData);


  // 데이터가 로드된 후 테넌트와 그룹 레벨 확장
  useEffect(() => {
    if (treeData.length > 0) {
      useSideMenuCampaignGroupTabStore.getState().expandTenantAndGroup();
    }
  }, [treeData]);

  // 전역 객체 설정
  useEffect(() => {
    window.campaignGroupTreeData = treeData;

    window.campaignGroupTreeForceUpdate = () => {
      setForceUpdate(prev => prev + 1);
    };

    window.removeCampaignFromGroupTree = (campaignId: string | number) => {
      const id = typeof campaignId === 'string' ? campaignId : campaignId.toString();

      // 스토어 함수 호출하여 노드 제거
      removeCampaignFromGroup(id);

      // 강제 리렌더링
      window.campaignGroupTreeForceUpdate?.();

      console.log(`캠페인 ID ${id}가 그룹 트리에서 제거됨`);
    };

    return () => {
      delete window.campaignGroupTreeData;
      delete window.campaignGroupTreeForceUpdate;
      delete window.removeCampaignFromGroupTree;
    };
  }, [treeData, removeCampaignFromGroup]);

  
  return (
    <div className="flex flex-col h-full">
      선택된 아이디 정보 출력: {selectedNodeId}
      <div className="flex items-center border-b">
        <SearchBarForSideMenuForCampaignGroupTab />
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
                key={`${node.id}-${forceUpdate}`} // forceUpdate 추가
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

// window 객체에 타입 확장
declare global {
  interface Window {
    campaignGroupTreeData?: any;
    campaignGroupTreeForceUpdate?: () => void;
    removeCampaignFromGroupTree?: (campaignId: string | number) => void;
  }
}