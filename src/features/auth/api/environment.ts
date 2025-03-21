import { axiosRedisInstance } from "@/lib/axios";
import { EnvironmentListCredentials, EnvironmentListResponse } from "../types/environmentIndex";

export const fetchEnvironmentList = async (credentials: EnvironmentListCredentials): Promise<EnvironmentListResponse> => {
    const EnvironmentRequestData = {
        centerId: credentials.centerId,
        tenantId: credentials.tenantId,
        employeeId: credentials.employeeId
    };

    try {
        const { data } = await axiosRedisInstance.post<EnvironmentListResponse>(
            '/auth/environment',
            EnvironmentRequestData
        );
        return data;
    } catch (error: any) {
        if (error.response?.status === 401) {
          throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
        }
        throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
    }
};