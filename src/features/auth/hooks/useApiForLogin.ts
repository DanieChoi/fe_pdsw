// src/features/auth/hooks/useApiForLogin.ts
import { useMutation } from '@tanstack/react-query';
import { loginApi } from '../api/login';
import { toast } from 'react-toastify';
import { UseMutationOptions } from '@tanstack/react-query';
import { LoginCredentials, LoginResponse, AuthApiError } from '../types';

export function useApiForLogin(
  options?: UseMutationOptions<LoginResponse, AuthApiError, LoginCredentials>
) {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: loginApi.login,
    onSuccess: (data, variables, context) => {
      toast.success('로그인 성공!');
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error: AuthApiError, variables: LoginCredentials, context: unknown) => {
      toast.error(error.message || '로그인에 실패했습니다.');
      options?.onError?.(error, variables, context);
    },
  });
}