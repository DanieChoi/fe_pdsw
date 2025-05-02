"use client";

import { apiForCampaignAgentListForSystemAdmin, IRequestTypeForCampaignAgentListForSystemAdmin, IResponseTypeForCampaignAgentListForSystemAdmin } from "@/shared/api/camapign/apiForCampaignAgentListForSystemAdmin";
import { useQuery } from "@tanstack/react-query";

interface UseApiForCampaignAgentListOptions {
  request?: Partial<IRequestTypeForCampaignAgentListForSystemAdmin>;
  enabled?: boolean;
}

export const useApiForCampaignAgentListForSystemAdmin = ({
  request,
  enabled = true,
}: UseApiForCampaignAgentListOptions = {}) => {
  return useQuery<IResponseTypeForCampaignAgentListForSystemAdmin>({
    queryKey: ["campaignAgentListForSystemAdmin", request],
    queryFn: () => apiForCampaignAgentListForSystemAdmin(request),
    enabled,
    staleTime: 1000 * 60 * 5, // 5분
  });
};