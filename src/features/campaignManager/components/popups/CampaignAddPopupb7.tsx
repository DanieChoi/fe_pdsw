// "use client";

// import React, { useState, useEffect, useMemo } from 'react';
// import useApiForGetSkillsWithCampaigns from '@/widgets/sidebar/hooks/useApiForGetSkillsWithCampaigns';
// import { useTotalCampaignListForAddCampaignToCampaignGroup } from '@/widgets/sidebar/hooks/useTotalCampaignListForAddCampaignToCampaignGroup';
// import { useTotalSkillListForAddCampaignToCampaignGroup } from '@/widgets/sidebar/hooks/useTotalSkillListForAddCampaignToCampaignGroup';
// import useApiForGetCampaignListForCampaignGroup from '@/widgets/sidebar/hooks/useApiForGetCampaignListForCampaignGroup';
// import { CampaignInfo, SkillInfo } from '@/widgets/sidebar/api/type/typeForAddCampaignForCampaignGroup';
// import GroupCampaignList from './GroupCampaignList';
// import ITableForSkillListWithCampaign from './ITableForSkillListWithCampaign';
// import { ChevronRight, ChevronLeft } from 'lucide-react';
// import CustomAlert from '@/components/shared/layout/CustomAlert';
// import { useAuthStore } from '@/store/authStore';

// interface SkillWithCampaigns {
//   skillId: number;
//   campaigns: { campaignId: number; tenantId: number }[];
// }

// interface Props {
//   isOpen?: boolean;
//   groupId: number;
//   groupName?: string;
//   onClose?: () => void;
//   onSelect?: (selectedCampaigns: number[]) => void;
// }

// const CampaignAddPopup: React.FC<Props> = ({ isOpen = true, onClose, onSelect, groupId, groupName }) => {
//   const [skillsWithCampaigns, setSkillsWithCampaigns] = useState<SkillWithCampaigns[]>([]);
//   const [expandedSkills, setExpandedSkills] = useState<number[]>([1]);
//   const [selectedLeftCampaigns, setSelectedLeftCampaigns] = useState<string[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showAlert, setShowAlert] = useState(false);
//   const [alertMessage, setAlertMessage] = useState<React.ReactNode>('');

//   const [campaignLookup, setCampaignLookup] = useState<Record<number, CampaignInfo>>({});
//   const [skillLookup, setSkillLookup] = useState<Record<number, SkillInfo>>({});

//   const { data, isLoading, error } = useApiForGetSkillsWithCampaigns(undefined, isOpen);
//   const { data: campaignListData, isLoading: isLoadingCampaigns, error: campaignError } =
//     useTotalCampaignListForAddCampaignToCampaignGroup(undefined, isOpen);
//   const { data: skillListData, isLoading: isLoadingSkills, error: skillError } =
//     useTotalSkillListForAddCampaignToCampaignGroup(undefined, isOpen);
//   const { data: groupData, isLoading: isLoadingGroup, error: groupError } =
//     useApiForGetCampaignListForCampaignGroup(groupId, undefined, undefined, isOpen);

//   const tenant_id = useAuthStore(state => state.tenant_id);


//   useEffect(() => {
//     if (campaignListData?.result_data) {
//       const lookup: Record<number, CampaignInfo> = {};
//       campaignListData.result_data.forEach(campaign => {
//         lookup[campaign.campaign_id] = campaign;
//       });
//       setCampaignLookup(lookup);
//     }
//   }, [campaignListData]);

//   useEffect(() => {
//     if (skillListData?.result_data) {
//       const lookup: Record<number, SkillInfo> = {};
//       skillListData.result_data.forEach(skill => {
//         lookup[skill.skill_id] = skill;
//       });
//       setSkillLookup(lookup);
//     }
//   }, [skillListData]);

//   useEffect(() => {
//     if (data && data.result_data) {
//       const skillMap: Record<number, SkillWithCampaigns> = {};
//       data.result_data.forEach(campaign => {
//         if (Array.isArray(campaign.skill_id)) {
//           campaign.skill_id.forEach(skillId => {
//             if (!skillMap[skillId]) {
//               skillMap[skillId] = { skillId, campaigns: [] };
//             }
//             if (!skillMap[skillId].campaigns.some(c => c.campaignId === campaign.campaign_id)) {
//               skillMap[skillId].campaigns.push({
//                 campaignId: campaign.campaign_id,
//                 tenantId: campaign.tenant_id
//               });
//             }
//           });
//         }
//       });
//       const skillArray = Object.values(skillMap).sort((a, b) => a.skillId - b.skillId);
//       setSkillsWithCampaigns(skillArray);
//     }
//   }, [data]);

//   useEffect(() => {
//     if (isOpen) {
//       setSelectedLeftCampaigns([]);
//       setExpandedSkills([1]);
//       setSearchTerm('');
//     }
//   }, [isOpen]);

//   const isLoadingAny = isLoading || isLoadingCampaigns || isLoadingSkills;
//   const hasError = Boolean(error || campaignError || skillError || groupError);

//   const getCampaignName = (campaignId: number): string =>
//     campaignLookup[campaignId]?.campaign_name || `캠페인 ${campaignId}`;
//   const getSkillName = (skillId: number): string =>
//     skillLookup[skillId]?.skill_name || `스킬 ${skillId}`;

//   const filteredSkills = useMemo(() => {
//     if (!searchTerm) return skillsWithCampaigns;
//     const term = searchTerm.toLowerCase();
//     return skillsWithCampaigns
//       .map(skill => {
//         const skillMatches =
//           String(skill.skillId).includes(term) ||
//           getSkillName(skill.skillId).toLowerCase().includes(term);
//         const filteredCampaigns = skill.campaigns.filter(c =>
//           String(c.campaignId).includes(term) ||
//           getCampaignName(c.campaignId).toLowerCase().includes(term)
//         );
//         return {
//           skillId: skill.skillId,
//           campaigns: skillMatches ? skill.campaigns : filteredCampaigns
//         };
//       })
//       .filter(skill => skill.campaigns.length > 0);
//   }, [skillsWithCampaigns, searchTerm]);

//   const totalCampaigns = useMemo(
//     () => filteredSkills.reduce((acc, skill) => acc + skill.campaigns.length, 0),
//     [filteredSkills]
//   );

//   const toggleSkill = (skillId: number) => {
//     setExpandedSkills(prev =>
//       prev.includes(skillId) ? prev.filter(id => id !== skillId) : [...prev, skillId]
//     );
//   };

//   // 모든 스킬 확장/축소 토글
//   const toggleAllSkills = (expand: boolean) => {
//     if (expand) {
//       // 모든 스킬 ID를 펼침
//       const allSkillIds = filteredSkills.map(skill => skill.skillId);
//       setExpandedSkills(allSkillIds);
//     } else {
//       // 모두 접기
//       setExpandedSkills([]);
//     }
//   };

//   // Updated to handle string IDs (skillId-campaignId)
//   const toggleLeftCampaignSelection = (id: string) => {
//     setSelectedLeftCampaigns(prev =>
//       prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
//     );
//   };

//   // Updated to handle string IDs
//   const toggleAllCampaigns = (checked: boolean) => {
//     if (checked) {
//       // 모든 스킬을 자동으로 펼친다
//       toggleAllSkills(true);

//       // Select all visible campaigns with composite IDs
//       const allCampaignIds = filteredSkills.flatMap(skill =>
//         skill.campaigns.map(campaign => `${skill.skillId}-${campaign.campaignId}`)
//       );
//       setSelectedLeftCampaigns(allCampaignIds);
//     } else {
//       // Deselect all
//       setSelectedLeftCampaigns([]);
//     }
//   };

//   const toggleAllGroupCampaigns = (checked: boolean) => {
//     // This function is for illustration - in the design, group campaigns are always checked
//     console.log(`Toggle all group campaigns: ${checked}`);
//   };

//   const groupCampaignsData = useMemo(() => {
//     return (groupData?.result_data || []).filter(item => item.group_id === groupId);
//   }, [groupData, groupId]);

//   // Extract campaign IDs from the composite string IDs
//   const getSelectedCampaignIds = (): number[] => {
//     return selectedLeftCampaigns
//       .map(compositeId => {
//         const parts = compositeId.split('-');
//         return parts.length === 2 ? parseInt(parts[1]) : null;
//       })
//       .filter((id): id is number => id !== null);
//   };

//   // 선택된 캠페인 상세 정보 추출
//   const getSelectedCampaignDetails = () => {
//     return getSelectedCampaignIds().map(id => ({
//       campaignId: id,
//       campaignName: getCampaignName(id),
//       skillId: selectedLeftCampaigns.find(compositeId => {
//         const [_, campaignIdStr] = compositeId.split('-');
//         return parseInt(campaignIdStr) === id;
//       })?.split('-')[0] || '',
//       skillName: selectedLeftCampaigns.find(compositeId => {
//         const [skillId, campaignIdStr] = compositeId.split('-');
//         return parseInt(campaignIdStr) === id;
//       })?.split('-')[0] ? getSkillName(parseInt(selectedLeftCampaigns.find(compositeId => {
//         const [skillId, campaignIdStr] = compositeId.split('-');
//         return parseInt(campaignIdStr) === id;
//       })?.split('-')[0] || '0')) : ''
//     }));
//   };

//   // 선택된 캠페인 목록을 테이블 형태로 변환
//   const createCampaignListTable = (campaignDetails: ReturnType<typeof getSelectedCampaignDetails>) => {
//     return (
//       <div className="max-h-40 overflow-auto">
//         <table className="w-full border-collapse text-xs">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-300 p-1">캠페인 ID</th>
//               <th className="border border-gray-300 p-1">캠페인 이름</th>
//               <th className="border border-gray-300 p-1">스킬</th>
//             </tr>
//           </thead>
//           <tbody>
//             {campaignDetails.map((campaign, index) => (
//               <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
//                 <td className="border border-gray-300 p-1">{campaign.campaignId}</td>
//                 <td className="border border-gray-300 p-1">{campaign.campaignName}</td>
//                 <td className="border border-gray-300 p-1">{campaign.skillName}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   // Move selected campaigns to group
//   const moveToGroup = () => {
//     const campaignIds = getSelectedCampaignIds();
//     if (campaignIds.length === 0) return;

//     const campaignDetails = getSelectedCampaignDetails();

//     // 로그 출력
//     console.log("왼쪽 테이블에서 선택한 캠페인 ID:", campaignIds);
//     console.log("사용자의 테넌트 ID:", tenant_id);

//     // 얼럿에 표시할 메시지 생성 - 더 간결하게
//     const tableContent = createCampaignListTable(campaignDetails);
//     const alertContent = (
//       <div>
//         <p className="mb-2">{groupName} 에 아래의 {campaignIds.length} 개의 캠페인을 추가하시겠습니까?</p>
//         {tableContent}
//       </div>
//     );

//     setAlertMessage(alertContent);
//     setShowAlert(true);
//   };

//   // 캠페인 그룹에 실제로 추가하는 함수
//   const confirmAddToGroup = () => {
//     // 여기에 캠페인을 그룹에 추가하는 로직 구현
//     const campaignIds = getSelectedCampaignIds();
//     console.log("그룹에 추가할 캠페인 ID:", campaignIds);
//     // 사용자 tenant_id 확인
//     console.log("사용자의 테넌트 ID:", tenant_id);

//     // 실제 API 호출 또는 상태 업데이트 로직 추가 (임시로 콘솔 로그만 출력)
//     console.log("캠페인이 그룹에 추가되었습니다.");

//     // 얼럿 닫기
//     setShowAlert(false);
//   };

//   // Move all campaigns from group back to all
//   const moveToAll = () => {
//     console.log("moveToAll - Selected group campaigns:", groupCampaignsData);
//     // Here you would implement the logic to remove campaigns from the group
//   };

//   // Handle confirmation with numeric campaign IDs
//   const handleConfirm = () => {
//     const campaignIds = getSelectedCampaignIds();
//     console.log("Selected campaign IDs: ", campaignIds);
//     if (onSelect) onSelect(campaignIds);
//     if (onClose) onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded shadow-md w-[70%] max-h-[90vh] flex flex-col overflow-hidden">
//         {/* 헤더 */}
//         <div className="flex justify-between items-center px-4 py-2 border-b bg-gray-50">
//           <h2 className="text-sm font-medium">{groupName} 에 대해 캠페인 추가</h2>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-lg">
//             ×
//           </button>
//         </div>

//         {/* 검색 영역 */}
//         <div className="px-4 py-2 border-b">
//           <input
//             type="text"
//             placeholder="검색..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full py-1 px-2 text-xs border border-gray-300 rounded"
//           />
//         </div>

//         {/* 본문 - 고정된 높이를 가지도록 설정 */}
//         <div className="flex flex-col p-4 overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
//           <div className="px-2 py-1 mb-2 border-b flex justify-between items-center bg-slate-50">
//             <h3 className="text-xs font-medium">전체 캠페인 목록 (총 {totalCampaigns}건)</h3>
//           </div>

//           {/* 가로 레이아웃: 왼쪽 테이블 - 중앙 버튼 - 오른쪽 테이블 */}
//           <div className="flex flex-1 h-full">
//             {/* 왼쪽 테이블 - 수정된 스타일 */}
//             <div className="flex-1 h-full">
//               <div className="border rounded h-full overflow-hidden">
//                 <ITableForSkillListWithCampaign
//                   filteredSkills={filteredSkills}
//                   expandedSkills={expandedSkills}
//                   selectedLeftCampaigns={selectedLeftCampaigns}
//                   isLoading={isLoadingAny}
//                   hasError={hasError}
//                   toggleSkill={toggleSkill}
//                   toggleLeftCampaignSelection={toggleLeftCampaignSelection}
//                   toggleAllCampaigns={toggleAllCampaigns}
//                   getCampaignName={getCampaignName}
//                   getSkillName={getSkillName}
//                   setExpandedSkills={setExpandedSkills}
//                 />
//               </div>
//             </div>

//             {/* 중앙 버튼 영역 */}
//             <div className="flex flex-col items-center gap-2 min-w-[22px] justify-center px-2">
//               <button
//                 className="w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50"
//                 onClick={moveToGroup}
//                 disabled={selectedLeftCampaigns.length === 0}
//                 title="선택한 캠페인 추가"
//               >
//                 <ChevronRight size={14} />
//               </button>
//               <button
//                 className="w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50"
//                 onClick={moveToAll}
//                 disabled={groupCampaignsData.length === 0}
//                 title="모든 캠페인 제거"
//               >
//                 <ChevronLeft size={14} />
//               </button>
//             </div>

//             {/* 오른쪽 테이블 - 수정된 스타일 */}
//             <div className="flex-1 h-full">
//               <div className="border rounded h-full overflow-hidden">
//                 <GroupCampaignList
//                   isLoading={isLoadingGroup}
//                   groupCampaigns={groupCampaignsData}
//                   toggleAllGroupCampaigns={toggleAllGroupCampaigns}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='h-5'></div>

//         {/* 푸터 */}
//         <div className="py-2 px-4 border-t bg-gray-50 flex justify-between items-center">
//           <div className="text-xs text-gray-600">
//             <span></span>
//             <span className="ml-3"></span>
//           </div>
//           <div className="space-x-2">
//             <button
//               onClick={onClose}
//               className="px-3 py-1 text-xs bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
//             >
//               취소
//             </button>
//             <button
//               onClick={handleConfirm}
//               className="px-3 py-1 text-xs rounded bg-blue-500 text-white hover:bg-blue-600"
//             >
//               확인
//             </button>
//           </div>
//         </div>

//         {/* CustomAlert 컴포넌트 */}
//         {showAlert && (
//           <CustomAlert
//             isOpen={showAlert}
//             title="캠페인 추가 확인"
//             message={alertMessage}
//             type="1"
//             width="max-w-md" // 더 작은 크기로 조정
//             onClose={confirmAddToGroup}
//             onCancle={() => setShowAlert(false)}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default CampaignAddPopup;

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
import { useAuthStore } from '@/store/authStore';
import CommonDialogWithCustomAlertStyle from '@/components/shared/layout/CommonDialogWithCustomAlertStyle';
import { useSideMenuCampaignGroupTabStore } from '@/store/storeForSideMenuCampaignGroupTab';

interface SkillWithCampaigns {
  skillId: number;
  campaigns: { campaignId: number; tenantId: number }[];
}

interface Props {
  isOpen?: boolean;
  groupId: number;
  groupName?: string;
  onClose?: () => void;
  onSelect?: (selectedCampaigns: number[]) => void;
}

const CampaignAddPopup: React.FC<Props> = ({ isOpen = true, onClose, onSelect, groupId, groupName }) => {
  const [skillsWithCampaigns, setSkillsWithCampaigns] = useState<SkillWithCampaigns[]>([]);
  const [expandedSkills, setExpandedSkills] = useState<number[]>([1]);
  const [selectedLeftCampaigns, setSelectedLeftCampaigns] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState<React.ReactNode>('');

  const [campaignLookup, setCampaignLookup] = useState<Record<number, CampaignInfo>>({});
  const [skillLookup, setSkillLookup] = useState<Record<number, SkillInfo>>({});

  const { data, isLoading, error } = useApiForGetSkillsWithCampaigns(undefined, isOpen);
  const { data: campaignListData, isLoading: isLoadingCampaigns, error: campaignError } =
    useTotalCampaignListForAddCampaignToCampaignGroup(undefined, isOpen);
  const { data: skillListData, isLoading: isLoadingSkills, error: skillError } =
    useTotalSkillListForAddCampaignToCampaignGroup(undefined, isOpen);
  const { data: groupData, isLoading: isLoadingGroup, error: groupError } =
    useApiForGetCampaignListForCampaignGroup(groupId, undefined, undefined, isOpen);

  const tenant_id = useAuthStore(state => state.tenant_id);

  const { refetchTreeDataForCampaignGroupTab } = useSideMenuCampaignGroupTabStore();

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

  // 모든 스킬 확장/축소 토글
  const toggleAllSkills = (expand: boolean) => {
    if (expand) {
      const allSkillIds = filteredSkills.map(skill => skill.skillId);
      setExpandedSkills(allSkillIds);
    } else {
      setExpandedSkills([]);
    }
  };

  const toggleLeftCampaignSelection = (id: string) => {
    setSelectedLeftCampaigns(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  const toggleAllCampaigns = (checked: boolean) => {
    if (checked) {
      toggleAllSkills(true);
      const allCampaignIds = filteredSkills.flatMap(skill =>
        skill.campaigns.map(campaign => `${skill.skillId}-${campaign.campaignId}`)
      );
      setSelectedLeftCampaigns(allCampaignIds);
    } else {
      setSelectedLeftCampaigns([]);
    }
  };

  const toggleAllGroupCampaigns = (checked: boolean) => {
    console.log(`Toggle all group campaigns: ${checked}`);
  };

  const groupCampaignsData = useMemo(() => {
    return (groupData?.result_data || []).filter(item => item.group_id === groupId);
  }, [groupData, groupId]);

  const getSelectedCampaignIds = (): number[] => {
    return selectedLeftCampaigns
      .map(compositeId => {
        const parts = compositeId.split('-');
        return parts.length === 2 ? parseInt(parts[1]) : null;
      })
      .filter((id): id is number => id !== null);
  };

  const getSelectedCampaignDetails = () => {
    return getSelectedCampaignIds().map(id => ({
      campaignId: id,
      campaignName: getCampaignName(id),
      skillId: selectedLeftCampaigns.find(compositeId => {
        const [_, campaignIdStr] = compositeId.split('-');
        return parseInt(campaignIdStr) === id;
      })?.split('-')[0] || '',
      skillName: selectedLeftCampaigns.find(compositeId => {
        const [skillId, campaignIdStr] = compositeId.split('-');
        return parseInt(campaignIdStr) === id;
      })?.split('-')[0] ? getSkillName(parseInt(selectedLeftCampaigns.find(compositeId => {
        const [skillId, campaignIdStr] = compositeId.split('-');
        return parseInt(campaignIdStr) === id;
      })?.split('-')[0] || '0')) : ''
    }));
  };

  const createCampaignListTable = (campaignDetails: ReturnType<typeof getSelectedCampaignDetails>) => {
    return (
      <div className="max-h-40 overflow-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-1">캠페인 ID</th>
              <th className="border border-gray-300 p-1">캠페인 이름</th>
              <th className="border border-gray-300 p-1">스킬</th>
            </tr>
          </thead>
          <tbody>
            {campaignDetails.map((campaign, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 p-1">{campaign.campaignId}</td>
                <td className="border border-gray-300 p-1">{campaign.campaignName}</td>
                <td className="border border-gray-300 p-1">{campaign.skillName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const moveToGroup = () => {
    const campaignIds = getSelectedCampaignIds();
    if (campaignIds.length === 0) return;

    const campaignDetails = getSelectedCampaignDetails();
    console.log("왼쪽 테이블에서 선택한 캠페인 ID:", campaignIds);
    console.log("사용자의 테넌트 ID:", tenant_id);

    const tableContent = createCampaignListTable(campaignDetails);
    const alertContent = (
      <div>
        <p className="mb-2">{groupName} 에 아래의 {campaignIds.length} 개의 캠페인을 추가하시겠습니까?</p>
        {tableContent}
      </div>
    );

    setAlertMessage(alertContent);
    setShowAlert(true);
  };

  const confirmAddToGroup = () => {
    const campaignIds = getSelectedCampaignIds();
    console.log("그룹에 추가할 캠페인 ID:", campaignIds);
    console.log("사용자의 테넌트 ID:", tenant_id);
    console.log("캠페인이 그룹에 추가되었습니다.");
    setShowAlert(false);
  };

  const moveToAll = () => {
    console.log("moveToAll - Selected group campaigns:", groupCampaignsData);
  };

  const handleConfirm = () => {
    const campaignIds = getSelectedCampaignIds();
    console.log("Selected campaign IDs: ", campaignIds);
    if (onSelect) onSelect(campaignIds);
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow-md w-[70%] max-h-[90vh] flex flex-col overflow-hidden">
        {/* 헤더 */}
        <div className="flex justify-between items-center px-4 py-2 border-b bg-gray-50">
          <h2 className="text-sm font-medium">{groupName} 에 대해 캠페인 추가</h2>
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

        {/* 본문 영역 */}
        <div className="flex flex-col p-4 overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
          <div className="px-2 py-1 mb-2 border-b flex justify-between items-center bg-slate-50">
            <h3 className="text-xs font-medium">전체 캠페인 목록 (총 {totalCampaigns}건)</h3>
          </div>

          {/* 왼쪽 테이블 - 중앙 버튼 - 오른쪽 테이블 */}
          <div className="flex flex-1 h-full">
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
                  setExpandedSkills={setExpandedSkills}
                />
              </div>
            </div>

            {/* 중앙 버튼 영역 */}
            <div className="flex flex-col items-center gap-2 min-w-[22px] justify-center px-2">
              <button
                className="w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50"
                onClick={moveToGroup}
                disabled={selectedLeftCampaigns.length === 0}
                title="선택한 캠페인 추가"
              >
                <ChevronRight size={14} />
              </button>
              <button
                className="w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50"
                onClick={moveToAll}
                disabled={groupCampaignsData.length === 0}
                title="모든 캠페인 제거"
              >
                <ChevronLeft size={14} />
              </button>
            </div>

            {/* 오른쪽 테이블 */}
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
          <div className="text-xs text-gray-600"></div>
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

        {/* Alert 다이얼로그 */}
        {showAlert && (
          <CommonDialogWithCustomAlertStyle
            isOpen={showAlert}
            title="캠페인 추가 확인"
            width="max-w-md"
            onClose={confirmAddToGroup}
            onCancel={() => setShowAlert(false)}
          >
            {alertMessage}
          </CommonDialogWithCustomAlertStyle>
        )}
      </div>
    </div>
  );
};

export default CampaignAddPopup;
