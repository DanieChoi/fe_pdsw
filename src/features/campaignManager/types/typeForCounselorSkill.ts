// src/features/campaignManager/types/typeForCounselorSkill.ts
export interface CounselorSkillRequestData {
  filter: {
    skill_id: {
      start: number;
      end: number;
    };
    tenant_id: number[];
  };
  sort: {
    skill_id: number;
    tenant_id: number;
  };
}

export interface CounselorSkill {
  tenant_id: number;
  skill_id: number;
  skill_name: string;
  skill_description: string;
}

export interface CounselorSkillListResponse {
  result_code: number;
  result_msg: string;
  result_count: number;
  result_data: CounselorSkill[];
}

export interface CounselorSkillApiError {
  response?: {
    data?: {
      result_msg: string;
    };
  };
}