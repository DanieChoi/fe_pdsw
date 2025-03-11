"use client";

import { useState, useEffect, useRef } from "react";
import { baseTabs, TabId } from "@/features/campaignManager/components/data/baseTabs";
import { TreeMenusForCampaigns } from "@/features/campaignManager/components/treeMenus/TreeMenusForCampaigns";
import { TreeMenusForAgentTab } from "@/features/campaignManager/components/treeMenus/TreeMenusForAgentTab";
import { TabActions } from "./comp/TabActions";
import { BottomTabsForSideMenu } from "./BottomTabsForSideMenu";
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSidebarWidthStore } from "@/store/useSidebarWidthStore";
import { TreeMenusForCampaignGroupTab } from "@/features/campaignManager/components/treeMenus/TreeMenusForCampaignGroupTab";

interface SidebarToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

function SidebarToggleButton({ isOpen, onClick }: SidebarToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className="sidebar-button
                transition-all duration-300 ease-in-out z-30"
    >
      {isOpen ? (
        <ChevronLeft className="w-3 h-3 text-gray-600" />
      ) : (
        <ChevronRight className="w-3 h-3 text-gray-600" />
      )}
    </button>
  );
}

export default function SidebarContainer() {
  const storeWidth = useSidebarWidthStore(state => state.width);
  const storeIsOpen = useSidebarWidthStore(state => state.isOpen);
  const minWidth = useSidebarWidthStore(state => state.minWidth);
  const maxWidth = useSidebarWidthStore(state => state.maxWidth);
  const isResizing = useSidebarWidthStore(state => state.isResizing);
  const setStoreWidth = useSidebarWidthStore(state => state.setWidth);
  const setStoreIsOpen = useSidebarWidthStore(state => state.setIsOpen);
  const setTabWidth = useSidebarWidthStore(state => state.setTabWidth);
  const setCurrentTabId = useSidebarWidthStore(state => state.setCurrentTabId);
  const setIsResizing = useSidebarWidthStore(state => state.setIsResizing);

  const [selectedTabId, setSelectedTabId] = useState<TabId>("campaign");
  
  // 로컬 리사이징 상태 추가 (이중 안전장치)
  const [localResizing, setLocalResizing] = useState(false);
  
  // 성능 최적화를 위한 refs
  const sidebarRef = useRef<HTMLDivElement>(null);
  const lastWidthRef = useRef(storeWidth);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 선택된 탭 변경 시 Store 업데이트
  useEffect(() => {
    setCurrentTabId(selectedTabId);
  }, [selectedTabId, setCurrentTabId]);

  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // 트랜지션 효과 일시 중지 (렉 감소)
    if (sidebarRef.current) {
      sidebarRef.current.style.transition = 'none';
    }
    
    // 로컬 상태와 글로벌 상태 모두 업데이트
    setLocalResizing(true);
    setIsResizing(true);
    lastWidthRef.current = storeWidth;
  };

  const handleMouseMove = (e: MouseEvent) => {
    // 로컬 상태로 리사이징 여부 확인
    if (!localResizing) return;
    
    // DOM 직접 조작 (상태 업데이트 없이)
    const newWidth = e.clientX;
    const clampedWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
    
    if (sidebarRef.current) {
      sidebarRef.current.style.width = `${clampedWidth}px`;
    }
    
    // 디바운싱: 마우스 이동 중 실시간 상태 업데이트 제한
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }
    
    resizeTimeoutRef.current = setTimeout(() => {
      setStoreWidth(clampedWidth);
    }, 10); // 최소 상태 업데이트 간격
  };

  const handleMouseUp = () => {
    // 로컬 상태로 리사이징 여부 확인
    if (!localResizing) return;
    
    // 트랜지션 효과 복원
    if (sidebarRef.current) {
      sidebarRef.current.style.transition = '';
      
      // 마지막 너비 계산
      const currentWidth = parseInt(sidebarRef.current.style.width, 10) || storeWidth;
      const clampedWidth = Math.max(minWidth, Math.min(maxWidth, currentWidth));
      
      // 상태 업데이트 및 현재 탭에 너비 저장
      setStoreWidth(clampedWidth);
      setTabWidth(selectedTabId, clampedWidth);
    }
    
    // 로컬 상태와 글로벌 상태 모두 업데이트
    setLocalResizing(false);
    setIsResizing(false);
    
    // 디바운스 타임아웃 정리
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
      resizeTimeoutRef.current = null;
    }
  };

  const toggleSidebar = () => {
    setStoreIsOpen(!storeIsOpen);
  };

  // 리사이징 이벤트 리스너 관리 - 로컬 상태 기반
  useEffect(() => {
    if (localResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      // 텍스트 선택 방지
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.userSelect = '';
    }
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = '';
    };
  }, [localResizing]); // 로컬 상태를 의존성으로 사용

  const renderTreeMenu = () => {
    switch (selectedTabId) {
      case "campaign":
        return <TreeMenusForCampaigns />;
      case "agent":
        return <TreeMenusForAgentTab />;
      case "campaign-group":
        return <TreeMenusForCampaignGroupTab />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-full bg-white border-r relative">
      <div
        ref={sidebarRef}
        className="flex flex-col transition-all duration-300 ease-in-out relative"
        style={{
          width: storeIsOpen ? `${storeWidth}px` : '0',
        }}
      >
        {/* Main Content Area */}
        <div className="flex-1 relative flex flex-col min-h-0">
          <div className={`absolute inset-0 flex flex-col transition-all duration-300 ease-in-out
                        ${!storeIsOpen ? 'invisible' : ''}`}>
            {/* 상단 헤더 */}
            <div className="flex-none flex items-center justify-between py-1.5 px-[20px] border-b">
              <div className="flex items-center gap-2">
                <div className="text-sm text-[#444] font-medium flex gap-2 items-center">
                  <div>
                    {selectedTabId && (
                      <Image
                        src={baseTabs.find((tab) => tab.id === selectedTabId)?.icon || "/tree-menu/campaign_icon_for_sidemenu.png"}
                        alt={baseTabs.find((tab) => tab.id === selectedTabId)?.label || "탭아이콘"}
                        width={baseTabs.find((tab) => tab.id === selectedTabId)?.iconWidth || 13}
                        height={baseTabs.find((tab) => tab.id === selectedTabId)?.iconHeight || 13}
                      />
                    )}
                  </div>
                  {baseTabs.find((tab) => tab.id === selectedTabId)?.label}
                </div>
              </div>
              <div className="flex items-center justify-end ">
                <TabActions tabId={selectedTabId} />
              </div>
            </div>

            {/* 트리메뉴 영역 - 스크롤 가능한 컨테이너 */}
            <div className="flex-1 min-h-0 relative">
              <div id="tree-menu-container" className="absolute inset-0 overflow-y-auto">
                {renderTreeMenu()}
              </div>
            </div>
          </div>
        </div>

        {/* 하단 탭 메뉴 */}
        <div className={`flex-none transition-all duration-300 ease-in-out 
                      ${!storeIsOpen ? 'scale-x-[0.125] origin-left' : ''}`}>
          <BottomTabsForSideMenu
            selectedTabId={selectedTabId}
            onTabChange={setSelectedTabId}
          />
        </div>
      </div>

      {/* 토글 버튼 */}
      <SidebarToggleButton isOpen={storeIsOpen} onClick={toggleSidebar} />

      {/* 리사이즈 핸들 */}
      {storeIsOpen && (
        <div
          className="w-[1px] cursor-col-resize bg-[#FBFBFB] hover:bg-[#5BC2C1] active:bg-[#5BC2C1] group_col"
          onMouseDown={handleResizeStart}
        />
      )}
    </div>
  );
}