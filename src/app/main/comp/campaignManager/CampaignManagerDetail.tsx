"use client";
// components/CampaignManager/CampaignManagerDetail.tsx
import { useMainStore } from '@/store';
import Image from 'next/image'
import TitleWrap from "@/components/shared/TitleWrap";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import CampaignTab from './CampaignTab';
import { MainDataResponse, CampaignSkillUpdateRequest } from '@/features/auth/types/mainIndex';
import { useEffect, useState } from 'react';
import SkillListPopup from '@/components/shared/layout/SkillListPopup';
import { useApiForCampaignSkillUpdate } from '@/features/auth/hooks/useApiForCampaignSkillUpdate';

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

const CampaignInfo: MainDataResponse = {
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

export default function CampaignDetail() {
  const selectedCampaign = useMainStore((state) => state.selectedCampaign);
  const [tempCampaignInfo, setTempCampaignsInfo] = useState<MainDataResponse>(CampaignInfo);
  const [tempCampaignSkills, setTempCampaignSkills] = useState<CampaignSkillUpdateRequest>(CampaignSkillInfo);
  const [changeYn, setChangeYn] = useState<boolean>(false); // 변경여부
  const [campaignInfoChangeYn, setCampaignInfoChangeYn] = useState<boolean>(false); // 캠페인정보 변경여부
  const [campaignSkillChangeYn, setCampaignSkillChangeYn] = useState<boolean>(false); // 캠페인스킬 변경여부
  const { tenants, campaignSkills, callingNumbers } = useMainStore();
  const [ inputSkills, setInputSkills ] = useState('');
  const [ inputCallingNumber, setInputCallingNumber ] = useState('');
  const [alertState, setAlertState] = useState({
    isOpen: false,
    param: [],
    tenantId: 0,
    type: '0',
  });

  //캠페인 정보 최초 세팅 
  useEffect(() => {
    if( selectedCampaign !== null ){
      setChangeYn(false);
      setCampaignInfoChangeYn(false);
      setTempCampaignsInfo(selectedCampaign);
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
    }
  }, [selectedCampaign,campaignSkills,callingNumbers]);

  //input data change
  const handleInputData = (value:any, col:string) => {
    setChangeYn(true);
    setCampaignInfoChangeYn(true);
    if( col === 'campaign_id' && value !== '' ){
      setTempCampaignsInfo({
        ...tempCampaignInfo,
        campaign_id: Number(value)
      });
    }    
    if( col === 'campaign_name' ){
      setTempCampaignsInfo({
        ...tempCampaignInfo,
        campaign_name: value
      });
    }
    if( col === 'campaign_desc' ){
      setTempCampaignsInfo({
        ...tempCampaignInfo,
        campaign_desc: value
      });
    }
  }

  //select data change
  const handleSelectChange = (value: string, type: 'tenant' | 'dialMode') => {
    
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
    setAlertState((prev) => ({ ...prev, isOpen: false }))
  }

  //캠페인 저장
  const handleCampaignSave = () => {
    if( changeYn ){
      if( campaignInfoChangeYn ){
        console.log('캠페인 정보 저장');
      }
      if( campaignSkillChangeYn ){
        fetchCampaignSkillUpdate(tempCampaignSkills);
      }
    }
  }
  
  //캠페인 스킬 수정 api 호출
  const { mutate: fetchCampaignSkillUpdate } = useApiForCampaignSkillUpdate({
    onSuccess: (data) => {
      console.log(data.result_msg);
    }
  });
  

  return (
    <div className='flex flex-col gap-5'>
      <div>
        <TitleWrap
          className='border-b border-gray-300 pb-1'
          title="상세내역"
          buttons={[
              { label: "새 캠페인", onClick: () => console.log("") },
              { label: "캠페인 저장", onClick: () => handleCampaignSave(), variant: "customblue" },
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
            <Input 
              type="number" 
              value={tempCampaignInfo.campaign_id } 
              onChange={(e) => handleInputData(e.target.value, 'campaign_id')}            
              className="" 
              disabled={selectedCampaign !== null}
              defaultValue={tempCampaignInfo.campaign_id}
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
            <Input 
              value={tempCampaignInfo.campaign_name || ''} 
              onChange={(e) => handleInputData(e.target.value, 'campaign_name')}         
              className="" defaultValue={tempCampaignInfo.campaign_name}
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
            <Input value={inputSkills} className="w-full" readOnly />
            <button
                className="absolute right-2 top-[52%] transform -translate-y-1/2">
                <Image
                    src="/skill-popup.svg"
                    alt="스킬팝업"
                    width={12}
                    height={12}
                    priority
                    onClick={() => 
                      setAlertState({...alertState,
                        isOpen: true,
                      })
                    }
                  /> 
            </button>
          </div>
          <div className='flex items-center gap-2'>
            <Label className="w-[5.6rem] min-w-[5.6rem]">발신번호</Label>
            <Input value={inputCallingNumber} className="w-full" 
              disabled={selectedCampaign !== null} />
            <Button variant="outline" className='h-7'>발신번호 변경</Button>
          </div>
          <div className="flex items-center gap-2 col-span-3">
            <Label className="w-[5.6rem] min-w-[5.6rem]">설명</Label>
            <Input value={tempCampaignInfo.campaign_desc || ''} className="w-full" defaultValue={tempCampaignInfo.campaign_desc}          
              onChange={(e) => handleInputData(e.target.value, 'campaign_desc')} /> 
          </div>
        </div>
      </div>
      <div>
        <CampaignTab/>
      </div>
      <SkillListPopup
        param={tempCampaignSkills.skill_id||[]}
        tenantId={tempCampaignInfo.tenant_id}
        type={alertState.type}
        isOpen={alertState.isOpen}
        onConfirm={(param) => handleSelectSkills(param)}
        onCancle={() => setAlertState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}