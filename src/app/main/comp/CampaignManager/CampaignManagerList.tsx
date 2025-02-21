// components/main/CampaignManagerList.tsx
import { MainDataResponse } from '@/features/auth/types/mainIndex';
import { useMainStore, useCampainManagerStore, useTabStore } from '@/store';
import {CampaignHeaderSearch} from './CampaignManagerHeader';
import { useEffect, useState } from 'react';
import TitleWrap from "@/components/shared/TitleWrap";
import DataGrid, { CellClickArgs } from "react-data-grid";

const dialModeList = [
  {dial_id:1, dial_name: 'Power'},
  {dial_id:2, dial_name: 'Progressive'},
  {dial_id:3, dial_name: 'Predictive'},
  {dial_id:4, dial_name: 'System Preview'},
];

type Column = {
  key: string;
  name: string;
  width?: number;
};

type Row = {
  no: number;
  campaignId: number;
  idName: string;
  startDate: string;
  endDate: string;
  skill: string;
  dialMode: string;
  callingNumber: string;
};

const columns: Column[] = [
  { key: "no", name: "NO.",width: 50  },
  { key: "idName", name: "아이디+이름" },
  { key: "startDate", name: "시작일자" },
  { key: "endDate", name: "종료일자" },
  { key: "skill", name: "스킬" ,width: 50},
  { key: "dialMode", name: "다이얼모드" },
  { key: "callingNumber", name: "발신번호" },
];

interface DataProps {
  no: number;
  campaignId: number;
  idName: string;
  startDate: string;
  endDate: string;
  skill: string;
  dialMode: string;
  callingNumber: string;
}

const rows: Row[] = [
  { no: 1,campaignId:1, idName: '1', startDate: "00:00", endDate: "00:00", skill: "00:00", dialMode: "00:00", callingNumber: "00:00" },
];

type Props = {
  campaignId?: string;
  campaignHeaderSearchParam?: CampaignHeaderSearch;
}

export default function CampaignManagerList({campaignId,campaignHeaderSearchParam}: Props) {
  const { campaigns, setSelectedCampaign } = useMainStore();
  const { setCampaignIdForUpdateFromSideMenu } = useTabStore();
  const { schedules, callingNumbers, campaignSkills  } = useCampainManagerStore();
  const [tempCampaigns, setTempCampaigns] = useState<MainDataResponse[]>([]);
  const [tempData, setTempData] = useState<DataProps[]>([]);
  
  const handleRowClick = (campaign: MainDataResponse) => {
    setSelectedCampaign(campaign);
  };
  
  useEffect(() => {
    if( campaigns && typeof campaignId != 'undefined' && campaignId != '' ){
      const tempList = campaigns.filter((campaign) => campaign.campaign_id === Number(campaignId));
      if( tempList.length > 0 ){
        setTempCampaigns(tempList);
      }else{
        setTempCampaigns(campaigns);
      }
    }else{
      setTempCampaigns(campaigns);
    }
    // setSelectedCampaign(tempCampaigns[0]);
  }, [campaigns, campaignId]);

  useEffect(() => {
    if( tempCampaigns.length > 0 ){
      setTempData([]);
      tempCampaigns.map((data, index) => {
        setTempData((prev) => [
          ...prev,
          {
            no: index + 1,
            campaignId: data.campaign_id,
            idName: '['+data.campaign_id+']'+data.campaign_name,
            startDate: schedules.filter((schedule) => schedule.campaign_id === data.campaign_id)
            .map((data) => data.start_date.length == 8? data.start_date.substring(0,4)+'-'+data.start_date.substring(4,6)+'-'+data.start_date.substring(6,8):'').join(','),
            endDate: schedules.filter((schedule) => schedule.campaign_id === data.campaign_id)
            .map((data) => data.end_date.length == 8? data.end_date.substring(0,4)+'-'+data.end_date.substring(4,6)+'-'+data.end_date.substring(6,8):'').join(','),
            skill: campaignSkills.filter((skill) => skill.campaign_id === data.campaign_id)
            .map((data) => data.skill_id)
            .join(','),
            dialMode: dialModeList.filter((dialMode) => dialMode.dial_id === data.dial_mode)
                  .map((data) => data.dial_name).join(','),
            callingNumber: callingNumbers.filter((callingNumber) => callingNumber.campaign_id === data.campaign_id)
            .map((data) => data.calling_number).join(',')
          }
        ]);
      });
      
      setSelectedCampaign(tempCampaigns[0]);
    }else{
      setTempData([]);
    }
  }, [tempCampaigns,schedules,campaignSkills,dialModeList,callingNumbers]);

  useEffect(() => {
    if( typeof campaignHeaderSearchParam != 'undefined' && campaignId === '' ){
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
  }, [campaignHeaderSearchParam,campaignId]);

  const handleCellClick = ({ row }: CellClickArgs<Row>) => {
    setSelectedCampaign(campaigns.filter((campaign) => campaign.campaign_id === Number(row.campaignId))[0]);    
    setCampaignIdForUpdateFromSideMenu(row.campaignId+'');
  };

  return (
    <div className="w-[40%] shrink-0">
      <TitleWrap title="캠페인 목록" totalCount={tempCampaigns.length} />
      <div className="overflow-x-auto">
        <div className="grid-custom-wrap h-[500px]">
          <DataGrid 
            columns={columns} 
            rows={tempData} 
            className="grid-custom" 
            rowHeight={26}
            headerRowHeight={26}
            onCellClick={handleCellClick}
            />
        </div>
      </div>
    </div>
  );
}