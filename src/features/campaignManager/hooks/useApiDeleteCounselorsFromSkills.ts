// src/features/campaignManager/hooks/useApiDeleteCounselorsFromSkills.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CounselorSkillAssignmentResponse, CounselorSkillApiError } from '../types/typeForCounselorSkill';
import { apiForDeleteCounselorsForSpecificSkill } from '../api/apiForCounselorSkil';
import { useAgentSkillStatusStore } from '@/store/agenSkillStatus';


interface DeleteCounselorsFromSkillsParams {
  skillIds: number[];
  counselorIds: string[];
  tenantId: string;
  concurrentLimit?: number;
}

interface BatchDeleteResult {
  success: boolean;
  successCount: number;
  failedSkills: number[];
  error?: Error;
}

/**
 * 여러 스킬에서 여러 상담사을 한 번에 해제하는 커스텀 훅
 */
export function useApiDeleteCounselorsFromSkills(tenantId: string) {
  const queryClient = useQueryClient();

  const {setAgentSkillStatus} = useAgentSkillStatusStore();

  // 배치 처리 유틸리티 함수
  const processBatchDeletion = async ({
    skillIds,
    counselorIds,
    concurrentLimit = 3
  }: Omit<DeleteCounselorsFromSkillsParams, 'tenantId'>) => {
    // 결과 추적용 객체
    const result: BatchDeleteResult = {
      success: true,
      successCount: 0,
      failedSkills: []
    };

    try {
      // 여러 스킬을 동시에 처리하되 concurrentLimit 만큼씩 분할 처리
      for (let i = 0; i < skillIds.length; i += concurrentLimit) {
        const batch = skillIds.slice(i, i + concurrentLimit);
        
        // 현재 배치의 요청들을 병렬로 처리
        const promises = batch.map(skillId => 
          apiForDeleteCounselorsForSpecificSkill(skillId, counselorIds)
            .then(() => {
              result.successCount++;
              return true;
            })
            .catch(error => {
              console.error(`스킬 ID ${skillId} 해제 실패:`, error);
              result.failedSkills.push(skillId);
              result.success = false;
              return false;
            })
        );
        
        // 현재 배치의 모든 요청 완료 대기
        await Promise.all(promises);
      }
      
      return result;
    } catch (error) {
      console.error("배치 스킬 해제 중 오류 발생:", error);
      result.success = false;
      result.error = error instanceof Error ? error : new Error(String(error));
      return result;
    }
  };

  return useMutation<BatchDeleteResult, Error, DeleteCounselorsFromSkillsParams>({
    mutationKey: ['deleteCounselorsFromSkills', tenantId],
    mutationFn: async (params) => {
      return processBatchDeletion({
        skillIds: params.skillIds,
        counselorIds: params.counselorIds,
        concurrentLimit: params.concurrentLimit
      });
    },
    onSuccess: () => {
      // 스킬 관련 쿼리 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: ['counselorSkills', tenantId]
      });
      
      // 상담사 관련 쿼리 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: ['counselorList', tenantId]
      });
      
      // 할당된 스킬 목록 쿼리 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: ['assignedSkills', tenantId]
      });

      // 다른 컴포넌트에 알리기위한 상담사 스킬 변경 상태
      setAgentSkillStatus(true);

    }
  });
}