// fetchCampaignProgressMultiple.ts

import { fetchCampaignProgressInformation } from "@/features/monitoring/api/mainCampaignProgressInformation";
import { CampaignProgressInformationResponse } from "@/features/monitoring/types/monitoringIndex";

export const fetchCampaignProgressForMultipleCampaigns = async (
  campaigns: { campaign_id: number; tenant_id: number; campaign_name: string }[]
): Promise<
  {
    campaign_id: number;
    campaign_name: string;
    progressInfoList: CampaignProgressInformationResponse['progressInfoList'];
  }[]
> => {
  const results = await Promise.allSettled(
    campaigns.map((c) =>
      fetchCampaignProgressInformation({
        tenantId: c.tenant_id,
        campaignId: c.campaign_id,
      }).then((res) => ({
        campaign_id: c.campaign_id,
        campaign_name: c.campaign_name,
        progressInfoList: res.progressInfoList || [],
      }))
    )
  );

  return results
    .filter((r): r is PromiseFulfilledResult<any> => r.status === 'fulfilled')
    .map((r) => r.value);
};
