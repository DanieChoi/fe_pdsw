import React, { useState, useEffect, useMemo } from 'react';
import useApiForGetSkillsWithCampaigns from '@/widgets/sidebar/hooks/useApiForGetSkillsWithCampaigns';
import { useTotalCampaignListForAddCampaignToCampaignGroup } from '@/widgets/sidebar/hooks/useTotalCampaignListForAddCampaignToCampaignGroup';
import { useTotalSkillListForAddCampaignToCampaignGroup } from '@/widgets/sidebar/hooks/useTotalSkillListForAddCampaignToCampaignGroup';
import { CampaignInfo, SkillInfo } from '@/widgets/sidebar/api/type/typeForAddCampaignForCampaignGroup';

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  onSelect?: (selectedCampaigns: number[]) => void;
}

// Interface for our restructured data
interface SkillWithCampaigns {
  skillId: number;
  campaigns: {
    campaignId: number;
    tenantId: number;
  }[];
}

const CampaignAddPopup: React.FC<Props> = ({ isOpen = true, onClose, onSelect }) => {
  // State for data restructured by skills
  const [skillsWithCampaigns, setSkillsWithCampaigns] = useState<SkillWithCampaigns[]>([]);
  const [expandedSkills, setExpandedSkills] = useState<number[]>([1]);
  const [selectedCampaigns, setSelectedCampaigns] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Lookups for quick access by ID
  const [campaignLookup, setCampaignLookup] = useState<Record<number, CampaignInfo>>({});
  const [skillLookup, setSkillLookup] = useState<Record<number, SkillInfo>>({});
  
  // Fetch data using the provided hooks
  const { data, isLoading, error } = useApiForGetSkillsWithCampaigns(undefined, isOpen);
  const { 
    data: campaignListData, 
    isLoading: isLoadingCampaigns, 
    error: campaignError 
  } = useTotalCampaignListForAddCampaignToCampaignGroup(undefined, isOpen);
  const {
    data: skillListData,
    isLoading: isLoadingSkills,
    error: skillError
  } = useTotalSkillListForAddCampaignToCampaignGroup(undefined, isOpen);
  
  // Create campaign lookup from campaign list data
  useEffect(() => {
    if (campaignListData?.result_data) {
      const lookup: Record<number, CampaignInfo> = {};
      campaignListData.result_data.forEach(campaign => {
        lookup[campaign.campaign_id] = campaign;
      });
      setCampaignLookup(lookup);
    }
  }, [campaignListData]);
  
  // Create skill lookup from skill list data
  useEffect(() => {
    if (skillListData?.result_data) {
      const lookup: Record<number, SkillInfo> = {};
      skillListData.result_data.forEach(skill => {
        lookup[skill.skill_id] = skill;
      });
      setSkillLookup(lookup);
    }
  }, [skillListData]);
  
  // Restructure data: group by skills instead of campaigns
  useEffect(() => {
    if (data && data.result_data) {
      // Create a mapping of skills to campaigns
      const skillMap: Record<number, SkillWithCampaigns> = {};
      
      // Process each campaign
      data.result_data.forEach(campaign => {
        // Process each skill attached to this campaign
        if (Array.isArray(campaign.skill_id)) {
          campaign.skill_id.forEach(skillId => {
            // Initialize the skill entry if it doesn't exist
            if (!skillMap[skillId]) {
              skillMap[skillId] = {
                skillId,
                campaigns: []
              };
            }
            
            // Add this campaign to the skill's campaign list if not already added
            if (!skillMap[skillId].campaigns.some(c => c.campaignId === campaign.campaign_id)) {
              skillMap[skillId].campaigns.push({
                campaignId: campaign.campaign_id,
                tenantId: campaign.tenant_id
              });
            }
          });
        }
      });
      
      // Convert map to array and sort by skill ID
      const skillArray = Object.values(skillMap).sort((a, b) => a.skillId - b.skillId);
      
      // Store in state
      setSkillsWithCampaigns(skillArray);
      
      // Log the restructured data
      console.log('dataForSkilListWithCampaign (restructured):', {
        skills: skillArray
      });
    }
  }, [data]);

  // Reset selections when popup opens
  useEffect(() => {
    if (isOpen) {
      setSelectedCampaigns([]);
      setExpandedSkills([1]);
      setSearchTerm('');
    }
  }, [isOpen]);

  // Toggle skill expansion
  const toggleSkill = (skillId: number) => {
    setExpandedSkills(prev => 
      prev.includes(skillId) 
        ? prev.filter(id => id !== skillId) 
        : [...prev, skillId]
    );
  };

  // Toggle campaign selection
  const toggleCampaignSelection = (campaignId: number) => {
    setSelectedCampaigns(prev => 
      prev.includes(campaignId)
        ? prev.filter(id => id !== campaignId)
        : [...prev, campaignId]
    );
  };

  // Handle confirmation
  const handleConfirm = () => {
    if (onSelect) {
      onSelect(selectedCampaigns);
    }
    if (onClose) {
      onClose();
    }
  };

  // Helper to get campaign name
  const getCampaignName = (campaignId: number): string => {
    if (campaignLookup[campaignId]) {
      return campaignLookup[campaignId].campaign_name;
    }
    return `캠페인 ${campaignId}`;
  };
  
  // Helper to get skill name
  const getSkillName = (skillId: number): string => {
    if (skillLookup[skillId]) {
      return skillLookup[skillId].skill_name;
    }
    return `스킬 ${skillId}`;
  };

  // Filter skills and campaigns based on search term
  const filteredSkills = searchTerm 
    ? skillsWithCampaigns.filter(skill => {
        // Match by skill ID or name
        if (String(skill.skillId).includes(searchTerm) || 
            getSkillName(skill.skillId).toLowerCase().includes(searchTerm.toLowerCase())) {
          return true;
        }
        
        // Match by campaign ID or name
        return skill.campaigns.some(c => {
          const campaignIdMatch = String(c.campaignId).includes(searchTerm);
          const campaignNameMatch = getCampaignName(c.campaignId).toLowerCase().includes(searchTerm.toLowerCase());
          return campaignIdMatch || campaignNameMatch;
        });
      })
    : skillsWithCampaigns;
    
  // Get total campaign count
  const totalCampaigns = useMemo(() => {
    return filteredSkills.reduce((total, skill) => total + skill.campaigns.length, 0);
  }, [filteredSkills]);

  // Check if we're still loading any data
  const isLoadingAny = isLoading || isLoadingCampaigns || isLoadingSkills;
  const hasError = error || campaignError || skillError;

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow-md w-[500px] max-h-[500px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-2 border-b bg-gray-50">
          <h2 className="text-sm font-medium">캠페인 추가</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-lg"
          >
            ×
          </button>
        </div>

        {/* Search */}
        <div className="px-4 py-2 border-b">
          <input
            type="text"
            placeholder="검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-1 px-2 text-xs border border-gray-300 rounded"
          />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Title with count */}
          <div className="px-4 py-1 border-b flex justify-between items-center bg-slate-50">
            <h3 className="text-xs font-medium">전체 캠페인 목록 (총 {totalCampaigns}건)</h3>
          </div>
          
          <div className="flex-1 overflow-auto relative">
            {isLoadingAny ? (
              <div className="flex items-center justify-center h-32">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
              </div>
            ) : hasError ? (
              <div className="flex items-center justify-center h-32 text-red-500 text-xs">
                데이터를 불러오는 중 오류가 발생했습니다.
              </div>
            ) : filteredSkills.length === 0 ? (
              <div className="flex items-center justify-center h-32 text-gray-500 text-xs">
                검색 결과가 없습니다.
              </div>
            ) : (
              <table className="w-full border-collapse table-fixed text-xs">
                <thead>
                  <tr className="bg-white border-b">
                    <th className="w-8"></th>
                    <th className="text-left py-1 px-2 font-medium">스킬</th>
                    <th className="text-left py-1 px-2 font-medium w-1/3">캠페인ID</th>
                    <th className="text-left py-1 px-2 font-medium w-1/3">캠페인 이름</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSkills.map(skill => (
                    <React.Fragment key={`skill-${skill.skillId}`}>
                      {/* Skill Row */}
                      <tr className={`border-b ${expandedSkills.includes(skill.skillId) ? 'bg-slate-100' : 'bg-white'}`}>
                        <td className="py-1 px-2 align-middle">
                          <button 
                            className="focus:outline-none"
                            onClick={() => toggleSkill(skill.skillId)}
                          >
                            {expandedSkills.includes(skill.skillId) ? (
                              <span className="text-xs">▼</span>
                            ) : (
                              <span className="text-xs">►</span>
                            )}
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
                      
                      {/* Campaign Rows */}
                      {expandedSkills.includes(skill.skillId) && skill.campaigns.map(campaign => (
                        <tr 
                          key={`campaign-${skill.skillId}-${campaign.campaignId}`}
                          className="border-b bg-white hover:bg-gray-50"
                        >
                          <td className="py-1 px-2 align-middle">
                            <input
                              type="checkbox"
                              checked={selectedCampaigns.includes(campaign.campaignId)}
                              onChange={() => toggleCampaignSelection(campaign.campaignId)}
                              className="h-3 w-3 cursor-pointer"
                            />
                          </td>
                          <td className="py-1 px-2 align-middle text-gray-600">
                            {getSkillName(skill.skillId)}
                          </td>
                          <td className="py-1 px-2 align-middle">
                            {campaign.campaignId}
                          </td>
                          <td className="py-1 px-2 align-middle text-blue-600">
                            {getCampaignName(campaign.campaignId)}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="py-2 px-4 border-t bg-gray-50 flex justify-between items-center">
          <div className="text-xs text-gray-600">
            {selectedCampaigns.length}개의 캠페인 선택됨
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