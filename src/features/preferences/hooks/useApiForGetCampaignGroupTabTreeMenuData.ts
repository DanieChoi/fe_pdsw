// src/features/preferences/hooks/useApiForCampaignGroupList.ts
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { 
    apiForCampaignGroupList, 
    apiForCombinedTenantAndCampaignGroup,
    apiForCombinedDataForSideMenu,
    transformToTreeData,
    apiForCampaignGroupCampaignList
} from '../api/apiForCampaignGroup';
import { 
    CampaignGroupApiResponse,
    TreeNode,
    SideMenuTreeData,
    CampaignGroupGampaignListApiResponse
} from '@/features/campaignManager/types/typeForCampaignGroupForSideBar';
import { TenantListResponse } from '@/features/campaignManager/types/typeForTenant';

interface CombinedData {
    tenantData: TenantListResponse;
    campaignGroupData: CampaignGroupApiResponse;
}

// 에러 타입 정의
interface CombinedDataError {
    message: string;
    originalError?: any;
    status?: number;
    result_code?: number;
    result_msg?: string;
}

export function useApiForGetCampaignGroupTabTreeMenuData(
    tenant_id: number,
    enabled: boolean = true
): UseQueryResult<TreeNode[], CombinedDataError> {

    console.log("tenant_id at 사이드 메뉴 호출 : ", tenant_id);

    return useQuery<CombinedData, CombinedDataError, TreeNode[]>({
        queryKey: ['sideMenuTreeData', tenant_id],
        queryFn: () => apiForCombinedTenantAndCampaignGroup(tenant_id),
        select: (data) => transformToTreeData(data),
        enabled,
        staleTime: 1000 * 60 * 5,
        retry: 1,
        refetchOnWindowFocus: false,
    });
}