// src/features/campaignManager/hooks/useApiForCounselorSkill.ts
import { useQuery } from '@tanstack/react-query';
import type { CounselorSkillListResponse } from '../types/typeForCounselorSkill';
import { apiForGetSkillListForCounselor } from '../api/apiForCounselorSkil';

export const useApiForCounselorSkill = (tenantId: number, counselorId: string) => {
  return useQuery<CounselorSkillListResponse, Error>({
    queryKey: ['counselorSkills', tenantId, counselorId], // counselorId 추가
    queryFn: () => apiForGetSkillListForCounselor(tenantId),
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: true,
    retry: 1,
  });
};