import { axiosInstance } from "@/lib/axios";
import { DialingDeviceListCredentials, DialingDeviceListResponse } from "../types/mainIndex";

export const fetchDialingDeviceList = async (credentials: DialingDeviceListCredentials): Promise<DialingDeviceListResponse> => {
    const dialingDeviceListRequestData = {
        filter: {
            device_id: {
                "start": 1,
                "end": 100,
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


