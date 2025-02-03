import React, { useState, useMemo } from 'react';
import DataGrid from "react-data-grid";
import { CommonButton } from "@/components/shared/CommonButton";
import { CustomInput } from "@/components/shared/CustomInput";
import { Label } from "@/components/ui/label";
import CampaignModal from '../CampaignModal';
import CustomAlert from '@/components/shared/layout/CustomAlert';

interface Row {
  campaign_id: string;
  campaign_name: string;
  limit_number: string;
}

const CampaignSettings = () => {
  const [selectedRow, setSelectedRow] = useState<Row | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [campaignId, setCampaignId] = useState('');
  const [campaignName, setCampaignName] = useState('');
  const [limitCount, setLimitCount] = useState('');
  
  const [alertState, setAlertState] = useState({
    isOpen: false,
    message: '',
    title: '알림',
    type: '1',
    onConfirm: () => {},
    onCancel: () => {}
  });

  const columns = useMemo(() => [
    { key: 'campaign_id', name: '캠페인 아이디' },
    { key: 'campaign_name', name: '캠페인 이름' },
    { key: 'limit_number', name: '제한건수' }
  ], []);

  const rows = [
    { campaign_id: '1214', campaign_name: 'web_only', limit_number: '10' },
    { campaign_id: '1214', campaign_name: 'web_only', limit_number: '20' },
  ];

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

  const closeAlert = () => {
    setAlertState(prev => ({ ...prev, isOpen: false }));
  };

  const handleSave = () => {
    if (!campaignId || !campaignName || !limitCount) {
      showAlert('모든 필드를 입력해주세요.');
      return;
    }

    const saveData = {
      campaign_id: campaignId,
      campaign_name: campaignName,
      limit_number: limitCount
    };

    if (selectedRow) {
      showConfirm('수정하시겠습니까?', () => {
        console.log('Update:', saveData);
      });
    } else {
      showConfirm('저장하시겠습니까?', () => {
        console.log('Create:', saveData);
      });
    }
  };

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
  };

  const handleCampaignSelect = (name: string) => {
    setCampaignName(name);
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
            rowHeight={26}
            headerRowHeight={26}
            rowClass={getRowClass}
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
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <CommonButton onClick={handleNew}>신규</CommonButton>
            <CommonButton onClick={handleSave}>저장</CommonButton>
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