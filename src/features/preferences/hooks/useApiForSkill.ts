import { dataTagSymbol, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { CampaignListResponse, SkillAgentListResponse, SkillCampaignListResponse, SkillListCredentials, SkillListResponse } from "../types/SystemPreferences";
import { ApiError } from "next/dist/server/api-utils";
import { fetchCampaignList, fetchSkillAgentList, fetchskillCampaignList, fetchSkillList } from "../api/apiForSkill";

// 스킬 마스터 리스트 조회 요청을 위한 hook
export function useApiForSkillList (
    option?: UseMutationOptions<SkillListResponse, ApiError, SkillListCredentials>
) {
    return useMutation({
        mutationKey: ['skillList'],
        mutationFn: fetchSkillList,
        onSuccess: (data, variables, context) => {
            option?.onSuccess?.(data, variables, context);
        },
        onError: (error: ApiError, variables, context: unknown) => {
            option?.onError?.(error, variables, context);
        }
    });
}

// 스킬 할당 캠페인 리스트 조회 요청을 위한 hook
export function useApiForSkillCampaignList (
    option?: UseMutationOptions<SkillCampaignListResponse, ApiError, unknown>
) {
    return useMutation({
        mutationKey: ['skillCampaignList'],
        mutationFn: fetchskillCampaignList,
        onSuccess: (data, variables, context) => {
            option?.onSuccess?.(data, variables, context);
        },
        onError: (error: ApiError, variables, context: unknown) => {
            option?.onError?.(error, variables, context);
        }
    });
}

// 스킬 할당 상담원 리스트 조회 요청을 위한 hook
export function useApiForSkillAgentList (
    option?: UseMutationOptions<SkillAgentListResponse, ApiError, unknown>
) {
    return useMutation({
        mutationKey: ['skillAgentList'],
        mutationFn: fetchSkillAgentList,
        onSuccess: (data, variables, context) => {
            option?.onSuccess?.(data, variables, context);
        },
        onError: (error: ApiError, variables, context: unknown) => {
            option?.onError?.(error, variables, context);
        }
    });
}

// 캠페인 정보 조회 요청을 위한 hook
export function useApiForCampaignList(
    option?: UseMutationOptions<CampaignListResponse, ApiError, unknown>
) {
    return useMutation({
        mutationKey: ['fetchCampaignList'],
        mutationFn: fetchCampaignList,
        onSuccess: (data, variables, context) => {
            option?.onSuccess?.(data, variables, context);
        },
        onError: (error: ApiError, variables, context: unknown) => {
            option?.onError?.(error, variables, context);
        }
    });
}