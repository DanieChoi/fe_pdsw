// C:\Users\terec\fe_pdsw\src\app\main\comp\CampaignManager\index.tsx
import React, { useState, useEffect } from 'react'
import CampaignManagerHeader, {CampaignHeaderSearch} from './CampaignManagerHeader';
import CampaignManagerDetail from './CampaignManagerDetail';
import CampaignManagerList from './CampaignManagerList';
import { useApiForSchedules } from '@/features/campaignManager/hooks/useApiForSchedules';
import { useApiForSkills } from '@/features/campaignManager/hooks/useApiForSkills';
import { useApiForCallingNumber } from '@/features/campaignManager/hooks/useApiForCallingNumber';
import { useApiForCampaignSkill } from '@/features/campaignManager/hooks/useApiForCampaignSkill';
import { useApiForPhoneDescription } from '@/features/campaignManager/hooks/useApiForPhoneDescription';
import { useMainStore, useCampainManagerStore } from '@/store';

type Props = {
  campaignId?: string;
}

const CampaignManager = ({campaignId}: Props) => {
  
  const { tenants } = useMainStore();
  const { setSchedules, setSkills, setCallingNumbers, setCampaignSkills, setPhoneDescriptions } = useCampainManagerStore();
  
  const [campaignHeaderSearchParam,setCampaignHeaderSearchParam] = useState<CampaignHeaderSearch>();
  const handleCampaignHeaderSearch = (param:CampaignHeaderSearch) => {
    setCampaignHeaderSearchParam(param);
  };
  
  // 스케줄 조회
  const { mutate: fetchSchedules } = useApiForSchedules({
    onSuccess: (data) => {
      setSchedules(data.result_data);      
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
    }
  });
  
  useEffect(() => {
    const tempTenantIdArray = tenants.map((tenant) => tenant.tenant_id);
    fetchSchedules({
      tenant_id_array: tempTenantIdArray
    });
    fetchSkills({
      tenant_id_array: tempTenantIdArray
    });
  }, []);

  return (
    <div>
      <div className='flex flex-col gap-4'>
          <CampaignManagerHeader campaignId={campaignId} onSearch={handleCampaignHeaderSearch}/>
          <div className="grid grid-cols-[4fr_6fr] gap-5">
            <CampaignManagerList campaignId={campaignId} campaignHeaderSearchParam={campaignHeaderSearchParam}/>
            <CampaignManagerDetail />
          </div>
        </div>
    </div>
  )
}

export default CampaignManager