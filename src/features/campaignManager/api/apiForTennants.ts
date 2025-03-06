// src\features\campaignManager\api\apiForTennants.ts
import { TenantApiError, TenantListResponse, TenantRequestData } from "@/features/campaignManager/types/typeForTenant";
import { axiosInstance } from "@/lib/axios";

export const apiForGetTenantList = async (): Promise<TenantListResponse> => {
  const tenantRequestData: TenantRequestData = {
    filter: {      
      tenant_id: {
        start: 0,
        end: 9999999,
      },
    },
    sort: {
      tenant_id: 0,
    },
    page: {
      index: 1,
      items: 9999999,
    },
  };

  try {
    const { data } = await axiosInstance.post<TenantListResponse>(
      '/collections/tenant', 
      tenantRequestData
    );

    // 응답 데이터가 예상한 형식과 일치하는지 검증
    if (data.result_code === 0 && data.result_msg === "Success") {
      console.log("api for tenant data check : ", data);
      return data;
    } else {
      throw new Error(`API Error: ${data.result_msg}`);
    }
  } catch (error) {
    const typedError = error as TenantApiError;

    throw new Error(
      typedError.response?.data?.result_msg || '테넌트 데이터를 가져오는데 실패했습니다.'
    );
  }
};