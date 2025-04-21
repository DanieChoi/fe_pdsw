import React, { useState, useEffect, useMemo } from 'react';
import { CustomInput } from "@/components/shared/CustomInput";
import { Label } from "@/components/ui/label";
import DataGrid, { CellClickArgs } from 'react-data-grid';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { useCampainManagerStore, useMainStore } from '@/store';
import { SkillListDataResponse } from '@/features/campaignManager/types/campaignManagerIndex';
import CustomAlert from '@/components/shared/layout/CustomAlert';
import TitleWrap from "@/components/shared/TitleWrap";
import { useApiForSkills } from '@/features/campaignManager/hooks/useApiForSkills';
import { useApiForCallingNumber } from '@/features/campaignManager/hooks/useApiForCallingNumber';
import { useApiForCampaignSkill } from '@/features/campaignManager/hooks/useApiForCampaignSkill';

const dialModeList = [
  { dial_id: 1, dial_name: 'Power' },
  { dial_id: 2, dial_name: 'Progressive' },
  { dial_id: 3, dial_name: 'Predictive' },
  { dial_id: 4, dial_name: 'System Preview' },
];

interface CampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (campaignId: string, campaignName: string) => void;
}

interface CampaignHeaderSearch {
  tenantId: number;
  campaignName: string;
  dailMode: number;
  skill: number;
  callNumber: string;
}

interface Row {
  campaign_id: number;
  campaign_name: string;
  tenant_name: string;
  skills: string;
}

export default function CampaignModal({ isOpen, onClose, onSelect }: CampaignModalProps) {
  const { tenants, campaigns } = useMainStore();
  const { campaignSkills, setCampaignSkills, callingNumbers, setCallingNumbers } = useCampainManagerStore();
  const [skills, setSkills] = useState<SkillListDataResponse[]>([]);
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null);
  const [tenantId, setTenantId] = useState('all');
  const [campaignName, setCampaignName] = useState('');
  const [dailMode, setDailMode] = useState('all');
  const [skill, setSkill] = useState('all');
  const [callNumber, setCallNumber] = useState('');
  const [tempSkills, setTempSkills] = useState<SkillListDataResponse[]>([]);
  const [filteredRows, setFilteredRows] = useState<Row[]>([]);

  // 발신번호
  const { mutate: fetchCallingNumbers } = useApiForCallingNumber({
    onSuccess: (data) => {
      setCallingNumbers(data.result_data||[]);
    }
  });

  // 검색 스킬
  const { mutate: fetchSkills } = useApiForSkills({
    onSuccess: (data) => {
      setSkills(data.result_data);
    }
  });

  // 그리드스킬 조회
  const { mutate: fetchCampaignSkills } = useApiForCampaignSkill({
    onSuccess: (data) => {
      setCampaignSkills(data.result_data);
    }
  });

  useEffect(() => {
    fetchSkills({
      tenant_id_array: tenants.map(t => t.tenant_id)
    });

    fetchCampaignSkills({
      session_key: '',
      tenant_id: 0,
    });
    
    fetchCallingNumbers({
      session_key: '',
      tenant_id: 0,
    });
  }, [tenants, fetchSkills, fetchCallingNumbers, fetchCampaignSkills]);

  const columns = useMemo(() => [
    { 
      key: 'campaign_id', 
      name: '캠페인 아이디',
      width: 150,
    },
    { 
      key: 'campaign_name', 
      name: '캠페인 이름',
      width: 244,
    },
    { 
      key: 'tenant_name', 
      name: '테넌트',
      width: 150,
    },
    { 
      key: 'skills', 
      name: '스킬',
      width: 200,
    }
  ], []);


  /*
  const rows = useMemo(() => 
    campaigns.map((campaign) => {
      const tenant = tenants.find(t => t.tenant_id === campaign.tenant_id);
      
      // 캠페인에 해당하는 스킬 ID 배열 찾기
      const campaignSkill = campaignSkills
        .find(c => c.campaign_id === campaign.campaign_id);
      
      // 스킬 ID에 해당하는 스킬 이름 찾기
      const skillNames = skills
        .filter(skill => campaignSkill?.skill_id?.includes(skill.skill_id))
        .map(skill => skill.skill_name)
        .join(', ');

      return {
        campaign_id: campaign.campaign_id,
        campaign_name: campaign.campaign_name,
        tenant_name: tenant?.tenant_name || '',
        skills: skillNames,
      };
    }), 
    // [campaigns, tenants, skills, campaignSkills]
    [isOpen]
  );

  useEffect(() => {
    setFilteredRows(rows);
  }, [rows]);
  */


  const handleOpen = () => {
    const updatedRows = campaigns.map((campaign) => {
      const tenant = tenants.find((t) => t.tenant_id === campaign.tenant_id);

      // 캠페인에 해당하는 스킬 ID 배열 찾기
      const campaignSkill = campaignSkills.find(
        (c) => c.campaign_id === campaign.campaign_id
      );

      // 스킬 ID에 해당하는 스킬 이름 찾기
      const skillNames = skills
        .filter((skill) => campaignSkill?.skill_id?.includes(skill.skill_id))
        .map((skill) => skill.skill_name)
        .join(", ");

      return {
        campaign_id: campaign.campaign_id,
        campaign_name: campaign.campaign_name,
        tenant_name: tenant?.tenant_name || "",
        skills: skillNames,
      };
    });

    setFilteredRows(updatedRows);
  };

  useEffect(() => {
    if (isOpen) {
      handleOpen();
    }
  }, [isOpen]);

  const handleCellClick = ({ row }: CellClickArgs<Row>) => {
    const campaign = campaigns.find(c => c.campaign_id === row.campaign_id);
    if (campaign) {
      setSelectedCampaign(campaign);
    }
  };

  const handleConfirm = () => {
    if (selectedCampaign) {
      onSelect(
        selectedCampaign.campaign_id.toString(),
        selectedCampaign.campaign_name
      );
    }
    onClose();
  };

  const handleClose = () => {
    setSelectedCampaign(null);
    onSelect('', '');
    onClose();
  };

  const onHeaderSearch = () => {
    const param: CampaignHeaderSearch = {
      tenantId: tenantId === 'all' ? -1 : Number(tenantId),
      campaignName: campaignName,
      dailMode: dailMode === 'all' ? -1 : Number(dailMode),
      skill: skill === 'all' ? -1 : Number(skill),
      callNumber: callNumber,
    };
    
    // Filter campaigns based on search parameters
    const filteredCampaigns = campaigns.filter(campaign => {
      // Tenant filter
      if (param.tenantId !== -1 && campaign.tenant_id !== param.tenantId) {
        return false;
      }
      
      // Campaign name filter
      if (param.campaignName && !campaign.campaign_name.toLowerCase().includes(param.campaignName.toLowerCase())) {
        return false;
      }
      
      // Dial mode filter
      if (param.dailMode !== -1 && campaign.dial_mode !== param.dailMode) {
        return false;
      }
      
      // Skill filter
      if (param.skill !== -1) {
        const campaignSkill = campaignSkills
          .find(c => c.campaign_id === campaign.campaign_id);
        if (!campaignSkill?.skill_id?.includes(param.skill)) {
          return false;
        }
      }
      
      // Call number filter
      if (param.callNumber) {
        const campaignCallingNumber = callingNumbers
          .find(c => c.campaign_id === campaign.campaign_id)
          ?.calling_number;
          
        if (!campaignCallingNumber?.toLowerCase().includes(param.callNumber.toLowerCase())) {
          return false;
        }
      }
      
      return true;
    });
    
    setFilteredRows(
      filteredCampaigns.map(campaign => {
        const tenant = tenants.find(t => t.tenant_id === campaign.tenant_id);
        
        // 캠페인에 해당하는 스킬 ID 배열 찾기
        const campaignSkill = campaignSkills
          .find(c => c.campaign_id === campaign.campaign_id);
        
        // 스킬 ID에 해당하는 스킬 이름 찾기
        const skillNames = skills
          .filter(skill => campaignSkill?.skill_id?.includes(skill.skill_id))
          .map(skill => skill.skill_name)
          .join(', ');

        return {
          campaign_id: campaign.campaign_id,
          campaign_name: campaign.campaign_name,
          tenant_name: tenant?.tenant_name || '',
          skills: skillNames,
        };
      })
    );
  };

  useEffect(() => {
    if (typeof tenantId != 'undefined') {
      if (tenantId === 'all') {
        setTempSkills(skills);
      } else {
        setTempSkills(skills.filter((skill) => skill.tenant_id === Number(tenantId)));
      }
    }
    setSkill('all');
  }, [tenantId, skills]);

  const modalContent = (
    <div className="w-full">
      {/* Search Section */}
      <TitleWrap
        title="조회조건"
        buttons={[
          { 
            label: "적용", 
            onClick: onHeaderSearch,
          },
        ]}
      />
      
      {/* Search Fields */}
      <div className="search-wrap flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            <Label className="w-20 min-w-20">테넌트</Label>
            <div className='w-[140px]'>
              <Select value={tenantId} onValueChange={setTenantId}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="테넌트" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  {tenants.map(option => (
                    <SelectItem key={option.tenant_id} value={option.tenant_id+''}>{option.tenant_name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Label className="w-20 min-w-20">캠페인이름</Label>
            <CustomInput 
              type="text" 
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
              className="w-[140px]"
            />
          </div>
          <div className="flex items-center gap-1">
            <Label className="w-20 min-w-20">다이얼모드</Label>
            <div className='w-[140px]'>
              <Select value={dailMode} onValueChange={setDailMode}>
                <SelectTrigger className="">
                  <SelectValue placeholder="다이얼모드" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  {dialModeList.map(option => (
                    <SelectItem key={option.dial_id} value={option.dial_id+''}>{option.dial_name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            <Label className="w-20 min-w-20">스킬</Label>
            <div className='w-[140px]'>
              <Select value={skill} onValueChange={setSkill}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="스킬" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  {tempSkills.map(option => (
                    <SelectItem key={option.skill_id} value={option.skill_id+''}>{option.skill_name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Label className="w-20 min-w-20">발신번호</Label>
            <CustomInput 
              type="text" 
              value={callNumber}
              onChange={(e) => setCallNumber(e.target.value)}
              className="w-[140px]"
              placeholder="발신번호 입력"
            />
          </div>
        </div>
      </div>

      <TitleWrap 
        title="캠페인 검색목록" 
        totalCount={filteredRows.length} 
        className='mt-[14px]'
      />

      {/* Grid */}
      <div className="grid-custom-wrap h-[400px]">
        <DataGrid
          columns={columns}
          rows={filteredRows}
          className="grid-custom"
          rowKeyGetter={(row) => row.campaign_id}
          onCellClick={handleCellClick}
          selectedRows={selectedCampaign ? new Set<number>([selectedCampaign.campaign_id]) : new Set<number>()}
          rowClass={(row) => 
            selectedCampaign?.campaign_id === row.campaign_id ? 'bg-[#FFFAEE]' : ''
          }
          rowHeight={26}
          headerRowHeight={26}
        />
      </div>
    </div>
  );

  return (
    <CustomAlert
      isOpen={isOpen}
      title="캠페인 조회"
      message={modalContent}
      type="1"
      onClose={handleConfirm}
      onCancle={handleClose}
      width="max-w-modal" 
    />
  );
}