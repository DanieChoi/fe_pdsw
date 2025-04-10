import { useMutation, useQueryClient, UseMutationOptions } from '@tanstack/react-query';
import { fetchCampaignStatusUpdate } from '../api/mainCampaignStatusUpdate';
import { CampaignStatusDataRequest, CampaignStatusResponse, CampaignApiError } from '../types/campaignManagerIndex';
import { getCampaignErrorMessage2 } from '@/lib/error_message';
import { customAlertService } from '@/components/shared/layout/utils/CustomAlertService';
import { useTabStore } from '@/store/tabStore';

export function useApiForCampaignStatusUpdate(
  options?: UseMutationOptions<CampaignStatusResponse, CampaignApiError, CampaignStatusDataRequest>
) {
  const queryClient = useQueryClient();
  // TabStore에서 필요한 함수 가져오기
  const { simulateHeaderMenuClick, addTabCurrentOnly, openedTabs, setActiveTab } = useTabStore();

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
        
        // 성공 후 캠페인 관리 탭 열기 (탭 ID 2번이 캠페인 관리)
        openCampaignManagerTab();
      } else {
        // 실패 시 에러 메시지 표시
        customAlertService.error(
          getCampaignErrorMessage2(data.reason_code || 0),
          "캠페인 상태 변경 오류"
        );
        
        // 에러 발생 후에도 캠페인 관리 탭 열기
        openCampaignManagerTab();
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
      
      // 오류 발생 후에도 캠페인 관리 탭 열기
      openCampaignManagerTab();
      
      options?.onError?.(error, variables, context);
    },
  });
  
  // 캠페인 관리 탭을 여는 함수
  function openCampaignManagerTab() {
    // 1. 먼저 이미 열려있는 캠페인 관리 탭이 있는지 확인 (탭 ID 2번이 캠페인 관리)
    const existingCampaignTab = openedTabs.find(tab => tab.id === 2);
    
    if (existingCampaignTab) {
      // 이미 열려있는 탭이 있으면 해당 탭 활성화
      setActiveTab(existingCampaignTab.id, existingCampaignTab.uniqueKey);
    } else {
      // 없으면 새 탭 생성 (2번은 캠페인 관리 메뉴 ID)
      simulateHeaderMenuClick(2);
    }
  }
}