import { axiosInstance } from "@/lib/axios";
import { CampaignListResponse, SkillAgentListResponse, SkillCampaignListResponse, SkillListCredentials, SkillListResponse } from "../types/SystemPreferences";

// 스킬 마스터 리스트 조회 API
export const fetchSkillList = async (credentials: SkillListCredentials): Promise<SkillListResponse> => {
    const SkillListRequestData = {
        filter: {
            skill_id: {
                start: 1,
                end: 9999999
            },
            tenant_id: credentials.tenant_id_array
        },
        sort: {
            skill_id: 0,
            tenant_id: 0
        },
        page: {
            index: 1,
            items: 10
        }
    };

    try {
        const { data } = await axiosInstance.post<SkillListResponse>(
            '/collections/skill',
            SkillListRequestData
        );
        return data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
        }
        throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
    }
};

// 스킬 할당 캠페인 조회
export const fetchskillCampaignList = async() : Promise<SkillCampaignListResponse> => {
    const skillCampaignListRequestData = {
        filter: {
            skill_id: {
                "start": 1,
                "end": 99
            }
        },
        sort: {
            skill_id: 0
        },
        page: {
            index: 1,
            items: 10
        }
    };

    try {
        const { data } = await axiosInstance.post<SkillCampaignListResponse>(
            '/collections/skill-campaign',
            skillCampaignListRequestData
        );
        return data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
        }
        throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
    }
};


// 스킬 할당 상담사 조회
export const fetchSkillAgentList = async(): Promise<SkillAgentListResponse> => {
    const skillAgentListRequestData = {
        filter: {
            skill_id: {
                "start": 1,
                "end": 99
            }
        },
        sort: {
            skill_id: 0
        },
        page: {
            index: 1,
            items: 10
        }
    };

    try {
        const { data } = await axiosInstance.post<SkillAgentListResponse>(
            '/collections/skill-agent',
            skillAgentListRequestData
        );
        return data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
        }
        throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
    }
};

// 캠페인 정보 조회 API
export const fetchCampaignList = async (): Promise<CampaignListResponse> => {
    const campaignListRequestData = {
        filter: {
            campaign_id: {
                start: 1,
                end: 9999999,
            },
        },
        sort: {
            campaign_id: 1,
        },
        page: {
            index: 1,
            items: 9999999,
        },
    };

    try {
        const { data } = await axiosInstance.post<CampaignListResponse>(
            '/collections/campaign',
            campaignListRequestData
        );
        return data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
        }
        throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
    }
};