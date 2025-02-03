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

export interface CampaignGroupHeaderSearch {
  tenantId: number;
  campaignGroupName: string;
}

type Props = {
  onSearch: (param:CampaignGroupHeaderSearch) => void;
}

export default function CampaignGroupManagerHeader({onSearch}:Props) {
  const { tenants } = useMainStore();
  const [tenantId, setTenantId] = useState('all'); // 테넌트
  const [campaignGroupName, setCampaignGroupName] = useState(''); // 캠페인이름
  const [readonly, setReadonly] = useState(false);

  const onHeaderSearch = () => {
    const param:CampaignGroupHeaderSearch = {
      tenantId: tenantId === 'all'?-1:Number(tenantId),
      campaignGroupName: campaignGroupName,
    }
    onSearch(param);
  }

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
        <Label className="w-20 min-w-20">캠페인 그룹명</Label>
        <CustomInput 
        type="text" 
        value={campaignGroupName}
        onChange={(e) => setCampaignGroupName(e.target.value)}
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