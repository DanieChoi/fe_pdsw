import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '@/store/authStore';
import { TabData } from '@/features/campaignManager/types/typeForSidebar2';
import { apiToFetchCounselorTreeData } from '@/features/campaignManager/api/apiForSidebarCounselorTab';

export function useApiForGetDataForSidebarCounselorTab() {
  const { tenant_id, role_id } = useAuthStore();

  const credentials = {
    tenant_id: tenant_id.toString(),
    roleId: role_id
  };

  return useQuery<TabData[], Error>({
    queryKey: ['counselorTreeData', tenant_id],
    queryFn: () => apiToFetchCounselorTreeData(credentials),
    // enabled: !!tenant_id && !!role_id,
    // staleTime: 5 * 60 * 1000, // 5분 동안 캐시 유지
  });
}