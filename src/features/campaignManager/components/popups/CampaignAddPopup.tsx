"use client";

import React, { useState, useEffect, useMemo } from 'react';
import useApiForGetSkillsWithCampaigns from '@/widgets/sidebar/hooks/useApiForGetSkillsWithCampaigns';
import { useTotalCampaignListForAddCampaignToCampaignGroup } from '@/widgets/sidebar/hooks/useTotalCampaignListForAddCampaignToCampaignGroup';
import { useTotalSkillListForAddCampaignToCampaignGroup } from '@/widgets/sidebar/hooks/useTotalSkillListForAddCampaignToCampaignGroup';
import useApiForGetCampaignListForCampaignGroup from '@/widgets/sidebar/hooks/useApiForGetCampaignListForCampaignGroup';
import { CampaignInfo, SkillInfo } from '@/widgets/sidebar/api/type/typeForAddCampaignForCampaignGroup';
import GroupCampaignList from './GroupCampaignList';
import ITableForSkillListWithCampaign from './ITableForSkillListWithCampaign';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface SkillWithCampaigns {
  skillId: number;
  campaigns: { campaignId: number; tenantId: number }[];
}

// Import the CampaignGroupSkillsInfo type or define it here
type CampaignGroupSkillsInfo = any; // Replace 'any' with the actual type

interface Props {
  isOpen?: boolean;
  groupId: number;
  onClose?: () => void;
  onSelect?: (selectedCampaigns: number[]) => void;
}

const CampaignAddPopup: React.FC<Props> = ({ isOpen = true, onClose, onSelect, groupId }) => {
  const [skillsWithCampaigns, setSkillsWithCampaigns] = useState<SkillWithCampaigns[]>([]);
  const [expandedSkills, setExpandedSkills] = useState<number[]>([1]);
  const [selectedLeftCampaigns, setSelectedLeftCampaigns] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [campaignLookup, setCampaignLookup] = useState<Record<number, CampaignInfo>>({});
  const [skillLookup, setSkillLookup] = useState<Record<number, SkillInfo>>({});

  const { data, isLoading, error } = useApiForGetSkillsWithCampaigns(undefined, isOpen);
  const { data: campaignListData, isLoading: isLoadingCampaigns, error: campaignError } =
    useTotalCampaignListForAddCampaignToCampaignGroup(undefined, isOpen);
  const { data: skillListData, isLoading: isLoadingSkills, error: skillError } =
    useTotalSkillListForAddCampaignToCampaignGroup(undefined, isOpen);
  const { data: groupData, isLoading: isLoadingGroup, error: groupError } =
    useApiForGetCampaignListForCampaignGroup(groupId, undefined, undefined, isOpen);

  useEffect(() => {
    if (campaignListData?.result_data) {
      const lookup: Record<number, CampaignInfo> = {};
      campaignListData.result_data.forEach(campaign => {
        lookup[campaign.campaign_id] = campaign;
      });
      setCampaignLookup(lookup);
    }
  }, [campaignListData]);

  useEffect(() => {
    if (skillListData?.result_data) {
      const lookup: Record<number, SkillInfo> = {};
      skillListData.result_data.forEach(skill => {
        lookup[skill.skill_id] = skill;
      });
      setSkillLookup(lookup);
    }
  }, [skillListData]);

  useEffect(() => {
    if (data && data.result_data) {
      const skillMap: Record<number, SkillWithCampaigns> = {};
      data.result_data.forEach(campaign => {
        if (Array.isArray(campaign.skill_id)) {
          campaign.skill_id.forEach(skillId => {
            if (!skillMap[skillId]) {
              skillMap[skillId] = { skillId, campaigns: [] };
            }
            if (!skillMap[skillId].campaigns.some(c => c.campaignId === campaign.campaign_id)) {
              skillMap[skillId].campaigns.push({
                campaignId: campaign.campaign_id,
                tenantId: campaign.tenant_id
              });
            }
          });
        }
      });
      const skillArray = Object.values(skillMap).sort((a, b) => a.skillId - b.skillId);
      setSkillsWithCampaigns(skillArray);
    }
  }, [data]);

  useEffect(() => {
    if (isOpen) {
      setSelectedLeftCampaigns([]);
      setExpandedSkills([1]);
      setSearchTerm('');
    }
  }, [isOpen]);

  const isLoadingAny = isLoading || isLoadingCampaigns || isLoadingSkills;
  const hasError = Boolean(error || campaignError || skillError || groupError);

  const getCampaignName = (campaignId: number): string =>
    campaignLookup[campaignId]?.campaign_name || `캠페인 ${campaignId}`;
  const getSkillName = (skillId: number): string =>
    skillLookup[skillId]?.skill_name || `스킬 ${skillId}`;

  const filteredSkills = useMemo(() => {
    if (!searchTerm) return skillsWithCampaigns;
    const term = searchTerm.toLowerCase();
    return skillsWithCampaigns
      .map(skill => {
        const skillMatches =
          String(skill.skillId).includes(term) ||
          getSkillName(skill.skillId).toLowerCase().includes(term);
        const filteredCampaigns = skill.campaigns.filter(c =>
          String(c.campaignId).includes(term) ||
          getCampaignName(c.campaignId).toLowerCase().includes(term)
        );
        return {
          skillId: skill.skillId,
          campaigns: skillMatches ? skill.campaigns : filteredCampaigns
        };
      })
      .filter(skill => skill.campaigns.length > 0);
  }, [skillsWithCampaigns, searchTerm]);

  const totalCampaigns = useMemo(
    () => filteredSkills.reduce((acc, skill) => acc + skill.campaigns.length, 0),
    [filteredSkills]
  );

  const toggleSkill = (skillId: number) => {
    setExpandedSkills(prev =>
      prev.includes(skillId) ? prev.filter(id => id !== skillId) : [...prev, skillId]
    );
  };

  const toggleLeftCampaignSelection = (campaignId: number) => {
    setSelectedLeftCampaigns(prev =>
      prev.includes(campaignId) ? prev.filter(id => id !== campaignId) : [...prev, campaignId]
    );
  };

  const toggleAllCampaigns = (checked: boolean) => {
    if (checked) {
      // Select all visible campaigns
      const allCampaignIds = filteredSkills.flatMap(skill =>
        skill.campaigns.map(campaign => campaign.campaignId)
      );
      setSelectedLeftCampaigns(allCampaignIds);
    } else {
      // Deselect all
      setSelectedLeftCampaigns([]);
    }
  };

  const toggleAllGroupCampaigns = (checked: boolean) => {
    // This function is for illustration - in the design, group campaigns are always checked
    console.log(`Toggle all group campaigns: ${checked}`);
  };

  const groupCampaignsData = useMemo(() => {
    return (groupData?.result_data || []).filter(item => item.group_id === groupId);
  }, [groupData, groupId]);

  // 버튼 클릭 시 실제 이동 로직은 추후 구현
  const moveToGroup = () => {
    console.log("moveToGroup 버튼 클릭");
  };

  const moveToAll = () => {
    console.log("moveToAll 버튼 클릭");
  };

  const handleConfirm = () => {
    const finalIds = groupCampaignsData.map(item => item.campaign_id);
    if (onSelect) onSelect(finalIds);
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow-md w-[70%] max-h-[90vh] flex flex-col overflow-hidden">
        {/* 헤더 */}
        <div className="flex justify-between items-center px-4 py-2 border-b bg-gray-50">
          <h2 className="text-sm font-medium">캠페인 추가 (그룹ID: {groupId})</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-lg">
            ×
          </button>
        </div>

        {/* 검색 영역 */}
        <div className="px-4 py-2 border-b">
          <input
            type="text"
            placeholder="검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-1 px-2 text-xs border border-gray-300 rounded"
          />
        </div>

        {/* 본문 - 고정된 높이를 가지도록 설정 */}
        <div className="flex flex-col p-4 overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
          <div className="px-2 py-1 mb-2 border-b flex justify-between items-center bg-slate-50">
            <h3 className="text-xs font-medium">전체 캠페인 목록 (총 {totalCampaigns}건)</h3>
          </div>

          {/* 가로 레이아웃: 왼쪽 테이블 - 중앙 버튼 - 오른쪽 테이블 */}
          <div className="flex flex-1 h-full">
            {/* 왼쪽 테이블 - 수정된 스타일 */}
            <div className="flex-1 h-full">
              <div className="border rounded h-full overflow-hidden">
                <ITableForSkillListWithCampaign
                  filteredSkills={filteredSkills}
                  expandedSkills={expandedSkills}
                  selectedLeftCampaigns={selectedLeftCampaigns}
                  isLoading={isLoadingAny}
                  hasError={hasError}
                  toggleSkill={toggleSkill}
                  toggleLeftCampaignSelection={toggleLeftCampaignSelection}
                  toggleAllCampaigns={toggleAllCampaigns}
                  getCampaignName={getCampaignName}
                  getSkillName={getSkillName}
                />
              </div>
            </div>

            {/* 중앙 버튼 영역 */}
            <div className="flex flex-col items-center gap-2 min-w-[22px] justify-center px-2">
              <button
                className="w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50"
                onClick={moveToGroup}
                disabled={selectedLeftCampaigns.length === 0}
              >
                <ChevronRight size={14} />
              </button>
              <button
                className="w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50"
                onClick={moveToAll}
                disabled={groupCampaignsData.length === 0}
              >
                <ChevronLeft size={14} />
              </button>
            </div>

            {/* 오른쪽 테이블 - 수정된 스타일 */}
            <div className="flex-1 h-full">
              <div className="border rounded h-full overflow-hidden">
                <GroupCampaignList
                  isLoading={isLoadingGroup}
                  groupCampaigns={groupCampaignsData}
                  toggleAllGroupCampaigns={toggleAllGroupCampaigns}
                />
              </div>
            </div>
          </div>

        </div>
        <div className='h-5'></div>

        {/* 푸터 */}
        <div className="py-2 px-4 border-t bg-gray-50 flex justify-between items-center">
          <div className="text-xs text-gray-600">
            {groupCampaignsData.length}개의 캠페인 선택됨
          </div>
          <div className="space-x-2">
            <button
              onClick={onClose}
              className="px-3 py-1 text-xs bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
            >
              취소
            </button>
            <button
              onClick={handleConfirm}
              className="px-3 py-1 text-xs rounded bg-blue-500 text-white hover:bg-blue-600"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignAddPopup;