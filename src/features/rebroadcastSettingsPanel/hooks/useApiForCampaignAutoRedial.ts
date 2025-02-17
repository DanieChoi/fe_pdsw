// src/features/campaignManager/hooks/useApiForCampaignAutoRedial.ts
import { useMutation } from '@tanstack/react-query';
import { fetchCampaignAutoRedials } from '../api/mainCampaignAutoRedialSearch';
import { UseMutationOptions } from '@tanstack/react-query';
import { CampaignCredentials, CampaignAutoRedialResponse, rebroadcastSettingsPanelApiError } from '../types/rebroadcastSettingsPanelIndex';

export function useApiForCampaignAutoRedial(
  options?: UseMutationOptions<CampaignAutoRedialResponse, rebroadcastSettingsPanelApiError, CampaignCredentials>
) {
  return useMutation({
    mutationKey: ['mainCampaignAutoRedials'],
    mutationFn: fetchCampaignAutoRedials,
    onSuccess: (data, variables, context) => {
      console.log('API Response:', {
        code: data.result_code,
        message: data.result_msg,
        count: data.result_count,
        total: data.total_count,
        data: data.result_data
      });
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error: rebroadcastSettingsPanelApiError, variables: CampaignCredentials, context: unknown) => {
      // console.error('API Error:', error);
      // toast.error(error.message || '데이터 로드에 실패했습니다.');
      options?.onError?.(error, variables, context);
    },
  });
}