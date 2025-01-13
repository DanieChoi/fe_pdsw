// src/features/auth/types/mainIndex.ts
// 메인 요청 시 필요한 credentials 타입
export interface MainCredentials {
  session_key: string;
  tenant_id: number;
}

// 백엔드로 전송되는 실제 메인 요청 데이터 타입
export interface MainRequest {
  session_key: string;
  tenant_id: number;
}

// 메인 응답 데이터 리스트 타입
export interface AuthApiError {
  message: string;
  status: number;
}

// 메인 응답 데이터 리스트 타입
export interface MainDataResponse {
  campaign_id: number;
  campaign_name: string;
  campaign_desc: string;
  site_code: number;
  service_code: number;
  start_flag: number;
  end_flag: number;
  dial_mode: number;
  callback_kind: number;
  delete_flag: number;
  list_count: number;
  list_redial_query: string;
  next_campaign: number;
  token_id: number;
  phone_order: string;
  phone_dial_try: [];
  dial_try_interval: number;
  trunk_access_code: string;
  DDD_code: string;
  power_divert_queue: number;
  max_ring: number;
  detect_mode: number;
  auto_dial_interval: number;
  creation_user: number;
  creation_time: string;
  creation_ip: string;
  update_user: number;
  update_time: string;
  update_ip: string;
  dial_phone_id: number;
  tenant_id: number;
  alarm_answer_count: number;
  dial_speed: number;
  parent_campaign: number;
  overdial_abandon_time: number;
  list_alarm_count: number;
  supervisor_phone: string;
  reuse_count: number;
  use_counsel_result: number;
  use_list_alarm: number;
  redial_strategy: [];
  dial_mode_option: number;
  user_option: string;
}

// 메인 응답 데이터 타입
export interface MainResponse {
  result_code: number;
  result_msg: string;
  result_count: number;
  total_count: number;
  result_data: MainDataResponse[];
}

// API 에러 타입
export interface AuthApiError {
  message: string;
  status: number;
}

// 로그인First 응답 데이터 타입
export interface LoginResponseFirst {
  id: string;
  passwd: string;
}
