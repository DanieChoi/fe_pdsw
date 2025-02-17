// API 에러 타입
export interface ApiError {
    message: string;
    status: number;
}

// 테넌트ID credentials 타입
export interface TenantIdCredentials {
    tenant_id_array: number[];
  }

// 응답 타입
export interface SuccesResponse {
  result_code: number;
  result_msg: string;
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

// 채널 리스트 데이터 타입
export interface ChannelListDataResponse {
  device_id: number;
  assign_kind: number;
  channel_count: number;
  channel_assign: number[];
}

// 채널 리스트 타입
export interface ChannelListResponse {
  result_code: number;
  result_msg: string;
  result_count: number;
  total_count: number;
  result_data: ChannelListDataResponse[];
}

// 채널 수정 요청 타입
export interface ChannelEditRequest {
  device_id: number;
  assign_kind: number;
  channel_count: number;
  channel_assign: number[];
}

export interface DialingDeviceCreateRequest {
  channel_count: number;
  device_id: number;
  device_name: string;
  tenant_id: number;
}

// 예약콜 제한설정 리스트 데이터 타입
export interface DialingDeviceListDataResponse {
  campaign_id: number;
  tenant_id: number;
  call_kind: number;
  call_timeout: number;
  max_call: number;
  max_criteria: number;
}

// 예약콜 제한설정 리스트 데이터 타입
export interface CallLimitSettingListResponse {
  result_code: number;
  result_msg: string;
  result_count: number;
  total_count: number;
  result_data: DialingDeviceListDataResponse[];
}

// 예약콜 제한설정 추가 요청 타입
export interface CallLimitSettingCreateRequest {
  campaign_id: number;
  tenant_id: number;
  call_kind: number;
  call_timeout: number;
  max_call: number;
  max_criteria: number;
}