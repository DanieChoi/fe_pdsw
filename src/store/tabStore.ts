// src/store/tabStore.ts
import { create } from 'zustand';

export interface TabItem {
  id: number;
  title: string;
  icon: string;
  href: string;
}

export interface TabSection {
  id: string;
  tabs: TabItem[];
  width: number;
}

export interface TabGroup {
  id: string;
  tabs: TabItem[];
  position: { x: number; y: number };
}

interface TabLayoutStore {
  openedTabs: TabItem[];
  activeTabId: number | null;
  sections: TabSection[];
  tabGroups: TabGroup[];
  
  addTab: (tab: TabItem) => void;
  removeTab: (tabId: number) => void;
  setActiveTab: (tabId: number) => void;
  addSection: () => void;
  moveTabToSection: (tabId: number, sectionId: string) => void;
  updateSectionWidth: (sectionId: string, width: number) => void;
  removeSection: (sectionId: string) => void;
  addTabGroup: (tabId: number) => void;
  removeTabGroup: (groupId: string) => void;
  moveTabToGroup: (tabId: number, groupId: string) => void;
}

export const useTabStore = create<TabLayoutStore>((set) => ({
  openedTabs: [],
  activeTabId: null,
  sections: [{ id: 'default', tabs: [], width: 100 }],
  tabGroups: [],

  addTab: (tab) => set((state) => {
    // 이미 열린 탭이 있는지 확인
    const existingTab = state.openedTabs.find(t => t.id === tab.id);
    
    if (existingTab) {
      // 이미 열린 탭이면 활성화만 수행
      return { ...state, activeTabId: tab.id };
    }

    // 새 탭 추가
    const updatedSections = state.sections.map(section => ({
      ...section,
      tabs: section.id === 'default' 
        ? [...section.tabs, tab]
        : section.tabs
    }));

    return {
      ...state,
      openedTabs: [...state.openedTabs, tab],
      activeTabId: tab.id,
      sections: updatedSections
    };
  }),

  removeTab: (tabId) => set((state) => {
    const newTabs = state.openedTabs.filter(tab => tab.id !== tabId);
    let newActiveTabId = state.activeTabId;

    if (state.activeTabId === tabId) {
      const index = state.openedTabs.findIndex(tab => tab.id === tabId);
      newActiveTabId = newTabs[index] ? newTabs[index].id : 
                      (newTabs[index - 1] ? newTabs[index - 1].id : null);
    }

    const updatedSections = state.sections.map(section => ({
      ...section,
      tabs: section.tabs.filter(tab => tab.id !== tabId)
    }));

    const updatedGroups = state.tabGroups.map(group => ({
      ...group,
      tabs: group.tabs.filter(tab => tab.id !== tabId)
    })).filter(group => group.tabs.length > 0);

    return {
      ...state,
      openedTabs: newTabs,
      activeTabId: newActiveTabId,
      sections: updatedSections,
      tabGroups: updatedGroups
    };
  }),

  setActiveTab: (tabId) => set(state => ({
    ...state,
    activeTabId: tabId
  })),

  moveTabToSection: (tabId, targetSectionId) => set((state) => {
    const tab = state.openedTabs.find(t => t.id === tabId);
    if (!tab) return state;

    // 현재 탭이 이미 해당 섹션에 있는지 확인
    const isTabInTargetSection = state.sections.find(
      section => section.id === targetSectionId
    )?.tabs.some(t => t.id === tabId);

    // 이미 해당 섹션에 있다면 상태 변경하지 않음
    if (isTabInTargetSection) {
      return state;
    }

    const updatedSections = state.sections.map(section => ({
      ...section,
      tabs: section.id === targetSectionId
        ? [...section.tabs, tab]
        : section.tabs.filter(t => t.id !== tabId)
    }));

    const updatedGroups = state.tabGroups.map(group => ({
      ...group,
      tabs: group.tabs.filter(t => t.id !== tabId)
    })).filter(group => group.tabs.length > 0);

    return {
      ...state,
      sections: updatedSections,
      tabGroups: updatedGroups
    };
  }),

  addSection: () => set((state) => {
    const newSectionId = `section-${state.sections.length + 1}`;
    const newWidth = 100 / (state.sections.length + 1);
    
    const updatedSections = state.sections.map(section => ({
      ...section,
      width: newWidth
    }));

    return {
      ...state,
      sections: [...updatedSections, { id: newSectionId, tabs: [], width: newWidth }]
    };
  }),

  updateSectionWidth: (sectionId, width) => set((state) => ({
    ...state,
    sections: state.sections.map(section =>
      section.id === sectionId ? { ...section, width } : section
    )
  })),

  removeSection: (sectionId) => set((state) => {
    if (state.sections.length <= 1) return state;
    
    const removedSection = state.sections.find(s => s.id === sectionId);
    if (!removedSection) return state;

    const updatedSections = state.sections
      .filter(s => s.id !== sectionId)
      .map(section => 
        section.id === 'default'
          ? { ...section, tabs: [...section.tabs, ...removedSection.tabs] }
          : section
      );

    const newWidth = 100 / updatedSections.length;
    updatedSections.forEach(section => section.width = newWidth);

    return { 
      ...state,
      sections: updatedSections 
    };
  }),

  addTabGroup: (tabId) => set((state) => {
    const tab = state.openedTabs.find(t => t.id === tabId);
    if (!tab) return state;

    const newGroupId = `group-${state.tabGroups.length + 1}`;
    const newGroup = {
      id: newGroupId,
      tabs: [tab],
      position: { x: 0, y: 0 }
    };

    const updatedSections = state.sections.map(section => ({
      ...section,
      tabs: section.tabs.filter(t => t.id !== tabId)
    }));

    return {
      ...state,
      sections: updatedSections,
      tabGroups: [...state.tabGroups, newGroup]
    };
  }),

  removeTabGroup: (groupId) => set((state) => {
    const group = state.tabGroups.find(g => g.id === groupId);
    if (!group) return state;

    const updatedSections = state.sections.map(section => 
      section.id === 'default'
        ? { ...section, tabs: [...section.tabs, ...group.tabs] }
        : section
    );

    return {
      ...state,
      sections: updatedSections,
      tabGroups: state.tabGroups.filter(g => g.id !== groupId)
    };
  }),

  moveTabToGroup: (tabId, groupId) => set((state) => {
    const tab = state.openedTabs.find(t => t.id === tabId);
    if (!tab) return state;

    // 현재 탭이 이미 해당 그룹에 있는지 확인
    const isTabInTargetGroup = state.tabGroups.find(
      group => group.id === groupId
    )?.tabs.some(t => t.id === tabId);

    // 이미 해당 그룹에 있다면 상태 변경하지 않음
    if (isTabInTargetGroup) {
      return state;
    }

    const updatedGroups = state.tabGroups.map(group => ({
      ...group,
      tabs: group.id === groupId
        ? [...group.tabs, tab]
        : group.tabs.filter(t => t.id !== tabId)
    })).filter(group => group.tabs.length > 0);

    const updatedSections = state.sections.map(section => ({
      ...section,
      tabs: section.tabs.filter(t => t.id !== tabId)
    }));

    return {
      ...state,
      sections: updatedSections,
      tabGroups: updatedGroups
    };
  })
}));