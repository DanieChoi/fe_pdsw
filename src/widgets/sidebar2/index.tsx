
// src/components/layout/SidebarContainer.tsx
"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  memo,
} from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { shallow } from "zustand/shallow";
import { useShallow } from "zustand/react/shallow";

import { baseTabs, TabId } from "@/features/campaignManager/components/data/baseTabs";
import { TreeMenusForCampaigns } from "@/features/campaignManager/components/treeMenus/TreeMenusForCampaigns";
import { TreeMenusForAgentTab } from "@/features/campaignManager/components/treeMenus/TreeMenusForAgentTab";
import { TreeMenusForCampaignGroupTab } from "@/features/campaignManager/components/treeMenus/TreeMenusForCampaignGroupTab";

import { useSidebarWidthStore } from "@/store/useSidebarWidthStore";
import { TabActions } from "@/components/shared/layout/comp/TabActions";
import { BottomTabsForSideMenu } from "@/components/shared/layout/BottomTabsForSideMenu";

// TabActions를 memo로 감싸 최소한으로만 리렌더
const MemoTabActions = memo(TabActions);
MemoTabActions.displayName = "MemoTabActions";

export default function Sidebar2() {
  const {
    width,
    isOpen,
    minWidth,
    maxWidth,
    setWidth,
    setIsOpen,
    setTabWidth,
    setCurrentTabId,
    setIsResizing,
  } = useSidebarWidthStore(
    useShallow((s) => ({
      width: s.width,
      isOpen: s.isOpen,
      minWidth: s.minWidth,
      maxWidth: s.maxWidth,
      setWidth: s.setWidth,
      setIsOpen: s.setIsOpen,
      setTabWidth: s.setTabWidth,
      setCurrentTabId: s.setCurrentTabId,
      setIsResizing: s.setIsResizing,
    }))
  );

  const [selectedTab, setSelectedTab] = useState<TabId>("campaign");
  const [resizing, setResizing] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // selectedTab이 바뀔 때만 실행 → 무한 루프 없음
  useEffect(() => {
    setCurrentTabId(selectedTab);
  }, [selectedTab, setCurrentTabId]);

  // 리사이즈 시작
  const handleResizeStart = useCallback<React.MouseEventHandler>((e) => {
    e.preventDefault();
    sidebarRef.current!.style.transition = "none";
    setResizing(true);
    setIsResizing(true);
  }, [setIsResizing]);

  // 리사이즈 중
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!resizing) return;
    const newW = Math.min(maxWidth, Math.max(minWidth, e.clientX));
    sidebarRef.current!.style.width = `${newW}px`;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setWidth(newW), 10);
  }, [resizing, minWidth, maxWidth, setWidth]);

  // 리사이즈 종료
  const handleMouseUp = useCallback(() => {
    if (!resizing) return;
    sidebarRef.current!.style.transition = "";
    const finalW = parseInt(sidebarRef.current!.style.width) || width;
    const clamped = Math.min(maxWidth, Math.max(minWidth, finalW));
    setWidth(clamped);
    setTabWidth(selectedTab, clamped);

    setResizing(false);
    setIsResizing(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, [
    resizing,
    width,
    minWidth,
    maxWidth,
    selectedTab,
    setWidth,
    setTabWidth,
    setIsResizing,
  ]);

  // 이벤트 리스너 관리
  useEffect(() => {
    if (resizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "none";
    } else {
      document.body.style.userSelect = "";
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "";
    };
  }, [resizing, handleMouseMove, handleMouseUp]);

  // 사이드바 토글
  const toggleSidebar = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  // 탭 변경
  const onTabChange = useCallback((tabId: TabId) => {
    setSelectedTab(tabId);
  }, []);

  // 현재 탭의 아이콘/레이블
  const tabInfo = useMemo(() => {
    const t = baseTabs.find((b) => b.id === selectedTab)!;
    return {
      icon: t.icon,
      label: t.label,
      w: t.iconWidth,
      h: t.iconHeight,
    };
  }, [selectedTab]);

  // 트리 메뉴
  const TreeSection = useMemo(() => {
    switch (selectedTab) {
      case "campaign":
        return <TreeMenusForCampaigns />;
      case "agent":
        return <TreeMenusForAgentTab />;
      case "campaign-group":
        return <TreeMenusForCampaignGroupTab />;
    }
  }, [selectedTab]);

  return (
    <div className="flex h-full bg-white border-r relative">
      <div
        ref={sidebarRef}
        className="flex flex-col transition-all duration-300 ease-in-out"
        style={{ width: isOpen ? `${width}px` : "0" }}
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between px-5 py-2 border-b">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Image src={tabInfo.icon} alt={tabInfo.label} width={tabInfo.w} height={tabInfo.h} />
            {tabInfo.label}
          </div>
          <MemoTabActions tabId={selectedTab} />
        </div>

        {/* 트리 메뉴 */}
        <div className="flex-1 overflow-y-auto">{TreeSection}</div>

        {/* 하단 탭 */}
        <div className={`transition-transform duration-300 ${!isOpen ? "scale-x-0 origin-left" : ""}`}>
          <BottomTabsForSideMenu selectedTabId={selectedTab} onTabChange={onTabChange} />
        </div>
      </div>

      {/* 토글 버튼 */}
      <button
        onClick={toggleSidebar}
        className="sidebar-button transition-all duration-300 ease-in-out z-30"
      >
        {isOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>

      {/* 리사이즈 핸들 */}
      {isOpen && (
        <div
          className="w-[1px] cursor-col-resize bg-[#FBFBFB] hover:bg-[#5BC2C1] active:bg-[#5BC2C1]"
          onMouseDown={handleResizeStart}
        />
      )}
    </div>
  );
}
