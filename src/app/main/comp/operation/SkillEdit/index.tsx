import React, { useState, useMemo, useEffect } from 'react';
import DataGrid, { SelectColumn } from "react-data-grid";
import { CommonButton } from "@/components/shared/CommonButton";
import { CustomInput } from "@/components/shared/CustomInput";
import { Label } from "@/components/ui/label";
import CustomAlert from '@/components/shared/layout/CustomAlert';
import TitleWrap from "@/components/shared/TitleWrap";
import 'react-data-grid/lib/styles.css';
import { useApiForCounselorAssignList, useApiForCounselorList } from '@/features/preferences/hooks/useApiForCounselorList';
import { useApiForCampaignList, useApiForSkillAgentList, useApiForSkillCampaignList, useApiForSkillList } from '@/features/preferences/hooks/useApiForSkill';
import { useAuthStore, useMainStore } from '@/store';
import { CounselorAssignListResponse } from '@/features/preferences/types/SystemPreferences';

// 메인 스킬 정보
interface SkillRow {
  center: string;
  tenant: string;
  tenantId: number;
  skillId: string;
  skillName: string;
  description: string;
  campaignCount: number;
  agentCount: number;
}

// 캠페인 정보 (그리드용)
interface CampaignRow {
  skillId: string;
  campaignId: string;
  campaignName: string;
  mode: string;
}

// 상담원 정보 (그리드용)
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
  const { tenants, campaigns } = useMainStore();
  const { tenant_id, role_id } = useAuthStore();
  const [rows, setRows] = useState<SkillRow[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<SkillRow | null>(null);
  const [selectedCampaignRows, setSelectedCampaignRows] = useState<Set<string>>(new Set());
  const [selectedAgentRows, setSelectedAgentRows] = useState<Set<string>>(new Set());
  const [filteredCampaigns, setFilteredCampaigns] = useState<CampaignRow[]>([]);
  const [filteredAgents, setFilteredAgents] = useState<AgentRow[]>([]);
  const [allCampaigns, setAllCampaigns] = useState<CampaignRow[]>([]);
  
  const [alertState, setAlertState] = useState({
    isOpen: false,
    message: '',
    title: '알림',
    type: '1',
    onConfirm: () => {},
    onCancel: () => {}
  });

  // 스킬 그리드 컬럼
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

  const getBlendKindText = (blendKind: string): string => {
    switch (blendKind) {
      case '1': return '인바운드';
      case '2': return '아웃바운드';
      case '3': return '블렌드';
      default: return '일반상담';
    }
  };

  // 캠페인 발신 모드 변환 함수
  const getDialModeText = (dialMode: number): string => {
    switch (dialMode) {
      case 1: return 'Power Mode';
      case 2: return 'Progressive Mode';
      case 3: return 'Predictive Mode';
      case 5: return 'Preview Mode';
      default: return 'Unknown';
    }
  };

  const getRowClass = (row: any) => {
    return selectedSkill?.skillId === row.skillId ? 'bg-amber-50' : '';
  };

  // 스킬 로우 클릭 시, 선택된 스킬의 skill_id와 일치하는 캠페인 API 응답의 campaign_id 목록을 이용해 전체 캠페인 리스트에서 필터링
  const handleSkillClick = ({ row }: { row: SkillRow }) => {
    setSelectedSkill(row);
    setSelectedCampaignRows(new Set());
    setSelectedAgentRows(new Set());
    
    let relatedCampaigns: CampaignRow[] = [];
    if (campaignData && campaignData.result_data) {
      const skillCampaignEntry = campaignData.result_data.find(
        (entry: any) => String(entry.skill_id) === row.skillId
      );
      const campaignIds: string[] = skillCampaignEntry ? skillCampaignEntry.campaign_id : [];
      relatedCampaigns = allCampaigns.filter(campaign => campaignIds.includes(campaign.campaignId));
    }
    setFilteredCampaigns(relatedCampaigns);
    
    // 상담원은 예제 데이터(allAgentRows)를 그대로 사용 (필요시 API 응답으로 대체)
    const relatedAgents = allAgentRows.filter(agent => agent.skillId === row.skillId);
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

  // 예제용 전체 상담원 데이터 (상세 그리드에서 사용)
  const [allAgentRows] = useState<AgentRow[]>([
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
  ]);

  // API: 상담원 리스트와 스킬 리스트
  const { mutate: fetchCounselorList, data: counselorData } = useApiForCounselorList({
    onError: (error) => {
      console.error('상담원 리스트 조회 실패:', error);
      // showAlert('상담원 리스트를 불러오지 못했습니다.');
    }
  });
  const { mutate: fetchSkillList, data: skillData } = useApiForSkillList({
    onError: (error) => {
      console.error('스킬 리스트 조회 실패:', error);
      // showAlert('스킬 리스트를 불러오지 못했습니다.');
    }
  });
  
  // API: 스킬 할당 캠페인 리스트 조회
  const [campaignData, setCampaignData] = useState<any>(null);
  const { mutate: fetchSkillCampaignList } = useApiForSkillCampaignList({
    onSuccess: (data) => {
      setCampaignData(data);
    }
  });
  
  // API: 스킬 할당 상담원 리스트 조회
  const [agentData, setAgentData] = useState<any>(null);
  const { mutate: fetchSkillAgentList } = useApiForSkillAgentList({
    onSuccess: (data) => {
      setAgentData(data);
    }
  });

  // API: 캠페인 리스트 조회
  const { mutate: fetchCampaignList } = useApiForCampaignList({
    onSuccess: (data) => {
      // Convert API response to CampaignRow format
      const campaigns = data.result_data.map((campaign: any) => ({
        skillId: '',
        campaignId: String(campaign.campaign_id),
        campaignName: campaign.campaign_name,
        mode: getDialModeText(campaign.dial_mode)
      }));
      setAllCampaigns(campaigns);
    }
  });
  
  // API: 스킬 할당 상담사 목록 가져오기
  const { mutate: fetchCounselorAssignList } = useApiForCounselorAssignList({
    onSuccess: (data: CounselorAssignListResponse) => {
      if (data.skillAssignedCounselorList) {
        const mappedAgents: AgentRow[] = data.skillAssignedCounselorList.map(counselor => ({
          skillId: selectedSkill?.skillId || '',  
          teamId: counselor.affiliationTeamId,
          teamName: counselor.affiliationTeamName,
          loginId: counselor.counselorId,
          agentId: counselor.counselorEmplNum,
          agentName: counselor.counselorname,
          consultMode: getBlendKindText(counselor.blendKind)
        }));
        setFilteredAgents(mappedAgents);
      }
    }
  });
  
  // 컴포넌트 마운트 시 API 호출 (테넌트, 캠페인, 스킬, 할당 캠페인/상담원)
  useEffect(() => {
    fetchCounselorList({ tenantId: tenant_id, roleId: role_id });
    fetchSkillList({ tenant_id_array: tenants.map(tenant => tenant.tenant_id) });
    fetchSkillCampaignList();
    fetchSkillAgentList();
    fetchCampaignList();
    fetchCounselorAssignList({
      tenantId: selectedSkill ? selectedSkill.tenantId : tenant_id,
      skillId: selectedSkill ? Number(selectedSkill.skillId) : 0
    })
  }, [tenant_id, role_id, tenants, fetchCounselorList, fetchSkillList, fetchSkillCampaignList, fetchSkillAgentList, fetchCampaignList, fetchCounselorAssignList, selectedSkill]);

  // 상담원, 스킬, 캠페인, 상담원 API 응답 데이터를 통합하여 그리드에 표시할 행 구성
  useEffect(() => {
    if (
      counselorData &&
      counselorData.organizationList &&
      skillData &&
      skillData.result_data
    ) {
      const tenantMap: { [tenantId: string]: { centerName: string; tenantName: string } } = {};
      counselorData.organizationList.forEach(org => {
        const centerName = org.centerName;
        org.tenantInfo.forEach(tenant => {
          tenantMap[tenant.tenantId] = {
            centerName,
            tenantName: tenant.tenantName
          };
        });
      });
      
      const campaignResultData = (campaignData && campaignData.result_data) || [];
      const agentResultData = (agentData && agentData.result_data) || [];
      
      const skillRows: SkillRow[] = (skillData.result_data || []).map(skill => {
        const tenantInfo = tenantMap[String(skill.tenant_id)] || { centerName: '', tenantName: '' };
        const campaignEntry = campaignResultData.find((item: any) => String(item.skill_id) === String(skill.skill_id));
        const agentEntry = agentResultData.find((item: any) => String(item.skill_id) === String(skill.skill_id));
        return {
          center: tenantInfo.centerName,
          tenant: tenantInfo.tenantName,
          tenantId: skill.tenant_id,
          skillId: String(skill.skill_id),
          skillName: skill.skill_name,
          description: skill.skill_description,
          campaignCount: campaignEntry ? campaignEntry.campaign_id.length : 0,
          agentCount: agentEntry ? agentEntry.agent_id.length : 0
        };
      });
      setRows(skillRows);
    }
  }, [counselorData, skillData, campaignData, agentData]);

  return (
    <div className="flex">
      <div className="flex gap-8">
        <div className="w-[800px] flex flex-col gap-3">
          {/* 왼쪽 스킬 목록 그리드 */}
          <div>
            <TitleWrap title="스킬 목록" totalCount={rows.length} />
            <div className="grid-custom-wrap h-[230px]">
              <DataGrid
                columns={skillColumns}
                rows={rows}
                className="grid-custom"
                onCellClick={handleSkillClick}
                rowKeyGetter={(row) => row.skillId}
                selectedRows={selectedSkill ? new Set<string>([selectedSkill.skillId]) : new Set<string>()}
                rowHeight={30}
                headerRowHeight={30}
                rowClass={getRowClass}
              />
            </div>
          </div>
          
          {/* 소속 캠페인 목록 */}
          <div>
            <TitleWrap 
              title="소속 캠페인 목록" 
              totalCount={filteredCampaigns.length}
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
                rowHeight={30}
                headerRowHeight={30}
              />
            </div>
          </div>

          {/* 소속 상담원 목록 */}
          <div>
            <TitleWrap 
              title="소속 상담원 목록" 
              totalCount={filteredAgents.length}
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
                rowHeight={30}
                headerRowHeight={30}
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
              <li>
                • 기능설명<br/>
                스킬 추가 = 키보드<br/>
                스킬 삭제 = 키보드 Delete<br/>
                다중 선택 = Shift 또는 Ctrl 키를 이용하여 다중 선택 가능
              </li>
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
