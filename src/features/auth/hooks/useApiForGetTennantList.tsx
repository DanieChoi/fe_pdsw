import { useQuery } from '@tanstack/react-query';
import { TenantListResponse } from '../types/mainIndex';
import { TenantApiError } from '@/features/campaignManager/types/typeForTenant';
import { apiForGetTenantList } from '../../campaignManager/api/apiForTennants';

// Type guard function to check if the error is a TenantApiError
function isTenantApiError(error: unknown): error is TenantApiError {
  return (error as TenantApiError).message !== undefined;
}

export function useApiForGetTenantList() {
  return useQuery<TenantListResponse, TenantApiError>({
    queryKey: ['tenantList'],
    queryFn: apiForGetTenantList,
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
    refetchOnWindowFocus: false,
  });
}