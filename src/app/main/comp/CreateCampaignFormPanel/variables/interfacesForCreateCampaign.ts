// C:\nproject\fe_pdsw\src\app\main\comp\CreateCampaignFormPanel\variables\variables.ts

import { MainDataResponse } from "@/features/auth/types/mainIndex";
import { CampaignScheDuleListDataResponse } from "@/features/campaignManager/types/campaignManagerIndex";

export interface OperationTimeParam {
  changeYn: boolean;
  campaignInfoChangeYn: boolean;
  campaignScheduleChangeYn: boolean;
  onSave: boolean;
  onClosed: boolean;
  campaign_id: number;
  start_date: string;
  end_date: string;
  start_time: string[];
  end_time: string[];
  start_flag: string;
}

export interface OutgoingOrderTabParam {
  changeYn: boolean;
  campaignInfoChangeYn: boolean;
  onSave: boolean;
  onClosed: boolean;
  dial_phone_id: number;
  phone_order: string;
  phone_dial_try: number[];
}

export interface OutgoingStrategyTabParam {
  changeYn: boolean;
  campaignInfoChangeYn: boolean;
  onSave: boolean;
  onClosed: boolean;
  onInit: boolean;
  redial_strategy: string[];
}

export interface OutgoingMethodTabParam {
  changeYn: boolean;
  campaignInfoChangeYn: boolean;
  onSave: boolean;
  onClosed: boolean;
  trunk_access_code: string;
  dial_try_interval: number;
  alarm_answer_count: number;
  overdial_abandon_time: number;
  detect_mode: number;
  auto_dial_interval: number;
  power_divert_queue: number;
  next_campaign: number;
  DDD_code: string;
  callback_kind: number;
  max_ring: number;
  token_id: number;
  use_counsel_result: number;
  dial_mode_option: number;
  user_option: string;
}

export interface AdditionalInfoTabParam {
  changeYn: boolean;
  campaignInfoChangeYn: boolean;
  onSave: boolean;
  onClosed: boolean;
}
  
export interface TabItem {
  id: number;
  uniqueKey: string;
  title: string;
  icon: string;
  href: string;
  content: React.ReactNode;
  campaignId?: string;
}

export interface OperationTimeParam {
  changeYn: boolean;
  campaignInfoChangeYn: boolean;
  campaignScheduleChangeYn: boolean;
  onSave: boolean;
  onClosed: boolean;
  campaign_id: number;
  start_date: string;
  end_date: string;
  start_time: string[];
  end_time: string[];
  start_flag: string;
}

export interface OutgoingOrderTabParam {
  changeYn: boolean;
  campaignInfoChangeYn: boolean;
  onSave: boolean;
  onClosed: boolean;
  dial_phone_id: number;
  phone_order: string;
  phone_dial_try: number[];
}

export interface OutgoingStrategyTabParam {
  changeYn: boolean;
  campaignInfoChangeYn: boolean;
  onSave: boolean;
  onClosed: boolean;
  onInit: boolean;
  redial_strategy: string[];
}

export interface OutgoingMethodTabParam {
  changeYn: boolean;
  campaignInfoChangeYn: boolean;
  onSave: boolean;
  onClosed: boolean;
  trunk_access_code: string;
  dial_try_interval: number;
  alarm_answer_count: number;
  overdial_abandon_time: number;
  detect_mode: number;
  auto_dial_interval: number;
  power_divert_queue: number;
  next_campaign: number;
  DDD_code: string;
  callback_kind: number;
  max_ring: number;
  token_id: number;
  use_counsel_result: number;
  dial_mode_option: number;
  user_option: string;
}

export interface AdditionalInfoTabParam {
  changeYn: boolean;
  campaignInfoChangeYn: boolean;
  onSave: boolean;
  onClosed: boolean;
}

export const CampaignInfo: MainDataResponse = {
  campaign_id: 0,
  campaign_name: '',
  campaign_desc: '',
  site_code: 0,
  service_code: 0,
  start_flag: 0,
  end_flag: 0,
  dial_mode: 1,
  callback_kind: 0,
  delete_flag: 0,
  list_count: 0,
  list_redial_query: '',
  next_campaign: 0,
  token_id: 0,
  phone_order: '',
  phone_dial_try: [0, 0, 0, 0, 0],
  dial_try_interval: 20,
  trunk_access_code: '',
  DDD_code: '',
  power_divert_queue: 0,
  max_ring: 0,
  detect_mode: 0,
  auto_dial_interval: 30,
  creation_user: '',
  creation_time: '',
  creation_ip: '',
  update_user: '',
  update_time: '',
  update_ip: '',
  dial_phone_id: 0,
  tenant_id: -1,
  alarm_answer_count: 0,
  dial_speed: 0,
  parent_campaign: 0,
  overdial_abandon_time: 2,
  list_alarm_count: 100,
  supervisor_phone: '',
  reuse_count: 0,
  use_counsel_result: 0,
  use_list_alarm: 0,
  redial_strategy: [
    "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
    "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
    "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
    "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
    "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0"
  ],
  dial_mode_option: 0,
  user_option: '',
  campaign_status: 0
}

export const today = new Date();
export const CampaignScheduleInfo: CampaignScheDuleListDataResponse = {
  campaign_id: 0,
  tenant_id: 0,
  start_date: today.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + ('0' + today.getDate()).slice(-2),
  end_date: today.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + ('0' + today.getDate()).slice(-2),
  start_time: [],
  end_time: []
}

export interface CallPacingTabParam {
  changeYn: boolean;
  campaignDialSpeedChangeYn: boolean;
  onSave: boolean;
  onClosed: boolean;
  dial_mode: number;
  progressive_dial_speed: number; //PDS 발신 속도(1~100)
  predictive_dial_speed: number;  //PDS 발신 속도(1~100)
}

export interface CallbackTabParam {
  changeYn: boolean;
  campaignInfoChangeYn: boolean;
  onSave: boolean;
  onClosed: boolean;
  callback_kind: number;
  service_code: number;
}

export interface NotificationTabParam {
  changeYn: boolean;
  campaignInfoChangeYn: boolean;
  onSave: boolean;
  onClosed: boolean;
  use_list_alarm: number;
  list_alarm_count: number;
  supervisor_phone: string;
}

export interface IPropsForCreateCampaignForm {
  tenantId?: string;
}