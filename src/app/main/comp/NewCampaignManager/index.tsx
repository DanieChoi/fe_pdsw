// C:\Users\terec\fe_pdsw\src\app\main\comp\CampaignManager\index.tsx
import React, { useState, useEffect } from 'react'
import NewCampaignManagerDetail from './NewCampaignManagerDetail';
// import { useApiForSchedules } from '@/features/campaignManager/hooks/useApiForSchedules';
// import { useApiForSkills } from '@/features/campaignManager/hooks/useApiForSkills';
// import { useApiForCallingNumber } from '@/features/campaignManager/hooks/useApiForCallingNumber';
// import { useApiForCampaignSkill } from '@/features/campaignManager/hooks/useApiForCampaignSkill';
// import { useApiForPhoneDescription } from '@/features/campaignManager/hooks/useApiForPhoneDescription';
import { useMainStore, useCampainManagerStore, useTabStore } from '@/store';

type Props = {
  tenantId?: string;
}

const NewCampaignManager = ({tenantId}: Props) => {
  
  const { tenants } = useMainStore();
  const { campaignIdForUpdateFromSideMenu } = useTabStore();

  const { setSchedules, setSkills, setCallingNumbers, setCampaignSkills, setPhoneDescriptions } = useCampainManagerStore();
  
  // const [campaignHeaderSearchParam,setCampaignHeaderSearchParam] = useState<CampaignHeaderSearch>();
  // const handleCampaignHeaderSearch = (param:CampaignHeaderSearch) => {
  //   setCampaignHeaderSearchParam(param);
  // };
  
  // 스케줄 조회
  // const { mutate: fetchSchedules } = useApiForSchedules({
  //   onSuccess: (data) => {
  //     setSchedules(data.result_data);  
  //     const tempTenantIdArray = tenants.map((tenant) => tenant.tenant_id); 
  //     fetchSkills({
  //       tenant_id_array: tempTenantIdArray
  //     });   
  //   }
  // });
  // 스킬 조회
  // const { mutate: fetchSkills } = useApiForSkills({
  //   onSuccess: (data) => {
  //     setSkills(data.result_data);
  //     fetchCallingNumbers({
  //       session_key: '',
  //       tenant_id: 0,
  //     });
  //   }
  // });
  // 전화번호 조회
  // const { mutate: fetchCallingNumbers } = useApiForCallingNumber({
  //   onSuccess: (data) => {
  //     setCallingNumbers(data.result_data);
  //     fetchCampaignSkills({
  //       session_key: '',
  //       tenant_id: 0,
  //     });
  //   }
  // });
  // 캠페인스킬 조회
  // const { mutate: fetchCampaignSkills } = useApiForCampaignSkill({
  //   onSuccess: (data) => {
  //     setCampaignSkills(data.result_data);
  //     fetchPhoneDescriptions({
  //       session_key: '',
  //       tenant_id: 0,
  //     });
  //   }
  // });
  // 전화번호설명 템플릿 조회
  // const { mutate: fetchPhoneDescriptions } = useApiForPhoneDescription({
  //   onSuccess: (data) => {
  //     setPhoneDescriptions(data.result_data);
  //   }
  // });
  
  useEffect(() => {
    if( typeof tenantId !== 'undefined'){
      console.log(tenantId);
    }
  }, [tenantId]);

  return (
    <div>
      <div className='flex flex-col gap-4'>
          <div className="flex gap-5">
            <NewCampaignManagerDetail tenantId={tenantId}/>
          </div> 
        </div>
    </div>
  )
}

export default NewCampaignManager