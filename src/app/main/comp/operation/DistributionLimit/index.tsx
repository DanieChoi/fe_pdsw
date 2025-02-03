import React, { useState, useMemo } from 'react';
import DataGrid from "react-data-grid";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { CommonButton } from "@/components/shared/CommonButton";
import { CustomInput } from "@/components/shared/CustomInput";
import { Label } from "@/components/ui/label";
import CustomAlert from '@/components/shared/layout/CustomAlert';
import CampaignModal from '../CampaignModal';


interface Row {
  center: string;
  group: string;
  part: string;
  agent_id: string;
  agent_name: string;
  max_dist: string;
  current_resp: string;
  fixed_number: string;
}

const DistributionLimit = () => {
  const [selectedRow, setSelectedRow] = useState<Row | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [campaignId, setCampaignId] = useState('');
  const [campaignName, setCampaignName] = useState('');
  
  const [formData, setFormData] = useState({
    center: '',
    group: '',
    part: '',
    agentId: '',
    agentName: '',
    maxDist: '',
    currentResp: '',
    fixedNumber: 'all'
  });

  const [alertState, setAlertState] = useState({
    isOpen: false,
    message: '',
    title: '알림',
    type: '1',
    onConfirm: () => {},
    onCancel: () => {}
  });

  const columns = useMemo(() => [
    { key: 'center', name: '상담센터' },
    { key: 'group', name: '상담그룹' },
    { key: 'part', name: '상담파트' },
    { key: 'agent_id', name: '상담원 아이디' },
    { key: 'agent_name', name: '상담원 이름' },
    { key: 'max_dist', name: '최대 분배호수' },
    { key: 'current_resp', name: '현재 응답호수' },
    { key: 'fixed_number', name: '호수 고정' }
  ], []);

  const rows = [
    { 
      center: 'Center A',
      group: 'Group 1',
      part: 'Part A',
      agent_id: 'AG001',
      agent_name: '김상담',
      max_dist: '100',
      current_resp: '45',
      fixed_number: 'Y'
    },
    { 
      center: 'Center B',
      group: 'Group 2',
      part: 'Part B',
      agent_id: 'AG002',
      agent_name: '이상담',
      max_dist: '150',
      current_resp: '78',
      fixed_number: 'N'
    }
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
    if (!formData.center || !formData.agentId) {
      showAlert('필수 필드를 입력해주세요.');
      return;
    }

    showConfirm('저장하시겠습니까?', () => {
      console.log('Save:', formData);
    });
  };

  const handleCellClick = ({ row }: { row: Row }) => {
    setSelectedRow(row);
    setFormData({
      center: row.center,
      group: row.group,
      part: row.part,
      agentId: row.agent_id,
      agentName: row.agent_name,
      maxDist: row.max_dist,
      currentResp: row.current_resp,
      fixedNumber: row.fixed_number
    });
  };

  const handleNew = () => {
    setSelectedRow(null);
    setFormData({
      center: '',
      group: '',
      part: '',
      agentId: '',
      agentName: '',
      maxDist: '',
      currentResp: '',
      fixedNumber: 'all'
    });
  };

  const handleCampaignSelect = (name: string) => {
    setCampaignName(name);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getRowClass = (row: Row) => {
    return selectedRow?.agent_id === row.agent_id ? 'bg-[#FFFAEE]' : '';
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex title-background justify-between">
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <Label className="w-20 min-w-20">캠페인 아이디</Label>
            <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="캠페인선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='test1'>test</SelectItem>
                  <SelectItem value='test2'>test2</SelectItem>
                  <SelectItem value='test3'>test3</SelectItem>
                  <SelectItem value='test4'>test4</SelectItem>
                  <SelectItem value='test5'>test5</SelectItem>
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
            value={campaignName}
            readOnly 
            className="w-[140px]"
            disabled={true}
          />
          <div className="text-sm">
            응답호수 초기화 시간: 없음
          </div>
        </div>
        <div className="flex gap-2">
          <CommonButton>초기화시간 변경</CommonButton>
          <CommonButton>초기화시간 설정해제</CommonButton>
          <CommonButton>적용</CommonButton>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="w-[800px] flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="text-sm">할당 상담원 목록</div>
            <div className="flex items-center gap-2">
              <Label className="w-20 min-w-20">보기설정</Label>
              <Select defaultValue='all'>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="해당 상담원 전체" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>해당 상담원 전체</SelectItem>
                  <SelectItem value='remaining'>잔여 호수가 남은 상담원</SelectItem>
                  <SelectItem value='no-remaining'>잔여 호수가 없는 상담원</SelectItem>
                  <SelectItem value='no-limit'>최대 분배호수가 설정되지 않은 상담원</SelectItem>
                  <SelectItem value='has-limit'>최대 분배호수가 설정된 상담원</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='grid-custom-wrap h-[400px]'>
            <DataGrid
              columns={columns}
              rows={rows}
              className="grid-custom"
              onCellClick={handleCellClick}
              rowKeyGetter={(row) => row.agent_id}
              selectedRows={selectedRow ? new Set<string>([selectedRow.agent_id]) : new Set<string>()}
              rowHeight={26}
              headerRowHeight={26}
              rowClass={getRowClass}
            />
          </div>
        </div>

        <div className="w-[513px]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">상담센터</Label>
              <CustomInput 
                value={formData.center}
                onChange={(e) => handleInputChange('center', e.target.value)}
                className="w-full"
                disabled
              />
            </div>

            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">상담그룹</Label>
              <CustomInput 
                value={formData.group}
                onChange={(e) => handleInputChange('group', e.target.value)}
                className="w-full"
                disabled
              />
            </div>

            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">상담파트</Label>
              <CustomInput 
                value={formData.part}
                onChange={(e) => handleInputChange('part', e.target.value)}
                className="w-full"
                disabled
              />
            </div>

            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">상담원 아이디</Label>
              <CustomInput 
                value={formData.agentId}
                onChange={(e) => handleInputChange('agentId', e.target.value)}
                className="w-full"
                disabled
              />
            </div>

            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">상담원 이름</Label>
              <CustomInput 
                value={formData.agentName}
                onChange={(e) => handleInputChange('agentName', e.target.value)}
                className="w-full"
                disabled
              />
            </div>

            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">최대 분배호수</Label>
              <CustomInput 
                value={formData.maxDist}
                onChange={(e) => handleInputChange('maxDist', e.target.value)}
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">현재 응답호수</Label>
              <CustomInput 
                value={formData.currentResp}
                onChange={(e) => handleInputChange('currentResp', e.target.value)}
                className="w-full"
                disabled
              />
            </div>

            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">호수 고정</Label>
              <Select 
                value={formData.fixedNumber}
                onValueChange={(value) => handleInputChange('fixedNumber', value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='Y'>고정</SelectItem>
                  <SelectItem value='N'>미고정</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <CommonButton onClick={handleNew}>신규</CommonButton>
              <CommonButton onClick={handleSave}>저장</CommonButton>
            </div>

            <div className="mt-[20px] text-sm">
              <ul className='space-y-1 notice-li'>
                <li>• 상담원에게 분배하는 콜 수를 제한합니다.</li>
                <li>• 운영시간 중의 일괄처리(Batch)작업은 많은 부하를 발생시켜 정상적인 운영이 불가능 할 수 있습니다.</li>
                <li>• 일괄처리작업의 경우, 발신 량이 적은 시간이나, 업무 종료 후 작업하시기를 권장합니다.</li>
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
    </div>
  );
};

export default DistributionLimit;