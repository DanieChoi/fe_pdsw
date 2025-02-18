// src/features/rebroadcastSettingsPanel/types/rebroadcastSettingsPanelIndex.ts

export const apiUrl: string = '/counselor';

// 재발신 API 에러 타입
export interface rebroadcastSettingsPanelApiError {
  result_code: string;
  result_msg: number;
}

// 재발신 추가 데이터 타입
export interface CampaignAutoRedialInsertDataRequest {
  campaign_id: number;
  sequence_number: number;
  start_date: string;
  redial_condition: string;
  run_flag: number;
}

// 재발신 추가 응답 데이터 타입
export interface CampaignAutoRedialInsertResponseDataType {
  campaign_id: number;
  sequence_number: number;
  start_date: string;
  redial_condition: string;
  run_flag: number;
}

// 재발신 추가 응답
export interface CampaignAutoRedialInsertResponse {
  result_code: number;
  result_msg: string;
  result_data: CampaignAutoRedialInsertResponseDataType;
}



