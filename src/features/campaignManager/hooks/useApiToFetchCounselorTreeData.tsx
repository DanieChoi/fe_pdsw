// src/features/campaignManager/hooks/useApiToFetchCounselorTreeData.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { apiToFetchCounselorTreeData } from "@/features/campaignManager/api/apiForGetTreeMenuDataForSideMenu";
import { TabData } from "@/features/campaignManager/types/typeForSidebar2";
import { useAuthStore } from "@/store/authStore";

export function useApiToFetchCounselorTreeData() {
  // authStore에서 credentials 정보 가져오기
  const session_key = useAuthStore((state) => state.session_key);
  const tenant_id = useAuthStore((state) => state.tenant_id);
  const role_id = useAuthStore((state) => state.role_id);

  const credentials = {
    session_key,
    tenant_id,
    roleId: role_id,
  };

  // console.log("credentials at hook : ", credentials);

  // React Query로 데이터 가져오기
  const query = useQuery<TabData[], Error>({
    queryKey: ["counselorTreeData", tenant_id], // tenant_id가 바뀔 때마다 새로 조회
    queryFn: () => apiToFetchCounselorTreeData(credentials),
    // staleTime: 5 * 60 * 1000, // 5분 캐싱
    // refetchOnWindowFocus: false,
    // enabled: !!session_key && !!tenant_id, // credentials이 있을 때만 요청
  });

  return {
    ...query,
    isInitializing: !session_key || !tenant_id,
  };
}