import { axiosInstance } from "@/lib/axios";
import { CreateMaxCallRequest, CreateMaxCallResponse, MaxCallInitTimeListResponse, MaxCallInitTimeUpdateRequest, MaxCallInitTimeUpdateResponse, MaxCallListCredentials, MaxCallListResponse } from "../types/SystemPreferences";

// 운영설정 분배호수 제한 설정 리스트 요청
export const fetchMaxCallList = async (credentials: MaxCallListCredentials): Promise<MaxCallListResponse> => {
    const maxCallListRequestData = {
        filter: {
            campaign_id: credentials.campaign_id,
            agent_id: {
                "start": 1000,
                "end": 99999
            }
        },
        sort: {
            campaign_id: 0,
            agent_id: 0
        },
        page: {
            index: 1,
            items: 10
        }
    };

    try {
        const { data } = await axiosInstance.post<MaxCallListResponse>(
            '/collections/maxcall-ext',
            maxCallListRequestData
        );
        return data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
        }
        throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
    }
};

// 신규 등록 API (POST)
export const createMaxCall = async (credentials: CreateMaxCallRequest): Promise<CreateMaxCallResponse> => {
    const requestData = {
        request_data: [
            {
                agent_id: credentials.agent_id,
                max_call: credentials.max_call,
                fix_flag: credentials.fix_flag
            }
        ]
    };

    try {
        const { data } = await axiosInstance.post<CreateMaxCallResponse>(
            '/campaigns/'+credentials.campaign_id+'/maxcall-ext',
            requestData
        );
        return data;
    } catch (error: any) {
        if (error.response?.status === 401) {
          throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
        }
        throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
    }
};

// 수정 API (PUT)
export const updateMaxCall = async (credentials: CreateMaxCallRequest): Promise<CreateMaxCallResponse> => {
    const requestData = {
        request_data: [
            {
                agent_id: credentials.agent_id,
                max_call: credentials.max_call,
                fix_fleg: credentials.fix_flag
            }
        ]
    };

    try {
        const { data } = await axiosInstance.put<CreateMaxCallResponse>(
            '/campaigns/'+credentials.campaign_id+'/maxcall-ext',
            requestData
        );
        return data;
    } catch (error: any) {
        if (error.response?.status === 401) {
          throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
        }
        throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
    }
};

// 운영설정 분배호수 제한 설정 초기화 시각 조회 API
export const fetchMaxCallInitTimeList = async (): Promise<MaxCallInitTimeListResponse> => {
    try {
        const { data } = await axiosInstance.post<MaxCallInitTimeListResponse>(
            '/collections/maxcall-init-time',
        );
        return data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
        }
        throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
    }
}

// 운영설정 분배호수 제한 설정 초기화 시각 수정 API
export const updateMaxCallInitTime = async (crenentials: MaxCallInitTimeUpdateRequest): Promise<MaxCallInitTimeUpdateResponse> => {
    const requestData = {
        request_data: {
            init_time: crenentials.init_time
        }
    };

    try {
        const { data } = await axiosInstance.put<MaxCallInitTimeUpdateResponse>(
            '/maxcall-init-time',
            requestData
        );
        return data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
        }
        throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
    }
}