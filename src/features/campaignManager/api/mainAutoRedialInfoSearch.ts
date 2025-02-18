// src/features/campaignManager/api/mainAutoRedialInfoSearch.ts
import { axiosInstance } from '@/lib/axios';
import { CampaignCredentials, AutoRedialListResponse } from '../types/campaignManagerIndex';

// 캠페인 재발신 스케줄링 정보 조회 요청
export const fetchAutoRedials = async (credentials: CampaignCredentials): Promise<AutoRedialListResponse> => {
  const autoRedialListSearchRequestData = {
    filter: {      
      campaign_id: {
        start: 1,
        end: 9999999,
      },    
      sequence_number: {
          start: 0,
          end: 999
      }
    },
    sort: {
      campaign_id: 0,
      sequence_number: 0
    },
    page: {
      index: 1,
      items: 9999999,
    },
  };

  try {
    const { data } = await axiosInstance.post<AutoRedialListResponse>(
      '/collections/campaign-scheduled-redial', 
      autoRedialListSearchRequestData
    );
    return data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
    }
    throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
  }
};