// // src/features/campaignManager/hooks/useApiDeleteCounselorsFromSkills.ts
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { CounselorSkillAssignmentResponse, CounselorSkillApiError } from '../types/typeForCounselorSkill';
// import { apiForDeleteCounselorsForSpecificSkill } from '../api/apiForCounselorSkil';
// import { useAgentSkillStatusStore } from '@/store/agenSkillStatusStore';


// interface DeleteCounselorsFromSkillsParams {
//   skillIds: number[];
//   counselorIds: string[];
//   tenantId: string;
//   concurrentLimit?: number;
// }

// interface BatchDeleteResult {
//   success: boolean;
//   successCount: number;
//   failedSkills: number[];
//   error?: Error;
// }

// /**
//  * 여러 스킬에서 여러 상담사을 한 번에 해제하는 커스텀 훅
//  */
// export function useApiDeleteCounselorsFromSkills(tenantId: string) {
//   const queryClient = useQueryClient();

//   const {setAgentSkillStatus} = useAgentSkillStatusStore();

//   // 배치 처리 유틸리티 함수
//   const processBatchDeletion = async ({
//     skillIds,
//     counselorIds,
//     concurrentLimit = 3
//   }: Omit<DeleteCounselorsFromSkillsParams, 'tenantId'>) => {
//     // 결과 추적용 객체
//     const result: BatchDeleteResult = {
//       success: true,
//       successCount: 0,
//       failedSkills: []
//     };

//     try {
//       // 여러 스킬을 동시에 처리하되 concurrentLimit 만큼씩 분할 처리
//       for (let i = 0; i < skillIds.length; i += concurrentLimit) {
//         const batch = skillIds.slice(i, i + concurrentLimit);
        
//         // 현재 배치의 요청들을 병렬로 처리
//         const promises = batch.map(skillId => 
//           apiForDeleteCounselorsForSpecificSkill(skillId, counselorIds)
//             .then(() => {
//               result.successCount++;
//               return true;
//             })
//             .catch(error => {
//               console.error(`스킬 ID ${skillId} 해제 실패:`, error);
//               result.failedSkills.push(skillId);
//               result.success = false;
//               return false;
//             })
//         );
        
//         // 현재 배치의 모든 요청 완료 대기
//         await Promise.all(promises);
//       }
      
//       return result;
//     } catch (error) {
//       console.error("배치 스킬 해제 중 오류 발생:", error);
//       result.success = false;
//       result.error = error instanceof Error ? error : new Error(String(error));
//       return result;
//     }
//   };

//   return useMutation<BatchDeleteResult, Error, DeleteCounselorsFromSkillsParams>({
//     mutationKey: ['deleteCounselorsFromSkills', tenantId],
//     mutationFn: async (params) => {
//       return processBatchDeletion({
//         skillIds: params.skillIds,
//         counselorIds: params.counselorIds,
//         concurrentLimit: params.concurrentLimit
//       });
//     },
//     onSuccess: () => {
//       // 스킬 관련 쿼리 캐시 무효화
//       queryClient.invalidateQueries({
//         queryKey: ['counselorSkills', tenantId]
//       });
      
//       // 상담사 관련 쿼리 캐시 무효화
//       queryClient.invalidateQueries({
//         queryKey: ['counselorList', tenantId]
//       });
      
//       // 할당된 스킬 목록 쿼리 캐시 무효화
//       queryClient.invalidateQueries({
//         queryKey: ['assignedSkills', tenantId]
//       });

//       // 다른 컴포넌트에 알리기위한 상담사 스킬 변경 상태
//       setAgentSkillStatus(true);

//     }
//   });
// }

// useApiDeleteCounselorsFromSkills.ts - await 에러 수정 버전
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiForDeleteCounselorsForSpecificSkill } from '../api/apiForCounselorSkil';
import { useAgentSkillStatusStore } from '@/store/agenSkillStatusStore';

interface DeleteCounselorsFromSkillsParams {
  skillIds: number[];
  counselorIds: string[];
  tenantId: string;
}

interface BatchDeleteResult {
  success: boolean;
  successCount: number;
  failedSkills: number[];
  error?: Error;
}

/**
 * 🎯 await 에러가 수정된 스킬 삭제 훅
 */
export function useApiDeleteCounselorsFromSkills(tenantId: string) {
  const queryClient = useQueryClient();
  const { setAgentSkillStatus } = useAgentSkillStatusStore();

  // 간단한 API 호출 함수
  const deleteSkills = async ({ skillIds, counselorIds }: Omit<DeleteCounselorsFromSkillsParams, 'tenantId'>) => {
    console.log('🚀 API 호출 시작:', { skillIds, counselorIds, tenantId });
    
    const results = await Promise.allSettled(
      skillIds.map(skillId => 
        apiForDeleteCounselorsForSpecificSkill(skillId, counselorIds)
          .then(response => {
            console.log(`✅ 스킬 ${skillId} 삭제 성공`, response);
            return { skillId, success: true, response };
          })
          .catch(error => {
            console.error(`❌ 스킬 ${skillId} 삭제 실패:`, error);
            return { skillId, success: false, error };
          })
      )
    );

    const successCount = results.filter(r => r.status === 'fulfilled' && r.value.success).length;
    const failedSkills = results
      .filter(r => r.status === 'fulfilled' && !r.value.success)
      .map(r => (r as any).value.skillId);

    console.log('🏁 API 호출 완료:', { successCount, failedSkills });

    return {
      success: successCount > 0,
      successCount,
      failedSkills,
      error: failedSkills.length > 0 ? new Error(`${failedSkills.length}개 스킬 삭제 실패`) : undefined
    };
  };

  // 사이드바 데이터에서 스킬 제거
  const removeSkillsFromData = (data: any, skillIds: number[], counselorIds: string[]) => {
    if (!data?.organizationList) {
      console.warn('🔍 organizationList가 없습니다:', data);
      return data;
    }

    console.log('🔍 데이터에서 스킬 제거 시작:', { skillIds, counselorIds });
    const newData = JSON.parse(JSON.stringify(data));
    let removedCount = 0;
    
    newData.organizationList.forEach((org: any) => {
      org.tenantInfo?.forEach((tenant: any) => {
        tenant.groupInfo?.forEach((group: any) => {
          group.teamInfo?.forEach((team: any) => {
            team.counselorInfo?.forEach((counselor: any) => {
              if (counselorIds.includes(counselor.counselorId)) {
                const beforeCount = counselor.assignedSkills?.length || 0;
                counselor.assignedSkills = counselor.assignedSkills?.filter(
                  (skill: any) => !skillIds.includes(Number(skill.skillId))
                ) || [];
                const afterCount = counselor.assignedSkills.length;
                const removed = beforeCount - afterCount;
                
                if (removed > 0) {
                  console.log(`🔍 상담사 ${counselor.counselorId}: ${beforeCount} → ${afterCount} (${removed}개 제거)`);
                  removedCount += removed;
                }
              }
            });
          });
        });
      });
    });

    console.log(`🔍 총 ${removedCount}개 스킬 제거됨`);
    return newData;
  };

  // Define the context type for mutation
  type MutationContext = {
    previousSidebarData: unknown;
    SIDEBAR_CACHE_KEY: string[];
  };

  return useMutation<BatchDeleteResult, Error, DeleteCounselorsFromSkillsParams, MutationContext>({
    mutationKey: ['deleteCounselorsFromSkills', tenantId],
    
    // 🎯 정확한 캐시 키로 낙관적 업데이트
    onMutate: async (variables): Promise<MutationContext> => {
      console.log('🎨 낙관적 업데이트 시작:', variables);
      
      try {
        // 🔑 정확한 캐시 키 사용 - useApiForSidebarCounselor와 동일
        const SIDEBAR_CACHE_KEY = ['counselorList', tenantId];
        
        console.log('🔍 사용할 캐시 키:', SIDEBAR_CACHE_KEY);
        
        // 관련 쿼리 취소
        await queryClient.cancelQueries({ queryKey: SIDEBAR_CACHE_KEY });
        
        // 현재 데이터 백업
        const previousSidebarData = queryClient.getQueryData(SIDEBAR_CACHE_KEY);
        
        console.log('🔍 캐시 데이터 확인:', {
          cacheKey: SIDEBAR_CACHE_KEY,
          hasData: !!previousSidebarData,
          hasOrgList: !!(previousSidebarData as any)?.organizationList
        });
        
        // 낙관적으로 UI 업데이트
        if (previousSidebarData) {
          const optimisticData = removeSkillsFromData(
            previousSidebarData, 
            variables.skillIds, 
            variables.counselorIds
          );
          
          queryClient.setQueryData(SIDEBAR_CACHE_KEY, optimisticData);
          console.log('✅ 사이드바 UI 즉시 업데이트 완료');
        } else {
          console.warn('⚠️ 사이드바 데이터를 찾을 수 없어 낙관적 업데이트 스킵');
        }
        
        // 반환할 context 객체
        return {
          previousSidebarData,
          SIDEBAR_CACHE_KEY
        };
        
      } catch (error) {
        console.error('💥 onMutate 에러:', error);
        // 에러 시에도 기본값 반환
        return {
          previousSidebarData: null,
          SIDEBAR_CACHE_KEY: ['counselorList', tenantId]
        };
      }
    },
      
    // 🔥 실제 API 호출
    mutationFn: deleteSkills,

    // ✅ 성공 시
    onSuccess: (result, variables, context) => {
      console.log('🎉 삭제 성공:', result);
      
      try {
        if (result.success) {
          // 🔄 정확한 캐시 키로 무효화 + 즉시 새로고침
          console.log('🔄 캐시 무효화 시작...');
          
          // 메인 캐시 무효화
          queryClient.invalidateQueries({ queryKey: ['counselorList', tenantId] });
          
          // 추가 안전장치: 모든 counselorList 캐시 무효화
          queryClient.invalidateQueries({ 
            predicate: (query) => {
              return Array.isArray(query.queryKey) && 
                     query.queryKey[0] === 'counselorList';
            }
          });
          
          // 🔄 강제 리페치 (즉시 새 데이터 가져오기)
          queryClient.refetchQueries({ queryKey: ['counselorList', tenantId] });
          
          // 다른 컴포넌트에 알리기
          setAgentSkillStatus(true);
          
          console.log('✅ 캐시 무효화 및 리페치 완료');
          
          // 🔄 3초 후 한 번 더 리페치 (안전장치)
          setTimeout(() => {
            console.log('🔄 3초 후 추가 리페치');
            queryClient.refetchQueries({ queryKey: ['counselorList', tenantId] });
          }, 3000);
        }
      } catch (error) {
        console.error('💥 onSuccess 처리 중 에러:', error);
      }
    },

    // ❌ 실패 시 롤백
    onError: (error, variables, context) => {
      console.error('💥 삭제 실패, 롤백 시작:', error);
      
      try {
        if (context?.previousSidebarData && context?.SIDEBAR_CACHE_KEY) {
          queryClient.setQueryData(context.SIDEBAR_CACHE_KEY, context.previousSidebarData);
          console.log('🔄 사이드바 데이터 롤백 완료');
        }
      } catch (rollbackError) {
        console.error('💥 롤백 중 에러:', rollbackError);
      }
    },

    // 🏁 완료
    onSettled: (data, error, variables, context) => {
      console.log('🏁 Mutation 완료:', { 
        success: data?.success, 
        hasError: !!error,
        variables 
      });
      
      // 최종 안전장치: 5초 후 다시 한 번 리페치
      setTimeout(() => {
        console.log('🔄 최종 안전장치 리페치');
        queryClient.refetchQueries({ queryKey: ['counselorList', tenantId] });
      }, 5000);
    }
  });
}