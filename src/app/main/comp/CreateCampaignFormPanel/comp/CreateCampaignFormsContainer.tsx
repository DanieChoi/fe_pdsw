// C:\nproject\fe_pdsw\src\app\main\comp\NewCampaignManager\NewCampaignManagerDetail.tsx

"use client";

import { useMainStore, useCampainManagerStore, useTabStore } from '@/store';
import Image from 'next/image';
import TitleWrap from "@/components/shared/TitleWrap";
import CampaignTab from '../../CampaignManager/CampaignTab';
import { MainDataResponse } from '@/features/auth/types/mainIndex';
import {
  CampaignSkillUpdateRequest,
  CampaignScheDuleListDataResponse,
  CampaignDialSpeedUpdateRequest
} from '@/features/campaignManager/types/campaignManagerIndex';
import { useEffect, useState } from 'react';
import { useApiForCampaignManagerInsert } from '@/features/campaignManager/hooks/useApiForCampaignManagerInsert';
import { useApiForCampaignScheduleInsert } from '@/features/campaignManager/hooks/useApiForCampaignScheduleInsert';
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';

import CustomAlert, { CustomAlertRequest } from '@/components/shared/layout/CustomAlert';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import CampaignBasicInfoForm from './CampaignBasicInfoForm';

const errorMessage: CustomAlertRequest = {
  isOpen: false,
  message: '',
  title: '캠페인',
  type: '1',
  onClose: () => {},
  onCancle: () => {},
};

const CampaignSkillInfo: CampaignSkillUpdateRequest = {
  campaign_id: 0,
  skill_id: [],
};

const CampaignDialSpeedInfo: CampaignDialSpeedUpdateRequest = {
  campaign_id: 0,
  tenant_id: 0,
  dial_speed: 0,
};

export const CampaignInfo: MainDataResponse = {
  campaign_id: 0,
  campaign_name: '',
  campaign_desc: '',
  site_code: 0,
  service_code: 0,
  start_flag: 0,
  end_flag: 0,
  dial_mode: 1,
  callback_kind: 0,
  delete_flag: 0,
  list_count: 0,
  list_redial_query: '',
  next_campaign: 0,
  token_id: 0,
  phone_order: '',
  phone_dial_try: [0, 0, 0, 0, 0],
  dial_try_interval: 20,
  trunk_access_code: '',
  DDD_code: '',
  power_divert_queue: 0,
  max_ring: 0,
  detect_mode: 0,
  auto_dial_interval: 30,
  creation_user: '',
  creation_time: '',
  creation_ip: '',
  update_user: '',
  update_time: '',
  update_ip: '',
  dial_phone_id: 0,
  tenant_id: -1,
  alarm_answer_count: 0,
  dial_speed: 0,
  parent_campaign: 0,
  overdial_abandon_time: 2,
  list_alarm_count: 100,
  supervisor_phone: '',
  reuse_count: 0,
  use_counsel_result: 0,
  use_list_alarm: 0,
  redial_strategy: [
    "7:2.1.0/3.1.0/4.1.0/5.1.0/6.1.0/10.1.0/99.1.0/2501.1.0/2502.1.0/2503.1.0/2504.1.0/2505.1.0/2506.1.0",
    "7:2.1.0/3.1.0/4.1.0/5.1.0/6.1.0/10.1.0/99.1.0/2501.1.0/2502.1.0/2503.1.0/2504.1.0/2505.1.0/2506.1.0",
    "7:2.1.0/3.1.0/4.1.0/5.1.0/6.1.0/10.1.0/99.1.0/2501.1.0/2502.1.0/2503.1.0/2504.1.0/2505.1.0/2506.1.0",
    "7:2.1.0/3.1.0/4.1.0/5.1.0/6.1.0/10.1.0/99.1.0/2501.1.0/2502.1.0/2503.1.0/2504.1.0/2505.1.0/2506.1.0",
    "7:2.1.0/3.1.0/4.1.0/5.1.0/6.1.0/10.1.0/99.1.0/2501.1.0/2502.1.0/2503.1.0/2504.1.0/2505.1.0/2506.1.0"
  ],
  dial_mode_option: 0,
  user_option: '',
  campaign_status: 0,
};

const today = new Date();
const CampaignScheduleInfo: CampaignScheDuleListDataResponse = {
  campaign_id: 0,
  tenant_id: 0,
  start_date: today.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + ('0' + today.getDate()).slice(-2),
  end_date: today.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + ('0' + today.getDate()).slice(-2),
  start_time: [],
  end_time: []
};

const CampaignCallPacingTabInfo = {
  changeYn: false,
  campaignDialSpeedChangeYn: false,
  onSave: false,
  onClosed: false,
  dial_mode: 0,
  progressive_dial_speed: 0,
  predictive_dial_speed: 0,
};

type Props = {
  tenantId?: string;
};

const CreateCampaignFormsContainer: React.FC<Props> = ({ tenantId }: Props) => {
  const [tempCampaignInfo, setTempCampaignInfo] = useState<MainDataResponse>(CampaignInfo);
  const [tempCampaignSkills, setTempCampaignSkills] = useState<CampaignSkillUpdateRequest>(CampaignSkillInfo);
  const [tempCampaignSchedule, setTempCampaignSchedule] = useState<CampaignScheDuleListDataResponse>(CampaignScheduleInfo);
  const [tempCampaignDialSpeedInfo, setTempCampaignDialSpeedInfo] = useState<CampaignDialSpeedUpdateRequest>(CampaignDialSpeedInfo);
  const [tempCampaignDialSpeedInfoParam, setTempCampaignDialSpeedInfoParam] = useState(CampaignCallPacingTabInfo);
  const [inputSkills, setInputSkills] = useState('');
  const [alertState, setAlertState] = useState<CustomAlertRequest>(errorMessage);

  const { selectedCampaign, setCampaigns, setSelectedCampaign } = useMainStore();
  const { activeTabId, activeTabKey, removeTab, openedTabs, simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu } = useTabStore();
  const router = useRouter();

  const handleInputData = (value: any, field: string) => {
    setTempCampaignInfo({ ...tempCampaignInfo, [field]: field === 'campaign_id' ? Number(value) : value });
  };

  const handleSelectChange = (value: string, field: 'tenant' | 'dialMode') => {
    const numberValue = Number(value);
    if (field === 'tenant') {
      setTempCampaignInfo({ ...tempCampaignInfo, tenant_id: numberValue });
    } else if (field === 'dialMode') {
      setTempCampaignInfo({ ...tempCampaignInfo, dial_mode: numberValue });
      setTempCampaignDialSpeedInfoParam({ ...tempCampaignDialSpeedInfoParam, dial_mode: numberValue });
    }
  };

  const handleSelectSkills = (param: string) => {
    setInputSkills(param);
    setTempCampaignSkills({
      ...tempCampaignSkills,
      campaign_id: tempCampaignInfo.campaign_id,
      skill_id: param.split(',').map(Number),
    });
  };

  const handleCampaignSave = () => {
    let hasError = false;

    if (tempCampaignInfo.tenant_id < 0 && !tenantId) {
      hasError = true;
      setAlertState({ ...errorMessage, isOpen: true, message: "테넌트를 선택해 주세요.", type: '2' });
    }

    if (tempCampaignSchedule.start_time.length === 0) {
      hasError = true;
      setAlertState({ ...errorMessage, isOpen: true, message: "시작시간 또는 종료시간을 지정해 주세요.", type: '2' });
    }

    if (!tempCampaignInfo.power_divert_queue) {
      hasError = true;
      setAlertState({ ...errorMessage, isOpen: true, message: "'발신 방법' 탭의 '연결 IVR NO' 값을 입력해 주시기 바랍니다.", type: '2' });
    }

    if (!tempCampaignInfo.campaign_name) {
      hasError = true;
      setAlertState({ ...errorMessage, isOpen: true, message: "캠페인명을 입력해 주세요.", type: '2' });
    }

    if (!hasError) {
      fetchCampaignManagerInsert(tempCampaignInfo);
    }
  };

  const { mutate: fetchCampaignManagerInsert } = useApiForCampaignManagerInsert({
    onSuccess: (data) => {
      const newCampaignId = data.result_data.campaign_id;
      simulateHeaderMenuClick(2);
      setCampaignIdForUpdateFromSideMenu(newCampaignId.toString());
      fetchCampaignScheduleInsert({ ...tempCampaignSchedule, campaign_id: newCampaignId });
      if (activeTabKey !== null) {
        removeTab(Number(activeTabId), activeTabKey);
      }
    },
    onError: (error) => {
      if (error.message.split('||')[0] === '5') {
        setAlertState({ ...errorMessage, isOpen: true, message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.', type: '2', onClose: goLogin });
      }
    },
  });

  const { mutate: fetchCampaignScheduleInsert } = useApiForCampaignScheduleInsert({
    onSuccess: () => toast.success('캠페인 스케줄이 저장되었습니다.', { autoClose: 2000 }),
    onError: () => toast.error('캠페인 스케줄 저장에 실패했습니다.', { autoClose: 2000 }),
  });

  const goLogin = () => {
    Cookies.remove('session_key');
    router.push('/login');
  };

  const handleCampaignClosed = () => {
    setAlertState({
      ...errorMessage,
      isOpen: true,
      message: '캠페인 편집창을 종료하시겠습니까?',
      onClose: () => {
        setAlertState((prev) => ({ ...prev, isOpen: false }));
        openedTabs.filter(tab => tab.id === 13).forEach(tab => removeTab(tab.id, tab.uniqueKey));
      },
      onCancle: () => setAlertState((prev) => ({ ...prev, isOpen: false })),
    });
  };

  return (
    <div className="flex flex-col gap-5 w-full overflow-auto">
      <TitleWrap
        className="border-b border-gray-300 pb-1"
        title="캠페인정보"
        buttons={[
          { label: "캠페인 생성", onClick: handleCampaignSave },
          { label: "생성 취소", onClick: handleCampaignClosed },
        ]}
      />
      <CampaignBasicInfoForm
        tenantId={tenantId}
        tempCampaignInfo={tempCampaignInfo}
        inputSkills={inputSkills}
        onInputChange={handleInputData}
        onSelectChange={handleSelectChange}
        onUpdateSkill={handleSelectSkills}
      />
      <CampaignTab
        campaignSchedule={tempCampaignSchedule}
        callCampaignMenu="NewCampaignManager"
        campaignInfo={tempCampaignInfo}
        campaignDialSpeedInfo={tempCampaignDialSpeedInfoParam}
        onCampaignOutgoingOrderChange={() => {}}
        onCampaignScheduleChange={() => {}}
        onCampaignOutgoingStrategyChange={() => {}}
        onCampaignOutgoingMethodChange={() => {}}
        onHandleCallPacingTabChange={() => {}}
        onHandleAdditionalInfoTabChange={() => {}}
        onHandleCallbackTabChange={() => {}}
        onHandleNotificationTabChange={() => {}}
      />
      <CustomAlert
        message={alertState.message}
        title={alertState.title}
        type={alertState.type}
        isOpen={alertState.isOpen}
        onClose={() => alertState.onClose?.()}
        onCancle={() => setAlertState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
};

export default CreateCampaignFormsContainer;