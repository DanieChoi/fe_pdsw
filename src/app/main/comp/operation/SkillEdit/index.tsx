import React, { useState, useMemo } from 'react';
import DataGrid, { SelectColumn } from "react-data-grid";
import { CommonButton } from "@/components/shared/CommonButton";
import { CustomInput } from "@/components/shared/CustomInput";
import { Label } from "@/components/ui/label";
import CustomAlert from '@/components/shared/layout/CustomAlert';
import TitleWrap from "@/components/shared/TitleWrap";
import 'react-data-grid/lib/styles.css';

// 메인 스킬 정보
interface SkillRow {
  center: string;
  tenant: string;
  skillId: string;
  skillName: string;
  description: string;
  campaignCount: number;
  agentCount: number;
}

// 캠페인 정보
interface CampaignRow {
  skillId: string;
  campaignId: string;
  campaignName: string;
  mode: string;
}

// 상담원 정보
interface AgentRow {
  skillId: string;
  teamId: string;
  teamName: string;
  loginId: string;
  agentId: string;
  agentName: string;
  consultMode: string;
}

const SkillEdit = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillRow | null>(null);
  const [selectedCampaignRows, setSelectedCampaignRows] = useState<Set<string>>(new Set());
  const [selectedAgentRows, setSelectedAgentRows] = useState<Set<string>>(new Set());
  const [filteredCampaigns, setFilteredCampaigns] = useState<CampaignRow[]>([]);
  const [filteredAgents, setFilteredAgents] = useState<AgentRow[]>([]);
  
  const [alertState, setAlertState] = useState({
    isOpen: false,
    message: '',
    title: '알림',
    type: '1',
    onConfirm: () => {},
    onCancel: () => {}
  });

  // 메인 스킬 그리드 컬럼
  const skillColumns = useMemo(() => [
    { key: 'center', name: '센터' },
    { key: 'tenant', name: '테넌트' },
    { key: 'skillId', name: '스킬아이디' },
    { key: 'skillName', name: '스킬이름' },
    { key: 'description', name: '설명' },
    { key: 'campaignCount', name: '소속캠페인 수' },
    { key: 'agentCount', name: '소속상담원 수' }
  ], []);

  // 캠페인 그리드 컬럼
  const campaignColumns = useMemo(() => [
    SelectColumn,
    { key: 'campaignId', name: '캠페인 아이디' },
    { key: 'campaignName', name: '캠페인 이름' },
    { key: 'mode', name: '캠페인 모드' }
  ], []);

  // 상담원 그리드 컬럼
  const agentColumns = useMemo(() => [
    SelectColumn,
    { key: 'teamId', name: '팀아이디' },
    { key: 'teamName', name: '팀이름' },
    { key: 'loginId', name: '로그인아이디' },
    { key: 'agentId', name: '상담원아이디' },
    { key: 'agentName', name: '상담원 이름' },
    { key: 'consultMode', name: '상담모드' }
  ], []);

  // 전체 데이터
  const skillRows: SkillRow[] = [
    { 
      center: 'Center A', 
      tenant: 'nexus', 
      skillId: 'SK001', 
      skillName: '일반상담', 
      description: '일반상담 스킬',
      campaignCount: 3,
      agentCount: 10
    },
    { 
      center: 'Center B', 
      tenant: 'nexus', 
      skillId: 'SK002', 
      skillName: 'VIP상담', 
      description: 'VIP고객 상담 스킬',
      campaignCount: 2,
      agentCount: 5
    }
  ];

  const allCampaignRows: CampaignRow[] = [
    { 
      skillId: 'SK001',
      campaignId: 'CP001', 
      campaignName: '일반상담 캠페인', 
      mode: 'Progressive'
    },
    { 
      skillId: 'SK001',
      campaignId: 'CP002', 
      campaignName: 'VIP상담 캠페인', 
      mode: 'Preview'
    },
    { 
      skillId: 'SK002',
      campaignId: 'CP003', 
      campaignName: '고객상담 캠페인', 
      mode: 'Progressive'
    }
  ];

  const allAgentRows: AgentRow[] = [
    { 
      skillId: 'SK001',
      teamId: 'T001',
      teamName: '일반상담팀',
      loginId: 'user1',
      agentId: 'AG001',
      agentName: '김상담',
      consultMode: '일반상담'
    },
    { 
      skillId: 'SK002',
      teamId: 'T002',
      teamName: 'VIP상담팀',
      loginId: 'user2',
      agentId: 'AG002',
      agentName: '이상담',
      consultMode: 'VIP상담'
    }
  ];

  const getRowClass = (row: any) => {
    return selectedSkill?.skillId === row.skillId ? 'bg-amber-50' : '';
  };

  const handleSkillClick = ({ row }: { row: SkillRow }) => {
    setSelectedSkill(row);
    setSelectedCampaignRows(new Set());
    setSelectedAgentRows(new Set());
    
    // 선택된 스킬에 해당하는 캠페인과 상담원 필터링
    const relatedCampaigns = allCampaignRows.filter(campaign => campaign.skillId === row.skillId);
    const relatedAgents = allAgentRows.filter(agent => agent.skillId === row.skillId);
    
    setFilteredCampaigns(relatedCampaigns);
    setFilteredAgents(relatedAgents);
  };

  const handleCampaignSelectionChange = (selectedRows: Set<string>) => {
    setSelectedCampaignRows(selectedRows);
  };

  const handleAgentSelectionChange = (selectedRows: Set<string>) => {
    setSelectedAgentRows(selectedRows);
  };

  const handleSkillUnassign = () => {
    if (selectedCampaignRows.size === 0) {
      showAlert('스킬을 해제할 캠페인을 선택해주세요.');
      return;
    }

    showConfirm('선택한 캠페인의 스킬을 해제하시겠습니까?', () => {
      console.log('Unassign skill from campaigns:', Array.from(selectedCampaignRows));
    });
  };

  const handleAgentSkillUnassign = () => {
    if (selectedAgentRows.size === 0) {
      showAlert('스킬을 해제할 상담원을 선택해주세요.');
      return;
    }

    showConfirm('선택한 상담원의 스킬을 해제하시겠습니까?', () => {
      console.log('Unassign skill from agents:', Array.from(selectedAgentRows));
    });
  };

  const handleNew = () => {
    setSelectedSkill(null);
    setSelectedCampaignRows(new Set());
    setSelectedAgentRows(new Set());
    setFilteredCampaigns([]);
    setFilteredAgents([]);
  };

  const handleSave = () => {
    if (!selectedSkill) {
      showAlert('저장할 스킬을 선택해주세요.');
      return;
    }

    showConfirm('저장하시겠습니까?', () => {
      console.log('Save skill:', selectedSkill);
    });
  };

  const handleDelete = () => {
    if (!selectedSkill) {
      showAlert('삭제할 스킬을 선택해주세요.');
      return;
    }

    showConfirm(`선택된 열을 삭제 하시겠습니까?\n ※ 주의 : 삭제 시 데이터베이스에서 완전 삭제됩니다. \n다시 한번 확인해 주시고 삭제해 주세요.`, () => {
      console.log('Delete skill:', selectedSkill);
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

  return (
    <div className="flex">
      <div className="flex gap-8">
        <div className="w-[800px] flex flex-col gap-3">

          {/* 왼쪽 스킬 목록 그리드 */}
          <div>
            <TitleWrap title="스킬 목록" totalCount={skillRows.length.toString()} />
            <div className="grid-custom-wrap h-[230px]">
            <DataGrid
                columns={skillColumns}
                rows={skillRows}
                className="grid-custom"
                onCellClick={handleSkillClick}
                rowKeyGetter={(row) => row.skillId}
                selectedRows={selectedSkill ? new Set([selectedSkill.skillId]) : new Set()}
                rowHeight={26}
                headerRowHeight={26}
                rowClass={getRowClass}
              />
            </div>
          </div>
          
          {/* 소속 캠페인 목록 */}
          <div>
            <TitleWrap 
              title="소속 캠페인 목록" 
              totalCount={filteredCampaigns.length.toString()}
              buttons={[
                { 
                  label: "선택 캠페인 스킬할당 해제",
                  onClick: handleSkillUnassign
                },
              ]}
            />
            <div className="grid-custom-wrap h-[200px]">
             <DataGrid
                columns={campaignColumns}
                rows={filteredCampaigns}
                className="grid-custom"
                rowKeyGetter={(row) => row.campaignId}
                selectedRows={selectedCampaignRows}
                onSelectedRowsChange={handleCampaignSelectionChange}
                rowHeight={26}
                headerRowHeight={26}
              />
            </div>
          </div>

        
          {/* 소속 상담원 목록 */}
          <div>
            <TitleWrap 
              title="소속 상담원 목록" 
              totalCount={filteredAgents.length.toString()}
              buttons={[
                { 
                  label: "선택 상담원 스킬할당 해제",
                  onClick: handleAgentSkillUnassign
                },
              ]}
            />
            <div className="grid-custom-wrap h-[200px]">
            <DataGrid
                columns={agentColumns}
                rows={filteredAgents}
                className="grid-custom"
                rowKeyGetter={(row) => row.agentId}
                selectedRows={selectedAgentRows}
                onSelectedRowsChange={handleAgentSelectionChange}
                rowHeight={26}
                headerRowHeight={26}
              />
            </div>
          </div>

        </div>

        {/* 오른쪽 상세 정보 */}
        <div className="w-[513px]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">상담센터</Label>
              <CustomInput 
                value={selectedSkill?.center || ''}
                className="w-full"
                disabled
              />
            </div>

            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">테넌트</Label>
              <CustomInput 
                value={selectedSkill?.tenant || ''}
                className="w-full"
                disabled
              />
            </div>

            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">스킬아이디</Label>
              <CustomInput 
                value={selectedSkill?.skillId || ''}
                className="w-full"
                disabled
              />
            </div>

            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">스킬이름</Label>
              <CustomInput 
                value={selectedSkill?.skillName || ''}
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">설명</Label>
              <CustomInput 
                value={selectedSkill?.description || ''}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <CommonButton onClick={handleNew}>신규</CommonButton>
            <CommonButton onClick={handleDelete}>삭제</CommonButton>
            <CommonButton onClick={handleSave}>저장</CommonButton>
          </div>
          <div className="mt-[20px] text-sm">
              <ul className='space-y-1 notice-li'>
                <li>• 스킬을 추가, 수정, 삭제할 수 있습니다.</li>
                <li>• 사용 중인 스킬은 추가 및 삭제할 수 없습니다.</li>
                <li>• 기능설명<br/>스킬 추가 = 키보드<br/>스킬 삭제 = 키보드 Delete<br/>다중 선택 =  Shift 또는 Ctrl 키를 이용하여 다중 선택 가능</li>
                <li>• 단축키<br/>저장하기(Ctrl+S)<br/>삭제하기(Ctrl+D or Del)</li>
              </ul>
            </div>
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

export default SkillEdit;