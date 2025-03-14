// C:\nproject\fe_pdsw\src\components\shared\layout\utils\batchRemoveCampaigns.ts
import { apiForRemoveCampaignFromCampaignGroup } from '@/features/preferences/api/apiForCampaignGroup';
import { SuccessResponse } from '@/features/campaignManager/types/typeForCampaignGroupForSideBar';

interface BatchRemoveResult {
  success: boolean;
  successCount: number;
  failedCampaigns: number[];
  error?: Error;
}

/**
 * 여러 캠페인을 한 번에 캠페인 그룹에서 제거하는 유틸리티 함수
 * @param groupId 대상 캠페인 그룹 ID
 * @param campaignIds 제거할 캠페인 ID 배열
 * @param concurrentLimit 동시 요청 제한 수 (기본값: 3)
 * @returns 배치 제거 결과
 */
export const batchRemoveCampaignsFromGroup = async (
  groupId: number,
  campaignIds: number[],
  concurrentLimit: number = 3
): Promise<BatchRemoveResult> => {
  // 결과 추적용 객체
  const result: BatchRemoveResult = {
    success: true,
    successCount: 0,
    failedCampaigns: []
  };

  try {
    // 여러 캠페인을 동시에 제거하되 concurrentLimit 만큼씩 분할 처리
    for (let i = 0; i < campaignIds.length; i += concurrentLimit) {
      const batch = campaignIds.slice(i, i + concurrentLimit);
      
      // 현재 배치의 요청들을 병렬로 처리
      const promises = batch.map(campaignId => 
        apiForRemoveCampaignFromCampaignGroup(groupId, campaignId)
          .then(() => {
            result.successCount++;
            return true;
          })
          .catch(error => {
            console.error(`캠페인 ID ${campaignId} 제거 실패:`, error);
            result.failedCampaigns.push(campaignId);
            result.success = false;
            return false;
          })
      );
      
      // 현재 배치의 모든 요청 완료 대기
      await Promise.all(promises);
    }
    
    return result;
  } catch (error) {
    console.error("배치 캠페인 제거 중 오류 발생:", error);
    result.success = false;
    result.error = error instanceof Error ? error : new Error(String(error));
    return result;
  }
};