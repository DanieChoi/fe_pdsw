// C:\nproject\fe_pdsw\src\store\storeForSsideMenuCampaignTab.ts
"use client";

import { create } from "zustand";

interface SideMenuCampaignTabState {
  selectedMenus: number[];
  toggleMenu: (menuId: number) => void;
}

export const useSideMenuCampaignTabStore = create<SideMenuCampaignTabState>(
  (set) => ({
    selectedMenus: [],
    toggleMenu: (menuId) =>
      set((state) => ({
        selectedMenus: state.selectedMenus.includes(menuId)
          ? state.selectedMenus.filter((id) => id !== menuId)
          : [...state.selectedMenus, menuId],
      })),
  })
);
