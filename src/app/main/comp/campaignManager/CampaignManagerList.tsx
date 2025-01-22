// components/main/CampaignList.tsx
import { MainDataResponse } from '@/features/auth/types/mainIndex';
import { useMainStore, useCampainManagerStore } from '@/store';
import {CampaignHeaderSearch} from './CampaignManagerHeader';
import { useEffect, useState } from 'react';
import TitleWrap from "@/components/shared/TitleWrap";

const dialModeList = [
  {dial_id:1, dial_name: 'Power'},
  {dial_id:2, dial_name: 'Progressive'},
  {dial_id:3, dial_name: 'Predictive'},
  {dial_id:4, dial_name: 'System Preview'},
];

type Props = {
  campaignId?: string;
  campaignHeaderSearchParam?: CampaignHeaderSearch;
}

export default function CampaignManagerList({campaignId,campaignHeaderSearchParam}: Props) {
  const { campaigns , setSelectedCampaign } = useMainStore();
  const { schedules, callingNumbers, campaignSkills  } = useCampainManagerStore();
  const [tempCampaigns, setTempCampaigns] = useState<MainDataResponse[]>(campaigns);
  
  const handleRowClick = (campaign: MainDataResponse) => {
    setSelectedCampaign(campaign);
  };
  
  useEffect(() => {
    if( campaigns && typeof campaignId != 'undefined' ){
      setTempCampaigns(campaigns.filter((campaign) => campaign.campaign_id === Number(campaignId)));
    }else{
      setTempCampaigns(campaigns);
    }
    if( tempCampaigns.length > 0 ){
      setSelectedCampaign(tempCampaigns[0]);
    }else{
      setSelectedCampaign(null);
    }
  }, [campaigns, setSelectedCampaign, tempCampaigns,campaignId]);

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
      if( campaignHeaderSearchParam.callNumber != '' ){
        const tempCallNumber = callingNumbers.filter((callingNumber) => callingNumber.calling_number.includes(campaignHeaderSearchParam.callNumber));
        _tempCampaigns = _tempCampaigns.filter((campaign) => 
          tempCallNumber.some(callingNumber => callingNumber.campaign_id === campaign.campaign_id)
        );
      }
      if( campaignHeaderSearchParam.skill > 0 ){
        const tempCampaignSkills = campaignSkills.filter((campaignSkill) => campaignSkill.skill_id.includes(campaignHeaderSearchParam.skill));
        _tempCampaigns = _tempCampaigns.filter((campaign) => 
          tempCampaignSkills.some(campaignSkill => campaignSkill.campaign_id === campaign.campaign_id)
        );
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
    <div className="w-[40%] shrink-0">
      <TitleWrap title="캠페인 목록" totalCount={tempCampaigns.length} />
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
                  .map((data) => data.start_date.length == 8? data.start_date.substring(0,4)+'-'+data.start_date.substring(4,6)+'-'+data.start_date.substring(6,8):'')
                  }</td>
                  <td className="border p-2">{schedules.filter((schedule) => schedule.campaign_id === campaign.campaign_id)
                  .map((data) => data.end_date.length == 8? data.end_date.substring(0,4)+'-'+data.end_date.substring(4,6)+'-'+data.end_date.substring(6,8):'')
                  }</td>
                  <td className="border p-2">{campaignSkills.filter((skill) => skill.campaign_id === campaign.campaign_id)
                  .map((data) => data.skill_id)
                  .join(',')
                  }</td>
                  <td className="border p-2">{dialModeList.filter((dialMode) => dialMode.dial_id === campaign.dial_mode)
                  .map((data) => data.dial_name)
                  }</td>
                  <td className="border p-2">{callingNumbers.filter((callingNumber) => callingNumber.campaign_id === campaign.campaign_id)
                  .map((data) => data.calling_number)
                  }</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
}