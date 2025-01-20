// src/features/auth/types/mainIndex.ts
// 메인 요청 시 필요한 credentials 타입
export interface MainCredentials {
  session_key: string;
  tenant_id: number;
}

// 스킬마스터정보조회 요청 시 필요한 credentials 타입
export interface SkillListCredentials {
  tenant_id_array: number[];
}

// 백엔드로 전송되는 실제 메인 요청 데이터 타입
export interface MainRequest {
  session_key: string;
  tenant_id: number;
}

// 캠페인스킬 수정 요청 데이터 타입
export interface CampaignSkillUpdateRequest {
  campaign_id: number;
  skill_id: number[];
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

// 테넌트 조회 응답 데이터 리스트 타입
export interface TenantListDataResponse {
  tenant_id: number;
  tenant_name: string;
}

// 테넌트 조회 데이터 타입
export interface TenantListResponse {
  result_code: number;
  result_msg: string;
  result_count: number;
  total_count: number;
  result_data: TenantListDataResponse[];
}

// 스킬마스터정보조회 데이터 타입
export interface SkillListDataResponse {
  tenant_id: number;
  skill_id: number;
  skill_name: string;
  skill_description: string;
}

// 스킬마스터정보조회 데이터 타입
export interface SkillListResponse {
  result_code: number;
  result_msg: string;
  result_count: number;
  total_count: number;
  result_data: SkillListDataResponse[];
}

// 캠페인발신번호 데이터 타입
export interface CallingNumberListDataResponse {
  campaign_id: number;
  calling_number: string;
}

// 캠페인발신번호 데이터 타입
export interface CallingNumberListResponse {
  result_code: number;
  result_msg: string;
  result_count: number;
  total_count: number;
  result_data: CallingNumberListDataResponse[];
}

// 전화번호설명 템플릿 조회 데이터 타입
export interface PhoneDescriptionListDataResponse {
  description_id: number;
  description: [string];
}

// 전화번호설명 템플릿 조회 데이터 타입
export interface PhoneDescriptionListResponse {
  result_code: number;
  result_msg: string;
  result_count: number;
  total_count: number;
  result_data: PhoneDescriptionListDataResponse[];
}

// 캠페인스케줄 데이터 타입
export interface CampaignScheDuleListDataResponse {
  campaign_id: number;
  tenant_id: number;
  start_date: string;
  end_date: string;
  start_time: [string];
  end_time: [string];
}

// 캠페인스케줄 데이터 타입
export interface CampaignScheDuleListResponse {
  result_code: number;
  result_msg: string;
  result_count: number;
  total_count: number;
  result_data: CampaignScheDuleListDataResponse[];
}

// 캠페인스킬 데이터 타입
export interface CampaignSkillDataResponse {
  campaign_id: number;
  tenant_id: number;
  skill_id: [number];
}

// 캠페인스킬 데이터 타입
export interface CampaignSkillListResponse {
  result_code: number;
  result_msg: string;
  result_count: number;
  total_count: number;
  result_data: CampaignSkillDataResponse[];
}

// 수정 응답 타입
export interface UpdateResponse {
  result_code: number;
  result_msg: string;
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

// 캠페인정보 수정 요청 데이터 타입
export interface CampaignInfoUpdateRequest {
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
  phone_dial_try1: number;
  phone_dial_try2: number;
  phone_dial_try3: number;
  phone_dial_try4: number;
  phone_dial_try5: number;
  dial_try_interval: number;  
  trunk_access_code: string;
  DDD_code: string;
  power_divert_queue: number;
  max_ring: number;
  detect_mode: number;
  auto_dial_interval: number;
  creation_user: string;
  creation_time: string;
  creation_ip: string;
  update_user: string;
  update_time: string;
  update_ip: string;
  customer_char_id: number;
  dial_phone_id: number;
  counsel_script_id: number;
  announcement_id: number;
  tenant_id: number;
  alarm_answer_count: number;
  dial_speed: number;
  parent_campaign: number;
  campaign_level: number;
  overdial_abandon_time: number;
  list_alarm_count: number;
  supervisor_phone: string;
  reuse_count: number;
  outbound_sequence: string;
  use_counsel_result: number;
  use_list_alarm: number;
  redial_strategy1: string;
  redial_strategy2: string;
  redial_strategy3: string;
  redial_strategy4: string;
  redial_strategy5: string;  
  dial_mode_option: number;
  user_option: string;  
}
