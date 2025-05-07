// "use client";

// import { useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
// import { TabData, TreeItem } from "@/features/campaignManager/types/typeForSidebar2";
// import { useAuthStore, useMainStore } from "@/store";
// import { useEffect, useState } from "react";
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
//   const { tenantsLoaded, campaignsLoaded, tenants, campaigns } = useMainStore();
//   const [isReady, setIsReady] = useState(false);
  
//   const getQueryKey = () => ["treeMenuDataForSideMenu", tenant_id, role_id];

//   // 스토어 데이터 준비 여부 확인
//   // useEffect(() => {
//   //   if (session_key !== "" && tenantsLoaded && campaignsLoaded && 
//   //       tenants.length > 0 && campaigns.length > 0) {
//   //     console.log("TreeMenu hook: Store data is ready");
//   //     setIsReady(true);
//   //   }
//   // }, [session_key, tenantsLoaded, campaignsLoaded, tenants.length, campaigns.length]);
  

//   // Create the query function that uses store data directly
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

//   const query = useQuery<TabData[], Error>({
//     queryKey: getQueryKey(),
//     queryFn: generateTreeMenuData,
//     // 실제 데이터가 준비되었을 때만 쿼리 활성화
//     enabled: isReady,
//     // 캐시 시간을 조절하여 불필요한 요청 감소
//     staleTime: 30 * 1000, // 30초
//   });
  
//   // 서버 호출 없이 로컬 캐시만 업데이트하는 함수 추가
//   const updateTreeMenuData = (updater: (oldData: TabData[] | undefined) => TabData[]) => {
//     queryClient.setQueryData(getQueryKey(), updater);
//   };
  
//   // 필요한 경우에만 완전히 무효화하는 함수
//   const invalidateTreeMenuData = () => {
//     queryClient.invalidateQueries({ queryKey: getQueryKey() });
//   };

//   // 상태 변경 감지 및 캐시 무효화
//   useEffect(() => {
//     if (isReady) {
//       // 스토어 데이터가 변경되면 캐시 업데이트 필요
//       console.log("TreeMenu hook: Invalidating query cache due to data changes");
//       invalidateTreeMenuData();
//     }
//   }, [isReady, tenant_id, role_id, campaigns.length]);

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
import { useEffect, useState } from "react";
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
    campaigns,
    storeVersion // 추가: storeVersion을 구독하여 변경 감지
  } = useMainStore();
  const [isReady, setIsReady] = useState(false);
  
  const getQueryKey = () => ["treeMenuDataForSideMenu", tenant_id, role_id];

  // 스토어 데이터 준비 여부 확인 (주석 해제)
  useEffect(() => {
    if (session_key !== "" && tenantsLoaded && campaignsLoaded && 
        tenants.length > 0 && campaigns.length > 0) {
      console.log("TreeMenu hook: Store data is ready");
      setIsReady(true);
    }
  }, [session_key, tenantsLoaded, campaignsLoaded, tenants.length, campaigns.length]);

  // 스토어 구독 설정 (새로 추가)
  useEffect(() => {
    // 스토어 변경 감지를 위한 구독 설정
    const unsubscribe = useMainStore.subscribe((state) => {
      if (isReady) {
        // 변경을 감지하려는 상태 값들을 참조
        const campaigns = state.campaigns;
        const tenants = state.tenants;
        console.log("TreeMenu hook: Store data changed, invalidating query cache");
        invalidateTreeMenuData();
      }
    });
    
    return () => unsubscribe();
  }, [isReady]);

  // Create the query function that uses store data directly
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
      skillDataForCampaign.result_data.forEach((skill: any) => {
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
      });

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

  const query = useQuery<TabData[], Error>({
    queryKey: getQueryKey(),
    queryFn: generateTreeMenuData,
    // 실제 데이터가 준비되었을 때만 쿼리 활성화
    enabled: isReady,
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

  // 상태 변경 감지 및 캐시 무효화
  useEffect(() => {
    if (isReady) {
      // 스토어 데이터가 변경되면 캐시 업데이트 필요
      console.log("TreeMenu hook: Invalidating query cache due to data changes");
      invalidateTreeMenuData();
    }
  }, [isReady, tenant_id, role_id, campaigns.length, storeVersion]); // storeVersion 추가

  return {
    ...query,
    updateTreeMenuData,
    invalidateTreeMenuData,
    isStoreReady: isReady
  };
}