// API 에러 타입
export interface ApiError {
    message: string;
    status: number;
}

// 장비목록 요청 시 필요한 credentials 타입
export interface DialingDeviceListCredentials {
    tenant_id_array: number[];
  }

// 다이얼링 장비 데이터 타입
export interface DialingDeviceListDataResponse {
    tenant_id: number;
    device_id: number;
    device_name: string;
    channel_count: number;
  }
  
// 다이얼링 장비 데이터 타입
export interface DialingDeviceListResponse {
result_code: number;
result_msg: string;
result_count: number;
total_count: number;
result_data: DialingDeviceListDataResponse[];
}