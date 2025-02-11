"use client";

import { create } from 'zustand';
import React from 'react';

export interface TabItem {
  id: number;
  uniqueKey: string;
  title: string;
  icon: string;
  href: string;
  content: React.ReactNode;
  campaignId?: string;
}

export interface TabSection {
  id: string;
  tabs: TabItem[];
  width: number;
}

export interface TabRow {
  id: string;
  sections: TabSection[];
}

export interface TabGroup {
  id: string;
  tabs: TabItem[];
  position: { x: number; y: number };
}

export interface TabLayoutStore {
  openedTabs: TabItem[];
  activeTabId: number | null;
  activeTabKey: string | null;     // uniqueKey를 위한 새로운 필드 추가
  rows: TabRow[];
  tabGroups: TabGroup[];
  campaignIdForUpdateFromSideMenu: string | null;
  counselorSkillAssignmentInfo: {
    tenantId: string | null;
    counselorId: string | null;
    counselorName: string | null;
  };
  setCounselorSkillAssignmentInfo: (info: { tenantId: string | null; counselorId: string | null; counselorName: string | null } | null) => void;
  setCampaignIdForUpdateFromSideMenu: (id: string | null) => void;

  addTab: (tab: TabItem) => void;
  // removeTab: (tabId: number) => void;
  removeTab: (tabId: number, uniqueKey: string) => void;  // uniqueKey 매개변수 추가
  setActiveTab: (tabId: number, uniqueKey: string) => void;
  duplicateTab: (tabId: number) => void;
  addRow: () => void;
  removeRow: (rowId: string) => void;
  addSection: (rowId: string, tabId?: number) => void;
  removeSection: (rowId: string, sectionId: string) => void;
  moveTabToSection: (tabId: number, targetRowId: string, targetSectionId: string, draggedTabKey: string) => void;
  updateSectionWidth: (rowId: string, sectionId: string, width: number) => void;
  addTabGroup: (tabId: number) => void;
  removeTabGroup: (groupId: string) => void;
  moveTabToGroup: (tabId: number, groupId: string) => void;
  getTabCountById: (tabId: number) => number;
  openCampaignManagerForUpdate: (campaignId: string, label: string) => void;
  openCampaignProgressInfo: (campaignId: string, label: string) => void;
  openRebroadcastSettings: (campaignId: string, label: string) => void;

}

// const generateUniqueId = (prefix: string, existingIds: string[]) => {
//   let counter = 1;
//   let newId = `${prefix}-${counter}`;

//   while (existingIds.includes(newId)) {
//     counter++;
//     newId = `${prefix}-${counter}`;
//   }

//   return newId;
// };

// const adjustSectionWidths = (sections: TabSection[]) => {
//   const newWidth = 100 / sections.length;
//   return sections.map(section => ({
//     ...section,
//     width: newWidth
//   }));
// };

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

export const useTabStore = create<TabLayoutStore>((set, get) => ({
  openedTabs: [],
  activeTabId: null,
  activeTabKey: null,

  rows: [
    {
      id: 'row-1',
      sections: [
        {
          id: 'default',
          tabs: [],
          width: 100
        }
      ]
    }
  ],
  tabGroups: [],

  counselorSkillAssignmentInfo: {
    tenantId: null,
    counselorId: null,
    counselorName: null
  },

  setCounselorSkillAssignmentInfo: (info: { tenantId: string | null; counselorId: string | null; counselorName: string | null } | null) => set({
    counselorSkillAssignmentInfo: info ? info : {
      tenantId: null,
      counselorId: null,
      counselorName: null
    }
  }),

  getTabCountById: (menuId: number) => {
    const state = get();
    let count = 0;

    state.rows.forEach(row => {
      row.sections.forEach(section => {
        count += section.tabs.filter(tab => tab.id === menuId).length;
      });
    });

    state.tabGroups.forEach(group => {
      count += group.tabs.filter(tab => tab.id === menuId).length;
    });

    return count;
  },

  setActiveTab: (tabId: number, uniqueKey: string) => set(state => {
    const tab = state.openedTabs.find(t => t.id === tabId && t.uniqueKey === uniqueKey);
    if (!tab) return state;

    return {
      ...state,
      activeTabId: tabId,
      activeTabKey: uniqueKey
    };
  }),

  addTab: (tab) => set((state) => {
    // 이미 열려있는 탭인 경우
    if (state.openedTabs.some(t => t.id === tab.id && t.uniqueKey === tab.uniqueKey)) {
      return {
        activeTabId: tab.id,
        activeTabKey: tab.uniqueKey
      };
    }

    const newOpenedTabs = [...state.openedTabs, tab];
    const [firstRow] = state.rows;
    if (!firstRow) return {};

    const [firstSection] = firstRow.sections;
    if (!firstSection) return {};

    const updatedFirstSection = {
      ...firstSection,
      tabs: [...firstSection.tabs, tab],
    };

    const updatedSections = adjustSectionWidths(
      firstRow.sections.map((sec) =>
        sec.id === firstSection.id ? updatedFirstSection : sec
      )
    );

    const updatedRow = { ...firstRow, sections: updatedSections };
    const newRows = state.rows.map((row) =>
      row.id === firstRow.id ? updatedRow : row
    );

    return {
      openedTabs: newOpenedTabs,
      activeTabId: tab.id,
      activeTabKey: tab.uniqueKey,
      rows: newRows,
    };
  }),

  removeTab: (tabId: number, uniqueKey: string) => set((state) => {
    // uniqueKey를 기준으로 정확한 탭 찾기
    const newTabs = state.openedTabs.filter((tab) =>
      !(tab.id === tabId && tab.uniqueKey === uniqueKey)
    );

    // 현재 활성화된 탭이 삭제되는 경우
    let newActiveTabId = state.activeTabId;
    let newActiveTabKey = state.activeTabKey;

    if (state.activeTabId === tabId && state.activeTabKey === uniqueKey) {
      // 삭제되는 탭의 인덱스 찾기
      const index = state.openedTabs.findIndex(
        (t) => t.id === tabId && t.uniqueKey === uniqueKey
      );

      // 다음 탭이나 이전 탭을 활성화
      const nextTab = newTabs[index] || newTabs[index - 1];
      if (nextTab) {
        newActiveTabId = nextTab.id;
        newActiveTabKey = nextTab.uniqueKey;
      } else {
        newActiveTabId = null;
        newActiveTabKey = null;
      }
    }

    // rows의 sections에서도 해당 특정 탭만 제거
    const updatedRows = state.rows.map((row) => {
      const updatedSections = row.sections
        .map((sec) => ({
          ...sec,
          tabs: sec.tabs.filter(
            (t) => !(t.id === tabId && t.uniqueKey === uniqueKey)
          ),
        }))
        .filter((sec) => sec.id === 'default' || sec.tabs.length > 0);

      return {
        ...row,
        sections: adjustSectionWidths(updatedSections),
      };
    });

    // tabGroups에서도 해당 특정 탭만 제거
    const updatedGroups = state.tabGroups
      .map((group) => ({
        ...group,
        tabs: group.tabs.filter(
          (t) => !(t.id === tabId && t.uniqueKey === uniqueKey)
        ),
      }))
      .filter((g) => g.tabs.length > 0);

    return {
      ...state,
      openedTabs: newTabs,
      activeTabId: newActiveTabId,
      activeTabKey: newActiveTabKey,
      rows: updatedRows,
      tabGroups: updatedGroups,
    };
  }),

  duplicateTab: (tabId) => set((state) => {
    const originalTab = state.openedTabs.find(t => t.id === tabId);
    if (!originalTab) return state;

    // 새로운 uniqueKey 생성
    const uniqueKey = `tab-${tabId}-${Date.now()}`;

    // 복제된 탭에 uniqueKey 추가
    const duplicatedTab = {
      ...originalTab,
      uniqueKey,
    };

    // 현재 탭이 있는 row와 section 찾기
    let targetRowIndex = -1;
    let targetSectionIndex = -1;

    outerLoop: for (let r = 0; r < state.rows.length; r++) {
      for (let s = 0; s < state.rows[r].sections.length; s++) {
        const section = state.rows[r].sections[s];
        if (section.tabs.some(t => t.id === tabId)) {
          targetRowIndex = r;
          targetSectionIndex = s;
          break outerLoop;
        }
      }
    }

    if (targetRowIndex === -1 || targetSectionIndex === -1) {
      return state;
    }

    // openedTabs에 복제된 탭 추가
    const newOpenedTabs = [...state.openedTabs, duplicatedTab];

    const rowToUpdate = state.rows[targetRowIndex];
    const sectionToUpdate = rowToUpdate.sections[targetSectionIndex];

    // 섹션에 복제된 탭 추가
    const updatedSection = {
      ...sectionToUpdate,
      tabs: [...sectionToUpdate.tabs, duplicatedTab]
    };

    // 섹션 너비 조정을 포함한 섹션 업데이트
    const updatedSections = rowToUpdate.sections.map((sec, i) =>
      i === targetSectionIndex ? updatedSection : sec
    );

    const updatedRow = {
      ...rowToUpdate,
      sections: adjustSectionWidths(updatedSections),
    };

    const updatedRows = [...state.rows];
    updatedRows[targetRowIndex] = updatedRow;

    // 상태 업데이트 - 새로 복제된 탭을 활성화
    return {
      ...state,
      openedTabs: newOpenedTabs,
      rows: updatedRows,
      activeTabId: duplicatedTab.id,      // 복제된 탭의 id
      activeTabKey: duplicatedTab.uniqueKey  // 복제된 탭의 uniqueKey
    };
  }),

  addRow: () => set((state) => {
    const existingIds = state.rows.map(r => r.id);
    const newRowId = generateUniqueId('row', existingIds);

    const newRow: TabRow = {
      id: newRowId,
      sections: [
        {
          id: 'section-1',
          tabs: [],
          width: 100,
        }
      ]
    };

    return { rows: [...state.rows, newRow] };
  }),

  removeRow: (rowId) => set((state) => {
    if (state.rows.length <= 1) return state;

    const rowToRemove = state.rows.find(r => r.id === rowId);
    if (!rowToRemove) return state;

    const baseRowIndex = state.rows.findIndex(r => r.id === 'row-1');
    if (baseRowIndex === -1) return state;

    const baseDefaultSecIndex = state.rows[baseRowIndex].sections.findIndex(
      (sec) => sec.id === 'default'
    );
    if (baseDefaultSecIndex === -1) return state;

    const allTabs = rowToRemove.sections.flatMap(s => s.tabs);
    const updatedBaseSections = [...state.rows[baseRowIndex].sections];
    const baseDefaultSec = updatedBaseSections[baseDefaultSecIndex];
    const mergedSection = {
      ...baseDefaultSec,
      tabs: [...baseDefaultSec.tabs, ...allTabs],
    };
    updatedBaseSections[baseDefaultSecIndex] = mergedSection;

    const newRows = state.rows.filter(r => r.id !== rowId);
    const updatedBaseRow = {
      ...newRows[baseRowIndex],
      sections: adjustSectionWidths(updatedBaseSections),
    };
    newRows[baseRowIndex] = updatedBaseRow;

    return { rows: newRows };
  }),

  addSection: (rowId, tabId) => set((state) => {
    const rowIndex = state.rows.findIndex(r => r.id === rowId);
    if (rowIndex === -1) return state;
  
    const row = state.rows[rowIndex];
  
    // 🚨 섹션이 2개 이상이면 추가하지 않음
    if (row.sections.length >= 2) {
      console.warn(`Row ${rowId} already has 2 sections. Cannot add more.`);
      return state;
    }
  
    const existingIds = row.sections.map(s => s.id);
    const newSectionId = generateUniqueId('section', existingIds);
  
    let maybeTab: TabItem | null = null;
    if (tabId) {
      maybeTab = state.openedTabs.find(t => t.id === tabId) || null;
    }
  
    const newSection: TabSection = {
      id: newSectionId,
      tabs: maybeTab ? [maybeTab] : [],
      width: 0,
    };
  
    let updatedSections = row.sections.map((sec) => ({
      ...sec,
      tabs: maybeTab ? sec.tabs.filter(t => t.id !== tabId) : sec.tabs,
    }));
    updatedSections = updatedSections.filter(
      (sec) => sec.id === 'default' || sec.tabs.length > 0
    );
  
    updatedSections.push(newSection);
    updatedSections = adjustSectionWidths(updatedSections);
  
    const updatedRow = { ...row, sections: updatedSections };
    const newRows = [...state.rows];
    newRows[rowIndex] = updatedRow;
  
    return { rows: newRows };
  }),

  removeSection: (rowId, sectionId) => set((state) => {
    const rowIndex = state.rows.findIndex((r) => r.id === rowId);
    if (rowIndex === -1) return state;

    const row = state.rows[rowIndex];
    if (row.sections.length <= 1) return state;

    const removedSection = row.sections.find(s => s.id === sectionId);
    if (!removedSection) return state;

    let newSections = row.sections
      .filter(s => s.id !== sectionId)
      .map((sec) =>
        sec.id === 'default'
          ? { ...sec, tabs: [...sec.tabs, ...removedSection.tabs] }
          : sec
      );

    newSections = adjustSectionWidths(newSections);
    const updatedRow = { ...row, sections: newSections };
    const newRows = [...state.rows];
    newRows[rowIndex] = updatedRow;

    return { rows: newRows };
  }),

  moveTabToSection: (tabId: number, targetRowId: string, targetSectionId: string, draggedTabKey: string) => set((state) => {
    // draggedTabKey로 이동할 탭을 찾습니다
    const movedTab = state.openedTabs.find(t => t.id === tabId && t.uniqueKey === draggedTabKey);
    if (!movedTab) return state;

    // 현재 탭의 uniqueKey를 기준으로 필터링하여 해당 탭만 이동
    const updatedRows = state.rows.map(row => ({
      ...row,
      sections: row.sections.map(sec => ({
        ...sec,
        tabs: sec.tabs.filter(t => !(t.id === tabId && t.uniqueKey === draggedTabKey))
      }))
    }));

    // 대상 섹션에 탭 추가
    const targetRowIndex = updatedRows.findIndex(r => r.id === targetRowId);
    if (targetRowIndex === -1) return state;

    const targetRow = updatedRows[targetRowIndex];
    const targetSectionIndex = targetRow.sections.findIndex(s => s.id === targetSectionId);
    if (targetSectionIndex === -1) return state;

    const updatedSections = [...targetRow.sections];
    updatedSections[targetSectionIndex] = {
      ...updatedSections[targetSectionIndex],
      tabs: [...updatedSections[targetSectionIndex].tabs, movedTab]
    };

    updatedRows[targetRowIndex] = {
      ...targetRow,
      sections: adjustSectionWidths(updatedSections)
    };

    // 탭 그룹에서도 해당 uniqueKey를 가진 탭만 제거
    const updatedGroups = state.tabGroups
      .map(g => ({
        ...g,
        tabs: g.tabs.filter(t => !(t.id === tabId && t.uniqueKey === draggedTabKey))
      }))
      .filter(g => g.tabs.length > 0);

    return {
      ...state,
      rows: updatedRows,
      tabGroups: updatedGroups,
      // 드래그한 탭을 활성화
      activeTabId: movedTab.id,
      activeTabKey: movedTab.uniqueKey
    };
  }),

  updateSectionWidth: (rowId, sectionId, width) => set((state) => {
    const rowIndex = state.rows.findIndex((r) => r.id === rowId);
    if (rowIndex === -1) return state;

    const row = state.rows[rowIndex];
    const updatedSections = row.sections.map((sec) =>
      sec.id === sectionId ? { ...sec, width } : sec
    );

    const updatedRow = { ...row, sections: updatedSections };
    const newRows = [...state.rows];
    newRows[rowIndex] = updatedRow;

    return { rows: newRows };
  }),

  addTabGroup: (tabId) => set((state) => {
    const tab = state.openedTabs.find(t => t.id === tabId);
    if (!tab) return state;

    // Extract numeric ID if necessary
    const numericTabId = (typeof tabId === 'string' && String(tabId).startsWith('tab-')) ?
      parseInt(String(tabId).replace('tab-', '')) : (typeof tabId === 'number' ? tabId : 0);

    // 모든 섹션에서 제거
    const updatedRows = state.rows.map(row => {
      let newSecs = row.sections.map(sec => ({
        ...sec,
        tabs: sec.tabs.filter(t => t.id !== numericTabId),
      }));
      newSecs = newSecs.filter(
        (sec) => sec.id === 'default' || sec.tabs.length > 0
      );
      return { ...row, sections: adjustSectionWidths(newSecs) };
    });

    const existingIds = state.tabGroups.map(g => g.id);
    const newGroupId = generateUniqueId('group', existingIds);

    const newGroup: TabGroup = {
      id: newGroupId,
      tabs: [tab],
      position: { x: 0, y: 0 },
    };

    return {
      rows: updatedRows,
      tabGroups: [...state.tabGroups, newGroup],
    };
  }),

  removeTabGroup: (groupId) => set((state) => {
    const group = state.tabGroups.find(g => g.id === groupId);
    if (!group) return state;

    const rowIndex = state.rows.findIndex(r => r.id === 'row-1');
    if (rowIndex === -1) return state;

    const defaultSecIndex = state.rows[rowIndex].sections.findIndex(
      sec => sec.id === 'default'
    );
    if (defaultSecIndex === -1) return state;

    const baseSection = state.rows[rowIndex].sections[defaultSecIndex];
    const mergedSection = {
      ...baseSection,
      tabs: [...baseSection.tabs, ...group.tabs],
    };

    let updatedSections = [...state.rows[rowIndex].sections];
    updatedSections[defaultSecIndex] = mergedSection;
    updatedSections = adjustSectionWidths(updatedSections);

    const updatedRow = {
      ...state.rows[rowIndex],
      sections: updatedSections,
    };
    const newRows = [...state.rows];
    newRows[rowIndex] = updatedRow;

    return {
      rows: newRows,
      tabGroups: state.tabGroups.filter(g => g.id !== groupId),
    };
  }),

  moveTabToGroup: (tabId, groupId) => set((state) => {
    const tab = state.openedTabs.find(t => t.id === tabId);
    if (!tab) return state;

    // Extract numeric ID if necessary
    const numericTabId = typeof tabId === 'string' ?
      parseInt(String(tabId).replace('tab-', '')) : (typeof tabId === 'number' ? tabId : 0);

    // 모든 섹션에서 제거
    const updatedRows = state.rows.map(row => {
      let newSecs = row.sections.map(sec => ({
        ...sec,
        tabs: sec.tabs.filter(t => t.id !== numericTabId),
      }));
      newSecs = newSecs.filter(
        (sec) => sec.id === 'default' || sec.tabs.length > 0
      );
      return { ...row, sections: adjustSectionWidths(newSecs) };
    });

    // 그룹에 탭 추가
    const updatedGroups = state.tabGroups.map(g => {
      if (g.id === groupId) {
        return { ...g, tabs: [...g.tabs, tab] };
      }
      return { ...g, tabs: g.tabs.filter(t => t.id !== numericTabId) };
    });

    return {
      rows: updatedRows,
      tabGroups: updatedGroups,
    };
  }),

  openCampaignManagerForUpdate: (campaignId: string, label: string) => set((state) => {
    const existingTab = state.openedTabs.find(tab => tab.id === 2);

    if (existingTab) {
      // Update existing campaign manager tab
      const updatedTab = {
        ...existingTab,
        campaignId: campaignId,
        title: label !== "" ? `캠페인 관리 - ${label}` : `캠페인 관리`
      };

      const updatedTabs = state.openedTabs.map(tab =>
        tab.uniqueKey === existingTab.uniqueKey ? updatedTab : tab
      );

      const updatedRows = state.rows.map(row => ({
        ...row,
        sections: row.sections.map(section => ({
          ...section,
          tabs: section.tabs.map(tab =>
            tab.uniqueKey === existingTab.uniqueKey ? updatedTab : tab
          )
        }))
      }));

      return {
        openedTabs: updatedTabs,
        rows: updatedRows,
        activeTabId: 2,
        activeTabKey: existingTab.uniqueKey,
      };
    }

    // Create new campaign manager tab
    const newTabKey = `2-${campaignId}-${Date.now()}`;
    const newTab = {
      id: 2,
      uniqueKey: newTabKey,
      title: label !== "" ? `캠페인 관리 - ${label}` : `캠페인 관리`,
      icon: "header-menu/캠페인관리.svg",
      href: "/campaign",
      campaignId: campaignId,
      content: null
    };

    return {
      openedTabs: [...state.openedTabs, newTab],
      activeTabId: 2,
      activeTabKey: newTabKey,
      rows: state.rows.map(row =>
        row.id === 'row-1' ? {
          ...row,
          sections: row.sections.map(section =>
            section.id === 'default' ? {
              ...section,
              tabs: [...section.tabs, newTab]
            } : section
          )
        } : row
      )
    };
  }),

  openCampaignProgressInfo: (campaignId: string, label: string) => set((state) => {
    const newTabKey = `4-${campaignId}-${Date.now()}`;
    const newTab = {
      id: 4,
      uniqueKey: newTabKey,
      title: label !== "" ? `총진행상황 - ${label}` : "총진행상황",
      icon: "/header-menu/총진행상황.svg",
      href: "/status",
      content: null,
      campaignId: campaignId  // 캠페인 ID 저장
    };

    // 이전 총진행상황 탭 찾기
    const existingTabs = state.openedTabs.filter(tab => tab.id === 4);

    // 이전 탭들 제거
    existingTabs.forEach(tab => {
      state.removeTab(tab.id, tab.uniqueKey);
    });

    return {
      openedTabs: [...state.openedTabs, newTab],
      activeTabId: 4,
      activeTabKey: newTabKey,
      rows: state.rows.map(row =>
        row.id === 'row-1' ? {
          ...row,
          sections: row.sections.map(section =>
            section.id === 'default' ? {
              ...section,
              tabs: [...section.tabs, newTab]
            } : section
          )
        } : row
      )
    };
  }),
  openRebroadcastSettings: (campaignId: string, label: string) => set((state) => {
    // 이전 재발신 설정 탭들 제거한 새로운 상태 생성
    const filteredTabs = state.openedTabs.filter(tab => tab.id !== 20);
    
    const newTabKey = `rebroadcast-${campaignId}-${Date.now()}`;
    const newTab = {
      id: 20,
      uniqueKey: newTabKey,
      title: label ? `재발신 설정 - ${label}` : "재발신 설정",
      icon: "/header-menu/발신진행상태.svg",
      href: "/rebroadcast",
      campaignId,
      content: null,
    };
  
    return {
      openedTabs: [...filteredTabs, newTab],
      activeTabId: newTab.id,
      activeTabKey: newTabKey,
      rows: state.rows.map(row =>
        row.id === 'row-1' ? {
          ...row,
          sections: row.sections.map(section =>
            section.id === 'default' ? {
              ...section,
              tabs: [...section.tabs.filter(tab => tab.id !== 20), newTab]
            } : section
          )
        } : row
      )
    };
  }),
  
  campaignIdForUpdateFromSideMenu: null,
  setCampaignIdForUpdateFromSideMenu: (id) => set({ campaignIdForUpdateFromSideMenu: id }),

}));