"use client";

import { useState, useEffect } from "react";
import { TreeItem } from "@/features/campaignManager/types/typeForSidebar2";
import { TreeNodeForTenantWithAgent } from "./TreeNodeForTenantWithAgent";
import { useSideMenuStore } from "@/store/sideMenuStore";
import { useCounselorStoreForSideBar } from "@/store/counselorStoreForSideBar";
import { useAuthStore } from "@/store/authStore"; // 현재 로그인된 유저의 tenant_id, role_id 가져오기
import { useApiForSidebarCounselor } from "@/features/campaignManager/hooks/useApiForGetDataForSidebarCounselorTab";
import CommonSkeletonForSideMenu from "@/components/shared/CommonSkeleton/CommonSkeletonForSideMenu";

export function TreeMenusForAgentTab() {
  const { tenant_id, role_id } = useAuthStore(); // 현재 로그인된 사용자 정보 가져오기
  useApiForSidebarCounselor(tenant_id.toString(), role_id.toString()); // API 호출을 Store에서 관리

  const { treeData, isLoading, error } = useCounselorStoreForSideBar();
  const selectedNodeId = useSideMenuStore((state) => state.selectedNodeId);
  const setSelectedNodeId = useSideMenuStore((state) => state.setSelectedNodeId);

  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [initialized, setInitialized] = useState(false);

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

  useEffect(() => {
    if (!initialized && !isLoading && !error && treeData && treeData.length > 0) {
      const items = treeData[0].items || [];
      const newExpanded = new Set<string>();

      const expandUpToLevel = (nodes: TreeItem[], currentLevel: number, maxLevel: number) => {
        for (const node of nodes) {
          if (currentLevel < maxLevel) newExpanded.add(node.id);
          if (node.children) expandUpToLevel(node.children, currentLevel + 1, maxLevel);
        }
      };

      expandUpToLevel(items, 0, 3);
      setExpandedNodes(newExpanded);
      setInitialized(true);
    }
  }, [initialized, isLoading, error, treeData]);

  if (isLoading) {
    return <CommonSkeletonForSideMenu itemCount={8} indentLevel={1} />;
  }

  if (error) {
    return <div className="p-4 text-red-600 bg-red-50 rounded-md">데이터를 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.</div>;
  }

  if (!treeData?.length) {
    return <div className="p-4 text-gray-500 text-center">표시할 데이터가 없습니다.</div>;
  }

  const items = treeData[0].items || [];

  console.log("treeData at 상담원 트리 메뉴 : ", treeData);

  return (
    <div className="flex-1 overflow-auto px-2">
      {items.map((item: TreeItem) => (
        <TreeNodeForTenantWithAgent
          key={item.id}
          item={item}
          level={0}
          expandedNodes={expandedNodes}
          selectedNodeId={selectedNodeId}
          onNodeToggle={handleNodeToggle}
          onNodeSelect={setSelectedNodeId}
        />
      ))}
    </div>
  );
}
