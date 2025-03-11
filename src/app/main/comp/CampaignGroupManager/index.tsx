// C:\Users\terec\fe_pdsw\src\app\main\comp\CampaignManager\index.tsx
import React, { useState, useEffect } from 'react'
import CampaignGroupManagerHeader, { CampaignGroupHeaderSearch } from './CampaignGroupManagerHeader';
import CampaignGroupManagerDetail from './CampaignGroupManagerDetail';
import CampaignGroupManagerList, { DataProps, downDataProps } from './CampaignGroupManagerList';
import { useApiForSchedules } from '@/features/campaignManager/hooks/useApiForSchedules';
import { useApiForSkills } from '@/features/campaignManager/hooks/useApiForSkills';
import { useApiForCallingNumber } from '@/features/campaignManager/hooks/useApiForCallingNumber';
import { useApiForCampaignSkill } from '@/features/campaignManager/hooks/useApiForCampaignSkill';
import { useApiForPhoneDescription } from '@/features/campaignManager/hooks/useApiForPhoneDescription';
import { useApiForCampaignGroupSearch } from '@/features/campaignGroupManager/hooks/useApiForCampaignGroupSearch';
import { useApiForCampaignGroupCampaignList } from '@/features/campaignGroupManager/hooks/useApiForCampaignGroupCampaignList';
import { useMainStore, useCampainManagerStore, useTabStore } from '@/store';
import { 
  CampaignGroupItem,
  CampaignGroupGampaignListItem
} from '@/features/campaignManager/types/typeForCampaignGroupForSideBar';

const initData: DataProps = { no: 0, tenantId: 0, tenantName: '', campaignGroupId: 0, campaignGroupName: '' };
type Props = {
  groupId?: string;
  groupName?: string;
}

const CampaignGroupManager = ({ groupId, groupName }: Props) => {

  const { tenants } = useMainStore();
  const { campaignIdForUpdateFromSideMenu } = useTabStore();
  const [_campaignGroupList, _setCampasignGroupList] = useState<DataProps[]>([]);
  const [tempCampaignListData, setTempCampaignListData] = useState<downDataProps[]>([]);
  const [groupInfo, setGroupInfo] = useState<DataProps>(initData);
  const [_groupId, _setGroupId] = useState<number>(groupId ? parseInt(groupId) : -1);
  const [campaignId, setCampaignId] = useState<number>(0);
  const [campaignGroupCampaignListData, setCampaignGroupCampaignListData] = useState<CampaignGroupGampaignListItem[]>([]);

  const { setSchedules, setSkills, setCallingNumbers, setCampaignSkills, setPhoneDescriptions } = useCampainManagerStore();

  const [campaignGroupHeaderSearchParam, setCampaignGroupHeaderSearchParam] = useState<CampaignGroupHeaderSearch>();
  const handleCampaignHeaderSearch = (param: CampaignGroupHeaderSearch) => {
    setCampaignGroupHeaderSearchParam(param);
  };

  const handleGroupSelect = (id: string) => {
    _setGroupId(parseInt(id));
    setGroupInfo(_campaignGroupList.find((item) => item.campaignGroupId === parseInt(id)) || initData);
    setCampaignId(tempCampaignListData.find((item) => item.campaignGroupId === parseInt(id))?.campaignId || 0);
  };

  const handleCampaignSelect = (id: string) => {
    setCampaignId(parseInt(id));
  };

  const handleInit = () => {
    fetchCampaignGroupSearch(null);
  };

  // 스케줄 조회
  const { mutate: fetchSchedules } = useApiForSchedules({
    onSuccess: (data) => {
      setSchedules(data.result_data);
      const tempTenantIdArray = tenants.map((tenant) => tenant.tenant_id);
      fetchSkills({
        tenant_id_array: tempTenantIdArray
      });
    }
  });
  // 스킬 조회
  const { mutate: fetchSkills } = useApiForSkills({
    onSuccess: (data) => {
      setSkills(data.result_data);
      fetchCallingNumbers({
        session_key: '',
        tenant_id: 0,
      });
    }
  });
  // 전화번호 조회
  const { mutate: fetchCallingNumbers } = useApiForCallingNumber({
    onSuccess: (data) => {
      setCallingNumbers(data.result_data);
      fetchCampaignSkills({
        session_key: '',
        tenant_id: 0,
      });
    }
  });
  // 캠페인스킬 조회
  const { mutate: fetchCampaignSkills } = useApiForCampaignSkill({
    onSuccess: (data) => {
      setCampaignSkills(data.result_data);
      fetchPhoneDescriptions({
        session_key: '',
        tenant_id: 0,
      });
    }
  });
  // 전화번호설명 템플릿 조회
  const { mutate: fetchPhoneDescriptions } = useApiForPhoneDescription({
    onSuccess: (data) => {
      setPhoneDescriptions(data.result_data);
      handleInit();
    }
  });
  
  // 캠페인 그룹 조회
  const { mutate: fetchCampaignGroupSearch } = useApiForCampaignGroupSearch({
    onSuccess: (data) => {      
      const tempRows: DataProps[] = [];
      if( data.result_data.length > 0 ){
        for (let i = 0; i < tenants.length; i++) {
          for (let j = 0; j < data.result_data.length; j++) {
            if (tenants[i].tenant_id === data.result_data[j].tenant_id && _groupId < 0) {
              tempRows.push({
                no: tempRows.length + 1,
                tenantId: tenants[i].tenant_id,
                tenantName: tenants[i].tenant_name,
                campaignGroupId: data.result_data[j].group_id,
                campaignGroupName: data.result_data[j].group_name,
              });
              if (j === 0) {
                _setGroupId(data.result_data[j].group_id);
                setGroupInfo(tempRows[0]);
              }
            }else if( tenants[i].tenant_id === data.result_data[j].tenant_id && _groupId > -1 && _groupId === data.result_data[j].group_id ){
              tempRows.push({
                no: tempRows.length + 1,
                tenantId: tenants[i].tenant_id,
                tenantName: tenants[i].tenant_name,
                campaignGroupId: data.result_data[j].group_id,
                campaignGroupName: data.result_data[j].group_name,
              });
            }
          }
        }
      }
      _setCampasignGroupList(tempRows);
      if (tempRows.length == 0) {
        _setGroupId(-1);
        setGroupInfo(initData);
      }
      fetchCampaignGroupCampaignList(null);
    }
  });

  // 캠페인 그룹 소속 캠페인 데이터 로드 시 
  const { mutate: fetchCampaignGroupCampaignList } = useApiForCampaignGroupCampaignList({
    onSuccess: (data) => {      
      setCampaignGroupCampaignListData(data.result_data || []);
    }
  });

  // 캠페인 그룹 소속 캠페인 데이터 로드 시 
  useEffect(() => {
    if (_campaignGroupList && _groupId > 0) {
      const tempCampaignListRows: downDataProps[] = [];
      if (campaignGroupCampaignListData && campaignGroupCampaignListData) {
        for (let i = 0; i < _campaignGroupList.length; i++) {
          for (let j = 0; j < campaignGroupCampaignListData.length; j++) {
            if (_groupId === _campaignGroupList[i].campaignGroupId && _groupId === campaignGroupCampaignListData[j].group_id) {
              tempCampaignListRows.push({
                no: tempCampaignListRows.length + 1,
                campaignGroupId: _campaignGroupList[i].campaignGroupId,
                campaignGroupName: _campaignGroupList[i].campaignGroupName,
                campaignId: campaignGroupCampaignListData[j].campaign_id,
                campaignName: campaignGroupCampaignListData[j].campaign_name,
              });
              if (j === 0) {
                setCampaignId(campaignGroupCampaignListData[j].campaign_id);
              }
            }
          }
        }
      }
      setTempCampaignListData(tempCampaignListRows);
      if (tempCampaignListRows.length == 0) {
        setCampaignId(0);
      }
    }
  }, [_groupId, _campaignGroupList, campaignGroupCampaignListData]);

  useEffect(() => {
    if (tenants) {
      const tempTenantIdArray = tenants.map((tenant) => tenant.tenant_id);
      fetchSchedules({
        tenant_id_array: tempTenantIdArray
      });
    }
  }, [tenants]);

  return (
    <div>
      <div className='flex flex-col gap-[15px] limit-width'>
        <CampaignGroupManagerHeader onSearch={handleCampaignHeaderSearch} />
        <div className="flex gap-[30px]">
          <CampaignGroupManagerList campaignId={campaignIdForUpdateFromSideMenu || ''} campaignGroupHeaderSearchParam={campaignGroupHeaderSearchParam}
            campaignGroupList={_campaignGroupList} groupCampaignListData={tempCampaignListData}
            onGroupSelect={handleGroupSelect} onCampaignSelect={handleCampaignSelect}
          />
          <CampaignGroupManagerDetail groupInfo={groupInfo} campaignId={campaignId} onInit={handleInit} />
        </div>
      </div>
    </div>
  )
}

export default CampaignGroupManager