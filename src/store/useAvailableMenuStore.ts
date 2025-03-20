// src\store\useAvailableMenuStore.ts
import { create } from 'zustand';
import { IMenuInfo } from '@/widgets/header/api/typeForMenusAuthorityInfo';

interface AvailableMenuState {
  availableMenus: IMenuInfo[];
  isLoading: boolean;
  isError: boolean;
  setAvailableMenus: (menus: IMenuInfo[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: boolean) => void;
  clearMenus: () => void;
}

export const useAvailableMenuStore = create<AvailableMenuState>((set) => ({
  availableMenus: [],
  isLoading: false,
  isError: false,
  setAvailableMenus: (menus) => set({ availableMenus: menus }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ isError: error }),
  clearMenus: () => set({ availableMenus: [] }),
}));