// src/features/auth/api/fetchCampaigns.ts
import { axiosInstance } from '@/lib/axios';
import { MainCredentials, TenantListResponse } from '../types/mainIndex';

// 테넌트 리스트 요청
export const fetchTenants = async (): Promise<TenantListResponse> => {
  const tenantRequestData = {
    filter: {      
      tenant_id: {
        start: 0,
        end: 9999999,
      },
    },
    sort: {
      tenant_id: 1,
    },
    page: {
      index: 1,
      items: 10,
    },
  };

  try {
    const { data } = await axiosInstance.post<TenantListResponse>(
      '/collections/tenant', 
      tenantRequestData
    );
    return data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
    }
    throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
  }
};