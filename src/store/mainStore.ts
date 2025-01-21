// src/features/store/mainStore.ts
import { create } from 'zustand';
import { MainDataResponse
  , TenantListDataResponse
} from '../features/auth/types/mainIndex';

interface MainState {
  campaigns: MainDataResponse[];
  tenants: TenantListDataResponse[];
  counselers: any[];
  selectedCampaign: MainDataResponse | null;
  totalCount: number;
}

interface MainActions {
  setCampaigns: (campaigns: MainDataResponse[]) => void;
  setTenants: (tenants: TenantListDataResponse[]) => void;
  setCounselers: (counselers: any[]) => void;
  setSelectedCampaign: (campaign: MainDataResponse | null) => void;
  setTotalCount: (count: number) => void;
}

type MainStore = MainState & MainActions;

export const useMainStore = create<MainStore>((set) => ({
  campaigns: [],
  tenants: [],
  counselers: [],

  selectedCampaign: null,
  totalCount: 0,
  setCampaigns: (campaigns) => set({ campaigns }),
  setTenants: (tenants) => set({ tenants }),
  setCounselers: (counselers) => set({ counselers }),
  
  setSelectedCampaign: (campaign) => set({ selectedCampaign: campaign }),
  setTotalCount: (totalCount) => set({ totalCount }),
}));