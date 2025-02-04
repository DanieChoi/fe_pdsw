import React, { useState, useMemo, useEffect } from 'react';
import DataGrid, { CellClickArgs } from "react-data-grid";
import { MainDataResponse } from '@/features/auth/types/mainIndex';
import { useMainStore, useCampainManagerStore } from '@/store';
import CampaignModal from '../CampaignModal';
import { useApiForCallingNumber } from '@/features/campaignManager/hooks/useApiForCallingNumber';

import { CommonButton } from "@/components/shared/CommonButton";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";

interface Row extends MainDataResponse {
  calling_number?: string;
}

function CampaignLayout() {
  const { 
    campaigns, 
    setSelectedCampaign,
  } = useMainStore();
  const { callingNumbers, setCallingNumbers } = useCampainManagerStore();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCampaignValue, setSelectedCampaignValue] = useState('');
  const [selectedCallingNumber, setSelectedCallingNumber] = useState('');
  const [selectedRow, setSelectedRow] = useState<Row | null>(null);

  // 발신번호 조회
  const { mutate: fetchCallingNumbers } = useApiForCallingNumber({
    onSuccess: (data) => {
      setCallingNumbers(data.result_data);
    }
  });

  useEffect(() => {
    // 컴포넌트가 마운트될 때 발신번호 조회
    fetchCallingNumbers({
      session_key: '',
      tenant_id: 0,
    });
  }, [fetchCallingNumbers]);

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
        calling_number: callingNumber?.calling_number || '' // 항상 string 값을 반환하도록 보장
      };
    })
  , [campaigns, callingNumbers]);

  const handleCellClick = ({ row }: { row: Row }) => {
    setSelectedRow(row);
    setSelectedCampaign(row);
    const callingNumber = callingNumbers.find(
      (number) => number.campaign_id === row.campaign_id
    );
    setSelectedCallingNumber(callingNumber?.calling_number || '');
  };

  const handleCampaignSelect = (tenantName: string) => {
    setSelectedCampaignValue(tenantName);
  };

  const getRowClass = (row: Row) => {
    return selectedRow?.campaign_id === row.campaign_id ? 'bg-[#FFFAEE]' : ''; 
  };

  return (
    <div className="flex gap-8">
      {/* 왼쪽 그리드 */}
      <div className="w-[580px]">
        <div className='grid-custom-wrap h-[230px]'>
          <DataGrid
            columns={columns}
            rows={rows}
            className="grid-custom"
            onCellClick={handleCellClick}
            rowKeyGetter={(row) => row.campaign_id.toString()}
            selectedRows={selectedRow ? new Set<string>([selectedRow.campaign_id.toString()]) : new Set<string>()}
            rowHeight={26}
            headerRowHeight={26}
            rowClass={getRowClass} 
          />
        </div>
      </div>

      {/* 오른쪽 섹션 */}
      <div className="w-[513px]">
        <div className="flex flex-col gap-2">
          {/* 대상캠페인 영역 */}
          <div className="flex items-center gap-2">
            <Label className="w-[5rem] min-w-[5rem]">대상캠페인</Label>
            <div className='w-[140px]'>
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web_only">web_only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <CommonButton 
              variant="outline" 
              size="sm"
              onClick={() => setIsModalOpen(true)}
            >
              캠페인조회
            </CommonButton>
            <CustomInput 
              type="text" 
              value={selectedCampaignValue} 
              readOnly 
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
              // placeholder="그리드에서 선택"
              // disabled
              className=""
            />
          </div>

          {/* 버튼 영역 */}
          <div className="flex justify-end gap-2 pt-4">
            <CommonButton>
              신규
            </CommonButton>
            <CommonButton>
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
        onSelect={handleCampaignSelect}
      />
    </div>
  );
};

export default CampaignLayout;