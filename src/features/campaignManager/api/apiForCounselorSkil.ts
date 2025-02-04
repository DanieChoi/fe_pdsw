// src/features/campaignManager/api/apiForCounselorSkill.ts
import { axiosInstance } from "@/lib/axios";
import { 
  CounselorSkillApiError, 
  CounselorSkillListResponse, 
  CounselorSkillRequestData 
} from "../types/typeForCounselorSkill";

export const apiForGetSkillListForCounselor = async (tenantId: number): Promise<CounselorSkillListResponse> => {
  const skillRequestData: CounselorSkillRequestData = {
    filter: {
      skill_id: {
        start: 1,
        end: 9999999,
      },
    //   tenant_id: [tenantId],
      tenant_id: [1],
    },
    sort: {
      skill_id: 0,
      tenant_id: 0,
    },
  };

  try {
    const { data } = await axiosInstance.post<CounselorSkillListResponse>(
      '/collections/skill',
      skillRequestData
    );

    if (data.result_code === 0 && data.result_msg === "Success") {
      console.log("api for counselor skill data check : ", data);
      return data;
    } else {
      throw new Error(`API Error: ${data.result_msg}`);
    }
  } catch (error) {
    const typedError = error as CounselorSkillApiError;
    throw new Error(
      typedError.response?.data?.result_msg || '상담원 스킬 목록을 가져오는데 실패했습니다.'
    );
  }
};