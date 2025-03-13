// src/features/campaignManager/api/mainCampaignProgressInformation.ts
import { axiosRedisInstance } from '@/lib/axios';
import { CampaignProgressInformationRequest, CallProgressStatusResponse } from '../types/monitoringIndex';

// 발신진행상태 요청
export const fetchCallProgressStatus = async (credentials: CampaignProgressInformationRequest): Promise<CallProgressStatusResponse> => {

  try {
    const { data } = await axiosRedisInstance.get<CallProgressStatusResponse>(
      `/monitor/tenant/${credentials.tenantId}/campaign/dial?campaignId=${credentials.campaignId}`
    );
    return data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
    }
    throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
  }
};