import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { CounselorAssignListCredentials, CounselorListCredentials, CounselorAssignListResponse, GetCounselorListResponse } from "../types/SystemPreferences";
import { fetchCounselorAssignList, fetchCounselorList } from "../api/apiForCounselorList";

// 상담사 리스트 가져오기
export function useApiForCounselorList(
    options?: UseMutationOptions<GetCounselorListResponse, Error, CounselorListCredentials>
  ) {
    return useMutation({
      mutationKey: ['counselorList'],
      mutationFn: fetchCounselorList,
      onSuccess: (data, variables, context) => {
       options?.onSuccess?.(data, variables, context);
      },
      onError: (error: Error, variables: CounselorListCredentials, context: unknown) => {
        console.error('API Error:', error);
        options?.onError?.(error, variables, context);
      },
    });
  }

// 스킬 할당 상담사 목록 가져오기
export function useApiForCounselorAssignList(
  options?: UseMutationOptions<CounselorAssignListResponse, Error, CounselorAssignListCredentials>
) {
  return useMutation({
    mutationKey: ['counselorAssignList'],
    mutationFn: fetchCounselorAssignList,
    onSuccess: (data, variables, context) => {
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error: Error, variables: CounselorAssignListCredentials, context: unknown) => {
      console.error('API Error:', error);
      options?.onError?.(error, variables, context);
    },
  })
}