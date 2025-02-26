// src/features/campaignManager/hooks/useApiForAgentStateMonitoringList.ts
import { useMutation } from '@tanstack/react-query';
import { fetchAgentStateMonitoringList } from '../api/mainAgentStateMonitoringList';
import { UseMutationOptions } from '@tanstack/react-query';
import { CampaignProgressInformationRequest, AgentStateMonitoringListResponse, MonitoringApiError } from '../types/monitoringIndex';

export function useApiForAgentStateMonitoringList(
  options?: UseMutationOptions<AgentStateMonitoringListResponse, MonitoringApiError, CampaignProgressInformationRequest>
) {
  return useMutation({
    mutationKey: ['mainAgentStateMonitoringList'],
    mutationFn: fetchAgentStateMonitoringList,
    onSuccess: (data, variables, context) => {
      console.log('API Response:', {
        code: data.code,
        message: data.message,
        data: data.counselorStatusList
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