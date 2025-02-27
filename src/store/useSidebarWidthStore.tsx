"use client";

import { create } from "zustand";
import { TabId } from "@/features/campaignManager/components/data/baseTabs";

interface SidebarWidthState {
  // 기존 속성
  width: number;
  isOpen: boolean;
  
  // 새로 추가된 속성
  minWidth: number;
  maxWidth: number;
  tabWidths: Record<TabId, number>;
  currentTabId: TabId | null;
  
  // 기존 액션
  setWidth: (width: number) => void;
  setIsOpen: (isOpen: boolean) => void;
  
  // 새로 추가된 액션
  setMinWidth: (width: number) => void;
  setMaxWidth: (width: number) => void;
  setTabWidth: (tabId: TabId, width: number) => void;
  setCurrentTabId: (tabId: TabId) => void;
  getTabWidth: (tabId: TabId) => number;
}

export const useSidebarWidthStore = create<SidebarWidthState>((set, get) => ({
  // 기존 속성
  width: 240,
  isOpen: true,
  
  // 새로 추가된 속성
  minWidth: 200,
  maxWidth: 400,
  currentTabId: "campaign",
  tabWidths: {
    "campaign": 240,   // 캠페인 탭 - 좁은 너비
    "agent": 320,      // 상담원 탭 - 넓은 너비
    "agent-group": 280 // 그룹 탭 - 중간 너비
  },
  
  // 기존 액션
  setWidth: (width: number) => set({ width }),
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  
  // 새로 추가된 액션
  setMinWidth: (minWidth: number) => set({ minWidth }),
  setMaxWidth: (maxWidth: number) => set({ maxWidth }),
  
  setTabWidth: (tabId: TabId, width: number) => set(state => {
    // 최소/최대 범위 내에서 클램핑
    const clampedWidth = Math.max(
      state.minWidth, 
      Math.min(state.maxWidth, width)
    );
    
    // 너비 변경 적용 및 현재 전역 너비도 업데이트
    return { 
      tabWidths: { 
        ...state.tabWidths, 
        [tabId]: clampedWidth 
      },
      width: state.currentTabId === tabId ? clampedWidth : state.width
    };
  }),
  
  setCurrentTabId: (tabId: TabId) => set(state => {
    // 현재 탭 ID 설정 및 해당 탭의 저장된 너비로 전역 너비 업데이트
    return { 
      currentTabId: tabId,
      width: state.tabWidths[tabId] || state.width
    };
  }),
  
  getTabWidth: (tabId: TabId) => {
    const state = get();
    return state.tabWidths[tabId] || state.width;
  }
}));