import { TabData, TreeItem } from "@/features/campaignManager/types/typeForSidebar2";
import { apiForGetTenantList } from "./apiForTennants";
import { apiForGetCampaignList } from "./apiForCampaign";
import { fetchCounselorList } from "@/features/auth/api/main";
import { MainCredentials } from "@/features/auth/types/mainIndex";

function getStatusFromFlags(start_flag: number, end_flag: number): string {
  if (end_flag === 1) return 'stopped';      // 종료된 상태
  if (start_flag === 2) return 'pending';    // 대기 상태
  if (start_flag === 3) return 'active';     // 진행중 
  return 'stopped';                          // 기타 케이스는 stopped
}

export async function apiForGetTreeMenuDataForSideMenu(): Promise<TabData[]> {
  const [tenantsData, campaignData] = await Promise.all([
    apiForGetTenantList(),
    apiForGetCampaignList(),
  ]);

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

  const items: TreeItem[] = tenantsData.result_data.map(tenant => ({
    id: tenant.tenant_id.toString(),
    label: tenant.tenant_name,
    type: 'folder',
    children: campaignsByTenant[tenant.tenant_id]?.map(campaign => ({
      id: campaign.campaign_id.toString(),
      label: campaign.campaign_name,
      type: 'campaign',
      status: getStatusFromFlags(campaign.start_flag, campaign.end_flag),
      direction: 'outbound'
    })) || []
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
  const [tenantsData, counselorData] = await Promise.all([
    apiForGetTenantList(),
    fetchCounselorList(credentials),
  ]);

  if (!tenantsData?.result_data || !counselorData?.counselorList) {
    return [];
  }

  const counselorsByTenant: { [key: string]: Counselor[] } = {};
  counselorData.counselorList.forEach((counselor: Counselor) => {
    if (!counselorsByTenant[counselor.tenantId]) {
      counselorsByTenant[counselor.tenantId] = [];
    }
    counselorsByTenant[counselor.tenantId].push(counselor);
  });

  const items: TreeItem[] = tenantsData.result_data.map(tenant => ({
    id: tenant.tenant_id.toString(),
    label: tenant.tenant_name,
    type: 'folder',
    children: counselorsByTenant[tenant.tenant_id]?.map(counselor => ({
      id: counselor.counselorId,
      label: counselor.counselorname,
      type: 'counselor',
      tenantId: tenant.tenant_id.toString(),  // 추가된 부분
      affiliationGroupName: counselor.affiliationGroupName,
      affiliationTeamName: counselor.affiliationTeamName
    })) || []
  }));

  const tabData: TabData[] = [
    {
      id: 'agent',
      label: '상담원',
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

  return tabData;
}

