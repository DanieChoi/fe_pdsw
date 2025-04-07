// src\app\main\comp\CampaignManager\index.tsx
import React, { useState, useEffect } from 'react'
import CampaignManagerHeader, { CampaignHeaderSearch } from './CampaignManagerHeader';
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
  onClose: () => { },
  onCancle: () => { },
};

type Props = {
  campaignId?: string;
  isOpen?: boolean;
  onCampaignPopupClose?: () => void;
}

const CampaignManager = ({ campaignId, isOpen, onCampaignPopupClose }: Props) => {

  const { tenants, campaigns, setCampaigns } = useMainStore();
  const { campaignIdForUpdateFromSideMenu } = useTabStore();
  const [_campaignId, _setCampaignId] = useState<string>('');
  const [alertState, setAlertState] = useState(errorMessage);
  const router = useRouter();

  const { setSchedules, setSkills, setCallingNumbers, setCampaignSkills, setPhoneDescriptions } = useCampainManagerStore();

  const [campaignHeaderSearchParam, setCampaignHeaderSearchParam] = useState<CampaignHeaderSearch>();
  const handleCampaignHeaderSearch = (param: CampaignHeaderSearch) => {
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
    }, onError: (data) => {
      if (data.message.split('||')[0] === '5') {
        setAlertState({
          ...errorMessage,
          isOpen: true,
          message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
          type: '2',
          onClose: () => goLogin(),
        });
      }
    }
  });
  const goLogin = () => {
    Cookies.remove('session_key');
    router.push('/login');
  }

  // 스킬 조회
  const { mutate: fetchSkills } = useApiForSkills({
    onSuccess: (data) => {
      setSkills(data.result_data);
      console.log("스킬 패치 결과 : ", data.result_data);
      fetchCallingNumbers({
        session_key: '',
        tenant_id: 0,
      });
    }
  });

  // 전화번호 조회
  const { mutate: fetchCallingNumbers } = useApiForCallingNumber({
    onSuccess: (data) => {
      setCallingNumbers(data.result_data || []);
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
      setPhoneDescriptions(data.result_data || []);
    }
  });

  useEffect(() => {
    if (tenants && campaigns) {
      const tempTenantIdArray = tenants.map((tenant) => tenant.tenant_id);
      fetchSchedules({
        tenant_id_array: tempTenantIdArray
      });
    }
  }, [tenants, campaigns]);

  useEffect(() => {
    console.log('campaignIdForUpdateFromSideMenu:', campaignIdForUpdateFromSideMenu);
    console.log('campaignId:', campaignId);
    if (typeof campaignId === 'undefined') {
      _setCampaignId(campaignIdForUpdateFromSideMenu || '');
    } else {
      _setCampaignId(campaignId);
    }
  }, [campaignIdForUpdateFromSideMenu, campaignId]);

  return (
    // 스크롤바 공간을 항상 확보하도록 클래스 수정
    <div className='compaign-wrap stable-scrollbar' style={{
      overflowY: 'scroll', // 항상 스크롤바 표시
      scrollbarGutter: 'stable', // 스크롤바 공간 확보
      boxSizing: 'border-box',
      width: '100%',
      height: '100%',
      contain: 'content', // 내부 변경이 외부 레이아웃에 영향 최소화
    }}>
      <div className='flex flex-col gap-[15px] limit-width'>
        <CampaignManagerHeader campaignId={_campaignId} onSearch={handleCampaignHeaderSearch} />
        <div className="flex gap-[30px]">
          <CampaignManagerList campaignId={_campaignId} campaignHeaderSearchParam={campaignHeaderSearchParam} />
          <CampaignManagerDetail isOpen={isOpen} onCampaignPopupClose={onCampaignPopupClose} />
        </div>
      </div>
      <CustomAlert
        message={alertState.message}
        title={alertState.title}
        type={alertState.type}
        isOpen={alertState.isOpen}
        onClose={() => {
          alertState.onClose()
        }}
        onCancle={() => setAlertState((prev) => ({ ...prev, isOpen: false }))} />
    </div>
  )
}

export default CampaignManager