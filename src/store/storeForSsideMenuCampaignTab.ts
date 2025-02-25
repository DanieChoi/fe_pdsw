

// // 파일 경로: src/store/storeForSsideMenuCampaignTab.ts
// "use client";

// import { create } from "zustand";

// // 필터 모드를 'all' | 'skill' 두 가지로 관리
// type FilterMode = "all" | "skill";

// interface SideMenuCampaignTabState {
//   selectedMenus: number[];
//   skilIdsForCampaignTreeMenu: number[]; // 선택한 스킬 ID 목록
//   filterMode: FilterMode;              // 전체보기 or 스킬 필터링 모드

//   toggleMenu: (menuId: number) => void;
//   setSkilIdsForCampaignTreeMenu: (skillIds: number[]) => void;
//   setFilterMode: (mode: FilterMode) => void;
// }

// export const useSideMenuCampaignTabStore = create<SideMenuCampaignTabState>(
//   (set) => ({
//     selectedMenus: [],
//     skilIdsForCampaignTreeMenu: [],
//     filterMode: "all", // 초기에는 전체보기 모드

//     toggleMenu: (menuId) =>
//       set((state) => ({
//         selectedMenus: state.selectedMenus.includes(menuId)
//           ? state.selectedMenus.filter((id) => id !== menuId)
//           : [...state.selectedMenus, menuId],
//       })),

//     setSkilIdsForCampaignTreeMenu: (skillIds) =>
//       set(() => ({
//         skilIdsForCampaignTreeMenu: skillIds,
//       })),

//     // 필터 모드 변경 함수
//     setFilterMode: (mode) =>
//       set(() => ({
//         filterMode: mode,
//       })),
//   })
// );

"use client";

import { create } from "zustand";

// 필터 모드를 'all' | 'skill' 두 가지로 관리
type FilterMode = "all" | "skill";

interface SideMenuCampaignTabState {
  selectedMenus: number[];
  skilIdsForCampaignTreeMenu: number[]; // 선택한 스킬 ID 목록
  filterMode: FilterMode;              // 전체보기 or 스킬 필터링 모드

  toggleMenu: (menuId: number) => void;
  setSkilIdsForCampaignTreeMenu: (skillIds: number[]) => void;
  setFilterMode: (mode: FilterMode) => void;
}

export const useSideMenuCampaignTabStore = create<SideMenuCampaignTabState>(
  (set) => ({
    selectedMenus: [],
    skilIdsForCampaignTreeMenu: [],
    filterMode: "all", // 초기에는 전체보기 모드

    toggleMenu: (menuId) =>
      set((state) => ({
        selectedMenus: state.selectedMenus.includes(menuId)
          ? state.selectedMenus.filter((id) => id !== menuId)
          : [...state.selectedMenus, menuId],
      })),

    setSkilIdsForCampaignTreeMenu: (skillIds) =>
      set((state) => ({
        skilIdsForCampaignTreeMenu: skillIds,
        // 스킬이 선택되었는지에 따라 필터 모드 자동 설정
        filterMode: skillIds.length > 0 ? "skill" : state.filterMode,
      })),

    // 필터 모드 변경 함수
    setFilterMode: (mode) =>
      set(() => ({
        filterMode: mode,
      })),
  })
);