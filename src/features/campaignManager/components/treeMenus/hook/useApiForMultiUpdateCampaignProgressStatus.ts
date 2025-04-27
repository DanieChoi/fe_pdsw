import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { BatchUpdateResult, updateMultipleCampaignStatus } from '../api/apiForMultiUpdateCampaignProgressStatus';

type UpdateStatusState = {
  loading: boolean;
  error: string | null;
  result: BatchUpdateResult | null;
};

/**
 * status 파라미터는 "1" (시작), "2" (멈춤), "3" (중지) 값만 허용
 * 내부적으로 각 캠페인에 대해
 *   PUT /pds/campaigns/{campaign_id}/status
 *   body: { request_data: { campaign_status: status } }
 * 를 호출해야 함
 */
export const useApiForMultiUpdateCampaignProgressStatus = () => {
  const queryClient = useQueryClient();
  const [state, setState] = useState<UpdateStatusState>({
    loading: false,
    error: null,
    result: null
  });

  const updateCampaignsStatus = async (campaignIds: string[], status: string) => {
    // 입력 유효성 검사
    if (!campaignIds || campaignIds.length === 0) {
      setState({
        loading: false,
        error: '캠페인 ID가 제공되지 않았습니다.',
        result: null
      });
      return;
    }
    if (!["1", "2", "3"].includes(status)) {
      setState({
        loading: false,
        error: 'status 파라미터는 "1"(시작), "2"(멈춤), "3"(중지)만 허용됩니다.',
        result: null
      });
      return;
    }

    setState({
      loading: true,
      error: null,
      result: null
    });

    try {
      // 각 캠페인에 대해 병렬로 상태 변경 요청
      const batchResult = await updateMultipleCampaignStatus(campaignIds, status);
      
      // 캠페인 그룹 트리 데이터 갱신 (무효화)
      queryClient.invalidateQueries({
        queryKey: ['campaignTreeDataForCampaignGroupTab']
      });

      setState({
        loading: false,
        error: null,
        result: batchResult
      });

      return batchResult;
    } catch (error: any) {
      setState({
        loading: false,
        error: error.message || '캠페인 상태 업데이트 중 오류가 발생했습니다.',
        result: null
      });

      throw error;
    }
  };

  return {
    updateCampaignsStatus,
    isLoading: state.loading,
    error: state.error,
    result: state.result,
  };
};