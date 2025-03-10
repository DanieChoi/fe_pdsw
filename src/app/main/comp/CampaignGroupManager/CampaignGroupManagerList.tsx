// components/main/CampaignList.tsx
import { MainDataResponse, TenantListDataResponse } from '@/features/auth/types/mainIndex';
import { useMainStore, useCampainManagerStore } from '@/store';
import {CampaignGroupHeaderSearch} from './CampaignGroupManagerHeader';
import { useEffect, useState, useMemo } from 'react';
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
  { key: "no", name: "NO." },
  { key: "campaignGroupName", name: "캠페인 그룹명" },
  { key: "campaignId", name: "캠페인 아이디" },
  { key: "campaignName", name: "캠페인명" },
];

export interface DataProps {
  no: number;
  tenantId: number;
  tenantName: string;
  campaignGroupId: number;
  campaignGroupName: string;
}

export interface downDataProps {
  no: number;
  campaignGroupId: number;
  campaignGroupName: string;
  campaignId: number;
  campaignName: string;
}

const rows: Row[] = [
  { no: 1, tenantId: 1, tenantName: "00:00",campaignGroupId:1, campaignGroupName: "00:00" },
];

type Props = {
  campaignId?: string;
  campaignGroupHeaderSearchParam?: CampaignGroupHeaderSearch;
  campaignGroupList?: DataProps[];
  groupCampaignListData?: downDataProps[];
  onGroupSelect: (id: string) => void;
}

export default function CampaignGroupManagerList({campaignId,campaignGroupHeaderSearchParam,campaignGroupList,groupCampaignListData
    ,onGroupSelect}: Props) {
  const { tenants, campaigns, selectedCampaign , setSelectedCampaign } = useMainStore();
  const [selectedCampaignGroups, setSelectedCampaignGroups] = useState<Set<number>>(new Set([]));
  const [tempCampaigns, setTempCampaigns] = useState<MainDataResponse[]>([]);
  const [tempDownData, setTempDownData] = useState<DataProps[]>([]);
  const [tempTenants, setTempTenants] = useState<TenantListDataResponse[]>([]);
  const memoizedColumns = useMemo(() => columns, [columns]);
  const memoizedRows = useMemo(() => campaignGroupList || [], [campaignGroupList]);
  const memoizedDownDataRows = useMemo(() => groupCampaignListData || [], [groupCampaignListData]);
    
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

  // useEffect(() => {
  //   if( campaigns && tenantId > -1 ){
  //     setTempCampaigns(campaigns.filter((campaign) => campaign.tenant_id === Number(tenantId)));
  //   }else{
  //     setTempCampaigns(campaigns);
  //   }
  //   if( tempCampaigns.length > 0 ){
  //     setSelectedCampaign(tempCampaigns[0]);
  //   }else{
  //     setSelectedCampaign(null);
  //   }
  // }, [campaigns, tenantId]);

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

  // useEffect(() => {
  //   if( tempTenants.length > 0 ){      
  //     setTempData([]);
  //     tempTenants.map((data, index) => {
  //       setTempData((prev) => [
  //         ...prev,
  //         {
  //           no: index + 1,
  //           tenantId: data.tenant_id,
  //           tenantName: data.tenant_name,
  //           campaignGroupId: data.tenant_id,
  //           campaignGroupName: data.tenant_name,
  //         }
  //       ]);
  //     });
  //     setTenantId(tempTenants[0].tenant_id);
  //   }
  // }, [tempTenants]);

  const handleCellClick = ({ row }: CellClickArgs<Row>) => {
    onGroupSelect(row.campaignGroupId.toString());
  };
  const handleDownCellClick = ({ row }: CellClickArgs<downDataProps>) => {
    // setSelectedCampaign(tempCampaigns.filter((campaign) => campaign.campaign_id === Number(row.campaignGroupId))[0]);
  };

  const handleSelectedRowsChange = (newSelection: Set<number>) => {
    // 혹시 모를 0값이 포함되는 것을 방지
    const filteredSelection = new Set(
        Array.from(newSelection).filter(id => id !== 0)
    );
    setSelectedCampaignGroups(filteredSelection);
  };

  return (
    <div className="w-[40%] shrink-0">
      <TitleWrap title="캠페인 그룹 검색목록" totalCount={memoizedRows.length} />
      <div className="overflow-x-auto">
        <div className="grid-custom-wrap h-[200px]">
          <DataGrid 
            columns={memoizedColumns} 
            rows={memoizedRows} 
            className="grid-custom" 
            rowHeight={30}
            headerRowHeight={30}
            onCellClick={handleCellClick}
            />
        </div>
      </div>
      <TitleWrap title="캠페인 그룹 검색목록" totalCount={tempCampaigns.length} className="mt-5"/>        
      <div className="overflow-x-auto">
        <div className="grid-custom-wrap h-[200px]">
          <DataGrid 
            columns={downColumns} 
            rows={memoizedDownDataRows} 
            className="grid-custom" 
            rowKeyGetter={(row) => row.campaignGroupId}
            selectedRows={selectedCampaignGroups}
            onSelectedRowsChange={handleSelectedRowsChange}
            rowHeight={30}
            headerRowHeight={30}
            onCellClick={handleDownCellClick}
            />
        </div>
      </div>
    </div>
  );
}