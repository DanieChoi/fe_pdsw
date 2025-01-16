// components/main/CampaignList.tsx
import { MainDataResponse } from '@/features/auth/types/mainIndex';
import { useMainStore } from '@/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {CampaignHeaderSearch} from './CampaignManagerHeader';
import { useEffect, useState } from 'react';

type Props = {
  campaignId?: string;
  campaignHeaderSearchParam?: CampaignHeaderSearch;
}

export default function CampaignManagerList({campaignId,campaignHeaderSearchParam}: Props) {
  const { campaigns, totalCount, setSelectedCampaign } = useMainStore();
  const [tempCampaigns, setTempCampaigns] = useState<MainDataResponse[]>(campaigns);
  
  const handleRowClick = (campaign: MainDataResponse) => {
    setSelectedCampaign(campaign);
  };
  
  useEffect(() => {
    if( typeof campaignId != 'undefined' ){
      setTempCampaigns(campaigns.filter((campaign) => campaign.campaign_id === Number(campaignId)));
    }
    if( tempCampaigns.length > 0 ){
      setSelectedCampaign(tempCampaigns[0]);
    }else{
      setSelectedCampaign(null);
    }
  }, [campaignId]);

  useEffect(() => {
    if( typeof campaignHeaderSearchParam != 'undefined' && typeof campaignId === 'undefined' ){
      let _tempCampaigns = campaigns;
      if( campaignHeaderSearchParam.tenantId > 0 ){
        _tempCampaigns = _tempCampaigns.filter((campaign) => campaign.tenant_id === Number(campaignHeaderSearchParam.tenantId));
      }
      if( campaignHeaderSearchParam.dailMode > 0 ){
        _tempCampaigns = _tempCampaigns.filter((campaign) => campaign.dial_mode === Number(campaignHeaderSearchParam.dailMode));
      }
      if( campaignHeaderSearchParam.campaignName != '' ){
        _tempCampaigns = _tempCampaigns.filter((campaign) => campaign.campaign_name.includes(campaignHeaderSearchParam.campaignName));
      }
      
      setTempCampaigns(_tempCampaigns);
      if( tempCampaigns.length > 0 ){
        setSelectedCampaign(tempCampaigns[0]);
      }else{
        setSelectedCampaign(null);
      }
    }
  }, [campaignHeaderSearchParam]);


  return (
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
              {tempCampaigns.map((campaign, index) => (
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
  );
}