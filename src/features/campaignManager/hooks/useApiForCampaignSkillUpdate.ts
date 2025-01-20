// src/features/auth/hooks/useApiForLogin.tsx
import { useMutation } from '@tanstack/react-query';
import { fetchCampaignSkillUpdate } from '../api/mainCampaignSkillUpdate';
import { UseMutationOptions } from '@tanstack/react-query';
import { CampaignSkillUpdateRequest, UpdateResponse, AuthApiError } from '../types/campaignManagerIndex';

export function useApiForCampaignSkillUpdate(
  options?: UseMutationOptions<UpdateResponse, AuthApiError, CampaignSkillUpdateRequest>
) {
  return useMutation({
    mutationKey: ['mainCampaignSkillUpdate'],
    mutationFn: fetchCampaignSkillUpdate,
    onSuccess: (data, variables, context) => {
      console.log('API Response:', {
        code: data.result_code,
        message: data.result_msg,
      });
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error: AuthApiError, variables: CampaignSkillUpdateRequest, context: unknown) => {
      // console.error('API Error:', error);
      // toast.error(error.message || '데이터 로드에 실패했습니다.');
      options?.onError?.(error, variables, context);
    },
  });
}