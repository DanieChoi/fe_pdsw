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
}

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

    const updatedSections = state.sections.map(section => ({
      ...section,
      tabs: section.tabs.filter(tab => tab.id !== tabId)
    }));

    const updatedGroups = state.tabGroups.map(group => ({
      ...group,
      tabs: group.tabs.filter(tab => tab.id !== tabId)
    })).filter(group => group.tabs.length > 0);

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
    const newSectionId = `section-${state.sections.length + 1}`;
    const newWidth = 100 / (state.sections.length + 1);
    
    const updatedSections = state.sections.map(section => ({
      ...section,
      width: newWidth,
      // If tabId is provided, remove it from other sections
      tabs: tabId ? section.tabs.filter(t => t.id !== tabId) : section.tabs
    }));

    const tab = tabId ? state.openedTabs.find(t => t.id === tabId) : null;
    const newSection = {
      id: newSectionId,
      tabs: tab ? [tab] : [],
      width: newWidth
    };

    return {
      sections: [...updatedSections, newSection]
    };
  }),

  moveTabToSection: (tabId, targetSectionId) => set((state) => {
    const tab = state.openedTabs.find(t => t.id === tabId);
    if (!tab) return state;

    // Remove tab from all sections and groups
    const updatedSections = state.sections.map(section => ({
      ...section,
      tabs: section.id === targetSectionId
        ? [...section.tabs, tab]
        : section.tabs.filter(t => t.id !== tabId)
    }));

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

    const updatedSections = state.sections
      .filter(s => s.id !== sectionId)
      .map(section => 
        section.id === 'default'
          ? { ...section, tabs: [...section.tabs, ...removedSection.tabs] }
          : section
      );

    const newWidth = 100 / updatedSections.length;
    updatedSections.forEach(section => section.width = newWidth);

    return { sections: updatedSections };
  }),

  addTabGroup: (tabId) => set((state) => {
    const tab = state.openedTabs.find(t => t.id === tabId);
    if (!tab) return state;

    // Remove tab from all sections
    const updatedSections = state.sections.map(section => ({
      ...section,
      tabs: section.tabs.filter(t => t.id !== tabId)
    }));

    // Remove tab from all other groups
    const updatedGroups = state.tabGroups.map(group => ({
      ...group,
      tabs: group.tabs.filter(t => t.id !== tabId)
    }));

    const newGroupId = `group-${state.tabGroups.length + 1}`;
    const newGroup = {
      id: newGroupId,
      tabs: [tab],
      position: { x: 0, y: 0 }
    };

    return {
      ...state,
      sections: updatedSections,
      tabGroups: [...updatedGroups, newGroup]
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
      sections: updatedSections,
      tabGroups: state.tabGroups.filter(g => g.id !== groupId)
    };
  }),

  moveTabToGroup: (tabId, groupId) => set((state) => {
    const tab = state.openedTabs.find(t => t.id === tabId);
    if (!tab) return state;

    // Remove tab from all sections
    const updatedSections = state.sections.map(section => ({
      ...section,
      tabs: section.tabs.filter(t => t.id !== tabId)
    }));

    // Update groups - remove from all groups except target group
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
  })
}));