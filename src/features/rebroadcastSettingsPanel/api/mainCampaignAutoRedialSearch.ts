// src/features/campaignManager/hooks/fetchCampaignAutoRedials.ts
import { axiosInstance } from '@/lib/axios';
import { CampaignCredentials, CampaignAutoRedialResponse } from '../types/rebroadcastSettingsPanelIndex';

// 캠페인 재발신 조회 리스트 요청
export const fetchCampaignAutoRedials = async (credentials: CampaignCredentials): Promise<CampaignAutoRedialResponse> => {
  const campaignAutoRedialSearchRequestData = {
    filter: {      
      campaign_id: {
        start: 1,
        end: 9999999,
      },    
    },
    sequence_number:{
      start: 0,
      end: 999
    },
    sort: {
      campaign_id: 0,
      sequence_number: 0
    },
    page: {
      index: 1,
      items: 10,
    },
  };

  try {
    const { data } = await axiosInstance.post<CampaignAutoRedialResponse>(
      '/collections/campaign-auto-redial', 
      campaignAutoRedialSearchRequestData
    );
    return data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
    }
    throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
  }
};