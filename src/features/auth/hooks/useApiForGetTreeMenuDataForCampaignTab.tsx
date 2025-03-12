// // src/features/campaignManager/hooks/useApiForGetTreeMenuDataForCampaignTab.ts
// import { useQuery } from '@tanstack/react-query';
// import { useApiForGetTenantList } from '@/features/auth/hooks/useApiForGetTennantList';
// import { useApiForGetCampaignList } from '@/features/auth/hooks/useApiForGetCampaignList';
// import { useMemo } from 'react';
// import { TabData, TreeItem } from '@/features/campaignManager/types/typeForSidebar2';

// function getStatusFromFlags(start_flag: number, end_flag: number): "pending" | "started" | "stopped" {
//   if (start_flag === 3) return 'started';
//   if (start_flag === 2) return 'pending';
//   return 'stopped';
// }

// export function useApiForGetTreeMenuDataForCampaignTab() {
//   // 기존 API hooks 사용
//   const {
//     data: tenantsData,
//     isLoading: isLoadingTenants,
//     error: tenantsError,
//   } = useApiForGetTenantList();

//   const {
//     data: campaignData,
//     isLoading: isLoadingCampaigns,
//     error: campaignError,
//   } = useApiForGetCampaignList();

//   // 데이터 변환 로직
//   const treeData = useMemo(() => {
//     if (!tenantsData?.result_data || !campaignData?.result_data) {
//       return [];
//     }

//     const campaignsByTenant: { [key: number]: typeof campaignData.result_data } = {};
//     campaignData.result_data.forEach(campaign => {
//       if (!campaignsByTenant[campaign.tenant_id]) {
//         campaignsByTenant[campaign.tenant_id] = [];
//       }
//       campaignsByTenant[campaign.tenant_id].push(campaign);
//     });

//     // 트리 구조 생성
//     const items: TreeItem[] = tenantsData.result_data.map(tenant => ({
//       id: tenant.tenant_id.toString(),
//       label: tenant.tenant_name,
//       type: 'folder',
//       children: campaignsByTenant[tenant.tenant_id]?.map(campaign => ({
//         id: campaign.campaign_id.toString(),
//         label: campaign.campaign_name,
//         type: 'campaign',
//         status: getStatusFromFlags(campaign.start_flag, campaign.end_flag),
//         direction: 'outbound' // 기본값 설정
//       })) || []
//     }));

//     // TabData 형식으로 변환
//     const tabData: TabData[] = [{
//       id: 'campaign',
//       label: '캠페인',
//       items: [{
//         id: 'nexus',
//         label: 'NEXUS',
//         type: 'folder',
//         children: items
//       }]
//     }];

//     return tabData;
//   }, [tenantsData, campaignData]);
//   console.log("treeData check 1 : ", treeData);
  
//   return {
//     treeData,
//     isLoading: isLoadingTenants || isLoadingCampaigns,
//     error: tenantsError || campaignError
//   };
// }

// src/features/campaignManager/hooks/useApiForGetTreeMenuDataForCampaignTab.ts
import { useQuery } from '@tanstack/react-query';
import useApiForGetTenantList from '@/features/auth/hooks/useApiForGetTennantList';
import { useApiForGetCampaignList } from '@/features/auth/hooks/useApiForGetCampaignList';
import { useMemo } from 'react';
import { TabData, TreeItem } from '@/features/campaignManager/types/typeForSidebar2';

function getStatusFromFlags(start_flag: number, end_flag: number): "pending" | "started" | "stopped" {
  if (start_flag === 3) return 'started';
  if (start_flag === 2) return 'pending';
  return 'stopped';
}

export function useApiForGetTreeMenuDataForCampaignTab() {
  // 기존 API hooks 사용
  const {
    data: tenantsData,
    isLoading: isLoadingTenants,
    error: tenantsError,
  } = useApiForGetTenantList();

  const {
    data: campaignData,
    isLoading: isLoadingCampaigns,
    error: campaignError,
  } = useApiForGetCampaignList();

  // 데이터 변환 로직
  const treeData = useMemo(() => {
    if (!tenantsData?.result_data || !campaignData?.result_data) {
      return [];
    }

    const campaignsByTenant: { [key: number]: typeof campaignData.result_data } = {};
    campaignData.result_data.forEach(campaign => {
      if (!campaignsByTenant[campaign.tenant_id]) {
        campaignsByTenant[campaign.tenant_id] = [];
      }
      campaignsByTenant[campaign.tenant_id].push(campaign);
    });

    // 트리 구조 생성
    const items: TreeItem[] = tenantsData.result_data.map(tenant => ({
      id: tenant.tenant_id.toString(),
      label: tenant.tenant_name,
      type: 'folder',
      children: campaignsByTenant[tenant.tenant_id]?.map(campaign => ({
        id: campaign.campaign_id.toString(),
        label: campaign.campaign_name,
        type: 'campaign',
        status: getStatusFromFlags(campaign.start_flag, campaign.end_flag),
        direction: 'outbound' // 기본값 설정
      })) || []
    }));

    // TabData 형식으로 변환
    const tabData: TabData[] = [{
      id: 'campaign',
      label: '캠페인',
      items: [{
        id: 'nexus',
        label: 'NEXUS',
        type: 'folder',
        children: items
      }]
    }];

    return tabData;
  }, [tenantsData, campaignData]);
  console.log("treeData check 1 : ", treeData);
  
  return {
    treeData,
    isLoading: isLoadingTenants || isLoadingCampaigns,
    error: tenantsError || campaignError
  };
}