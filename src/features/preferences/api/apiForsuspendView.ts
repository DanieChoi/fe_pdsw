import { SuspendedCampaignListResponse, SuspendedSkillListResponse } from "../types/SystemPreferences";
import { axiosInstance } from "@/lib/axios";

// 서스팬드 캠페인 조회
export const fetchSuspendedCampaignList = async (): Promise<SuspendedCampaignListResponse> => {
    const suspendedCampaignRequestData = {
        filter: {
            "tenant_id": [1],
        }
    };

    try {
        const { data } = await axiosInstance.post<SuspendedCampaignListResponse>(
            '/collections/suspended-campaign',
            suspendedCampaignRequestData
        );
        return data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
        }
        throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
    }
}

// 서스팬드 스킬 조회
export const fetchSuspendedSkillList = async (): Promise<SuspendedSkillListResponse> => {
    const suspendedSkillRequestData = {
        filter: {
            "tenant_id": [1],
        }
    };

    try {
        const { data } = await axiosInstance.post<SuspendedSkillListResponse>(
            '/collections/suspended-skill',
            suspendedSkillRequestData
        );
        return data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
        }
        throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
    }
}