"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiForGetTreeMenuDataForSideMenu } from "@/features/campaignManager/api/apiForGetTreeMenuDataForSideMenu";
import { TabData } from "@/features/campaignManager/types/typeForSidebar2";
import { useAuthStore } from "@/store";

export function useApiForGetTreeMenuDataForSideMenu() {
  const queryClient = useQueryClient();
  const { tenant_id, role_id, session_key } = useAuthStore();
  
  const getQueryKey = () => ["treeMenuDataForSideMenu", tenant_id, role_id];

  const query = useQuery<TabData[], Error>({
    queryKey: getQueryKey(),
    queryFn: () => apiForGetTreeMenuDataForSideMenu(tenant_id, role_id?.toString()),
    enabled : session_key !== "", // session_key가 있을 때만 (로그아웃시 호출 방지용)
    // 캐시 시간을 조절하여 불필요한 요청 감소
    staleTime: 30 * 1000, // 30초
  });
  
  // 서버 호출 없이 로컬 캐시만 업데이트하는 함수 추가
  const updateTreeMenuData = (updater: (oldData: TabData[] | undefined) => TabData[]) => {
    queryClient.setQueryData(getQueryKey(), updater);
  };
  
  // 필요한 경우에만 완전히 무효화하는 함수
  const invalidateTreeMenuData = () => {
    queryClient.invalidateQueries({ queryKey: getQueryKey() });
  };

  return {
    ...query,
    updateTreeMenuData,
    invalidateTreeMenuData,
  };
}