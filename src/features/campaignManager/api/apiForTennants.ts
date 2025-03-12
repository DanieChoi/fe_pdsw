// src\features\campaignManager\api\apiForTennants.ts
import { TenantApiError, TenantListResponse, TenantRequestData } from "@/features/campaignManager/types/typeForTenant";
import { axiosInstance } from "@/lib/axios";

// todo2 전달 받은 tenant_id 가 있을 경우 start end 에 설정 없을 경우 기존 설정 그대로
export const apiForGetTenantList = async (): Promise<TenantListResponse> => {
  const tenantRequestData: TenantRequestData = {
    filter: {      
      tenant_id: {
        start: 0,
        end: 9999,
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

// export const apiForGetTenantList = async (): Promise<TenantListResponse> => {
//   // 실제 API 호출을 우회하고 가짜 데이터를 반환
//   const mockResponse: TenantListResponse = {
//     result_code: 0,
//     result_msg: "Success",
//     result_count: 3,
//     result_data: [
//       {
//         tenant_id: 1,
//         tenant_name: "테넌트 1",
//         // 필요한 다른 필드들 추가
//       },
//       {
//         tenant_id: 2,
//         tenant_name: "테넌트 2",
//         // 필요한 다른 필드들 추가
//       },
//       {
//         tenant_id: 3,
//         tenant_name: "테넌트 3",
//         // 필요한 다른 필드들 추가
//       }
//     ]
//   };

//   console.log("Mocked tenant data:", mockResponse);
  
//   // 실제 API 호출 대신 가짜 데이터 반환
//   return mockResponse;

//   // 원래 코드는 주석 처리
//   /*
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
//   */
// };