// // src\features\campaignManager\api\apiForTennants.ts
// import { TenantApiError, TenantListResponse, TenantRequestData } from "@/features/campaignManager/types/typeForTenant";
// import { axiosInstance } from "@/lib/axios";

// // todo2 전달 받은 tenant_id 가 있을 경우 start end 에 설정 없을 경우 기존 설정 그대로
// export const apiForGetTenantList = async (): Promise<TenantListResponse> => {
//   const tenantRequestData: TenantRequestData = {
//     filter: {      
//       tenant_id: {
//         start: 0,
//         end: 9999,
//       },
//     },
//     sort: {
//       tenant_id: 0,
//     },
//     page: {
//       index: 1,
//       items: 9999999,
//     },
//   };

//   try {
//     const { data } = await axiosInstance.post<TenantListResponse>(
//       '/collections/tenant', 
//       tenantRequestData
//     );

//     // 응답 데이터가 예상한 형식과 일치하는지 검증
//     if (data.result_code === 0 && data.result_msg === "Success") {
//       console.log("api for tenant data check : ", data);
//       return data;
//     } else {
//       throw new Error(`API Error: ${data.result_msg}`);
//     }
//   } catch (error) {
//     const typedError = error as TenantApiError;

//     throw new Error(
//       typedError.response?.data?.result_msg || '테넌트 데이터를 가져오는데 실패했습니다.'
//     );
//   }
// };

// // export const apiForGetTenantList = async (): Promise<TenantListResponse> => {

// src/features/campaignManager/api/apiForTennants.ts
import { customAlertService } from "@/components/shared/layout/utils/CustomAlertService";
import { TenantApiError, TenantListResponse, TenantRequestData } from "@/features/campaignManager/types/typeForTenant";
import { axiosInstance } from "@/lib/axios";
import { toast } from "react-toastify";


export const apiForGetTenantList = async (tenant_id?: number): Promise<TenantListResponse> => {
  const tenantRequestData: TenantRequestData = {
    ...(tenant_id !== -1 ? {
      filter: 
      {
        tenant_id: tenant_id === 0
          ? { start: 0, end: 999999 }
          : { start: tenant_id!, end: tenant_id! },
      },
    } : {}),
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

    if (data.result_code === 0 && data.result_msg === "Success") {
      return data;
    } else {
      throw new Error(`API Error: ${data.result_msg}`);
    }
  } catch (error: any) {
    if (error.response?.data?.result_code === 5) {
      customAlertService.error('로그인 세션이 만료되었습니다. 다시 로그인 해주세요.', '세션 만료', () => {
        window.location.href = '/login';
      });
    }

    throw error;
  }
};


