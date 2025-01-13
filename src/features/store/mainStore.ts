// src/features/store/mainStore.ts
import { create } from 'zustand';
import { MainDataResponse } from '../auth/types/mainIndex';

interface MainState {
  campaigns: MainDataResponse[];
  selectedCampaign: MainDataResponse | null;
  totalCount: number;
}

interface MainActions {
  setCampaigns: (campaigns: MainDataResponse[]) => void;
  setSelectedCampaign: (campaign: MainDataResponse | null) => void;
  setTotalCount: (count: number) => void;
}

type MainStore = MainState & MainActions;

export const useMainStore = create<MainStore>((set) => ({
  campaigns: [],
  selectedCampaign: null,
  totalCount: 0,
  setCampaigns: (campaigns) => set({ campaigns }),
  setSelectedCampaign: (campaign) => set({ selectedCampaign: campaign }),
  setTotalCount: (totalCount) => set({ totalCount }),
}));