import React, { useEffect, useState } from 'react';
import DataGrid from 'react-data-grid';
import CustomAlert from '@/components/shared/layout/CustomAlert';
import { useApiForCampaignHistory } from '@/features/monitoring/hooks/useApiForCampaignHistory';

interface UsageTimePopupProps {
  campaignIdList: number[];
  dialKindList: number[];
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

const UsageTimePopup: React.FC<UsageTimePopupProps> = ({ campaignIdList,dialKindList,isOpen, onClose }) => {
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
  const [tempUsageData, setTempUsageData] = useState<UsageData[]>([]);

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

  // 캠페인 운영 이력 조회 api 호출
  const { mutate: fetchCampaignHistory } = useApiForCampaignHistory({
      onSuccess: (data) => {  
        if( data.result_data.length > 0 ){
          setTempUsageData(prev => [
            ...prev,
            ...data.result_data.map((item, i) => ({
              id: i,
              startTime: item.start_time,
              endTime: item.end_time,
              agents: item.agent_count,
              calls: item.list_count,
              success: item.success_count,
            })),
          ]);
        }
      }
  });

  useEffect(() => {
    if( campaignIdList.length > 0 && dialKindList.length > 0){
      setTempUsageData([]);
      fetchCampaignHistory({
        campaign_id: campaignIdList,
        dial_kind: dialKindList
      })
    }    
  }, [campaignIdList,dialKindList]);
  
  const modalContent = (
    <div className="w-full">
      <div className="grid-custom-wrap h-[400px]">
        <DataGrid
          columns={columns}
          rows={tempUsageData}
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
      type="2"
      onClose={onClose}
      onCancel={onClose}
      width="max-w-modal" 
    />
  );
};

export default UsageTimePopup;