"use client";

import { create } from "zustand";

interface SideMenuCampaignTabState {
  selectedMenus: number[];
  skilIdsForCampaignTreeMenu: number[]; // 선택한 스킬 ID 목록을 숫자로 저장
  toggleMenu: (menuId: number) => void;
  setSkilIdsForCampaignTreeMenu: (skillIds: number[]) => void;
}

export const useSideMenuCampaignTabStore = create<SideMenuCampaignTabState>(
  (set) => ({
    selectedMenus: [],
    skilIdsForCampaignTreeMenu: [], // 초기값

    toggleMenu: (menuId) =>
      set((state) => ({
        selectedMenus: state.selectedMenus.includes(menuId)
          ? state.selectedMenus.filter((id) => id !== menuId)
          : [...state.selectedMenus, menuId],
      })),

    setSkilIdsForCampaignTreeMenu: (skillIds) =>
      set(() => ({
        skilIdsForCampaignTreeMenu: skillIds,
      })),
  })
);
