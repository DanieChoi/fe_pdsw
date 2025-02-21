// src/features/campaignManager/hooks/useApiForGetTreeMenuDataForSideMenu.ts
"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiForGetTreeMenuDataForSideMenu } from "@/features/campaignManager/api/apiForGetTreeMenuDataForSideMenu";
import { TabData } from "@/features/campaignManager/types/typeForSidebar2";

/**
 * 사이드메뉴 트리 데이터를 한 번에 가져오는 훅
 */
export function useApiForGetTreeMenuDataForSideMenu() {
  const queryClient = useQueryClient();

  // 1) React Query로 데이터 가져오기
  const query = useQuery<TabData[], Error>({
    queryKey: ["treeMenuDataForSideMenu"],
    queryFn: apiForGetTreeMenuDataForSideMenu,
    // staleTime: 5 * 60 * 1000, // 5분 캐싱
    // refetchOnWindowFocus: false,
  });


  return {
    ...query,
  };
}
