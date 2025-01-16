// src/features/store/mainStore.ts
import { create } from 'zustand';
import { MainDataResponse, TenantListDataResponse, SkillListDataResponse, CallingNumberListDataResponse } from '../features/auth/types/mainIndex';

interface MainState {
  campaigns: MainDataResponse[];
  tenants: TenantListDataResponse[];
  skills: SkillListDataResponse[];
  callingNumbers: CallingNumberListDataResponse[];
  selectedCampaign: MainDataResponse | null;
  totalCount: number;
}

interface MainActions {
  setCampaigns: (campaigns: MainDataResponse[]) => void;
  setTenants: (tenants: TenantListDataResponse[]) => void;
  setSkills: (skills: SkillListDataResponse[]) => void;
  setCallingNumbers: (callingNumbers: CallingNumberListDataResponse[]) => void;
  setSelectedCampaign: (campaign: MainDataResponse | null) => void;
  setTotalCount: (count: number) => void;
}

type MainStore = MainState & MainActions;

export const useMainStore = create<MainStore>((set) => ({
  campaigns: [],
  tenants: [],
  skills: [],
  callingNumbers: [],
  selectedCampaign: null,
  totalCount: 0,
  setCampaigns: (campaigns) => set({ campaigns }),
  setTenants: (tenants) => set({ tenants }),
  setSkills: (skills) => set({ skills }),
  setCallingNumbers: (callingNumbers) => set({ callingNumbers }),
  setSelectedCampaign: (campaign) => set({ selectedCampaign: campaign }),
  setTotalCount: (totalCount) => set({ totalCount }),
}));