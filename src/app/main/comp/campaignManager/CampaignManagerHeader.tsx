"use client";
// components/main/CampaignManager.tsx
import React, { useEffect, useState } from 'react';
import { useMainStore } from '@/store';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const dialModeList = [
  {dial_id:1, dial_name: 'Power'},
  {dial_id:2, dial_name: 'Progressive'},
  {dial_id:3, dial_name: 'Predictive'},
  {dial_id:4, dial_name: 'System Preview'},
];

export default function CampaignManager() {
  const { tenants,selectedCampaign } = useMainStore();
  const [tenantId, setTenantId] = useState(''); // 테넌트

  useEffect(() => {
    if ( selectedCampaign ) {
      setTenantId(selectedCampaign.tenant_id+'');
    }
  }, [selectedCampaign]);

  const handleSelectChange = (event:any) => {
    
  }

  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="flex items-center">
          <Label className="w-20 min-w-20">테넌트</Label>
          <Select value={tenantId} onValueChange={setTenantId}>
              <SelectTrigger className="w-full">
              <SelectValue placeholder="테넌트" />
              </SelectTrigger>
              <SelectContent>
              { tenants.map(option => (
                <SelectItem key={option.tenant_id} value={option.tenant_id+''}>{option.tenant_name}</SelectItem>
              )) }
              </SelectContent>
          </Select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">캠페인이름</label>
        <input 
          type="text" 
          value={selectedCampaign?.campaign_name || ''} 
          className="mt-1 p-2 border rounded w-full" 
          readOnly 
        />
      </div>
      <div>
        <label htmlFor="filter-select" className="block text-sm font-medium text-gray-700 mb-1">
          다이얼 모드
        </label>
        <select
          id="filter-select"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={handleSelectChange}
          // defaultValue={initialFilter}
          value={selectedCampaign?.dial_mode || ''}
        >
          {dialModeList.map(option => (
            <option key={option.dial_id} value={option.dial_id}>
              {option.dial_name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="filter-select" className="block text-sm font-medium text-gray-700 mb-1">
          스킬
        </label>
        <select
          id="filter-select"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={handleSelectChange}
          // defaultValue={initialFilter}
        >
          {/* {filterOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))} */}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">발신번호</label>
        <input 
          type="text" 
          value={selectedCampaign?.campaign_name || ''} 
          className="mt-1 p-2 border rounded w-full" 
          readOnly 
        />
      </div>
      {/* ... 나머지 필드들 ... */}
    </div>
  );
}