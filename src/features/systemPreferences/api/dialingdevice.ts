import { axiosInstance } from "@/lib/axios";
import { DialingDeviceCreateRequest, DialingDeviceCreateResponse, DialingDeviceListCredentials, DialingDeviceListResponse } from "../types/SystemPreferences";

// 시스템 설정 장비 리스트 요청
export const fetchDialingDeviceList = async (credentials: DialingDeviceListCredentials): Promise<DialingDeviceListResponse> => {
    const dialingDeviceListRequestData = {
        filter: {
            device_id: {
                "start": 1,
                "end": 99,
            },
            tenant_id: credentials.tenant_id_array
        },
        sort: {
            device_id: 0,
            tenant_id: 0
        },
        page: {
            index: 1,
            items: 10,
        },
    };

    try {
        const { data } = await axiosInstance.post<DialingDeviceListResponse>(
            '/collections/dialing-device',
            dialingDeviceListRequestData
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
export const createDialingDevice = async (credentials: DialingDeviceCreateRequest): Promise<DialingDeviceCreateResponse> => {
    const requestData = {
        request_data: {
            tenant_id: credentials.tenant_id,
            device_id: credentials.device_id,
            device_name: credentials.device_name,
            channel_count: credentials.channel_count,
        }
    };
    
    try {
        const { data } = await axiosInstance.post<DialingDeviceCreateResponse>(
            '/dialing-device',
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
export const updateDialingDevice = async (credentials: DialingDeviceCreateRequest): Promise<DialingDeviceCreateResponse> => {
    const requestData = {
        request_data: {
            tenant_id: credentials.tenant_id,
            device_id: credentials.device_id,
            device_name: credentials.device_name,
            channel_count: credentials.channel_count,
        }
    };
    
    try {
        const { data } = await axiosInstance.put<DialingDeviceCreateResponse>(
            '/dialing-device',
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