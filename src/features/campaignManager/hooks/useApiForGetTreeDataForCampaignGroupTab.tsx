// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import { useCallback, useEffect } from 'react';
// import { useSideMenuCampaignGroupTabStore } from '@/store/storeForSideMenuCampaignGroupTab';
// import { apiForCombinedTenantAndCampaignGroup, transformToTreeData } from '@/features/preferences/api/apiForCampaignGroup';

// /**
//  * 캠페인 그룹 트리 데이터를 가져오는 커스텀 훅 (TanStack Query 사용)
//  * API 호출 및 데이터 변환 로직은 TanStack Query로 관리하고, UI 상태는 Zustand 스토어로 관리
//  */
// export const useApiForGetTreeDataForCampaignGroupTab = (initialTenantId?: number) => {
//   const queryClient = useQueryClient();
  
//   // Zustand 스토어에서 필요한 기능 가져오기
//   const { 
//     setTreeData, 
//     setLoading, 
//     setError, 
//     setTenantId, 
//     setExpandedNodes,
//     setSelectedNodeId,
//     tenant_id: storeTenantId
//   } = useSideMenuCampaignGroupTabStore();
  
//   // tenant_id 결정 (props로 받은 값이 우선, 없으면 스토어 값 사용)
//   const effectiveTenantId = initialTenantId !== undefined ? initialTenantId : storeTenantId;
  
//   // TanStack Query를 사용하여 트리 데이터 가져오기
//   const query = useQuery({
//     queryKey: ['campaignTreeDataForCampaignGroupTab', effectiveTenantId],
//     queryFn: async () => {
//       if (effectiveTenantId === undefined || effectiveTenantId === null) {
//         throw new Error('테넌트 ID가 없습니다');
//       }
      
//       const combinedData = await apiForCombinedTenantAndCampaignGroup(effectiveTenantId);
//       return {
//         combinedData,
//         transformedData: transformToTreeData(combinedData)
//       };
//     },
//     enabled: effectiveTenantId !== undefined && effectiveTenantId !== null,
//     staleTime: 5 * 60 * 1000, // 5분 동안 데이터를 "신선한" 상태로 유지
//     refetchOnWindowFocus: false // 창 포커스 시 자동 리페치 비활성화
//   });
  
//   // 쿼리 결과에 따라 스토어 상태 업데이트
//   useEffect(() => {
//     // tenant_id 설정
//     if (effectiveTenantId !== undefined && effectiveTenantId !== null) {
//       setTenantId(effectiveTenantId);
//     }
    
//     // 로딩 상태 업데이트
//     setLoading(query.isLoading || query.isFetching);
    
//     // 에러 상태 업데이트
//     if (query.error) {
//       setError(query.error instanceof Error 
//         ? query.error 
//         : new Error('Unknown error occurred'));
//     } else {
//       setError(null);
//     }
    
//     // 데이터가 있으면 트리 데이터 업데이트
//     if (query.data) {
//       setTreeData(query.data.transformedData);
      
//       // 루트 노드와 테넌트 노드만 확장하도록 설정 (처음 로드할 때만)
//       if (query.isSuccess) {
//         const transformedData = query.data.transformedData;
//         const tenantNodes = new Set<string>();
        
//         if (transformedData.length > 0) {
//           transformedData.forEach(rootNode => {
//             tenantNodes.add(rootNode.id); // 루트 노드 추가

//             if (rootNode.children) {
//               rootNode.children.forEach(node => {
//                 if (node.type === 'tenant') {
//                   tenantNodes.add(node.id);
//                 }
//               });
//             }
//           });
//         }
        
//         setExpandedNodes(tenantNodes);
//       }
//     }
//   }, [
//     query.data, 
//     query.isLoading, 
//     query.isFetching, 
//     query.error, 
//     query.isSuccess,
//     effectiveTenantId,
//     setTenantId,
//     setTreeData, 
//     setLoading, 
//     setError, 
//     setExpandedNodes
//   ]);
  
//   // 트리 데이터 수동 가져오기 (tenant_id 지정하여 재요청)
//   const fetchTreeData = useCallback(async (tenant_id: number) => {
//     setTenantId(tenant_id);
//     return queryClient.fetchQuery({
//       queryKey: ['campaignTreeData', tenant_id],
//       queryFn: async () => {
//         const combinedData = await apiForCombinedTenantAndCampaignGroup(tenant_id);
//         return {
//           combinedData,
//           transformedData: transformToTreeData(combinedData)
//         };
//       }
//     });
//   }, [queryClient, setTenantId]);
  
//   // 현재 상태를 유지하면서 트리 데이터 다시 가져오기
//   const refetchTreeData = useCallback(async (tenant_id?: number) => {
//     const targetTenantId = tenant_id || effectiveTenantId;
    
//     if (targetTenantId === undefined || targetTenantId === null) {
//       console.error("테넌트 ID가 없습니다.");
//       return null;
//     }
    
//     // 현재 확장 상태와 선택 상태 저장
//     const store = useSideMenuCampaignGroupTabStore.getState();
//     const currentExpanded = store.expandedNodes;
//     const currentSelected = store.selectedNodeId;
    
//     try {
//       // 쿼리 데이터 리페치
//       const result = await queryClient.fetchQuery({
//         queryKey: ['campaignTreeData', targetTenantId],
//         queryFn: async () => {
//           const combinedData = await apiForCombinedTenantAndCampaignGroup(targetTenantId);
//           return {
//             combinedData,
//             transformedData: transformToTreeData(combinedData)
//           };
//         }
//       });
      
//       // 이전 확장/선택 상태 유지
//       setExpandedNodes(currentExpanded);
//       setSelectedNodeId(currentSelected);
      
//       return result;
//     } catch (error) {
//       console.error("트리 데이터 다시 가져오기 오류:", error);
//       return null;
//     }
//   }, [effectiveTenantId, queryClient, setExpandedNodes, setSelectedNodeId]);
  
//   // 훅에서 필요한 상태와 함수 반환
//   return {
//     fetchTreeData,
//     refetchTreeData,
//     isLoading: query.isLoading || query.isFetching,
//     error: query.error ? 
//       (query.error instanceof Error ? query.error : new Error('Unknown error occurred')) 
//       : null,
//     data: query.data?.transformedData || [],
//     status: query.status,
//     isFetched: query.isFetched
//   };
// };

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect } from 'react';
import { useSideMenuCampaignGroupTabStore } from '@/store/storeForSideMenuCampaignGroupTab';
import { apiForCombinedTenantAndCampaignGroup, transformToTreeData } from '@/features/preferences/api/apiForCampaignGroup';

/**
 * 캠페인 그룹 트리 데이터를 가져오는 커스텀 훅 (TanStack Query 사용)
 * API 호출 및 데이터 변환 로직은 TanStack Query로 관리하고, UI 상태는 Zustand 스토어로 관리
 */
export const useApiForGetTreeDataForCampaignGroupTab = (initialTenantId?: number) => {
  const queryClient = useQueryClient();
  
  // Zustand 스토어에서 필요한 기능 가져오기
  const { 
    setTreeData, 
    setLoading, 
    setError, 
    setTenantId, 
    setExpandedNodes,
    setSelectedNodeId,
    tenant_id: storeTenantId
  } = useSideMenuCampaignGroupTabStore();
  
  // tenant_id 결정 (props로 받은 값이 우선, 없으면 스토어 값 사용)
  const effectiveTenantId = initialTenantId !== undefined ? initialTenantId : storeTenantId;
  
  // 쿼리 키 생성 함수 추가 - 재사용 가능하도록
  const getQueryKey = useCallback(() => 
    ['campaignTreeDataForCampaignGroupTab', effectiveTenantId], 
    [effectiveTenantId]
  );

  // TanStack Query를 사용하여 트리 데이터 가져오기
  const query = useQuery({
    queryKey: getQueryKey(),
    queryFn: async () => {
      if (effectiveTenantId === undefined || effectiveTenantId === null) {
        throw new Error('테넌트 ID가 없습니다');
      }
      
      const combinedData = await apiForCombinedTenantAndCampaignGroup(effectiveTenantId);
      return {
        combinedData,
        transformedData: transformToTreeData(combinedData)
      };
    },
    enabled: effectiveTenantId !== undefined && effectiveTenantId !== null,
    staleTime: 30 * 1000, // 30초 동안 데이터를 "신선한" 상태로 유지 (사이드메뉴와 일치)
    refetchOnWindowFocus: false // 창 포커스 시 자동 리페치 비활성화
  });
  
  // 쿼리 결과에 따라 스토어 상태 업데이트
  useEffect(() => {
    // ... 기존 코드 유지
  }, [
    // ... 기존 의존성 배열
  ]);
  
  // 트리 데이터 수동 가져오기 (tenant_id 지정하여 재요청)
  const fetchTreeData = useCallback(async (tenant_id: number) => {
    // ... 기존 코드 유지
  }, [queryClient, setTenantId]);
  
  // 현재 상태를 유지하면서 트리 데이터 다시 가져오기
  const refetchTreeData = useCallback(async (tenant_id?: number) => {
    // ... 기존 코드 유지
  }, [effectiveTenantId, queryClient, setExpandedNodes, setSelectedNodeId]);
  
  // 캠페인 그룹 트리 데이터 무효화 함수 추가
  const invalidateCampaignGroupTreeData = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: getQueryKey() });
  }, [queryClient, getQueryKey]);
  
  // 서버 호출 없이 로컬 캐시만 업데이트하는 함수 추가
  const updateCampaignGroupTreeData = useCallback((
    updater: (oldData: { combinedData: any, transformedData: any } | undefined) => { combinedData: any, transformedData: any }
  ) => {
    queryClient.setQueryData(getQueryKey(), updater);
  }, [queryClient, getQueryKey]);
  
  // 훅에서 필요한 상태와 함수 반환
  return {
    fetchTreeData,
    refetchTreeData,
    invalidateCampaignGroupTreeData, // 무효화 함수 추가
    updateCampaignGroupTreeData,     // 로컬 업데이트 함수 추가
    isLoading: query.isLoading || query.isFetching,
    error: query.error ? 
      (query.error instanceof Error ? query.error : new Error('Unknown error occurred')) 
      : null,
    data: query.data?.transformedData || [],
    status: query.status,
    isFetched: query.isFetched
  };
};