import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { UseMutationOptions } from '@tanstack/react-query';
import { AddCampaignGroupCredentials, SuccessResponse } from '@/features/campaignManager/types/typeForCampaignGroupForSideBar';
import { apiForCreateCampaignGroup } from '../api/apiForCampaignGroup';

interface CreateCampaignGroupError {
  message: string;
  status?: number;
  result_code?: string;
  result_msg?: string;
}

export function useApiForCreateCampaignGroup(
  options?: UseMutationOptions<
    SuccessResponse,
    CreateCampaignGroupError,
    AddCampaignGroupCredentials
  >
): UseMutationResult<SuccessResponse, CreateCampaignGroupError, AddCampaignGroupCredentials, unknown> {
  const queryClient = useQueryClient();

  return useMutation<SuccessResponse, CreateCampaignGroupError, AddCampaignGroupCredentials>({
    mutationKey: ['createCampaignGroup'],
    mutationFn: (credentials: AddCampaignGroupCredentials) => 
      apiForCreateCampaignGroup(credentials),
    onSuccess: (data, variables, context) => {
      // 캠페인 그룹 관련 쿼리 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: ['campaignGroups', variables.tenant_id.toString()]
      });
      
      console.log('✅ 캠페인 그룹 생성 성공:', data);
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      console.error('❌ 캠페인 그룹 생성 실패:', error);
      options?.onError?.(error, variables, context);
    },
  });
}