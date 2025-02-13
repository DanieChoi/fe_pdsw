// src/features/auth/api/fetchCampaigns.ts
import { axiosInstance } from '@/lib/axios';
import { MainCredentials, MainResponse } from '../types/mainIndex';

// 캠페인 리스트 요청
export const fetchCampaigns = async (credentials: MainCredentials): Promise<MainResponse> => {
  const mainData = {
    filter: {
      campaign_id: {
        start: 1,
        end: 9999999,
      },
    },
    sort: {
      campaign_id: 1,
    },
    page: {
      index: 1,
      items: 10,
    },
  };

  try {
    const { data } = await axiosInstance.post<MainResponse>(
      '/collections/campaign', 
      mainData
    );
    return data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
    }
    throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
  }
};

export const fetchCounselorList = async (credentials: MainCredentials): Promise<any> => {
  try {
    const { data } = await axiosInstance.get<any>(
      `/api/v1/counselor/list?tenantId=${credentials.tenant_id}&roleId=${credentials.roleId}`
    );
    return data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
    }
    throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
  }
}