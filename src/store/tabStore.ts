// src/store/tabStore.ts
"use client";

import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import React from "react";
import { menuItems } from "@/widgets/header/model/menuItems";
import { simulateMenuClick } from "@/widgets/header/utils";
import { contextMenuItems } from "@/widgets/header/model/contextMenuItems";

export interface TabItem {
  id: number;
  uniqueKey: string;
  title: string;
  icon?: string | any
  href?: string;
  content?: React.ReactNode;
  campaignId?: string;
  campaignName?: string;
  params?: any;
}

export interface TabSection {
  id: string;
  tabs: TabItem[];
  width: number;
  // 섹션 단위 활성 탭
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

  // 삭제된 캠페인 ID (단일 값)
  deletedCampaignIdAtSidebar: string | null;
  // 삭제된 캠페인 ID 설정 메소드
  setDeletedCampaignId: (campaignId: string | null) => void;

  // 전역 단일 activeTabId/activeTabKey (드래그 중 Overlay 표시 등에 활용)
  activeTabId: number | null;
  activeTabKey: string | null;

  // 스킬 할당에 사용하던 부가 정보들
  campaignIdForUpdateFromSideMenu: string | null;

  // 캠페인 복사용 아이디
  campaignIdForCopyCampaign: string | null;

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
  setCampaignIdForCopyCampaign: (id: string | null) => void;

  // -----------------------------
  // 아래는 탭 관련 로직
  // -----------------------------
  getTabCountById: (menuId: number) => number;

  // 새 탭을 열 때 사용
  addTab: (tab: TabItem) => void;
  addTabCurrentOnly: (tab: TabItem) => void;

  addMultiTab: (tab: TabItem) => void;
  addOnlyTab: (tab: TabItem, matchFn: (t: TabItem) => boolean) => void; // 조건에 맞는 탭 제거 후 추가

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

  // ─────────────────────────────
  // 추가: 전역 activeTab을 설정하는 함수
  // ─────────────────────────────
  setActiveTab: (tabId: number, uniqueKey: string) => void;
  simulateHeaderMenuClick: (menuId: number) => void;

  // 화면 분할 관련 상태 추가
  splitMode: boolean;
  splitLayout: 'none' | 'vertical';

  // 화면 분할 관련 메서드 추가
  setSplitMode: (mode: boolean) => void;
  setSplitLayout: (layout: 'none' | 'vertical') => void;

  // 다른 탭 닫기 (현재 활성화된 탭 빼고 모두 닫기), 모든탭닫기
  closeOtherTabs: (rowId: string, sectionId: string, exceptTabKey: string) => void;
  closeAllTabs: (rowId: string, sectionId: string) => void;

  // 기존 탭 닫기
  removeExistingTabsByTabId: (tabId: number) => void;

  // 운영설정용 오픈 sectionId 설정
  openOperationSectionId: string;
  setOpenOperationSectionId: (id: string) => void;

  moveTabWithinSection: (
    tabId: number,
    tabKey: string,
    rowId: string,
    sectionId: string,
    destinationIndex: number
  ) => void;

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

export const useTabStore = create<TabLayoutStore>()(
  devtools(
    persist(
      (set, get) => ({
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

        // 전역 activeTabID/key (드래그 중 Overlay 표시 등에 사용)
        activeTabId: null,
        activeTabKey: null,

        counselorSkillAssignmentInfo: {
          tenantId: null,
          counselorId: null,
          counselorName: null,
        },
        campaignIdForUpdateFromSideMenu: null,
        campaignIdForCopyCampaign: null,

        splitMode: false,
        splitLayout: 'none',

        // 삭제된 캠페인 ID 초기값
        deletedCampaignIdAtSidebar: null,

        // 삭제된 캠페인 ID 설정 메소드
        setDeletedCampaignId: (campaignId: string | null) =>
          set({ deletedCampaignIdAtSidebar: campaignId }),

        setSplitMode: (mode) => set({ splitMode: mode }),
        setSplitLayout: (layout) => set({ splitLayout: layout }),

        // 헤더 메뉴 클릭
        simulateHeaderMenuClick: (menuId: number, campaignId?: string, label?: string) => {
          // 먼저 헤더 메뉴에서 찾기
          let menuItem = menuItems.find(item => item.id === menuId);

          // 없으면 컨텍스트 메뉴에서 찾기
          if (!menuItem) {
            const contextItem = contextMenuItems.find(item => item.id === menuId);
            // 컨텍스트 아이템을 MenuItem 형식으로 변환 (menuId 추가)
            if (contextItem) {
              menuItem = {
                ...contextItem,
                menuId: contextItem.id, // id를 menuId로 복사
              };
            }
          }

          if (!menuItem) return;

          // 기존 탭들 제거
          const existingTabs = get().openedTabs.filter(tab => tab.id === menuId);
          existingTabs.forEach(tab => {
            get().removeTab(tab.id, tab.uniqueKey);
          });

          // 새로운 탭 추가
          const newTabKey = `${menuId}-${campaignId ? campaignId : ''}-${Date.now()}`;
          const newTab = {
            ...menuItem,
            uniqueKey: newTabKey,
            content: menuItem.content || null,
            campaignId: campaignId || undefined,
            title: label ? `${menuItem.title} - ${label}` : menuItem.title
          };
          get().addTab(newTab);

          // 탭을 추가한 후 활성 탭 설정
          get().setActiveTab(menuId, newTabKey);
          get().setCampaignIdForUpdateFromSideMenu(campaignId || null);
        },

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

        setCampaignIdForCopyCampaign: (id) =>
          set({ campaignIdForCopyCampaign: id }),

        // 특정 메뉴 id(예: 1,2,3...) 탭 개수 세기
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
            // 새로운 활성 탭 찾기: 타입 안전성을 위해 find 메서드 결과 타입을 명시
            const activeTab = state.rows
              .find(row => row.id === rowId)
              ?.sections
              .find(section => section.id === sectionId)
              ?.tabs
              .find((tab): tab is TabItem => tab.uniqueKey === tabUniqueKey);  // 타입 가드 추가

            // rows 업데이트
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

            // 헤더의 활성 탭 상태도 함께 업데이트
            return {
              ...state,
              rows: newRows,
              activeTabId: activeTab ? activeTab.id : state.activeTabId,
              activeTabKey: activeTab ? activeTab.uniqueKey : state.activeTabKey
            };
          }),

        // ------------------------
        // 새 탭 열기
        // ------------------------
        addTab: (tab) =>
          set((state) => {
            const isAlreadyOpened = state.openedTabs.some(
              (t) => t.id === tab.id && t.uniqueKey === tab.uniqueKey
            );
            if (isAlreadyOpened) {
              return state;
            }

            const newOpenedTabs = [...state.openedTabs, tab];

            const [firstRow] = state.rows;
            if (!firstRow) return state;
            const [firstSection] = firstRow.sections;
            if (!firstSection) return state;

            const updatedSection = {
              ...firstSection,
              tabs: [...firstSection.tabs, tab],
              activeTabKey: tab.uniqueKey,
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

        addMultiTab: (tab: TabItem) =>
          set((state) => {
            // 중복 검사 없이 바로 추가
            const newOpenedTabs = [...state.openedTabs, tab];

            const [firstRow] = state.rows;
            if (!firstRow) return state;
            const [firstSection] = firstRow.sections;
            if (!firstSection) return state;

            const updatedSection = {
              ...firstSection,
              tabs: [...firstSection.tabs, tab],
              activeTabKey: tab.uniqueKey,
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

        addOnlyTab: (tab: TabItem, matchFn: (t: TabItem) => boolean) => {
          const { openedTabs, removeTab, addTab } = get();

          // 조건에 맞는 기존 탭 제거
          openedTabs
            .filter(matchFn)
            .forEach(t => {
              removeTab(t.id, t.uniqueKey);
            });

          // 새로운 탭 추가
          addTab(tab);
        },

        removeTab: (tabId, uniqueKey) =>
          set((state) => {
            // 1. 먼저 제거된 탭이 활성화된 탭인지 확인
            const isRemovingActiveTab = state.activeTabKey === uniqueKey;

            // 2. 탭 제거 후 남아있는 탭 목록 생성
            const newTabs = state.openedTabs.filter(
              (t) => !(t.id === tabId && t.uniqueKey === uniqueKey)
            );

            // 3. 섹션별 처리를 위한 행 업데이트
            const updatedRows = state.rows.map((row) => ({
              ...row,
              sections: row.sections.map((sec) => {
                const newSectionTabs = sec.tabs.filter(
                  (t) => !(t.id === tabId && t.uniqueKey === uniqueKey)
                );
                return {
                  ...sec,
                  tabs: newSectionTabs,
                  activeTabKey:
                    sec.activeTabKey === uniqueKey
                      ? newSectionTabs.length > 0
                        ? newSectionTabs[newSectionTabs.length - 1].uniqueKey
                        : null
                      : sec.activeTabKey,
                };
              }),
            }));

            // 4. 탭 그룹 업데이트
            const updatedGroups = state.tabGroups
              .map((group) => ({
                ...group,
                tabs: group.tabs.filter(
                  (t) => !(t.id === tabId && t.uniqueKey === uniqueKey)
                ),
              }))
              .filter((g) => g.tabs.length > 0);

            // 5. 새로운 활성 탭 결정 (제거된 탭이 활성 탭이었을 경우에만)
            let newActiveTabId = state.activeTabId;
            let newActiveTabKey = state.activeTabKey;

            if (isRemovingActiveTab && newTabs.length > 0) {
              // 가장 최신 탭을 활성 탭으로 설정
              const latestTab = newTabs[newTabs.length - 1];
              newActiveTabId = latestTab.id;
              newActiveTabKey = latestTab.uniqueKey;

              // 해당 탭이 속한 섹션도 활성화
              updatedRows.forEach(row => {
                row.sections.forEach(sec => {
                  const tabInSection = sec.tabs.find(t => t.uniqueKey === newActiveTabKey);
                  if (tabInSection) {
                    sec.activeTabKey = newActiveTabKey;
                  }
                });
              });
            } else if (isRemovingActiveTab && newTabs.length === 0) {
              // 남은 탭이 없으면 활성 탭 정보를 null로 설정
              newActiveTabId = null;
              newActiveTabKey = null;
            }

            return {
              ...state,
              openedTabs: newTabs,
              rows: updatedRows,
              tabGroups: updatedGroups,
              activeTabId: newActiveTabId,
              activeTabKey: newActiveTabKey
            };
          }),

        // ------------------------
        // 탭 복제
        // ------------------------
        duplicateTab: (tabId) =>
          set((state) => {
            const originalTab = state.openedTabs.find((t) => t.id === tabId);
            if (!originalTab) return state;

            const duplicatedKey = `tab-${tabId}-${Date.now()}`;
            const duplicatedTab = { ...originalTab, uniqueKey: duplicatedKey };

            get().addTab(duplicatedTab);
            return state;
          }),

        // ------------------------
        // 행 추가/제거
        // ------------------------
        addRow: () =>
          set((state) => {
            const existingIds = state.rows.map((r) => r.id);
            const newRowId = generateUniqueId("row", existingIds);
            return {
              ...state,
              rows: [
                ...state.rows,
                {
                  id: newRowId,
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
            };
          }),

        removeRow: (rowId) =>
          set((state) => {
            if (state.rows.length <= 1) return state;
            return {
              ...state,
              rows: state.rows.filter((r) => r.id !== rowId),
            };
          }),

        // ------------------------
        // 섹션 추가/제거
        // ------------------------
        addSection: (rowId, tabId) =>
          set((state) => {
            const updatedRows = state.rows.map((row) =>
              row.id === rowId
                ? {
                  ...row,
                  sections: adjustSectionWidths([
                    ...row.sections,
                    {
                      id: generateUniqueId("section", row.sections.map((s) => s.id)),
                      tabs: [],
                      width: 0,
                      activeTabKey: null,
                    },
                  ]),
                }
                : row
            );
            return { ...state, rows: updatedRows };
          }),

        removeSection: (rowId, sectionId) =>
          set((state) => {
            const updatedRows = state.rows.map((row) =>
              row.id === rowId
                ? {
                  ...row,
                  sections: adjustSectionWidths(
                    row.sections.filter((s) => s.id !== sectionId)
                  ),
                }
                : row
            );
            return { ...state, rows: updatedRows };
          }),

        // ------------------------
        // 드래그앤드롭
        // ------------------------
        moveTabToSection: (
          tabId: number,
          targetRowId: string,
          targetSectionId: string,
          draggedTabKey: string
        ) =>
          set((state) => {
            const movedTab = state.openedTabs.find(
              (t) => t.id === tabId && t.uniqueKey === draggedTabKey
            );
            if (!movedTab) return state;

            const updatedRows = state.rows.map((row) => ({
              ...row,
              sections: row.sections.map((sec) => ({
                ...sec,
                tabs: sec.tabs.filter(
                  (t) => !(t.id === tabId && t.uniqueKey === draggedTabKey)
                ),
                activeTabKey:
                  sec.activeTabKey === draggedTabKey
                    ? sec.tabs.length > 1
                      ? sec.tabs[sec.tabs.length - 2].uniqueKey
                      : null
                    : sec.activeTabKey,
              })),
            }));

            const targetRowIndex = updatedRows.findIndex((r) => r.id === targetRowId);
            if (targetRowIndex === -1) return state;

            const targetRow = updatedRows[targetRowIndex];
            const targetSectionIndex = targetRow.sections.findIndex(
              (s) => s.id === targetSectionId
            );
            if (targetSectionIndex === -1) return state;

            const targetSec = targetRow.sections[targetSectionIndex];
            const newTabs = [...targetSec.tabs, movedTab];

            const updatedTargetSec = {
              ...targetSec,
              tabs: newTabs,
              activeTabKey: movedTab.uniqueKey,
            };

            const replacedSections = [...targetRow.sections];
            replacedSections[targetSectionIndex] = updatedTargetSec;

            updatedRows[targetRowIndex] = {
              ...targetRow,
              sections: adjustSectionWidths(replacedSections),
            };

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
              activeTabId: movedTab.id,
              activeTabKey: movedTab.uniqueKey,
            };
          }),

        updateSectionWidth: (rowId, sectionId, width) =>
          set((state) => ({
            ...state,
            rows: state.rows.map((row) =>
              row.id === rowId
                ? {
                  ...row,
                  sections: row.sections.map((sec) =>
                    sec.id === sectionId ? { ...sec, width } : sec
                  ),
                }
                : row
            ),
          })),

        // ------------------------
        // 탭 그룹
        // ------------------------
        addTabGroup: (tabId) =>
          set((state) => {
            const tab = state.openedTabs.find((t) => t.id === tabId);
            if (!tab) return state;

            const numericTabId =
              typeof tabId === "string" && String(tabId).startsWith("tab-")
                ? parseInt(String(tabId).replace("tab-", ""))
                : typeof tabId === "number"
                  ? tabId
                  : 0;

            const updatedRows = state.rows.map((row) => {
              let newSecs = row.sections.map((sec) => ({
                ...sec,
                tabs: sec.tabs.filter((t) => t.id !== numericTabId),
              }));
              newSecs = newSecs.filter(
                (sec) => sec.id === "default" || sec.tabs.length > 0
              );
              return { ...row, sections: adjustSectionWidths(newSecs) };
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

            const numericTabId =
              typeof tabId === "string"
                ? parseInt(String(tabId).replace("tab-", ""))
                : typeof tabId === "number"
                  ? tabId
                  : 0;

            const updatedRows = state.rows.map((row) => {
              let newSecs = row.sections.map((sec) => ({
                ...sec,
                tabs: sec.tabs.filter((t) => t.id !== numericTabId),
              }));
              newSecs = newSecs.filter(
                (sec) => sec.id === "default" || sec.tabs.length > 0
              );
              return { ...row, sections: adjustSectionWidths(newSecs) };
            });

            const updatedGroups = state.tabGroups.map((g) => {
              if (g.id === groupId) {
                return { ...g, tabs: [...g.tabs, tab] };
              }
              return { ...g, tabs: g.tabs.filter((t) => t.id !== numericTabId) };
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
        openCampaignManagerForUpdate: (campaignId, label) =>
          set((state) => {
            const existingTab = state.openedTabs.find((tab) => tab.id === 2);

            if (existingTab) {
              const updatedTab = {
                ...existingTab,
                campaignId: campaignId,
                title: label !== "" ? `캠페인 관리 - ${label}` : `캠페인 관리(업데이트)`,
              };

              const updatedTabs = state.openedTabs.map((t) =>
                t.uniqueKey === existingTab.uniqueKey ? updatedTab : t
              );

              const updatedRows = state.rows.map((row) => ({
                ...row,
                sections: row.sections.map((section) => {
                  const newTabs = section.tabs.map((t) =>
                    t.uniqueKey === existingTab.uniqueKey ? updatedTab : t
                  );
                  return {
                    ...section,
                    tabs: newTabs,
                  };
                }),
              }));

              return {
                ...state,
                openedTabs: updatedTabs,
                rows: updatedRows,
              };
            }

            // 캠페인 관리 메뉴 아이템 찾기
            const campaignMenuItem = menuItems.find(item => item.id === 3);
            if (!campaignMenuItem) return state;

            // 기존 탭들 제거
            // const existingTabs = state.openedTabs.filter(tab => tab.id === 3);
            // existingTabs.forEach(tab => {
            //   get().removeTab(tab.id, tab.uniqueKey);
            // });

            // 새로운 탭 생성 및 추가
            const newTabKey = `3-${campaignId}-${Date.now()}`;
            const newTab = {
              ...campaignMenuItem,
              uniqueKey: newTabKey,
              title: label !== "" ? `통합 모니터터 - ${label}` : `통합 모니터`,
              campaignId,
              content: null,
            };

            // 탭 추가 및 활성화
            get().addTab(newTab);
            get().setActiveTab(2, newTabKey);
            get().setCampaignIdForUpdateFromSideMenu(null);

            return state;
          }),

        openCampaignProgressInfo: (campaignId, label) =>
          set((state) => {
            const oldTabs = state.openedTabs.filter((tab) => tab.id === 4);
            oldTabs.forEach((ot) => {
              get().removeTab(ot.id, ot.uniqueKey);
            });

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

        openRebroadcastSettings: (campaignId, label) =>
          set((state) => {
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

        // ─────────────────────────────
        // 추가: 전역 activeTab을 설정하는 함수
        // ─────────────────────────────
        setActiveTab: (tabId, uniqueKey) => {
          set({
            activeTabId: tabId,
            activeTabKey: uniqueKey,
          });
        },
        // 다른 탭 닫기 (현재 활성화된 탭 빼고 모두 닫기)
        closeOtherTabs: (rowId, sectionId, exceptTabKey) =>
          set((state) => {
            // 예외 탭 찾기
            const row = state.rows.find(r => r.id === rowId);
            if (!row) return state;

            const section = row.sections.find(s => s.id === sectionId);
            if (!section) return state;

            const keepTab = section.tabs.find(tab => tab.uniqueKey === exceptTabKey);
            if (!keepTab) return state;

            // 제거할 탭들의 uniqueKey 목록
            const tabKeysToRemove = section.tabs
              .filter(tab => tab.uniqueKey !== exceptTabKey)
              .map(tab => tab.uniqueKey);

            // openedTabs에서 해당 탭들 필터링
            const newOpenedTabs = state.openedTabs.filter(
              tab => !tabKeysToRemove.includes(tab.uniqueKey)
            );

            // 행 업데이트
            const updatedRows = state.rows.map(row => {
              if (row.id !== rowId) return row;

              return {
                ...row,
                sections: row.sections.map(sec => {
                  if (sec.id !== sectionId) return sec;

                  return {
                    ...sec,
                    tabs: [keepTab],
                    activeTabKey: keepTab.uniqueKey
                  };
                })
              };
            });

            return {
              ...state,
              openedTabs: newOpenedTabs,
              rows: updatedRows
            };
          }),

        // 모든 탭 닫기 (디폴트 상태로 되돌리기)
        closeAllTabs: (rowId, sectionId) =>
          set((state) => {
            // 행과 섹션 찾기
            const row = state.rows.find(r => r.id === rowId);
            if (!row) return state;

            const section = row.sections.find(s => s.id === sectionId);
            if (!section) return state;

            // 제거할 탭들의 uniqueKey 목록
            const tabKeysToRemove = section.tabs.map(tab => tab.uniqueKey);

            // openedTabs에서 해당 탭들 필터링
            const newOpenedTabs = state.openedTabs.filter(
              tab => !tabKeysToRemove.includes(tab.uniqueKey)
            );

            // 행 업데이트 - 탭을 모두 비우고 activeTabKey를 null로 설정
            const updatedRows = state.rows.map(row => {
              if (row.id !== rowId) return row;

              return {
                ...row,
                sections: row.sections.map(sec => {
                  if (sec.id !== sectionId) return sec;

                  return {
                    ...sec,
                    tabs: [], // 빈 배열로 설정
                    activeTabKey: null // null로 설정하여 디폴트 화면 표시
                  };
                })
              };
            });

            return {
              ...state,
              openedTabs: newOpenedTabs,
              rows: updatedRows,
              // 전역 activeTabId와 activeTabKey도 null로 설정
              activeTabId: null,
              activeTabKey: null,
              openOperationSectionId: "section1" // 운영설정용 sectionId 초기화
            };
          }),

        moveTabWithinSection: (
          tabId: number,
          tabKey: string,
          rowId: string,
          sectionId: string,
          destinationIndex: number
        ) =>
          set((state) => {
            const row = state.rows.find(r => r.id === rowId);
            if (!row) return state;
            const section = row.sections.find(s => s.id === sectionId);
            if (!section) return state;

            const tabIndex = section.tabs.findIndex(t => t.id === tabId && t.uniqueKey === tabKey);
            if (tabIndex === -1) return state;

            const newTabs = [...section.tabs];
            const [movedTab] = newTabs.splice(tabIndex, 1);
            newTabs.splice(destinationIndex, 0, movedTab);

            const updatedRows = state.rows.map(r =>
              r.id !== rowId
                ? r
                : {
                  ...r,
                  sections: r.sections.map(s =>
                    s.id !== sectionId
                      ? s
                      : { ...s, tabs: newTabs, activeTabKey: tabKey }
                  ),
                }
            );

            return {
              ...state,
              rows: updatedRows,
              activeTabId: tabId,
              activeTabKey: tabKey,
            };
          }),

        addTabCurrentOnly: (tab) =>
          set((state) => {
            // 1. 동일한 ID를 가진 기존 탭들을 찾아서 모두 제거
            const tabsToRemove = state.openedTabs.filter(t => t.id === tab.id);

            // 각 탭 개별적으로 제거
            tabsToRemove.forEach(tabToRemove => {
              // removeTab 로직을 직접 여기서 구현 (내부에서 get().removeTab 호출 시 비동기 문제 발생 가능)
              const newTabs = state.openedTabs.filter(
                t => !(t.id === tabToRemove.id && t.uniqueKey === tabToRemove.uniqueKey)
              );

              const updatedRows = state.rows.map(row => ({
                ...row,
                sections: row.sections.map(sec => {
                  const newSectionTabs = sec.tabs.filter(
                    t => !(t.id === tabToRemove.id && t.uniqueKey === tabToRemove.uniqueKey)
                  );

                  return {
                    ...sec,
                    tabs: newSectionTabs,
                    activeTabKey:
                      sec.activeTabKey === tabToRemove.uniqueKey
                        ? newSectionTabs.length > 0
                          ? newSectionTabs[newSectionTabs.length - 1].uniqueKey
                          : null
                        : sec.activeTabKey,
                  };
                }),
              }));

              state = {
                ...state,
                openedTabs: newTabs,
                rows: updatedRows,
              };
            });

            // 2. 새 탭 추가 (addTab 로직을 직접 가져옴)
            const isAlreadyOpened = state.openedTabs.some(
              t => t.id === tab.id && t.uniqueKey === tab.uniqueKey
            );

            if (isAlreadyOpened) {
              return state;
            }

            const newOpenedTabs = [...state.openedTabs, tab];

            const [firstRow] = state.rows;
            if (!firstRow) return state;

            const [firstSection] = firstRow.sections;
            if (!firstSection) return state;

            const updatedSection = {
              ...firstSection,
              tabs: [...firstSection.tabs, tab],
              activeTabKey: tab.uniqueKey,
            };

            const updatedSections = adjustSectionWidths(
              firstRow.sections.map(sec =>
                sec.id === firstSection.id ? updatedSection : sec
              )
            );

            const updatedRow = { ...firstRow, sections: updatedSections };
            const newRows = state.rows.map(row =>
              row.id === firstRow.id ? updatedRow : row
            );

            return {
              ...state,
              openedTabs: newOpenedTabs,
              rows: newRows,
            };
          }),

        removeExistingTabsByTabId: (tabId: number) => {
          const { openedTabs, removeTab } = get();
          openedTabs
            .filter((tab) => tab.id === tabId)
            .forEach((tab) => {
              removeTab(tab.id, tab.uniqueKey);
            });
        },

        // 운영설정용 추가
        openOperationSectionId: "section1", // 기본값
        setOpenOperationSectionId: (id: string) => set({ openOperationSectionId: id }),
      }),
      {
        name: "tab-store", // localStorage에 저장될 키 이름
        partialize: (state) => ({
          openedTabs: state.openedTabs,
          rows: state.rows,
          tabGroups: state.tabGroups,
          activeTabId: state.activeTabId,
          activeTabKey: state.activeTabKey,
          openSectionId: state.openOperationSectionId,
        }), // 저장할 상태만 선택
      }
    )
  ));