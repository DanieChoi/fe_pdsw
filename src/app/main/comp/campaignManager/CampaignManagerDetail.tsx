"use client";
// components/CampaignManager/CampaignManagerDetail.tsx
import { useMainStore, useCampainManagerStore } from '@/store';
import Image from 'next/image'
import TitleWrap from "@/components/shared/TitleWrap";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { CommonButton } from "@/components/shared/CommonButton";
import CampaignTab from './CampaignTab';
import { MainDataResponse } from '@/features/auth/types/mainIndex';
import { CampaignSkillUpdateRequest, CampaignInfoUpdateRequest, CampaignScheDuleListDataResponse } from '@/features/campaignManager/types/campaignManagerIndex';
import { useEffect, useState } from 'react';
import SkillListPopup from '@/components/shared/layout/SkillListPopup';
import { useApiForCampaignSkillUpdate } from '@/features/campaignManager/hooks/useApiForCampaignSkillUpdate';
import { useApiForCampaignManagerUpdate } from '@/features/campaignManager/hooks/useApiForCampaignManagerUpdate';
import { useApiForCampaignScheduleUpdate } from '@/features/campaignManager/hooks/useApiForCampaignScheduleUpdate';
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useApiForCampaignSkill } from '@/features/campaignManager/hooks/useApiForCampaignSkill';
import { useApiForSchedules } from '@/features/campaignManager/hooks/useApiForSchedules';
import CustomAlert from '@/components/shared/layout/CustomAlert';
import CallingNumberPopup from '@/components/shared/layout/CallingNumberPopup';

const dialModeList = [
  {dial_id:1, dial_name: 'Power'},
  {dial_id:2, dial_name: 'Progressive'},
  {dial_id:3, dial_name: 'Predictive'},
  {dial_id:4, dial_name: 'System Preview'},
];

const CampaignSkillInfo: CampaignSkillUpdateRequest = {
  campaign_id: 0,
  skill_id: [],
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
  redial_strategy1: '',
  redial_strategy2: '',
  redial_strategy3: '',
  redial_strategy4: '',
  redial_strategy5: '',
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
  creation_user: 0,
  creation_time: '',
  creation_ip: '',
  update_user: 0,
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
  redial_strategy: [],
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
  phone_dial_try: [];
}

const CampaignScheduleInfo: CampaignScheDuleListDataResponse = {
  campaign_id: 0,
  tenant_id: 0,
  start_date: '',
  end_date: '',
  start_time: [],
  end_time: []
}

export default function CampaignDetail() {
  const [tempCampaignManagerInfo, setTempCampaignManagerInfo] = useState<CampaignInfoUpdateRequest>(CampaignManagerInfo);
  const [tempCampaignInfo, setTempCampaignsInfo] = useState<MainDataResponse>(CampaignInfo);
  const [tempCampaignSkills, setTempCampaignSkills] = useState<CampaignSkillUpdateRequest>(CampaignSkillInfo);
  const [tempCampaignSchedule, setTempCampaignSchedule] = useState<CampaignScheDuleListDataResponse>(CampaignScheduleInfo);
  const [changeYn, setChangeYn] = useState<boolean>(false); // 변경여부
  const [campaignInfoChangeYn, setCampaignInfoChangeYn] = useState<boolean>(false); // 캠페인정보 변경여부
  const [campaignSkillChangeYn, setCampaignSkillChangeYn] = useState<boolean>(false); // 캠페인스킬 변경여부
  const [campaignScheduleChangeYn, setCampaignScheduleChangeYn] = useState<boolean>(false); // 캠페인 스케줄 변경여부
  const [campaignSaveYn, setCampaignSaveYn] = useState<boolean>(false); // 캠페인 저장여부
  const { tenants
    , setCampaigns
    , selectedCampaign
    , setSelectedCampaign
  } = useMainStore();
  const { callingNumbers, campaignSkills, schedules, setCampaignSkills, setSchedules } = useCampainManagerStore();
  const [ inputSkills, setInputSkills ] = useState('');
  const [ inputCallingNumber, setInputCallingNumber ] = useState('');
  const [ skillPopupState, setSkillPopupState] = useState({
    isOpen: false,
    param: [],
    tenantId: 0,
    type: '1',
  });
  const [alertState, setAlertState] = useState({
    isOpen: false,
    message: '',
    title: '로그인',
    type: '0',
  });
  const [ callingNumberPopupState, setCallingNumberPopupState] = useState({
    isOpen: false,
    param: [],
    tenantId: 0,
    type: '1',
  });

  //캠페인 정보 최초 세팅 
  useEffect(() => {
    if( selectedCampaign !== null ){
      setChangeYn(false);
      setCampaignInfoChangeYn(false);
      setTempCampaignsInfo({...tempCampaignInfo,
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
      setTempCampaignSkills({...tempCampaignSkills
        , skill_id: tempSkill.split(',').map((data) => Number(data))
      });
      const tempCallNumber = callingNumbers.filter((callingNumber) => callingNumber.campaign_id === selectedCampaign.campaign_id)
                  .map((data) => data.calling_number)
                  .join(',');
      setInputCallingNumber(tempCallNumber);
      setTempCampaignManagerInfo({...CampaignManagerInfo,
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
        phone_dial_try1: (selectedCampaign.phone_dial_try !== undefined) ? Number(selectedCampaign.phone_dial_try.slice(0,1)[0]) : 0,
        phone_dial_try2: (selectedCampaign.phone_dial_try !== undefined) ? Number(selectedCampaign.phone_dial_try.slice(1,2)[0]) : 0,
        phone_dial_try3: (selectedCampaign.phone_dial_try !== undefined) ? Number(selectedCampaign.phone_dial_try.slice(2,3)[0]) : 0,
        phone_dial_try4: (selectedCampaign.phone_dial_try !== undefined) ? Number(selectedCampaign.phone_dial_try.slice(3,4)[0]) : 0,
        phone_dial_try5: (selectedCampaign.phone_dial_try !== undefined) ? Number(selectedCampaign.phone_dial_try.slice(4,5)[0]) : 0,
        dial_try_interval: selectedCampaign.dial_try_interval,
        trunk_access_code: selectedCampaign.trunk_access_code,
        DDD_code: selectedCampaign.DDD_code,
        power_divert_queue: selectedCampaign.power_divert_queue+'',
        max_ring: selectedCampaign.max_ring,
        detect_mode: selectedCampaign.detect_mode,
        auto_dial_interval: selectedCampaign.auto_dial_interval,
        creation_user: selectedCampaign.creation_user+'',
        creation_time: selectedCampaign.creation_time,
        creation_ip: selectedCampaign.creation_ip,
        update_user: selectedCampaign.update_user+'',
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
        redial_strategy1: (selectedCampaign.redial_strategy !== undefined) ? selectedCampaign.redial_strategy.slice(0,1)[0]+'' : '',
        redial_strategy2: (selectedCampaign.redial_strategy !== undefined) ? selectedCampaign.redial_strategy.slice(1,2)[0]+'' : '',
        redial_strategy3: (selectedCampaign.redial_strategy !== undefined) ? selectedCampaign.redial_strategy.slice(2,3)[0]+'' : '',
        redial_strategy4: (selectedCampaign.redial_strategy !== undefined) ? selectedCampaign.redial_strategy.slice(3,4)[0]+'' : '',
        redial_strategy5: (selectedCampaign.redial_strategy !== undefined) ? selectedCampaign.redial_strategy.slice(4,5)[0]+'' : '',
        dial_mode_option: selectedCampaign.dial_mode_option,
        user_option: selectedCampaign.user_option,
        customer_char_id: 1,
        counsel_script_id: 1,
        announcement_id: 1,
        campaign_level: 0,
        outbound_sequence: ''
      });
      if(  schedules.length > 0 ){ 
        const tempCampaignSchedule = schedules.filter((schedule) => schedule.campaign_id === selectedCampaign?.campaign_id)[0];
        setTempCampaignSchedule({...tempCampaignSchedule,
          campaign_id: selectedCampaign.campaign_id,
          tenant_id: selectedCampaign.tenant_id,
          start_date: schedules.filter((schedule) => schedule.campaign_id === selectedCampaign.campaign_id)[0].start_date,
          end_date: schedules.filter((schedule) => schedule.campaign_id === selectedCampaign.campaign_id)[0].end_date,
          start_time: schedules.filter((schedule) => schedule.campaign_id === selectedCampaign.campaign_id)[0].start_time,
          end_time: schedules.filter((schedule) => schedule.campaign_id === selectedCampaign.campaign_id)[0].end_time
        });
      }
    }
  }, [selectedCampaign,campaignSkills,callingNumbers,schedules]);

  //input data change
  const handleInputData = (value:any, col:string) => {
    setChangeYn(true);
    setCampaignInfoChangeYn(true);
    if( col === 'campaign_id' && value !== '' ){
      setTempCampaignsInfo({
        ...tempCampaignInfo,
        campaign_id: Number(value)
      });
      setTempCampaignManagerInfo({
        ...tempCampaignManagerInfo,
        campaign_id: Number(value)
      });
    }    
    if( col === 'campaign_name' ){
      setTempCampaignsInfo({
        ...tempCampaignInfo,
        campaign_name: value
      });
      setTempCampaignManagerInfo({
        ...tempCampaignManagerInfo,
        campaign_name: value
      });
    }
    if( col === 'campaign_desc' ){
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
    setChangeYn(true);
    setCampaignInfoChangeYn(true);
    if( type === 'tenant' && value !== '' ){
      setTempCampaignsInfo({
        ...tempCampaignInfo,
        tenant_id: Number(value)
      });
      setTempCampaignManagerInfo({
        ...tempCampaignManagerInfo,
        tenant_id: Number(value)
      });
    }  
    if( type === 'dialMode' && value !== '' ){
      setTempCampaignsInfo({
        ...tempCampaignInfo,
        dial_mode: Number(value)
      });
      setTempCampaignManagerInfo({
        ...tempCampaignManagerInfo,
        dial_mode: Number(value)
      });
    }  
  }

  //스킬 선택 팝업
  const handleSelectSkills = (param: string) => {
    if( tempCampaignSkills.skill_id.join(',') !== param ){
      setChangeYn(true);
      setCampaignSkillChangeYn(true);
      setInputSkills(param);
      setTempCampaignSkills({...tempCampaignSkills
        , campaign_id: tempCampaignInfo.campaign_id
        , skill_id: param.split(',').map((data) => Number(data))
      });
    }
    setSkillPopupState((prev) => ({ ...prev, isOpen: false }))
  }
  
  //발신번호 팝업
  const handleCallingNumlber = (param: string) => {
    if( tempCampaignSkills.skill_id.join(',') !== param ){
      setChangeYn(true);
      setCampaignSkillChangeYn(true);
      setInputSkills(param);
      setTempCampaignSkills({...tempCampaignSkills
        , campaign_id: tempCampaignInfo.campaign_id
        , skill_id: param.split(',').map((data) => Number(data))
      });
    }
    setCallingNumberPopupState((prev) => ({ ...prev, isOpen: false }))
  }

  //캠페인 동작시간 탭 변경
  const handleCampaignScheduleChange = (value: OperationTimeParam) => {
    if( value.campaignInfoChangeYn ){
      setChangeYn(true);
      setCampaignInfoChangeYn(true);
      setTempCampaignManagerInfo({...tempCampaignManagerInfo
        , start_flag: Number(value.start_flag)
      });
    }
    if( value.campaignScheduleChangeYn ){
      setChangeYn(true);
      setCampaignScheduleChangeYn(true);
      setTempCampaignSchedule({...tempCampaignSchedule
        , campaign_id: value.campaign_id
        , start_date: value.start_date
        , end_date: value.end_date
        , start_time: value.start_time
        , end_time: value.end_time
      });
    }
    if( value.onSave ){
      setCampaignSaveYn(false);
      handleCampaignSave();
    }
    if( value.onClosed ){
      // setCampaignSaveYn(false);
    }
  }
  
  //캠페인 발신순서 탭 변경
  const handleCampaignOutgoingOrderChange = (value: OutgoingOrderTabParam) => {
    if( value.campaignInfoChangeYn ){
      setChangeYn(true);
      setCampaignInfoChangeYn(true);
      setTempCampaignManagerInfo({...tempCampaignManagerInfo
        , dial_phone_id: Number(value.dial_phone_id)
      });
    }    
  }

  //캠페인 저장
  const handleCampaignSave = () => {
    if( changeYn ){
      if( campaignInfoChangeYn ){
        fetchCampaignManagerUpdate(tempCampaignManagerInfo);
      }
      if( campaignSkillChangeYn ){
        //캠페인 스킬 수정 api 호출
        fetchCampaignSkillUpdate(tempCampaignSkills);
      }
      if( campaignScheduleChangeYn ){
        //캠페인 스케줄 수정 api 호출
        fetchCampaignScheduleUpdate(tempCampaignSchedule);
      }
    }
  }

  //캠페인 스케줄 저장
  const handleCampaignScheduleSave = () => {
    
  }
  
  //변경여부 체크
  useEffect(() => {  
    if( changeYn && !campaignInfoChangeYn && !campaignSkillChangeYn ){  
      fetchMain({
        session_key: '',
        tenant_id: 0,
      });
    }
  }, [campaignInfoChangeYn,campaignSkillChangeYn]);

  //캠페인 정보 조회 api 호출
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      setCampaigns(data.result_data);
      setSelectedCampaign( data.result_data.filter((campaign) => campaign.campaign_id === selectedCampaign?.campaign_id)[0] );
      setTempCampaignsInfo(data.result_data.filter((campaign) => campaign.campaign_id === selectedCampaign?.campaign_id)[0]);
      setChangeYn(false);
    }
  });

  //캠페인 정보 수정 api 호출
  const { mutate: fetchCampaignManagerUpdate } = useApiForCampaignManagerUpdate({
    onSuccess: (data) => {
      setCampaignInfoChangeYn(false);
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
      fetchCampaignSkills({
        session_key: '',
        tenant_id: 0,
      });
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
  

  return (
    <div className='flex flex-col gap-5 w-[60%] overflow-auto'>
      <div>
        <TitleWrap
          className='border-b border-gray-300 pb-1'
          title="상세내역"
          buttons={[
              { label: "새 캠페인", onClick: () => console.log("") },
              { label: "캠페인 저장", onClick: () => handleCampaignSave(),},
              { label: "캠페인 삭제", onClick: () => console.log("") },
              { label: "재발신", onClick: () => console.log(""), variant: "customblue"},
              { label: "리스트 적용", onClick: () => console.log(""), variant: "customblue"},
              { label: "리스트 삭제", onClick: () => console.log(""), variant: "customblue" },
              { label: "예약콜 제한건수설정", onClick: () => console.log(""),variant: "customblue" },
              { label: "분배호수 제한설정", onClick: () => console.log(""),variant: "customblue" },
          ]}
          />
          <div className="grid grid-cols-3 gap-x-4 gap-y-2">
          <div className='flex items-center gap-2'>
            <Label className="w-[5.6rem] min-w-[5.6rem]">캠페인 아이디</Label>
            <CustomInput 
              type="number" 
              value={tempCampaignInfo.campaign_id } 
              onChange={(e) => handleInputData(e.target.value, 'campaign_id')}            
              className="" 
              disabled={selectedCampaign !== null}
            />
          </div>

          <div className='flex items-center gap-2'>
            <Label className="w-[5.6rem] min-w-[5.6rem]">테넌트</Label>
            <Select
              onValueChange={(value) => handleSelectChange(value, 'tenant')}
              value={tempCampaignInfo.tenant_id+'' || ''}
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
              readOnly
            />
          </div>

          <div className='flex items-center gap-2'>
            <Label className="w-[5.6rem] min-w-[5.6rem]">다이얼 모드</Label>
            <Select
              onValueChange={(value) => handleSelectChange(value, 'dialMode')}
              value={tempCampaignInfo.dial_mode+'' || ''}
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
                      setSkillPopupState({...skillPopupState,
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
              setCallingNumberPopupState({...callingNumberPopupState,
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
        <CampaignTab campaignSchedule={tempCampaignSchedule}
          campaignInfo={tempCampaignInfo}
          onCampaignOutgoingOrderChange={(value) => handleCampaignOutgoingOrderChange(value)}
          onCampaignScheduleChange={(value) => handleCampaignScheduleChange(value)}
        />
      </div>
      <SkillListPopup
        param={tempCampaignSkills.skill_id||[]}
        tenantId={tempCampaignInfo.tenant_id}
        type={skillPopupState.type}
        isOpen={skillPopupState.isOpen}
        onConfirm={(param) => handleSelectSkills(param)}
        onCancle={() => setSkillPopupState((prev) => ({ ...prev, isOpen: false }))}
      />
      <CustomAlert
        message={alertState.message}
        title={alertState.title}
        type={alertState.type}
        isOpen={alertState.isOpen}
        onClose={() => {
          setAlertState((prev) => ({ ...prev, isOpen: false }));
        }}/>
      <CallingNumberPopup
        param={tempCampaignSkills.campaign_id+''}
        type={callingNumberPopupState.type}
        isOpen={callingNumberPopupState.isOpen}
        onConfirm={(param) => handleCallingNumlber(param)}
        onCancle={() => setCallingNumberPopupState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}