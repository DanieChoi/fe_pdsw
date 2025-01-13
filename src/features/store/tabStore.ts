// src/stores/useTabStore.ts
import { create } from 'zustand';

interface TabItem {
  id: number;
  title: string;
  icon: string;
  href: string;
}

interface TabStore {
  openedTabs: TabItem[];
  activeTabId: number | null;
  addTab: (tab: TabItem) => void;
  removeTab: (tabId: number) => void;
  setActiveTab: (tabId: number) => void;
}

export const useTabStore = create<TabStore>((set) => ({
  openedTabs: [],
  activeTabId: null,

  addTab: (tab) => set((state) => {
    // 이미 열려있는 탭인지 확인
    if (state.openedTabs.some(t => t.id === tab.id)) {
      // 이미 존재하는 탭을 활성화
      return { activeTabId: tab.id };
    }
    
    // 새 탭 추가
    return {
      openedTabs: [...state.openedTabs, tab],
      activeTabId: tab.id
    };
  }),

  removeTab: (tabId) => set((state) => {
    const newTabs = state.openedTabs.filter(tab => tab.id !== tabId);
    let newActiveTabId = state.activeTabId;

    // 활성 탭이 삭제되는 경우, 다음 탭을 활성화
    if (state.activeTabId === tabId) {
      const index = state.openedTabs.findIndex(tab => tab.id === tabId);
      newActiveTabId = newTabs[index] ? newTabs[index].id : 
                      (newTabs[index - 1] ? newTabs[index - 1].id : null);
    }

    return {
      openedTabs: newTabs,
      activeTabId: newActiveTabId
    };
  }),

  setActiveTab: (tabId) => set({
    activeTabId: tabId
  }),
}));