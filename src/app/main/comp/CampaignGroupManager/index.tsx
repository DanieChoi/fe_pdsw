// C:\Users\terec\fe_pdsw\src\app\main\comp\CampaignManager\index.tsx
import React, { useState, useEffect } from 'react'
import CampaignGroupManagerHeader, {CampaignGroupHeaderSearch} from './CampaignGroupManagerHeader';
import CampaignGroupManagerDetail from './CampaignGroupManagerDetail';
import CampaignGroupManagerList, {DataProps,downDataProps} from './CampaignGroupManagerList';
import { useApiForPhoneDescription } from '@/features/campaignManager/hooks/useApiForPhoneDescription';
import { useMainStore, useCampainManagerStore, useTabStore } from '@/store';
import { useApiForCampaignGroupList,useApiForCampaignGroupCampaignList } from "@/features/preferences/hooks/useApiForCampaignGroupList";

type Props = {
  campaignId?: string;
}

const CampaignGroupManager = ({campaignId}: Props) => {
  
  const { tenants } = useMainStore();
  const { campaignIdForUpdateFromSideMenu } = useTabStore();
  const [tempData, setTempData] = useState<DataProps[]>([]);
  const [tempCampaignListData, setTempCampaignListData] = useState<downDataProps[]>([]);
  const [groupId, setGroupId] = useState<number>(-1);

  const { setPhoneDescriptions } = useCampainManagerStore();
  
  const [campaignGroupHeaderSearchParam,setCampaignGroupHeaderSearchParam] = useState<CampaignGroupHeaderSearch>();
  const handleCampaignHeaderSearch = (param:CampaignGroupHeaderSearch) => {
    setCampaignGroupHeaderSearchParam(param);
  };
  
  // 전화번호설명 템플릿 조회
  const { mutate: fetchPhoneDescriptions } = useApiForPhoneDescription({
    onSuccess: (data) => {
      setPhoneDescriptions(data.result_data);
    }
  });
  // 캠페인 그룹 데이터 가져오기
  const { data: campaignGroupData, isLoading: isLoadingGroup, error: errorGroup } = useApiForCampaignGroupList(0);
  
  // 캠페인 그룹 데이터 가져오기
  const { data: campaignGroupCampaignListData, isLoading: isLoadingGroupCampaignList, error: errorGroupCampaignList } = useApiForCampaignGroupCampaignList(0);

  const handleGroupSelect = (id: string) => {
    console.log("캠페인 그룹 선택:", id);
    setGroupId(parseInt(id));
  };

  // 캠페인 그룹 데이터 로드 시 
  useEffect(() => {
    if (campaignGroupCampaignListData && campaignGroupData && groupId > 0) {
      const tempCampaignListRows: downDataProps[] = [];
      for(let i=0; i<campaignGroupData.result_data.length; i++){
        for(let j=0; j<campaignGroupCampaignListData.result_data.length; j++){
          if(groupId == campaignGroupData.result_data[i].group_id && groupId === campaignGroupCampaignListData.result_data[j].group_id){
            tempCampaignListRows.push({
              no: tempCampaignListRows.length + 1,
              campaignGroupId: campaignGroupData.result_data[i].group_id,
              campaignGroupName: campaignGroupData.result_data[i].group_name,      
              campaignId: campaignGroupCampaignListData.result_data[j].campaign_id,
              campaignName: campaignGroupCampaignListData.result_data[j].campaign_name,              
            });
          }
        }          
      }
      setTempCampaignListData(tempCampaignListRows);
    }
  }, [groupId,campaignGroupData,campaignGroupCampaignListData]);

  // 캠페인 그룹 데이터 로드 시 
  useEffect(() => {
    if (tenants && campaignGroupData) {
      const tempRows: DataProps[] = [];
      for(let i=0; i<tenants.length; i++){
        for(let j=0; j<campaignGroupData.result_data.length; j++){
          if(tenants[i].tenant_id === campaignGroupData.result_data[j].tenant_id){
            tempRows.push({
              no: tempRows.length + 1,
              tenantId: tenants[i].tenant_id,
              tenantName: tenants[i].tenant_name,
              campaignGroupId: campaignGroupData.result_data[j].group_id,
              campaignGroupName: campaignGroupData.result_data[j].group_name,              
            });
          }
        }          
      }
      setTempData(tempRows);
    }
  }, [tenants,campaignGroupData]);

  return (
    <div>
      <div className='flex flex-col gap-[15px] limit-width'>
          <CampaignGroupManagerHeader onSearch={handleCampaignHeaderSearch}/>
          <div className="flex gap-[30px]">
            <CampaignGroupManagerList campaignId={campaignIdForUpdateFromSideMenu||''} campaignGroupHeaderSearchParam={campaignGroupHeaderSearchParam}
              campaignGroupList={tempData} groupCampaignListData={tempCampaignListData}
              onGroupSelect={handleGroupSelect}
            />
            <CampaignGroupManagerDetail />
          </div>
        </div>
    </div>
  )
}

export default CampaignGroupManager