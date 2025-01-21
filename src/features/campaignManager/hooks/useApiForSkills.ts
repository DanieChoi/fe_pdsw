// src/features/campaignManager/hooks/useApiForSkills.ts
import { useMutation } from '@tanstack/react-query';
import { fetchSkills } from '../api/mainSkillMasterInfoSearch';
import { UseMutationOptions } from '@tanstack/react-query';
import { SkillListCredentials, SkillListResponse, CampaignApiError } from '../types/campaignManagerIndex';

export function useApiForSkills(
  options?: UseMutationOptions<SkillListResponse, CampaignApiError, SkillListCredentials>
) {
  return useMutation({
    mutationKey: ['mainSkills'],
    mutationFn: fetchSkills,
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
    onError: (error: CampaignApiError, variables: SkillListCredentials, context: unknown) => {
      // console.error('API Error:', error);
      // toast.error(error.message || '데이터 로드에 실패했습니다.');
      options?.onError?.(error, variables, context);
    },
  });
}