// src/features/auth/api/fetchSkills.ts
import { axiosInstance } from '@/lib/axios';
import { MainCredentials, SkillListResponse } from '../types/mainIndex';

// 스킬마스터정보조회 리스트 요청
export const fetchSkills = async (credentials: MainCredentials): Promise<SkillListResponse> => {
  const skillMasterInfoSearchRequestData = {
    filter: {      
      skill_id: {
        start: 1,
        end: 9999999,
      },    
      tenant_id: [
        credentials.tenant_id
      ]
    },
    sort: {
      skill_id: 0,
      tenant_id: 0,
    },
    page: {
      index: 1,
      items: 10,
    },
  };

  try {
    const { data } = await axiosInstance.post<SkillListResponse>(
      '/collections/skill', 
      skillMasterInfoSearchRequestData
    );
    return data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
    }
    throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
  }
};