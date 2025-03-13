// src/features/campaignManager/components/popups/CampaignAddPopup.tsx
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import useApiForGetSkillsWithCampaigns from '@/widgets/sidebar/hooks/useApiForGetSkillsWithCampaigns';
import { useTotalCampaignListForAddCampaignToCampaignGroup } from '@/widgets/sidebar/hooks/useTotalCampaignListForAddCampaignToCampaignGroup';
import { useTotalSkillListForAddCampaignToCampaignGroup } from '@/widgets/sidebar/hooks/useTotalSkillListForAddCampaignToCampaignGroup';
import useApiForGetCampaignListForCampaignGroup from '@/widgets/sidebar/hooks/useApiForGetCampaignListForCampaignGroup';
import { CampaignInfo, SkillInfo } from '@/widgets/sidebar/api/type/typeForAddCampaignForCampaignGroup';
import GroupCampaignList from './GroupCampaignList';

interface SkillWithCampaigns {
  skillId: number;
  campaigns: { campaignId: number; tenantId: number }[];
}

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
              skillMap[skillId].campaigns.push({ campaignId: campaign.campaign_id, tenantId: campaign.tenant_id });
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
  const hasError = error || campaignError || skillError || groupError;

  const getCampaignName = (campaignId: number): string =>
    campaignLookup[campaignId]?.campaign_name || `캠페인 ${campaignId}`;
  const getSkillName = (skillId: number): string =>
    skillLookup[skillId]?.skill_name || `스킬 ${skillId}`;

  // 캠페인 이름 및 ID로 필터링하는 로직 (각 스킬별 캠페인도 필터링)
  const filteredSkills = useMemo(() => {
    if (!searchTerm) return skillsWithCampaigns;
    const term = searchTerm.toLowerCase();
    return skillsWithCampaigns
      .map(skill => {
        const skillMatches =
          String(skill.skillId).includes(term) ||
          getSkillName(skill.skillId).toLowerCase().includes(term);
        // 스킬이 일치하지 않으면 캠페인들만 필터
        const filteredCampaigns = skill.campaigns.filter(c =>
          String(c.campaignId).includes(term) ||
          getCampaignName(c.campaignId).toLowerCase().includes(term)
        );
        if (skillMatches) {
          return { ...skill, campaigns: skill.campaigns };
        }
        return { ...skill, campaigns: filteredCampaigns };
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

  const groupCampaignsData = useMemo(() => {
    return (groupData?.result_data || []).filter(item => item.group_id === groupId);
  }, [groupData, groupId]);

  const handleConfirm = () => {
    const finalIds = groupCampaignsData.map(item => item.campaign_id);
    if (onSelect) onSelect(finalIds);
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow-md w-[70%] max-h-[1000px] flex flex-col overflow-hidden">
        <div className="flex justify-between items-center px-4 py-2 border-b bg-gray-50">
          <h2 className="text-sm font-medium">캠페인 추가 (그룹ID: {groupId})</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-lg">×</button>
        </div>
        <div className="px-4 py-2 border-b">
          <input
            type="text"
            placeholder="검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-1 px-2 text-xs border border-gray-300 rounded"
          />
        </div>
        <div className="flex-1 overflow-hidden flex flex-col p-2">
          <div className="px-2 py-1 border-b flex justify-between items-center bg-slate-50">
            <h3 className="text-xs font-medium">전체 캠페인 목록 (총 {totalCampaigns}건)</h3>
          </div>
          <div className="flex flex-1 mt-2 overflow-hidden">
            <div className="flex-1 border mr-4 overflow-auto rounded">
              {isLoadingAny ? (
                <div className="flex items-center justify-center h-full text-sm">로딩 중...</div>
              ) : hasError ? (
                <div className="flex items-center justify-center h-full text-red-500 text-sm">
                  데이터 로드 중 오류 발생
                </div>
              ) : filteredSkills.length === 0 ? (
                <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                  검색 결과가 없습니다.
                </div>
              ) : (
                <table className="w-full border-collapse table-fixed text-xs">
                  <thead>
                    <tr className="bg-white border-b">
                      <th className="w-8"></th>
                      <th className="text-left py-1 px-2 font-medium">스킬</th>
                      <th className="text-left py-1 px-2 font-medium w-1/4">캠페인ID</th>
                      <th className="text-left py-1 px-2 font-medium w-1/2">캠페인 이름</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSkills.map(skill => {
                      const isExpanded = expandedSkills.includes(skill.skillId);
                      return (
                        <React.Fragment key={`skill-${skill.skillId}`}>
                          <tr className={`border-b ${isExpanded ? 'bg-blue-100' : 'bg-blue-50'}`}>
                            <td className="py-1 px-2 align-middle">
                              <button className="focus:outline-none" onClick={() => toggleSkill(skill.skillId)}>
                                {isExpanded ? <span className="text-xs">▼</span> : <span className="text-xs">►</span>}
                              </button>
                            </td>
                            <td className="py-1 px-2 align-middle cursor-pointer" onClick={() => toggleSkill(skill.skillId)}>
                              <span className="font-medium">{getSkillName(skill.skillId)}</span>
                            </td>
                            <td className="py-1 px-2 align-middle"></td>
                            <td className="py-1 px-2 align-middle"></td>
                          </tr>
                          {isExpanded &&
                            skill.campaigns.map(campaign => (
                              <tr key={`campaign-${skill.skillId}-${campaign.campaignId}`} className="border-b bg-white hover:bg-gray-50">
                                <td className="py-1 px-2 align-middle">
                                  <input
                                    type="checkbox"
                                    checked={selectedLeftCampaigns.includes(campaign.campaignId)}
                                    onChange={() => toggleLeftCampaignSelection(campaign.campaignId)}
                                    className="h-3 w-3 cursor-pointer"
                                  />
                                </td>
                                <td className="py-1 px-2 align-middle text-gray-600">{getSkillName(skill.skillId)}</td>
                                <td className="py-1 px-2 align-middle">{campaign.campaignId}</td>
                                <td className="py-1 px-2 align-middle text-blue-600">{getCampaignName(campaign.campaignId)}</td>
                              </tr>
                            ))}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
            <div className="flex-1 border ml-4 overflow-auto rounded">
              <GroupCampaignList isLoading={isLoadingGroup} groupCampaigns={groupCampaignsData} />
            </div>
          </div>
        </div>
        <div className="py-2 px-4 border-t bg-gray-50 flex justify-between items-center">
          <div className="text-xs text-gray-600">{groupCampaignsData.length}개의 캠페인 선택됨</div>
          <div className="space-x-2">
            <button onClick={onClose} className="px-3 py-1 text-xs bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
              취소
            </button>
            <button onClick={handleConfirm} className="px-3 py-1 text-xs rounded bg-blue-500 text-white hover:bg-blue-600">
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignAddPopup;
