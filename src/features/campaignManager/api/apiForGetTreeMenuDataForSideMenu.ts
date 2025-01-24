// src/features/campaignManager/api/apiForGetTreeMenuDataForSideMenu.ts
import { TabData, TreeItem } from "@/features/campaignManager/types/typeForSidebar2";
import { apiForGetTenantList } from "./apiForTennants";
import { apiForGetCampaignList } from "./apiForCampaign";

// start_flag, end_flag 에 따라 상태 텍스트 변환
function getStatusFromFlags(start_flag: number, end_flag: number): string {
  if (start_flag === 3) return 'active';
  if (start_flag === 2) return 'pending';
  return 'stopped';
}

/**
 * 테넌트 목록 + 캠페인 목록을 모두 가져와 트리 구조로 합쳐주는 API 함수
 */
export async function apiForGetTreeMenuDataForSideMenu(): Promise<TabData[]> {
  // Promise.all 로 두 API를 병렬 호출
  const [tenantsData, campaignData] = await Promise.all([
    apiForGetTenantList(),
    apiForGetCampaignList(),
  ]);

  // 결과값이 정상적으로 존재하는지 체크
  if (!tenantsData?.result_data || !campaignData?.result_data) {
    return [];
  }

  // tenant_id별로 캠페인을 묶기
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
      direction: 'outbound'
    })) || []
  }));

  // 최종적으로 TabData 형태로 감싸기
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
