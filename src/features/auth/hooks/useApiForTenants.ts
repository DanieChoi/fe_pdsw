// src/features/auth/hooks/useApiForLogin.tsx
import { useMutation } from '@tanstack/react-query';
import { fetchTenants } from '../api/mainTenants';
import { toast } from 'react-toastify';
import { UseMutationOptions } from '@tanstack/react-query';
import { MainCredentials, TenantListResponse, AuthApiError } from '../types/mainIndex';
// import Router, { useRouter } from 'next/router';

export function useApiForTenants(
  options?: UseMutationOptions<TenantListResponse, AuthApiError, MainCredentials>
) {

  // const router = useRouter();

  return useMutation({
    mutationKey: ['mainTenants'],
    mutationFn: fetchTenants,
    onSuccess: (data, variables, context) => {
      // console.log('API Response:', {
      //   code: data.result_code,
      //   message: data.result_msg,
      //   count: data.result_count,
      //   total: data.total_count,
      //   data: data.result_data
      // });
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error: any, variables: MainCredentials, context: unknown) => {
      console.error('API Error:', error);
      
      if(error.response?.data?.result_code === 5) {
        console.log("세션 만료, 로그인으로 이동");
        // Next.js Router 대신 window.location 사용
        window.location.href = '/login';
      } else {
        console.log("다른 에러:", error.response?.data?.result_code);
      }
      
      options?.onError?.(error, variables, context);
    },
  });
}