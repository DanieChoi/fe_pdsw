"use client";

import { useState, useEffect } from "react";
import { create } from "zustand";
import { getStatusIcon } from "@/components/shared/layout/utils/utils";
import { FilterType, SortType } from "@/features/campaignManager/types/typeForSidebar2";
import { baseTabs, TabId } from "@/features/campaignManager/components/data/baseTabs";
import { TreeMenusForCampaigns } from "@/features/campaignManager/components/treeMenus/TreeMenusForCampaigns";
import { TreeMenusForAgentTab } from "@/features/campaignManager/components/treeMenus/TreeMenusForAgentTab";
import { TreeMenusForAgentGroupTab } from "@/features/campaignManager/components/treeMenus/TreeMenusForAgentGroupTab";
import { TabActions } from "./comp/TabActions";
import { useSideMenuStore } from "@/store/sideMenuStore";
import { useApiForGetTreeMenuDataForSideMenu } from "@/features/auth/hooks/useApiForGetTreeMenuDataForSideMenu";
import { useAuthStore } from "@/store/authStore";

// 사이드바 너비 상태 (Zustand)
interface SidebarWidthState {
  width: number;
  setWidth: (width: number) => void;
}

export const useSidebarWidthStore = create<SidebarWidthState>((set) => ({
  width: 330,
  setWidth: (width: number) => set({ width }),
}));

export default function SidebarContainer() {
  const [width, setWidth] = useState(330);
  const [selectedTabId, setSelectedTabId] = useState<TabId>("campaign");
  const [isResizing, setIsResizing] = useState(false);

  // todo: useMainStore 에서 counselor 가져 오기 here
  
  // 선택된 노드 (전역 상태)
  const selectedNodeId = useSideMenuStore((state) => state.selectedNodeId);
  const setSelectedNodeId = useSideMenuStore((state) => state.setSelectedNodeId);

  // API 데이터 fetch
  const { data: treeData, isLoading, error } = useApiForGetTreeMenuDataForSideMenu();

  // 리사이징 관련 로직
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

  // 탭에 따른 트리메뉴 렌더
  const renderTreeMenu = () => {
    switch (selectedTabId) {
      case "campaign":
        return (
          <TreeMenusForCampaigns
            treeData={treeData || []}
            isLoading={isLoading}
            error={error || null}
            selectedNodeId={selectedNodeId}
            getStatusIcon={getStatusIcon}
            onNodeSelect={setSelectedNodeId}
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
            <TabActions tabId={selectedTabId} />
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
        className="w-[1px] cursor-col-resize bg-[#FBFBFB] hover:bg-[#5BC2C1] active:bg-[#5BC2C1] group_col"
        onMouseDown={handleResizeStart}
      />
    </div>
  );
}