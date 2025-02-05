import { useEffect } from 'react';
import { useCounselorStoreForSideBar } from '@/store/counselorStoreForSideBar';
import { apiToFetchCounselorTreeData } from '@/features/campaignManager/api/apiForSidebarCounselorTab';

export function useApiForSidebarCounselor(tenant_id: number, role_id: number) {
  const { updateTreeData, setLoading, setError } = useCounselorStoreForSideBar();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await apiToFetchCounselorTreeData({ tenant_id, roleId: role_id });
        updateTreeData(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "알 수 없는 오류 발생");
      }
    };

    fetchData();
  }, [tenant_id, role_id, updateTreeData, setLoading, setError]);
}
