// "use client";

// import { create } from "zustand";
// import { TabId } from "@/features/campaignManager/components/data/baseTabs";

// interface SidebarWidthState {
//   // 기존 속성
//   width: number;
//   isOpen: boolean;
  
//   // 새로 추가된 속성
//   minWidth: number;
//   maxWidth: number;
//   tabWidths: Record<TabId, number>;
//   currentTabId: TabId | null;
  
//   // 기존 액션
//   setWidth: (width: number) => void;
//   setIsOpen: (isOpen: boolean) => void;
  
//   // 새로 추가된 액션
//   setMinWidth: (width: number) => void;
//   setMaxWidth: (width: number) => void;
//   setTabWidth: (tabId: TabId, width: number) => void;
//   setCurrentTabId: (tabId: TabId) => void;
//   getTabWidth: (tabId: TabId) => number;
// }

// export const useSidebarWidthStore = create<SidebarWidthState>((set, get) => ({
//   // 기존 속성
//   width: 240,
//   isOpen: true,
  
//   // 새로 추가된 속성
//   minWidth: 200,
//   maxWidth: 400,
//   currentTabId: "campaign",
//   tabWidths: {
//     "campaign": 240,   // 캠페인 탭 - 좁은 너비
//     "agent": 320,      // 상담원 탭 - 넓은 너비
//     "agent-group": 280 // 그룹 탭 - 중간 너비
//   },
  
//   // 기존 액션
//   setWidth: (width: number) => set({ width }),
//   setIsOpen: (isOpen: boolean) => set({ isOpen }),
  
//   // 새로 추가된 액션
//   setMinWidth: (minWidth: number) => set({ minWidth }),
//   setMaxWidth: (maxWidth: number) => set({ maxWidth }),
  
//   setTabWidth: (tabId: TabId, width: number) => set(state => {
//     // 최소/최대 범위 내에서 클램핑
//     const clampedWidth = Math.max(
//       state.minWidth, 
//       Math.min(state.maxWidth, width)
//     );
    
//     // 너비 변경 적용 및 현재 전역 너비도 업데이트
//     return { 
//       tabWidths: { 
//         ...state.tabWidths, 
//         [tabId]: clampedWidth 
//       },
//       width: state.currentTabId === tabId ? clampedWidth : state.width
//     };
//   }),
  
//   setCurrentTabId: (tabId: TabId) => set(state => {
//     // 현재 탭 ID 설정 및 해당 탭의 저장된 너비로 전역 너비 업데이트
//     return { 
//       currentTabId: tabId,
//       width: state.tabWidths[tabId] || state.width
//     };
//   }),
  
//   getTabWidth: (tabId: TabId) => {
//     const state = get();
//     return state.tabWidths[tabId] || state.width;
//   }
// }));

"use client";

import { create } from "zustand";
import { TabId } from "@/features/campaignManager/components/data/baseTabs";

interface SidebarWidthState {
  // 상태
  width: number;
  isOpen: boolean;
  minWidth: number;
  maxWidth: number;
  tabWidths: Record<TabId, number>;
  currentTabId: TabId | null;
  isResizing: boolean;
  
  // 액션
  setWidth: (width: number) => void;
  setIsOpen: (isOpen: boolean) => void;
  setMinWidth: (width: number) => void;
  setMaxWidth: (width: number) => void;
  setTabWidth: (tabId: TabId, width: number) => void;
  setCurrentTabId: (tabId: TabId) => void;
  getTabWidth: (tabId: TabId) => number;
  setIsResizing: (isResizing: boolean) => void;
}

export const useSidebarWidthStore = create<SidebarWidthState>((set, get) => {
  // 값 변경 여부 체크하는 헬퍼 함수 (불필요한 렌더링 방지)
  const updateIfChanged = (stateUpdater: (state: SidebarWidthState) => Partial<SidebarWidthState>) => {
    const state = get();
    const updates = stateUpdater(state);
    
    // 변경된 값이 있는지 확인 (얕은 비교)
    const hasChanges = Object.entries(updates).some(
      ([key, value]) => state[key as keyof SidebarWidthState] !== value
    );
    
    // 변경된 값이 있을 때만 상태 업데이트
    if (hasChanges) {
      set(updates);
    }
  };

  return {
    // 상태
    width: 240,
    isOpen: true,
    minWidth: 200,
    maxWidth: 400,
    currentTabId: "campaign",
    tabWidths: {
      "campaign": 240,   // 캠페인 탭 - 좁은 너비
      "agent": 320,      // 상담원 탭 - 넓은 너비
      "agent-group": 280 // 그룹 탭 - 중간 너비
    },
    isResizing: false,
    
    // 액션
    setWidth: (width: number) => updateIfChanged(state => {
      const clampedWidth = Math.max(state.minWidth, Math.min(state.maxWidth, width));
      if (state.width === clampedWidth) return {};
      return { width: clampedWidth };
    }),
    
    setIsOpen: (isOpen: boolean) => updateIfChanged(state => {
      if (state.isOpen === isOpen) return {};
      return { isOpen };
    }),
    
    setMinWidth: (minWidth: number) => updateIfChanged(state => {
      if (state.minWidth === minWidth) return {};
      return { minWidth };
    }),
    
    setMaxWidth: (maxWidth: number) => updateIfChanged(state => {
      if (state.maxWidth === maxWidth) return {};
      return { maxWidth };
    }),
    
    setIsResizing: (isResizing: boolean) => updateIfChanged(state => {
      if (state.isResizing === isResizing) return {};
      return { isResizing };
    }),
    
    setTabWidth: (tabId: TabId, width: number) => updateIfChanged(state => {
      const clampedWidth = Math.max(state.minWidth, Math.min(state.maxWidth, width));
      
      // 해당 탭의 너비가 변경되지 않았으면 업데이트 안함
      if (state.tabWidths[tabId] === clampedWidth) {
        return {};
      }
      
      const newTabWidths = { ...state.tabWidths, [tabId]: clampedWidth };
      
      // 현재 선택된 탭이면 전역 너비도 업데이트, 아니면 탭 너비만 업데이트
      if (state.currentTabId === tabId) {
        return { 
          tabWidths: newTabWidths, 
          width: clampedWidth 
        };
      } else {
        return { tabWidths: newTabWidths };
      }
    }),
    
    setCurrentTabId: (tabId: TabId) => updateIfChanged(state => {
      // 같은 탭 선택이면 변경 안함
      if (state.currentTabId === tabId) {
        return {};
      }
      
      // 해당 탭의 저장된 너비 가져오기
      const tabWidth = state.tabWidths[tabId] || state.width;
      return { 
        currentTabId: tabId,
        width: tabWidth
      };
    }),
    
    getTabWidth: (tabId: TabId) => {
      const state = get();
      const width = state.tabWidths[tabId] || state.width;
      return Math.max(state.minWidth, Math.min(state.maxWidth, width));
    }
  };
});