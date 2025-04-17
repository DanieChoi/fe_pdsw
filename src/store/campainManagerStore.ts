// src/features/store/campainManagerStore.ts
import { create } from 'zustand';
import { SkillListDataResponse
  , CallingNumberListDataResponse
  , CampaignScheDuleListDataResponse 
  , CampaignSkillDataResponse
  , PhoneDescriptionListDataResponse
} from '../features/campaignManager/types/campaignManagerIndex';
import { CampaignInfoInsertRequest } from '@/features/campaignManager/hooks/useApiForCampaignManagerInsert';
import { MainDataResponse } from '@/features/auth/types/mainIndex';

interface CampainManagerState {
  skills: SkillListDataResponse[];
  callingNumbers: CallingNumberListDataResponse[];
  schedules: CampaignScheDuleListDataResponse[];
  campaignSkills: CampaignSkillDataResponse[];
  phoneDescriptions: PhoneDescriptionListDataResponse[];  
  totalCount: number;
  campaignGroupManagerInit: boolean;
  newCampaignManagerInfo: CampaignInfoInsertRequest;
  newCampaignInfo: MainDataResponse;
  newTenantId: string;
  newCampaignSchedule: CampaignScheDuleListDataResponse;
}

interface CampainManagerActions {
  setSkills: (skills: SkillListDataResponse[]) => void;
  setCallingNumbers: (callingNumbers: CallingNumberListDataResponse[]) => void;
  setSchedules: (schedules: CampaignScheDuleListDataResponse[]) => void;
  setCampaignSkills: (campaignSkills: CampaignSkillDataResponse[]) => void;
  setPhoneDescriptions: (phoneDescriptions: PhoneDescriptionListDataResponse[]) => void;
  setTotalCount: (count: number) => void;
  setCampaignGroupManagerInit: (init: boolean) => void;
  setNewCampaignManagerInfo: (newCampaignManagerInfo: CampaignInfoInsertRequest) => void;
  setNewCampaignInfo: (newCampaignInfo: MainDataResponse) => void;
  setNewTenantId: (newTenantId: string) => void;
  setNewCampaignSchedule: (newCampaignSchedule: CampaignScheDuleListDataResponse) => void;
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
  newCampaignManagerInfo: {} as CampaignInfoInsertRequest,
  newCampaignInfo: {} as MainDataResponse,
  newTenantId: ' ',
  newCampaignSchedule: {} as CampaignScheDuleListDataResponse,
  setSkills: (skills) => set({ skills }),
  setCallingNumbers: (callingNumbers) => set({ callingNumbers }),
  setSchedules: (schedules) => set({ schedules }),
  setCampaignSkills: (campaignSkills) => set({ campaignSkills }),
  setPhoneDescriptions: (phoneDescriptions) => set({ phoneDescriptions }),
  setTotalCount: (totalCount) => set({ totalCount }),
  setCampaignGroupManagerInit: (campaignGroupManagerInit) => set({ campaignGroupManagerInit }),
  setNewCampaignManagerInfo: (newCampaignManagerInfo) => set({ newCampaignManagerInfo }),
  setNewCampaignInfo: (newCampaignInfo) => set({ newCampaignInfo }),
  setNewTenantId: (newTenantId) => set({ newTenantId }),
  setNewCampaignSchedule: (newCampaignSchedule) => set({ newCampaignSchedule }),
}));