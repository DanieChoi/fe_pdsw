import React, { useState, useMemo, useEffect } from 'react';
import DataGrid from "react-data-grid";
import { CommonButton } from "@/components/shared/CommonButton";
import { CustomInput } from "@/components/shared/CustomInput";
import { Label } from "@/components/ui/label";
import CampaignModal from '../CampaignModal';
import CustomAlert from '@/components/shared/layout/CustomAlert';
import { useMainStore, useTabStore } from '@/store';
import { 
  useApiForCallLimitSettingCreate, 
  useApiForCallLimitSettingDelete, 
  useApiForCallLimitSettingList, 
  useApiForCallLimitSettingUpdate 
} from '@/features/preferences/hooks/useApiForCallLimitSetting';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

interface Row {
  campaign_id: string;
  campaign_name: string;
  limit_number: string;
}

interface LimitSettingItem {
  campaign_id: number;
  tenant_id: number;
  call_kind: number;
  call_timeout: number;
  max_call: number;
  max_criteria: number;
}

const errorMessage = {
  isOpen: false,
  message: '',
  title: '로그인',
  type: '2',
};

const CampaignSettings = () => {
  const { tenants, campaigns } = useMainStore();
  const [selectedRow, setSelectedRow] = useState<Row | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [campaignId, setCampaignId] = useState('');
  const [campaignName, setCampaignName] = useState('');
  const [limitCount, setLimitCount] = useState('');
  const [limitSettings, setLimitSettings] = useState<LimitSettingItem[]>([]);
  const [isNewMode, setIsNewMode] = useState(false); // 신규 모드 상태 추가
  const router = useRouter();
  const { activeTabId, openedTabs } = useTabStore()
  
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

  // 예약콜 제한건수 조회
  const { mutate: fetchCallLimitSettingList } = useApiForCallLimitSettingList({
    onSuccess: (data) => {
      setLimitSettings(data.result_data);
      setIsNewMode(false); // 데이터 로드 시 신규 모드 해제
    },onError: (data) => {      
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
      }
    }
  });

  // 제한건수 추가 API 
  const { mutate: createCallLimitSetting } = useApiForCallLimitSettingCreate({
    onSuccess: () => {
      // 저장 성공 후 리스트를 새로 가져오기
      fetchCallLimitSettingList({
        tenant_id_array: tenants.map(tenant => tenant.tenant_id)
      });
      
      // 저장 후에도 현재 선택된 캠페인 정보 유지
      // 신규 모드는 해제하지만, 선택 상태는 유지
      setIsNewMode(false);
      
      // 저장 성공 메시지 표시
      showAlert('저장되었습니다.');
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
          showAlert('저장에 실패했습니다: ' + error.message);
      }
    }
  });

  // 제한건수 수정 API
  const { mutate: updateCallLimitSetting } = useApiForCallLimitSettingUpdate({
    onSuccess: () => {
      fetchCallLimitSettingList({
        tenant_id_array: tenants.map(tenant => tenant.tenant_id)
      });
      setIsNewMode(false); // 수정 후 신규 모드 해제
      showAlert('수정되었습니다.');
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
          showAlert('수정에 실패했습니다: ' + error.message);
      }
    }
  });

  // 제한건수 삭제 API
  const { mutate: deleteCallLimitSetting } = useApiForCallLimitSettingDelete({
    onSuccess: () => {
      fetchCallLimitSettingList({
        tenant_id_array: tenants.map(tenant => tenant.tenant_id)
      });
      setIsNewMode(false); // 삭제 후 신규 모드 해제
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
          showAlert('삭제에 실패했습니다: ' + error.message);
      }
    }
  });

  // API 호출 후에 새로 가져온 데이터에서 현재 캠페인을 찾아 선택 상태로 설정
  const updateSelectionAfterAPICall = () => {
    // API 호출 후 새로 불러온 데이터에서 현재 선택된 캠페인ID에 해당하는 항목을 찾음
    const updatedSetting = limitSettings.find(
      setting => setting.campaign_id === Number(campaignId)
    );
    
    if (updatedSetting) {
      const campaign = campaigns?.find(
        camp => camp.campaign_id === updatedSetting.campaign_id
      );
      
      // 찾은 데이터로 선택 상태 업데이트
      setSelectedRow({
        campaign_id: updatedSetting.campaign_id.toString(),
        campaign_name: campaign?.campaign_name || '',
        limit_number: updatedSetting.max_call.toString()
      });
      
      // 제한건수도 최신 데이터로 업데이트
      setLimitCount(updatedSetting.max_call.toString());
    }
  };

  // useEffect 추가: limitSettings가 업데이트되면 선택 상태 업데이트
  useEffect(() => {
    if (campaignId && !isNewMode) {
      updateSelectionAfterAPICall();
    }
  }, [limitSettings]);

  useEffect(() => {
    fetchCallLimitSettingList({
      tenant_id_array: tenants.map(tenant => tenant.tenant_id)
    });
    // 초기 로딩 시 신규 모드 비활성화
    setIsNewMode(false);
  }, [fetchCallLimitSettingList, tenants])

  const columns = useMemo(() => [
    { key: 'campaign_id', name: '캠페인 아이디' },
    { key: 'campaign_name', name: '캠페인 이름' },
    { key: 'limit_number', name: '제한건수' }
  ], []);

  const rows = useMemo(() => 
    limitSettings?.map(setting => {
      const campaign = campaigns?.find(
        camp => camp.campaign_id === setting.campaign_id
      );
      return {
        campaign_id: setting.campaign_id.toString(),
        campaign_name: campaign?.campaign_name || '',
        limit_number: setting.max_call.toString()
      };
    }) || [] // 기본값으로 빈 배열 설정
  , [limitSettings, campaigns]);


  const handleSave = () => {
    if (!campaignId || !campaignName || !limitCount) {
      showAlert('모든 필드를 입력해주세요.');
      return;
    }
  
    // 선택된 캠페인의 tenant_id 찾기
    const selectedCampaign = campaigns?.find(camp => camp.campaign_id === Number(campaignId));
    if (!selectedCampaign) {
      return;
    }
  
    const saveData = {
      campaign_id: Number(campaignId),
      tenant_id: selectedCampaign.tenant_id,
      call_kind: 1,  // Callback으로 고정
      call_timeout: 0,
      max_call: Number(limitCount),
      max_criteria: 1
    };
  
    if (selectedRow) {
      // 수정
      updateCallLimitSetting(saveData);
      // showAlert은 mutate의 onSuccess에서 처리
    } else {
      // 신규 등록
      createCallLimitSetting(saveData);
      // showAlert은 mutate의 onSuccess에서 처리
    }
  };

  const handleDelete = () => {
    // 선택된 항목이 없을 경우 알림
    if (!campaignId || !selectedRow) {
      showAlert('삭제할 캠페인을 먼저 선택해주세요.');
      return;
    }
  
    // 선택된 캠페인의 tenant_id 찾기
    const selectedCampaign = campaigns?.find(camp => camp.campaign_id === Number(campaignId));
    if (!selectedCampaign) {
      showAlert('캠페인 정보를 찾을 수 없습니다.');
      return;
    }
  
    // 삭제 확인 알림
    showConfirm(
      `선택된된 캠페인 [${selectedCampaign.campaign_name}]의 제한건수 설정을 삭제하시겠습니까? \n\n ※주의: 삭제시 데이터베이스에서 완전 삭제됩니다. \n다시 한번 확인해 주시고 삭제해 주세요.`,
      () => {
        // 확인 버튼 클릭 시 실행될 함수
        deleteCallLimitSetting(
          {
            campaign_id: Number(campaignId),
            tenant_id: selectedCampaign.tenant_id
          },
          {
            onSuccess: () => {
              // showAlert('제한건수 설정이 성공적으로 삭제되었습니다.');
              
              // 삭제 후 데이터 초기화
              setSelectedRow(null);
              setCampaignId('');
              setCampaignName('');
              setLimitCount('');
              setIsNewMode(false);
              
              // 데이터 목록 새로고침 - 이미 onSuccess에서 처리됨
            }
          }
        );
      }
    );
  }

  const handleCellClick = ({ row }: { row: Row }) => {
    setSelectedRow(row);
    setCampaignId(row.campaign_id);
    setCampaignName(row.campaign_name);
    setLimitCount(row.limit_number);
  };

  const handleNew = () => {
    setSelectedRow(null);
    setCampaignId('');
    setCampaignName('');
    setLimitCount('');
    setIsNewMode(true); 
  };

  const handleCampaignSelect = (id: string, name: string) => {
    setCampaignId(id);
    setCampaignName(name);
    // 선택된 캠페인의 제한건수가 있는지 체크
    const matchingSetting = limitSettings.find(
      (item) => item.campaign_id === Number(id)
    );
    if (matchingSetting) {
      const limitStr = matchingSetting.max_call.toString();
      setLimitCount(limitStr);
      // 해당 캠페인이 이미 설정되어 있으면 그리드 로우도 선택
      setSelectedRow({
        campaign_id: id,
        campaign_name: name,
        limit_number: limitStr
      });
      setIsNewMode(false);
    } else {
      // 제한건수가 없으면 입력 필드와 그리드 선택 모두 초기화
      setLimitCount('');
      setSelectedRow(null);
      setIsNewMode(true); 
    }
  };
  
  useEffect(() => {
    if (activeTabId === 8) {
      const tempData = openedTabs.filter(tab => tab.id === 8);
      if( tempData.length > 0 && tempData[0].campaignId && tempData[0].campaignName) {
        setCampaignId(tempData[0].campaignId);
        setCampaignName(tempData[0].campaignName);
      }
      if( limitSettings.length > 0 && tempData.length > 0 ){
        const templimitSetting = limitSettings.filter(data=> data.campaign_id === Number(tempData[0].campaignId));
        if( templimitSetting.length >  0){
          setLimitCount(templimitSetting[0].max_call+'');
        }
      }
    }
  }, [activeTabId, openedTabs,limitSettings]);
   
  // 필드가 비활성화되어야 하는지 결정하는 함수
  const isFieldDisabled = () => {
    // 캠페인 아이디가 있으면 항상 입력 가능하게 설정
    if (campaignId) {
      return false;
    }
    // 선택된 행이 없고 신규 모드도 아니면 비활성화
    return !selectedRow && !isNewMode;
  };

  const getRowClass = (row: Row) => {
    return selectedRow?.campaign_id === row.campaign_id && 
           selectedRow?.limit_number === row.limit_number ? 'bg-[#FFFAEE]' : '';
  };

  return (
    <div className="flex gap-8">
      <div className="w-[580px]">
        <div className='grid-custom-wrap h-[230px]'>
          <DataGrid
            columns={columns}
            rows={rows}
            className="grid-custom"
            onCellClick={handleCellClick}
            rowKeyGetter={(row) => row.campaign_id + row.limit_number}
            selectedRows={selectedRow ? new Set<string>([selectedRow.campaign_id.toString()]) : new Set<string>()}
            rowHeight={30}
            headerRowHeight={30}
            rowClass={getRowClass}
            enableVirtualization={false}
          />
        </div>
      </div>

      <div className="w-[513px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Label className="w-[5rem] min-w-[5rem]">캠페인 아이디</Label>
            <CustomInput 
                value={campaignId} 
                readOnly 
                className="w-full"
                disabled={true}
             />
            <CommonButton 
              variant="outline" 
              size="sm"
              onClick={() => setIsModalOpen(true)}
            >
              캠페인조회
            </CommonButton>
          </div>

          <div className="flex items-center gap-2">
            <Label className="w-[5rem] min-w-[5rem]">캠페인 이름</Label>
            <CustomInput 
                value={campaignName} 
                readOnly 
                className="w-full"
                disabled={true}
            />
          </div>

          <div className="flex items-center gap-2">
            <Label className="w-[5rem] min-w-[5rem]">제한건수</Label>
            <CustomInput 
              value={limitCount}
              className="w-full"
              onChange={(e) => setLimitCount(e.target.value)}
              disabled={isFieldDisabled()} 
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <CommonButton onClick={handleNew}>신규</CommonButton>
            <CommonButton onClick={handleSave}>저장</CommonButton>
            <CommonButton onClick={handleDelete}>삭제</CommonButton>
          </div>
          <div className="mt-[20px] text-sm">
            <ul className='space-y-1'>
              <li>• 필요 이상의 예약콜/ 콜백에 대한 제한이 필요한 경우</li>
              <li>• 입력 받을 콜 수를 제한 할 수 있습니다.</li>
            </ul>
          </div>
        </div>
      </div>

      <CampaignModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleCampaignSelect}
      />

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

export default CampaignSettings;