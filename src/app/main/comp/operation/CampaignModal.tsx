import React, { useState, useEffect, useMemo } from 'react';
import { CustomInput } from "@/components/shared/CustomInput";
import { Label } from "@/components/ui/label";
import DataGrid, { CellClickArgs } from 'react-data-grid';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { useMainStore, useCampainManagerStore } from '@/store';
import { SkillListDataResponse } from '@/features/campaignManager/types/campaignManagerIndex';
import CustomAlert from '@/components/shared/layout/CustomAlert';
import TitleWrap from "@/components/shared/TitleWrap";

const dialModeList = [
  {dial_id:1, dial_name: 'Power'},
  {dial_id:2, dial_name: 'Progressive'},
  {dial_id:3, dial_name: 'Predictive'},
  {dial_id:4, dial_name: 'System Preview'},
];

interface CampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (campaign: string) => void;
}

interface Row {
  campaign_id: number;
  campaign_name: string;
  tenant_name: string;
  skills: string;
}

export default function CampaignModal({ isOpen, onClose, onSelect }: CampaignModalProps) {
  const { tenants, campaigns } = useMainStore();
  const { skills } = useCampainManagerStore();
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null);
  const [tenantId, setTenantId] = useState('all');
  const [campaignName, setCampaignName] = useState('');
  const [dailMode, setDailMode] = useState('all');
  const [skill, setSkill] = useState('all');
  const [callNumber, setCallNumber] = useState('');
  const [tempSkills, setTempSkills] = useState<SkillListDataResponse[]>([]);

  
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

  const rows = useMemo(() => 
    campaigns.map((campaign) => {
      const tenant = tenants.find(t => t.tenant_id === campaign.tenant_id);
      const campaignSkills = skills
        .filter(skill => skill.tenant_id === campaign.tenant_id)
        .map(skill => skill.skill_name)
        .join(', ');

      return {
        campaign_id: campaign.campaign_id,
          campaign_name: campaign.campaign_name,
          tenant_name: tenant?.tenant_name || '',
          skills: campaignSkills,
      };
    }), 
    [campaigns, tenants, skills]
  );
  
   // 그리드 행 클릭 핸들러
   const handleCellClick = ({ row }: CellClickArgs<Row>) => {
    const campaign = campaigns.find(c => c.campaign_id === row.campaign_id);
    if (campaign) {
      setSelectedCampaign(campaign);
    }
  };

  // 확인 버튼 클릭 시
  const handleConfirm = () => {
    if (selectedCampaign) {
      const tenant = tenants.find(t => t.tenant_id === selectedCampaign.tenant_id);
      onSelect(tenant?.tenant_name || '');
    }
    onClose();
  };

  // 닫기 버튼 클릭 시
  const handleClose = () => {
    setSelectedCampaign(null);
    onSelect('');
    onClose();
  };

  const onHeaderSearch = () => {
    const param = {
      tenantId: tenantId === 'all' ? -1 : Number(tenantId),
      campaignName: campaignName,
      dailMode: dailMode === 'all' ? -1 : Number(dailMode),
      skill: skill === 'all' ? -1 : Number(skill),
      callNumber: callNumber,
    };
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

      {/* List Header */}


      <TitleWrap title="캠페인 검색목록" totalCount={campaigns.length} className='mt-[14px]'/>

      {/* Grid */}
      <div className="grid-custom-wrap h-[400px]">
        <DataGrid
          columns={columns}
          rows={rows}
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