// import { useState, useEffect } from 'react'

// type Tenant = {
//   id: string;
//   name: string;
//   // Add other tenant properties as needed
// }

// const useApiForGetTennantList = () => {
//   const [tenants, setTenants] = useState<Tenant[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     // Implement your API call to fetch tenant list here
//   }, []);

//   return { tenants, loading, error };
// }

// export default useApiForGetTennantList

// src/features/auth/hooks/useApiForGetTennantList.ts
import { useQuery } from '@tanstack/react-query';
import { TenantListResponse } from '../types/mainIndex';
import { TenantApiError } from '@/features/campaignManager/types/typeForTenant';
import { apiForGetTenantList } from '../../campaignManager/api/apiForTennants';
import { useAuthStore } from "@/store";

// Type guard function to check if the error is a TenantApiError
function isTenantApiError(error: unknown): error is TenantApiError {
  return (error as TenantApiError).message !== undefined;
}

export default function useApiForGetTenantList() {
  const { tenant_id } = useAuthStore();
  
  return useQuery<TenantListResponse, TenantApiError>({
    queryKey: ['tenantList', tenant_id],
    queryFn: () => apiForGetTenantList(tenant_id),
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
    refetchOnWindowFocus: false,
  });
}