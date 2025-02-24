import { useMutation, useQueryClient, UseMutationOptions } from '@tanstack/react-query';
import { fetchCampaignStatusUpdate } from '../api/mainCampaignStatusUpdate';
import { CampaignStatusDataRequest, CampaignStatusResponse, CampaignApiError } from '../types/campaignManagerIndex';
import { toast } from 'react-toastify';
import { getCampaignErrorMessage } from '@/lib/error_message';

export function useApiForCampaignStatusUpdate(
  options?: UseMutationOptions<CampaignStatusResponse, CampaignApiError, CampaignStatusDataRequest>
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['mainCampaignStatusUpdate'],
    mutationFn: fetchCampaignStatusUpdate,
    onSuccess: (data, variables, context) => {
      console.log('API Response:', {
        code: data.result_code,
        message: data.result_msg,
        reasonCode: data.reason_code,
      });

      const errorMessage = getCampaignErrorMessage(data.result_code);
      if (errorMessage) {
        toast.error(errorMessage);
        return;
      }

      // 상태 업데이트 성공 후 관련 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: ['treeMenuDataForSideMenu'] });

      options?.onSuccess?.(data, variables, context);
    },
    onError: (error: CampaignApiError, variables: CampaignStatusDataRequest, context: unknown) => {
      console.error('API Error:', error);
      toast.error(error.message || '데이터 로드에 실패했습니다.');
      options?.onError?.(error, variables, context);
    },
  });
}
