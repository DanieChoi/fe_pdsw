// src/features/auth/hooks/useApiForLogin.ts
import { useMutation } from '@tanstack/react-query';
import { loginApi } from '../api/login';
import { UseMutationOptions } from '@tanstack/react-query';
import { LoginCredentials, LoginResponse, AuthApiError } from '../types/loginIndex';

export function useApiForLogin(
  options?: UseMutationOptions<LoginResponse, AuthApiError, LoginCredentials>
) {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: loginApi.login,
    onSuccess: (data, variables, context) => {
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error: AuthApiError, variables: LoginCredentials, context: unknown) => {
      options?.onError?.(error, variables, context);
    },
  });
}