import { axiosInstance } from "@/lib/axios";
import { ChannelEditRequest, ChannelEditResponse } from "../types/SystemPreferences"

export const fetchChannelEdit = async (credentials: ChannelEditRequest): Promise<ChannelEditResponse> => {
    const channelEditRequestData = {
        request_data: {
            device_id: credentials.device_id,
            assign_kind: credentials.assign_kind,
            channel_count: credentials.channel_count,
            channel_assign: credentials.channel_assign,
        }
    };

    try {
        const { data } = await axiosInstance.put<ChannelEditResponse>(
            '/channel-assign',
            channelEditRequestData
        );
        return data;
    } catch (error: any) {
        if (error.response?.status === 401) {
          throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
        }
        throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
      }
    };