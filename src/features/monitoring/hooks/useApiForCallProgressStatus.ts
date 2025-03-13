// src/features/campaignManager/hooks/useApiForCallingNumber.ts
import { useMutation } from '@tanstack/react-query';
import { fetchCallProgressStatus } from '../api/mainCallProgressStatus';
import { UseMutationOptions } from '@tanstack/react-query';
import { CampaignProgressInformationRequest, CallProgressStatusResponse, MonitoringApiError } from '../types/monitoringIndex';

export function useApiForCallProgressStatus(
  options?: UseMutationOptions<CallProgressStatusResponse, MonitoringApiError, CampaignProgressInformationRequest>
) {
  return useMutation({
    mutationKey: ['mainCallProgressStatus'],
    mutationFn: fetchCallProgressStatus,
    onSuccess: (data, variables, context) => {
      console.log('API Response:', {
        code: data.code,
        message: data.message,
        data: data.sendingProgressStatusList
      });
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error: MonitoringApiError, variables: CampaignProgressInformationRequest, context: unknown) => {
      // console.error('API Error:', error);
      // toast.error(error.message || '데이터 로드에 실패했습니다.');
      options?.onError?.(error, variables, context);
    },
  });
}