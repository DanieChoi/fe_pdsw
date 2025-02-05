// src/features/campaignManager/hooks/useApiForCampaignScheduleInsert.ts
import { useMutation } from '@tanstack/react-query';
import { fetchCampaignScheduleInsert } from '../api/mainCampaignScheduleInsert';
import { UseMutationOptions } from '@tanstack/react-query';
import { CampaignScheDuleListDataResponse, UpdateResponse, CampaignApiError } from '../types/campaignManagerIndex';

export function useApiForCampaignScheduleInsert(
  options?: UseMutationOptions<UpdateResponse, CampaignApiError, CampaignScheDuleListDataResponse>
) {
  return useMutation({
    mutationKey: ['mainCampaignScheduleInsert'],
    mutationFn: fetchCampaignScheduleInsert,
    onSuccess: (data, variables, context) => {
      console.log('API Response:', {
        code: data.result_code,
        message: data.result_msg,
      });
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error: CampaignApiError, variables: CampaignScheDuleListDataResponse, context: unknown) => {
      // console.error('API Error:', error);
      // toast.error(error.message || '데이터 로드에 실패했습니다.');
      options?.onError?.(error, variables, context);
    },
  });
}