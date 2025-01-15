"use client";
// components/main/CampaignManager.tsx
import { useMainStore } from '@/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CampaignManager() {
  const selectedCampaign = useMainStore((state) => state.selectedCampaign);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label htmlFor="filter-select" className="block text-sm font-medium text-gray-700 mb-1">
          테넌트
        </label>
        <select
          id="filter-select"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          // onChange={handleFilterChange}
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
          // onChange={handleFilterChange}
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
        <label htmlFor="filter-select" className="block text-sm font-medium text-gray-700 mb-1">
          스킬
        </label>
        <select
          id="filter-select"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          // onChange={handleFilterChange}
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