import { create } from 'zustand';

export interface TabItem {
  id: number;
  title: string;
  icon: string;
  href: string;
  content: React.ReactNode;
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

export interface TabLayoutStore {
  openedTabs: TabItem[];
  activeTabId: number | null;
  sections: TabSection[];
  tabGroups: TabGroup[];
  
  addTab: (tab: TabItem) => void;
  removeTab: (tabId: number) => void;
  setActiveTab: (tabId: number) => void;
  addSection: (tabId?: number) => void;
  moveTabToSection: (tabId: number, sectionId: string) => void;
  updateSectionWidth: (sectionId: string, width: number) => void;
  removeSection: (sectionId: string) => void;
  addTabGroup: (tabId: number) => void;
  removeTabGroup: (groupId: string) => void;
  moveTabToGroup: (tabId: number, groupId: string) => void;
  duplicateTab: (tabId: number) => void;  // 새로 추가

}

const generateUniqueId = (prefix: string, existingIds: string[]) => {
  let counter = 1;
  let newId = `${prefix}-${counter}`;
  
  while (existingIds.includes(newId)) {
    counter++;
    newId = `${prefix}-${counter}`;
  }
  
  return newId;
};

const adjustSectionWidths = (sections: TabSection[]) => {
  const newWidth = 100 / sections.length;
  return sections.map(section => ({
    ...section,
    width: newWidth
  }));
};

export const useTabStore = create<TabLayoutStore>((set) => ({
  openedTabs: [],
  activeTabId: null,
  sections: [{ id: 'default', tabs: [], width: 100 }],
  tabGroups: [],

  addTab: (tab) => set((state) => {
    if (state.openedTabs.some(t => t.id === tab.id)) {
      return { activeTabId: tab.id };
    }
    
    const updatedSections = state.sections.map(section => 
      section.id === 'default' 
        ? { ...section, tabs: [...section.tabs, tab] }
        : section
    );

    return {
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

    let updatedSections = state.sections.map(section => ({
      ...section,
      tabs: section.tabs.filter(tab => tab.id !== tabId)
    })).filter(section => 
      section.id === 'default' || section.tabs.length > 0
    );

    // Readjust widths if sections changed
    if (updatedSections.length !== state.sections.length) {
      updatedSections = adjustSectionWidths(updatedSections);
    }

    const updatedGroups = state.tabGroups
      .map(group => ({
        ...group,
        tabs: group.tabs.filter(tab => tab.id !== tabId)
      }))
      .filter(group => group.tabs.length > 0);

    return {
      openedTabs: newTabs,
      activeTabId: newActiveTabId,
      sections: updatedSections,
      tabGroups: updatedGroups
    };
  }),

  setActiveTab: (tabId) => set({
    activeTabId: tabId
  }),

  addSection: (tabId) => set((state) => {
    const existingIds = state.sections.map(s => s.id);
    const newSectionId = generateUniqueId('section', existingIds);

    const updatedSections = state.sections.map(section => ({
      ...section,
      tabs: tabId ? section.tabs.filter(t => t.id !== tabId) : section.tabs
    })).filter(section => 
      section.id === 'default' || section.tabs.length > 0
    );

    const tab = tabId ? state.openedTabs.find(t => t.id === tabId) : null;
    const newSection = {
      id: newSectionId,
      tabs: tab ? [tab] : [],
      width: 0 // temporary width
    };

    const finalSections = adjustSectionWidths([...updatedSections, newSection]);

    return {
      sections: finalSections
    };
  }),

  moveTabToSection: (tabId, targetSectionId) => set((state) => {
    const tab = state.openedTabs.find(t => t.id === tabId);
    if (!tab) return state;

    // 현재 탭이 있는 섹션 찾기
    const currentSection = state.sections.find(section => 
      section.tabs.some(t => t.id === tabId)
    );

    // 같은 섹션으로의 이동이면 무시
    if (currentSection?.id === targetSectionId) {
      return state;
    }

    // 탭이 1개이고 섹션이 하나뿐일 때는 이동하지 않음
    if (state.sections.length === 1 && state.openedTabs.length === 1) {
      return state;
    }

    let updatedSections = state.sections.map(section => ({
      ...section,
      tabs: section.id === targetSectionId
        ? [...section.tabs, tab]
        : section.tabs.filter(t => t.id !== tabId)
    })).filter(section => 
      section.id === 'default' || section.tabs.length > 0
    );

    if (updatedSections.length !== state.sections.length) {
      updatedSections = adjustSectionWidths(updatedSections);
    }

    const updatedGroups = state.tabGroups
      .map(group => ({
        ...group,
        tabs: group.tabs.filter(t => t.id !== tabId)
      }))
      .filter(group => group.tabs.length > 0);

    return {
      ...state,
      sections: updatedSections,
      tabGroups: updatedGroups
    };
  }),

  updateSectionWidth: (sectionId, width) => set((state) => ({
    sections: state.sections.map(section =>
      section.id === sectionId ? { ...section, width } : section
    )
  })),

  removeSection: (sectionId) => set((state) => {
    if (state.sections.length <= 1) return state;
    
    const removedSection = state.sections.find(s => s.id === sectionId);
    if (!removedSection) return state;

    let updatedSections = state.sections
      .filter(s => s.id !== sectionId)
      .map(section => 
        section.id === 'default'
          ? { ...section, tabs: [...section.tabs, ...removedSection.tabs] }
          : section
      );

    updatedSections = adjustSectionWidths(updatedSections);

    return { sections: updatedSections };
  }),

  addTabGroup: (tabId) => set((state) => {
    const tab = state.openedTabs.find(t => t.id === tabId);
    if (!tab) return state;

    let updatedSections = state.sections.map(section => ({
      ...section,
      tabs: section.tabs.filter(t => t.id !== tabId)
    })).filter(section => 
      section.id === 'default' || section.tabs.length > 0
    );

    if (updatedSections.length !== state.sections.length) {
      updatedSections = adjustSectionWidths(updatedSections);
    }

    const existingIds = state.tabGroups.map(g => g.id);
    const newGroupId = generateUniqueId('group', existingIds);
    const newGroup = {
      id: newGroupId,
      tabs: [tab],
      position: { x: 0, y: 0 }
    };

    return {
      sections: updatedSections,
      tabGroups: [...state.tabGroups, newGroup]
    };
  }),

  removeTabGroup: (groupId) => set((state) => {
    const group = state.tabGroups.find(g => g.id === groupId);
    if (!group) return state;

    let updatedSections = state.sections.map(section => 
      section.id === 'default'
        ? { ...section, tabs: [...section.tabs, ...group.tabs] }
        : section
    );

    if (updatedSections.length !== state.sections.length) {
      updatedSections = adjustSectionWidths(updatedSections);
    }

    return {
      sections: updatedSections,
      tabGroups: state.tabGroups.filter(g => g.id !== groupId)
    };
  }),

  moveTabToGroup: (tabId, groupId) => set((state) => {
    const tab = state.openedTabs.find(t => t.id === tabId);
    if (!tab) return state;

    let updatedSections = state.sections.map(section => ({
      ...section,
      tabs: section.tabs.filter(t => t.id !== tabId)
    })).filter(section => 
      section.id === 'default' || section.tabs.length > 0
    );

    if (updatedSections.length !== state.sections.length) {
      updatedSections = adjustSectionWidths(updatedSections);
    }

    const updatedGroups = state.tabGroups.map(group => {
      if (group.id === groupId) {
        return { ...group, tabs: [...group.tabs, tab] };
      }
      return {
        ...group,
        tabs: group.tabs.filter(t => t.id !== tabId)
      };
    });

    return {
      ...state,
      sections: updatedSections,
      tabGroups: updatedGroups
    };
  }),

  duplicateTab: (tabId: number) => set((state) => {
    const originalTab = state.openedTabs.find(t => t.id === tabId);
    if (!originalTab) return state;

    // 새로운 고유 ID 생성 (기존 ID에 timestamp를 추가하여 고유성 보장)
    const newTabId = Date.now();
    const duplicatedTab = {
      ...originalTab,
      id: newTabId
    };

    // 섹션에서 원본 탭의 위치 찾기
    const targetSection = state.sections.find(section => 
      section.tabs.some(tab => tab.id === tabId)
    );

    if (!targetSection) return state;

    // 해당 섹션에 복제된 탭 추가
    const updatedSections = state.sections.map(section => {
      if (section.id === targetSection.id) {
        const originalTabIndex = section.tabs.findIndex(tab => tab.id === tabId);
        const newTabs = [...section.tabs];
        newTabs.splice(originalTabIndex + 1, 0, duplicatedTab); // 원본 탭 바로 뒤에 삽입
        return {
          ...section,
          tabs: newTabs
        };
      }
      return section;
    });

    return {
      openedTabs: [...state.openedTabs, duplicatedTab],
      sections: updatedSections,
      activeTabId: newTabId // 새로 생성된 탭을 활성화
    };
  }),

}));