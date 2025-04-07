// src/app/main/comp/NewCampaignManager/comp/CampaignBasicInfoForm.tsx
"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import ISelectorForTeanantForCreateNewCampaign from './ISelectorForTeanantForCreateNewCampaign';
import SkillListPopup from '@/components/shared/layout/SkillListPopup';

const dialModeList = [
  { dial_id: 1, dial_name: 'Power' },
  { dial_id: 2, dial_name: 'Progressive' },
  { dial_id: 3, dial_name: 'Predictive' },
  { dial_id: 4, dial_name: 'System Preview' },
];

type Props = {
  tenantId?: string;
  tempCampaignInfo: any;
  inputSkills: string;
  onUpdateSkill: (param: string) => void;
  onInputChange: (value: string, field: string) => void;
  onSelectChange: (value: string, field: 'tenant' | 'dialMode') => void;
}

const CampaignBasicInfoForm = ({
  tenantId,
  tempCampaignInfo,
  inputSkills,
  onUpdateSkill,
  onInputChange,
  onSelectChange
}: Props) => {
  const [skillPopupState, setSkillPopupState] = useState({
    isOpen: false,
    type: '1',
  });

  const handleOpenSkillPopup = () => {
    if (tempCampaignInfo.tenant_id < 0 && !tenantId) {
      alert('테넌트를 선택해 주세요.');
    } else {
      setSkillPopupState({ ...skillPopupState, isOpen: true });
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-x-[24px] gap-y-2">
        <div className='flex items-center gap-2'>
          <Label className="w-[90px] min-w-[90px]">캠페인 아이디</Label>
          <CustomInput
            type="number"
            value={tempCampaignInfo.campaign_id}
            onChange={(e) => onInputChange(e.target.value, 'campaign_id')}
            min="0"
          />
        </div>

        <ISelectorForTeanantForCreateNewCampaign
          tenantId={tenantId}
          onChange={(value) => onSelectChange(value.toString(), 'tenant')}
        />

        <div className='flex items-center gap-2'>
          <Label className="w-[74px] min-w-[74px]">캠페인명</Label>
          <CustomInput
            value={tempCampaignInfo.campaign_name || ''}
            onChange={(e) => onInputChange(e.target.value, 'campaign_name')}
          />
        </div>

        <div className='flex items-center gap-2'>
          <Label className="w-[90px] min-w-[90px]">다이얼 모드</Label>
          <Select
            onValueChange={(value) => onSelectChange(value, 'dialMode')}
            value={tempCampaignInfo.dial_mode + ''}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="다이얼 모드 선택" />
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
          <Label className="w-[74px] min-w-[74px]">스킬</Label>
          <CustomInput value={inputSkills} className="w-full" readOnly />
          <button
            className="absolute right-2 top-[52%] transform -translate-y-1/2"
            onClick={handleOpenSkillPopup}
          >
            <Image src="/skill-popup.svg" alt="스킬팝업" width={12} height={12} />
          </button>
        </div>

        <div className='flex items-center gap-2'>
          <Label className="w-[74px] min-w-[74px]">발신번호</Label>
          {/* <CustomInput value={inputCallingNumber} className="w-full" readOnly /> */}
          <CustomInput value={""} className="w-full" readOnly />
        </div>

        <div className="flex items-center gap-2 col-span-3">
          <Label className="w-[90px] min-w-[90px]">설명</Label>
          <CustomInput
            value={tempCampaignInfo.campaign_desc || ''}
            className="w-full"
            onChange={(e) => onInputChange(e.target.value, 'campaign_desc')}
          />
        </div>
      </div>

      {/* SkillListPopup 내부 관리 */}
      <SkillListPopup
        param={inputSkills.split(',').map((id) => Number(id))}
        tenantId={tempCampaignInfo.tenant_id}
        type={skillPopupState.type}
        isOpen={skillPopupState.isOpen}
        onConfirm={(param) => {
          onUpdateSkill(param);
          setSkillPopupState((prev) => ({ ...prev, isOpen: false }));
        }}
        onCancle={() => setSkillPopupState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
};

export default CampaignBasicInfoForm;
