
// // // src/store/tabStore.ts
// // "use client";

// // import { create } from "zustand";
// // import React from "react";
// // import { v4 as uuidv4 } from "uuid";

// // // (기존) Import했던 메뉴 아이템들. 필요 없으면 주석 처리 가능
// // import { menuItems } from "@/widgets/header/model/menuItems";
// // import { contextMenuItems } from "@/widgets/header/model/contextMenuItems";

// // /* ─────────────────────────────
// //     1) [구버전] 인터페이스/타입들
// //    ───────────────────────────── */
// // export interface OldTabItem {
// //   id: number;                // 예: 2, 3...
// //   uniqueKey: string;         // 고유 키
// //   title: string;
// //   icon: string;
// //   href: string;
// //   content: React.ReactNode;
// //   campaignId?: string;
// //   campaignName?: string;
// // }

// // export interface TabSection {
// //   id: string;
// //   tabs: OldTabItem[];
// //   width: number;
// //   activeTabKey: string | null;
// // }

// // export interface TabRow {
// //   id: string;
// //   sections: TabSection[];
// // }

// // export interface TabGroup {
// //   id: string;
// //   tabs: OldTabItem[];
// //   position: { x: number; y: number };
// // }

// // /* ──────────────────────────────────────────
// //     2) [신버전(분할)] 인터페이스/타입들
// //    ────────────────────────────────────────── */
// // // 분할 모드
// // export type SplitMode = "none" | "split";

// // // 신규 탭(분할)에서 쓰는 TabItem
// // export interface NewTabItem {
// //   // 내부적으로 고유 식별자 (string)
// //   id: string;
// //   // 실제 기능(화면)을 구분하는 숫자 ID
// //   tabId: number | null;
// //   // 탭에 표시할 텍스트
// //   title: string;
// //   // 탭 관련 부가 정보
// //   campaignId?: string;
// //   campaignName?: string;
// // }

// // // 분할 영역(Area) 정의
// // export interface TabArea {
// //   id: string;               // 영역 고유 ID
// //   tabs: NewTabItem[];       // 영역에 포함된 탭 목록
// //   activeTabId: string | null; // 현재 활성 탭(위의 id와 매핑)
// // }

// // // 빈 영역 생성 (신버전)
// // function createEmptyArea(): TabArea {
// //   return {
// //     id: uuidv4(),
// //     tabs: [],
// //     activeTabId: null,
// //   };
// // }

// // /* ──────────────────────────────────────────
// //     3) [구버전] 보조 함수들
// //    ────────────────────────────────────────── */
// // function generateUniqueId(prefix: string, existingIds: string[]): string {
// //   let counter = 1;
// //   let newId = `${prefix}-${counter}`;
// //   while (existingIds.includes(newId)) {
// //     counter++;
// //     newId = `${prefix}-${counter}`;
// //   }
// //   return newId;
// // }

// // function adjustSectionWidths(sections: TabSection[]) {
// //   const newWidth = 100 / sections.length;
// //   return sections.map((section) => ({
// //     ...section,
// //     width: newWidth,
// //   }));
// // }

// // /* ──────────────────────────────────────────
// //     4) Zustand 스토어 인터페이스 (통합)
// //    ────────────────────────────────────────── */
// // interface TabLayoutStore {
// //   /* ───────── [구버전 필드] ───────── */
// //   openedTabs: OldTabItem[];
// //   rows: TabRow[];
// //   tabGroups: TabGroup[];

// //   // 구버전 전역 activeTab 정보
// //   activeTabId: number | null;
// //   activeTabKey: string | null;

// //   // 기존에 사용하던 부가 정보들
// //   campaignIdForUpdateFromSideMenu: string | null;
// //   campaignIdForCopyCampaign: string | null;
// //   counselorSkillAssignmentInfo: {
// //     tenantId: string | null;
// //     counselorId: string | null;
// //     counselorName: string | null;
// //   };

// //   // 화면 분할 관련 구버전 값
// //   splitModeOld: boolean; // (구버전) true / false
// //   splitLayout: "none" | "vertical";

// //   // ─────────────────────────────
// //   // 구버전 메서드들
// //   // ─────────────────────────────
// //   simulateHeaderMenuClick: (menuId: number, campaignId?: string, label?: string) => void;

// //   setCounselorSkillAssignmentInfo: (
// //     info: { tenantId: string | null; counselorId: string | null; counselorName: string | null } | null
// //   ) => void;
// //   setCampaignIdForUpdateFromSideMenu: (id: string | null) => void;
// //   setCampaignIdForCopyCampaign: (id: string | null) => void;

// //   getTabCountById: (menuId: number) => number;

// //   addTab: (tab: OldTabItem) => void;
// //   addMultiTab: (tab: OldTabItem) => void;
// //   removeTab: (tabId: number, uniqueKey: string) => void;
// //   setSectionActiveTab: (rowId: string, sectionId: string, tabUniqueKey: string) => void;
// //   duplicateTab: (tabId: number) => void;
// //   addRow: () => void;
// //   removeRow: (rowId: string) => void;
// //   addSection: (rowId: string, tabId?: number) => void;
// //   removeSection: (rowId: string, sectionId: string) => void;
// //   moveTabToSection: (
// //     tabId: number,
// //     targetRowId: string,
// //     targetSectionId: string,
// //     draggedTabKey: string
// //   ) => void;
// //   updateSectionWidth: (rowId: string, sectionId: string, width: number) => void;
// //   addTabGroup: (tabId: number) => void;
// //   removeTabGroup: (groupId: string) => void;
// //   moveTabToGroup: (tabId: number, groupId: string) => void;
// //   openCampaignManagerForUpdate: (campaignId: string, label: string) => void;
// //   openCampaignProgressInfo: (campaignId: string, label: string) => void;
// //   openRebroadcastSettings: (campaignId: string, label: string) => void;

// //   setActiveTab: (tabId: number, uniqueKey: string) => void; // 구버전 전역 activeTab
// //   closeOtherTabs: (rowId: string, sectionId: string, exceptTabKey: string) => void;
// //   closeAllTabs: (rowId: string, sectionId: string) => void;

// //   /* ───────── [신버전 필드] ───────── */
// //   allTabs: NewTabItem[];
// //   areas: TabArea[];
// //   areaWidths: number[];
// //   activeTabGlobalId: string | null; // 신버전 전역 활성 탭
// //   splitMode: SplitMode;             // "none" | "split"

// //   // ─────────────────────────────
// //   // 신버전 메서드들 (V2)
// //   // ─────────────────────────────
// //   openTabV2: (tabId: number, title: string, options?: { campaignId?: string; campaignName?: string }) => void;
// //   closeTabV2: (tabUuid: string) => void;
// //   activateTabV2: (tabUuid: string) => void;

// //   splitTabAreaV2: (count: number) => void;
// //   closeAreaV2: (areaId: string) => void;
// //   moveTabToAreaV2: (tabUuid: string, targetAreaId: string) => void;
// //   reorderTabsV2: (areaId: string, fromIndex: number, toIndex: number) => void;
// //   resizeAreasV2: (areaIndex: number, deltaWidth: number) => void;
// // }

// // /* ──────────────────────────────────────────
// //     5) Zustand 스토어 구현 (통합)
// //    ──────────────────────────────────────────*/
// // const MIN_AREA_WIDTH = 10; // (신버전) 각 영역 최소 너비(%)

// // export const useTabStore = create<TabLayoutStore>((set, get) => ({
// //   /* ───────── [구버전 초기 값] ───────── */
// //   openedTabs: [],
// //   rows: [
// //     {
// //       id: "row-1",
// //       sections: [
// //         {
// //           id: "default",
// //           tabs: [],
// //           width: 100,
// //           activeTabKey: null,
// //         },
// //       ],
// //     },
// //   ],
// //   tabGroups: [],
// //   activeTabId: null,
// //   activeTabKey: null,

// //   counselorSkillAssignmentInfo: {
// //     tenantId: null,
// //     counselorId: null,
// //     counselorName: null,
// //   },
// //   campaignIdForUpdateFromSideMenu: null,
// //   campaignIdForCopyCampaign: null,

// //   // 구버전 분할 관련
// //   splitModeOld: false,
// //   splitLayout: "none",

// //   /* ───────── [신버전 초기 값] ───────── */
// //   allTabs: [],
// //   areas: [createEmptyArea()],
// //   areaWidths: [100],
// //   activeTabGlobalId: null,
// //   splitMode: "none",

// //   /* ──────────────────────────────
// //        구버전 메서드들 구현
// //      ────────────────────────────── */
// //   simulateHeaderMenuClick: (menuId: number, campaignId?: string, label?: string) => {
// //     // 헤더 메뉴 / 컨텍스트 메뉴에서 찾기
// //     let menuItem = menuItems.find((item) => item.id === menuId);
// //     if (!menuItem) {
// //       menuItem = contextMenuItems.find((item) => item.id === menuId);
// //     }
// //     if (!menuItem) return;

// //     // 기존 탭들 제거
// //     const existingTabs = get().openedTabs.filter((tab) => tab.id === menuId);
// //     existingTabs.forEach((tab) => {
// //       get().removeTab(tab.id, tab.uniqueKey);
// //     });

// //     // 새로운 탭 추가
// //     const newTabKey = `${menuId}-${campaignId ? campaignId : ""}-${Date.now()}`;
// //     const newTab: OldTabItem = {
// //       ...menuItem,
// //       uniqueKey: newTabKey,
// //       content: menuItem.content || null,
// //       campaignId: campaignId || undefined,
// //       title: label ? `${menuItem.title} - ${label}` : menuItem.title,
// //     };
// //     get().addTab(newTab);

// //     // 활성 탭 설정
// //     get().setActiveTab(menuId, newTabKey);
// //     get().setCampaignIdForUpdateFromSideMenu(campaignId || null);
// //   },

// //   setCounselorSkillAssignmentInfo: (info) =>
// //     set({
// //       counselorSkillAssignmentInfo: info
// //         ? info
// //         : { tenantId: null, counselorId: null, counselorName: null },
// //     }),

// //   setCampaignIdForUpdateFromSideMenu: (id) =>
// //     set({ campaignIdForUpdateFromSideMenu: id }),

// //   setCampaignIdForCopyCampaign: (id) =>
// //     set({ campaignIdForCopyCampaign: id }),

// //   getTabCountById: (menuId: number) => {
// //     // 구버전: rows / tabGroups 기준으로 개수 세기
// //     const state = get();
// //     let count = 0;

// //     // rows/sections이 없을 수도 있으니 안전처리
// //     if (state.rows && Array.isArray(state.rows)) {
// //       state.rows.forEach((row) => {
// //         if (row.sections && Array.isArray(row.sections)) {
// //           row.sections.forEach((section) => {
// //             count += section.tabs.filter((tab) => tab.id === menuId).length;
// //           });
// //         }
// //       });
// //     }

// //     if (state.tabGroups && Array.isArray(state.tabGroups)) {
// //       state.tabGroups.forEach((group) => {
// //         count += group.tabs.filter((tab) => tab.id === menuId).length;
// //       });
// //     }

// //     return count;
// //   },

// //   addTab: (tab) =>
// //     set((state) => {
// //       const isAlreadyOpened = state.openedTabs.some(
// //         (t) => t.id === tab.id && t.uniqueKey === tab.uniqueKey
// //       );
// //       if (isAlreadyOpened) return state;

// //       const newOpenedTabs = [...state.openedTabs, tab];

// //       const [firstRow] = state.rows;
// //       if (!firstRow) return state;
// //       const [firstSection] = firstRow.sections;
// //       if (!firstSection) return state;

// //       const updatedSection = {
// //         ...firstSection,
// //         tabs: [...firstSection.tabs, tab],
// //         activeTabKey: tab.uniqueKey,
// //       };

// //       const updatedSections = adjustSectionWidths(
// //         firstRow.sections.map((sec) => (sec.id === firstSection.id ? updatedSection : sec))
// //       );

// //       const updatedRow = { ...firstRow, sections: updatedSections };
// //       const newRows = state.rows.map((row) => (row.id === firstRow.id ? updatedRow : row));

// //       return {
// //         ...state,
// //         openedTabs: newOpenedTabs,
// //         rows: newRows,
// //       };
// //     }),

// //   addMultiTab: (tab) =>
// //     set((state) => {
// //       const newOpenedTabs = [...state.openedTabs, tab];

// //       const [firstRow] = state.rows;
// //       if (!firstRow) return state;
// //       const [firstSection] = firstRow.sections;
// //       if (!firstSection) return state;

// //       const updatedSection = {
// //         ...firstSection,
// //         tabs: [...firstSection.tabs, tab],
// //         activeTabKey: tab.uniqueKey,
// //       };

// //       const updatedSections = adjustSectionWidths(
// //         firstRow.sections.map((sec) => (sec.id === firstSection.id ? updatedSection : sec))
// //       );

// //       const updatedRow = { ...firstRow, sections: updatedSections };
// //       const newRows = state.rows.map((row) => (row.id === firstRow.id ? updatedRow : row));

// //       return {
// //         ...state,
// //         openedTabs: newOpenedTabs,
// //         rows: newRows,
// //       };
// //     }),

// //   removeTab: (tabId, uniqueKey) =>
// //     set((state) => {
// //       const newTabs = state.openedTabs.filter(
// //         (t) => !(t.id === tabId && t.uniqueKey === uniqueKey)
// //       );

// //       const updatedRows = state.rows.map((row) => ({
// //         ...row,
// //         sections: row.sections.map((sec) => {
// //           const newSectionTabs = sec.tabs.filter(
// //             (t) => !(t.id === tabId && t.uniqueKey === uniqueKey)
// //           );
// //           return {
// //             ...sec,
// //             tabs: newSectionTabs,
// //             activeTabKey:
// //               sec.activeTabKey === uniqueKey
// //                 ? newSectionTabs.length > 0
// //                   ? newSectionTabs[newSectionTabs.length - 1].uniqueKey
// //                   : null
// //                 : sec.activeTabKey,
// //           };
// //         }),
// //       }));

// //       const updatedGroups = state.tabGroups
// //         .map((group) => ({
// //           ...group,
// //           tabs: group.tabs.filter((t) => !(t.id === tabId && t.uniqueKey === uniqueKey)),
// //         }))
// //         .filter((g) => g.tabs.length > 0);

// //       return {
// //         ...state,
// //         openedTabs: newTabs,
// //         rows: updatedRows,
// //         tabGroups: updatedGroups,
// //       };
// //     }),

// //   setSectionActiveTab: (rowId, sectionId, tabUniqueKey) =>
// //     set((state) => {
// //       const activeTab = state.rows
// //         .find((row) => row.id === rowId)
// //         ?.sections.find((section) => section.id === sectionId)
// //         ?.tabs.find((tab) => tab.uniqueKey === tabUniqueKey);

// //       const newRows = state.rows.map((row) => {
// //         if (row.id !== rowId) return row;
// //         return {
// //           ...row,
// //           sections: row.sections.map((section) => {
// //             if (section.id !== sectionId) return section;
// //             return {
// //               ...section,
// //               activeTabKey: tabUniqueKey,
// //             };
// //           }),
// //         };
// //       });

// //       return {
// //         ...state,
// //         rows: newRows,
// //         activeTabId: activeTab ? activeTab.id : state.activeTabId,
// //         activeTabKey: activeTab ? activeTab.uniqueKey : state.activeTabKey,
// //       };
// //     }),

// //   duplicateTab: (tabId) =>
// //     set((state) => {
// //       const originalTab = state.openedTabs.find((t) => t.id === tabId);
// //       if (!originalTab) return state;

// //       const duplicatedKey = `tab-${tabId}-${Date.now()}`;
// //       const duplicatedTab = { ...originalTab, uniqueKey: duplicatedKey };

// //       // 기존 addTab 메서드 활용
// //       get().addTab(duplicatedTab);
// //       return state;
// //     }),

// //   addRow: () =>
// //     set((state) => {
// //       const existingIds = state.rows.map((r) => r.id);
// //       const newRowId = generateUniqueId("row", existingIds);

// //       const newRow: TabRow = {
// //         id: newRowId,
// //         sections: [
// //           {
// //             id: "default",
// //             tabs: [],
// //             width: 100,
// //             activeTabKey: null,
// //           },
// //         ],
// //       };
// //       return {
// //         ...state,
// //         rows: [...state.rows, newRow],
// //       };
// //     }),

// //   removeRow: (rowId) =>
// //     set((state) => {
// //       if (state.rows.length <= 1) return state;
// //       return {
// //         ...state,
// //         rows: state.rows.filter((r) => r.id !== rowId),
// //       };
// //     }),

// //   addSection: (rowId, tabId) =>
// //     set((state) => {
// //       const updatedRows = state.rows.map((row) => {
// //         if (row.id !== rowId) return row;
// //         const newSectionId = generateUniqueId(
// //           "section",
// //           row.sections.map((s) => s.id)
// //         );
// //         const newSections = adjustSectionWidths([
// //           ...row.sections,
// //           {
// //             id: newSectionId,
// //             tabs: [],
// //             width: 0,
// //             activeTabKey: null,
// //           },
// //         ]);
// //         return { ...row, sections: newSections };
// //       });
// //       return { ...state, rows: updatedRows };
// //     }),

// //   removeSection: (rowId, sectionId) =>
// //     set((state) => {
// //       const updatedRows = state.rows.map((row) => {
// //         if (row.id !== rowId) return row;
// //         const filteredSections = row.sections.filter((s) => s.id !== sectionId);
// //         const newSections = adjustSectionWidths(filteredSections);
// //         return { ...row, sections: newSections };
// //       });
// //       return { ...state, rows: updatedRows };
// //     }),

// //   moveTabToSection: (tabId, targetRowId, targetSectionId, draggedTabKey) =>
// //     set((state) => {
// //       const movedTab = state.openedTabs.find((t) => t.id === tabId && t.uniqueKey === draggedTabKey);
// //       if (!movedTab) return state;

// //       // 1) 모든 행/섹션에서 해당 탭 제거
// //       const updatedRows = state.rows.map((row) => ({
// //         ...row,
// //         sections: row.sections.map((sec) => {
// //           const filtered = sec.tabs.filter((t) => !(t.id === tabId && t.uniqueKey === draggedTabKey));
// //           let newActive = sec.activeTabKey;
// //           if (sec.activeTabKey === draggedTabKey) {
// //             newActive = filtered.length > 0 ? filtered[filtered.length - 1].uniqueKey : null;
// //           }
// //           return {
// //             ...sec,
// //             tabs: filtered,
// //             activeTabKey: newActive,
// //           };
// //         }),
// //       }));

// //       // 2) 대상 row/section 찾아서 탭 추가
// //       const targetRowIndex = updatedRows.findIndex((r) => r.id === targetRowId);
// //       if (targetRowIndex === -1) return state;

// //       const targetRow = updatedRows[targetRowIndex];
// //       const sectionIndex = targetRow.sections.findIndex((sec) => sec.id === targetSectionId);
// //       if (sectionIndex === -1) return state;

// //       const targetSec = targetRow.sections[sectionIndex];
// //       const newTabs = [...targetSec.tabs, movedTab];
// //       const updatedTargetSec = {
// //         ...targetSec,
// //         tabs: newTabs,
// //         activeTabKey: movedTab.uniqueKey,
// //       };

// //       const replacedSections = [...targetRow.sections];
// //       replacedSections[sectionIndex] = updatedTargetSec;
// //       updatedRows[targetRowIndex] = {
// //         ...targetRow,
// //         sections: adjustSectionWidths(replacedSections),
// //       };

// //       // 3) tabGroup에서도 제거
// //       const updatedGroups = state.tabGroups
// //         .map((g) => ({
// //           ...g,
// //           tabs: g.tabs.filter((t) => !(t.id === tabId && t.uniqueKey === draggedTabKey)),
// //         }))
// //         .filter((g) => g.tabs.length > 0);

// //       return {
// //         ...state,
// //         rows: updatedRows,
// //         tabGroups: updatedGroups,
// //         activeTabId: movedTab.id,
// //         activeTabKey: movedTab.uniqueKey,
// //       };
// //     }),

// //   updateSectionWidth: (rowId, sectionId, width) =>
// //     set((state) => {
// //       const updatedRows = state.rows.map((row) => {
// //         if (row.id !== rowId) return row;
// //         return {
// //           ...row,
// //           sections: row.sections.map((sec) => {
// //             if (sec.id !== sectionId) return sec;
// //             return { ...sec, width };
// //           }),
// //         };
// //       });
// //       return {
// //         ...state,
// //         rows: updatedRows,
// //       };
// //     }),

// //   addTabGroup: (tabId) =>
// //     set((state) => {
// //       const tab = state.openedTabs.find((t) => t.id === tabId);
// //       if (!tab) return state;

// //       // 일단 row에서 제거
// //       const updatedRows = state.rows.map((row) => {
// //         let newSecs = row.sections.map((sec) => ({
// //           ...sec,
// //           tabs: sec.tabs.filter((t) => t.id !== tabId),
// //         }));
// //         newSecs = newSecs.filter((sec) => sec.id === "default" || sec.tabs.length > 0);
// //         return { ...row, sections: adjustSectionWidths(newSecs) };
// //       });

// //       const existingIds = state.tabGroups.map((g) => g.id);
// //       const newGroupId = generateUniqueId("group", existingIds);

// //       const newGroup: TabGroup = {
// //         id: newGroupId,
// //         tabs: [tab],
// //         position: { x: 0, y: 0 },
// //       };

// //       return {
// //         ...state,
// //         rows: updatedRows,
// //         tabGroups: [...state.tabGroups, newGroup],
// //       };
// //     }),

// //   removeTabGroup: (groupId) =>
// //     set((state) => {
// //       const group = state.tabGroups.find((g) => g.id === groupId);
// //       if (!group) return state;

// //       // 임의로 row-1의 default 섹션에 복귀시키는 예시
// //       const rowIndex = state.rows.findIndex((r) => r.id === "row-1");
// //       if (rowIndex === -1) return state;

// //       const defaultSecIndex = state.rows[rowIndex].sections.findIndex((sec) => sec.id === "default");
// //       if (defaultSecIndex === -1) return state;

// //       const baseSection = state.rows[rowIndex].sections[defaultSecIndex];
// //       const mergedSection = {
// //         ...baseSection,
// //         tabs: [...baseSection.tabs, ...group.tabs],
// //         activeTabKey:
// //           group.tabs.length > 0
// //             ? group.tabs[group.tabs.length - 1].uniqueKey
// //             : baseSection.activeTabKey,
// //       };

// //       let updatedSections = [...state.rows[rowIndex].sections];
// //       updatedSections[defaultSecIndex] = mergedSection;
// //       updatedSections = adjustSectionWidths(updatedSections);

// //       const updatedRow = {
// //         ...state.rows[rowIndex],
// //         sections: updatedSections,
// //       };
// //       const newRows = [...state.rows];
// //       newRows[rowIndex] = updatedRow;

// //       return {
// //         ...state,
// //         rows: newRows,
// //         tabGroups: state.tabGroups.filter((g) => g.id !== groupId),
// //       };
// //     }),

// //   moveTabToGroup: (tabId, groupId) =>
// //     set((state) => {
// //       const tab = state.openedTabs.find((t) => t.id === tabId);
// //       if (!tab) return state;

// //       const updatedRows = state.rows.map((row) => {
// //         let newSecs = row.sections.map((sec) => ({
// //           ...sec,
// //           tabs: sec.tabs.filter((t) => t.id !== tabId),
// //         }));
// //         newSecs = newSecs.filter((sec) => sec.id === "default" || sec.tabs.length > 0);
// //         return { ...row, sections: adjustSectionWidths(newSecs) };
// //       });

// //       const updatedGroups = state.tabGroups.map((g) => {
// //         if (g.id === groupId) {
// //           return { ...g, tabs: [...g.tabs, tab] };
// //         }
// //         return { ...g, tabs: g.tabs.filter((t) => t.id !== tabId) };
// //       });

// //       return {
// //         ...state,
// //         rows: updatedRows,
// //         tabGroups: updatedGroups,
// //       };
// //     }),

// //   openCampaignManagerForUpdate: (campaignId, label) =>
// //     set((state) => {
// //       // 예시: id=2인 탭을 찾는다
// //       const existingTab = state.openedTabs.find((tab) => tab.id === 2);
// //       if (existingTab) {
// //         const updatedTab = {
// //           ...existingTab,
// //           campaignId,
// //           title: label !== "" ? `캠페인 관리 - ${label}` : "캠페인 관리(업데이트)",
// //         };
// //         const updatedTabs = state.openedTabs.map((t) =>
// //           t.uniqueKey === existingTab.uniqueKey ? updatedTab : t
// //         );
// //         // rows에서도 동일 uniqueKey 탭 업데이트
// //         const updatedRows = state.rows.map((row) => ({
// //           ...row,
// //           sections: row.sections.map((section) => {
// //             const newTabs = section.tabs.map((t) =>
// //               t.uniqueKey === existingTab.uniqueKey ? updatedTab : t
// //             );
// //             return { ...section, tabs: newTabs };
// //           }),
// //         }));
// //         return {
// //           ...state,
// //           openedTabs: updatedTabs,
// //           rows: updatedRows,
// //         };
// //       }

// //       // 만약 기존 탭 없으면 menuItems에서 id=3 찾아 새로 열기 등등...
// //       // 아래는 예시
// //       const campaignMenuItem = menuItems.find((item) => item.id === 3);
// //       if (!campaignMenuItem) return state;

// //       const newTabKey = `3-${campaignId}-${Date.now()}`;
// //       const newTab: OldTabItem = {
// //         ...campaignMenuItem,
// //         uniqueKey: newTabKey,
// //         title: label ? `통합 모니터 - ${label}` : "통합 모니터",
// //         campaignId,
// //         content: null,
// //       };

// //       get().addTab(newTab);
// //       get().setActiveTab(2, newTabKey);
// //       get().setCampaignIdForUpdateFromSideMenu(null);

// //       return state;
// //     }),

// //   openCampaignProgressInfo: (campaignId, label) =>
// //     set((state) => {
// //       const oldTabs = state.openedTabs.filter((tab) => tab.id === 4);
// //       oldTabs.forEach((ot) => {
// //         get().removeTab(ot.id, ot.uniqueKey);
// //       });
// //       const newTabKey = `4-${campaignId}-${Date.now()}`;
// //       const newTab: OldTabItem = {
// //         id: 4,
// //         uniqueKey: newTabKey,
// //         title: label !== "" ? `총진행상황 - ${label}` : "총진행상황",
// //         icon: "/header-menu/총진행상황.svg",
// //         href: "/status",
// //         content: null,
// //         campaignId,
// //       };
// //       get().addTab(newTab);
// //       return state;
// //     }),

// //   openRebroadcastSettings: (campaignId, label) =>
// //     set((state) => {
// //       const oldRebroadTabs = state.openedTabs.filter((t) => t.id === 20);
// //       oldRebroadTabs.forEach((ot) => {
// //         get().removeTab(ot.id, ot.uniqueKey);
// //       });

// //       const newTabKey = `rebroadcast-${campaignId}-${Date.now()}`;
// //       const newTab: OldTabItem = {
// //         id: 20,
// //         uniqueKey: newTabKey,
// //         title: label ? `재발신 설정 - ${label}` : "재발신 설정",
// //         icon: "/header-menu/발신진행상태.svg",
// //         href: "/rebroadcast",
// //         campaignId,
// //         content: null,
// //       };
// //       get().addTab(newTab);
// //       return state;
// //     }),

// //   setActiveTab: (tabId, uniqueKey) => {
// //     set({
// //       activeTabId: tabId,
// //       activeTabKey: uniqueKey,
// //     });
// //   },

// //   closeOtherTabs: (rowId, sectionId, exceptTabKey) =>
// //     set((state) => {
// //       const row = state.rows.find((r) => r.id === rowId);
// //       if (!row) return state;

// //       const section = row.sections.find((s) => s.id === sectionId);
// //       if (!section) return state;

// //       const keepTab = section.tabs.find((tab) => tab.uniqueKey === exceptTabKey);
// //       if (!keepTab) return state;

// //       const tabKeysToRemove = section.tabs
// //         .filter((tab) => tab.uniqueKey !== exceptTabKey)
// //         .map((tab) => tab.uniqueKey);

// //       const newOpenedTabs = state.openedTabs.filter(
// //         (tab) => !tabKeysToRemove.includes(tab.uniqueKey)
// //       );

// //       const updatedRows = state.rows.map((r) => {
// //         if (r.id !== rowId) return r;
// //         return {
// //           ...r,
// //           sections: r.sections.map((sec) => {
// //             if (sec.id !== sectionId) return sec;
// //             return {
// //               ...sec,
// //               tabs: [keepTab],
// //               activeTabKey: keepTab.uniqueKey,
// //             };
// //           }),
// //         };
// //       });

// //       return {
// //         ...state,
// //         openedTabs: newOpenedTabs,
// //         rows: updatedRows,
// //       };
// //     }),

// //   closeAllTabs: (rowId, sectionId) =>
// //     set((state) => {
// //       const row = state.rows.find((r) => r.id === rowId);
// //       if (!row) return state;

// //       const section = row.sections.find((s) => s.id === sectionId);
// //       if (!section) return state;

// //       const tabKeysToRemove = section.tabs.map((tab) => tab.uniqueKey);

// //       const newOpenedTabs = state.openedTabs.filter(
// //         (tab) => !tabKeysToRemove.includes(tab.uniqueKey)
// //       );

// //       const updatedRows = state.rows.map((r) => {
// //         if (r.id !== rowId) return r;
// //         return {
// //           ...r,
// //           sections: r.sections.map((sec) => {
// //             if (sec.id !== sectionId) return sec;
// //             return {
// //               ...sec,
// //               tabs: [],
// //               activeTabKey: null,
// //             };
// //           }),
// //         };
// //       });

// //       return {
// //         ...state,
// //         openedTabs: newOpenedTabs,
// //         rows: updatedRows,
// //         activeTabId: null,
// //         activeTabKey: null,
// //       };
// //     }),

// //   /* ──────────────────────────────────
// //        신버전(분할) 메서드들 (V2)
// //      ────────────────────────────────── */
// //   openTabV2: (tabId, title, options) => {
// //     const { allTabs, areas } = get();

// //     const newTabUUID = uuidv4();
// //     const newTab: NewTabItem = {
// //       id: newTabUUID,
// //       tabId,
// //       title,
// //       campaignId: options?.campaignId,
// //       campaignName: options?.campaignName,
// //     };

// //     const updatedAllTabs = [...allTabs, newTab];

// //     const firstArea = areas[0];
// //     const updatedFirstArea = {
// //       ...firstArea,
// //       tabs: [...firstArea.tabs, newTab],
// //       activeTabId: newTabUUID,
// //     };

// //     const updatedAreas = [updatedFirstArea, ...areas.slice(1)];

// //     set({
// //       allTabs: updatedAllTabs,
// //       areas: updatedAreas,
// //       activeTabGlobalId: newTabUUID,
// //     });
// //   },

// //   closeTabV2: (tabUuid) => {
// //     const { allTabs, areas, activeTabGlobalId } = get();

// //     const newAllTabs = allTabs.filter((t) => t.id !== tabUuid);

// //     const newAreas = areas.map((area) => {
// //       if (!area.tabs.some((t) => t.id === tabUuid)) return area;

// //       const filteredTabs = area.tabs.filter((t) => t.id !== tabUuid);
// //       let newActiveTabId = area.activeTabId;
// //       if (area.activeTabId === tabUuid) {
// //         newActiveTabId = filteredTabs.length > 0 ? filteredTabs[filteredTabs.length - 1].id : null;
// //       }
// //       return {
// //         ...area,
// //         tabs: filteredTabs,
// //         activeTabId: newActiveTabId,
// //       };
// //     });

// //     let newActiveTabGlobalId = activeTabGlobalId;
// //     if (activeTabGlobalId === tabUuid) {
// //       const stillOpenTabs = newAreas.flatMap((a) => a.tabs);
// //       newActiveTabGlobalId = stillOpenTabs.length
// //         ? stillOpenTabs[stillOpenTabs.length - 1].id
// //         : null;
// //     }

// //     set({
// //       allTabs: newAllTabs,
// //       areas: newAreas,
// //       activeTabGlobalId: newActiveTabGlobalId,
// //     });
// //   },

// //   activateTabV2: (tabUuid) => {
// //     const { areas } = get();
// //     let foundIndex = -1;
// //     for (let i = 0; i < areas.length; i++) {
// //       if (areas[i].tabs.some((t) => t.id === tabUuid)) {
// //         foundIndex = i;
// //         break;
// //       }
// //     }
// //     if (foundIndex === -1) return;

// //     const areaToUpdate = areas[foundIndex];
// //     const updatedArea = {
// //       ...areaToUpdate,
// //       activeTabId: tabUuid,
// //     };

// //     const newAreas = [...areas];
// //     newAreas[foundIndex] = updatedArea;

// //     set({
// //       areas: newAreas,
// //       activeTabGlobalId: tabUuid,
// //     });
// //   },

// //   splitTabAreaV2: (count) => {
// //     if (count < 1) return;

// //     const { allTabs } = get();
// //     if (count === 1) {
// //       const newArea: TabArea = {
// //         id: uuidv4(),
// //         tabs: [...allTabs],
// //         activeTabId: allTabs.length ? allTabs[allTabs.length - 1].id : null,
// //       };
// //       set({
// //         areas: [newArea],
// //         areaWidths: [100],
// //         splitMode: "none",
// //         activeTabGlobalId: allTabs.length ? allTabs[allTabs.length - 1].id : null,
// //       });
// //       return;
// //     }

// //     const newAreas: TabArea[] = [];
// //     const firstArea: TabArea = {
// //       id: uuidv4(),
// //       tabs: [...allTabs],
// //       activeTabId: allTabs.length ? allTabs[allTabs.length - 1].id : null,
// //     };
// //     newAreas.push(firstArea);

// //     for (let i = 1; i < count; i++) {
// //       newAreas.push(createEmptyArea());
// //     }

// //     const equalWidth = 100 / count;
// //     const newWidths = Array(count).fill(equalWidth);

// //     set({
// //       areas: newAreas,
// //       areaWidths: newWidths,
// //       splitMode: "split",
// //       activeTabGlobalId: allTabs.length ? allTabs[allTabs.length - 1].id : null,
// //     });
// //   },

// //   closeAreaV2: (areaId) => {
// //     const { areas, areaWidths, allTabs, activeTabGlobalId } = get();
// //     if (areas.length <= 1) return;

// //     const idx = areas.findIndex((a) => a.id === areaId);
// //     if (idx === -1) return;

// //     const closedArea = areas[idx];
// //     const closedTabs = closedArea.tabs.map((t) => t.id);

// //     const newAllTabs = allTabs.filter((t) => !closedTabs.includes(t.id));
// //     const remainingAreas = areas.filter((a) => a.id !== areaId);

// //     const closedAreaWidth = areaWidths[idx];
// //     let newWidths = [...areaWidths];
// //     newWidths.splice(idx, 1);
// //     if (newWidths.length === 1) {
// //       newWidths[0] = 100;
// //     } else {
// //       const addEach = closedAreaWidth / newWidths.length;
// //       newWidths = newWidths.map((w) => w + addEach);
// //     }

// //     let newActiveTabGlobalId = activeTabGlobalId;
// //     if (closedTabs.includes(activeTabGlobalId || "")) {
// //       const stillOpen = remainingAreas.flatMap((a) => a.tabs);
// //       newActiveTabGlobalId = stillOpen.length ? stillOpen[stillOpen.length - 1].id : null;
// //     }

// //     const newSplitMode = remainingAreas.length > 1 ? "split" : "none";

// //     set({
// //       allTabs: newAllTabs,
// //       areas: remainingAreas,
// //       areaWidths: newWidths,
// //       splitMode: newSplitMode,
// //       activeTabGlobalId: newActiveTabGlobalId,
// //     });
// //   },

// //   moveTabToAreaV2: (tabUuid, targetAreaId) => {
// //     const { areas, activeTabGlobalId } = get();

// //     let sourceIndex = -1;
// //     let foundTab: NewTabItem | null = null;
// //     for (let i = 0; i < areas.length; i++) {
// //       if (areas[i].tabs.some((t) => t.id === tabUuid)) {
// //         sourceIndex = i;
// //         foundTab = areas[i].tabs.find((t) => t.id === tabUuid) || null;
// //         break;
// //       }
// //     }
// //     if (!foundTab) return;
// //     if (areas[sourceIndex].id === targetAreaId) return;

// //     const updatedSource = {
// //       ...areas[sourceIndex],
// //       tabs: areas[sourceIndex].tabs.filter((t) => t.id !== tabUuid),
// //     };
// //     if (updatedSource.activeTabId === tabUuid) {
// //       updatedSource.activeTabId = updatedSource.tabs.length
// //         ? updatedSource.tabs[updatedSource.tabs.length - 1].id
// //         : null;
// //     }

// //     const targetIdx = areas.findIndex((a) => a.id === targetAreaId);
// //     if (targetIdx === -1) return;
// //     const updatedTarget = {
// //       ...areas[targetIdx],
// //       tabs: [...areas[targetIdx].tabs, foundTab],
// //       activeTabId: foundTab.id,
// //     };

// //     const newAreas = [...areas];
// //     newAreas[sourceIndex] = updatedSource;
// //     newAreas[targetIdx] = updatedTarget;

// //     set({
// //       areas: newAreas,
// //       activeTabGlobalId: foundTab.id,
// //     });
// //   },

// //   reorderTabsV2: (areaId, fromIndex, toIndex) => {
// //     const { areas } = get();
// //     const idx = areas.findIndex((a) => a.id === areaId);
// //     if (idx === -1) return;

// //     const area = areas[idx];
// //     if (fromIndex === toIndex) return;

// //     const newTabs = [...area.tabs];
// //     const [moved] = newTabs.splice(fromIndex, 1);
// //     newTabs.splice(toIndex, 0, moved);

// //     const updatedArea: TabArea = { ...area, tabs: newTabs };
// //     const newAreas = [...areas];
// //     newAreas[idx] = updatedArea;
// //     set({ areas: newAreas });
// //   },

// //   resizeAreasV2: (areaIndex, deltaWidth) => {
// //     const { areaWidths } = get();
// //     if (areaIndex < 0 || areaIndex >= areaWidths.length - 1) return;

// //     const leftWidth = areaWidths[areaIndex];
// //     const rightWidth = areaWidths[areaIndex + 1];

// //     const newLeft = leftWidth + deltaWidth;
// //     const newRight = rightWidth - deltaWidth;

// //     if (newLeft < MIN_AREA_WIDTH || newRight < MIN_AREA_WIDTH) {
// //       return;
// //     }

// //     const newWidths = [...areaWidths];
// //     newWidths[areaIndex] = newLeft;
// //     newWidths[areaIndex + 1] = newRight;

// //     set({
// //       areaWidths: newWidths,
// //     });
// //   },
// // }));

// // src/store/tabStore.ts
// "use client";

// import { create } from "zustand";
// import { v4 as uuidv4 } from "uuid";

// // ------------------------------
// // 신버전 탭 인터페이스
// // ------------------------------
// export interface NewTabItem {
//   id: string;            // 내부적으로 고유 식별자 (string)
//   tabId: number | null;  // 메뉴 식별자 (예: 1,2,3)
//   title: string;         // 탭 이름
//   campaignId?: string;
//   campaignName?: string;
// }

// // 분할 영역(Area)
// export interface TabArea {
//   id: string;                // 영역 ID
//   tabs: NewTabItem[];        // 이 영역에 표시되는 탭 목록
//   activeTabId: string | null; // 현재 활성 탭(위 NewTabItem.id)
// }

// export type SplitMode = "none" | "split"; // 'none' = 1영역, 'split' = 2~4영역

// interface TabStoreState {
//   // 모든 탭 (중복 없이)
//   allTabs: NewTabItem[];

//   // 분할 영역들
//   areas: TabArea[];
//   areaWidths: number[]; // 각 영역 가로폭 (%)
//   splitMode: SplitMode; // 현재 분할 모드
//   activeTabGlobalId: string | null; // 전역 활성 탭 ID

//   // ---------------------------
//   // 기본 메서드
//   // ---------------------------
//   /** 새 탭 열기 */
//   openTabV2: (
//     tabId: number,
//     title: string,
//     options?: { campaignId?: string; campaignName?: string }
//   ) => void;

//   /** 탭 닫기 */
//   closeTabV2: (tabUuid: string) => void;

//   /** 탭 활성화 */
//   activateTabV2: (tabUuid: string) => void;

//   /** 탭 복제 (Ctrl+클릭 등) */
//   duplicateTabV2: (tabUuid: string) => void;

//   // ---------------------------
//   // 멀티분할 메서드
//   // ---------------------------
//   /** 화면 분할 개수 설정: 1~4 */
//   splitTabAreaV2: (count: number) => void;

//   /** 특정 영역 닫기 */
//   closeAreaV2: (areaId: string) => void;

//   /** 특정 탭을 다른 영역으로 이동 */
//   moveTabToAreaV2: (tabUuid: string, targetAreaId: string) => void;

//   /** 영역 내 탭 순서 재정렬 */
//   reorderTabsV2: (areaId: string, fromIndex: number, toIndex: number) => void;

//   /** 영역 사이 리사이즈 */
//   resizeAreasV2: (areaIndex: number, deltaWidth: number) => void;

//   // ---------------------------
//   // 헤더에서 사용할 탭 개수 세기
//   // => "menuId" 별로 현재 열려 있는 탭 수
//   // ---------------------------
//   getTabCountByIdV2: (menuId: number) => number;
// }

// const MIN_AREA_WIDTH = 10;

// function createEmptyArea(): TabArea {
//   return {
//     id: uuidv4(),
//     tabs: [],
//     activeTabId: null,
//   };
// }

// export const useTabStore = create<TabStoreState>((set, get) => ({
//   // 초기 상태
//   allTabs: [],
//   areas: [createEmptyArea()],
//   areaWidths: [100],
//   splitMode: "none",
//   activeTabGlobalId: null,

//   /** 새 탭 열기 */
//   openTabV2: (tabId, title, options) => {
//     const { allTabs, areas } = get();
//     // 새 탭 생성
//     const newTabUUID = uuidv4();
//     const newTab: NewTabItem = {
//       id: newTabUUID,
//       tabId,
//       title,
//       campaignId: options?.campaignId,
//       campaignName: options?.campaignName,
//     };

//     // allTabs에 추가
//     const updatedAllTabs = [...allTabs, newTab];

//     // 첫 번째 영역에 탭 삽입
//     const firstArea = areas[0];
//     const updatedFirstArea = {
//       ...firstArea,
//       tabs: [...firstArea.tabs, newTab],
//       activeTabId: newTabUUID,
//     };

//     const updatedAreas = [updatedFirstArea, ...areas.slice(1)];

//     set({
//       allTabs: updatedAllTabs,
//       areas: updatedAreas,
//       activeTabGlobalId: newTabUUID,
//     });
//   },

//   /** 탭 닫기 */
//   closeTabV2: (tabUuid) => {
//     const { allTabs, areas, activeTabGlobalId } = get();

//     // allTabs에서 제거
//     const newAllTabs = allTabs.filter((t) => t.id !== tabUuid);

//     // 각 영역에서 제거
//     const newAreas = areas.map((area) => {
//       const hasTab = area.tabs.some((t) => t.id === tabUuid);
//       if (!hasTab) return area;
//       const filteredTabs = area.tabs.filter((t) => t.id !== tabUuid);
//       let newActiveId = area.activeTabId;
//       if (newActiveId === tabUuid) {
//         newActiveId = filteredTabs.length
//           ? filteredTabs[filteredTabs.length - 1].id
//           : null;
//       }
//       return {
//         ...area,
//         tabs: filteredTabs,
//         activeTabId: newActiveId,
//       };
//     });

//     // 전역 활성 탭 재설정
//     let newGlobalActive = activeTabGlobalId;
//     if (activeTabGlobalId === tabUuid) {
//       const stillOpen = newAreas.flatMap((a) => a.tabs);
//       newGlobalActive = stillOpen.length ? stillOpen[stillOpen.length - 1].id : null;
//     }

//     set({
//       allTabs: newAllTabs,
//       areas: newAreas,
//       activeTabGlobalId: newGlobalActive,
//     });
//   },

//   /** 탭 활성화 */
//   activateTabV2: (tabUuid) => {
//     const { areas } = get();
//     let foundIndex = -1;
//     for (let i = 0; i < areas.length; i++) {
//       if (areas[i].tabs.some((t) => t.id === tabUuid)) {
//         foundIndex = i;
//         break;
//       }
//     }
//     if (foundIndex === -1) return; // 못 찾으면 무시

//     const targetArea = areas[foundIndex];
//     const updatedArea = {
//       ...targetArea,
//       activeTabId: tabUuid,
//     };

//     const newAreas = [...areas];
//     newAreas[foundIndex] = updatedArea;

//     set({
//       areas: newAreas,
//       activeTabGlobalId: tabUuid,
//     });
//   },

//   /** 탭 복제 */
//   duplicateTabV2: (tabUuid) => {
//     const { allTabs, areas } = get();
//     const original = allTabs.find((t) => t.id === tabUuid);
//     if (!original) return;

//     // 복제
//     const newId = uuidv4();
//     const duplicated: NewTabItem = {
//       ...original,
//       id: newId,
//     };

//     // allTabs에 추가
//     const updatedAll = [...allTabs, duplicated];

//     // 어느 영역에 있는지 찾은 뒤, 그 영역에 붙여넣기
//     const updatedAreas = [...areas];
//     for (let i = 0; i < updatedAreas.length; i++) {
//       if (updatedAreas[i].tabs.some((t) => t.id === tabUuid)) {
//         // 추가
//         const newTabs = [...updatedAreas[i].tabs, duplicated];
//         updatedAreas[i] = {
//           ...updatedAreas[i],
//           tabs: newTabs,
//           activeTabId: newId,
//         };
//         break;
//       }
//     }

//     set({
//       allTabs: updatedAll,
//       areas: updatedAreas,
//       activeTabGlobalId: newId,
//     });
//   },

//   /** 화면 분할 개수 설정 */
//   splitTabAreaV2: (count) => {
//     if (count < 1) return;
//     const { allTabs } = get();

//     // 1영역
//     if (count === 1) {
//       set({
//         areas: [
//           {
//             id: uuidv4(),
//             tabs: [...allTabs],
//             activeTabId: allTabs.length ? allTabs[allTabs.length - 1].id : null,
//           },
//         ],
//         areaWidths: [100],
//         splitMode: "none",
//         activeTabGlobalId: allTabs.length ? allTabs[allTabs.length - 1].id : null,
//       });
//       return;
//     }

//     // 2~4영역
//     const newAreas: TabArea[] = [];
//     const firstArea: TabArea = {
//       id: uuidv4(),
//       tabs: [...allTabs],
//       activeTabId: allTabs.length ? allTabs[allTabs.length - 1].id : null,
//     };
//     newAreas.push(firstArea);

//     for (let i = 1; i < count; i++) {
//       newAreas.push(createEmptyArea());
//     }

//     const equalWidth = 100 / count;
//     const widths = Array(count).fill(equalWidth);

//     set({
//       areas: newAreas,
//       areaWidths: widths,
//       splitMode: "split",
//       activeTabGlobalId: allTabs.length ? allTabs[allTabs.length - 1].id : null,
//     });
//   },

//   /** 특정 영역 닫기 */
//   closeAreaV2: (areaId) => {
//     const { areas, areaWidths, activeTabGlobalId, allTabs } = get();
//     if (areas.length <= 1) return;

//     const idx = areas.findIndex((a) => a.id === areaId);
//     if (idx === -1) return;

//     // 닫히는 영역 탭들
//     const closedTabs = areas[idx].tabs.map((t) => t.id);
//     // allTabs에서도 제거
//     const newAll = allTabs.filter((t) => !closedTabs.includes(t.id));

//     // 남은 영역
//     const remain = areas.filter((a) => a.id !== areaId);

//     // 너비 재분배
//     const closedWidth = areaWidths[idx];
//     let newWidths = [...areaWidths];
//     newWidths.splice(idx, 1);
//     if (newWidths.length === 1) {
//       newWidths[0] = 100;
//     } else {
//       const addEach = closedWidth / newWidths.length;
//       newWidths = newWidths.map((w) => w + addEach);
//     }

//     // 활성 탭 다시 선택
//     let newActive = activeTabGlobalId;
//     if (closedTabs.includes(activeTabGlobalId || "")) {
//       const stillOpen = remain.flatMap((r) => r.tabs);
//       newActive = stillOpen.length ? stillOpen[stillOpen.length - 1].id : null;
//     }

//     const newSplitMode = remain.length > 1 ? "split" : "none";

//     set({
//       allTabs: newAll,
//       areas: remain,
//       areaWidths: newWidths,
//       splitMode: newSplitMode,
//       activeTabGlobalId: newActive,
//     });
//   },

//   /** 탭을 다른 영역으로 이동 */
//   moveTabToAreaV2: (tabUuid, targetAreaId) => {
//     const { areas } = get();
//     let sourceIdx = -1;
//     let foundTab: NewTabItem | null = null;

//     for (let i = 0; i < areas.length; i++) {
//       if (areas[i].tabs.some((t) => t.id === tabUuid)) {
//         sourceIdx = i;
//         foundTab = areas[i].tabs.find((t) => t.id === tabUuid) || null;
//         break;
//       }
//     }
//     if (!foundTab) return;
//     if (areas[sourceIdx].id === targetAreaId) return;

//     // 소스 영역
//     const sourceArea = areas[sourceIdx];
//     const newSourceTabs = sourceArea.tabs.filter((t) => t.id !== tabUuid);
//     let newSourceActive = sourceArea.activeTabId;
//     if (newSourceActive === tabUuid) {
//       newSourceActive = newSourceTabs.length
//         ? newSourceTabs[newSourceTabs.length - 1].id
//         : null;
//     }
//     const updatedSource = {
//       ...sourceArea,
//       tabs: newSourceTabs,
//       activeTabId: newSourceActive,
//     };

//     // 타겟 영역
//     const targetIdx = areas.findIndex((a) => a.id === targetAreaId);
//     if (targetIdx === -1) return;
//     const targetArea = areas[targetIdx];
//     const newTargetTabs = [...targetArea.tabs, foundTab];
//     const updatedTarget = {
//       ...targetArea,
//       tabs: newTargetTabs,
//       activeTabId: foundTab.id,
//     };

//     const newAreas = [...areas];
//     newAreas[sourceIdx] = updatedSource;
//     newAreas[targetIdx] = updatedTarget;

//     set({
//       areas: newAreas,
//       activeTabGlobalId: foundTab.id,
//     });
//   },

//   /** 영역 내 탭 재정렬 */
//   reorderTabsV2: (areaId, fromIndex, toIndex) => {
//     const { areas } = get();
//     const idx = areas.findIndex((a) => a.id === areaId);
//     if (idx === -1) return;

//     const area = areas[idx];
//     if (fromIndex === toIndex) return;

//     const newTabs = [...area.tabs];
//     const [moved] = newTabs.splice(fromIndex, 1);
//     newTabs.splice(toIndex, 0, moved);

//     const newAreas = [...areas];
//     newAreas[idx] = {
//       ...area,
//       tabs: newTabs,
//     };

//     set({ areas: newAreas });
//   },

//   /** 영역 사이 리사이즈 */
//   resizeAreasV2: (areaIndex, deltaWidth) => {
//     const { areaWidths } = get();
//     if (areaIndex < 0 || areaIndex >= areaWidths.length - 1) return;

//     const leftWidth = areaWidths[areaIndex];
//     const rightWidth = areaWidths[areaIndex + 1];

//     const newLeft = leftWidth + deltaWidth;
//     const newRight = rightWidth - deltaWidth;
//     if (newLeft < MIN_AREA_WIDTH || newRight < MIN_AREA_WIDTH) {
//       return;
//     }

//     const newArr = [...areaWidths];
//     newArr[areaIndex] = newLeft;
//     newArr[areaIndex + 1] = newRight;

//     set({ areaWidths: newArr });
//   },

//   /** menuId별 탭 개수 계산 */
//   getTabCountByIdV2: (menuId: number) => {
//     const { allTabs } = get();
//     // allTabs 중 tabId === menuId 인 것 카운트
//     return allTabs.filter((t) => t.tabId === menuId).length;
//   },
// }));

// src/store/tabStore.ts
"use client";

import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

// 새탭
export interface NewTabItem {
  id: string;             // 고유 UUID
  tabId: number | null;   // 실제 기능(메뉴) 식별자
  title: string;
  campaignId?: string;
  campaignName?: string;
}

// 분할 영역
export interface TabArea {
  id: string;
  tabs: NewTabItem[];
  activeTabId: string | null;
}

export type SplitMode = "none" | "split";

function createEmptyArea(): TabArea {
  return {
    id: uuidv4(),
    tabs: [],
    activeTabId: null,
  };
}

interface TabStoreState {
  // 전체 탭
  allTabs: NewTabItem[];
  // 여러 영역
  areas: TabArea[];
  // 영역 너비 (%)
  areaWidths: number[];
  // 스플릿 상태
  splitMode: SplitMode;
  // 전역 활성 탭
  activeTabGlobalId: string | null;

  // 기본 메서드
  openTabV2: (
    tabId: number,
    title: string,
    options?: { campaignId?: string; campaignName?: string }
  ) => void;
  closeTabV2: (tabUuid: string) => void;
  activateTabV2: (tabUuid: string) => void;
  duplicateTabV2: (tabUuid: string) => void;

  // 멀티 스플릿 관련
  splitTabAreaV2: (count: number) => void;
  closeAreaV2: (areaId: string) => void;
  moveTabToAreaV2: (tabUuid: string, targetAreaId: string) => void;
  reorderTabsV2: (areaId: string, fromIndex: number, toIndex: number) => void;
  resizeAreasV2: (areaIndex: number, deltaWidth: number) => void;

  // 메서드
  getTabCountByIdV2: (menuId: number) => number;
}

const MIN_AREA_WIDTH = 10;

export const useTabStore = create<TabStoreState>((set, get) => ({
  // 초기 상태
  allTabs: [],
  areas: [createEmptyArea()],
  areaWidths: [100],
  splitMode: "none",
  activeTabGlobalId: null,

  /** 새 탭 열기 */
  openTabV2: (tabId, title, options) => {
    const { allTabs, areas } = get();
    const newTabId = uuidv4();
    const newTab: NewTabItem = {
      id: newTabId,
      tabId,
      title,
      campaignId: options?.campaignId,
      campaignName: options?.campaignName,
    };
    // allTabs에 추가
    const updatedAll = [...allTabs, newTab];

    // 첫 영역에 삽입
    const firstArea = areas[0];
    const updatedFirst = {
      ...firstArea,
      tabs: [...firstArea.tabs, newTab],
      activeTabId: newTabId,
    };
    const updatedAreas = [updatedFirst, ...areas.slice(1)];

    set({
      allTabs: updatedAll,
      areas: updatedAreas,
      activeTabGlobalId: newTabId,
      // 분할 여부는 기존 상태 유지
    });
  },

  /** 탭 닫기 */
  closeTabV2: (tabUuid) => {
    const { allTabs, areas, activeTabGlobalId } = get();
    const newAll = allTabs.filter((t) => t.id !== tabUuid);

    // 각 영역에서 해당 탭 제거
    const newAreas = areas.map((area) => {
      if (!area.tabs.some((x) => x.id === tabUuid)) return area;
      const filtered = area.tabs.filter((x) => x.id !== tabUuid);
      let newActive = area.activeTabId;
      if (newActive === tabUuid) {
        newActive = filtered.length ? filtered[filtered.length - 1].id : null;
      }
      return {
        ...area,
        tabs: filtered,
        activeTabId: newActive,
      };
    });

    // 글로벌 활성 탭 갱신
    let newGlobal = activeTabGlobalId;
    if (activeTabGlobalId === tabUuid) {
      const stillOpen = newAreas.flatMap((a) => a.tabs);
      newGlobal = stillOpen.length ? stillOpen[stillOpen.length - 1].id : null;
    }

    set({
      allTabs: newAll,
      areas: newAreas,
      activeTabGlobalId: newGlobal,
    });
  },

  /** 탭 활성화 */
  activateTabV2: (tabUuid) => {
    const { areas } = get();
    // 어느 영역에 있는지 찾기
    const idx = areas.findIndex((a) => a.tabs.some((t) => t.id === tabUuid));
    if (idx === -1) return;

    const area = areas[idx];
    const updatedArea = { ...area, activeTabId: tabUuid };
    const newArr = [...areas];
    newArr[idx] = updatedArea;

    set({
      areas: newArr,
      activeTabGlobalId: tabUuid,
    });
  },

  /** 탭 복제 */
  duplicateTabV2: (tabUuid) => {
    const { allTabs, areas } = get();
    const original = allTabs.find((t) => t.id === tabUuid);
    if (!original) return;

    const dupId = uuidv4();
    const duplicated: NewTabItem = {
      ...original,
      id: dupId,
    };

    const updatedAll = [...allTabs, duplicated];

    // 같은 영역에 붙여넣기
    const newAreas = areas.map((area) => {
      if (!area.tabs.some((x) => x.id === tabUuid)) return area;
      return {
        ...area,
        tabs: [...area.tabs, duplicated],
        activeTabId: dupId,
      };
    });

    set({
      allTabs: updatedAll,
      areas: newAreas,
      activeTabGlobalId: dupId,
    });
  },

  /** 전체 분할 개수 설정 */
  splitTabAreaV2: (count) => {
    if (count < 1) return;
    const { allTabs } = get();

    if (count === 1) {
      // 모두 합쳐서 1개 영역으로
      set({
        areas: [
          {
            id: uuidv4(),
            tabs: [...allTabs],
            activeTabId: allTabs.length ? allTabs[allTabs.length - 1].id : null,
          },
        ],
        areaWidths: [100],
        splitMode: "none",
        activeTabGlobalId: allTabs.length
          ? allTabs[allTabs.length - 1].id
          : null,
      });
      return;
    }

    // 2~4
    const newAreas: TabArea[] = [];
    // 첫 영역에 모든 탭
    const firstArea: TabArea = {
      id: uuidv4(),
      tabs: [...allTabs],
      activeTabId: allTabs.length ? allTabs[allTabs.length - 1].id : null,
    };
    newAreas.push(firstArea);
    for (let i = 1; i < count; i++) {
      newAreas.push(createEmptyArea());
    }
    const eqWidth = 100 / count;
    const widths = Array(count).fill(eqWidth);

    set({
      areas: newAreas,
      areaWidths: widths,
      splitMode: "split",
      activeTabGlobalId: allTabs.length
        ? allTabs[allTabs.length - 1].id
        : null,
    });
  },

  /** 영역 닫기 */
  closeAreaV2: (areaId) => {
    const { areas, areaWidths, allTabs, activeTabGlobalId } = get();
    if (areas.length <= 1) return; // 1개 이하이면 닫지 않음

    const idx = areas.findIndex((a) => a.id === areaId);
    if (idx === -1) return;

    // 닫힐 영역의 탭들
    const removedTabs = areas[idx].tabs.map((t) => t.id);

    // allTabs에서도 제거
    const newAllTabs = allTabs.filter((t) => !removedTabs.includes(t.id));

    // 영역 삭제
    const remain = areas.filter((a) => a.id !== areaId);
    // 너비 재분배
    const closedW = areaWidths[idx];
    let newWidths = [...areaWidths];
    newWidths.splice(idx, 1);
    if (newWidths.length === 1) {
      newWidths[0] = 100;
    } else {
      const addEach = closedW / newWidths.length;
      newWidths = newWidths.map((w) => w + addEach);
    }

    // 활성 탭 재설정
    let newActive = activeTabGlobalId;
    if (removedTabs.includes(activeTabGlobalId || "")) {
      // 지워진 탭이었다면, 남은 탭 중 마지막을 활성화
      const still = remain.flatMap((r) => r.tabs);
      newActive = still.length ? still[still.length - 1].id : null;
    }

    // 분할 모드 재설정
    const newMode = remain.length > 1 ? "split" : "none";

    set({
      allTabs: newAllTabs,
      areas: remain,
      areaWidths: newWidths,
      splitMode: newMode,
      activeTabGlobalId: newActive,
    });
  },

  /** 탭을 다른 영역으로 이동 */
  moveTabToAreaV2: (tabUuid, targetAreaId) => {
    const { areas, activeTabGlobalId } = get();

    // 우선 소스 찾기
    let sourceIdx = -1;
    let foundTab: NewTabItem | null = null;
    for (let i = 0; i < areas.length; i++) {
      const area = areas[i];
      const t = area.tabs.find((x) => x.id === tabUuid);
      if (t) {
        sourceIdx = i;
        foundTab = t;
        break;
      }
    }
    if (!foundTab) return;
    // 이미 같은 영역이면 무시
    if (areas[sourceIdx].id === targetAreaId) return;

    // 소스 영역에서 제거
    const srcArea = areas[sourceIdx];
    const filteredTabs = srcArea.tabs.filter((t) => t.id !== tabUuid);
    let newSrcActive = srcArea.activeTabId;
    if (newSrcActive === tabUuid) {
      newSrcActive = filteredTabs.length
        ? filteredTabs[filteredTabs.length - 1].id
        : null;
    }
    const updatedSource = {
      ...srcArea,
      tabs: filteredTabs,
      activeTabId: newSrcActive,
    };

    // 타겟 영역에 추가
    const targetIdx = areas.findIndex((a) => a.id === targetAreaId);
    if (targetIdx === -1) return;
    const tgtArea = areas[targetIdx];
    const newTgtTabs = [...tgtArea.tabs, foundTab];
    const updatedTarget = {
      ...tgtArea,
      tabs: newTgtTabs,
      activeTabId: foundTab.id, // 새 탭 활성화
    };

    const newAreas = [...areas];
    newAreas[sourceIdx] = updatedSource;
    newAreas[targetIdx] = updatedTarget;

    set({
      areas: newAreas,
      activeTabGlobalId: foundTab.id,
    });
  },

  /** 영역 내 탭 순서 재정렬 */
  reorderTabsV2: (areaId, fromIndex, toIndex) => {
    const { areas } = get();
    const idx = areas.findIndex((a) => a.id === areaId);
    if (idx === -1) return;

    const area = areas[idx];
    const newTabs = [...area.tabs];
    const [removed] = newTabs.splice(fromIndex, 1);
    newTabs.splice(toIndex, 0, removed);

    const updated = { ...area, tabs: newTabs };
    const newAreas = [...areas];
    newAreas[idx] = updated;
    set({ areas: newAreas });
  },

  /** 영역 리사이즈 */
  resizeAreasV2: (areaIndex, deltaWidth) => {
    const { areaWidths } = get();
    if (areaIndex < 0 || areaIndex >= areaWidths.length - 1) return;

    const left = areaWidths[areaIndex];
    const right = areaWidths[areaIndex + 1];
    const newLeft = left + deltaWidth;
    const newRight = right - deltaWidth;
    if (newLeft < MIN_AREA_WIDTH || newRight < MIN_AREA_WIDTH) {
      return;
    }

    const newArr = [...areaWidths];
    newArr[areaIndex] = newLeft;
    newArr[areaIndex + 1] = newRight;
    set({ areaWidths: newArr });
  },

  getTabCountByIdV2: (menuId) => {
    const { allTabs } = get();
    return allTabs.filter((t) => t.tabId === menuId).length;
  },
}));
