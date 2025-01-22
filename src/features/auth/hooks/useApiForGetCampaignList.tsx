// src/features/campaignManager/hooks/useApiForGetCampaignList.ts
import { apiForGetCampaignList } from '@/features/campaignManager/api/apiForCampaign';
import { CampaignApiError, CampaignListResponse } from '@/features/campaignManager/types/typeForCampaignForSideBar';
import { useQuery } from '@tanstack/react-query';

import { toast } from 'react-toastify';


export function useApiForGetCampaignList() {
    return useQuery<CampaignListResponse, CampaignApiError>({
        queryKey: ['campaignList'],
        queryFn: apiForGetCampaignList,
        staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
        refetchOnWindowFocus: false
    });
}