// src/features/campaignManager/components/SidebarContainer.tsx
"use client";

import { useState, useEffect } from "react";
import { create } from "zustand";
import { getStatusIcon } from "@/components/shared/layout/utils/utils";
import { FilterType, SortType, TreeItem } from "@/features/campaignManager/types/typeForSidebar2";
import { baseTabs, TabId } from "@/features/campaignManager/components/data/baseTabs";
import { TreeMenusForCampaigns } from "@/features/campaignManager/components/treeMenus/TreeMenusForCampaigns";
import { TreeMenusForAgentTab } from "@/features/campaignManager/components/treeMenus/TreeMenusForAgentTab";
import { TreeMenusForAgentGroupTab } from "@/features/campaignManager/components/treeMenus/TreeMenusForAgentGroupTab";

// ★ 변경: 새로운 훅 임포트

import { TabActions } from "./comp/TabActions";
import { useSideMenuStore } from "@/store/sideMenuStore";
import { useApiForGetTreeMenuDataForSideMenu } from "@/features/auth/hooks/useApiForGetTreeMenuDataForSideMenu";

// --------------------------
// 사이드바 너비 상태 (Zustand)
// --------------------------
interface SidebarWidthState {
  width: number;
  setWidth: (width: number) => void;
}

export const useSidebarWidthStore = create<SidebarWidthState>((set) => ({
  width: 330, // 초기값
  setWidth: (width: number) => set({ width }),
}));

// --------------------------
// 메인 사이드바 컴포넌트
// --------------------------
export default function SidebarContainer() {
  const [width, setWidth] = useState(330);
  const [selectedTabId, setSelectedTabId] = useState<TabId>("campaign");
  const [isResizing, setIsResizing] = useState(false);

  // 트리 확장/필터/정렬 관련 상태
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [sortType, setSortType] = useState<SortType>("name");
  const [filterType, setFilterType] = useState<FilterType>("all");

  // 선택된 노드
  const selectedNodeId = useSideMenuStore((state) => state.selectedNodeId);
  const setSelectedNodeId = useSideMenuStore((state) => state.setSelectedNodeId);

  // --------------------------
  // ★ 새로운 API 훅 사용
  // --------------------------
  const { data: treeData, isLoading, error } = useApiForGetTreeMenuDataForSideMenu();

  // --------------------------
  // 리사이징 관련 로직
  // --------------------------
  const handleResizeStart = () => {
    setIsResizing(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing) return;
    const newWidth = e.clientX;
    const clampedWidth = Math.max(200, Math.min(600, newWidth));

    setWidth(clampedWidth);
    useSidebarWidthStore.getState().setWidth(clampedWidth);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  // --------------------------
  // 트리 노드 토글/선택
  // --------------------------
  const handleNodeToggle = (nodeId: string) => {
    console.log("clicked nodeId: ", nodeId);
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

  const handleNodeSelect = (nodeId: string) => {
    setSelectedNodeId(nodeId);
  };

  // --------------------------
  // 초기에 특정 레벨까지 자동 확장
  // --------------------------
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized && !isLoading && !error && treeData && treeData.length > 0) {
      const items = treeData[0].items || [];
      const newExpanded = new Set<string>();

      const expandUpToLevel = (nodes: TreeItem[], currentLevel: number, maxLevel: number) => {
        for (const node of nodes) {
          if (currentLevel < maxLevel) {
            newExpanded.add(node.id);
          }
          if (node.children) {
            expandUpToLevel(node.children, currentLevel + 1, maxLevel);
          }
        }
      };

      // 예: 3레벨까지 자동으로 펼치기
      expandUpToLevel(items, 0, 3);

      setExpandedNodes(newExpanded);
      setInitialized(true);
    }
  }, [initialized, isLoading, error, treeData]);

  // --------------------------
  // 탭에 따른 트리메뉴 렌더
  // --------------------------
  const renderTreeMenu = () => {
    const commonProps = {
      expandedNodes,
      selectedNodeId,
      getStatusIcon,
      onNodeToggle: handleNodeToggle,
      onNodeSelect: handleNodeSelect,
    };

    switch (selectedTabId) {
      case "campaign":
        return (
          <TreeMenusForCampaigns
            {...commonProps}
            treeData={treeData || []} // isLoading 시 빈배열
            isLoading={isLoading}
            error={error || null}
          />
        );
      case "agent":
        return <TreeMenusForAgentTab />;
      case "agent-group":
        return <TreeMenusForAgentGroupTab />;
      default:
        return null;
    }
  };

  // --------------------------
  // 최종 렌더
  // --------------------------
  return (
    <div className="flex h-full bg-white border-r">
      <div className="flex flex-col w-full" style={{ width: `${width}px` }}>
        {/* 상단 헤더 */}
        <div className="flex-none flex items-center justify-between p-2 bg-gray-50 px-3 border-b">
          <div className="flex items-center gap-2 py-1.5">
            <img src="/sidebar-menu/phone_icon.svg" alt="navigation" className="w-4 h-4" />
            <span className="text-sm text-gray-800 font-medium">
              {baseTabs.find((tab) => tab.id === selectedTabId)?.label}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <TabActions
              tabId={selectedTabId}
              // 추가적인 필터/정렬 콜백을 넘길 수 있습니다
            />
          </div>
        </div>

        {/* 트리메뉴 영역 */}
        {renderTreeMenu()}

        {/* 하단 탭 목록 */}
        <div className="flex-none border-t">
          {baseTabs.map((tab) => (
            <button
              key={tab.id}
              className={`w-full text-left px-4 py-2 text-sm font-medium
                ${
                  selectedTabId === tab.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
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
