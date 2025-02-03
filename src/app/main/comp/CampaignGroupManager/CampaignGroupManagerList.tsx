// components/main/CampaignList.tsx
import { MainDataResponse, TenantListDataResponse } from '@/features/auth/types/mainIndex';
import { useMainStore, useCampainManagerStore } from '@/store';
import {CampaignGroupHeaderSearch} from './CampaignGroupManagerHeader';
import { useEffect, useState } from 'react';
import TitleWrap from "@/components/shared/TitleWrap";
import { useApiForCampaignAgent } from '@/features/campaignManager/hooks/useApiForCampaignAgent';
import DataGrid, { CellClickArgs, SelectColumn } from "react-data-grid";

type Column = {
  key: string;
  name: string;
};

type Row = {
  no: number;
  tenantId: number;
  tenantName: string;
  campaignGroupId: number;
  campaignGroupName: string;
};

const columns: Column[] = [
  { key: "no", name: "NO." },
  { key: "tenantName", name: "테넌트" },
  { key: "campaignGroupId", name: "캠페인 그룹 아이디" },
  { key: "campaignGroupName", name: "캠페인 그룹명" },
];

const downColumns = [
    SelectColumn,
  { key: "no", name: "NO.",width: 50 },
  { key: "tenantName", name: "테넌트" },
  { key: "campaignGroupId", name: "캠페인 그룹 아이디" },
  { key: "campaignGroupName", name: "캠페인 그룹명" },
];

interface DataProps {
  no: number;
  tenantId: number;
  tenantName: string;
  campaignGroupId: number;
  campaignGroupName: string;
}

const rows: Row[] = [
  { no: 1, tenantId: 1, tenantName: "00:00",campaignGroupId:1, campaignGroupName: "00:00" },
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
  const [tempDownData, setTempDownData] = useState<DataProps[]>([]);
  const [tenantId, setTenantId] = useState<number>(-1);
  const [tempTenants, setTempTenants] = useState<TenantListDataResponse[]>([]);
  
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
    if( tenants && tenants.length > 0 ){
      setTempTenants(tenants);
    }
  }, [tenants]);

  useEffect(() => {
    if( campaigns && tenantId > -1 ){
      setTempCampaigns(campaigns.filter((campaign) => campaign.tenant_id === Number(tenantId)));
    }else{
      setTempCampaigns(campaigns);
    }
    if( tempCampaigns.length > 0 ){
      setSelectedCampaign(tempCampaigns[0]);
    }else{
      setSelectedCampaign(null);
    }
  }, [campaigns, tenantId]);

  useEffect(() => {
    if( tempCampaigns.length > 0 ){
      setTempDownData([]);
      tempCampaigns.map((data, index) => {
        setTempDownData((prev) => [
          ...prev,
          {
            no: index + 1,
            tenantId: data.tenant_id,
            tenantName: tempTenants.filter((tenant) => tenant.tenant_id === data.tenant_id)
            .map((data) => data.tenant_name)[0],
            campaignGroupId: data.campaign_id,
            campaignGroupName: data.campaign_name,
          }
        ]);
      });
      setSelectedCampaign(tempCampaigns[0]);
    }else{
      setTempDownData([]);
    }
  }, [tempCampaigns]);

  useEffect(() => {
    if( selectedCampaign ){
      fetchCampaignAgents({ campaign_id: selectedCampaign.campaign_id });
    }
  }, [selectedCampaign]);

  useEffect(() => {
    if( typeof campaignGroupHeaderSearchParam != 'undefined' ){
      let _tempTenants = tenants;
      if( campaignGroupHeaderSearchParam.tenantId > -1 ){
        _tempTenants = _tempTenants.filter((tenant) => tenant.tenant_id === Number(campaignGroupHeaderSearchParam.tenantId));
      }
      if( campaignGroupHeaderSearchParam.campaignGroupName != '' ){
        _tempTenants = _tempTenants.filter((tenant) => tenant.tenant_name.includes(campaignGroupHeaderSearchParam.campaignGroupName));
      }
      setTempTenants(_tempTenants);
    }
  }, [campaignGroupHeaderSearchParam, tenants]);

  useEffect(() => {
    if( tempTenants.length > 0 ){      
      setTempData([]);
      tempTenants.map((data, index) => {
        setTempData((prev) => [
          ...prev,
          {
            no: index + 1,
            tenantId: data.tenant_id,
            tenantName: data.tenant_name,
            campaignGroupId: data.tenant_id,
            campaignGroupName: data.tenant_name,
          }
        ]);
      });
      setTenantId(tempTenants[0].tenant_id);
    }
  }, [tempTenants]);

  const handleCellClick = ({ row }: CellClickArgs<Row>) => {
    setTenantId(row.tenantId);
  };
  const handleDownCellClick = ({ row }: CellClickArgs<Row>) => {
    setSelectedCampaign(tempCampaigns.filter((campaign) => campaign.campaign_id === Number(row.campaignGroupId))[0]);
  };


  return (
    <div className="w-[40%] shrink-0">
      <TitleWrap title="캠페인 그룹 검색목록" totalCount={tempTenants.length} />
      <div className="overflow-x-auto">
        <div className="grid-custom-wrap h-[200px]">
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
      <TitleWrap title="캠페인 그룹 검색목록" totalCount={tempCampaigns.length} />        
      <div className="overflow-x-auto">
        <div className="grid-custom-wrap h-[200px]">
          <DataGrid 
            columns={downColumns} 
            rows={tempDownData} 
            className="grid-custom" 
            rowHeight={26}
            headerRowHeight={26}
            onCellClick={handleDownCellClick}
            />
        </div>
      </div>
    </div>
  );
}