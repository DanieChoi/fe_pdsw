import { axiosInstance } from "@/lib/axios";

// 📌 캠페인 스킬 항목 타입
// src/shared/api/campaign/apiForCampaignSkillListForSystemAdmin.ts
export interface CampaignSkillItemForSystemAdmin {
  skill_id: number;
  tenant_id: number;
  campaign_id: number[]; // 캠페인 ID 배열
}

// 📌 요청 타입
export interface IRequestTypeForCampaignSkillListForSystemAdmin {
  filter: {
    skill_id?: {
      start: number;
      end: number;
    };
    tenant_id?: number[];
  };
  sort?: {
    skill_id?: number; // 0: 오름차순, 1: 내림차순
    tenant_id?: number; // 0: 오름차순, 1: 내림차순
  };
  page: {
    index: number;
    items: number;
  };
}

// 📌 응답 타입
export interface IResponseTypeForCampaignSkillListForSystemAdmin {
  result_code: number;
  result_msg: string;
  result_count?: number;
  total_count?: number;
  result_data: CampaignSkillItemForSystemAdmin[];
}

// 📌 기본 요청 값
const defaultRequest: IRequestTypeForCampaignSkillListForSystemAdmin = {
  filter: {
    skill_id: {
      start: 1,
      end: 9999999
    }
  },
  sort: {
    skill_id: 0
  },
  page: {
    index: 1,
    items: 100 // 충분한 데이터를 가져오기 위해 더 많은 항목으로 설정
  }
};

// 📌 API 호출 함수
export const apiForCampaignSkillListForSystemAdmin = async (
  request: Partial<IRequestTypeForCampaignSkillListForSystemAdmin> = {}
): Promise<IResponseTypeForCampaignSkillListForSystemAdmin> => {
  const finalRequest: IRequestTypeForCampaignSkillListForSystemAdmin = {
    ...defaultRequest,
    ...request,
    filter: {
      ...defaultRequest.filter,
      ...request.filter,
    },
    sort: {
      ...defaultRequest.sort,
      ...request.sort,
    },
    page: {
      ...defaultRequest.page,
      ...request.page,
    },
  };

  try {
    const response = await axiosInstance.post<IResponseTypeForCampaignSkillListForSystemAdmin>(
      "collections/skill-campaign", // 엔드포인트 수정
      finalRequest
    );
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
    }
    throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
  }
};