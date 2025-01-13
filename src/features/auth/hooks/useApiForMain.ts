// src/features/auth/hooks/useApiForLogin.ts
import { useMutation } from '@tanstack/react-query';
import { fetchCampaigns } from '../api/main';
import { toast } from 'react-toastify';
import { UseMutationOptions } from '@tanstack/react-query';
import { MainCredentials, MainResponse, AuthApiError } from '../types/mainIndex';

export function useApiForMain(
  options?: UseMutationOptions<MainResponse, AuthApiError, MainCredentials>
) {
  return useMutation({
    mutationKey: ['main'],
    mutationFn: fetchCampaigns,
    onSuccess: (data, variables, context) => {
      // toast.success('로그인 성공!');
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error: AuthApiError, variables: MainCredentials, context: unknown) => {
      toast.error(error.message || '데이터 로드에 실패했습니다.');
      options?.onError?.(error, variables, context);
    },
  });
}