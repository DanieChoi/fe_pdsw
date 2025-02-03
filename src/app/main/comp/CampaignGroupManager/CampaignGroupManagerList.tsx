// components/main/CampaignList.tsx
import { MainDataResponse } from '@/features/auth/types/mainIndex';
import { useMainStore, useCampainManagerStore } from '@/store';
import {CampaignGroupHeaderSearch} from './CampaignGroupManagerHeader';
import { useEffect, useState } from 'react';
import TitleWrap from "@/components/shared/TitleWrap";
import { useApiForCampaignAgent } from '@/features/campaignManager/hooks/useApiForCampaignAgent';
import DataGrid from "react-data-grid";

const dialModeList = [
  {dial_id:1, dial_name: 'Power'},
  {dial_id:2, dial_name: 'Progressive'},
  {dial_id:3, dial_name: 'Predictive'},
  {dial_id:4, dial_name: 'System Preview'},
];

type Column = {
  key: string;
  name: string;
};

type Row = {
  no: number;
  division: number;
  startTime: string;
  endTime: string;
};

const columns: Column[] = [
  { key: "no", name: "NO." },
  { key: "division", name: "테넌트" },
  { key: "startTime", name: "캠페인 그룹 아이디" },
  { key: "endTime", name: "캠페인 그룹명" },
];

interface DataProps {
  no: number;
  division: number;
  startTime: string;
  endTime: string;
}

const rows: Row[] = [
  { no: 1, division: 1, startTime: "00:00", endTime: "00:00" },
  { no: 2, division: 2, startTime: "01:00", endTime: "02:00" },
  { no: 3, division: 3, startTime: "02:00", endTime: "03:00" },
];

type Props = {
  campaignId?: string;
  campaignGroupHeaderSearchParam?: CampaignGroupHeaderSearch;
}

export default function CampaignGroupManagerList({campaignId,campaignGroupHeaderSearchParam}: Props) {
  const { tenants, campaigns, selectedCampaign , setSelectedCampaign } = useMainStore();
  const { schedules, callingNumbers, campaignSkills  } = useCampainManagerStore();
  const [tempCampaigns, setTempCampaigns] = useState<MainDataResponse[]>([]);
  const [tempData, setTempData] = useState<DataProps[]>([]);
  
  const handleRowClick = (campaign: MainDataResponse) => {
    setSelectedCampaign(campaign);
  };
  
  // 캠페인 소속 상담사 리스트 요청
  const { mutate: fetchCampaignAgents } = useApiForCampaignAgent({
    onSuccess: (data) => {
      // TODO..
      // setSchedules(data.result_data);  
      // const tempTenantIdArray = tenants.map((tenant) => tenant.tenant_id); 
      // fetchSkills({
      //   tenant_id_array: tempTenantIdArray
      // });   
    }
  });
  
  useEffect(() => {
    if( campaigns && typeof campaignId != 'undefined' && campaignId != '' ){
      setTempCampaigns(campaigns.filter((campaign) => campaign.campaign_id === Number(campaignId)));
    }else{
      setTempCampaigns(campaigns);
    }
    // setSelectedCampaign(tempCampaigns[0]);
  }, [campaigns, campaignId]);

  useEffect(() => {
    if( tempCampaigns.length > 0 ){
      setSelectedCampaign(tempCampaigns[0]);
    }
  }, [tempCampaigns]);

  useEffect(() => {
    if( selectedCampaign ){
      fetchCampaignAgents({ campaign_id: selectedCampaign.campaign_id });
    }
  }, [selectedCampaign]);

  useEffect(() => {
    if( typeof campaignGroupHeaderSearchParam != 'undefined' ){
      // let _tempCampaigns = campaigns;
      // if( campaignHeaderSearchParam.tenantId > 0 ){
      //   _tempCampaigns = _tempCampaigns.filter((campaign) => campaign.tenant_id === Number(campaignHeaderSearchParam.tenantId));
      // }
      // if( campaignHeaderSearchParam.dailMode > 0 ){
      //   _tempCampaigns = _tempCampaigns.filter((campaign) => campaign.dial_mode === Number(campaignHeaderSearchParam.dailMode));
      // }
      // if( campaignHeaderSearchParam.campaignName != '' ){
      //   _tempCampaigns = _tempCampaigns.filter((campaign) => campaign.campaign_name.includes(campaignHeaderSearchParam.campaignName));
      // }
      // if( campaignHeaderSearchParam.callNumber != '' ){
      //   const tempCallNumber = callingNumbers.filter((callingNumber) => callingNumber.calling_number.includes(campaignHeaderSearchParam.callNumber));
      //   _tempCampaigns = _tempCampaigns.filter((campaign) => 
      //     tempCallNumber.some(callingNumber => callingNumber.campaign_id === campaign.campaign_id)
      //   );
      // }
      // if( campaignHeaderSearchParam.skill > 0 ){
      //   const tempCampaignSkills = campaignSkills.filter((campaignSkill) => campaignSkill.skill_id.includes(campaignHeaderSearchParam.skill));
      //   _tempCampaigns = _tempCampaigns.filter((campaign) => 
      //     tempCampaignSkills.some(campaignSkill => campaignSkill.campaign_id === campaign.campaign_id)
      //   );
      // }
      
      // setTempCampaigns(_tempCampaigns);
      // if( tempCampaigns.length > 0 ){
      //   setSelectedCampaign(tempCampaigns[0]);
      // }else{
      //   setSelectedCampaign(null);
      // }
    }
  }, [campaignGroupHeaderSearchParam]);


  return (
    <div className="w-[40%] shrink-0">
      <TitleWrap title="캠페인 그룹 검색목록" totalCount={tempCampaigns.length} />
      <div className="overflow-x-auto">
        <div className="grid-custom-wrap h-[200px]">
          <DataGrid 
            columns={columns} 
            rows={tempData} 
            className="grid-custom" 
            rowHeight={26}
            headerRowHeight={26}
            />
        </div>
      </div>
      <TitleWrap title="캠페인 그룹 검색목록" totalCount={tempCampaigns.length} />        
      <div className="overflow-x-auto">
        <div className="grid-custom-wrap h-[200px]">
          <DataGrid 
            columns={columns} 
            rows={tempData} 
            className="grid-custom" 
            rowHeight={26}
            headerRowHeight={26}
            />
        </div>
      </div>
    </div>
  );
}