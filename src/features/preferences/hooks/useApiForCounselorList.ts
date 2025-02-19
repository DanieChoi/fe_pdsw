import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { CounselorListCredentials, GetCounselorListResponse } from "../types/SystemPreferences";
import { fetchCounselorList } from "../api/apiForCounselorList";

export function useApiForCounselorList(
    options?: UseMutationOptions<GetCounselorListResponse, Error, CounselorListCredentials>
  ) {
    return useMutation({
      mutationKey: ['counselorList'],
      mutationFn: fetchCounselorList,
      onSuccess: (data, variables, context) => {
        console.log('API Response:', {
          code: data.code,
          message: data.message,
          data: data.organizationList
        });
        options?.onSuccess?.(data, variables, context);
      },
      onError: (error: Error, variables: CounselorListCredentials, context: unknown) => {
        console.error('API Error:', error);
        options?.onError?.(error, variables, context);
      },
    });
  }