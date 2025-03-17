// src/features/store/campainManagerStore.ts
import { create } from 'zustand';
import { SkillListDataResponse
  , CallingNumberListDataResponse
  , CampaignScheDuleListDataResponse 
  , CampaignSkillDataResponse
  , PhoneDescriptionListDataResponse
} from '../features/campaignManager/types/campaignManagerIndex';

interface CampainManagerState {
  skills: SkillListDataResponse[];
  callingNumbers: CallingNumberListDataResponse[];
  schedules: CampaignScheDuleListDataResponse[];
  campaignSkills: CampaignSkillDataResponse[];
  phoneDescriptions: PhoneDescriptionListDataResponse[];  
  totalCount: number;
  campaignGroupManagerInit: boolean;
}

interface CampainManagerActions {
  setSkills: (skills: SkillListDataResponse[]) => void;
  setCallingNumbers: (callingNumbers: CallingNumberListDataResponse[]) => void;
  setSchedules: (schedules: CampaignScheDuleListDataResponse[]) => void;
  setCampaignSkills: (campaignSkills: CampaignSkillDataResponse[]) => void;
  setPhoneDescriptions: (phoneDescriptions: PhoneDescriptionListDataResponse[]) => void;
  setTotalCount: (count: number) => void;
  setCampaignGroupManagerInit: (init: boolean) => void;
}

type CampainManagerStore = CampainManagerState & CampainManagerActions;

export const useCampainManagerStore = create<CampainManagerStore>((set) => ({
  skills: [],
  callingNumbers: [],
  schedules: [],
  campaignSkills: [],
  phoneDescriptions: [],
  selectedCampaign: null,
  totalCount: 0,
  campaignGroupManagerInit: false,
  setSkills: (skills) => set({ skills }),
  setCallingNumbers: (callingNumbers) => set({ callingNumbers }),
  setSchedules: (schedules) => set({ schedules }),
  setCampaignSkills: (campaignSkills) => set({ campaignSkills }),
  setPhoneDescriptions: (phoneDescriptions) => set({ phoneDescriptions }),
  setTotalCount: (totalCount) => set({ totalCount }),
  setCampaignGroupManagerInit: (campaignGroupManagerInit) => set({ campaignGroupManagerInit }),
}));