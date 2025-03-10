// src/features/campaignManager/api/apiForCampaignGroup.ts
import { axiosInstance } from "@/lib/axios";
import { 
    AddCampaignGroupCredentials, 
    CampaignGroupApiResponse, 
    SuccessResponse,
    TreeNode,
    SideMenuTreeData
} from "@/features/campaignManager/types/typeForCampaignGroupForSideBar";
import { TenantListResponse } from "@/features/campaignManager/types/typeForTenant";
import { apiForGetTenantList } from "@/features/campaignManager/api/apiForTennants";

interface CombinedData {
    tenantData: TenantListResponse;
    campaignGroupData: CampaignGroupApiResponse;
}

/**
 * 테넌트 목록과 캠페인 그룹 목록을 동시에 가져오는 API 함수
 * @param tenant_id 테넌트 ID (캠페인 그룹 조회에 사용)
 * @returns Promise<CombinedData> 테넌트와 캠페인 그룹 데이터를 포함한 객체
 */
export const apiForCombinedTenantAndCampaignGroup = async (
    tenant_id: number
): Promise<CombinedData> => {
    try {
        // Promise.all을 사용하여 두 API를 병렬로 호출
        const [tenantData, campaignGroupData] = await Promise.all([
            apiForGetTenantList(),
            apiForCampaignGroupList(tenant_id)
        ]);
        
        console.log("Combined API for tenant data:", tenantData);
        console.log("Combined API for campaign group data:", campaignGroupData);
        
        return {
            tenantData,
            campaignGroupData
        };
    } catch (error: any) {
        console.error("Combined API call failed:", error);
        
        // 에러 객체에 custom 속성 추가
        const enhancedError = new Error(
            error.message || "테넌트 및 캠페인 그룹 데이터를 가져오는데 실패했습니다."
        );
        
        // 원본 에러 정보 유지
        (enhancedError as any).originalError = error;
        
        throw enhancedError;
    }
};

/**
 * API 응답 데이터를 트리 구조로 변환하는 함수
 * @param combinedData 통합 API 응답 데이터
 * @returns 트리 구조의 데이터
 */
export const transformToTreeData = (combinedData: CombinedData): TreeNode[] => {
    const { tenantData, campaignGroupData } = combinedData;
    
    if (!tenantData?.result_data) {
        return [];
    }
    
    // 테넌트별 그룹 매핑
    const groupsByTenant: Record<number, typeof campaignGroupData.result_data> = {};
    
    if (campaignGroupData?.result_data) {
        campaignGroupData.result_data.forEach(group => {
            if (!groupsByTenant[group.tenant_id]) {
                groupsByTenant[group.tenant_id] = [];
            }
            groupsByTenant[group.tenant_id].push(group);
        });
    }
    
    // 테넌트 노드 생성 (그룹 포함)
    const tenantNodes = tenantData.result_data.map(tenant => ({
        id: `tenant-${tenant.tenant_id}`,
        name: `[${tenant.tenant_id}]${tenant.tenant_name}`,
        type: "tenant" as const,
        tenant_id: tenant.tenant_id,
        children: (groupsByTenant[tenant.tenant_id] || []).map(group => ({
            id: `group-${group.group_id}-${tenant.tenant_id}-${group.group_name}`,
            name: group.group_name,
            type: "group" as const,
            tenant_id: group.tenant_id,
            group_id: group.group_id
        }))
    }));
    
    // 최상위 NEXUS 노드에 테넌트 노드를 자식으로 추가
    return [{
        id: "nexus-root",
        name: "[1]NEXUS",
        type: "root" as const,
        children: tenantNodes
    }];
};

/**
 * 사이드 메뉴를 위한 통합 데이터 변환 함수
 * @param combinedData 통합 API 응답 데이터
 * @returns 사이드 메뉴용 트리 데이터
 */
export const apiForCombinedDataForSideMenu = (combinedData: CombinedData): SideMenuTreeData => {
    const treeData = transformToTreeData(combinedData);
    
    return {
        items: treeData
    };
};

// 캠페인 그룹 목록을 가져오는 API
export const apiForCampaignGroupList = async (
    tenant_id: number
): Promise<CampaignGroupApiResponse> => {
    const request_data = {
        request_data: {
            tenant_id: tenant_id
        }
    };
    
    try {
        const { data } = await axiosInstance.post<CampaignGroupApiResponse>(
            `collections/campaign-group`,
            request_data
        );
        return data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            throw new Error("세션이 만료되었습니다. 다시 로그인해주세요.");
        }
        throw new Error(
            `${error.response?.data?.result_code || ''}||${error.response?.data?.result_msg || '데이터 가져오기 실패'}`
        );
    }
};

// 캠페인 그룹 생성 API
export const apiForCreateCampaignGroup = async (
    credentials: AddCampaignGroupCredentials
): Promise<SuccessResponse> => {
    const request_data = {
        request_data: {
            tenant_id: credentials.tenant_id,
            group_name: credentials.group_name,
        },
    };
    
    console.log("Create campaign group request data:", request_data);
    

    try {
        // group_id를 URL에 포함시킴
        const { data } = await axiosInstance.post<SuccessResponse>(
            `campaign-groups/${credentials.group_id}`,
            request_data
        );
        return data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            throw new Error("세션이 만료되었습니다. 다시 로그인해주세요.");
        }

        console.log("error ", error);
        
        throw error;
    }
};