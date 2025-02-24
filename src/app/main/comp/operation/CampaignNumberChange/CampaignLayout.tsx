import React, { useState, useMemo, useEffect } from 'react';
import DataGrid from "react-data-grid";
import { MainDataResponse } from '@/features/auth/types/mainIndex';
import { useMainStore, useCampainManagerStore } from '@/store';
import CampaignModal from '../CampaignModal';
import { useApiForCallingNumber } from '@/features/campaignManager/hooks/useApiForCallingNumber';

import { CommonButton } from "@/components/shared/CommonButton";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { useApiForCallingNumberUpdate } from '@/features/campaignManager/hooks/useApiForCallingNumberUpdate';
import { useApiForCallingNumberInsert } from '@/features/campaignManager/hooks/useApiForCallingNumberInsert';
import CustomAlert from '@/components/shared/layout/CustomAlert';

type GridRow = MainDataResponse & {
  calling_number: string;
};

function CampaignLayout() {
  const { campaigns, setSelectedCampaign } = useMainStore();
  const { callingNumbers, setCallingNumbers } = useCampainManagerStore();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<GridRow | null>(null);
  const [selectedCampaignId, setSelectedCampaignId] = useState('');
  const [selectedCampaignName, setSelectedCampaignName] = useState('');
  const [selectedCallingNumber, setSelectedCallingNumber] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const [alertState, setAlertState] = useState({
    isOpen: false,
    message: '',
    title: '알림',
    type: '1',
    onConfirm: () => {},
    onCancel: () => {}
  });

  const showConfirm = (message: string, onConfirm: () => void) => {
    setAlertState({
      isOpen: true,
      message,
      title: '확인',
      type: '2',
      onConfirm: () => {
        onConfirm();
        closeAlert();
      },
      onCancel: closeAlert
    });
  };

  const showAlert = (message: string) => {
    setAlertState({
      isOpen: true,
      message,
      title: '알림',
      type: '1',
      onConfirm: closeAlert,
      onCancel: () => {}
    });
  };

  const closeAlert = () => {
    setAlertState(prev => ({ ...prev, isOpen: false }));
  };

    // 발신번호 조회
  const { mutate: fetchCallingNumbers } = useApiForCallingNumber({
    onSuccess: (data) => {
      setCallingNumbers(data.result_data);
    }
  });

  //캠페인 발신번호 추가 api 호출
  const { mutate: fetchCallingNumberInsert } = useApiForCallingNumberInsert({
    onSuccess: (data) => {
      fetchCallingNumbers({
        session_key: '',
        tenant_id: 0,
      });      
    }
  });

    // 발신번호 수정
  const { mutate: fetchCallingNumberUpdate } = useApiForCallingNumberUpdate({
    onSuccess: (data) => {
      fetchCallingNumbers({
        session_key: '',
        tenant_id: 0,
      })
    }
  })

  useEffect(() => {
    fetchCallingNumbers({
      session_key: '',
      tenant_id: 0,
    });
  }, [fetchCallingNumbers]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        handleReset();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); 

  const updateCallingNumber = (campaignId: number) => {
    const callingNumber = callingNumbers.find(
      num => num.campaign_id === campaignId
    );
    setSelectedCallingNumber(callingNumber?.calling_number || '');
  };

  const columns = useMemo(() => [
    {
      key: 'campaign_id',
      name: '캠페인 아이디',
    },
    {
      key: 'campaign_name',
      name: '캠페인 이름',
    },
    {
      key: 'calling_number',
      name: '발신번호',
    }
  ], []);

  const rows = useMemo(() => 
    campaigns.map(campaign => {
      const callingNumber = callingNumbers.find(
        num => num.campaign_id === campaign.campaign_id
      );
      return {
        ...campaign,
        calling_number: callingNumber?.calling_number || ''
      };
    }).filter(row => row.calling_number !== '') // 발신번호가 있는 행만 필터링
  , [campaigns, callingNumbers]);

  const handleCellClick = (args: { row: GridRow }) => {
    setSelectedRow(args.row);
    setSelectedCampaign(args.row);
    setSelectedCampaignId(args.row.campaign_id.toString());
    setSelectedCampaignName(args.row.campaign_name);
    updateCallingNumber(args.row.campaign_id);
    setIsEditing(false); // 그리드 선택 시 편집 모드 비활성화
  };

  const getRowClass = (row: GridRow) => {
    return selectedRow?.campaign_id === row.campaign_id ? 'bg-[#FFFAEE]' : ''; 
  };

  const handleModalSelect = (campaignId: string, campaignName: string) => {
    setSelectedCampaignId(campaignId);
    setSelectedCampaignName(campaignName);
    const campaignIdNum = Number(campaignId);
    updateCallingNumber(campaignIdNum);
    
    const campaign = campaigns.find(c => c.campaign_id === campaignIdNum);
    if (campaign) {
      const campaignWithCallingNumber: GridRow = {
        ...campaign,
        calling_number: callingNumbers.find(num => num.campaign_id === campaign.campaign_id)?.calling_number || ''
      };
      setSelectedRow(campaignWithCallingNumber);
      setSelectedCampaign(campaign);
    }
  };

  // 발신번호 저장 버튼 핸들러
  const handleSave = () => {
    if (!selectedCampaignId) {
      showConfirm('대상캠페인을 선택해주세요.', () => {})
      return;
    }

    if (!selectedCallingNumber || selectedCallingNumber.trim().length === 0) {
      showConfirm('발신번호를 입력해주세요.', () => {})
      return;
    }

    const existingCallingNumber = callingNumbers.find(num => num.campaign_id === Number(selectedCampaignId));
    const saveRequest = {
      campaign_id: Number(selectedCampaignId),
      calling_number: selectedCallingNumber,
    };

    if (existingCallingNumber) {
      fetchCallingNumberUpdate(saveRequest);
      showConfirm('발신번호가 성공적으로 수정되었습니다.', () => {});
    } else {
      fetchCallingNumberInsert(saveRequest);
      showConfirm('새로운 발신번호가 성공적으로 저장되었습니다.', () => {});
    }
  };

  const handleReset = () => {
    setSelectedRow(null);
    setSelectedCampaign(null);
    setSelectedCampaignId('');
    setSelectedCampaignName('');
    setSelectedCallingNumber('');
    setIsEditing(true); // 신규 버튼 클릭 시 편집 모드 활성화
  };

  return (
    <div className="flex gap-8">
      {/* 왼쪽 그리드 */}
      <div className="w-[580px]">
        <div className='grid-custom-wrap h-[230px]'>
          <DataGrid<GridRow>
            columns={columns}
            rows={rows}
            className="grid-custom"
            onCellClick={handleCellClick}
            rowKeyGetter={(row) => row.campaign_id}
            selectedRows={selectedRow ? new Set([selectedRow.campaign_id]) : new Set()}
            rowHeight={26}
            headerRowHeight={26}
            rowClass={getRowClass} 
          />
        </div>
      </div>

      {/* 오른쪽 섹션 */}
      <div className="w-[513px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Label className="w-[5rem] min-w-[5rem]">대상캠페인</Label>
            <CustomInput 
              type="text" 
              value={selectedCampaignId}
              readOnly
              disabled={!isEditing}
              className="w-[140px]"
            />
            <CommonButton 
              variant="outline" 
              size="sm"
              onClick={() => {
                // 모달 열기 전 상세 정보 초기화
                setSelectedRow(null);
                setSelectedCampaign(null);
                setSelectedCampaignId('');
                setSelectedCampaignName('');
                setSelectedCallingNumber('');
                setIsModalOpen(true);
              }}
              disabled={!isEditing}
            >
              캠페인조회
            </CommonButton>
            <CustomInput 
              type="text" 
              value={selectedCampaignName} 
              readOnly 
              disabled={!isEditing}
              className=""
            />
          </div>

          {/* 발신번호 영역 */}
          <div className="flex items-center gap-2">
            <Label className="w-[5rem] min-w-[5rem]">발신번호</Label>
            <CustomInput 
              type="text" 
              value={selectedCallingNumber}
              onChange={(e) => setSelectedCallingNumber(e.target.value)}
              readOnly={!selectedCampaignId}
              className=""
            />
          </div>

          {/* 버튼 영역 */}
          <div className="flex justify-end gap-2 pt-4">
            <CommonButton onClick={handleReset}>
              신규
            </CommonButton>
            <CommonButton onClick={handleSave}>
              저장
            </CommonButton>
          </div>

          {/* 안내 텍스트 */}
          <div className="mt-[20px] text-sm">
            <ul className='space-y-1'>
              <li>• 멤버십 별로 발신번호를 설정할 수 있습니다.</li>
              <li>• 발신번호를 설정하시려면 그리드에서 키보드를 눌러 주시던지 신규 버튼을 클릭해 주세요.</li>
            </ul>
            <p className='mt-[20px]'>※ 변경된 정보는 캠페인의 발신 작업이 재시작 시 반영됩니다.</p>
          </div>
        </div>
      </div>

      {/* Campaign Modal */}
      <CampaignModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleModalSelect}
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
}

export default CampaignLayout;