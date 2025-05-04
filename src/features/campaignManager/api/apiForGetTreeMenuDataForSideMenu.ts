// // src/features/campaignManager/api/apiForGetTreeMenuDataForSideMenu.ts
// import { TabData, TreeItem } from "@/features/campaignManager/types/typeForSidebar2";
// import { apiForGetTenantList } from "./apiForTennants";
// import { apiForGetCampaignList } from "./apiForCampaign";
// import { fetchCounselorList } from "@/features/auth/api/main";
// import { MainCredentials } from "@/features/auth/types/mainIndex";
// import { fetchskillCampaignList } from "@/features/preferences/api/apiForSkill";
// import { useMainStore } from "@/store";

// function getStatusFromFlags(start_flag: number): 'started' | 'pending' | 'stopped' {
//   if (start_flag === 1) return 'started';      // 종료된 상태
//   if (start_flag === 2) return 'pending';    // 대기 상태
//   if (start_flag === 3) return 'stopped';     // 진행중 
//   return 'stopped';                          // 기타 케이스는 stopped
// }

// export async function apiForGetTreeMenuDataForSideMenu(tenant_id?: number, role_id?: string): Promise<TabData[]> {
//   const currentTenants = useMainStore.getState().tenants;
//   console.log("Current tenants from store:", currentTenants);

//   const [tenantsData, campaignData, skillDataForCampaign] = await Promise.all([
//     apiForGetTenantList(tenant_id),
//     apiForGetCampaignList(),
//     fetchskillCampaignList(),
//   ]);


//   if (!tenantsData?.result_data || !campaignData?.result_data) {
//     return [];
//   }

//   // 캠페인별 스킬 매핑 생성
//   const campaignSkillsMap: { [key: string]: any[] } = {};
//   skillDataForCampaign.result_data.forEach((skill: any) => {
//     skill.campaign_id.forEach((campaignId: string) => {
//       if (!campaignSkillsMap[campaignId]) {
//         campaignSkillsMap[campaignId] = [];
//       }
//       // 중복 체크
//       const exists = campaignSkillsMap[campaignId].some(s => s.skill_id === skill.skill_id);
//       if (!exists) {
//         campaignSkillsMap[campaignId].push({
//           skill_id: skill.skill_id,
//           tenant_id: skill.tenant_id
//         });
//       }
//     });
//   });

//   // 중복 제거된 캠페인 목록 생성
//   const uniqueCampaigns = [...new Map(campaignData.result_data.map(item =>
//     [item.campaign_id, item]
//   )).values()];

//   // 테넌트별 캠페인 그룹화
//   const campaignsByTenant: { [key: number]: typeof campaignData.result_data } = {};
//   uniqueCampaigns.forEach(campaign => {
//     if (!campaignsByTenant[campaign.tenant_id]) {
//       campaignsByTenant[campaign.tenant_id] = [];
//     }
//     campaignsByTenant[campaign.tenant_id].push(campaign);
//   });

//   // 트리 구조 생성
//   const items: TreeItem[] = tenantsData.result_data.map(tenant => ({
//     id: tenant.tenant_id.toString(),
//     label: tenant.tenant_name,
//     type: 'folder',
//     children: campaignsByTenant[tenant.tenant_id]?.map(campaign => {
//       // 각 캠페인에 대한 스킬 children 생성
//       const skills = campaignSkillsMap[campaign.campaign_id.toString()] || [];

//       return {
//         id: campaign.campaign_id.toString(),
//         label: campaign.campaign_name,
//         type: 'campaign',
//         status: getStatusFromFlags(campaign.start_flag),
//         direction: 'outbound',
//         tenantId: campaign.tenant_id.toString(),
//         children: skills.map(skill => ({
//           id: `skill-${skill.skill_id}-${campaign.campaign_id}`,
//           label: `Skill ${skill.skill_id}`,
//           type: 'skill',
//           skillId: skill.skill_id,
//           tenantId: skill.tenant_id.toString(),
//           campaignName: campaign.campaign_name,
//           visible: false
//         }))
//       };
//     }) || []
//   }));

//   const tabData: TabData[] = [
//     {
//       id: 'campaign',
//       label: '캠페인',
//       items: [
//         {
//           id: 'nexus',
//           label: 'NEXUS',
//           type: 'folder',
//           children: items
//         }
//       ]
//     }
//   ];

//   console.log("tabData !!!", tabData);

//   return tabData;
// }

// interface Counselor {
//   tenantId: string;
//   counselorId: string;
//   counselorname: string;
//   affiliationGroupName: string;
//   affiliationTeamName: string;
// }

// export async function apiToFetchCounselorTreeData(credentials: MainCredentials): Promise<TabData[]> {
//   const [tenantsData, counselorData] = await Promise.all([
//     apiForGetTenantList(credentials.tenant_id),
//     fetchCounselorList(credentials),
//   ]);

//   if (!tenantsData?.result_data || !counselorData?.counselorList) {
//     return [];
//   }

//   const counselorsByTenant: { [key: string]: Counselor[] } = {};
//   counselorData.counselorList.forEach((counselor: Counselor) => {
//     if (!counselorsByTenant[counselor.tenantId]) {
//       counselorsByTenant[counselor.tenantId] = [];
//     }
//     counselorsByTenant[counselor.tenantId].push(counselor);
//   });

//   const items: TreeItem[] = tenantsData.result_data.map(tenant => ({
//     id: tenant.tenant_id.toString(),
//     label: tenant.tenant_name,
//     type: 'folder',
//     children: counselorsByTenant[tenant.tenant_id]?.map(counselor => ({
//       id: counselor.counselorId,
//       label: counselor.counselorname,
//       type: 'counselor',
//       tenantId: tenant.tenant_id.toString(),
//       affiliationGroupName: counselor.affiliationGroupName,
//       affiliationTeamName: counselor.affiliationTeamName
//     })) || []
//   }));

//   const tabData: TabData[] = [
//     {
//       id: 'agent',
//       label: '상담사',
//       items: [
//         {
//           id: 'nexus',
//           label: 'NEXUS',
//           type: 'folder',
//           children: items
//         }
//       ]
//     }
//   ];

//   return tabData;
// }

// src/features/campaignManager/api/apiForGetTreeMenuDataForSideMenu.ts
import { TabData, TreeItem } from "@/features/campaignManager/types/typeForSidebar2";
import { apiForGetCampaignList } from "./apiForCampaign";
import { fetchCounselorList } from "@/features/auth/api/main";
import { MainCredentials } from "@/features/auth/types/mainIndex";
import { fetchskillCampaignList } from "@/features/preferences/api/apiForSkill";
import { useMainStore } from "@/store";

function getStatusFromFlags(start_flag: number): 'started' | 'pending' | 'stopped' {
  if (start_flag === 1) return 'started';      // 종료된 상태
  if (start_flag === 2) return 'pending';    // 대기 상태
  if (start_flag === 3) return 'stopped';     // 진행중 
  return 'stopped';                          // 기타 케이스는 stopped
}

// 테넌트 로딩 완료 확인을 위한 함수
async function waitForTenantsLoaded(maxAttempts = 20, delay = 300): Promise<boolean> {
  let attempts = 0;
  
  while (attempts < maxAttempts) {
    const { tenants, tenantsLoaded } = useMainStore.getState();
    
    // 테넌트 데이터가 로드되었는지 확인
    if (tenantsLoaded && tenants.length > 0) {
      console.log("Tenants loaded successfully:", tenants);
      return true;
    }
    
    // 아직 로드 중이므로 대기
    console.log(`Waiting for tenants to load... (${attempts + 1}/${maxAttempts})`);
    await new Promise(resolve => setTimeout(resolve, delay));
    attempts++;
  }
  
  console.log("Timed out waiting for tenants to load");
  return false;
}

export async function apiForGetTreeMenuDataForSideMenu(tenant_id?: number, role_id?: string): Promise<TabData[]> {
  console.log("Starting apiForGetTreeMenuDataForSideMenu");
  
  // 테넌트 데이터가 로드될 때까지 대기
  const tenantsLoaded = await waitForTenantsLoaded();
  if (!tenantsLoaded) {
    console.log("Could not load tenants data from store after timeout");
    return [];
  }
  
  // 스토어에서 테넌트 데이터 가져오기
  const tenants = useMainStore.getState().tenants;
  console.log("Using tenants from store:", tenants);
  
  // 캠페인 데이터와 스킬 데이터 가져오기
  const [campaignData, skillDataForCampaign] = await Promise.all([
    apiForGetCampaignList(),
    fetchskillCampaignList(),
  ]);

  if (!campaignData?.result_data) {
    console.log("No campaign data available");
    return [];
  }

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
  const campaignsByTenant: { [key: number]: typeof campaignData.result_data } = {};
  campaignData.result_data.forEach(campaign => {
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

  console.log("tabData generated:", tabData);
  return tabData;
}

interface Counselor {
  tenantId: string;
  counselorId: string;
  counselorname: string;
  affiliationGroupName: string;
  affiliationTeamName: string;
}

export async function apiToFetchCounselorTreeData(credentials: MainCredentials): Promise<TabData[]> {
  console.log("Starting apiToFetchCounselorTreeData");
  
  // 테넌트 데이터가 로드될 때까지 대기
  const tenantsLoaded = await waitForTenantsLoaded();
  if (!tenantsLoaded) {
    console.log("Could not load tenants data from store for counselors after timeout");
    return [];
  }
  
  // 스토어에서 테넌트 데이터 가져오기
  const tenants = useMainStore.getState().tenants;
  console.log("Using tenants from store for counselors:", tenants);

  // 상담사 데이터 가져오기
  const counselorData = await fetchCounselorList(credentials);

  if (!counselorData?.counselorList) {
    console.log("No counselor data available");
    return [];
  }

  const counselorsByTenant: { [key: string]: Counselor[] } = {};
  counselorData.counselorList.forEach((counselor: Counselor) => {
    if (!counselorsByTenant[counselor.tenantId]) {
      counselorsByTenant[counselor.tenantId] = [];
    }
    counselorsByTenant[counselor.tenantId].push(counselor);
  });

  const items: TreeItem[] = tenants.map(tenant => ({
    id: tenant.tenant_id.toString(),
    label: tenant.tenant_name,
    type: 'folder',
    children: counselorsByTenant[tenant.tenant_id]?.map(counselor => ({
      id: counselor.counselorId,
      label: counselor.counselorname,
      type: 'counselor',
      tenantId: tenant.tenant_id.toString(),
      affiliationGroupName: counselor.affiliationGroupName,
      affiliationTeamName: counselor.affiliationTeamName
    })) || []
  }));

  const tabData: TabData[] = [
    {
      id: 'agent',
      label: '상담사',
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

  console.log("counselor tabData generated:", tabData);
  return tabData;
}