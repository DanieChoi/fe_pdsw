"use client";
// components/main/CampaignManager.tsx
import React, { useEffect, useState } from 'react';
import { useMainStore, useCampainManagerStore } from '@/store';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { CommonButton } from "@/components/shared/CommonButton";
import { SkillListDataResponse } from '@/features/campaignManager/types/campaignManagerIndex';

const dialModeList = [
  {dial_id:1, dial_name: 'Power'},
  {dial_id:2, dial_name: 'Progressive'},
  {dial_id:3, dial_name: 'Predictive'},
  {dial_id:4, dial_name: 'System Preview'},
];

export interface CampaignHeaderSearch {
  tenantId: number;
  campaignName: string;
  dailMode: number;
  skill: number;
  callNumber: string;
}

type Props = {
  campaignId?: string;
  onSearch: (param:CampaignHeaderSearch) => void;
}

export default function CampaignManagerHeader({campaignId,onSearch}:Props) {
  const { tenants,selectedCampaign } = useMainStore();
  const { skills } = useCampainManagerStore();
  const [tenantId, setTenantId] = useState('all'); // 테넌트
  const [campaignName, setCampaignName] = useState(''); // 캠페인이름
  const [dailMode, setDailMode] = useState('all'); // 다이얼모드
  const [skill, setSkill] = useState('all'); // 스킬
  const [callNumber, setCallNumber] = useState(''); // 발신번호
  const [readonly, setReadonly] = useState(false);
  const [tempSkills, setTempSkills] = useState<SkillListDataResponse[]>([]);

  const onHeaderSearch = () => {
    const param:CampaignHeaderSearch = {
      tenantId: tenantId === 'all'?-1:Number(tenantId),
      campaignName: campaignName,
      dailMode: dailMode === 'all'?-1:Number(dailMode),
      skill: skill === 'all'?-1:Number(skill),
      callNumber: callNumber,
    }
    onSearch(param);
  }

  useEffect(() => {
    if( typeof campaignId != 'undefined' && campaignId != '' ){
      setReadonly(true);
    }else{
      setReadonly(false);
    }
  }, [campaignId]);

  useEffect(() => {
    if( typeof tenantId != 'undefined' ){
      if( tenantId === 'all' ){
        setTempSkills(skills);
      }else{
        setTempSkills(skills.filter((skill) => skill.tenant_id === Number(tenantId)));
      }
    }
    setSkill('all');
  }, [tenantId, skills]);

  return (
    <div className="grid grid-cols-6 gap-4 title-background">
      <div className="flex items-center">
          <Label className="w-20 min-w-20">테넌트</Label>
          <Select defaultValue='all' value={tenantId} onValueChange={setTenantId}>
              <SelectTrigger className="w-full">
              <SelectValue placeholder="테넌트" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value='all'>전체</SelectItem>
              { tenants.map(option => (
                <SelectItem key={option.tenant_id} value={option.tenant_id+''}>{option.tenant_name}</SelectItem>
              )) }
              </SelectContent>
          </Select>
      </div>
      <div className="flex items-center">
        <Label className="w-20 min-w-20">캠페인이름</Label>
        <CustomInput 
        type="text" 
        value={campaignName}
        onChange={(e) => setCampaignName(e.target.value)}
        className="w-full"
      />
      </div>
      <div className="flex items-center">
          <Label className="w-20 min-w-20">다이얼 모드</Label>
          <Select defaultValue='all' value={dailMode} onValueChange={setDailMode}>
              <SelectTrigger className="w-full">
              <SelectValue placeholder="다이얼 모드" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value='all'>전체</SelectItem>
              { dialModeList.map(option => (
                <SelectItem key={option.dial_id} value={option.dial_id+''}>{option.dial_name}</SelectItem>
              )) }
              </SelectContent>
          </Select>
      </div>
      <div className="flex items-center">
          <Label className="w-20 min-w-20">스킬</Label>
          <Select  defaultValue='all' value={skill} onValueChange={setSkill}>
              <SelectTrigger className="w-full">
              <SelectValue placeholder="스킬" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value='all'>전체</SelectItem>
              {tempSkills.map(option => (
                <SelectItem key={option.skill_id} value={option.skill_id+''}>{option.skill_name}</SelectItem>
              ))}
              </SelectContent>
          </Select>
      </div>
      <div className="flex items-center">
        <Label className="w-20 min-w-20">발신번호</Label>
        <CustomInput 
          type="text" 
          value={callNumber}
          onChange={(e) => setCallNumber(e.target.value)}
          className="w-full"
        />
      </div>
        <div className="flex justify-end gap-2">
          {!readonly &&
          <CommonButton onClick={onHeaderSearch}>조회</CommonButton>
          }
        </div>
      {/* ... 나머지 필드들 ... */}
    </div>
  );
}