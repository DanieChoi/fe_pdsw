// src/store/tabStore.ts
"use client";

import { create } from "zustand";
import React from "react";

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
  activeTabKey: string | null;
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
  rows: TabRow[];
  tabGroups: TabGroup[];

  // 스킬 할당을 위한 예시 필드들 (기존 코드와 동일)
  campaignIdForUpdateFromSideMenu: string | null;
  counselorSkillAssignmentInfo: {
    tenantId: string | null;
    counselorId: string | null;
    counselorName: string | null;
  };
  setCounselorSkillAssignmentInfo: (
    info:
      | {
          tenantId: string | null;
          counselorId: string | null;
          counselorName: string | null;
        }
      | null
  ) => void;
  setCampaignIdForUpdateFromSideMenu: (id: string | null) => void;

  // -----------------------------
  // 아래는 탭 관련 로직
  // -----------------------------
  getTabCountById: (menuId: number) => number;

  // 새 탭을 열 때 사용
  addTab: (tab: TabItem) => void;

  // 탭 제거 시: (tabId, uniqueKey) 로 정확히 제거
  removeTab: (tabId: number, uniqueKey: string) => void;

  // 섹션 단위의 활성 탭 설정
  setSectionActiveTab: (
    rowId: string,
    sectionId: string,
    tabUniqueKey: string
  ) => void;

  // 탭 복제
  duplicateTab: (tabId: number) => void;

  // 행/섹션 추가/제거
  addRow: () => void;
  removeRow: (rowId: string) => void;
  addSection: (rowId: string, tabId?: number) => void;
  removeSection: (rowId: string, sectionId: string) => void;

  // 드래그앤드롭
  moveTabToSection: (
    tabId: number,
    targetRowId: string,
    targetSectionId: string,
    draggedTabKey: string
  ) => void;
  updateSectionWidth: (rowId: string, sectionId: string, width: number) => void;

  // 탭 그룹
  addTabGroup: (tabId: number) => void;
  removeTabGroup: (groupId: string) => void;
  moveTabToGroup: (tabId: number, groupId: string) => void;

  // 특정 기능성 탭 열기 (캠페인 관련 등)
  openCampaignManagerForUpdate: (campaignId: string, label: string) => void;
  openCampaignProgressInfo: (campaignId: string, label: string) => void;
  openRebroadcastSettings: (campaignId: string, label: string) => void;
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
  return sections.map((section) => ({
    ...section,
    width: newWidth,
  }));
};

export const useTabStore = create<TabLayoutStore>((set, get) => ({
  // -----------------------
  // 초기 값
  // -----------------------
  openedTabs: [],
  rows: [
    {
      id: "row-1",
      sections: [
        {
          id: "default",
          tabs: [],
          width: 100,
          activeTabKey: null,
        },
      ],
    },
  ],
  tabGroups: [],

  counselorSkillAssignmentInfo: {
    tenantId: null,
    counselorId: null,
    counselorName: null,
  },
  campaignIdForUpdateFromSideMenu: null,

  // ------------------------
  // 스킬 할당 등 부가 로직
  // ------------------------
  setCounselorSkillAssignmentInfo: (info) =>
    set({
      counselorSkillAssignmentInfo: info
        ? info
        : { tenantId: null, counselorId: null, counselorName: null },
    }),

  setCampaignIdForUpdateFromSideMenu: (id) =>
    set({ campaignIdForUpdateFromSideMenu: id }),

  // 특정 메뉴 id(예: 1,2,3...)에 해당하는 탭이 몇 개 열려있는지 세는 예시
  getTabCountById: (menuId: number) => {
    const state = get();
    let count = 0;

    state.rows.forEach((row) => {
      row.sections.forEach((section) => {
        count += section.tabs.filter((tab) => tab.id === menuId).length;
      });
    });

    state.tabGroups.forEach((group) => {
      count += group.tabs.filter((tab) => tab.id === menuId).length;
    });

    return count;
  },

  // ------------------------
  // 섹션 단위 활성 탭 설정
  // ------------------------
  setSectionActiveTab: (rowId, sectionId, tabUniqueKey) =>
    set((state) => {
      const newRows = state.rows.map((row) => {
        if (row.id !== rowId) return row;
        return {
          ...row,
          sections: row.sections.map((section) => {
            if (section.id !== sectionId) return section;
            return {
              ...section,
              activeTabKey: tabUniqueKey,
            };
          }),
        };
      });
      return { ...state, rows: newRows };
    }),

  // ------------------------
  // 새 탭 열기
  // ------------------------
  addTab: (tab) =>
    set((state) => {
      // 이미 열려있는 탭( uniqueKey 기반 )인지 확인
      const isAlreadyOpened = state.openedTabs.some(
        (t) => t.id === tab.id && t.uniqueKey === tab.uniqueKey
      );
      if (isAlreadyOpened) {
        // 이미 열려있으면 그냥 무시하거나,
        // 여기서 "해당 섹션의 activeTabKey로 설정" 같은 로직이 필요하다면 추가
        return state;
      }

      // 새로 openedTabs에 추가
      const newOpenedTabs = [...state.openedTabs, tab];

      // 가장 첫 Row의 첫 Section(기본 default) 찾기
      const firstRow = state.rows[0];
      if (!firstRow) return state;
      const firstSection = firstRow.sections[0];
      if (!firstSection) return state;

      // 그 섹션에 새 탭 추가
      const updatedSection = {
        ...firstSection,
        tabs: [...firstSection.tabs, tab],
        activeTabKey: tab.uniqueKey, // 해당 탭을 활성화
      };

      const updatedSections = adjustSectionWidths(
        firstRow.sections.map((sec) =>
          sec.id === firstSection.id ? updatedSection : sec
        )
      );

      const updatedRow = { ...firstRow, sections: updatedSections };
      const newRows = state.rows.map((row) =>
        row.id === firstRow.id ? updatedRow : row
      );

      return {
        ...state,
        openedTabs: newOpenedTabs,
        rows: newRows,
      };
    }),

  // ------------------------
  // 탭 제거
  // ------------------------
  removeTab: (tabId, uniqueKey) =>
    set((state) => {
      // openedTabs에서 제거
      const newOpenedTabs = state.openedTabs.filter(
        (t) => !(t.id === tabId && t.uniqueKey === uniqueKey)
      );

      // rows의 모든 섹션에서 해당 탭 제거
      const updatedRows = state.rows.map((row) => {
        const newSections = row.sections.map((sec) => {
          // 해당 섹션에서 탭 제거
          const filteredTabs = sec.tabs.filter(
            (t) => !(t.id === tabId && t.uniqueKey === uniqueKey)
          );

          // 만약 현재 activeTabKey가 제거된 탭이라면, 새로운 activeTabKey를 정해야 함
          let newActiveKey = sec.activeTabKey;
          if (sec.activeTabKey === uniqueKey) {
            // filteredTabs 중 마지막 요소를 활성화하거나, 없으면 null
            const lastTab = filteredTabs[filteredTabs.length - 1];
            newActiveKey = lastTab ? lastTab.uniqueKey : null;
          }

          return { ...sec, tabs: filteredTabs, activeTabKey: newActiveKey };
        });
        // 섹션 중 내용이 비어서 제거해야 할 경우(기존 로직) 처리할 수도 있으나
        // 여기서는 id가 default가 아닌 섹션만 제거하도록 했음
        // 원하는 로직에 맞춰 조정 가능
        const filteredSections = newSections.filter(
          (s) => s.id === "default" || s.tabs.length > 0
        );
        return { ...row, sections: adjustSectionWidths(filteredSections) };
      });

      // tabGroups에서도 제거
      const updatedGroups = state.tabGroups
        .map((g) => ({
          ...g,
          tabs: g.tabs.filter(
            (t) => !(t.id === tabId && t.uniqueKey === uniqueKey)
          ),
        }))
        .filter((g) => g.tabs.length > 0);

      return {
<<<<<<< HEAD
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
=======
        ...state,
        openedTabs: newOpenedTabs,
>>>>>>> b13de3b06a16ecf47f8a82f15470cb51306f61ab
        rows: updatedRows,
        tabGroups: updatedGroups,
      };
    }),

  // ------------------------
  // 탭 복제
  // ------------------------
  duplicateTab: (tabId) =>
    set((state) => {
      // 우선 복제 대상 원본 탭(가장 최근? 혹은 첫번째?)을 찾음
      const originalTab = state.openedTabs.find((t) => t.id === tabId);
      if (!originalTab) return state;

      // uniqueKey 새로 생성
      const duplicatedKey = `tab-${tabId}-${Date.now()}`;
      const duplicatedTab = { ...originalTab, uniqueKey: duplicatedKey };

      // openedTabs에 추가
      const newOpenedTabs = [...state.openedTabs, duplicatedTab];

      // 이 탭이 들어있는 Row/Section을 찾는다(가장 앞에 있는 곳)
      let targetRowIndex = -1;
      let targetSectionIndex = -1;
      outer: for (let r = 0; r < state.rows.length; r++) {
        for (let s = 0; s < state.rows[r].sections.length; s++) {
          const section = state.rows[r].sections[s];
          if (section.tabs.some((t) => t.id === tabId)) {
            targetRowIndex = r;
            targetSectionIndex = s;
            break outer;
          }
        }
      }
      if (targetRowIndex === -1 || targetSectionIndex === -1) {
        // 혹은 찾지 못하면, 첫 Row 첫 Section에 넣어도 됨
        return state;
      }

      // 해당 섹션에 복제 탭 삽입 + 활성화
      const rowToUpdate = state.rows[targetRowIndex];
      const sectionToUpdate = rowToUpdate.sections[targetSectionIndex];
      const updatedSection = {
        ...sectionToUpdate,
        tabs: [...sectionToUpdate.tabs, duplicatedTab],
        activeTabKey: duplicatedKey,
      };
      const updatedSections = adjustSectionWidths(
        rowToUpdate.sections.map((sec, i) =>
          i === targetSectionIndex ? updatedSection : sec
        )
      );
      const updatedRow = { ...rowToUpdate, sections: updatedSections };

      const updatedRows = [...state.rows];
      updatedRows[targetRowIndex] = updatedRow;

      return {
        ...state,
        openedTabs: newOpenedTabs,
        rows: updatedRows,
      };
    }),

  // ------------------------
  // 행/섹션 추가/삭제
  // ------------------------
  addRow: () =>
    set((state) => {
      const existingIds = state.rows.map((r) => r.id);
      const newRowId = generateUniqueId("row", existingIds);

      const newRow: TabRow = {
        id: newRowId,
        sections: [
          {
            id: "section-1",
            tabs: [],
            width: 100,
            activeTabKey: null,
          },
        ],
      };

      return { ...state, rows: [...state.rows, newRow] };
    }),

  removeRow: (rowId) =>
    set((state) => {
      if (state.rows.length <= 1) return state;

      const rowToRemove = state.rows.find((r) => r.id === rowId);
      if (!rowToRemove) return state;

      // 제거되는 row의 탭들을 row-1 의 default 섹션에 합쳐 넣는 예시 로직
      const baseRowIndex = state.rows.findIndex((r) => r.id === "row-1");
      if (baseRowIndex === -1) return state;

      const baseDefaultSecIndex = state.rows[baseRowIndex].sections.findIndex(
        (sec) => sec.id === "default"
      );
      if (baseDefaultSecIndex === -1) return state;

      // 제거되는 row에 존재하는 모든 탭들
      const allTabs = rowToRemove.sections.flatMap((s) => s.tabs);

      // baseRow의 default 섹션에 합쳐넣기
      const updatedBaseSections = [...state.rows[baseRowIndex].sections];
      const baseDefaultSec = updatedBaseSections[baseDefaultSecIndex];

      const mergedSection = {
        ...baseDefaultSec,
        tabs: [...baseDefaultSec.tabs, ...allTabs],
        // 혹시 합쳐진 탭 중 가장 마지막 걸 활성화하도록 할 수도 있음
        activeTabKey: allTabs.length
          ? allTabs[allTabs.length - 1].uniqueKey
          : baseDefaultSec.activeTabKey,
      };
      updatedBaseSections[baseDefaultSecIndex] = mergedSection;

      // row-1 갱신
      let newRows = state.rows.map((r, i) =>
        i === baseRowIndex
          ? {
              ...r,
              sections: adjustSectionWidths(updatedBaseSections),
            }
          : r
      );

      // 실제로 rowToRemove는 제거
      newRows = newRows.filter((r) => r.id !== rowId);

      return { ...state, rows: newRows };
    }),

  addSection: (rowId, tabId) =>
    set((state) => {
      const rowIndex = state.rows.findIndex((r) => r.id === rowId);
      if (rowIndex === -1) return state;

      const row = state.rows[rowIndex];
      // 이미 섹션이 2개 이상이면 추가 X (혹은 원하는 만큼 늘리려면 조건 변경)
      if (row.sections.length >= 2) {
        return state;
      }

      const newSectionId = `section-${Date.now()}`;
      let maybeTab: TabItem | null = null;
      if (tabId) {
        maybeTab = state.openedTabs.find((t) => t.id === tabId) || null;
      }

      const newSection: TabSection = {
        id: newSectionId,
        tabs: maybeTab ? [maybeTab] : [],
        width: 50,
        activeTabKey: maybeTab ? maybeTab.uniqueKey : null,
      };

      let updatedSections = row.sections.map((sec) => ({
        ...sec,
        width: 50,
      }));
      updatedSections.push(newSection);

      const updatedRow = { ...row, sections: updatedSections };
      const newRows = [...state.rows];
      newRows[rowIndex] = updatedRow;

      return { ...state, rows: newRows };
    }),

  removeSection: (rowId, sectionId) =>
    set((state) => {
      const rowIndex = state.rows.findIndex((r) => r.id === rowId);
      if (rowIndex === -1) return state;

      const row = state.rows[rowIndex];
      if (row.sections.length <= 1) return state;

      const removedSection = row.sections.find((s) => s.id === sectionId);
      if (!removedSection) return state;

      let newSections = row.sections
        .filter((s) => s.id !== sectionId)
        .map((sec) => {
          // 만약 'default' 섹션이면 제거 섹션의 탭을 합쳐버리기
          if (sec.id === "default") {
            const mergedTabs = [...sec.tabs, ...removedSection.tabs];
            return {
              ...sec,
              tabs: mergedTabs,
              activeTabKey: mergedTabs.length
                ? mergedTabs[mergedTabs.length - 1].uniqueKey
                : null,
            };
          }
          return sec;
        });

      newSections = adjustSectionWidths(newSections);
      const updatedRow = { ...row, sections: newSections };
      const newRows = [...state.rows];
      newRows[rowIndex] = updatedRow;

      return { ...state, rows: newRows };
    }),

  // ------------------------
  // 드래그앤드롭으로 섹션 이동
  // ------------------------
  moveTabToSection: (tabId, targetRowId, targetSectionId, draggedTabKey) =>
    set((state) => {
      // 우선 옮겨질 탭
      const movedTab = state.openedTabs.find(
        (t) => t.id === tabId && t.uniqueKey === draggedTabKey
      );
      if (!movedTab) return state;

      // 모든 row/section에서 해당 탭 제거
      const updatedRows = state.rows.map((row) => {
        return {
          ...row,
          sections: row.sections.map((sec) => {
            const filteredTabs = sec.tabs.filter(
              (t) => !(t.id === tabId && t.uniqueKey === draggedTabKey)
            );
            // 만약 activeTabKey가 제거된 탭이면 새로 바꿔야 함
            let newActive = sec.activeTabKey;
            if (sec.activeTabKey === draggedTabKey) {
              const last = filteredTabs[filteredTabs.length - 1];
              newActive = last ? last.uniqueKey : null;
            }
            return { ...sec, tabs: filteredTabs, activeTabKey: newActive };
          }),
        };
      });

      // 대상 섹션에 탭 추가
      const targetRowIndex = updatedRows.findIndex((r) => r.id === targetRowId);
      if (targetRowIndex === -1) return state;

      const targetRow = updatedRows[targetRowIndex];
      const targetSecIndex = targetRow.sections.findIndex(
        (s) => s.id === targetSectionId
      );
      if (targetSecIndex === -1) return state;

      const targetSec = targetRow.sections[targetSecIndex];
      const newTabs = [...targetSec.tabs, movedTab];

      const updatedTargetSec = {
        ...targetSec,
        tabs: newTabs,
        activeTabKey: movedTab.uniqueKey, // 새로 옮겨온 탭 활성화
      };

      const replacedSections = [...targetRow.sections];
      replacedSections[targetSecIndex] = updatedTargetSec;

      updatedRows[targetRowIndex] = {
        ...targetRow,
        sections: adjustSectionWidths(replacedSections),
      };

      // 탭 그룹에서도 해당 탭 제거
      const updatedGroups = state.tabGroups
        .map((g) => ({
          ...g,
          tabs: g.tabs.filter(
            (t) => !(t.id === tabId && t.uniqueKey === draggedTabKey)
          ),
        }))
        .filter((g) => g.tabs.length > 0);

      return {
        ...state,
        rows: updatedRows,
        tabGroups: updatedGroups,
      };
    }),

  updateSectionWidth: (rowId, sectionId, width) =>
    set((state) => {
      const newRows = state.rows.map((row) => {
        if (row.id !== rowId) return row;
        const newSections = row.sections.map((sec) =>
          sec.id === sectionId ? { ...sec, width } : sec
        );
        return { ...row, sections: newSections };
      });
      return { ...state, rows: newRows };
    }),

  // ------------------------
  // 탭 그룹 로직
  // ------------------------
  addTabGroup: (tabId) =>
    set((state) => {
      const tab = state.openedTabs.find((t) => t.id === tabId);
      if (!tab) return state;

      // 모든 섹션에서 해당 탭 제거
      const updatedRows = state.rows.map((row) => {
        const newSecs = row.sections.map((sec) => {
          const newTabs = sec.tabs.filter((t) => t.id !== tabId);
          // activeTabKey도 같이 제거 필요
          let newActive = sec.activeTabKey;
          if (sec.activeTabKey && sec.activeTabKey === tab.uniqueKey) {
            const lastT = newTabs[newTabs.length - 1];
            newActive = lastT ? lastT.uniqueKey : null;
          }
          return { ...sec, tabs: newTabs, activeTabKey: newActive };
        });
        return {
          ...row,
          sections: adjustSectionWidths(
            newSecs.filter(
              (s) => s.id === "default" || s.tabs.length > 0 // 필요시 조정
            )
          ),
        };
      });

      const existingIds = state.tabGroups.map((g) => g.id);
      const newGroupId = generateUniqueId("group", existingIds);

      const newGroup: TabGroup = {
        id: newGroupId,
        tabs: [tab],
        position: { x: 0, y: 0 },
      };

      return {
        ...state,
        rows: updatedRows,
        tabGroups: [...state.tabGroups, newGroup],
      };
    }),

  removeTabGroup: (groupId) =>
    set((state) => {
      const group = state.tabGroups.find((g) => g.id === groupId);
      if (!group) return state;

      const rowIndex = state.rows.findIndex((r) => r.id === "row-1");
      if (rowIndex === -1) return state;

      const defaultSecIndex = state.rows[rowIndex].sections.findIndex(
        (sec) => sec.id === "default"
      );
      if (defaultSecIndex === -1) return state;

      // 그룹 내 탭들을 row-1의 default 섹션에 합치기
      const baseSection = state.rows[rowIndex].sections[defaultSecIndex];
      const mergedSection = {
        ...baseSection,
        tabs: [...baseSection.tabs, ...group.tabs],
        activeTabKey:
          group.tabs.length > 0
            ? group.tabs[group.tabs.length - 1].uniqueKey
            : baseSection.activeTabKey,
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
        ...state,
        rows: newRows,
        tabGroups: state.tabGroups.filter((g) => g.id !== groupId),
      };
    }),

  moveTabToGroup: (tabId, groupId) =>
    set((state) => {
      const tab = state.openedTabs.find((t) => t.id === tabId);
      if (!tab) return state;

      // 모든 섹션에서 해당 탭 제거
      const updatedRows = state.rows.map((row) => {
        const newSecs = row.sections.map((sec) => {
          const filteredTabs = sec.tabs.filter((t) => t.id !== tabId);
          let newActive = sec.activeTabKey;
          if (sec.activeTabKey === tab.uniqueKey) {
            const lastT = filteredTabs[filteredTabs.length - 1];
            newActive = lastT ? lastT.uniqueKey : null;
          }
          return { ...sec, tabs: filteredTabs, activeTabKey: newActive };
        });
        return {
          ...row,
          sections: adjustSectionWidths(
            newSecs.filter(
              (s) => s.id === "default" || s.tabs.length > 0 // 필요시 조정
            )
          ),
        };
      });

      // 그룹에도 삽입
      const updatedGroups = state.tabGroups.map((g) => {
        if (g.id === groupId) {
          return { ...g, tabs: [...g.tabs, tab] };
        }
        return {
          ...g,
          tabs: g.tabs.filter((t) => t.id !== tabId),
        };
      });

      return {
        ...state,
        rows: updatedRows,
        tabGroups: updatedGroups,
      };
    }),

  // ------------------------
  // 캠페인 관련 탭 열기 (예시)
  // ------------------------
  openCampaignManagerForUpdate: (campaignId: string, label: string) =>
    set((state) => {
      // 이미 열려있는 캠페인관리( id=2 ) 탭 중 하나를 찾는다(원하는 로직에 맞춰 변형 가능)
      const existingTab = state.openedTabs.find((tab) => tab.id === 2);

      if (existingTab) {
        // 해당 탭 정보를 갱신 (campaignId, title 등)
        const updatedTab = {
          ...existingTab,
          campaignId: campaignId,
          title:
            label !== "" ? `캠페인 관리 - ${label}` : `캠페인 관리(업데이트)`,
        };

        // openedTabs 갱신
        const updatedTabs = state.openedTabs.map((t) =>
          t.uniqueKey === existingTab.uniqueKey ? updatedTab : t
        );

        // 이 탭이 들어있는 섹션도 갱신
        const updatedRows = state.rows.map((row) => ({
          ...row,
          sections: row.sections.map((section) => {
            const newTabs = section.tabs.map((t) =>
              t.uniqueKey === existingTab.uniqueKey ? updatedTab : t
            );
            return {
              ...section,
              tabs: newTabs,
              // activeTabKey도 바꿀지 여부는 자유
            };
          }),
        }));

        return {
          ...state,
          openedTabs: updatedTabs,
          rows: updatedRows,
        };
      }

      // 새 탭 생성
      const newTabKey = `2-${campaignId}-${Date.now()}`;
      const newTab: TabItem = {
        id: 2,
        uniqueKey: newTabKey,
        title: label !== "" ? `캠페인 관리 - ${label}` : `캠페인 관리`,
        icon: "header-menu/캠페인관리.svg",
        href: "/campaign",
        campaignId,
        content: null,
      };

      // => addTab 로직 그대로 활용
      get().addTab(newTab);
      return state;
    }),

  openCampaignProgressInfo: (campaignId: string, label: string) =>
    set((state) => {
      // 기존 "총진행상황(id=4)" 탭들 모두 제거
      const oldTabs = state.openedTabs.filter((tab) => tab.id === 4);
      oldTabs.forEach((ot) => {
        get().removeTab(ot.id, ot.uniqueKey);
      });

      // 새 탭 추가
      const newTabKey = `4-${campaignId}-${Date.now()}`;
      const newTab: TabItem = {
        id: 4,
        uniqueKey: newTabKey,
        title: label !== "" ? `총진행상황 - ${label}` : "총진행상황",
        icon: "/header-menu/총진행상황.svg",
        href: "/status",
        content: null,
        campaignId,
      };

      get().addTab(newTab);
      return state;
    }),

  openRebroadcastSettings: (campaignId: string, label: string) =>
    set((state) => {
      // 기존 재발신 탭들( id=20 ) 제거
      const oldRebroadTabs = state.openedTabs.filter((t) => t.id === 20);
      oldRebroadTabs.forEach((ot) => {
        get().removeTab(ot.id, ot.uniqueKey);
      });

      const newTabKey = `rebroadcast-${campaignId}-${Date.now()}`;
      const newTab: TabItem = {
        id: 20,
        uniqueKey: newTabKey,
        title: label ? `재발신 설정 - ${label}` : "재발신 설정",
        icon: "/header-menu/발신진행상태.svg",
        href: "/rebroadcast",
        campaignId,
        content: null,
      };

      get().addTab(newTab);
      return state;
    }),
}));
