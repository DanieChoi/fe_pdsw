// // fetchCampaignProgressMultiple.ts

// import { fetchCampaignProgressInformation } from "@/features/monitoring/api/mainCampaignProgressInformation";
// import { CampaignProgressInformationResponse } from "@/features/monitoring/types/monitoringIndex";

// export const fetchCampaignProgressForMultipleCampaigns = async (
//   campaigns: { campaign_id: number; tenant_id: number; campaign_name: string }[]
// ): Promise<
//   {
//     campaign_id: number;
//     campaign_name: string;
//     progressInfoList: CampaignProgressInformationResponse['progressInfoList'];
//   }[]
// > => {
//   const results = await Promise.allSettled(
//     campaigns.map((c) =>
//       fetchCampaignProgressInformation({
//         tenantId: c.tenant_id,
//         campaignId: c.campaign_id,
//       }).then((res) => ({
//         campaign_id: c.campaign_id,
//         campaign_name: c.campaign_name,
//         progressInfoList: res.progressInfoList || [],
//       }))
//     )
//   );

//   return results
//     .filter((r): r is PromiseFulfilledResult<any> => r.status === 'fulfilled')
//     .map((r) => r.value);
// };

// fetchCampaignProgressMultiple.ts

import { fetchCampaignProgressInformation } from "@/features/monitoring/api/mainCampaignProgressInformation";
import { CampaignProgressInformationResponse } from "@/features/monitoring/types/monitoringIndex";

export const fetchCampaignProgressForMultipleCampaigns = async (
  campaigns: { campaign_id: number; tenant_id: number; campaign_name: string }[]
): Promise<
  {
    campaign_id: number;
    campaign_name: string;
    progressInfoList: CampaignProgressInformationResponse["progressInfoList"];
  }[]
> => {
  // Return early if no campaigns to fetch
  if (campaigns.length === 0) {
    return [];
  }

  // Log which campaigns are being fetched for debugging
  console.log(
    `[fetchCampaignProgressForMultipleCampaigns] Fetching progress for ${campaigns.length} campaigns:`,
    campaigns.map(c => `${c.campaign_id} (${c.campaign_name})`)
  );

  const results: {
    campaign_id: number;
    campaign_name: string;
    progressInfoList: CampaignProgressInformationResponse["progressInfoList"];
  }[] = [];

  // Use Promise.all for parallel execution but catch individual errors
  // This gives better performance than the sequential for loop in the original
  const promises = campaigns.map(c => 
    fetchCampaignProgressInformation({
      tenantId: c.tenant_id,
      campaignId: c.campaign_id,
    })
    .then(res => ({
      campaign_id: c.campaign_id,
      campaign_name: c.campaign_name,
      progressInfoList: res.progressInfoList || [],
    }))
    .catch(error => {
      console.error(
        `[fetchCampaignProgressForMultipleCampaigns] 캠페인 ${c.campaign_id} (${c.campaign_name}) 조회 실패:`,
        error
      );
      // Return null for failed requests
      return null;
    })
  );

  const settledResults = await Promise.all(promises);
  
  // Filter out null results from failed requests
  return settledResults.filter(result => result !== null);
};