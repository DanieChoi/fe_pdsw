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
        // 성공 시 성공 메시지 표시
        customAlertService.success(
          '캠페인 상태가 성공적으로 변경되었습니다!',
          '캠페인 상태 변경 완료'
        );
      } else {
        // 실패 시 에러 메시지 표시
        customAlertService.error(
          getCampaignErrorMessage2(data.reason_code || 0),
          "캠페인 상태 변경 오류"
        );
      }

      // 상태 업데이트 성공 후 관련 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: ['treeMenuDataForSideMenu'] });
      queryClient.invalidateQueries({ queryKey: ['mainCampaignProgressInformation'] });
      
      // mainData 쿼리 무효화하여 캠페인 목록 새로고침
      queryClient.invalidateQueries({ queryKey: ['mainData'] });

      options?.onSuccess?.(data, variables, context);
    },
    onError: (error: CampaignApiError, variables: CampaignStatusDataRequest, context: unknown) => {
      console.error('API Error:', error);
      // API 오류 시 에러 메시지 표시
      customAlertService.error(error.message || '데이터 로드에 실패했습니다.', 'API 오류');
      options?.onError?.(error, variables, context);
    },
  });
}