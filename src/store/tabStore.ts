"use client";

import { create } from 'zustand';
import React from 'react';

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
  rows: TabRow[];
  tabGroups: TabGroup[];
  addTab: (tab: TabItem) => void;
  removeTab: (tabId: number) => void;
  setActiveTab: (tabId: number) => void;
  duplicateTab: (tabId: number) => void;
  addRow: () => void;
  removeRow: (rowId: string) => void;
  addSection: (rowId: string, tabId?: number) => void;
  removeSection: (rowId: string, sectionId: string) => void;
  moveTabToSection: (tabId: number, targetRowId: string, targetSectionId: string) => void;
  updateSectionWidth: (rowId: string, sectionId: string, width: number) => void;
  addTabGroup: (tabId: number) => void;
  removeTabGroup: (groupId: string) => void;
  moveTabToGroup: (tabId: number, groupId: string) => void;
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

export const useTabStore = create<TabLayoutStore>((set, get) => ({
  openedTabs: [],
  activeTabId: null,
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

  addTab: (tab) => set((state) => {
    if (state.openedTabs.some(t => t.id === tab.id)) {
      return { activeTabId: tab.id };
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
      rows: newRows,
    };
  }),

  removeTab: (tabId) => set((state) => {
    const newTabs = state.openedTabs.filter((tab) => tab.id !== tabId);
    let newActiveTabId = state.activeTabId;
    if (state.activeTabId === tabId) {
      const index = state.openedTabs.findIndex((t) => t.id === tabId);
      newActiveTabId = newTabs[index]?.id || newTabs[index - 1]?.id || null;
    }

    const updatedRows = state.rows.map((row) => {
      const updatedSections = row.sections
        .map((sec) => ({
          ...sec,
          tabs: sec.tabs.filter((t) => t.id !== tabId),
        }))
        .filter((sec) => sec.id === 'default' || sec.tabs.length > 0);

      return {
        ...row,
        sections: adjustSectionWidths(updatedSections),
      };
    });

    const updatedGroups = state.tabGroups
      .map((group) => ({
        ...group,
        tabs: group.tabs.filter((t) => t.id !== tabId),
      }))
      .filter((g) => g.tabs.length > 0);

    return {
      openedTabs: newTabs,
      activeTabId: newActiveTabId,
      rows: updatedRows,
      tabGroups: updatedGroups,
    };
  }),
  
  setActiveTab: (tabId) => set({ activeTabId: tabId }),

  duplicateTab: (tabId) => set((state) => {
    const originalTab = state.openedTabs.find(t => t.id === tabId);
    if (!originalTab) return state;

    const newTabId = Math.floor(Date.now() + Math.random() * 1000);
    const duplicatedTab = { ...originalTab, id: newTabId };

    let targetRowIndex = -1;
    let targetSectionIndex = -1;
    let originalIndexInSection = -1;

    outerLoop: for (let r = 0; r < state.rows.length; r++) {
      for (let s = 0; s < state.rows[r].sections.length; s++) {
        const section = state.rows[r].sections[s];
        const idx = section.tabs.findIndex(t => t.id === tabId);
        if (idx !== -1) {
          targetRowIndex = r;
          targetSectionIndex = s;
          originalIndexInSection = idx;
          break outerLoop;
        }
      }
    }

    if (targetRowIndex === -1 || targetSectionIndex === -1) {
      return state;
    }

    const newOpenedTabs = [...state.openedTabs, duplicatedTab];
    const rowToUpdate = state.rows[targetRowIndex];
    const sectionToUpdate = rowToUpdate.sections[targetSectionIndex];

    const newTabsInSection = [...sectionToUpdate.tabs];
    newTabsInSection.splice(originalIndexInSection + 1, 0, duplicatedTab);

    const updatedSection = { ...sectionToUpdate, tabs: newTabsInSection };
    const updatedSections = rowToUpdate.sections.map((sec, i) =>
      i === targetSectionIndex ? updatedSection : sec
    );

    const updatedRow = {
      ...rowToUpdate,
      sections: adjustSectionWidths(updatedSections),
    };
    const updatedRows = [...state.rows];
    updatedRows[targetRowIndex] = updatedRow;

    return {
      openedTabs: newOpenedTabs,
      rows: updatedRows,
      activeTabId: newTabId,
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

  moveTabToSection: (tabId, targetRowId, targetSectionId) => set((state) => {
    const tab = state.openedTabs.find(t => t.id === tabId);
    if (!tab) return state;

    // Extract numeric ID from the tab-{id} format
    const numericTabId = typeof tabId === 'string' && String(tabId).startsWith('tab-') ? 
      parseInt(String(tabId).replace('tab-', '')) : (typeof tabId === 'number' ? tabId : 0);

    // Update all rows to remove the tab from its current location
    const updatedRows = state.rows.map(row => ({
      ...row,
      sections: row.sections.map(sec => ({
        ...sec,
        tabs: sec.tabs.filter(t => t.id !== numericTabId)
      }))
    }));

    // Find target row and section
    const targetRowIndex = updatedRows.findIndex(r => r.id === targetRowId);
    if (targetRowIndex === -1) return state;

    const targetRow = updatedRows[targetRowIndex];
    const targetSectionIndex = targetRow.sections.findIndex(s => s.id === targetSectionId);
    if (targetSectionIndex === -1) return state;

    // Add tab to target section
    const updatedSections = [...targetRow.sections];
    updatedSections[targetSectionIndex] = {
      ...updatedSections[targetSectionIndex],
      tabs: [...updatedSections[targetSectionIndex].tabs, tab]
    };

    // Update the target row
    updatedRows[targetRowIndex] = {
      ...targetRow,
      sections: adjustSectionWidths(updatedSections)
    };

    // Remove tab from all groups
    const updatedGroups = state.tabGroups
      .map(g => ({
        ...g,
        tabs: g.tabs.filter(t => t.id !== numericTabId)
      }))
      .filter(g => g.tabs.length > 0);

    return {
      ...state,
      rows: updatedRows,
      tabGroups: updatedGroups
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
}));