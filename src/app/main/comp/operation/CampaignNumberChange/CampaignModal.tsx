import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from 'lucide-react';
import { useMainStore, useCampainManagerStore } from '@/store';
import { SkillListDataResponse } from '@/features/auth/types/campaignManagerIndex';

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

  // 그리드 행 클릭 핸들러
  const handleRowClick = (campaign: any) => {
    setSelectedCampaign(campaign);
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
    onSelect('');  // 빈 문자열 전달
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[480px] bg-white p-0 rounded-none">
        <DialogTitle className="sr-only">캠페인 조회</DialogTitle>
        {/* Header */}
        <div className="px-4 py-3 flex justify-between items-center border-b">
          <h2 className="text-base">캠페인 조회</h2>
          <button onClick={onClose} className="hover:text-gray-600">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Section */}
        <div className="p-4">
          {/* Search Label & Button */}
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm">조회조건</span>
            <Button 
              onClick={onHeaderSearch}
              className="bg-[#00c2b3] hover:bg-[#00c2b3]/90 text-white h-8 px-4 rounded"
            >
              조회
            </Button>
          </div>

          {/* Search Fields */}
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label className="text-sm block mb-1">테넌트</Label>
                <Select defaultValue='all' value={tenantId} onValueChange={setTenantId}>
                  <SelectTrigger className="h-9 border-gray-200">
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
              <div>
                <Label className="text-sm block mb-1">캠페인이름</Label>
                <Input 
                  type="text" 
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  className="h-9 border-gray-200"
                />
              </div>
              <div>
                <Label className="text-sm block mb-1">다이얼모드</Label>
                <Select defaultValue='all' value={dailMode} onValueChange={setDailMode}>
                  <SelectTrigger className="h-9 border-gray-200">
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm block mb-1">스킬</Label>
                <Select defaultValue='all' value={skill} onValueChange={setSkill}>
                  <SelectTrigger className="h-9 border-gray-200">
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
              <div>
                <Label className="text-sm block mb-1">발신번호</Label>
                <Input 
                  type="text" 
                  value={callNumber}
                  onChange={(e) => setCallNumber(e.target.value)}
                  className="h-9 border-gray-200"
                  placeholder="발신번호 입력"
                />
              </div>
            </div>
          </div>
        </div>

        {/* List Header */}
        <div className="px-4 py-2 bg-gray-50 border-t border-b">
          <div className="flex items-center gap-1">
            <span className="text-sm">캠페인 검색목록</span>
            <span className="text-sm text-[#00c2b3]">(총 6 건)</span>
          </div>
        </div>

        {/* Grid */}
        <div className="p-4">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="text-sm font-normal text-center">캠페인 아이디</TableHead>
                <TableHead className="text-sm font-normal text-center">캠페인 이름</TableHead>
                <TableHead className="text-sm font-normal text-center">테넌트</TableHead>
                <TableHead className="text-sm font-normal text-center">스킬</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => {
                const tenant = tenants.find(tenant => tenant.tenant_id === campaign.tenant_id);
                const campaignSkills = skills.filter(skill => skill.tenant_id === campaign.tenant_id)
                  .map(skill => skill.skill_name)
                  .join(', ');

                return (
                  <TableRow 
                    key={campaign.campaign_id} 
                    className={`hover:bg-gray-50 cursor-pointer ${
                      selectedCampaign?.campaign_id === campaign.campaign_id ? 'bg-cyan-50' : ''
                    }`}
                    onClick={() => handleRowClick(campaign)}
                  >
                    <TableCell className="text-sm text-center">{campaign.campaign_id}</TableCell>
                    <TableCell className="text-sm text-center">{campaign.campaign_name}</TableCell>
                    <TableCell className="text-sm text-center">{tenant?.tenant_name}</TableCell>
                    <TableCell className="text-sm text-center">{campaignSkills}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          {/* Buttons */}
          <div className="flex justify-end gap-1 mt-4">
            <Button 
              className="bg-[#00c2b3] hover:bg-[#00c2b3]/90 text-white h-8 px-4 rounded"
              onClick={handleConfirm}
            >
              확인
            </Button>
            <Button 
              variant="outline" 
              onClick={handleClose}
              className="h-8 px-4 rounded"
            >
              닫기
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}