// // src/features/store/mainStore.ts
// import { create } from 'zustand';
// import { MainDataResponse
//   , TenantListDataResponse
// } from '../features/auth/types/mainIndex';

// interface MainState {
//   campaigns: MainDataResponse[];
//   tenants: TenantListDataResponse[];
//   counselers: any[];
//   selectedCampaign: MainDataResponse | null;
//   totalCount: number;
// }

// interface MainActions {
//   setCampaigns: (campaigns: MainDataResponse[]) => void;
//   setTenants: (tenants: TenantListDataResponse[]) => void;
//   setCounselers: (counselers: any[]) => void;
//   setSelectedCampaign: (campaign: MainDataResponse | null) => void;
//   setTotalCount: (count: number) => void;
// }

// type MainStore = MainState & MainActions;

// export const useMainStore = create<MainStore>((set) => ({
//   campaigns: [],
//   tenants: [],
//   counselers: [],

//   selectedCampaign: null,
//   totalCount: 0,
//   setCampaigns: (campaigns) => set({ campaigns }),
//   setTenants: (tenants) => set({ tenants }),
//   setCounselers: (counselers) => set({ counselers }),
  
//   setSelectedCampaign: (campaign) => set({ selectedCampaign: campaign }),
//   setTotalCount: (totalCount) => set({ totalCount }),
// }));

// src/features/store/mainStore.ts
import { create } from 'zustand';
import { MainDataResponse, TenantListDataResponse } from '../features/auth/types/mainIndex';

// Define the DataProps type for selectedCampaignRow
export interface DataProps {
  no: number;
  campaignId: number;
  idName: string;
  startDate: string;
  endDate: string;
  skill: string;
  dialMode: string;
  callingNumber: string;
}

interface MainState {
  campaigns: MainDataResponse[];
  tenants: TenantListDataResponse[];
  counselers: any[];
  selectedCampaign: MainDataResponse | null;
  selectedCampaignRow: DataProps | null; // Added selectedCampaignRow
  totalCount: number;
  reBroadcastType: string;
}

interface MainActions {
  setCampaigns: (campaigns: MainDataResponse[]) => void;
  setTenants: (tenants: TenantListDataResponse[]) => void;
  setCounselers: (counselers: any[]) => void;
  setSelectedCampaign: (campaign: MainDataResponse | null) => void;
  setSelectedCampaignRow: (row: DataProps | null) => void; // Added setter for selectedCampaignRow
  setTotalCount: (count: number) => void;
  setReBroadcastType: (reBroadcastType:string) => void;
}

type MainStore = MainState & MainActions;

export const useMainStore = create<MainStore>((set) => ({
  campaigns: [],
  tenants: [],
  counselers: [],
  selectedCampaign: null,
  selectedCampaignRow: null, // Initialize selectedCampaignRow as null
  totalCount: 0,
  reBroadcastType: '',
  
  setCampaigns: (campaigns) => set({ campaigns }),
  setTenants: (tenants) => set({ tenants }),
  setCounselers: (counselers) => set({ counselers }),
  setSelectedCampaign: (campaign) => set({ selectedCampaign: campaign }),
  setSelectedCampaignRow: (row) => set({ selectedCampaignRow: row }), // Set selectedCampaignRow
  setTotalCount: (totalCount) => set({ totalCount }),
  setReBroadcastType: (reBroadcastType) => set({ reBroadcastType }),
}));