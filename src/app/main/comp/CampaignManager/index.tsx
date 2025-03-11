// src\app\main\comp\CampaignManager\index.tsx
import React, { useState, useEffect } from 'react'
import CampaignManagerHeader, {CampaignHeaderSearch} from './CampaignManagerHeader';
import CampaignManagerDetail from './CampaignManagerDetail';
import CampaignManagerList from './CampaignManagerList';
import { useApiForSchedules } from '@/features/campaignManager/hooks/useApiForSchedules';
import { useApiForSkills } from '@/features/campaignManager/hooks/useApiForSkills';
import { useApiForCallingNumber } from '@/features/campaignManager/hooks/useApiForCallingNumber';
import { useApiForCampaignSkill } from '@/features/campaignManager/hooks/useApiForCampaignSkill';
import { useApiForPhoneDescription } from '@/features/campaignManager/hooks/useApiForPhoneDescription';
import { useMainStore, useCampainManagerStore, useTabStore } from '@/store';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import CustomAlert, { CustomAlertRequest } from '@/components/shared/layout/CustomAlert';

const errorMessage = {
  isOpen: false,
  message: '',
  title: '로그인',
  type: '0',
};

type Props = {
  campaignId?: string;
}

const CampaignManager = ({campaignId}: Props) => {
  
  const { tenants } = useMainStore();
  const { campaignIdForUpdateFromSideMenu } = useTabStore();
  const [_campaignId, _setCampaignId] = useState<string>('');
  const [alertState, setAlertState] = useState(errorMessage);
  const router = useRouter();

  const { setSchedules, setSkills, setCallingNumbers, setCampaignSkills, setPhoneDescriptions } = useCampainManagerStore();
  
  const [campaignHeaderSearchParam,setCampaignHeaderSearchParam] = useState<CampaignHeaderSearch>();
  const handleCampaignHeaderSearch = (param:CampaignHeaderSearch) => {
    setCampaignHeaderSearchParam(param);
  };
  
  // 스케줄 조회
  const { mutate: fetchSchedules } = useApiForSchedules({
    onSuccess: (data) => {
      setSchedules(data.result_data);  
      const tempTenantIdArray = tenants.map((tenant) => tenant.tenant_id); 
      fetchSkills({
        tenant_id_array: tempTenantIdArray
      });   
    },onError: (data) => {      
      if (data.message.split('||')[0] === '5') {
        setAlertState({
          ...errorMessage,
          isOpen: true,
          message: '로그인 정보가 없습니다.',
        });
        Cookies.remove('session_key');
        setTimeout(() => {
          router.push('/login');
        }, 1000);
      }
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
    if( tenants ){
      const tempTenantIdArray = tenants.map((tenant) => tenant.tenant_id);
      fetchSchedules({
        tenant_id_array: tempTenantIdArray
      });
    }
  }, [tenants]);

  useEffect(() => {
    console.log('campaignIdForUpdateFromSideMenu:',campaignIdForUpdateFromSideMenu);
    console.log('campaignId:',campaignId);
    if( typeof campaignId === 'undefined' ){
      _setCampaignId(campaignIdForUpdateFromSideMenu||'');
    }else{
      _setCampaignId(campaignId);
    }
  }, [campaignIdForUpdateFromSideMenu,campaignId]);

  return (
    <div className='compaign-wrap'>
      <div className='flex flex-col gap-[15px] limit-width'>
          <CampaignManagerHeader campaignId={_campaignId} onSearch={handleCampaignHeaderSearch}/>
          <div className="flex gap-[30px]">
            <CampaignManagerList campaignId={_campaignId} campaignHeaderSearchParam={campaignHeaderSearchParam}/>
            <CampaignManagerDetail />
          </div>
        </div>
      <CustomAlert
        message={alertState.message}
        title={alertState.title}
        type={alertState.type}
        isOpen={alertState.isOpen}
        onClose={() => setAlertState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  )
}

export default CampaignManager