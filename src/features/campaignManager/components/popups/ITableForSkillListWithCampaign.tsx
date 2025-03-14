"use client";

import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import CommonCheckBox2 from "@/components/shared/CommonCheckBox2";

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

  return (
    <div className="flex flex-col h-full">
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
        <div className="flex-1 overflow-auto" style={{ paddingBottom: '20px' }}>
          <table className="w-full border-collapse table-fixed text-xs">
            <thead>
              <tr className="bg-white border-b sticky top-0 z-10">
                <th className="w-8 py-1 px-2 text-center">
                  <CommonCheckBox2
                    checked={allSelected}
                    onChange={toggleAllCampaigns}
                    title="전체 선택"
                  />
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
                      <td className="py-1 px-2 align-middle text-center">
                        {/* 스킬 레벨에는 체크박스 없음 */}
                      </td>
                      <td className="py-1 px-2 align-middle cursor-pointer" onClick={() => toggleSkill(skill.skillId)}>
                        <div className="flex items-center">
                          {isExpanded ? (
                            <ChevronDown size={14} className="mr-1 flex-shrink-0" />
                          ) : (
                            <ChevronRight size={14} className="mr-1 flex-shrink-0" />
                          )}
                          <span className="font-medium">{getSkillName(skill.skillId)}</span>
                        </div>
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
                          <td className="py-1 px-2 align-middle text-center">
                            <CommonCheckBox2
                              checked={selectedLeftCampaigns.includes(campaign.campaignId)}
                              onChange={() => toggleLeftCampaignSelection(campaign.campaignId)}
                            />
                          </td>
                          <td className="py-1 px-2 align-middle text-gray-600">
                            <div className="pl-5">{getSkillName(skill.skillId)}</div>
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
              {/* 마지막 행 이후 추가 여백을 위한 빈 행 */}
              <tr>
                <td colSpan={4} className="h-16"></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ITableForSkillListWithCampaign;