// components/main/CampaignList.tsx
import { MainDataResponse } from '@/features/auth/types/mainIndex';
import { useMainStore } from '@/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {CampaignHeaderSearch} from './CampaignManagerHeader';
import { useEffect, useState } from 'react';
import TitleWrap from "@/components/shared/TitleWrap";
type Props = {
  campaignId?: string;
  campaignHeaderSearchParam?: CampaignHeaderSearch;
}

export default function CampaignManagerList({campaignId,campaignHeaderSearchParam}: Props) {
  const { campaigns, callingNumbers, schedules , setSelectedCampaign } = useMainStore();
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
    <div>
      <TitleWrap title="캠페인 목록" totalCount={8} />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-2 text-left">No.</th>
                <th className="border p-2 text-left">아이디+이름</th>
                <th className="border p-2 text-left">시작일자</th>
                <th className="border p-2 text-left">종료일자</th>
                <th className="border p-2 text-left">스킬</th>
                <th className="border p-2 text-left">다이얼모드</th>
                <th className="border p-2 text-left">발신번호</th>
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
                  <td className="border p-2">[{campaign.campaign_id}]{campaign.campaign_name}</td>
                  <td className="border p-2">{schedules.filter((schedule) => schedule.campaign_id === campaign.campaign_id)
                  .map((data) => data.start_date)
                  }</td>
                  <td className="border p-2">{schedules.filter((schedule) => schedule.campaign_id === campaign.campaign_id)
                  .map((data) => data.end_date)
                  }</td>
                  <td className="border p-2">{new Date(campaign.creation_time).toLocaleString()}</td>
                  <td className="border p-2">{new Date(campaign.update_time).toLocaleString()}</td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
}