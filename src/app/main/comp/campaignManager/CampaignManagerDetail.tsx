// components/main/CampaignDetail.tsx
import { useMainStore } from '@/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const dialModeList = [
  {dial_id:1, dial_name: 'Power'},
  {dial_id:2, dial_name: 'Progressive'},
  {dial_id:3, dial_name: 'Predictive'},
  {dial_id:4, dial_name: 'System Preview'},
];

export default function CampaignDetail() {
  const selectedCampaign = useMainStore((state) => state.selectedCampaign);
  const { tenants } = useMainStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>캠페인 상세정보</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">캠페인 아이디</label>
            <input 
              type="text" 
              value={selectedCampaign?.campaign_id || ''} 
              className="mt-1 p-2 border rounded w-full" 
              readOnly 
            />
          </div>
          <div>
            <label htmlFor="filter-select" className="block text-sm font-medium text-gray-700 mb-1">
              테넌트
            </label>
            <select
              id="filter-select"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              // onChange={handleFilterChange}
              // defaultValue={initialFilter}
              value={selectedCampaign?.tenant_id || ''}
            >
              <option value=''>
              </option>
              { tenants.map(option => (
                <option key={option.tenant_id} value={option.tenant_id}>
                  {option.tenant_name}
                </option>
              )) }
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">캠페인명</label>
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
          {/* ... 나머지 필드들 ... */}
        </div>
      </CardContent>
    </Card>
  );
}