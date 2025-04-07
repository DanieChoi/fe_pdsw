// src/features/campaignManager/hooks/fetchCampaignManagerInsert.ts

import { axiosInstance } from '@/lib/axios';
import { CampaignInfoUpdateRequest, CampaignInsertResponse } from '../types/campaignManagerIndex';
import { MainDataResponse } from '@/features/auth/types/mainIndex';

// MainDataResponse -> CampaignInfoUpdateRequest 변환 함수
const mapMainDataToCampaignRequest = (data: MainDataResponse | CampaignInfoUpdateRequest) => ({
  campaign_name: data.campaign_name,
  campaign_desc: data.campaign_desc,
  site_code: data.site_code,
  service_code: data.service_code,
  start_flag: data.start_flag,
  end_flag: data.end_flag,
  dial_mode: data.dial_mode,
  callback_kind: data.callback_kind,
  delete_flag: data.delete_flag,
  list_count: data.list_count,
  list_redial_query: data.list_redial_query,
  next_campaign: data.next_campaign,
  token_id: data.token_id,
  phone_order: data.phone_order,
  phone_dial_try1: 'phone_dial_try' in data ? data.phone_dial_try[0] : data.phone_dial_try1,
  phone_dial_try2: 'phone_dial_try' in data ? data.phone_dial_try[1] : data.phone_dial_try2,
  phone_dial_try3: 'phone_dial_try' in data ? data.phone_dial_try[2] : data.phone_dial_try3,
  phone_dial_try4: 'phone_dial_try' in data ? data.phone_dial_try[3] : data.phone_dial_try4,
  phone_dial_try5: 'phone_dial_try' in data ? data.phone_dial_try[4] : data.phone_dial_try5,
  dial_try_interval: data.dial_try_interval,
  trunk_access_code: data.trunk_access_code,
  DDD_code: data.DDD_code,
  power_divert_queue: data.power_divert_queue.toString(),
  max_ring: data.max_ring,
  detect_mode: data.detect_mode,
  auto_dial_interval: data.auto_dial_interval,
  creation_user: data.creation_user,
  creation_time: data.creation_time,
  creation_ip: data.creation_ip,
  update_user: data.update_user,
  update_time: data.update_time,
  update_ip: data.update_ip,
  dial_phone_id: data.dial_phone_id,
  tenant_id: data.tenant_id,
  alarm_answer_count: data.alarm_answer_count,
  dial_speed: data.dial_speed,
  parent_campaign: data.parent_campaign,
  overdial_abandon_time: data.overdial_abandon_time,
  list_alarm_count: data.list_alarm_count,
  supervisor_phone: data.supervisor_phone,
  reuse_count: data.reuse_count,
  use_counsel_result: data.use_counsel_result,
  use_list_alarm: data.use_list_alarm,
  redial_strategy1: 'redial_strategy' in data ? data.redial_strategy[0] : data.redial_strategy1,
  redial_strategy2: 'redial_strategy' in data ? data.redial_strategy[1] : data.redial_strategy2,
  redial_strategy3: 'redial_strategy' in data ? data.redial_strategy[2] : data.redial_strategy3,
  redial_strategy4: 'redial_strategy' in data ? data.redial_strategy[3] : data.redial_strategy4,
  redial_strategy5: 'redial_strategy' in data ? data.redial_strategy[4] : data.redial_strategy5,
  dial_mode_option: data.dial_mode_option,
  user_option: data.user_option,
  customer_char_id: data.customer_char_id ?? 1,
  counsel_script_id: data.counsel_script_id ?? 1,
  announcement_id: data.announcement_id ?? 1,
  campaign_level: data.campaign_level ?? 0,
  outbound_sequence: data.outbound_sequence ?? ''
});

// 캠페인 관리 등록 요청
export const fetchCampaignManagerInsert = async (data: MainDataResponse  ): Promise<CampaignInsertResponse> => {
  const requestPayload = {
    request_data: mapMainDataToCampaignRequest(data)
  };

  try {
    const response = await axiosInstance.post<CampaignInsertResponse>(
      `campaigns/${data.campaign_id}`,
      requestPayload
    );
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
    }
    throw new Error(error.response?.data?.result_code + '||' + error.response?.data?.result_msg || '데이터 가져오기 실패');
  }
};