// src/features/rebroadcastSettingsPanel/types/rebroadcastSettingsPanelIndex.ts

export const apiUrl: string = '/counselor';

// 발신 리스트 조회 요청 시 필요한 credentials 타입
export interface CampaignCredentials {
  session_key: string;
  tenant_id: number;
}

// 캠페인 재발신 API 에러 타입
export interface rebroadcastSettingsPanelApiError {
  message: string;
  status: number;
}

// 발신 리스트 조회 응답 데이터 타입
export interface CampaignAutoRedialResponseDataType {
  campaign_id: number;
  sequence_number: number;
  start_date: string;
  redial_condition: string;
  run_flag: number;
}

// 발신 리스트 조회 응답
export interface CampaignAutoRedialResponse {
  result_code: number;
  result_msg: string;
  result_count: number;
  total_count: number;
  result_data: CampaignAutoRedialResponseDataType[];
}


// 발신 리스트 추가 요청 데이터 타입
export interface CallingListInsertDataType {
  customer_key: string;
  sequence_number: number;
  customer_name: string;
  phone_number1: string;
  phone_number2: string;
  phone_number3: string;
  phone_number4: string;
  phone_number5: string;
  reserved_time: string;
  token_data: string;
}
// 발신 리스트 추가 요청 
export interface CallingListInsertRequest {
  campaign_id: number;
  list_flag: string;
  calling_list: CallingListInsertDataType[];
}

// 발신 리스트 추가 응답 데이터 타입
export interface CallingListInsertResponseDataType {
  customer_key: string;
  sequence_number: number;
  customer_name: string;
  phone_number1: string;
  reserved_time: string;
  token_data: string;
}

// 발신 리스트 추가 응답
export interface CallingListInsertResponse {
  result_code: number;
  result_msg: string;
  result_count: number;
  request_count: number;
  result_data: CallingListInsertResponseDataType[];
}

// 삭제 응답 타입
export interface DeleteResponse {
  result_code: number;
  result_msg: string;
}


