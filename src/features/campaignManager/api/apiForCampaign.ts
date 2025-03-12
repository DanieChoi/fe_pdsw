// src\features\campaignManager\api\apiForCampaign.ts
// 사이드바 메뉴에 표시할 캠페인 리스트를 가져오는 API 함수

// src/features/campaignManager/api/apiForCampaignList.ts
import { axiosInstance } from "@/lib/axios";
import { CampaignApiError, CampaignListResponse, CampaignRequestData } from "../types/typeForCampaignForSideBar";


export const apiForGetCampaignList = async (): Promise<CampaignListResponse> => {
    const campaignRequestData: CampaignRequestData = {
        filter: {
            campaign_id: {
                start: 1,
                end: 9999999,
            },
        },
        sort: {
            campaign_id: 0,
        },
        page: {
            index: 1,
            items: 9999999,
        },
    };

    try {
        const { data } = await axiosInstance.post<CampaignListResponse>(
            '/collections/campaign',
            campaignRequestData
        );

        if (data.result_code === 0 && data.result_msg === "Success") {
            // console.log("api for campaign data check : ", data);
            return data;
        } else {
            throw new Error(`API Error: ${data.result_msg}`);
        }
    } catch (error) {
        const typedError = error as CampaignApiError;
        throw new Error(
            typedError.response?.data?.result_msg || '캠페인 목록을 가져오는데 실패했습니다.'
        );
    }
};