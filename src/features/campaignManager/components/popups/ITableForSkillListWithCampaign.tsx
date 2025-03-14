"use client";

import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SkillWithCampaigns {
  skillId: number;
  campaigns: { campaignId: number; tenantId: number }[];
}

interface Props {
  filteredSkills: SkillWithCampaigns[];
  expandedSkills: number[];
  selectedLeftCampaigns: number[];
  isLoading: boolean;
  hasError: boolean;
  toggleSkill: (skillId: number) => void;
  toggleLeftCampaignSelection: (campaignId: number) => void;
  toggleAllCampaigns: (checked: boolean) => void;
  getCampaignName: (campaignId: number) => string;
  getSkillName: (skillId: number) => string;
}

const ITableForSkillListWithCampaign: React.FC<Props> = ({
  filteredSkills = [],
  expandedSkills = [],
  selectedLeftCampaigns = [],
  isLoading,
  hasError,
  toggleSkill,
  toggleLeftCampaignSelection,
  toggleAllCampaigns,
  getCampaignName,
  getSkillName,
}) => {
  // Calculate if all visible campaigns are selected
  const allCampaignsCount = filteredSkills.reduce(
    (count, skill) => count + skill.campaigns.length,
    0
  );
  
  const allVisibleCampaignIds = filteredSkills.flatMap(skill => 
    skill.campaigns.map(campaign => campaign.campaignId)
  );
  
  const allSelected = allCampaignsCount > 0 && 
    allVisibleCampaignIds.every(id => selectedLeftCampaigns.includes(id));
  
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    toggleAllCampaigns(e.target.checked);
  };

  return (
    <>
      {isLoading ? (
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
              <th className="w-8">
                <div className="py-1 px-2 flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={handleSelectAll}
                    className="h-3 w-3 cursor-pointer"
                    title="전체 선택"
                  />
                </div>
              </th>
              <th className="text-left py-1 px-2 font-medium">스킬</th>
              <th className="text-left py-1 px-2 font-medium w-1/4">캠페인ID</th>
              <th className="text-left py-1 px-2 font-medium w-1/2">캠페인 이름</th>
            </tr>
          </thead>
          <tbody>
            {filteredSkills.map((skill) => {
              const isExpanded = expandedSkills.includes(skill.skillId);
              return (
                <React.Fragment key={`skill-${skill.skillId}`}>
                  {/* 스킬 행 */}
                  <tr className={`border-b ${isExpanded ? "bg-blue-100" : "bg-blue-50"}`}>
                    <td className="py-1 px-2 align-middle">
                      <button
                        className="focus:outline-none"
                        onClick={() => toggleSkill(skill.skillId)}
                      >
                        {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                      </button>
                    </td>
                    <td
                      className="py-1 px-2 align-middle cursor-pointer"
                      onClick={() => toggleSkill(skill.skillId)}
                    >
                      <span className="font-medium">{getSkillName(skill.skillId)}</span>
                    </td>
                    <td className="py-1 px-2 align-middle"></td>
                    <td className="py-1 px-2 align-middle"></td>
                  </tr>

                  {/* 캠페인 목록 (확장 시 표시) */}
                  {isExpanded &&
                    (skill.campaigns ?? []).map((campaign) => (
                      <tr
                        key={`campaign-${skill.skillId}-${campaign.campaignId}`}
                        className="border-b bg-white hover:bg-gray-50"
                      >
                        <td className="py-1 px-2 align-middle">
                          <input
                            type="checkbox"
                            checked={selectedLeftCampaigns.includes(campaign.campaignId)}
                            onChange={() => toggleLeftCampaignSelection(campaign.campaignId)}
                            className="h-3 w-3 cursor-pointer"
                          />
                        </td>
                        <td className="py-1 px-2 align-middle text-gray-600">
                          {getSkillName(skill.skillId)}
                        </td>
                        <td className="py-1 px-2 align-middle">{campaign.campaignId}</td>
                        <td className="py-1 px-2 align-middle text-blue-600">
                          {getCampaignName(campaign.campaignId)}
                        </td>
                      </tr>
                    ))}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ITableForSkillListWithCampaign;