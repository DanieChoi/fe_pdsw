// src/features/campaignManager/hooks/useApiForCampaignManagerInsert.ts

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchCampaignManagerInsert } from '../api/mainCampaignManagerInsert';
import { UseMutationOptions } from '@tanstack/react-query';
import { CampaignInsertResponse, CampaignApiError, CampaignInfoUpdateRequest } from '../types/campaignManagerIndex';
import { MainDataResponse } from '@/features/auth/types/mainIndex';

export function useApiForCampaignManagerInsert(
  options?: UseMutationOptions<CampaignInsertResponse, CampaignApiError, MainDataResponse>
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['mainCampaignManagerInsert'],
    mutationFn: fetchCampaignManagerInsert,
    onSuccess: (data, variables, context) => {
      console.log('API Response:', {
        code: data.result_code,
        message: data.result_msg,
      });
      options?.onSuccess?.(data, variables, context);

      queryClient.invalidateQueries({ queryKey: ['treeMenuDataForSideMenu'] });
    },
    onError: (error: CampaignApiError, variables: MainDataResponse, context: unknown) => {
      options?.onError?.(error, variables, context);
    },
  });
}
