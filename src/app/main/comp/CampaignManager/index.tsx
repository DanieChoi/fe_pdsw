// src/app/main/comp/CampaignManager/index.tsx
"use client";

import React, { useState, useEffect } from 'react'
import CampaignManagerHeader, { CampaignHeaderSearch } from './CampaignManagerHeader';
import CampaignManagerDetail from './CampaignManagerDetail';
import CampaignManagerList from './CampaignManagerList';
import { useApiForSchedules } from '@/features/campaignManager/hooks/useApiForSchedules';
import { useApiForSkills } from '@/features/campaignManager/hooks/useApiForSkills';
import { useApiForCallingNumber } from '@/features/campaignManager/hooks/useApiForCallingNumber';
import { useApiForCampaignSkill } from '@/features/campaignManager/hooks/useApiForCampaignSkill';
import { useApiForPhoneDescription } from '@/features/campaignManager/hooks/useApiForPhoneDescription';
import { useMainStore, useCampainManagerStore, useTabStore, useAuthStore } from '@/store';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import CustomAlert, { CustomAlertRequest } from '@/components/shared/layout/CustomAlert';
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';

const errorMessage = {
  isOpen: false,
  message: '',
  title: '로그인',
  type: '0',
  onClose: () => { },
  onCancle: () => { },
};

type Props = {
  campaignId?: string;
  isOpen?: boolean;
  onCampaignPopupClose?: () => void;
};

const CampaignManager = ({ campaignId, isOpen, onCampaignPopupClose }: Props) => {
  const { tenants, campaigns, selectedCampaign, setSelectedCampaign, setCampaigns } = useMainStore();
  const { campaignIdForUpdateFromSideMenu } = useTabStore();
  const { session_key, tenant_id } = useAuthStore();
  const [masterCampaignId, setMasterCampaignId] = useState<string>('');
  const [alertState, setAlertState] = useState(errorMessage);
  const router = useRouter();
  const [headerInit, setHeaderInit] = useState<boolean>(false);

  const { setSchedules, setSkills, setCallingNumbers, setCampaignSkills, setPhoneDescriptions
    ,schedules,campaignSkills,callingNumbers
   } = useCampainManagerStore();

  const [campaignHeaderSearchParam, setCampaignHeaderSearchParam] = useState<CampaignHeaderSearch>();
  const handleCampaignHeaderSearch = (param: CampaignHeaderSearch) => {
    setCampaignHeaderSearchParam(param);
  };

  // 스케줄 조회
  const { mutate: fetchSchedules } = useApiForSchedules({
    onSuccess: (data) => {
      setSchedules(data.result_data);
      const tempTenantIdArray = tenants.map((tenant) => tenant.tenant_id);
      fetchSkills({ tenant_id_array: tempTenantIdArray });
    },
    onError: (data) => {
      if (data.message.split('||')[0] === '5') {
        setAlertState({
          ...errorMessage,
          isOpen: true,
          message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
          type: '2',
          onClose: () => goLogin(),
        });
        Cookies.remove('session_key');
      }
    }
  });

  const goLogin = () => {
    router.push('/login');
  };
  // 스킬 조회
  const { mutate: fetchSkills } = useApiForSkills({
    onSuccess: (data) => {
      setSkills(data.result_data || []);
      fetchCallingNumbers({ session_key: session_key, tenant_id: 0 });
    },
    retry: 0,
  });
  // 전화번호 조회
  const { mutate: fetchCallingNumbers } = useApiForCallingNumber({
    onSuccess: (data) => {
      setCallingNumbers(data.result_data || []);
      fetchCampaignSkills({ session_key: session_key, tenant_id: 0 });
    }
  });
  // 캠페인스킬 조회
  const { mutate: fetchCampaignSkills } = useApiForCampaignSkill({
    onSuccess: (data) => {
      setCampaignSkills(data.result_data || []);
      fetchPhoneDescriptions({ session_key: session_key, tenant_id: 0 });
    }
  });
  // 전화번호설명 템플릿 조회
  const { mutate: fetchPhoneDescriptions } = useApiForPhoneDescription({
    onSuccess: (data) => {
      setPhoneDescriptions(data.result_data || []);
    }
  });

  //초기화실행.
  useEffect(() => {
    if (tenants && campaigns) {
      const tempTenantIdArray = tenants.map((tenant) => tenant.tenant_id);
      fetchSchedules({ tenant_id_array: tempTenantIdArray });
    }
  }, [tenants, campaigns]);

  useEffect(() => {
    if ( selectedCampaign != null) {
      setSelectedCampaign(selectedCampaign);
    }
  }, [selectedCampaign]);

  useEffect(() => {
    setHeaderInit(true);
    if (typeof campaignId === 'undefined') {
      setMasterCampaignId(campaignIdForUpdateFromSideMenu || '');
    } else {
      setMasterCampaignId(campaignId);
    }
  }, [campaignIdForUpdateFromSideMenu, campaignId]);

  const handleRowClick = (campaignId: string) => {
    setMasterCampaignId(campaignId);
  };

  const handleHeaderInit = () => {
    setHeaderInit(false);
  };

  const handleDetailInit = (campaign_id:number) => {
    console.log('campaign_id:: '+campaign_id);
    setMasterCampaignId(campaign_id+'');
    fetchMain({
      session_key: session_key,
      tenant_id: tenant_id,
    });
  };

  // 캠페인 정보 조회 API 호출
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      setCampaigns(data.result_data);
    }
  });
  
  return (
    <div className='compaign-wrap stable-scrollbar' style={{
      overflowY: 'scroll',
      scrollbarGutter: 'stable',
      boxSizing: 'border-box',
      width: '100%',
      height: '100%',
      contain: 'content',
    }}>
      <div className='flex flex-col gap-[15px] limit-width'>
        <CampaignManagerHeader init={headerInit} setInit={handleHeaderInit} onSearch={handleCampaignHeaderSearch} />
        <div className="flex gap-[30px]">
          <CampaignManagerList
            campaignId={campaignIdForUpdateFromSideMenu || masterCampaignId}
            onRowClick={handleRowClick}
            campaignHeaderSearchParam={campaignHeaderSearchParam}
          />
          <CampaignManagerDetail
            campaignId={campaignIdForUpdateFromSideMenu || masterCampaignId}
            isOpen={isOpen}
            onCampaignPopupClose={onCampaignPopupClose}
            setInit={handleDetailInit}
          />
        </div>
      </div>
      <CustomAlert
        message={alertState.message}
        title={alertState.title}
        type={alertState.type}
        isOpen={alertState.isOpen}
        onClose={alertState.onClose}
        onCancle={() => setAlertState(prev => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
};

export default CampaignManager;
