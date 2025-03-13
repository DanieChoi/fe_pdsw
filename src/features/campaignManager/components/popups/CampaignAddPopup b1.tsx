import React, { useState, useEffect, useMemo } from 'react';
import useApiForGetSkillsWithCampaigns from '@/widgets/sidebar/hooks/useApiForGetSkillsWithCampaigns';

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
  const [expandedSkills, setExpandedSkills] = useState<number[]>([]);
  const [selectedCampaigns, setSelectedCampaigns] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Column visibility options
  const [columns] = useState({
    skill: true,
    campaign: true,
  });
  
  // Fetch data using the provided hook
  const { data, isLoading, error } = useApiForGetSkillsWithCampaigns(undefined, isOpen);
  
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
      setExpandedSkills([]);
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

  // Filter skills and campaigns based on search term
  const filteredSkills = searchTerm 
    ? skillsWithCampaigns.filter(skill => 
        String(skill.skillId).includes(searchTerm) || 
        skill.campaigns.some(c => String(c.campaignId).includes(searchTerm))
      )
    : skillsWithCampaigns;

  // Select/deselect all campaigns under a skill
  const toggleAllCampaignsForSkill = (skill: SkillWithCampaigns) => {
    const campaignIds = skill.campaigns.map(c => c.campaignId);
    const allSelected = campaignIds.every(id => selectedCampaigns.includes(id));
    
    if (allSelected) {
      // Remove all campaigns from this skill
      setSelectedCampaigns(prev => prev.filter(id => !campaignIds.includes(id)));
    } else {
      // Add all campaigns from this skill
      setSelectedCampaigns(prev => {
        const newSelected = [...prev];
        campaignIds.forEach(id => {
          if (!newSelected.includes(id)) {
            newSelected.push(id);
          }
        });
        return newSelected;
      });
    }
  };

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[900px] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-3 border-b bg-gray-50">
          <h2 className="text-base font-semibold">캠페인 추가</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            ×
          </button>
        </div>

        {/* Filter Options */}
        <div className="px-4 py-2 border-b">
          <div className="flex gap-2 mb-2">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="column-skill" 
                checked={columns.skill}
                readOnly
                className="mr-1" 
              />
              <label htmlFor="column-skill" className="text-xs">스킬</label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="column-campaign" 
                checked={columns.campaign}
                readOnly
                className="mr-1" 
              />
              <label htmlFor="column-campaign" className="text-xs">캠페인</label>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-1.5 text-sm border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-64 text-red-500">
              데이터를 불러오는 중 오류가 발생했습니다.
            </div>
          ) : filteredSkills.length === 0 ? (
            <div className="flex items-center justify-center h-64 text-gray-500">
              검색 결과가 없습니다.
            </div>
          ) : (
            <div className="grid-container relative">
              {/* Fixed Headers */}
              <table className="w-full table-fixed border-collapse sticky top-0 z-10">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="w-8 p-2 border-b border-r border-gray-300"></th>
                    <th className="p-2 text-sm font-medium text-left border-b border-r border-gray-300">스킬 / 캠페인</th>
                    <th className="w-24 p-2 text-sm font-medium text-left border-b border-gray-300">ID</th>
                  </tr>
                </thead>
              </table>
              
              {/* Scrollable Content */}
              <div className="overflow-auto" style={{ maxHeight: 'calc(80vh - 180px)' }}>
                <table className="w-full table-fixed border-collapse">
                  <tbody>
                    {filteredSkills.map(skill => {
                      const allCampaignsSelected = skill.campaigns.every(
                        c => selectedCampaigns.includes(c.campaignId)
                      );
                      
                      return (
                        <React.Fragment key={`skill-${skill.skillId}`}>
                          {/* Skill Row */}
                          <tr className="bg-gray-50 hover:bg-gray-100">
                            <td className="w-8 p-1.5 border-b border-r border-gray-200">
                              <div className="flex justify-center">
                                <input
                                  type="checkbox"
                                  checked={allCampaignsSelected && skill.campaigns.length > 0}
                                  onChange={() => toggleAllCampaignsForSkill(skill)}
                                  className="h-4 w-4 cursor-pointer"
                                />
                              </div>
                            </td>
                            <td 
                              className="p-1.5 text-sm border-b border-r border-gray-200 cursor-pointer"
                              onClick={() => toggleSkill(skill.skillId)}
                            >
                              <div className="flex items-center">
                                <span className="mr-1 text-xs">
                                  {expandedSkills.includes(skill.skillId) ? '▼' : '►'}
                                </span>
                                <span className="font-medium">스킬 {skill.skillId}</span>
                              </div>
                            </td>
                            <td className="w-24 p-1.5 text-sm border-b border-gray-200">
                              {skill.skillId}
                            </td>
                          </tr>
                          
                          {/* Campaign Rows */}
                          {expandedSkills.includes(skill.skillId) && skill.campaigns.map(campaign => (
                            <tr 
                              key={`campaign-${skill.skillId}-${campaign.campaignId}`}
                              className="hover:bg-gray-50"
                            >
                              <td className="w-8 p-1.5 border-b border-r border-gray-200">
                                <div className="flex justify-center">
                                  <input
                                    type="checkbox"
                                    checked={selectedCampaigns.includes(campaign.campaignId)}
                                    onChange={() => toggleCampaignSelection(campaign.campaignId)}
                                    className="h-4 w-4 cursor-pointer"
                                  />
                                </div>
                              </td>
                              <td className="p-1.5 pl-8 text-sm border-b border-r border-gray-200">
                                캠페인 {campaign.campaignId}
                              </td>
                              <td className="w-24 p-1.5 text-sm border-b border-gray-200">
                                {campaign.campaignId}
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t bg-gray-50 flex justify-between items-center">
          <div className="text-xs text-gray-600">
            {selectedCampaigns.length}개의 캠페인 선택됨
          </div>
          <div className="space-x-2">
            <button 
              onClick={onClose}
              className="px-3 py-1 text-sm bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
            >
              취소
            </button>
            <button 
              onClick={handleConfirm}
              disabled={selectedCampaigns.length === 0}
              className={`px-3 py-1 text-sm rounded text-white ${
                selectedCampaigns.length > 0 ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-300 cursor-not-allowed'
              }`}
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