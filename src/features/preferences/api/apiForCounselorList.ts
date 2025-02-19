import { axiosRedisInstance } from "@/lib/axios";
import { apiUrl, CounselorListCredentials, GetCounselorListResponse } from "../types/SystemPreferences";

export const fetchCounselorList = async (credentials: CounselorListCredentials): Promise<GetCounselorListResponse> => {
    try {
      const { data } = await axiosRedisInstance.get<GetCounselorListResponse>(
        '/counselor/list', {
          params: {
            tenantId: credentials.tenantId,
            roleId: credentials.roleId
          }
        }
      );
      return data;
    } catch (error: any) {
      if (error.response?.status === 401) {
        throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
      }
      throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
    }
  };