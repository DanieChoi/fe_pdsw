// src\store\useAvailableMenuStore.ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { IMenuInfo } from '@/widgets/header/api/typeForMenusAuthorityInfo';

interface AvailableMenuState {
  availableMenus: IMenuInfo[];
  availableHeaderMenus: IMenuInfo[]; 
  availableHeaderMenuIds: number[];
  // 캠페인 테넌트 컨텍스트 메뉴 추가
  availableCampaignTenantContextMenus: IMenuInfo[];
  availableCampaignTenantContextMenuIds: number[];
  isLoading: boolean;
  isError: boolean;
  setAvailableMenus: (menus: IMenuInfo[]) => void;
  setAvailableHeaderMenus: (menus: IMenuInfo[]) => void;
  setAvailableHeaderMenuIds: (ids: number[]) => void;
  // 캠페인 테넌트 컨텍스트 메뉴 setter 추가
  setAvailableCampaignTenantContextMenus: (menus: IMenuInfo[]) => void;
  setAvailableCampaignTenantContextMenuIds: (ids: number[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: boolean) => void;
  clearMenus: () => void;
}

export const useAvailableMenuStore = create<AvailableMenuState>()(
  devtools(
    persist(
      (set) => ({
        availableMenus: [],
        availableHeaderMenus: [],
        availableHeaderMenuIds: [],
        // 캠페인 테넌트 컨텍스트 메뉴 초기화
        availableCampaignTenantContextMenus: [],
        availableCampaignTenantContextMenuIds: [],
        isLoading: false,
        isError: false,
        setAvailableMenus: (menus) => set({ availableMenus: menus }, false, "setAvailableMenus"),
        setAvailableHeaderMenus: (menus) => set({ availableHeaderMenus: menus }, false, "setAvailableHeaderMenus"),
        setAvailableHeaderMenuIds: (ids) => set({ availableHeaderMenuIds: ids }, false, "setAvailableHeaderMenuIds"),
        // 캠페인 테넌트 컨텍스트 메뉴 setter 구현
        setAvailableCampaignTenantContextMenus: (menus) => set({ availableCampaignTenantContextMenus: menus }, false, "setAvailableCampaignTenantContextMenus"),
        setAvailableCampaignTenantContextMenuIds: (ids) => set({ availableCampaignTenantContextMenuIds: ids }, false, "setAvailableCampaignTenantContextMenuIds"),
        setLoading: (loading) => set({ isLoading: loading }, false, "setLoading"),
        setError: (error) => set({ isError: error }, false, "setError"), 
        clearMenus: () => set(
          { 
            availableMenus: [], 
            availableHeaderMenus: [], 
            availableHeaderMenuIds: [],
            availableCampaignTenantContextMenus: [],
            availableCampaignTenantContextMenuIds: []
          }, 
          false, 
          "clearMenus"
        ),
      }),
      {
        name: "available-menu-storage",
      }
    ),
    { name: "AvailableMenuStore" }
  )
);