"use client";
import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import ISelectorForTeanantForCreateNewCampaign from './ISelectorForTeanantForCreateNewCampaign';
import SkillListPopup from '@/components/shared/layout/SkillListPopup';
import { Search, Plus } from "lucide-react";

const dialModeList = [
  { dial_id: 1, dial_name: 'Power' },
  { dial_id: 2, dial_name: 'Progressive' },
  { dial_id: 3, dial_name: 'Predictive' },
  { dial_id: 4, dial_name: 'System Preview' },
];

type Props = {
  tenantId?: string;
  tempCampaignInfo: any;
  inputSkills: string; // 예: "1,2,3,"
  onUpdateSkill: (param: string) => void;
  onInputChange: (value: string, field: string) => void;
  onSelectChange: (value: string, field: 'tenant' | 'dialMode') => void;
};

const CampaignBasicInfoForm = ({
  tenantId,
  tempCampaignInfo,
  inputSkills,
  onUpdateSkill,
  onInputChange,
  onSelectChange
}: Props) => {
  const [skillPopupState, setSkillPopupState] = useState({ isOpen: false, type: '1' });
  const [callingNumber, setCallingNumber] = useState('');
  const [formattedSkills, setFormattedSkills] = useState('');

  // inputSkills 변경 시 화면에 표시할 형식으로 가공
  useEffect(() => {
    // 쉼표로 구분된 스킬 ID 문자열에서 마지막 쉼표를 제거하고 표시
    const skillsDisplay = inputSkills.endsWith(',') 
      ? inputSkills.slice(0, -1) 
      : inputSkills;
      
    setFormattedSkills(skillsDisplay);
  }, [inputSkills]);

  // 스킬 선택 결과를 처리하는 함수
  const handleSelectSkills = (param: string) => {
    onUpdateSkill(param);
  };

  // 스킬 팝업 열기
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
        <div className="flex items-center gap-2">
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

        <div className="flex items-center gap-2">
          <Label className="w-[74px] min-w-[74px]">캠페인명</Label>
          <CustomInput
            value={tempCampaignInfo.campaign_name || ''}
            onChange={(e) => onInputChange(e.target.value, 'campaign_name')}
          />
        </div>

        <div className="flex items-center gap-2">
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

        <div className="flex items-center gap-2 relative">
          <Label className="w-[74px] min-w-[74px]">스킬</Label>
          <CustomInput 
            value={formattedSkills} 
            className="w-full" 
            readOnly
            placeholder="스킬을 선택해주세요" 
          />
          <button
            className="absolute right-2 top-[52%] transform -translate-y-1/2 hover:bg-gray-100 p-1 rounded-full"
            onClick={handleOpenSkillPopup}
            title="스킬 선택"
            type="button"
          >
            <Search size={16} className="text-gray-500" />
          </button>
        </div>

        <div className="flex items-center gap-2 relative">
          <Label className="w-[74px] min-w-[74px]">발신번호</Label>
          <CustomInput 
            value={callingNumber} 
            onChange={(e) => setCallingNumber(e.target.value)}
            className="w-full" 
            placeholder="발신번호를 입력하세요"
          />
          <button
            className="absolute right-2 top-[52%] transform -translate-y-1/2 hover:bg-gray-100 p-1 rounded-full"
            onClick={() => { /* 발신번호 추가 로직 */ }}
            title="발신번호 추가"
            type="button"
          >
            <Plus size={16} className="text-gray-500" />
          </button>
        </div>

        <div className="flex items-center gap-2 col-span-3">
          <Label className="w-[90px] min-w-[90px]">설명</Label>
          <CustomInput
            value={tempCampaignInfo.campaign_desc || ''}
            className="w-full"
            onChange={(e) => onInputChange(e.target.value, 'campaign_desc')}
            placeholder="캠페인 설명을 입력하세요"
          />
        </div>
      </div>

      {/* SkillListPopup 컴포넌트 */}
      {skillPopupState.isOpen && (
        <SkillListPopup
          param={inputSkills.split(',').filter(id => id !== '').map(id => Number(id))}
          tenantId={Number(tempCampaignInfo.tenant_id || tenantId)}
          type={skillPopupState.type}
          isOpen={skillPopupState.isOpen}
          onConfirm={(param) => {
            handleSelectSkills(param);
            setSkillPopupState(prev => ({ ...prev, isOpen: false }));
          }}
          onCancle={() => setSkillPopupState(prev => ({ ...prev, isOpen: false }))}
        />
      )}
    </div>
  );
};

export default CampaignBasicInfoForm;