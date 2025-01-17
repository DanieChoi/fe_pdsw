// src/features/store/mainStore.ts
import { create } from 'zustand';
import { MainDataResponse
  , TenantListDataResponse
  , SkillListDataResponse
  , CallingNumberListDataResponse
  , CampaignScheDuleListDataResponse 
  , CampaignSkillDataResponse
} from '../features/auth/types/mainIndex';

interface MainState {
  campaigns: MainDataResponse[];
  tenants: TenantListDataResponse[];
  skills: SkillListDataResponse[];
  callingNumbers: CallingNumberListDataResponse[];
  schedules: CampaignScheDuleListDataResponse[];
  campaignSkills: CampaignSkillDataResponse[];
  selectedCampaign: MainDataResponse | null;
  totalCount: number;
}

interface MainActions {
  setCampaigns: (campaigns: MainDataResponse[]) => void;
  setTenants: (tenants: TenantListDataResponse[]) => void;
  setSkills: (skills: SkillListDataResponse[]) => void;
  setCallingNumbers: (callingNumbers: CallingNumberListDataResponse[]) => void;
  setSchedules: (schedules: CampaignScheDuleListDataResponse[]) => void;
  setCampaignSkills: (campaignSkills: CampaignSkillDataResponse[]) => void;
  setSelectedCampaign: (campaign: MainDataResponse | null) => void;
  setTotalCount: (count: number) => void;
}

type MainStore = MainState & MainActions;

export const useMainStore = create<MainStore>((set) => ({
  campaigns: [],
  tenants: [],
  skills: [],
  callingNumbers: [],
  schedules: [],
  campaignSkills: [],
  selectedCampaign: null,
  totalCount: 0,
  setCampaigns: (campaigns) => set({ campaigns }),
  setTenants: (tenants) => set({ tenants }),
  setSkills: (skills) => set({ skills }),
  setCallingNumbers: (callingNumbers) => set({ callingNumbers }),
  setSchedules: (schedules) => set({ schedules }),
  setCampaignSkills: (campaignSkills) => set({ campaignSkills }),
  setSelectedCampaign: (campaign) => set({ selectedCampaign: campaign }),
  setTotalCount: (totalCount) => set({ totalCount }),
}));