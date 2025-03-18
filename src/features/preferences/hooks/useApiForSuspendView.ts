import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { SuspendedCampaignListResponse, SuspendedSkillListResponse } from "../types/SystemPreferences";
import { fetchSuspendedCampaignList, fetchSuspendedSkillList } from "../api/apiForsuspendView";

// 서스팬드 캠페인 조회
export function useApiForSuspendedCampaignList (
    options?: UseMutationOptions<SuspendedCampaignListResponse, Error>
) {
    return useMutation({
        mutationKey: ['suspendedCampaignList'],
        mutationFn: fetchSuspendedCampaignList,
        onSuccess: (data, variables, context) => {
            options?.onSuccess?.(data, variables, context);
        },
        onError: (error: Error, variables, context: unknown) => {
            options?.onError?.(error, variables, context);
        },
    });
}

// 서스팬드 스킬 조회
export function useApiForSuspendedSkillList (
    options?: UseMutationOptions<SuspendedSkillListResponse, Error>
) {
    return useMutation({
        mutationKey: ['suspendedSkillList'],
        mutationFn: fetchSuspendedSkillList,
        onSuccess: (data, variables, context) => {
            options?.onSuccess?.(data, variables, context);
        },
        onError: (error: Error, variables, context: unknown) => {
            options?.onError?.(error, variables, context);
        },
    });
}
