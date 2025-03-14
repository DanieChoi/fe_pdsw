// "use client";

// import React from "react";
// import { ChevronDown, ChevronRight } from "lucide-react";
// import CommonCheckBox2 from "@/components/shared/CommonCheckBox2";

// interface SkillWithCampaigns {
//   skillId: number;
//   campaigns: { campaignId: number; tenantId: number }[];
// }

// interface Props {
//   filteredSkills: SkillWithCampaigns[];
//   expandedSkills: number[];
//   selectedLeftCampaigns: number[];
//   isLoading: boolean;
//   hasError: boolean;
//   toggleSkill: (skillId: number) => void;
//   toggleLeftCampaignSelection: (campaignId: number) => void;
//   toggleAllCampaigns: (checked: boolean) => void;
//   getCampaignName: (campaignId: number) => string;
//   getSkillName: (skillId: number) => string;
// }

// const ITableForSkillListWithCampaign: React.FC<Props> = ({
//   filteredSkills = [],
//   expandedSkills = [],
//   selectedLeftCampaigns = [],
//   isLoading,
//   hasError,
//   toggleSkill,
//   toggleLeftCampaignSelection,
//   toggleAllCampaigns,
//   getCampaignName,
//   getSkillName,
// }) => {
//   // Calculate if all visible campaigns are selected
//   const allCampaignsCount = filteredSkills.reduce(
//     (count, skill) => count + skill.campaigns.length,
//     0
//   );
  
//   const allVisibleCampaignIds = filteredSkills.flatMap(skill => 
//     skill.campaigns.map(campaign => campaign.campaignId)
//   );
  
//   const allSelected = allCampaignsCount > 0 && 
//     allVisibleCampaignIds.every(id => selectedLeftCampaigns.includes(id));

//   return (
//     <div className="flex flex-col h-full">
//       {isLoading ? (
//         <div className="flex items-center justify-center h-full text-sm">로딩 중...</div>
//       ) : hasError ? (
//         <div className="flex items-center justify-center h-full text-red-500 text-sm">
//           데이터 로드 중 오류 발생
//         </div>
//       ) : filteredSkills.length === 0 ? (
//         <div className="flex items-center justify-center h-full text-gray-500 text-sm">
//           검색 결과가 없습니다.
//         </div>
//       ) : (
//         <div className="flex-1 overflow-auto" style={{ paddingBottom: '20px' }}>
//           <table className="w-full border-collapse table-fixed text-xs">
//             <thead>
//               <tr className="bg-white border-b sticky top-0 z-10">
//                 <th className="w-8 py-1 px-2 text-center">
//                   <CommonCheckBox2
//                     checked={allSelected}
//                     onChange={toggleAllCampaigns}
//                     title="전체 선택"
//                   />
//                 </th>
//                 <th className="text-left py-1 px-2 font-medium">스킬</th>
//                 <th className="text-left py-1 px-2 font-medium w-1/4">캠페인ID</th>
//                 <th className="text-left py-1 px-2 font-medium w-1/2">캠페인 이름</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredSkills.map((skill) => {
//                 const isExpanded = expandedSkills.includes(skill.skillId);
//                 return (
//                   <React.Fragment key={`skill-${skill.skillId}`}>
//                     {/* 스킬 행 */}
//                     <tr className={`border-b ${isExpanded ? "bg-blue-100" : "bg-blue-50"}`}>
//                       <td className="py-1 px-2 align-middle text-center">
//                         {/* 스킬 레벨에는 체크박스 없음 */}
//                       </td>
//                       <td className="py-1 px-2 align-middle cursor-pointer" onClick={() => toggleSkill(skill.skillId)}>
//                         <div className="flex items-center">
//                           {isExpanded ? (
//                             <ChevronDown size={14} className="mr-1 flex-shrink-0" />
//                           ) : (
//                             <ChevronRight size={14} className="mr-1 flex-shrink-0" />
//                           )}
//                           <span className="font-medium">{getSkillName(skill.skillId)}</span>
//                         </div>
//                       </td>
//                       <td className="py-1 px-2 align-middle"></td>
//                       <td className="py-1 px-2 align-middle"></td>
//                     </tr>

//                     {/* 캠페인 목록 (확장 시 표시) */}
//                     {isExpanded &&
//                       (skill.campaigns ?? []).map((campaign) => (
//                         <tr
//                           key={`campaign-${skill.skillId}-${campaign.campaignId}`}
//                           className="border-b bg-white hover:bg-gray-50"
//                         >
//                           <td className="py-1 px-2 align-middle text-center">
//                             <CommonCheckBox2
//                               checked={selectedLeftCampaigns.includes(campaign.campaignId)}
//                               onChange={() => toggleLeftCampaignSelection(campaign.campaignId)}
//                             />
//                           </td>
//                           <td className="py-1 px-2 align-middle text-gray-600">
//                             <div className="pl-5">{getSkillName(skill.skillId)}</div>
//                           </td>
//                           <td className="py-1 px-2 align-middle">{campaign.campaignId}</td>
//                           <td className="py-1 px-2 align-middle text-blue-600">
//                             {getCampaignName(campaign.campaignId)}
//                           </td>
//                         </tr>
//                       ))}
//                   </React.Fragment>
//                 );
//               })}
//               {/* 마지막 행 이후 추가 여백을 위한 빈 행 */}
//               <tr>
//                 <td colSpan={4} className="h-16"></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ITableForSkillListWithCampaign;

"use client";

import React, { useMemo } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import CommonCheckBox2 from "@/components/shared/CommonCheckBox2";

interface SkillWithCampaigns {
  skillId: number;
  campaigns: { campaignId: number; tenantId: number }[];
}

interface Props {
  filteredSkills: SkillWithCampaigns[];
  expandedSkills: number[];
  selectedLeftCampaigns: string[];
  isLoading: boolean;
  hasError: boolean;
  toggleSkill: (skillId: number) => void;
  toggleLeftCampaignSelection: (campaignId: string) => void;
  toggleAllCampaigns: (checked: boolean) => void;
  getCampaignName: (campaignId: number) => string;
  getSkillName: (skillId: number) => string;
  setExpandedSkills: (skills: number[]) => void;
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
  setExpandedSkills,
}) => {
  // Calculate if all visible campaigns are selected
  const allCampaignsIds = useMemo(() => {
    return filteredSkills.flatMap(skill => 
      skill.campaigns.map(campaign => `${skill.skillId}-${campaign.campaignId}`)
    );
  }, [filteredSkills]);
  
  const allSelected = allCampaignsIds.length > 0 && 
    allCampaignsIds.every(id => selectedLeftCampaigns.includes(id));
    
  const hasPartialSelection = !allSelected && 
    allCampaignsIds.some(id => selectedLeftCampaigns.includes(id));

  // Toggle all campaigns for a specific skill
  const toggleSkillCampaigns = (skillId: number, checked: boolean) => {
    const skill = filteredSkills.find(s => s.skillId === skillId);
    if (!skill) return;
    
    const skillCampaignIds = skill.campaigns.map(campaign => `${skillId}-${campaign.campaignId}`);
    
    if (checked) {
      // 체크 시 자동으로 스킬을 펼치기
      if (!expandedSkills.includes(skillId)) {
        setExpandedSkills([...expandedSkills, skillId]);
      }
      
      // Add all campaigns that are not already selected
      const idsToAdd = skillCampaignIds.filter(id => !selectedLeftCampaigns.includes(id));
      if (idsToAdd.length > 0) {
        // Toggle each campaign selection individually
        idsToAdd.forEach(id => toggleLeftCampaignSelection(id));
      }
    } else {
      // 체크 해제 시 자동으로 스킬을 접기
      setExpandedSkills(expandedSkills.filter(id => id !== skillId));
      
      // Remove all campaigns for this skill that are currently selected
      const idsToRemove = skillCampaignIds.filter(id => selectedLeftCampaigns.includes(id));
      if (idsToRemove.length > 0) {
        // Toggle each campaign selection individually
        idsToRemove.forEach(id => toggleLeftCampaignSelection(id));
      }
    }
  };

  // 개별 캠페인 선택/해제 처리 함수
  const handleToggleCampaign = (compositeId: string) => {
    // 원래 토글 함수 호출
    toggleLeftCampaignSelection(compositeId);
    
    // 이 캠페인을 선택 해제하는 경우 (현재 선택된 상태)
    if (selectedLeftCampaigns.includes(compositeId)) {
      // 해당 스킬의 모든 캠페인이 선택 해제되었는지 확인
      const [skillIdStr] = compositeId.split('-');
      const skillId = parseInt(skillIdStr);
      const skill = filteredSkills.find(s => s.skillId === skillId);
      
      if (skill) {
        const skillCampaignIds = skill.campaigns.map(campaign => `${skillId}-${campaign.campaignId}`);
        // 현재 선택 해제하는 캠페인을 제외한 나머지 선택된 캠페인 수
        const remainingSelectedCount = skillCampaignIds.filter(
          id => id !== compositeId && selectedLeftCampaigns.includes(id)
        ).length;
        
        // 선택된 캠페인이 이제 없다면 스킬을 접기
        if (remainingSelectedCount === 0) {
          setExpandedSkills(expandedSkills.filter(id => id !== skillId));
        }
      }
    }
  };

  // 전체 선택/해제 처리 함수
  const handleToggleAllCampaigns = (checked: boolean) => {
    // 전체 선택 해제할 때는 모든 스킬 접기
    if (!checked) {
      setExpandedSkills([]);
    } else {
      // 전체 선택할 때는 모든 스킬 펼치기
      const allSkillIds = filteredSkills.map(skill => skill.skillId);
      setExpandedSkills(allSkillIds);
    }
    
    // 기존 전체 선택/해제 로직 호출
    toggleAllCampaigns(checked);
  };

  // Calculate selection state for each skill
  const getSkillSelectionState = (skillId: number) => {
    const skill = filteredSkills.find(s => s.skillId === skillId);
    if (!skill || skill.campaigns.length === 0) return { checked: false, indeterminate: false };
    
    const skillCampaignIds = skill.campaigns.map(campaign => `${skillId}-${campaign.campaignId}`);
    const selectedCount = skillCampaignIds.filter(id => selectedLeftCampaigns.includes(id)).length;
    
    return {
      checked: selectedCount === skillCampaignIds.length && skillCampaignIds.length > 0,
      indeterminate: selectedCount > 0 && selectedCount < skillCampaignIds.length
    };
  };

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
              <tr className="bg-gray-50 border-b sticky top-0 z-10">
                <th className="w-12 py-2 px-3 text-center">
                  <CommonCheckBox2
                    checked={allSelected}
                    indeterminate={hasPartialSelection}
                    onChange={() => handleToggleAllCampaigns(!allSelected)}
                    title="전체 선택"
                  />
                </th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">스킬</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700 w-1/4">캠페인ID</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700 w-1/2">캠페인 이름</th>
              </tr>
            </thead>
            <tbody>
              {filteredSkills.map((skill) => {
                const isExpanded = expandedSkills.includes(skill.skillId);
                const { checked, indeterminate } = getSkillSelectionState(skill.skillId);
                
                return (
                  <React.Fragment key={`skill-${skill.skillId}`}>
                    {/* 스킬 행 */}
                    <tr className={`border-b ${isExpanded ? "bg-[#edf7fd]" : "bg-[#f5faff]"}`}>
                      <td className="py-2 px-3 align-middle text-center">
                        {/* 스킬 레벨 체크박스 */}
                        <CommonCheckBox2
                          checked={checked}
                          indeterminate={indeterminate}
                          onChange={() => toggleSkillCampaigns(skill.skillId, !checked)}
                        />
                      </td>
                      <td className="py-2 px-3 align-middle cursor-pointer" onClick={() => toggleSkill(skill.skillId)}>
                        <div className="flex items-center">
                          {isExpanded ? (
                            <ChevronDown size={16} className="mr-2 flex-shrink-0 text-gray-600" />
                          ) : (
                            <ChevronRight size={16} className="mr-2 flex-shrink-0 text-gray-600" />
                          )}
                          <span className="font-medium">{getSkillName(skill.skillId)}</span>
                        </div>
                      </td>
                      <td className="py-2 px-3 align-middle"></td>
                      <td className="py-2 px-3 align-middle"></td>
                    </tr>

                    {/* 캠페인 목록 (확장 시 표시) */}
                    {isExpanded &&
                      (skill.campaigns ?? []).map((campaign) => {
                        const compositeId = `${skill.skillId}-${campaign.campaignId}`;
                        return (
                          <tr
                            key={`campaign-${compositeId}`}
                            className="border-b bg-white hover:bg-gray-100"
                          >
                            <td className="py-2 px-3 align-middle text-center">
                              <CommonCheckBox2
                                checked={selectedLeftCampaigns.includes(compositeId)}
                                onChange={() => handleToggleCampaign(compositeId)}
                              />
                            </td>
                            <td className="py-2 px-3 align-middle text-gray-600">
                              <div className="flex items-center">
                                <div className="w-5 mr-2"></div> {/* 아이콘 공간만큼 여백 추가 */}
                                <span className="pl-2">{getSkillName(skill.skillId)}</span> {/* 왼쪽 여백 추가 */}
                              </div>
                            </td>
                            <td className="py-2 px-3 align-middle font-medium">{campaign.campaignId}</td>
                            <td className="py-2 px-3 align-middle text-blue-700">
                              {getCampaignName(campaign.campaignId)}
                            </td>
                          </tr>
                        );
                      })}
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