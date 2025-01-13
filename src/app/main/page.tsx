// src/app/main/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect, useState } from "react";
import useStore from '@/features/auth/hooks/store';
import { useApiForMain } from '@/features/auth/hooks/useApiForMain'
import { MainDataResponse } from '@/features/auth/types/mainIndex';

interface MainFormData {
  tenant_id: number
  session_key: string
}

export default function MainPage() {
  const { id, tenant_id, session_key } = useStore.getState();
  const [tenantId, setTenantId] = useState(999);
  const [campaignData, setCampaignData] = useState<MainDataResponse[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedCampaign, setSelectedCampaign] = useState<MainDataResponse | null>(null);

  const mainData: MainFormData = {
    tenant_id: tenant_id,
    session_key: session_key
  }

  const { mutate: main } = useApiForMain({
    onSuccess: (response) => {
      console.log('API Response:', {
        code: response.result_code,
        message: response.result_msg,
        data: response.result_data
      });
      setCampaignData(response.result_data);
      setTotalCount(response.total_count);
    },
    onError: (error) => {
      console.error('에러 발생:', error);
    }
  });

  useEffect(() => {
    if (session_key !== '') {
      setTenantId(tenant_id);
      main(mainData);
    }
  }, [tenant_id, session_key]);

  const handleRowClick = (campaign: MainDataResponse) => {
    setSelectedCampaign(campaign);
  };

  return (
    <div className="space-y-6">
      {/* 상단 필터/검색 영역 */}
      <div className="flex space-x-4 items-center">
        <select className="p-2 border rounded">
          <option>전체</option>
        </select>
        <input 
          type="text" 
          placeholder="캠페인명" 
          className="p-2 border rounded"
        />
      </div>

      {/* 캠페인 목록 */}
      <Card>
        <CardHeader>
          <CardTitle>캠페인 목록 (총 {totalCount}건)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border p-2 text-left">No.</th>
                  <th className="border p-2 text-left">캠페인 ID</th>
                  <th className="border p-2 text-left">캠페인명</th>
                  <th className="border p-2 text-left">설명</th>
                  <th className="border p-2 text-left">테넌트 ID</th>
                  <th className="border p-2 text-left">생성일</th>
                  <th className="border p-2 text-left">수정일</th>
                  <th className="border p-2 text-left">상태</th>
                </tr>
              </thead>
              <tbody>
                {campaignData.map((campaign, index) => (
                  <tr 
                    key={campaign.campaign_id}
                    onClick={() => handleRowClick(campaign)}
                    className="cursor-pointer hover:bg-gray-50"
                  >
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">{campaign.campaign_id}</td>
                    <td className="border p-2">{campaign.campaign_name}</td>
                    <td className="border p-2">{campaign.campaign_desc}</td>
                    <td className="border p-2">{campaign.tenant_id}</td>
                    <td className="border p-2">{new Date(campaign.creation_time).toLocaleString()}</td>
                    <td className="border p-2">{new Date(campaign.update_time).toLocaleString()}</td>
                    <td className="border p-2">{campaign.start_flag ? '진행중' : '대기'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* 상세 정보 영역 */}
      <Card>
        <CardHeader>
          <CardTitle>캠페인 상세정보</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">캠페인 ID</label>
              <input 
                type="text" 
                value={selectedCampaign?.campaign_id || ''} 
                className="mt-1 p-2 border rounded w-full" 
                readOnly 
              />
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
              <label className="block text-sm font-medium text-gray-700">설명</label>
              <input 
                type="text" 
                value={selectedCampaign?.campaign_desc || ''} 
                className="mt-1 p-2 border rounded w-full" 
                readOnly 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">사이트 코드</label>
              <input 
                type="text" 
                value={selectedCampaign?.site_code || ''} 
                className="mt-1 p-2 border rounded w-full" 
                readOnly 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">서비스 코드</label>
              <input 
                type="text" 
                value={selectedCampaign?.service_code || ''} 
                className="mt-1 p-2 border rounded w-full" 
                readOnly 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">다이얼 모드</label>
              <input 
                type="text" 
                value={selectedCampaign?.dial_mode || ''} 
                className="mt-1 p-2 border rounded w-full" 
                readOnly 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">생성자</label>
              <input 
                type="text" 
                value={selectedCampaign?.creation_user || ''} 
                className="mt-1 p-2 border rounded w-full" 
                readOnly 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">생성일시</label>
              <input 
                type="text" 
                value={selectedCampaign ? new Date(selectedCampaign.creation_time).toLocaleString() : ''} 
                className="mt-1 p-2 border rounded w-full" 
                readOnly 
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}