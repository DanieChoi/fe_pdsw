import { useMutation, useQueryClient, UseMutationOptions } from '@tanstack/react-query';
import { fetchCampaignStatusUpdate } from '../api/mainCampaignStatusUpdate';
import { CampaignStatusDataRequest, CampaignStatusResponse, CampaignApiError } from '../types/campaignManagerIndex';
import { getCampaignErrorMessage2 } from '@/lib/error_message';
import { customAlertService } from '@/components/shared/layout/utils/CustomAlertService';

export function useApiForCampaignStatusUpdate(
  options?: UseMutationOptions<CampaignStatusResponse, CampaignApiError, CampaignStatusDataRequest>
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['mainCampaignStatusUpdate'],
    mutationFn: fetchCampaignStatusUpdate,
    onSuccess: (data, variables, context) => {
      if (data.result_code === 0) {
        // 성공 시 로직
      } else {
        // 실패 시 toast.error 대신 customAlertService.error 사용
        customAlertService.error(
          getCampaignErrorMessage2(data.reason_code || 0),
          "캠페인 상태 변경 오류"
        );
      }

      // 상태 업데이트 성공 후 관련 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: ['treeMenuDataForSideMenu'] });

      options?.onSuccess?.(data, variables, context);
    },
    onError: (error: CampaignApiError, variables: CampaignStatusDataRequest, context: unknown) => {
      console.error('API Error:', error);
      // toast.error 대신 customAlertService.error 사용
      customAlertService.error(error.message || '데이터 로드에 실패했습니다.', 'API 오류');
      options?.onError?.(error, variables, context);
    },
  });
}