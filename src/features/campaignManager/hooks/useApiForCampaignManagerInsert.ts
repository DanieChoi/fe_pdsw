// src/features/campaignManager/hooks/useApiForCampaignManagerInsert.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchCampaignManagerInsert } from '../api/mainCampaignManagerInsert';
import { UseMutationOptions } from '@tanstack/react-query';
import { CampaignInfoUpdateRequest, UpdateResponse, CampaignApiError } from '../types/campaignManagerIndex';

export function useApiForCampaignManagerInsert(
  options?: UseMutationOptions<UpdateResponse, CampaignApiError, CampaignInfoUpdateRequest>
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

    queryClient.invalidateQueries({ queryKey: ["treeMenuDataForSideMenu"] });

    },
    onError: (error: CampaignApiError, variables: CampaignInfoUpdateRequest, context: unknown) => {
      // console.error('API Error:', error);
      // toast.error(error.message || '데이터 로드에 실패했습니다.');
      options?.onError?.(error, variables, context);
    },
  });
}