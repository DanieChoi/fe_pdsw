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
  const results: {
    campaign_id: number;
    campaign_name: string;
    progressInfoList: CampaignProgressInformationResponse["progressInfoList"];
  }[] = [];

  for (const c of campaigns) {
    try {
      const res = await fetchCampaignProgressInformation({
        tenantId: c.tenant_id,
        campaignId: c.campaign_id,
      });

      results.push({
        campaign_id: c.campaign_id,
        campaign_name: c.campaign_name,
        progressInfoList: res.progressInfoList || [],
      });
    } catch (error) {
      console.error(
        `[fetchCampaignProgressForMultipleCampaigns] 캠페인 ${c.campaign_id} (${c.campaign_name}) 조회 실패:`,
        error
      );
      // 실패한 항목은 결과에 포함하지 않음 (필요 시 별도 처리 가능)
    }
  }

  return results;
};
