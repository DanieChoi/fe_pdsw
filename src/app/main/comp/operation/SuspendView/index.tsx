import React, { useState, useMemo, useEffect } from 'react';
import DataGrid, { Column } from "react-data-grid";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { Label } from "@/components/ui/label";
import { useApiForSuspendedCampaignList, useApiForSuspendedSkillList } from '@/features/preferences/hooks/useApiForSuspendView';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import CustomAlert from '@/components/shared/layout/CustomAlert';
import { useApiForSkillList } from '@/features/preferences/hooks/useApiForSkill';
import { useMainStore } from '@/store';

type ViewMode = 'campaign' | 'skill';

interface BaseRow {
  release_time: string;
}

interface CampaignRow extends BaseRow {
  type: 'campaign';
  campaign_id: string;
  campaign_name: string;
}

interface SkillRow extends BaseRow {
  type: 'skill';
  skill_id: string;
  skill_name: string;
}

type GridRow = CampaignRow | SkillRow;

const errorMessage = {
  isOpen: false,
  message: '',
  title: '로그인',
  type: '2',
};

const SuspendView = () => {
  const router = useRouter();
  const { tenants, campaigns } = useMainStore();
  const [viewMode, setViewMode] = useState<ViewMode>('campaign');
  const [suspendedCampaigns, setSuspendedCampaigns] = useState<any[]>([]);
  const [suspendedSkills, setSuspendedSkills] = useState<any[]>([]);
  const [skillMasterList, setSkillMasterList] = useState<any[]>([]);
  const [isSkillDataLoaded, setIsSkillDataLoaded] = useState(false);

  const [alertState, setAlertState] = useState({
    isOpen: false,
    message: '',
    title: '알림',
    type: '1',
    onConfirm: () => {},
    onCancel: () => {}
  });

  const showAlert = (message: string) => {
    setAlertState({
      isOpen: true,
      message,
      title: '알림',
      type: '2',
      onConfirm: closeAlert,
      onCancel: () => {}
    });
  };

  const showConfirm = (message: string, onConfirm: () => void) => {
    setAlertState({
      isOpen: true,
      message,
      title: '확인',
      type: '1',
      onConfirm: () => {
        onConfirm();
        closeAlert();
      },
      onCancel: closeAlert
    });
  };

  const closeAlert = () => {
    setAlertState(prev => ({ ...prev, isOpen: false }));
  };

  // 서스팬드 캠페인 조회
  const { mutate: fetchSuspendedCampaignList } = useApiForSuspendedCampaignList({
    onSuccess: (data) => {
      // console.log('서스팬드 캠페인 API Response:', data.result_data);
      setSuspendedCampaigns(data.result_data || []);
    },
    onError: (data) => {      
      if (data.message.split('||')[0] === '5') {
        setAlertState({
          ...errorMessage,
          isOpen: true,
          message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
          onConfirm: closeAlert,
          onCancel: () => {}
        });
        Cookies.remove('session_key');
        setTimeout(() => {
          router.push('/login');
        }, 1000);
      } else {
        showAlert(`캠페인 리스트 조회 실패: ${data.message}`);
      }
    }
  });

  // 서스팬드 스킬 조회
  const { mutate: fetchSuspendedSkillList } = useApiForSuspendedSkillList({
    onSuccess: (data) => {
      // console.log('서스팬드 스킬 API Response:', data.result_data);
      setSuspendedSkills(data.result_data || []);
    },
    onError: (data) => {      
      if (data.message.split('||')[0] === '5') {
        setAlertState({
          ...errorMessage,
          isOpen: true,
          message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
          onConfirm: closeAlert,
          onCancel: () => {}
        });
        Cookies.remove('session_key');
        setTimeout(() => {
          router.push('/login');
        }, 1000);
      } else {
        showAlert(`스킬 리스트 조회 실패: ${data.message}`);
      }
    }
  });

  // 스킬 마스터 리스트 조회
  const { mutate: fetchSkillList } = useApiForSkillList({
    onSuccess: (data) => {
      // console.log('스킬 마스터 API Response:', data.result_data);
      setSkillMasterList(data.result_data || []);
      setIsSkillDataLoaded(true);
    },
    onError: (error) => {
      if (error.message.split('||')[0] === '5') {
        setAlertState({
          ...errorMessage,
          isOpen: true,
          message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
          onConfirm: closeAlert,
          onCancel: () => {}
        });
        Cookies.remove('session_key');
        setTimeout(() => {
          router.push('/login');
        }, 1000);
      } else {
        showAlert(`스킬 리스트 조회 실패: ${error.message}`);
      }
    }
  });

  // 초기 렌더링 시 캠페인 모드에 필요한 API만 호출
  useEffect(() => {
    fetchSuspendedCampaignList();
  }, []);

  // viewMode가 변경될 때 필요한 API 호출
  useEffect(() => {
    if (viewMode === 'campaign') {
      fetchSuspendedCampaignList();
    } else if (viewMode === 'skill') {
      // 스킬 데이터가 아직 로드되지 않은 경우에만 호출
      fetchSuspendedSkillList();
      
      if (!isSkillDataLoaded) {
        fetchSkillList({ tenant_id_array: tenants.map(tenant => tenant.tenant_id) });
      }
    }
  }, [viewMode]);

  const handleViewModeChange = (value: string) => {
    setViewMode(value as ViewMode);
  };

  const columns = useMemo<readonly Column<GridRow>[]>(() => {
    if (viewMode === 'campaign') {
      return [
        { key: 'campaign_id', name: '캠페인 아이디' },
        { key: 'campaign_name', name: '캠페인 이름' },
        { key: 'release_time', name: '해제시간' }
      ];
    }
    return [
      { key: 'skill_id', name: '스킬 아이디' },
      { key: 'skill_name', name: '스킬 이름' },
      { key: 'release_time', name: '해제시간' }
    ];
  }, [viewMode]);

  const rows = useMemo<GridRow[]>(() => {
    if (viewMode === 'campaign') {
      // suspendedCampaigns와 mainStore의 campaigns 연결하여 캠페인 이름 가져오기
      return suspendedCampaigns.map(item => {
        // campaigns 배열에서 campaign_id가 일치하는 캠페인 찾기
        const campaignInfo = campaigns.find(
          campaign => campaign.campaign_id === Number(item.campaign_id)
        );
        
        return {
          type: 'campaign',
          campaign_id: String(item.campaign_id),
          // 캠페인 정보가 있으면 캠페인 이름 사용, 없으면 '' 표시
          campaign_name: campaignInfo ? campaignInfo.campaign_name : '',
          release_time: item.suspend_time
        };
      });
    } else {
      // 스킬 모드일 때 - 서스팬드 스킬 리스트와 스킬 마스터 리스트 연결
      return suspendedSkills.map(item => {
        // 스킬 마스터 리스트에서 skill_id가 일치하는 스킬 찾기
        const skillInfo = skillMasterList.find(
          skill => skill.skill_id === Number(item.skill_id)
        );
        
        return {
          type: 'skill',
          skill_id: String(item.skill_id),
          // 스킬 정보가 있으면 스킬 이름 사용, 없으면 '' 표시
          skill_name: skillInfo ? skillInfo.skill_name : '',
          release_time: item.suspend_time
        };
      });
    }
  }, [viewMode, suspendedCampaigns, suspendedSkills, campaigns, skillMasterList]);

  const rowKeyGetter = (row: GridRow) => {
    return row.type === 'campaign'
      ? `${row.campaign_id}-${row.release_time}`
      : `${row.skill_id}-${row.release_time}`;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Label className="w-[8.5rem] min-w-[8.5rem]">Suspend View Mode</Label>
        <Select 
          value={viewMode} 
          onValueChange={handleViewModeChange}
        >
          <SelectTrigger className="w-32">
            <SelectValue placeholder="View Mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="campaign">캠페인</SelectItem>
            <SelectItem value="skill">스킬</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-[580px]">
        <div className="grid-custom-wrap h-[230px]">
          <DataGrid<GridRow>
            columns={columns}
            rows={rows}
            className="grid-custom"
            rowHeight={30}
            headerRowHeight={30}
            rowKeyGetter={rowKeyGetter}
          />
        </div>
      </div>

      <CustomAlert
        isOpen={alertState.isOpen}
        message={alertState.message}
        title={alertState.title}
        type={alertState.type}
        onClose={alertState.onConfirm}
        onCancle={alertState.onCancel}
      />
    </div>
  );
};

export default SuspendView;