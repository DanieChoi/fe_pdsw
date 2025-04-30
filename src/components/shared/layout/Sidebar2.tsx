// "use client";

// import { useState, useEffect, useRef } from "react";
// import { baseTabs, TabId } from "@/features/campaignManager/components/data/baseTabs";
// import { TreeMenusForCampaigns } from "@/features/campaignManager/components/treeMenus/TreeMenusForCampaigns";
// import { TreeMenusForAgentTab } from "@/features/campaignManager/components/treeMenus/TreeMenusForAgentTab";
// import { TreeMenusForCampaignGroupTab } from "@/features/campaignManager/components/treeMenus/TreeMenusForCampaignGroupTab";
// import { TabActions } from "./comp/TabActions";
// import { BottomTabsForSideMenu } from "./BottomTabsForSideMenu";
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useSidebarWidthStore } from "@/store/useSidebarWidthStore";

// interface SidebarToggleButtonProps {
//   isOpen: boolean;
//   onClick: () => void;
// }

// function SidebarToggleButton({ isOpen, onClick }: SidebarToggleButtonProps) {
//   return (
//     <button
//       onClick={onClick}
//       className="sidebar-button
//                 transition-all duration-300 ease-in-out z-30"
//     >
//       {isOpen ? (
//         <ChevronLeft className="w-3 h-3 text-gray-600" />
//       ) : (
//         <ChevronRight className="w-3 h-3 text-gray-600" />
//       )}
//     </button>
//   );
// }

// export default function SidebarContainer() {
//   const storeWidth = useSidebarWidthStore(state => state.width);
//   const storeIsOpen = useSidebarWidthStore(state => state.isOpen);
//   const minWidth = useSidebarWidthStore(state => state.minWidth);
//   const maxWidth = useSidebarWidthStore(state => state.maxWidth);
//   const isResizing = useSidebarWidthStore(state => state.isResizing);
//   const setStoreWidth = useSidebarWidthStore(state => state.setWidth);
//   const setStoreIsOpen = useSidebarWidthStore(state => state.setIsOpen);
//   const setTabWidth = useSidebarWidthStore(state => state.setTabWidth);
//   const setCurrentTabId = useSidebarWidthStore(state => state.setCurrentTabId);
//   const setIsResizing = useSidebarWidthStore(state => state.setIsResizing);

//   const [selectedTabId, setSelectedTabId] = useState<TabId>("campaign");

//   // 로컬 리사이징 상태 추가 (이중 안전장치)
//   const [localResizing, setLocalResizing] = useState(false);

//   // 성능 최적화를 위한 refs
//   const sidebarRef = useRef<HTMLDivElement>(null);
//   const lastWidthRef = useRef(storeWidth);
//   const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

//   // 선택된 탭 변경 시 Store 업데이트
//   useEffect(() => {
//     setCurrentTabId(selectedTabId);
//   }, [selectedTabId, setCurrentTabId]);

//   const handleResizeStart = (e: React.MouseEvent) => {
//     e.preventDefault();

//     // 트랜지션 효과 일시 중지 (렉 감소)
//     if (sidebarRef.current) {
//       sidebarRef.current.style.transition = 'none';
//     }

//     // 로컬 상태와 글로벌 상태 모두 업데이트
//     setLocalResizing(true);
//     setIsResizing(true);
//     lastWidthRef.current = storeWidth;
//   };

//   const handleMouseMove = (e: MouseEvent) => {
//     // 로컬 상태로 리사이징 여부 확인
//     if (!localResizing) return;

//     // DOM 직접 조작 (상태 업데이트 없이)
//     const newWidth = e.clientX;
//     const clampedWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));

//     if (sidebarRef.current) {
//       sidebarRef.current.style.width = `${clampedWidth}px`;
//     }

//     // 디바운싱: 마우스 이동 중 실시간 상태 업데이트 제한
//     if (resizeTimeoutRef.current) {
//       clearTimeout(resizeTimeoutRef.current);
//     }

//     resizeTimeoutRef.current = setTimeout(() => {
//       setStoreWidth(clampedWidth);
//     }, 10); // 최소 상태 업데이트 간격
//   };

//   const handleMouseUp = () => {
//     // 로컬 상태로 리사이징 여부 확인
//     if (!localResizing) return;

//     // 트랜지션 효과 복원
//     if (sidebarRef.current) {
//       sidebarRef.current.style.transition = '';

//       // 마지막 너비 계산
//       const currentWidth = parseInt(sidebarRef.current.style.width, 10) || storeWidth;
//       const clampedWidth = Math.max(minWidth, Math.min(maxWidth, currentWidth));

//       // 상태 업데이트 및 현재 탭에 너비 저장
//       setStoreWidth(clampedWidth);
//       setTabWidth(selectedTabId, clampedWidth);
//     }

//     // 로컬 상태와 글로벌 상태 모두 업데이트
//     setLocalResizing(false);
//     setIsResizing(false);

//     // 디바운스 타임아웃 정리
//     if (resizeTimeoutRef.current) {
//       clearTimeout(resizeTimeoutRef.current);
//       resizeTimeoutRef.current = null;
//     }
//   };

//   const toggleSidebar = () => {
//     setStoreIsOpen(!storeIsOpen);
//   };

//   // 리사이징 이벤트 리스너 관리 - 로컬 상태 기반
//   useEffect(() => {
//     if (localResizing) {
//       window.addEventListener("mousemove", handleMouseMove);
//       window.addEventListener("mouseup", handleMouseUp);
//       // 텍스트 선택 방지
//       document.body.style.userSelect = 'none';
//     } else {
//       document.body.style.userSelect = '';
//     }

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//       document.body.style.userSelect = '';
//     };
//   }, [localResizing]); // 로컬 상태를 의존성으로 사용

//   const renderTreeMenu = () => {
//     switch (selectedTabId) {
//       case "campaign":
//         return <TreeMenusForCampaigns />;
//       case "agent":
//         return <TreeMenusForAgentTab />;
//       case "campaign-group":
//         return <TreeMenusForCampaignGroupTab />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex h-full bg-white border-r relative">
//       <div
//         ref={sidebarRef}
//         className="flex flex-col transition-all duration-300 ease-in-out relative"
//         style={{
//           width: storeIsOpen ? `${storeWidth}px` : '0',
//         }}
//       >
//         {/* Main Content Area */}
//         <div className="flex-1 relative flex flex-col min-h-0">
//           <div className={`absolute inset-0 flex flex-col transition-all duration-300 ease-in-out
//               ${!storeIsOpen ? 'invisible' : ''}`}>
//             {/* 상단 헤더 */}
//             <div className="flex-none flex items-center justify-between py-1.5 px-[20px] border-b">
//               <div className="flex items-center gap-2">
//                 <div className="text-sm text-[#444] font-medium flex gap-2 items-center">
//                   <div>
//                     {selectedTabId && (
//                       <Image
//                         src={baseTabs.find((tab) => tab.id === selectedTabId)?.icon || "/tree-menu/campaign_icon_for_sidemenu.png"}
//                         alt={baseTabs.find((tab) => tab.id === selectedTabId)?.label || "탭아이콘"}
//                         width={baseTabs.find((tab) => tab.id === selectedTabId)?.iconWidth || 13}
//                         height={baseTabs.find((tab) => tab.id === selectedTabId)?.iconHeight || 13}
//                       />
//                     )}
//                   </div>
//                   {baseTabs.find((tab) => tab.id === selectedTabId)?.label}
//                 </div>
//               </div>
//               <div className="flex items-center justify-end ">
//                 <TabActions tabId={selectedTabId} />
//               </div>
//             </div>

//             {/* 트리메뉴 영역 - 스크롤 가능한 컨테이너 */}
//             <div className="flex-1 min-h-0 relative">
//               <div id="tree-menu-container" className="absolute inset-0 overflow-y-auto">
//                 {renderTreeMenu()}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* 하단 탭 메뉴 */}
//         <div className={`flex-none transition-all duration-300 ease-in-out 
//                       ${!storeIsOpen ? 'scale-x-[0.125] origin-left' : ''}`}>
//           <BottomTabsForSideMenu
//             selectedTabId={selectedTabId}
//             onTabChange={setSelectedTabId}
//           />
//         </div>
//       </div>

//       {/* 토글 버튼 */}
//       <SidebarToggleButton isOpen={storeIsOpen} onClick={toggleSidebar} />

//       {/* 리사이즈 핸들 */}
//       {storeIsOpen && (
//         <div
//           className="w-[1px] cursor-col-resize bg-[#FBFBFB] hover:bg-[#5BC2C1] active:bg-[#5BC2C1] group_col"
//           onMouseDown={handleResizeStart}
//         />
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef, useCallback, memo, useMemo } from "react";
import { baseTabs, TabId } from "@/features/campaignManager/components/data/baseTabs";
import { TreeMenusForCampaigns } from "@/features/campaignManager/components/treeMenus/TreeMenusForCampaigns";
import { TreeMenusForAgentTab } from "@/features/campaignManager/components/treeMenus/TreeMenusForAgentTab";
import { TreeMenusForCampaignGroupTab } from "@/features/campaignManager/components/treeMenus/TreeMenusForCampaignGroupTab";
import { TabActions } from "./comp/TabActions";
import { BottomTabsForSideMenu } from "./BottomTabsForSideMenu";
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSidebarWidthStore } from "@/store/useSidebarWidthStore";

// Memoize the toggle button
interface SidebarToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const SidebarToggleButton = memo(({ isOpen, onClick }: SidebarToggleButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="sidebar-button transition-all duration-300 ease-in-out z-30"
    >
      {isOpen ? (
        <ChevronLeft className="w-3 h-3 text-gray-600" />
      ) : (
        <ChevronRight className="w-3 h-3 text-gray-600" />
      )}
    </button>
  );
});
SidebarToggleButton.displayName = 'SidebarToggleButton';

// Create a specialized selector for tab info to avoid repeated lookups
const getTabInfo = (tabId: TabId) => {
  const tab = baseTabs.find((tab) => tab.id === tabId);
  return {
    icon: tab?.icon || "/tree-menu/campaign_icon_for_sidemenu.png",
    label: tab?.label || "탭아이콘",
    iconWidth: tab?.iconWidth || 13,
    iconHeight: tab?.iconHeight || 13
  };
};

// Define props interface for TabHeader
interface TabHeaderProps {
  tabId: TabId;
}

// Memoize the tab header
const TabHeader = memo(({ tabId }: TabHeaderProps) => {
  // Use memoized tab info
  const tabInfo = useMemo(() => getTabInfo(tabId), [tabId]);
  
  return (
    <div className="flex items-center gap-2">
      <div className="text-sm text-[#444] font-medium flex gap-2 items-center">
        <div>
          {tabId && (
            <Image
              src={tabInfo.icon}
              alt={tabInfo.label}
              width={tabInfo.iconWidth}
              height={tabInfo.iconHeight}
            />
          )}
        </div>
        {tabInfo.label}
      </div>
    </div>
  );
});
TabHeader.displayName = 'TabHeader';

// Create individual tree menu components - this prevents re-renders
// of other tree menus when only one tab is active
const CampaignTreeMenus = memo(() => <TreeMenusForCampaigns />);
CampaignTreeMenus.displayName = 'CampaignTreeMenus';

const AgentTreeMenus = memo(() => <TreeMenusForAgentTab />);
AgentTreeMenus.displayName = 'AgentTreeMenus';

const CampaignGroupTreeMenus = memo(() => <TreeMenusForCampaignGroupTab />);
CampaignGroupTreeMenus.displayName = 'CampaignGroupTreeMenus';

// Define props interface for TreeContent
interface TreeContentProps {
  selectedTabId: TabId;
}

// Tree content component that only re-renders when selectedTabId changes
const TreeContent = memo(({ selectedTabId }: TreeContentProps) => {
  // Use a switch statement directly in the render, not a function call
  // Each case returns a memoized component
  let MenuComponent;
  switch (selectedTabId) {
    case "campaign":
      MenuComponent = CampaignTreeMenus;
      break;
    case "agent":
      MenuComponent = AgentTreeMenus;
      break;
    case "campaign-group":
      MenuComponent = CampaignGroupTreeMenus;
      break;
    default:
      return null;
  }
  
  return <MenuComponent />;
});
TreeContent.displayName = 'TreeContent';

// Define props interface for HeaderActions
interface HeaderActionsProps {
  tabId: TabId;
}

// Memoize the header actions
const HeaderActions = memo(({ tabId }: HeaderActionsProps) => {
  return (
    <div className="flex items-center justify-end">
      <TabActions tabId={tabId} />
    </div>
  );
});
HeaderActions.displayName = 'HeaderActions';

// Define props interface for TreeContentWrapper
interface TreeContentWrapperProps {
  selectedTabId: TabId;
  isOpen: boolean;
}

// Memoize the tree content wrapper
const TreeContentWrapper = memo(({ selectedTabId, isOpen }: TreeContentWrapperProps) => {
  return (
    <div className={`absolute inset-0 flex flex-col transition-all duration-300 ease-in-out ${!isOpen ? 'invisible' : ''}`}>
      {/* 상단 헤더 */}
      <div className="flex-none flex items-center justify-between py-1.5 px-[20px] border-b">
        <TabHeader tabId={selectedTabId} />
        <HeaderActions tabId={selectedTabId} />
      </div>

      {/* 트리메뉴 영역 - 스크롤 가능한 컨테이너 */}
      <div className="flex-1 min-h-0 relative">
        <div id="tree-menu-container" className="absolute inset-0 overflow-y-auto">
          <TreeContent selectedTabId={selectedTabId} />
        </div>
      </div>
    </div>
  );
});
TreeContentWrapper.displayName = 'TreeContentWrapper';

// Create a custom hook to manage resize functionality
function useResizeHandlers(
  sidebarRef: React.RefObject<HTMLDivElement | null>,
  setLocalResizing: React.Dispatch<React.SetStateAction<boolean>>,
  setIsResizing: (isResizing: boolean) => void,
  storeWidth: number,
  minWidth: number,
  maxWidth: number,
  setStoreWidth: (width: number) => void,
  setTabWidth: (tabId: TabId, width: number) => void,
  selectedTabId: TabId
): { handleResizeStart: (e: React.MouseEvent) => void; handleMouseMove: (e: MouseEvent) => void; handleMouseUp: () => void } {
  const lastWidthRef = useRef(storeWidth);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleResizeStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();

    // 트랜지션 효과 일시 중지 (렉 감소)
    if (sidebarRef.current) {
      sidebarRef.current.style.transition = 'none';
    }

    // 로컬 상태와 글로벌 상태 모두 업데이트
    setLocalResizing(true);
    setIsResizing(true);
    lastWidthRef.current = storeWidth;
  }, [sidebarRef, setLocalResizing, setIsResizing, storeWidth]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
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
  }, [sidebarRef, minWidth, maxWidth, setStoreWidth]);

  const handleMouseUp = useCallback(() => {
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
  }, [sidebarRef, storeWidth, minWidth, maxWidth, setStoreWidth, setTabWidth, selectedTabId, setLocalResizing, setIsResizing]);

  return { handleResizeStart, handleMouseMove, handleMouseUp };
}

// Define props interface for BottomTabs
interface BottomTabsProps {
  selectedTabId: TabId;
  onTabChange: (tabId: TabId) => void;
  isOpen: boolean;
}

// Memoize the bottom tabs component
const BottomTabs = memo(({ selectedTabId, onTabChange, isOpen }: BottomTabsProps) => (
  <div className={`flex-none transition-all duration-300 ease-in-out ${!isOpen ? 'scale-x-[0.125] origin-left' : ''}`}>
    <BottomTabsForSideMenu
      selectedTabId={selectedTabId}
      onTabChange={onTabChange}
    />
  </div>
));
BottomTabs.displayName = 'BottomTabs';

// Create a shallow selector for store values
const useSidebarStore = () => {
  const storeWidth = useSidebarWidthStore(state => state.width);
  const storeIsOpen = useSidebarWidthStore(state => state.isOpen);
  const minWidth = useSidebarWidthStore(state => state.minWidth);
  const maxWidth = useSidebarWidthStore(state => state.maxWidth);
  const setStoreWidth = useSidebarWidthStore(state => state.setWidth);
  const setStoreIsOpen = useSidebarWidthStore(state => state.setIsOpen);
  const setTabWidth = useSidebarWidthStore(state => state.setTabWidth);
  const setCurrentTabId = useSidebarWidthStore(state => state.setCurrentTabId);
  const setIsResizing = useSidebarWidthStore(state => state.setIsResizing);

  return {
    storeWidth,
    storeIsOpen,
    minWidth,
    maxWidth,
    setStoreWidth,
    setStoreIsOpen,
    setTabWidth,
    setCurrentTabId,
    setIsResizing
  };
};

// Create a resize handle component
interface ResizeHandleProps {
  onMouseDown: (e: React.MouseEvent) => void;
}

const ResizeHandle = memo(({ onMouseDown }: ResizeHandleProps) => (
  <div
    className="w-[1px] cursor-col-resize bg-[#FBFBFB] hover:bg-[#5BC2C1] active:bg-[#5BC2C1] group_col"
    onMouseDown={onMouseDown}
  />
));
ResizeHandle.displayName = 'ResizeHandle';

// Main component with heavy memoization
function SidebarContainer() {
  // We're using a single custom hook to get all state from the store
  const {
    storeWidth,
    storeIsOpen,
    minWidth,
    maxWidth,
    setStoreWidth,
    setStoreIsOpen,
    setTabWidth,
    setCurrentTabId,
    setIsResizing
  } = useSidebarStore();

  const [selectedTabId, setSelectedTabId] = useState<TabId>("campaign");
  const [localResizing, setLocalResizing] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // Update selected tab in store
  useEffect(() => {
    setCurrentTabId(selectedTabId);
  }, [selectedTabId, setCurrentTabId]);

  // Get resize handlers from custom hook
  const { handleResizeStart, handleMouseMove, handleMouseUp } = useResizeHandlers(
    sidebarRef,
    setLocalResizing,
    setIsResizing,
    storeWidth,
    minWidth,
    maxWidth,
    setStoreWidth,
    setTabWidth,
    selectedTabId
  );

  // Memoized tab change handler
  const handleTabChange = useCallback((tabId: TabId) => {
    setSelectedTabId(tabId);
  }, []);

  // Memoized sidebar toggle handler
  const toggleSidebar = useCallback(() => {
    setStoreIsOpen(!storeIsOpen);
  }, [storeIsOpen, setStoreIsOpen]);

  // Set up event listeners based on localResizing state
  useEffect(() => {
    if (localResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.userSelect = '';
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = '';
    };
  }, [localResizing, handleMouseMove, handleMouseUp]);

  // Memoize the width style to prevent re-renders
  const sidebarStyle = useMemo(() => ({
    width: storeIsOpen ? `${storeWidth}px` : '0',
  }), [storeIsOpen, storeWidth]);

  return (
    <div className="flex h-full bg-white border-r relative">
      <div
        ref={sidebarRef}
        className="flex flex-col transition-all duration-300 ease-in-out relative"
        style={sidebarStyle}
      >
        {/* Main Content Area */}
        <div className="flex-1 relative flex flex-col min-h-0">
          <TreeContentWrapper selectedTabId={selectedTabId} isOpen={storeIsOpen} />
        </div>

        {/* 하단 탭 메뉴 */}
        <BottomTabs 
          selectedTabId={selectedTabId} 
          onTabChange={handleTabChange} 
          isOpen={storeIsOpen}
        />
      </div>

      {/* 토글 버튼 */}
      <SidebarToggleButton isOpen={storeIsOpen} onClick={toggleSidebar} />

      {/* 리사이즈 핸들 */}
      {storeIsOpen && <ResizeHandle onMouseDown={handleResizeStart} />}
    </div>
  );
}

export default memo(SidebarContainer);