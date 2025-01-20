// src/features/store/campainManagerStore.ts
import { create } from 'zustand';
import { MainDataResponse
  , TenantListDataResponse
  , SkillListDataResponse
  , CallingNumberListDataResponse
  , CampaignScheDuleListDataResponse 
  , CampaignSkillDataResponse
  , PhoneDescriptionListDataResponse
} from '../features/auth/types/campaignManagerIndex';

interface CampainManagerState {
  campaigns: MainDataResponse[];
  tenants: TenantListDataResponse[];
  skills: SkillListDataResponse[];
  callingNumbers: CallingNumberListDataResponse[];
  schedules: CampaignScheDuleListDataResponse[];
  campaignSkills: CampaignSkillDataResponse[];
  phoneDescriptions: PhoneDescriptionListDataResponse[];  
  selectedCampaign: MainDataResponse | null;
  totalCount: number;
}

interface CampainManagerActions {
  setCampaigns: (campaigns: MainDataResponse[]) => void;
  setTenants: (tenants: TenantListDataResponse[]) => void;
  setSkills: (skills: SkillListDataResponse[]) => void;
  setCallingNumbers: (callingNumbers: CallingNumberListDataResponse[]) => void;
  setSchedules: (schedules: CampaignScheDuleListDataResponse[]) => void;
  setCampaignSkills: (campaignSkills: CampaignSkillDataResponse[]) => void;
  setPhoneDescriptions: (phoneDescriptions: PhoneDescriptionListDataResponse[]) => void;
  setSelectedCampaign: (campaign: MainDataResponse | null) => void;
  setTotalCount: (count: number) => void;
}

type CampainManagerStore = CampainManagerState & CampainManagerActions;

export const useCampainManagerStore = create<CampainManagerStore>((set) => ({
  campaigns: [],
  tenants: [],
  skills: [],
  callingNumbers: [],
  schedules: [],
  campaignSkills: [],
  phoneDescriptions: [],
  selectedCampaign: null,
  totalCount: 0,
  setCampaigns: (campaigns) => set({ campaigns }),
  setTenants: (tenants) => set({ tenants }),
  setSkills: (skills) => set({ skills }),
  setCallingNumbers: (callingNumbers) => set({ callingNumbers }),
  setSchedules: (schedules) => set({ schedules }),
  setCampaignSkills: (campaignSkills) => set({ campaignSkills }),
  setPhoneDescriptions: (phoneDescriptions) => set({ phoneDescriptions }),
  setSelectedCampaign: (campaign) => set({ selectedCampaign: campaign }),
  setTotalCount: (totalCount) => set({ totalCount }),
}));