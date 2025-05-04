// // src/features/store/campainManagerStore.ts
// import { create } from 'zustand';
// import { SkillListDataResponse
//   , CallingNumberListDataResponse
//   , CampaignScheDuleListDataResponse 
//   , CampaignSkillDataResponse
//   , PhoneDescriptionListDataResponse
// } from '../features/campaignManager/types/campaignManagerIndex';
// import { CampaignInfoInsertRequest } from '@/features/campaignManager/hooks/useApiForCampaignManagerInsert';
// import { MainDataResponse } from '@/features/auth/types/mainIndex';
// import { campaignChannel } from '@/lib/broadcastChannel';
// import { CampaignInfo, CampaignManagerInfo } from '@/app/main/comp/CreateCampaignFormPanel/variables/variablesForCreateCampaignForm';
// import { CampaignScheduleInfo } from '@/app/main/comp/CreateCampaignFormPanel/variables/interfacesForCreateCampaign';

// // Import default values for reset function


// interface CampainManagerState {
//   skills: SkillListDataResponse[];
//   callingNumbers: CallingNumberListDataResponse[];
//   schedules: CampaignScheDuleListDataResponse[];
//   campaignSkills: CampaignSkillDataResponse[];
//   phoneDescriptions: PhoneDescriptionListDataResponse[];  
//   totalCount: number;
//   campaignGroupManagerInit: boolean;
//   newCampaignManagerInfo: CampaignInfoInsertRequest;
//   newCampaignInfo: MainDataResponse;
//   newTenantId: string;
//   newCampaignSchedule: CampaignScheDuleListDataResponse;
//   isAlreadyOpend: boolean
//   campaignManagerHeaderTenantId: string;
//   campaignManagerHeaderCampaignName: string;
//   campaignManagerHeaderDailMode: string;
//   campaignManagerHeaderSkill: string;
//   campaignManagerHeaderCallNumber: string;
//   campaignManagerCampaignId: string;
// }

// interface CampainManagerActions {
//   setSkills: (skills: SkillListDataResponse[]) => void;
//   setCallingNumbers: (callingNumbers: CallingNumberListDataResponse[]) => void;
//   setSchedules: (schedules: CampaignScheDuleListDataResponse[]) => void;
//   setCampaignSkills: (campaignSkills: CampaignSkillDataResponse[]) => void;
//   setPhoneDescriptions: (phoneDescriptions: PhoneDescriptionListDataResponse[]) => void;
//   setTotalCount: (count: number) => void;
//   setCampaignGroupManagerInit: (init: boolean) => void;
//   setNewCampaignManagerInfo: (newCampaignManagerInfo: CampaignInfoInsertRequest) => void;
//   setNewCampaignInfo: (newCampaignInfo: MainDataResponse) => void;
//   setNewTenantId: (newTenantId: string) => void;
//   setNewCampaignSchedule: (newCampaignSchedule: CampaignScheDuleListDataResponse) => void;
//   resetCampaignState: (tenantId?: string) => void; // Add new reset function
//   setIsAlreadyOpend: (isAlreadyOpend: boolean) => void; // Add new isAlreadyOpend function
//   setCampaignManagerHeaderTenantId: (campaignManagerHeaderTenantId: string) => void;
//   setCampaignManagerHeaderCampaignName: (campaignManagerHeaderCampaignName: string) => void;
//   setCampaignManagerHeaderDailMode: (campaignManagerHeaderDailMode: string) => void;
//   setCampaignManagerHeaderSkill: (campaignManagerHeaderSkill: string) => void;
//   setCampaignManagerHeaderCallNumber: (campaignManagerHeaderCallNumber: string) => void;
//   setCampaignManagerCampaignId: (campaignManagerCampaignId: string) => void;
// }

// type CampainManagerStore = CampainManagerState & CampainManagerActions;

// export const useCampainManagerStore = create<CampainManagerStore>((set) => ({
//   skills: [],
//   callingNumbers: [],
//   schedules: [],
//   campaignSkills: [],
//   phoneDescriptions: [],
//   selectedCampaign: null,
//   totalCount: 0,
//   campaignGroupManagerInit: false,
//   newCampaignManagerInfo: {} as CampaignInfoInsertRequest,
//   newCampaignInfo: {} as MainDataResponse,
//   newTenantId: ' ',
//   newCampaignSchedule: {} as CampaignScheDuleListDataResponse,
//   campaignManagerHeaderTenantId: '',
//   campaignManagerHeaderCampaignName: '',
//   campaignManagerHeaderDailMode: '',
//   campaignManagerHeaderSkill: '',
//   campaignManagerHeaderCallNumber: '',
//   campaignManagerCampaignId: '',
//   setSkills: (skills) => {
//     set({ skills });  
//     campaignChannel.postMessage({
//       type: "skills_info_update",
//       skillsId: skills.map((skill) => skill.skill_id),
//     });
//   },
//   setCallingNumbers: (callingNumbers) => set({ callingNumbers }),
//   setSchedules: (schedules) => set({ schedules }),
//   setCampaignSkills: (campaignSkills) => set({ campaignSkills }),
//   setPhoneDescriptions: (phoneDescriptions) => set({ phoneDescriptions }),
//   setTotalCount: (totalCount) => set({ totalCount }),
//   setCampaignGroupManagerInit: (campaignGroupManagerInit) => set({ campaignGroupManagerInit }),
//   setNewCampaignManagerInfo: (newCampaignManagerInfo) => set({ newCampaignManagerInfo }),
//   setNewCampaignInfo: (newCampaignInfo) => set({ newCampaignInfo }),
//   setNewTenantId: (newTenantId) => set({ newTenantId }),
//   setNewCampaignSchedule: (newCampaignSchedule) => set({ newCampaignSchedule }),
  
//   // Add new resetCampaignState function
//   resetCampaignState: (tenantId) => {
//     // Get default values from the imports or define them inline
//     const defaultCampaignManagerInfo = {...CampaignManagerInfo};
//     const defaultCampaignInfo = {...CampaignInfo};
//     const defaultCampaignSchedule = {...CampaignScheduleInfo};
    
//     set({
//       newCampaignManagerInfo: defaultCampaignManagerInfo,
//       newCampaignInfo: defaultCampaignInfo,
//       newTenantId: tenantId || ' ',
//       newCampaignSchedule: defaultCampaignSchedule,
//     });
//   },
//   setIsAlreadyOpend: (isAlreadyOpend) => set({ isAlreadyOpend }),
//   setCampaignManagerHeaderTenantId: (campaignManagerHeaderTenantId) => set({ campaignManagerHeaderTenantId }),
//   setCampaignManagerHeaderCampaignName: (campaignManagerHeaderCampaignName) => set({ campaignManagerHeaderCampaignName }),
//   setCampaignManagerHeaderDailMode: (campaignManagerHeaderDailMode) => set({ campaignManagerHeaderDailMode }),
//   setCampaignManagerHeaderSkill: (campaignManagerHeaderSkill) => set({ campaignManagerHeaderSkill }),
//   setCampaignManagerHeaderCallNumber: (campaignManagerHeaderCallNumber) => set({ campaignManagerHeaderCallNumber }),
//   setCampaignManagerCampaignId: (campaignManagerCampaignId) => set({ campaignManagerCampaignId }),
//   isAlreadyOpend: false
// }));

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
import { campaignChannel } from '@/lib/broadcastChannel';
import { CampaignInfo, CampaignManagerInfo } from '@/app/main/comp/CreateCampaignFormPanel/variables/variablesForCreateCampaignForm';
import { CampaignScheduleInfo } from '@/app/main/comp/CreateCampaignFormPanel/variables/interfacesForCreateCampaign';

// Import default values for reset function


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
  isAlreadyOpend: boolean
  campaignManagerHeaderTenantId: string;
  campaignManagerHeaderCampaignName: string;
  campaignManagerHeaderDailMode: string;
  campaignManagerHeaderSkill: string;
  campaignManagerHeaderCallNumber: string;
  campaignManagerCampaignId: string;
  // 스킬 상태 추가
  skillsLoaded: boolean;
  skillsLoading: boolean;
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
  resetCampaignState: (tenantId?: string) => void; // Add new reset function
  setIsAlreadyOpend: (isAlreadyOpend: boolean) => void; // Add new isAlreadyOpend function
  setCampaignManagerHeaderTenantId: (campaignManagerHeaderTenantId: string) => void;
  setCampaignManagerHeaderCampaignName: (campaignManagerHeaderCampaignName: string) => void;
  setCampaignManagerHeaderDailMode: (campaignManagerHeaderDailMode: string) => void;
  setCampaignManagerHeaderSkill: (campaignManagerHeaderSkill: string) => void;
  setCampaignManagerHeaderCallNumber: (campaignManagerHeaderCallNumber: string) => void;
  setCampaignManagerCampaignId: (campaignManagerCampaignId: string) => void;
  // 스킬 액션 추가
  setSkillsLoaded: (loaded: boolean) => void;
  setSkillsLoading: (loading: boolean) => void;
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
  campaignManagerHeaderTenantId: '',
  campaignManagerHeaderCampaignName: '',
  campaignManagerHeaderDailMode: '',
  campaignManagerHeaderSkill: '',
  campaignManagerHeaderCallNumber: '',
  campaignManagerCampaignId: '',
  // 스킬 상태 초기화
  skillsLoaded: false,
  skillsLoading: false,
  setSkills: (skills) => {
    set({ 
      skills,
      skillsLoaded: true,
      skillsLoading: false
    });  
    campaignChannel.postMessage({
      type: "skills_info_update",
      skillsId: skills.map((skill) => skill.skill_id),
    });
  },
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
  
  // Add new resetCampaignState function
  resetCampaignState: (tenantId) => {
    // Get default values from the imports or define them inline
    const defaultCampaignManagerInfo = {...CampaignManagerInfo};
    const defaultCampaignInfo = {...CampaignInfo};
    const defaultCampaignSchedule = {...CampaignScheduleInfo};
    
    set({
      newCampaignManagerInfo: defaultCampaignManagerInfo,
      newCampaignInfo: defaultCampaignInfo,
      newTenantId: tenantId || ' ',
      newCampaignSchedule: defaultCampaignSchedule,
    });
  },
  setIsAlreadyOpend: (isAlreadyOpend) => set({ isAlreadyOpend }),
  setCampaignManagerHeaderTenantId: (campaignManagerHeaderTenantId) => set({ campaignManagerHeaderTenantId }),
  setCampaignManagerHeaderCampaignName: (campaignManagerHeaderCampaignName) => set({ campaignManagerHeaderCampaignName }),
  setCampaignManagerHeaderDailMode: (campaignManagerHeaderDailMode) => set({ campaignManagerHeaderDailMode }),
  setCampaignManagerHeaderSkill: (campaignManagerHeaderSkill) => set({ campaignManagerHeaderSkill }),
  setCampaignManagerHeaderCallNumber: (campaignManagerHeaderCallNumber) => set({ campaignManagerHeaderCallNumber }),
  setCampaignManagerCampaignId: (campaignManagerCampaignId) => set({ campaignManagerCampaignId }),
  // 스킬 액션 구현
  setSkillsLoaded: (loaded) => set({ skillsLoaded: loaded }),
  setSkillsLoading: (loading) => set({ skillsLoading: loading }),
  isAlreadyOpend: false
}));