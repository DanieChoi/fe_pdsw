
// "use client";

// import { useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
// import { TabData, TreeItem } from "@/features/campaignManager/types/typeForSidebar2";
// import { useAuthStore, useMainStore } from "@/store";
// import { useEffect, useState, useRef } from "react";
// import { fetchskillCampaignList } from "@/features/preferences/api/apiForSkill";

// // Define the return type for the hook
// type TreeMenuQueryResult = UseQueryResult<TabData[], Error> & {
//   updateTreeMenuData: (updater: (oldData: TabData[] | undefined) => TabData[]) => void;
//   invalidateTreeMenuData: () => void;
//   isStoreReady: boolean;
// }

// // Helper function for getting status from flags
// function getStatusFromFlags(start_flag: number): 'started' | 'pending' | 'stopped' {
//   if (start_flag === 1) return 'started';      // 종료된 상태
//   if (start_flag === 2) return 'pending';      // 대기 상태
//   if (start_flag === 3) return 'stopped';      // 진행중 
//   return 'stopped';                            // 기타 케이스는 stopped
// }

// export function useApiForGetTreeMenuDataForSideMenu(): TreeMenuQueryResult {
//   const queryClient = useQueryClient();
//   const { tenant_id, role_id, session_key } = useAuthStore();
//   const { 
//     tenantsLoaded, 
//     campaignsLoaded, 
//     tenants, 
//     campaigns
//   } = useMainStore();
//   const [isReady, setIsReady] = useState(false);
//   const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
//   const previousDataRef = useRef<{
//     tenants: typeof tenants;
//     campaigns: typeof campaigns;
//   }>({
//     tenants: [],
//     campaigns: []
//   });
  
//   const getQueryKey = () => ["treeMenuDataForSideMenu", tenant_id, role_id];

//   // 스토어 데이터 준비 여부 확인
//   useEffect(() => {
//     if (session_key !== "" && tenantsLoaded && campaignsLoaded && 
//         tenants.length > 0 && campaigns.length > 0) {
//       console.log("TreeMenu hook: Store data is ready");
//       // 초기 데이터 저장
//       previousDataRef.current = {
//         tenants: [...tenants],
//         campaigns: [...campaigns]
//       };
//       setIsReady(true);
//     }
//   }, [session_key, tenantsLoaded, campaignsLoaded, tenants.length, campaigns.length]);

//   // 최적화된 스토어 구독 설정
//   useEffect(() => {
//     if (!isReady) return;

//     // 변경 감지 함수
//     const checkForChanges = () => {
//       const currentTenants = useMainStore.getState().tenants;
//       const currentCampaigns = useMainStore.getState().campaigns;
      
//       // 깊은 비교 대신 간단한 비교 방법 사용
//       const tenantsChanged = currentTenants.length !== previousDataRef.current.tenants.length || 
//         currentTenants.some((tenant, idx) => {
//           const prevTenant = previousDataRef.current.tenants[idx];
//           return !prevTenant || 
//             tenant.tenant_id !== prevTenant.tenant_id || 
//             tenant.tenant_name !== prevTenant.tenant_name;
//         });
      
//       const campaignsChanged = currentCampaigns.length !== previousDataRef.current.campaigns.length || 
//         currentCampaigns.some((campaign, idx) => {
//           const prevCampaign = previousDataRef.current.campaigns[idx];
//           return !prevCampaign || 
//             campaign.campaign_id !== prevCampaign.campaign_id || 
//             campaign.campaign_name !== prevCampaign.campaign_name ||
//             campaign.start_flag !== prevCampaign.start_flag;
//         });
      
//       if (tenantsChanged || campaignsChanged) {
//         console.log("TreeMenu hook: Detected actual data change");
        
//         // 디바운싱: 여러 변경 사항을 한 번에 처리
//         if (debounceTimerRef.current) {
//           clearTimeout(debounceTimerRef.current);
//         }
        
//         debounceTimerRef.current = setTimeout(() => {
//           console.log("TreeMenu hook: Updating after debounce");
//           // 현재 데이터를 이전 데이터로 저장
//           previousDataRef.current = {
//             tenants: [...useMainStore.getState().tenants],
//             campaigns: [...useMainStore.getState().campaigns]
//           };
//           // 캐시 무효화
//           invalidateTreeMenuData();
//           debounceTimerRef.current = null;
//         }, 300); // 300ms 디바운스
//       }
//     };
    
//     // Zustand 구독
//     const unsubscribe = useMainStore.subscribe(checkForChanges);
    
//     return () => {
//       unsubscribe();
//       if (debounceTimerRef.current) {
//         clearTimeout(debounceTimerRef.current);
//       }
//     };
//   }, [isReady]);

//   // 트리 메뉴 데이터 생성
//   const generateTreeMenuData = async (): Promise<TabData[]> => {
//     console.log("Generating tree menu data from store");
    
//     if (!isReady) {
//       console.log("Store data not ready yet");
//       return [];
//     }
    
//     try {
//       // 스킬 데이터 가져오기
//       const skillDataForCampaign = await fetchskillCampaignList();
      
//       // 캠페인별 스킬 매핑 생성
//       const campaignSkillsMap: { [key: string]: any[] } = {};
//       skillDataForCampaign.result_data.forEach((skill: any) => {
//         skill.campaign_id.forEach((campaignId: string) => {
//           if (!campaignSkillsMap[campaignId]) {
//             campaignSkillsMap[campaignId] = [];
//           }
//           // 중복 체크
//           const exists = campaignSkillsMap[campaignId].some(s => s.skill_id === skill.skill_id);
//           if (!exists) {
//             campaignSkillsMap[campaignId].push({
//               skill_id: skill.skill_id,
//               tenant_id: skill.tenant_id
//             });
//           }
//         });
//       });

//       // 테넌트별 캠페인 그룹화
//       const campaignsByTenant: { [key: number]: any[] } = {};
//       campaigns.forEach(campaign => {
//         if (!campaignsByTenant[campaign.tenant_id]) {
//           campaignsByTenant[campaign.tenant_id] = [];
//         }
//         campaignsByTenant[campaign.tenant_id].push(campaign);
//       });

//       // 트리 구조 생성
//       const items: TreeItem[] = tenants.map(tenant => ({
//         id: tenant.tenant_id.toString(),
//         label: tenant.tenant_name,
//         type: 'folder',
//         children: campaignsByTenant[tenant.tenant_id]?.map(campaign => {
//           // 각 캠페인에 대한 스킬 children 생성
//           const skills = campaignSkillsMap[campaign.campaign_id.toString()] || [];

//           return {
//             id: campaign.campaign_id.toString(),
//             label: campaign.campaign_name,
//             type: 'campaign',
//             status: getStatusFromFlags(campaign.start_flag),
//             direction: 'outbound',
//             tenantId: campaign.tenant_id.toString(),
//             children: skills.map(skill => ({
//               id: `skill-${skill.skill_id}-${campaign.campaign_id}`,
//               label: `Skill ${skill.skill_id}`,
//               type: 'skill',
//               skillId: skill.skill_id,
//               tenantId: skill.tenant_id.toString(),
//               campaignName: campaign.campaign_name,
//               visible: false
//             }))
//           };
//         }) || []
//       }));

//       const tabData: TabData[] = [
//         {
//           id: 'campaign',
//           label: '캠페인',
//           items: [
//             {
//               id: 'nexus',
//               label: 'NEXUS',
//               type: 'folder',
//               children: items
//             }
//           ]
//         }
//       ];

//       console.log("Tree menu data generated successfully");
//       return tabData;
      
//     } catch (error) {
//       console.error("Error generating tree menu data:", error);
//       return [];
//     }
//   };

//   // React Query 설정
//   const query = useQuery<TabData[], Error>({
//     queryKey: getQueryKey(),
//     queryFn: generateTreeMenuData,
//     // 실제 데이터가 준비되었을 때만 쿼리 활성화
//     enabled: isReady,
//     // 캐시 시간을 조절하여 불필요한 요청 감소
//     staleTime: 30 * 1000, // 30초
//   });
  
//   // 서버 호출 없이 로컬 캐시만 업데이트하는 함수
//   const updateTreeMenuData = (updater: (oldData: TabData[] | undefined) => TabData[]) => {
//     queryClient.setQueryData(getQueryKey(), updater);
//   };
  
//   // 쿼리 캐시 무효화 함수
//   const invalidateTreeMenuData = () => {
//     queryClient.invalidateQueries({ queryKey: getQueryKey() });
//   };

//   // 기본 의존성 변경 감지 (fallback)
//   useEffect(() => {
//     if (isReady && (tenant_id || role_id)) {
//       // 테넌트나 역할이 변경된 경우에만 무효화
//       console.log("TreeMenu hook: Key parameters changed, invalidating query cache");
//       invalidateTreeMenuData();
//     }
//   }, [isReady, tenant_id, role_id]);

//   return {
//     ...query,
//     updateTreeMenuData,
//     invalidateTreeMenuData,
//     isStoreReady: isReady
//   };
// }

"use client";

import { useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { TabData, TreeItem } from "@/features/campaignManager/types/typeForSidebar2";
import { useAuthStore, useMainStore } from "@/store";
import { useEffect, useState, useRef } from "react";
import { fetchskillCampaignList } from "@/features/preferences/api/apiForSkill";

// Define the return type for the hook
type TreeMenuQueryResult = UseQueryResult<TabData[], Error> & {
  updateTreeMenuData: (updater: (oldData: TabData[] | undefined) => TabData[]) => void;
  invalidateTreeMenuData: () => void;
  isStoreReady: boolean;
}

// Helper function for getting status from flags
function getStatusFromFlags(start_flag: number): 'started' | 'pending' | 'stopped' {
  if (start_flag === 1) return 'started';      // 종료된 상태
  if (start_flag === 2) return 'pending';      // 대기 상태
  if (start_flag === 3) return 'stopped';      // 진행중 
  return 'stopped';                            // 기타 케이스는 stopped
}

export function useApiForGetTreeMenuDataForSideMenu(): TreeMenuQueryResult {
  const queryClient = useQueryClient();
  const { tenant_id, role_id, session_key } = useAuthStore();
  const { 
    tenantsLoaded, 
    campaignsLoaded, 
    tenants, 
    campaigns
  } = useMainStore();
  const [isReady, setIsReady] = useState(false);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const previousDataRef = useRef<{
    tenants: typeof tenants;
    campaigns: typeof campaigns;
  }>({
    tenants: [],
    campaigns: []
  });
  
  const getQueryKey = () => ["treeMenuDataForSideMenu", tenant_id, role_id];

  // 스토어 데이터 준비 여부 확인
  useEffect(() => {
    if (session_key !== "" && tenantsLoaded && campaignsLoaded && 
        tenants.length > 0 && campaigns.length > 0) {
      console.log("TreeMenu hook: Store data is ready");
      // 초기 데이터 저장
      previousDataRef.current = {
        tenants: [...tenants],
        campaigns: [...campaigns]
      };
      setIsReady(true);
    }
  }, [session_key, tenantsLoaded, campaignsLoaded, tenants.length, campaigns.length]);

  // 최적화된 스토어 구독 설정
  useEffect(() => {
    if (!isReady) return;

    // 변경 감지 함수
    const checkForChanges = () => {
      const currentTenants = useMainStore.getState().tenants;
      const currentCampaigns = useMainStore.getState().campaigns;
      
      // 깊은 비교 대신 간단한 비교 방법 사용
      const tenantsChanged = currentTenants.length !== previousDataRef.current.tenants.length || 
        currentTenants.some((tenant, idx) => {
          const prevTenant = previousDataRef.current.tenants[idx];
          return !prevTenant || 
            tenant.tenant_id !== prevTenant.tenant_id || 
            tenant.tenant_name !== prevTenant.tenant_name;
        });
      
      const campaignsChanged = currentCampaigns.length !== previousDataRef.current.campaigns.length || 
        currentCampaigns.some((campaign, idx) => {
          const prevCampaign = previousDataRef.current.campaigns[idx];
          return !prevCampaign || 
            campaign.campaign_id !== prevCampaign.campaign_id || 
            campaign.campaign_name !== prevCampaign.campaign_name ||
            campaign.start_flag !== prevCampaign.start_flag;
        });
      
      if (tenantsChanged || campaignsChanged) {
        console.log("TreeMenu hook: Detected actual data change");
        
        // 디바운싱: 여러 변경 사항을 한 번에 처리
        if (debounceTimerRef.current) {
          clearTimeout(debounceTimerRef.current);
        }
        
        debounceTimerRef.current = setTimeout(() => {
          console.log("TreeMenu hook: Updating after debounce");
          // 현재 데이터를 이전 데이터로 저장
          previousDataRef.current = {
            tenants: [...useMainStore.getState().tenants],
            campaigns: [...useMainStore.getState().campaigns]
          };
          // 캐시 무효화
          invalidateTreeMenuData();
          debounceTimerRef.current = null;
        }, 300); // 300ms 디바운스
      }
    };
    
    // Zustand 구독
    const unsubscribe = useMainStore.subscribe(checkForChanges);
    
    return () => {
      unsubscribe();
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [isReady]);

  // 트리 메뉴 데이터 생성
  const generateTreeMenuData = async (): Promise<TabData[]> => {
    console.log("Generating tree menu data from store");
    
    if (!isReady) {
      console.log("Store data not ready yet");
      return [];
    }
    
    try {
      // 스킬 데이터 가져오기
      const skillDataForCampaign = await fetchskillCampaignList();
      
      // 캠페인별 스킬 매핑 생성
      const campaignSkillsMap: { [key: string]: any[] } = {};
      
      // 안전한 접근: result_data가 있는지 확인
      if (skillDataForCampaign?.result_data) {
        skillDataForCampaign.result_data.forEach((skill: any) => {
          // skill.campaign_id가 존재하고 배열인지 확인
          if (skill.campaign_id && Array.isArray(skill.campaign_id)) {
            skill.campaign_id.forEach((campaignId: string) => {
              if (!campaignSkillsMap[campaignId]) {
                campaignSkillsMap[campaignId] = [];
              }
              // 중복 체크
              const exists = campaignSkillsMap[campaignId].some(s => s.skill_id === skill.skill_id);
              if (!exists) {
                campaignSkillsMap[campaignId].push({
                  skill_id: skill.skill_id,
                  tenant_id: skill.tenant_id
                });
              }
            });
          }
        });
      } else {
        console.log("No skill data available or incorrect structure");
      }

      // 테넌트별 캠페인 그룹화
      const campaignsByTenant: { [key: number]: any[] } = {};
      campaigns.forEach(campaign => {
        if (!campaignsByTenant[campaign.tenant_id]) {
          campaignsByTenant[campaign.tenant_id] = [];
        }
        campaignsByTenant[campaign.tenant_id].push(campaign);
      });

      // 트리 구조 생성
      const items: TreeItem[] = tenants.map(tenant => ({
        id: tenant.tenant_id.toString(),
        label: tenant.tenant_name,
        type: 'folder',
        children: campaignsByTenant[tenant.tenant_id]?.map(campaign => {
          // 각 캠페인에 대한 스킬 children 생성
          const skills = campaignSkillsMap[campaign.campaign_id.toString()] || [];

          return {
            id: campaign.campaign_id.toString(),
            label: campaign.campaign_name,
            type: 'campaign',
            status: getStatusFromFlags(campaign.start_flag),
            direction: 'outbound',
            tenantId: campaign.tenant_id.toString(),
            children: skills.map(skill => ({
              id: `skill-${skill.skill_id}-${campaign.campaign_id}`,
              label: `Skill ${skill.skill_id}`,
              type: 'skill',
              skillId: skill.skill_id,
              tenantId: skill.tenant_id.toString(),
              campaignName: campaign.campaign_name,
              visible: false
            }))
          };
        }) || []
      }));

      const tabData: TabData[] = [
        {
          id: 'campaign',
          label: '캠페인',
          items: [
            {
              id: 'nexus',
              label: 'NEXUS',
              type: 'folder',
              children: items
            }
          ]
        }
      ];

      console.log("Tree menu data generated successfully");
      return tabData;
      
    } catch (error) {
      console.error("Error generating tree menu data:", error);
      return [];
    }
  };

  // React Query 설정
  const query = useQuery<TabData[], Error>({
    queryKey: getQueryKey(),
    queryFn: generateTreeMenuData,
    // 실제 데이터가 준비되었을 때만 쿼리 활성화
    enabled: isReady,
    // 캐시 시간을 조절하여 불필요한 요청 감소
    staleTime: 30 * 1000, // 30초
  });
  
  // 서버 호출 없이 로컬 캐시만 업데이트하는 함수
  const updateTreeMenuData = (updater: (oldData: TabData[] | undefined) => TabData[]) => {
    queryClient.setQueryData(getQueryKey(), updater);
  };
  
  // 쿼리 캐시 무효화 함수
  const invalidateTreeMenuData = () => {
    queryClient.invalidateQueries({ queryKey: getQueryKey() });
  };

  // 기본 의존성 변경 감지 (fallback)
  useEffect(() => {
    if (isReady && (tenant_id || role_id)) {
      // 테넌트나 역할이 변경된 경우에만 무효화
      console.log("TreeMenu hook: Key parameters changed, invalidating query cache");
      invalidateTreeMenuData();
    }
  }, [isReady, tenant_id, role_id]);

  return {
    ...query,
    updateTreeMenuData,
    invalidateTreeMenuData,
    isStoreReady: isReady
  };
}