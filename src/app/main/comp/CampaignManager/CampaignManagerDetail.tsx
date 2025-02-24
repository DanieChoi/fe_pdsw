"use client";
// components/CampaignManager/CampaignManagerDetail.tsx
import { useMainStore, useCampainManagerStore, useTabStore,useAuthStore } from '@/store';
import Image from 'next/image'
import TitleWrap from "@/components/shared/TitleWrap";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { CommonButton } from "@/components/shared/CommonButton";
import CampaignTab from './CampaignTab';
import { MainDataResponse } from '@/features/auth/types/mainIndex';
import {
  CampaignSkillUpdateRequest
  , CampaignInfoUpdateRequest
  , CampaignScheDuleListDataResponse
  , CallingNumberListDataResponse
  , CampaignDialSpeedUpdateRequest
  , CampaignInfoDeleteRequest
  , MaxcallExtDeleteRequest
} from '@/features/campaignManager/types/campaignManagerIndex';
import { useEffect, useState } from 'react';
import SkillListPopup from '@/components/shared/layout/SkillListPopup';
import { useApiForCampaignSkillUpdate } from '@/features/campaignManager/hooks/useApiForCampaignSkillUpdate';
import { useApiForCampaignManagerUpdate } from '@/features/campaignManager/hooks/useApiForCampaignManagerUpdate';
import { useApiForCampaignManagerDelete } from '@/features/campaignManager/hooks/useApiForCampaignManagerDelete';
import { useApiForCampaignScheduleUpdate } from '@/features/campaignManager/hooks/useApiForCampaignScheduleUpdate';
import { useApiForCampaignScheduleDelete } from '@/features/campaignManager/hooks/useApiForCampaignScheduleDelete';
import { useApiForCallingNumberUpdate } from '@/features/campaignManager/hooks/useApiForCallingNumberUpdate';
import { useApiForCampaignStatusUpdate } from '@/features/campaignManager/hooks/useApiForCampaignStatusUpdate';
import { useApiForCallingNumberInsert } from '@/features/campaignManager/hooks/useApiForCallingNumberInsert';
import { useApiForCallingNumberDelete } from '@/features/campaignManager/hooks/useApiForCallingNumberDelete';
import { useApiForAutoRedialDelete } from '@/features/campaignManager/hooks/useApiForAutoRedialDelete';
import { useApiForReservedCallDelete } from '@/features/campaignManager/hooks/useApiForReservedCallDelete';
import { useApiForMaxcallExtDelete } from '@/features/campaignManager/hooks/useApiForMaxcallExtDelete';
import { useApiForDialSpeedUpdate } from '@/features/campaignManager/hooks/useApiForDialSpeedUpdate';
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useApiForCampaignSkill } from '@/features/campaignManager/hooks/useApiForCampaignSkill';
import { useApiForCallingNumber } from '@/features/campaignManager/hooks/useApiForCallingNumber';
import { useApiForAutoRedial } from '@/features/campaignManager/hooks/useApiForAutoRedial';
import { useApiForSchedules } from '@/features/campaignManager/hooks/useApiForSchedules';
import CustomAlert, { CustomAlertRequest } from '@/components/shared/layout/CustomAlert';
import CallingNumberPopup from '@/components/shared/layout/CallingNumberPopup';
import { useApiForCampaignAgent } from '@/features/campaignManager/hooks/useApiForCampaignAgent';
import { useApiForCallingListDelete } from '@/features/listManager/hooks/useApiForCallingListDelete';

export interface TabItem {
  id: number;
  uniqueKey: string;
  title: string;
  icon: string;
  href: string;
  content: React.ReactNode;
  campaignId?: string;
}

const dialModeList = [
  { dial_id: 1, dial_name: 'Power' },
  { dial_id: 2, dial_name: 'Progressive' },
  { dial_id: 3, dial_name: 'Predictive' },
  { dial_id: 4, dial_name: 'System Preview' },
];

const errorMessage: CustomAlertRequest = {
  isOpen: false,
  message: '',
  title: '캠페인',
  type: '1',
  onClose: () => { },
  onCancle: () => { },
};

const CampaignSkillInfo: CampaignSkillUpdateRequest = {
  campaign_id: 0,
  skill_id: [],
}

const CallingNumberInfo: CallingNumberListDataResponse = {
  campaign_id: 0,
  calling_number: ''
}

const CampaignDialSpeedInfo: CampaignDialSpeedUpdateRequest = {
  campaign_id: 0,
  tenant_id: 0,
  dial_speed: 0
}

const CampaignManagerInfo: CampaignInfoUpdateRequest = {
  campaign_id: 0,
  campaign_name: '',
  campaign_desc: '',
  site_code: 0,
  service_code: 0,
  start_flag: 0,
  end_flag: 0,
  dial_mode: 0,
  callback_kind: 0,
  delete_flag: 0,
  list_count: 0,
  list_redial_query: '',
  next_campaign: 0,
  token_id: 0,
  phone_order: '',
  phone_dial_try1: 0,
  phone_dial_try2: 0,
  phone_dial_try3: 0,
  phone_dial_try4: 0,
  phone_dial_try5: 0,
  dial_try_interval: 0,
  trunk_access_code: '',
  DDD_code: '',
  power_divert_queue: '',
  max_ring: 0,
  detect_mode: 0,
  auto_dial_interval: 0,
  creation_user: '',
  creation_time: '',
  creation_ip: '',
  update_user: '',
  update_time: '',
  update_ip: '',
  dial_phone_id: 0,
  tenant_id: 0,
  alarm_answer_count: 0,
  dial_speed: 0,
  parent_campaign: 0,
  overdial_abandon_time: 0,
  list_alarm_count: 0,
  supervisor_phone: '',
  reuse_count: 0,
  use_counsel_result: 0,
  use_list_alarm: 0,
  redial_strategy1: "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
  redial_strategy2: "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
  redial_strategy3: "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
  redial_strategy4: "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
  redial_strategy5: "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
  dial_mode_option: 0,
  user_option: '',
  customer_char_id: 1,
  counsel_script_id: 1,
  announcement_id: 1,
  campaign_level: 0,
  outbound_sequence: '',
}

export const CampaignInfo: MainDataResponse = {
  campaign_id: 0,
  campaign_name: '',
  campaign_desc: '',
  site_code: 0,
  service_code: 0,
  start_flag: 0,
  end_flag: 0,
  dial_mode: 0,
  callback_kind: 0,
  delete_flag: 0,
  list_count: 0,
  list_redial_query: '',
  next_campaign: 0,
  token_id: 0,
  phone_order: '',
  phone_dial_try: [],
  dial_try_interval: 0,
  trunk_access_code: '',
  DDD_code: '',
  power_divert_queue: 0,
  max_ring: 0,
  detect_mode: 0,
  auto_dial_interval: 0,
  creation_user: '',
  creation_time: '',
  creation_ip: '',
  update_user: '',
  update_time: '',
  update_ip: '',
  dial_phone_id: 0,
  tenant_id: 0,
  alarm_answer_count: 0,
  dial_speed: 0,
  parent_campaign: 0,
  overdial_abandon_time: 0,
  list_alarm_count: 0,
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
  trunk_access_code: string;      //Trunk Access Code
  dial_try_interval: number;      //재시도 간격(초)
  alarm_answer_count: number;     //콜 목표량
  overdial_abandon_time: number;  //포기호 처리시간(초)
  detect_mode: number;            //기계음 처리 - 자동응답기 처리 1 : 컬러링 판별 후 사람만 연결, 2 : 컬러링 판별 후 사람/기계음 연결, 3 : 기계음/사람 무조건 연결
  auto_dial_interval: number;     //자동 다이얼 시
  power_divert_queue: number;     //연결 IVR NO 및 다이얼 모드
  next_campaign: number;          //연결 캠페인
  DDD_code: string;               //DDD Number - 지역 번호
  callback_kind: number;          //연결구분 - 콜백구분 0 : 일반 캠페인(Default), 1 : 무한 콜백, 2 : 일반 콜백
  max_ring: number;               //최대 링 횟수
  token_id: number;               //토큰 ID
  use_counsel_result: number;     //상담결과 등록 여부 - 0 : 미사용, 1 : 사용
  dial_mode_option: number;       //다이얼 모드 옵션 - 발신 모드별 옵션 설정(system preview 에서만 사용)
  user_option: string;            //제한 호수 비율
}

export interface AdditionalInfoTabParam {
  changeYn: boolean;
  campaignInfoChangeYn: boolean;
  onSave: boolean;
  onClosed: boolean;
}

const today = new Date();
const CampaignScheduleInfo: CampaignScheDuleListDataResponse = {
  campaign_id: 0,
  tenant_id: 0,
  start_date: today.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + ('0' + today.getDate()).slice(-2),
  end_date: today.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + ('0' + today.getDate()).slice(-2),
  start_time: [],
  end_time: []
}

const campaignInfoDelete: CampaignInfoDeleteRequest = {
  campaign_id: 0,
  tenant_id: 0,
  delete_dial_list: 1
};

const agientListDelte: MaxcallExtDeleteRequest = {
  campaign_id: 0,
  agent_id_list: []
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

const CampaignCallPacingTabInfo: CallPacingTabParam = {
  changeYn: false,
  campaignDialSpeedChangeYn: false,
  onSave: false,
  onClosed: false,
  dial_mode: 0,
  progressive_dial_speed: 0,
  predictive_dial_speed: 0,
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

export default function CampaignDetail() {
  const [tempCampaignManagerInfo, setTempCampaignManagerInfo] = useState<CampaignInfoUpdateRequest>(CampaignManagerInfo);
  const [tempCampaignInfo, setTempCampaignsInfo] = useState<MainDataResponse>(CampaignInfo);
  const [tempCampaignSkills, setTempCampaignSkills] = useState<CampaignSkillUpdateRequest>(CampaignSkillInfo);
  const [tempCallingNumberInfo, setTempCallingNumberInfo] = useState<CallingNumberListDataResponse>(CallingNumberInfo);
  const [tempCampaignSchedule, setTempCampaignSchedule] = useState<CampaignScheDuleListDataResponse>(CampaignScheduleInfo);
  const [tempCampaignDialSpeedInfo, setTempCampaignDialSpeedInfo] = useState<CampaignDialSpeedUpdateRequest>(CampaignDialSpeedInfo);
  const [tempCampaignDialSpeedInfoParam, setTempCampaignDialSpeedInfoParam] = useState<CallPacingTabParam>(CampaignCallPacingTabInfo);
  const [changeYn, setChangeYn] = useState<boolean>(true); // 변경여부
  const [campaignInfoChangeYn, setCampaignInfoChangeYn] = useState<boolean>(true); // 캠페인정보 변경여부
  const [campaignSkillChangeYn, setCampaignSkillChangeYn] = useState<boolean>(false); // 캠페인스킬 변경여부
  const [callingNumberChangeYn, setCallingNumberChangeYn] = useState<boolean>(false); // 캠페인 발신번호 변경여부
  const [campaignScheduleChangeYn, setCampaignScheduleChangeYn] = useState<boolean>(false); // 캠페인 스케줄 변경여부
  const [campaignDialSpeedChangeYn, setCampaignDialSpeedChangeYn] = useState<boolean>(false); // 캠페인 발신속도 변경여부
  const { tenants
    , setCampaigns
    , selectedCampaign
    , setSelectedCampaign
  } = useMainStore();
  const { tenant_id
    , role_id
  } = useAuthStore();
  const { removeTab, activeTabId, activeTabKey, addTab, openedTabs, setActiveTab
    , campaignIdForUpdateFromSideMenu, setCampaignIdForUpdateFromSideMenu } = useTabStore();
  const { callingNumbers, campaignSkills, schedules, setCampaignSkills, setSchedules, setCallingNumbers } = useCampainManagerStore();
  const [inputSkills, setInputSkills] = useState('');
  const [inputCallingNumber, setInputCallingNumber] = useState('');
  const [skillPopupState, setSkillPopupState] = useState({
    isOpen: false,
    param: [],
    tenantId: 0,
    type: '1',
  });
  const [alertState, setAlertState] = useState<CustomAlertRequest>(errorMessage);
  const [callingNumberPopupState, setCallingNumberPopupState] = useState({
    isOpen: false,
    param: [],
    tenantId: 0,
    type: '1',
  });

  //캠페인 정보 최초 세팅 
  useEffect(() => {
    if ( typeof selectedCampaign !== 'undefined' && selectedCampaign !== null) {
      // setChangeYn(false);
      // setCampaignInfoChangeYn(true);
      setTempCampaignsInfo({
        ...tempCampaignInfo,
        campaign_id: selectedCampaign.campaign_id,
        campaign_name: selectedCampaign.campaign_name,
        campaign_desc: selectedCampaign.campaign_desc,
        site_code: selectedCampaign.site_code,
        service_code: selectedCampaign.service_code,
        start_flag: selectedCampaign.start_flag,
        end_flag: selectedCampaign.end_flag,
        dial_mode: selectedCampaign.dial_mode,
        callback_kind: selectedCampaign.callback_kind,
        delete_flag: selectedCampaign.delete_flag,
        list_count: selectedCampaign.list_count,
        list_redial_query: selectedCampaign.list_redial_query,
        next_campaign: selectedCampaign.next_campaign,
        token_id: selectedCampaign.token_id,
        phone_order: selectedCampaign.phone_order,
        phone_dial_try: selectedCampaign.phone_dial_try,
        dial_try_interval: selectedCampaign.dial_try_interval,
        trunk_access_code: selectedCampaign.trunk_access_code,
        DDD_code: selectedCampaign.DDD_code,
        power_divert_queue: selectedCampaign.power_divert_queue,
        max_ring: selectedCampaign.max_ring,
        detect_mode: selectedCampaign.detect_mode,
        auto_dial_interval: selectedCampaign.auto_dial_interval,
        creation_user: selectedCampaign.creation_user,
        creation_time: selectedCampaign.creation_time,
        creation_ip: selectedCampaign.creation_ip,
        update_user: selectedCampaign.update_user,
        update_time: selectedCampaign.update_time,
        update_ip: selectedCampaign.update_ip,
        dial_phone_id: selectedCampaign.dial_phone_id,
        tenant_id: selectedCampaign.tenant_id,
        alarm_answer_count: selectedCampaign.alarm_answer_count,
        dial_speed: selectedCampaign.dial_speed,
        parent_campaign: selectedCampaign.parent_campaign,
        overdial_abandon_time: selectedCampaign.overdial_abandon_time,
        list_alarm_count: selectedCampaign.list_alarm_count,
        supervisor_phone: selectedCampaign.supervisor_phone,
        reuse_count: selectedCampaign.reuse_count,
        use_counsel_result: selectedCampaign.use_counsel_result,
        use_list_alarm: selectedCampaign.use_list_alarm,
        redial_strategy: selectedCampaign.redial_strategy,
        dial_mode_option: selectedCampaign.dial_mode_option,
        user_option: selectedCampaign.user_option
      });

      const tempSkill = campaignSkills.filter((skill) => skill.campaign_id === selectedCampaign.campaign_id)
        .map((data) => data.skill_id)
        .join(',');
      setInputSkills(tempSkill);
      setTempCampaignSkills({
        ...tempCampaignSkills
        , skill_id: tempSkill.split(',').map((data) => Number(data))
      });
      const tempCallNumber = callingNumbers.filter((callingNumber) => callingNumber.campaign_id === selectedCampaign.campaign_id)
        .map((data) => data.calling_number)
        .join(',');
      setInputCallingNumber(tempCallNumber);
      setTempCallingNumberInfo({
        ...tempCallingNumberInfo
        , calling_number: tempCallNumber
      });
      setTempCampaignDialSpeedInfo({
        ...tempCampaignDialSpeedInfo
        , campaign_id: selectedCampaign.campaign_id
        , tenant_id: selectedCampaign.tenant_id
        , dial_speed: selectedCampaign.dial_speed
      });
      setTempCampaignDialSpeedInfoParam({
        ...tempCampaignDialSpeedInfoParam
        , dial_mode: selectedCampaign.dial_mode
        , predictive_dial_speed: selectedCampaign.dial_mode === 2 ? 0 : selectedCampaign.dial_speed
        , progressive_dial_speed: selectedCampaign.dial_mode === 3 ? 0 : selectedCampaign.dial_speed
      })
      setTempCampaignManagerInfo({
        ...CampaignManagerInfo,
        campaign_id: selectedCampaign.campaign_id,
        campaign_name: selectedCampaign.campaign_name,
        campaign_desc: selectedCampaign.campaign_desc,
        site_code: selectedCampaign.site_code,
        service_code: selectedCampaign.service_code,
        start_flag: selectedCampaign.start_flag,
        end_flag: selectedCampaign.end_flag,
        dial_mode: selectedCampaign.dial_mode,
        callback_kind: selectedCampaign.callback_kind,
        delete_flag: selectedCampaign.delete_flag,
        list_count: selectedCampaign.list_count,
        list_redial_query: selectedCampaign.list_redial_query,
        next_campaign: selectedCampaign.next_campaign,
        token_id: selectedCampaign.token_id,
        phone_order: selectedCampaign.phone_order,
        phone_dial_try1: (selectedCampaign.phone_dial_try !== undefined) ? Number(selectedCampaign.phone_dial_try.slice(0, 1)[0]) : 0,
        phone_dial_try2: (selectedCampaign.phone_dial_try !== undefined) ? Number(selectedCampaign.phone_dial_try.slice(1, 2)[0]) : 0,
        phone_dial_try3: (selectedCampaign.phone_dial_try !== undefined) ? Number(selectedCampaign.phone_dial_try.slice(2, 3)[0]) : 0,
        phone_dial_try4: (selectedCampaign.phone_dial_try !== undefined) ? Number(selectedCampaign.phone_dial_try.slice(3, 4)[0]) : 0,
        phone_dial_try5: (selectedCampaign.phone_dial_try !== undefined) ? Number(selectedCampaign.phone_dial_try.slice(4, 5)[0]) : 0,
        dial_try_interval: selectedCampaign.dial_try_interval,
        trunk_access_code: selectedCampaign.trunk_access_code,
        DDD_code: selectedCampaign.DDD_code,
        power_divert_queue: selectedCampaign.power_divert_queue + '',
        max_ring: selectedCampaign.max_ring,
        detect_mode: selectedCampaign.detect_mode,
        auto_dial_interval: selectedCampaign.auto_dial_interval,
        creation_user: selectedCampaign.creation_user + '',
        creation_time: selectedCampaign.creation_time,
        creation_ip: selectedCampaign.creation_ip,
        update_user: selectedCampaign.update_user + '',
        update_time: selectedCampaign.update_time,
        update_ip: selectedCampaign.update_ip,
        dial_phone_id: selectedCampaign.dial_phone_id,
        tenant_id: selectedCampaign.tenant_id,
        alarm_answer_count: selectedCampaign.alarm_answer_count,
        dial_speed: selectedCampaign.dial_speed,
        parent_campaign: selectedCampaign.parent_campaign,
        overdial_abandon_time: selectedCampaign.overdial_abandon_time,
        list_alarm_count: selectedCampaign.list_alarm_count,
        supervisor_phone: selectedCampaign.supervisor_phone,
        reuse_count: selectedCampaign.reuse_count,
        use_counsel_result: selectedCampaign.use_counsel_result,
        use_list_alarm: selectedCampaign.use_list_alarm,
        redial_strategy1: (selectedCampaign.redial_strategy !== undefined) ? selectedCampaign.redial_strategy.slice(0, 1)[0] + '' : '',
        redial_strategy2: (selectedCampaign.redial_strategy !== undefined) ? selectedCampaign.redial_strategy.slice(1, 2)[0] + '' : '',
        redial_strategy3: (selectedCampaign.redial_strategy !== undefined) ? selectedCampaign.redial_strategy.slice(2, 3)[0] + '' : '',
        redial_strategy4: (selectedCampaign.redial_strategy !== undefined) ? selectedCampaign.redial_strategy.slice(3, 4)[0] + '' : '',
        redial_strategy5: (selectedCampaign.redial_strategy !== undefined) ? selectedCampaign.redial_strategy.slice(4, 5)[0] + '' : '',
        dial_mode_option: selectedCampaign.dial_mode_option,
        user_option: selectedCampaign.user_option,
        customer_char_id: 1,
        counsel_script_id: 1,
        announcement_id: 1,
        campaign_level: 0,
        outbound_sequence: ''
      });
      if (schedules.length > 0) {
        const tempCampaignSchedule = schedules.filter((schedule) => schedule.campaign_id === selectedCampaign?.campaign_id);
        if (tempCampaignSchedule.length > 0) {
          setTempCampaignSchedule({
            ...tempCampaignSchedule[0],
            campaign_id: selectedCampaign.campaign_id,
            tenant_id: selectedCampaign.tenant_id,
            start_date: schedules.filter((schedule) => schedule.campaign_id === selectedCampaign.campaign_id)[0].start_date,
            end_date: schedules.filter((schedule) => schedule.campaign_id === selectedCampaign.campaign_id)[0].end_date,
            start_time: schedules.filter((schedule) => schedule.campaign_id === selectedCampaign.campaign_id)[0].start_time,
            end_time: schedules.filter((schedule) => schedule.campaign_id === selectedCampaign.campaign_id)[0].end_time
          });
        }
      } else {
        setTempCampaignSchedule({
          ...tempCampaignSchedule,
          campaign_id: selectedCampaign.campaign_id,
          tenant_id: selectedCampaign.tenant_id
        });
      }
    }
  }, [selectedCampaign, campaignSkills, callingNumbers, schedules]);

  //input data change
  const handleInputData = (value: any, col: string) => {
    // setChangeYn(true);
    // setCampaignInfoChangeYn(true);
    if (col === 'campaign_id' && value !== '') {
      setTempCampaignsInfo({
        ...tempCampaignInfo,
        campaign_id: Number(value)
      });
      setTempCampaignManagerInfo({
        ...tempCampaignManagerInfo,
        campaign_id: Number(value)
      });
    }
    if (col === 'campaign_name') {
      setTempCampaignsInfo({
        ...tempCampaignInfo,
        campaign_name: value
      });
      setTempCampaignManagerInfo({
        ...tempCampaignManagerInfo,
        campaign_name: value
      });
    }
    if (col === 'campaign_desc') {
      setTempCampaignsInfo({
        ...tempCampaignInfo,
        campaign_desc: value
      });
      setTempCampaignManagerInfo({
        ...tempCampaignManagerInfo,
        campaign_desc: value
      });
    }
  }

  //select data change
  const handleSelectChange = (value: string, type: 'tenant' | 'dialMode') => {
    // setChangeYn(true);
    // setCampaignInfoChangeYn(true);
    if (type === 'tenant' && value !== '') {
      setTempCampaignsInfo({
        ...tempCampaignInfo,
        tenant_id: Number(value)
      });
      setTempCampaignManagerInfo({
        ...tempCampaignManagerInfo,
        tenant_id: Number(value)
      });
    }
    if (type === 'dialMode' && value !== '') {
      setTempCampaignsInfo({
        ...tempCampaignInfo,
        dial_mode: Number(value)
      });
      setTempCampaignManagerInfo({
        ...tempCampaignManagerInfo,
        dial_mode: Number(value)
      });
      setTempCampaignDialSpeedInfoParam({
        ...tempCampaignDialSpeedInfoParam,
        dial_mode: Number(value)
      });
    }
  }

  //스킬 선택 팝업
  const handleSelectSkills = (param: string) => {
    if (tempCampaignSkills.skill_id.join(',') !== param) {
      // setChangeYn(true);
      setCampaignSkillChangeYn(true);
      setInputSkills(param);
      setTempCampaignSkills({
        ...tempCampaignSkills
        , campaign_id: tempCampaignInfo.campaign_id
        , skill_id: param.split(',').map((data) => Number(data))
      });
    }
    setSkillPopupState((prev) => ({ ...prev, isOpen: false }))
  }

  //발신번호 팝업
  const handleCallingNumlber = (param: string) => {
    if (inputCallingNumber !== param) {
      // setChangeYn(true);
      setCallingNumberChangeYn(true);
      setInputCallingNumber(param);
      setTempCallingNumberInfo({
        ...tempCallingNumberInfo
        , campaign_id: tempCampaignInfo.campaign_id
        , calling_number: param
      });
    }
    setCallingNumberPopupState((prev) => ({ ...prev, isOpen: false }))
  }

  //캠페인 동작시간 탭 변경
  const handleCampaignScheduleChange = (value: OperationTimeParam) => {
    if (value.campaignInfoChangeYn) {
      // setChangeYn(true);
      // setCampaignInfoChangeYn(true);
      setTempCampaignManagerInfo({
        ...tempCampaignManagerInfo
        , start_flag: Number(value.start_flag)
      });
      setTempCampaignsInfo({
        ...tempCampaignInfo
        , start_flag: Number(value.start_flag)
      });
    }
    if (value.campaignScheduleChangeYn) {
      // setChangeYn(true);
      setCampaignScheduleChangeYn(true);
      setTempCampaignSchedule({
        ...tempCampaignSchedule
        , campaign_id: value.campaign_id
        , start_date: value.start_date
        , end_date: value.end_date
        , start_time: value.start_time
        , end_time: value.end_time
      });
    }
    if (value.onSave) {
      // setChangeYn(true);
      // setCampaignInfoChangeYn(true);
      handleCampaignSave();
    }
    if (value.onClosed) {
      handleCampaignClosed();
    }
  }

  //캠페인 발신순서 탭 변경
  const handleCampaignOutgoingOrderChange = (value: OutgoingOrderTabParam) => {
    if (value.campaignInfoChangeYn) {
      // setChangeYn(true);
      // setCampaignInfoChangeYn(true);
      setTempCampaignsInfo({
        ...tempCampaignInfo
        , dial_phone_id: Number(value.dial_phone_id)
        , phone_dial_try: value.phone_dial_try
        , phone_order: value.phone_order
      });
      setTempCampaignManagerInfo({
        ...tempCampaignManagerInfo
        , dial_phone_id: Number(value.dial_phone_id)
        , phone_dial_try1: value.phone_dial_try[0]
        , phone_dial_try2: value.phone_dial_try[1]
        , phone_dial_try3: value.phone_dial_try[2]
        , phone_dial_try4: value.phone_dial_try[3]
        , phone_dial_try5: value.phone_dial_try[4]
        , phone_order: value.phone_order
      });
    }
    if (value.onSave) {
      // setChangeYn(true);
      // setCampaignInfoChangeYn(true);
      handleCampaignSave();
    }
    if (value.onClosed) {
      handleCampaignClosed();
    }
  }

  //캠페인 발신전략 탭 변경
  const handleOutgoingStrategyTabChange = (value: OutgoingStrategyTabParam) => {
    if (value.campaignInfoChangeYn) {
      // setChangeYn(true);
      // setCampaignInfoChangeYn(true);
      setTempCampaignsInfo({
        ...tempCampaignInfo
        , redial_strategy: value.redial_strategy
      });
      setTempCampaignManagerInfo({
        ...tempCampaignManagerInfo
        , redial_strategy1: value.redial_strategy[0]
        , redial_strategy2: value.redial_strategy[1]
        , redial_strategy3: value.redial_strategy[2]
        , redial_strategy4: value.redial_strategy[3]
        , redial_strategy5: value.redial_strategy[4]
      });
    }
    //초기화버튼 클릭시
    if (value.onInit) {
      setTempCampaignsInfo({
        ...tempCampaignInfo
        , redial_strategy: CampaignInfo.redial_strategy
      });
      setTempCampaignManagerInfo({
        ...tempCampaignManagerInfo
        , redial_strategy1: CampaignManagerInfo.redial_strategy1
        , redial_strategy2: CampaignManagerInfo.redial_strategy2
        , redial_strategy3: CampaignManagerInfo.redial_strategy3
        , redial_strategy4: CampaignManagerInfo.redial_strategy4
        , redial_strategy5: CampaignManagerInfo.redial_strategy5
      });
    }
    if (value.onSave) {
      // setChangeYn(true);
      // setCampaignInfoChangeYn(true);
      handleCampaignSave();
    }
    if (value.onClosed) {
      handleCampaignClosed();
    }
  }

  //캠페인 발신방법 탭 변경
  const handleOutgoingMethodTabChange = (value: OutgoingMethodTabParam) => {
    if (value.campaignInfoChangeYn) {
      // setChangeYn(true);
      // setCampaignInfoChangeYn(true);
      setTempCampaignsInfo({
        ...tempCampaignInfo
        , trunk_access_code: value.trunk_access_code
        , dial_try_interval: value.dial_try_interval
        , alarm_answer_count: value.alarm_answer_count
        , overdial_abandon_time: value.overdial_abandon_time
        , detect_mode: value.detect_mode
        , auto_dial_interval: value.auto_dial_interval
        , power_divert_queue: value.power_divert_queue
        , next_campaign: value.next_campaign
        , DDD_code: value.DDD_code
        , callback_kind: value.callback_kind
        , max_ring: value.max_ring
        , token_id: value.token_id
        , use_counsel_result: value.use_counsel_result
        , dial_mode_option: value.dial_mode_option
        , user_option: value.user_option
      });
      setTempCampaignManagerInfo({
        ...tempCampaignManagerInfo
        , trunk_access_code: value.trunk_access_code
        , dial_try_interval: value.dial_try_interval
        , alarm_answer_count: value.alarm_answer_count
        , overdial_abandon_time: value.overdial_abandon_time
        , detect_mode: value.detect_mode
        , auto_dial_interval: value.auto_dial_interval
        , power_divert_queue: value.power_divert_queue + ''
        , next_campaign: value.next_campaign
        , DDD_code: value.DDD_code
        , callback_kind: value.callback_kind
        , max_ring: value.max_ring
        , token_id: value.token_id
        , use_counsel_result: value.use_counsel_result
        , dial_mode_option: value.dial_mode_option
        , user_option: value.user_option
      });
    }
    if (value.onSave) {
      // setChangeYn(true);
      // setCampaignInfoChangeYn(true);
      handleCampaignSave();
    }
    if (value.onClosed) {
      handleCampaignClosed();
    }
  }

  //캠페인 콜페이싱 탭 변경
  const handleCallPacingTabChange = (value: CallPacingTabParam) => {
    if (value.campaignDialSpeedChangeYn) {
      // setChangeYn(true);
      setCampaignDialSpeedChangeYn(value.campaignDialSpeedChangeYn);
      setTempCampaignDialSpeedInfoParam({
        ...tempCampaignDialSpeedInfoParam
        , predictive_dial_speed: value.predictive_dial_speed
        , progressive_dial_speed: value.progressive_dial_speed
      });
      setTempCampaignDialSpeedInfo({
        ...tempCampaignDialSpeedInfo
        , dial_speed: value.dial_mode === 2 ? Math.floor(value.progressive_dial_speed) : value.predictive_dial_speed
      });
    }
    if (value.onSave) {
      // setChangeYn(true);
      // setCampaignInfoChangeYn(true);
      handleCampaignSave();
    }
    if (value.onClosed) {
      handleCampaignClosed();
    }
  }

  //캠페인 콜백 탭 변경
  const handleCallbackTabChange = (value: CallbackTabParam) => {
    if (value.campaignInfoChangeYn) {
      // setChangeYn(true);
      // setCampaignInfoChangeYn(true);
      setTempCampaignsInfo({
        ...tempCampaignInfo
        , callback_kind: Number(value.callback_kind)
        , service_code: value.service_code
      });
      setTempCampaignManagerInfo({
        ...tempCampaignManagerInfo
        , callback_kind: Number(value.callback_kind)
        , service_code: value.service_code
      });
    }
    if (value.onSave) {
      // setChangeYn(true);
      // setCampaignInfoChangeYn(true);
      handleCampaignSave();
    }
    if (value.onClosed) {
      handleCampaignClosed();
    }
  }

  //캠페인 알림 탭 변경
  const handleNotificationTabChange = (value: NotificationTabParam) => {
    if (value.campaignInfoChangeYn) {
      // setChangeYn(true);
      // setCampaignInfoChangeYn(value.campaignInfoChangeYn);
      setTempCampaignsInfo({
        ...tempCampaignInfo
        , list_alarm_count: Number(value.list_alarm_count)
        , supervisor_phone: value.supervisor_phone
        , use_list_alarm: value.use_list_alarm
      });
      setTempCampaignManagerInfo({
        ...tempCampaignManagerInfo
        , list_alarm_count: Number(value.list_alarm_count)
        , supervisor_phone: value.supervisor_phone
        , use_list_alarm: value.use_list_alarm
      });
    }
    if (value.onSave) {
      // setChangeYn(true);
      // setCampaignInfoChangeYn(true);
      handleCampaignSave();
    }
    if (value.onClosed) {
      handleCampaignClosed();
    }
  }

  //캠페인 기타정보 탭 변경
  const handleAdditionalInfoTabChange = (value: AdditionalInfoTabParam) => {
    if (value.onSave) {
      // setChangeYn(true);
      // setCampaignInfoChangeYn(true);
      handleCampaignSave();
    }
    if (value.onClosed) {
      handleCampaignClosed();
    }
  }

  //캠페인 취소
  const handleCampaignClosed = () => {
    setAlertState({
      ...errorMessage,
      isOpen: true,
      message: '캠페인 편집창을 종료하시겠습니까?',
      onClose: handleCampaignClosedExecute,
      onCancle: () => setAlertState((prev) => ({ ...prev, isOpen: false }))
    });
  }

  //캠페인 취소 실행.
  const handleCampaignClosedExecute = () => {
    setAlertState((prev) => ({ ...prev, isOpen: false }));
    removeTab(Number(activeTabId), activeTabKey + '');
  }

  //캠페인 저장
  const handleCampaignSave = () => {
    setAlertState({
      ...errorMessage,
      isOpen: true,
      message: '캠페인 아이디 : ' + tempCampaignManagerInfo.campaign_id
        + '\n 캠페인 이름 : ' + tempCampaignManagerInfo.campaign_name
        + '\n 캠페인을 수정하시겠습니까?',
      onClose: handleCampaignSaveExecute,
      onCancle: () => setAlertState((prev) => ({ ...prev, isOpen: false }))
    });
  }

  //캠페인 저장 실행.
  const handleCampaignSaveExecute = () => {
    setAlertState((prev) => ({ ...prev, isOpen: false }));
    if (changeYn) {
      if (campaignInfoChangeYn) {
        if (tempCampaignManagerInfo.start_flag === 1) {
          fetchCampaignStatusUpdate({
            campaign_id: tempCampaignManagerInfo.campaign_id
            , campaign_status: tempCampaignManagerInfo.start_flag
          });
        } else {
          fetchCampaignManagerUpdate(tempCampaignManagerInfo);
        }
      }
    }
  }

  //캠페인 삭제
  const handleCampaignDelete = () => {
    setAlertState({
      ...errorMessage,
      isOpen: true,
      message: '캠페인 아이디 : ' + tempCampaignManagerInfo.campaign_id
        + '\n 캠페인 이름 : ' + tempCampaignManagerInfo.campaign_name
        + '\n 삭제된 캠페인은 복구가 불가능합니다.'
        + '\n 캠페인을 삭제하시겠습니까?',
      onClose: handleCampaignDeleteExecute,
      onCancle: () => setAlertState((prev) => ({ ...prev, isOpen: false }))
    });
  }

  //캠페인 삭제 실행.
  const handleCampaignDeleteExecute = () => {
    setAlertState((prev) => ({ ...prev, isOpen: false }));
    if (selectedCampaign?.start_flag === 3) {
      // 1)캠페인 삭제
      fetchCampaignManagerDelete({
        ...campaignInfoDelete
        , campaign_id: tempCampaignManagerInfo.campaign_id
        , tenant_id: tempCampaignManagerInfo.tenant_id
      });
      // fetchCampaignAgents({ campaign_id: tempCampaignManagerInfo.campaign_id });
    } else {
      setAlertState({
        ...errorMessage,
        isOpen: true,
        message: '캠페인 삭제는 중지 상태에서만 가능합니다.',
        onClose: () => setAlertState((prev) => ({ ...prev, isOpen: false })),
        onCancle: () => setAlertState((prev) => ({ ...prev, isOpen: false }))
      });
    }
  }

  //변경여부 체크
  useEffect(() => {
    if (changeYn && !campaignInfoChangeYn && !campaignSkillChangeYn && !callingNumberChangeYn && !campaignDialSpeedChangeYn) {
      fetchMain({
        session_key: '',
        tenant_id: 0,
      });
    }
  }, [campaignInfoChangeYn, campaignSkillChangeYn, callingNumberChangeYn, campaignDialSpeedChangeYn]);

  //캠페인 정보 조회 api 호출
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      setCampaigns(data.result_data);
      // if( tenant_id === 0){
      //   setCampaigns(data.result_data);
      // }else{
      //   setCampaigns(data.result_data.filter(data=>data.tenant_id === tenant_id));
      // }
      setSelectedCampaign(data.result_data.filter((campaign) => campaign.campaign_id === selectedCampaign?.campaign_id)[0]);
      setTempCampaignsInfo(data.result_data.filter((campaign) => campaign.campaign_id === selectedCampaign?.campaign_id)[0]);
      setChangeYn(false);
      removeTab(Number(activeTabId), activeTabKey + '');
    }
  });

  //캠페인 정보 수정 api 호출
  const { mutate: fetchCampaignManagerUpdate } = useApiForCampaignManagerUpdate({
    onSuccess: (data) => {
      setCampaignInfoChangeYn(false);
      if (campaignSkillChangeYn) {
        //캠페인 스킬 수정 api 호출
        if (tempCampaignSkills.skill_id[0] === 0) {
          fetchCampaignSkillUpdate({
            ...tempCampaignSkills
            , skill_id: []
          });
        } else {
          fetchCampaignSkillUpdate(tempCampaignSkills);
        }
      }
      if (campaignScheduleChangeYn) {
        //캠페인 스케줄 수정 api 호출
        fetchCampaignScheduleUpdate(tempCampaignSchedule);
      }
      if (callingNumberChangeYn) {
        const tempCallNumber = callingNumbers.filter((callingNumber) => callingNumber.campaign_id === tempCampaignInfo.campaign_id)
          .map((data) => data.calling_number)
          .join(',');
        //캠페인 발신번호 추가,수정,삭제 api 호출
        if (tempCallingNumberInfo.calling_number !== '' && tempCallNumber === '') {
          fetchCallingNumberInsert(tempCallingNumberInfo);
        } else if (tempCallingNumberInfo.calling_number === '' && tempCallNumber !== '') {
          fetchCallingNumberDelete(tempCallingNumberInfo);
        } else {
          fetchCallingNumberUpdate(tempCallingNumberInfo);
        }
      }
      if (campaignDialSpeedChangeYn) {
        //캠페인 발신 속도 수정 api 호출
        fetchDialSpeedUpdate(tempCampaignDialSpeedInfo);
      }
    }
    , onError: (data) => {
      setCampaignInfoChangeYn(false);
    }
  });

  //캠페인 정보 삭제 api 호출
  const { mutate: fetchCampaignManagerDelete } = useApiForCampaignManagerDelete({
    onSuccess: (data) => {
      // 2)캠페인 스케줄 삭제
      fetchCampaignScheduleDelete({
        ...campaignInfoDelete
        , campaign_id: tempCampaignManagerInfo.campaign_id
        , tenant_id: tempCampaignManagerInfo.tenant_id
      });
      // removeTab(Number(activeTabId),activeTabKey+'');
    }
  });

  //캠페인 스킬 조회 api 호출
  const { mutate: fetchCampaignSkills } = useApiForCampaignSkill({
    onSuccess: (data) => {
      setCampaignSkills(data.result_data);
      setCampaignSkillChangeYn(false);
    }
  });

  //캠페인 스킬 수정 api 호출
  const { mutate: fetchCampaignSkillUpdate } = useApiForCampaignSkillUpdate({
    onSuccess: (data) => {
      // fetchCampaignSkills({
      //   session_key: '',
      //   tenant_id: 0,
      // });      
      setCampaignSkillChangeYn(false);
    }
  });

  // 캠페인 스케줄 조회
  const { mutate: fetchSchedules } = useApiForSchedules({
    onSuccess: (data) => {
      setSchedules(data.result_data);
      setCampaignScheduleChangeYn(false);
    }
  });

  //캠페인 스케줄 수정 api 호출 
  const { mutate: fetchCampaignScheduleUpdate } = useApiForCampaignScheduleUpdate({
    onSuccess: (data) => {
      const tempTenantIdArray = tenants.map((tenant) => tenant.tenant_id);
      fetchSchedules({
        tenant_id_array: tempTenantIdArray
      });
    }
  });

  //캠페인 스케줄 삭제 api 호출 
  const { mutate: fetchCampaignScheduleDelete } = useApiForCampaignScheduleDelete({
    onSuccess: (data) => {
      // 3)스킬편집 -> 캠페인 소속 스킬 할당 해제
      const tempSkill = campaignSkills.filter((skill) => skill.campaign_id === tempCampaignInfo.campaign_id)
        .map((data) => data.skill_id)
        .join(',');
      if (tempSkill !== '') {
        fetchCampaignSkillUpdate({
          ...tempCampaignSkills
          , skill_id: []
        });
      }

      // 4)캠페인별 발신번호 설정 삭제
      const tempCallNumber = callingNumbers.filter((callingNumber) => callingNumber.campaign_id === tempCampaignInfo.campaign_id)
        .map((data) => data.calling_number)
        .join(',');
      if (tempCallNumber !== '') {
        fetchCallingNumberDelete(tempCallingNumberInfo);
      }

      // 5)캠페인별 문자할당 삭제 : 기능 사용시 API 생성 예정
      // 6)채널 할당 - 캠페인 모드시, 캠페인이 할당되면 Assign 해제 -> 회선사용 안함으로 변경 : /pds/channel-group - 제외
      // 7)예약콜제한설정 삭제 
      fetchReservedCallDelete({
        ...campaignInfoDelete
        , campaign_id: tempCampaignManagerInfo.campaign_id
        , tenant_id: tempCampaignManagerInfo.tenant_id
      });

    }
  });

  //캠페인 예약호 마스터 정보 삭제 api 호출
  const { mutate: fetchReservedCallDelete } = useApiForReservedCallDelete({
    onSuccess: (data) => {
      // 8)분배호수제한설정에 캠페인 할당된 정보 삭제 - 캠페인 소속 상담사 리스트 정보 조회 후 삭제한다.
      // 캠페인 소속 상담사 리스트 요청
      fetchCampaignAgents({ campaign_id: tempCampaignManagerInfo.campaign_id });
    }
  });

  // 캠페인 소속 상담사 리스트 요청
  const { mutate: fetchCampaignAgents } = useApiForCampaignAgent({
    onSuccess: (data) => {
      // 8)분배호수제한설정에 캠페인 할당된 정보 삭제 - 캠페인 소속 상담사 리스트 정보 조회 후 삭제한다.
      if (data.result_data.length > 0 && data.result_data[0].agent_id.length > 0) {
        const agentList = data.result_data[0].agent_id.join(',');
        fetchMaxcallExtDelete({
          ...agientListDelte
          , campaign_id: tempCampaignManagerInfo.campaign_id
          , agent_id_list: agentList.split(',').map(agent => ({ agent_id: agent }))
        });
      } else {
        // 9)캠페인 예약 재발신 삭제 - 캠페인 재발신 정보 조회 후 삭제한다.
        fetchAutoRedials({
          session_key: '',
          tenant_id: 0,
        });
      }
    }
    , onError: (data) => {
      // 9)캠페인 예약 재발신 삭제 - 캠페인 재발신 정보 조회 후 삭제한다.
      fetchAutoRedials({
        session_key: '',
        tenant_id: 0,
      });
    }
  });

  //캠페인 분배제한 정보 삭제 api 호출
  const { mutate: fetchMaxcallExtDelete } = useApiForMaxcallExtDelete({
    onSuccess: (data) => {
      // 9)캠페인 예약 재발신 삭제 - 캠페인 재발신 정보 조회 후 삭제한다.
      fetchAutoRedials({
        session_key: '',
        tenant_id: 0,
      });
    }
  });

  // 캠페인 재발신 스케줄링 정보 조회  api 호출
  const { mutate: fetchAutoRedials } = useApiForAutoRedial({
    onSuccess: (data) => {
      // 9)캠페인 예약 재발신 삭제 - 캠페인 재발신 정보 조회 후 삭제한다.
      if (typeof data.result_data !== 'undefined') {
        if (data.result_data.length > 0) {
          const dataList = data.result_data.filter((data) => data.campaign_id === tempCampaignInfo.campaign_id);
          if (dataList.length > 0 && dataList[0].sequence_number != null) {
            // 9)캠페인 예약 재발신 삭제 - 캠페인 재발신 정보 조회 후 삭제한다.
            fetchAutoRedialDelete({
              campaign_id: tempCampaignInfo.campaign_id
              , sequence_number: dataList[0].sequence_number
            });
          } else {
            //캠페인관리 화면 닫기.
            fetchMain({
              session_key: '',
              tenant_id: 0,
            });
            removeTab(Number(activeTabId), activeTabKey + '');
          }
        } else {
          //캠페인관리 화면 닫기.
          fetchMain({
            session_key: '',
            tenant_id: 0,
          });
          removeTab(Number(activeTabId), activeTabKey + '');
        }
      } else {
        //캠페인관리 화면 닫기.
        fetchMain({
          session_key: '',
          tenant_id: 0,
        });
        removeTab(Number(activeTabId), activeTabKey + '');
      }
    },onError: (data) => {
      // 9)캠페인 예약 재발신 삭제 - 캠페인 재발신 정보 조회 후 삭제한다.
      //캠페인관리 화면 닫기.
      fetchMain({
        session_key: '',
        tenant_id: 0,
      });
      removeTab(Number(activeTabId), activeTabKey + '');
    }
  });

  //캠페인 재발신 스케줄링 정보 삭제 api 호출
  const { mutate: fetchAutoRedialDelete } = useApiForAutoRedialDelete({
    onSuccess: (data) => {
      //캠페인관리 화면 닫기.
      fetchMain({
        session_key: '',
        tenant_id: 0,
      });
      removeTab(Number(activeTabId), activeTabKey + '');
    }
  });

  //캠페인 발신번호 삭제 api 호출
  const { mutate: fetchCallingNumberDelete } = useApiForCallingNumberDelete({
    onSuccess: (data) => {
      // fetchCallingNumbers({
      //   session_key: '',
      //   tenant_id: 0,
      // });
    }
  });

  //캠페인 발신번호 추가 api 호출
  const { mutate: fetchCallingNumberInsert } = useApiForCallingNumberInsert({
    onSuccess: (data) => {
      fetchCallingNumbers({
        session_key: '',
        tenant_id: 0,
      });
    }
  });

  //캠페인 발신번호 수정 api 호출
  const { mutate: fetchCallingNumberUpdate } = useApiForCallingNumberUpdate({
    onSuccess: (data) => {
      // fetchCallingNumbers({
      //   session_key: '',
      //   tenant_id: 0,
      // });      
    }
  });

  //캠페인 상태 변경 api 호출
  const { mutate: fetchCampaignStatusUpdate } = useApiForCampaignStatusUpdate({
    onSuccess: (data) => {
      if (data.result_code === 0) {
        fetchCampaignManagerUpdate(tempCampaignManagerInfo);
      } else {
        setAlertState({
          ...errorMessage,
          isOpen: true,
          message: CheckCampaignSaveReturnCode(data.reason_code),
          onClose: () => setAlertState((prev) => ({ ...prev, isOpen: false })),
          onCancle: () => setAlertState((prev) => ({ ...prev, isOpen: false }))
        });
      }
    }
  });

  //캠페인 발신 속도 수정 api 호출
  const { mutate: fetchDialSpeedUpdate } = useApiForDialSpeedUpdate({
    onSuccess: (data) => {
      setCampaignDialSpeedChangeYn(false);
    }
  });

  // 전화번호 조회
  const { mutate: fetchCallingNumbers } = useApiForCallingNumber({
    onSuccess: (data) => {
      setCallingNumbers(data.result_data);
      setCallingNumberChangeYn(false);
    }
  });

  //새 캠페인 버튼 이벤트
  const handleNewCampaign = () => {
    if (openedTabs.some(tab => tab.id === 13)) {
      setActiveTab(13, '13');
    } else if (!openedTabs.some(tab => tab.id === 13)) {
      addTab({
        id: 13,
        uniqueKey: '13',
        title: '새 캠페인',
        icon: '',
        href: '',
        content: null,
      });

    }
  };

  //리스트 적용 버튼 이벤트
  const handleListManager = () => {
    if (openedTabs.some(tab => tab.id === 7)) {
      setActiveTab(7, openedTabs.filter((data) => data.id === 7)[0].uniqueKey);
    } else if (!openedTabs.some(tab => tab.id === 7)) {
      addTab({
        id: 7,
        uniqueKey: '7',
        title: '리스트매니저',
        icon: '',
        href: '',
        content: null,
      });
    }
  };
  
  // 발신리스트 업로드 취소 api 호출
  const { mutate: fetchCallingListDelete } = useApiForCallingListDelete({
    onSuccess: (data) => {   
      setAlertState((prev) => ({ ...prev, isOpen: false }));
    }
  });

  //리스트 삭제 버튼 이벤트
  const handleListManagerDelete = () => {
    if (selectedCampaign?.start_flag === 3) {
      setAlertState({
        ...errorMessage,
        isOpen: true,
        message: '캠페인 아이디 : ' + tempCampaignManagerInfo.campaign_id
          + '\n 캠페인 이름 : ' + tempCampaignManagerInfo.campaign_name
          + '\n\n 발신리스트 삭제시 발신리스트와 캠페인 진행정보가 초기화 됩니다.'
          + '\n 삭제된 발신리스트와 캠페인 진행정보는 복구가 불가능합니다.'
          + '\n 발신리스트를 삭제하시겠습니까?',
        onClose: () => fetchCallingListDelete(tempCampaignInfo.campaign_id),
        onCancle: () => setAlertState((prev) => ({ ...prev, isOpen: false }))
      });
    } else {
      setAlertState({
        ...errorMessage,
        isOpen: true,
        message: '캠페인 삭제는 중지 상태에서만 가능합니다.',
        onClose: () => setAlertState((prev) => ({ ...prev, isOpen: false })),
        onCancle: () => setAlertState((prev) => ({ ...prev, isOpen: false }))
      });
    }
  };

  //예약콜 제한건수설정 버튼 이벤트
  const handleReservedCall = () => {
    if (openedTabs.some(tab => tab.id === 8)) {
      setActiveTab(8, openedTabs.filter((data) => data.id === 8)[0].uniqueKey);
    } else if (!openedTabs.some(tab => tab.id === 8)) {
      addTab({
        id: 8,
        uniqueKey: '8',
        title: '예약콜 제한 설정',
        icon: '/header-menu/예약콜제한설정.svg',
        href: '/reserve',
        content: null,
      });
    }
  };

  //분배호수 제한설정 버튼 이벤트
  const handleMaxCall = () => {
    if (openedTabs.some(tab => tab.id === 9)) {
      setActiveTab(9, openedTabs.filter((data) => data.id === 9)[0].uniqueKey);
    } else if (!openedTabs.some(tab => tab.id === 9)) {
      addTab({
        id: 9,
        uniqueKey: '9',
        title: '분배호수 제한 설정',
        icon: '/header-menu/분배호수제한설정.svg',
        href: '/distribute',
        content: null,
      });
    }
  };

  //재발신 버튼 이벤트
  const handleRebroadcast = () => {
    // openRebroadcastSettings('20','재발신 설정');
    if( campaignIdForUpdateFromSideMenu == null || campaignIdForUpdateFromSideMenu === ''){
      setCampaignIdForUpdateFromSideMenu(tempCampaignInfo.campaign_id+'');
    }
    if (openedTabs.some(tab => tab.id === 20)) {
      setActiveTab(20, openedTabs.filter((data) => data.id === 20)[0].uniqueKey);
    } else if (!openedTabs.some(tab => tab.id === 20)) {
      addTab({
        id: 20,
        uniqueKey: '20',
        title: '재발신 설정',
        icon: '',
        href: '',
        content: null,
      });
    }
  };

  //캠페인 상태 변경 에러 코드.
  const CheckCampaignSaveReturnCode = (returnCode: number) => {
    if (returnCode === -1) {
      return 'DataBase 데이터 처리 중 문제가 발생 하였습니다.';
    } else if (returnCode === -3) {
      return '상담원과 고객이 통화 중이라 캠페인 통계가 완료되지 않았습니다. \n잠시만 기다려주세요.';
    } else if (returnCode === -10) {
      return '에러사항에 대해서 관리자에게 문의 하세요.';
    } else if (returnCode === -15) {
      return '업무 외 시간으로 캠페인을 시작 할 수 없습니다. 캠페인 시작을 원하시면 발신 업무 시간을 변경 하십시오.';
    } else if (returnCode === -16) {
      return '상담원과 고객이 통화 중이라 캠페인 통계가 완료되지 않았습니다. \n잠시만 기다려주세요.';
    } else if (returnCode === -7770) {
      return '리스트 파일이 존재 하지 않습니다.';
    } else if (returnCode === -7771) {
      return '발신 할 레코드가 존재 하지 않습니다.';
    } else if (returnCode === -7772) {
      return '발신 순서가 없습니다.';
    } else if (returnCode === -7773) {
      return '캠페인 시작/종료 날짜를 확인해 주시기 바랍니다.';
    } else if (returnCode === -7774) {
      return '응대할 상담원이 없으므로 캠페인 시작이 취소 되었습니다.';
    } else if (returnCode === -7775) {
      return '발신 할 트렁크가 없습니다.';
    } else if (returnCode === -7776) {
      return '캠페인에 할당된 상담원이 없습니다.';
    } else if (returnCode === -7777) {
      return 'CIDS가 작동중 인지 확인 하세요.에러사항에 대해서 관리자에게 문의 하세요.';
    } else if (returnCode === -7778) {
      return '발신할 채널이 할당이 되어 있지 않습니다.';
    } else if (returnCode === -8000) {
      return '캠페인이 상태 변경 중이므로, 캠페인을 시작할 수 없습니다.';
    } else if (returnCode === -8001) {
      return '무한콜백 캠페인에서만 발생. UserOption Data(limit)가 있다.';
    } else if (returnCode === -10001) {
      return '캠페인 데이터 저장공간이 남아 있지 않습니다. 관리자에게 문의 하세요.';
    }
  }

  return (
    <div className='flex flex-col gap-5 w-[60%] overflow-auto'>
      <div>
        <TitleWrap
          className='border-b border-gray-300 pb-1'
          title="상세내역"
          buttons={[
            { label: "새 캠페인", onClick: () => handleNewCampaign() },
            // { label: "캠페인 저장", onClick: () => handleCampaignSave(), },
            { label: "캠페인 삭제", onClick: () => handleCampaignDelete() },
            { label: "재발신", onClick: () => handleRebroadcast(), variant: "customblue" },
            { label: "리스트 적용", onClick: () => handleListManager(), variant: "customblue" },
            { label: "리스트 삭제", onClick: () => handleListManagerDelete(), variant: "customblue" },
            { label: "예약콜 제한건수설정", onClick: () => handleReservedCall(), variant: "customblue" },
            { label: "분배호수 제한설정", onClick: () => handleMaxCall(), variant: "customblue" },
          ]}
        />
        <div className="grid grid-cols-3 gap-x-4 gap-y-2">
          <div className='flex items-center gap-2'>
            <Label className="w-[5.6rem] min-w-[5.6rem]">캠페인 아이디</Label>
            <CustomInput
              type="number"
              value={tempCampaignInfo.campaign_id}
              onChange={(e) => handleInputData(e.target.value, 'campaign_id')}
              className=""
              disabled={selectedCampaign !== null}
            />
          </div>

          <div className='flex items-center gap-2'>
            <Label className="w-[5.6rem] min-w-[5.6rem]">테넌트</Label>
            <Select
              onValueChange={(value) => handleSelectChange(value, 'tenant')}
              value={tempCampaignInfo.tenant_id + '' || ''}
              disabled={true}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="테넌트를 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                {tenants.map(option => (
                  <SelectItem key={option.tenant_id} value={option.tenant_id.toString()}>
                    {option.tenant_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className='flex items-center gap-2'>
            <Label className="w-[5.6rem] min-w-[5.6rem]">캠페인명</Label>
            <CustomInput
              value={tempCampaignInfo.campaign_name || ''}
              onChange={(e) => handleInputData(e.target.value, 'campaign_name')}
              className=""
            />
          </div>

          <div className='flex items-center gap-2'>
            <Label className="w-[5.6rem] min-w-[5.6rem]">다이얼 모드</Label>
            <Select
              onValueChange={(value) => handleSelectChange(value, 'dialMode')}
              value={tempCampaignInfo.dial_mode + '' || ''}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="다이얼 모드를 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                {dialModeList.map(option => (
                  <SelectItem key={option.dial_id} value={option.dial_id.toString()}>
                    {option.dial_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className='flex items-center gap-2 relative'>
            <Label className="w-[5.6rem] min-w-[5.6rem]">스킬</Label>
            <CustomInput value={inputSkills} className="w-full" readOnly />
            <button
              className="absolute right-2 top-[52%] transform -translate-y-1/2">
              <Image
                src="/skill-popup.svg"
                alt="스킬팝업"
                width={12}
                height={12}
                priority
                onClick={() =>
                  setSkillPopupState({
                    ...skillPopupState,
                    isOpen: true,
                  })
                }
              />
            </button>
          </div>
          <div className='flex items-center gap-2'>
            <Label className="w-[5.6rem] min-w-[5.6rem]">발신번호</Label>
            <CustomInput value={inputCallingNumber} className="w-full"
              disabled={selectedCampaign !== null} readOnly
            />
            <CommonButton variant="outline" className='h-7' onClick={() =>
              setCallingNumberPopupState({
                ...callingNumberPopupState,
                isOpen: true,
              })
            }>발신번호 변경</CommonButton>
          </div>
          <div className="flex items-center gap-2 col-span-3">
            <Label className="w-[5.6rem] min-w-[5.6rem]">설명</Label>
            <CustomInput value={tempCampaignInfo.campaign_desc || ''} className="w-full"
              onChange={(e) => handleInputData(e.target.value, 'campaign_desc')}
            />
          </div>
        </div>
      </div>
      <div>
        <CampaignTab
          campaignSchedule={tempCampaignSchedule}
          newCampaignYn={false}
          campaignInfo={tempCampaignInfo}
          campaignDialSpeedInfo={tempCampaignDialSpeedInfoParam}
          onCampaignOutgoingOrderChange={(value) => handleCampaignOutgoingOrderChange(value)}
          onCampaignScheduleChange={(value) => handleCampaignScheduleChange(value)}
          onCampaignOutgoingStrategyChange={(value) => handleOutgoingStrategyTabChange(value)}
          onCampaignOutgoingMethodChange={(value) => handleOutgoingMethodTabChange(value)}
          onHandleCallPacingTabChange={(value) => handleCallPacingTabChange(value)}
          onHandleAdditionalInfoTabChange={(value) => handleAdditionalInfoTabChange(value)}
          onHandleCallbackTabChange={(value) => handleCallbackTabChange(value)}
          onHandleNotificationTabChange={(value) => handleNotificationTabChange(value)}
        />
      </div>
      <SkillListPopup
        param={tempCampaignSkills.skill_id || []}
        tenantId={tempCampaignInfo.tenant_id}
        type={skillPopupState.type}
        isOpen={skillPopupState.isOpen}
        onConfirm={(param) => handleSelectSkills(param)}
        onCancle={() => setSkillPopupState((prev) => ({ ...prev, isOpen: false }))}
      />

      {/* 확인,취소  */}
      <CustomAlert
        message={alertState.message}
        title={alertState.title}
        type={alertState.type}
        isOpen={alertState.isOpen}
        onClose={() => {
          alertState.onClose()
        }}
        onCancle={() => setAlertState((prev) => ({ ...prev, isOpen: false }))} />
      <CallingNumberPopup
        param={inputCallingNumber}
        type={callingNumberPopupState.type}
        isOpen={callingNumberPopupState.isOpen}
        onConfirm={(param) => handleCallingNumlber(param)}
        onCancle={() => setCallingNumberPopupState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}