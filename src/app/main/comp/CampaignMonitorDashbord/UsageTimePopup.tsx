import React from 'react';
import DataGrid from 'react-data-grid';
import CustomAlert from '@/components/shared/layout/CustomAlert';

interface UsageTimePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UsageData {
  id: number;  // 고유 식별자 추가
  startTime: string;
  endTime: string;
  agents: number;
  calls: number;
  success: number;
}

const UsageTimePopup: React.FC<UsageTimePopupProps> = ({ isOpen, onClose }) => {
  // 실제 데이터는 API에서 받아올 것입니다
  const usageData: UsageData[] = [
    { 
      id: 1,
      startTime: '2025-02-28 18:18:34',
      endTime: '2025-02-28 18:18:34',
      agents: 1,
      calls: 4,
      success: 1
    },
    { 
      id: 2,
      startTime: '2025-02-28 18:18:34',
      endTime: '2025-02-28 18:18:34',
      agents: 1,
      calls: 4,
      success: 1
    },
    { 
      id: 3,
      startTime: '2025-02-28 18:18:34',
      endTime: '2025-02-28 18:18:34',
      agents: 1,
      calls: 4,
      success: 1
    }
  ];

  const columns = [
    { 
      key: 'startTime', 
      name: '시작시간',
    },
    { 
      key: 'endTime', 
      name: '종료시간',
    },
    { 
      key: 'agents', 
      name: '인원',
    },
    { 
      key: 'calls', 
      name: '발신건수',
    },
    { 
      key: 'success', 
      name: '성공건수',
    }
  ];

  const modalContent = (
    <div className="w-full">
      <div className="grid-custom-wrap h-[400px]">
        <DataGrid
          columns={columns}
          rows={usageData}
          className="grid-custom"
          rowKeyGetter={(row) => row.id}  // id를 키로 사용
          rowHeight={26}
          headerRowHeight={26}
        />
      </div>
    </div>
  );

  return (
    <CustomAlert
      isOpen={isOpen}
      title="캠페인 사용시간"
      message={modalContent}
      type="1"
      onClose={onClose}
      onCancle={onClose}
      width="max-w-modal" 
    />
  );
};

export default UsageTimePopup;