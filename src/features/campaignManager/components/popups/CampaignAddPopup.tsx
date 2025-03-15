import React, { useState, useEffect, useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import useApiForGetSkillsWithCampaigns from '@/widgets/sidebar/hooks/useApiForGetSkillsWithCampaigns';
import { useTotalCampaignListForAddCampaignToCampaignGroup } from '@/widgets/sidebar/hooks/useTotalCampaignListForAddCampaignToCampaignGroup';
import { useTotalSkillListForAddCampaignToCampaignGroup } from '@/widgets/sidebar/hooks/useTotalSkillListForAddCampaignToCampaignGroup';
import useApiForGetCampaignListForCampaignGroup from '@/widgets/sidebar/hooks/useApiForGetCampaignListForCampaignGroup';
import { CampaignInfo, SkillInfo } from '@/widgets/sidebar/api/type/typeForAddCampaignForCampaignGroup';
import { batchAddCampaignsToGroup } from '@/components/shared/layout/utils/batchAddCampaigns';
import { batchRemoveCampaignsFromGroup } from '@/components/shared/layout/utils/batchRemoveCampaigns';
import GroupCampaignList from './GroupCampaignList';
import ITableForSkillListWithCampaign from './ITableForSkillListWithCampaign';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import CustomAlert from '@/components/shared/layout/CustomAlert';
import { useAuthStore } from '@/store/authStore';
import { toast } from 'react-toastify';
import useApiForAddCampaignToSpecificCampaignGroup from '../../hooks/useApiForAddCampaignToSpecificCampaignGroup';
import useApiForRemoveCampaignFromCampaignGroup from '../../hooks/useApiForRemoveCampaignFromCampaignGroup';

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

const CampaignAddPopup: React.FC<Props> = ({
  isOpen = true,
  onClose,
  onSelect,
  groupId,
  groupName
}) => {
  // ----------------------------
  //  State
  // ----------------------------
  const [skillsWithCampaigns, setSkillsWithCampaigns] = useState<SkillWithCampaigns[]>([]);
  const [expandedSkills, setExpandedSkills] = useState<number[]>([1]);
  const [selectedLeftCampaigns, setSelectedLeftCampaigns] = useState<string[]>([]); 
  const [selectedRightCampaigns, setSelectedRightCampaigns] = useState<number[]>([]);

  // **팝업에서 보여줄(추가) 캠페인 목록**을 별도로 관리
  const [campaignIdsForPopup, setCampaignIdsForPopup] = useState<number[]>([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState<React.ReactNode>('');
  const [confirmRemove, setConfirmRemove] = useState(false);

  // 프로세스/로딩 표시
  const [processingCampaigns, setProcessingCampaigns] = useState(false);
  const [removingCampaigns, setRemovingCampaigns] = useState(false);

  const [campaignLookup, setCampaignLookup] = useState<Record<number, CampaignInfo>>({});
  const [skillLookup, setSkillLookup] = useState<Record<number, SkillInfo>>({});

  // ----------------------------
  //  Hooks
  // ----------------------------
  const tenant_id = useAuthStore(state => state.tenant_id);
  const queryClient = useQueryClient();

  // ----------------------------
  //  Query
  // ----------------------------
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
  const {
    data: groupData,
    isLoading: isLoadingGroup,
    error: groupError
  } = useApiForGetCampaignListForCampaignGroup(groupId, undefined, undefined, isOpen);

  // ----------------------------
  //  Mutation
  // ----------------------------
  const { mutate: addCampaignToGroup, isPending: isAddingCampaign } =
    useApiForAddCampaignToSpecificCampaignGroup({
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['campaignGroupSkills', groupId] });
      },
      onError: (error: Error) => {
        toast.error(`캠페인 추가 실패: ${error.message}`);
      }
    });

  const { mutate: removeCampaignFromGroup, isPending: isRemovingCampaign } =
    useApiForRemoveCampaignFromCampaignGroup({
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['campaignGroupSkills', groupId] });
      },
      onError: (error: Error) => {
        toast.error(`캠페인 제거 실패: ${error.message}`);
      }
    });

  // ----------------------------
  //  Effects
  // ----------------------------
  // 1) 캠페인 목록 데이터 로딩 -> campaignLookup 세팅
  useEffect(() => {
    if (campaignListData?.result_data) {
      const lookup: Record<number, CampaignInfo> = {};
      campaignListData.result_data.forEach(campaign => {
        lookup[campaign.campaign_id] = campaign;
      });
      setCampaignLookup(lookup);
    }
  }, [campaignListData]);

  // 2) 스킬 목록 데이터 로딩 -> skillLookup 세팅
  useEffect(() => {
    if (skillListData?.result_data) {
      const lookup: Record<number, SkillInfo> = {};
      skillListData.result_data.forEach(skill => {
        lookup[skill.skill_id] = skill;
      });
      setSkillLookup(lookup);
    }
  }, [skillListData]);

  // 3) 캠페인 데이터 로딩 -> skillsWithCampaigns 세팅
  useEffect(() => {
    if (data?.result_data) {
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

  // 4) 팝업 열릴 때마다 상태 초기화
  useEffect(() => {
    if (isOpen) {
      setSelectedLeftCampaigns([]);
      setSelectedRightCampaigns([]);
      setExpandedSkills([1]);
      setSearchTerm('');
      setShowAlert(false);
      setConfirmRemove(false);
      setCampaignIdsForPopup([]); // 팝업 열릴 때마다 초기화
    }
  }, [isOpen]);

  // ----------------------------
  //  Derived data
  // ----------------------------
  const isLoadingAny = isLoading || isLoadingCampaigns || isLoadingSkills;
  const hasError = Boolean(error || campaignError || skillError || groupError);

  // 그룹에 속한 캠페인 목록
  const groupCampaignsData = useMemo(() => {
    return (groupData?.result_data || []).filter(item => item.group_id === groupId);
  }, [groupData, groupId]);

  // ----------------------------
  //  Helpers
  // ----------------------------
  const getCampaignName = (campaignId: number) =>
    campaignLookup[campaignId]?.campaign_name || `캠페인 ${campaignId}`;

  const getSkillName = (skillId: number) =>
    skillLookup[skillId]?.skill_name || `스킬 ${skillId}`;

  // 검색어 필터
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

  // ----------------------------
  //  Table toggles
  // ----------------------------
  const toggleSkill = (skillId: number) => {
    setExpandedSkills(prev =>
      prev.includes(skillId) ? prev.filter(id => id !== skillId) : [...prev, skillId]
    );
  };

  const toggleAllSkills = (expand: boolean) => {
    if (expand) {
      const allSkillIds = filteredSkills.map(skill => skill.skillId);
      setExpandedSkills(allSkillIds);
    } else {
      setExpandedSkills([]);
    }
  };

  // ----------------------------
  //  Left Table (전체 캠페인)
  // ----------------------------
  // (skillId-campaignId) 형식
  const toggleLeftCampaignSelection = (id: string) => {
    setSelectedLeftCampaigns(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  const toggleAllCampaigns = (checked: boolean) => {
    if (checked) {
      toggleAllSkills(true);
      const allCampaignIds = filteredSkills.flatMap(skill =>
        skill.campaigns.map(c => `${skill.skillId}-${c.campaignId}`)
      );
      setSelectedLeftCampaigns(allCampaignIds);
    } else {
      setSelectedLeftCampaigns([]);
    }
  };

  // ----------------------------
  //  Right Table (그룹 캠페인)
  // ----------------------------
  const toggleAllGroupCampaigns = (checked: boolean, selectedIds: number[] = []) => {
    setSelectedRightCampaigns(selectedIds);
  };

  // ----------------------------
  //  Selection helper
  // ----------------------------
  // 선택된 (왼쪽) 캠페인 ID만 추출
  const getSelectedCampaignIds = (): number[] => {
    return selectedLeftCampaigns
      .map(compositeId => {
        const parts = compositeId.split('-');
        return parts.length === 2 ? parseInt(parts[1]) : null;
      })
      .filter((id): id is number => id !== null);
  };

  // ----------------------------
  //  Confirm Popup Table
  // ----------------------------
  // “추가” 확인창에서 보여줄 테이블은 campaignIdsForPopup 기반
  const createCampaignListTable = (campaignIds: number[]) => {
    const groupCampaignIds = new Set(groupCampaignsData.map(item => item.campaign_id));

    return (
      <div className="max-h-40 overflow-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-1">캠페인 ID</th>
              <th className="border border-gray-300 p-1">캠페인 이름</th>
              <th className="border border-gray-300 p-1">중복</th>
            </tr>
          </thead>
          <tbody>
            {campaignIds.map((id, index) => {
              const isDuplicate = groupCampaignIds.has(id);
              return (
                <tr
                  key={id}
                  className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${
                    isDuplicate ? 'bg-orange-100' : ''
                  }`}
                >
                  <td className="border border-gray-300 p-1">{id}</td>
                  <td className="border border-gray-300 p-1">{getCampaignName(id)}</td>
                  <td className="border border-gray-300 p-1 text-center">
                    {isDuplicate && (
                      <button
                        onClick={() => handleRemoveFromPopup(id)}
                        className="text-red-500"
                      >
                        x
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  // “제거” 확인창에서 보여줄 테이블
  const createGroupCampaignListTable = (campaignIds: number[]) => {
    const selectedCampaigns = groupCampaignsData.filter(item =>
      campaignIds.includes(item.campaign_id)
    );

    return (
      <div className="max-h-40 overflow-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-1">캠페인 ID</th>
              <th className="border border-gray-300 p-1">캠페인 이름</th>
            </tr>
          </thead>
          <tbody>
            {selectedCampaigns.map((campaign, index) => (
              <tr
                key={campaign.campaign_id}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="border border-gray-300 p-1">{campaign.campaign_id}</td>
                <td className="border border-gray-300 p-1">
                  {getCampaignName(campaign.campaign_id)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // ----------------------------
  //  Popup Actions
  // ----------------------------
  // x 버튼: “추가” 확인창에서 중복 항목 제거
  const handleRemoveFromPopup = (campaignId: number) => {
    // 1) 실제로는 selectedLeftCampaigns에서도 제거해야
    //    (사용자가 체크해제된 상태로 돌아가게 하려면)
    setSelectedLeftCampaigns(prev =>
      prev.filter(item => {
        const parts = item.split('-');
        return parseInt(parts[1]) !== campaignId;
      })
    );

    // 2) 팝업에 표시되는 배열에서도 제거
    setCampaignIdsForPopup(prev => prev.filter(id => id !== campaignId));
  };

  // ----------------------------
  //  “추가” 버튼 -> 팝업 열기
  // ----------------------------
  const moveToGroup = () => {
    const campaignIds = getSelectedCampaignIds();
    if (campaignIds.length === 0) return;

    // 팝업에서 보여줄 임시 목록을 별도 state에 저장
    setCampaignIdsForPopup(campaignIds);

    // 확인창 메시지(기본 안내문)
    const alertContent = (
      <div>
        <p className="mb-2">
          {groupName} 에 아래의 {campaignIds.length} 개의 캠페인을 추가하시겠습니까?
        </p>
        {/* 실제 테이블은 아래 render 시점에서 campaignIdsForPopup 를 참조 */}
      </div>
    );
    setAlertMessage(alertContent);
    setConfirmRemove(false);
    setShowAlert(true);
  };

  // ----------------------------
  //  “추가” 확정
  // ----------------------------
  const confirmAddToGroup = async () => {
    if (campaignIdsForPopup.length === 0) {
      setShowAlert(false);
      return;
    }

    setProcessingCampaigns(true);
    toast.success('캠페인 추가 중...');

    try {
      // 실제로 batchAdd 실행
      const result = await batchAddCampaignsToGroup(
        groupId,
        campaignIdsForPopup, // 팝업에서 남은 목록만 추가
        Number(tenant_id)
      );

      toast.success('캠페인 추가 완료');

      // 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ['campaignGroupSkills', groupId] });
      queryClient.invalidateQueries({ queryKey: ['campaignGroupList'] });
      queryClient.invalidateQueries({ queryKey: ['sideMenuData'] });

      if (result.success) {
        toast.success(
          `${result.successCount}개의 캠페인이 "${groupName}" 그룹에 추가되었습니다.`
        );
      } else if (result.successCount > 0 && result.failedCampaigns.length > 0) {
        toast.warning(
          `${result.successCount}개의 캠페인이 추가되었지만, ${result.failedCampaigns.length}개는 실패했습니다.`
        );
      } else {
        toast.error('캠페인 추가에 실패했습니다.');
      }

      // 왼쪽 테이블 체크 상태도 비워줌
      setSelectedLeftCampaigns([]);
      setCampaignIdsForPopup([]);
    } catch (error) {
      console.error('캠페인 추가 중 오류 발생:', error);
      toast.error('캠페인 추가 과정에서 오류가 발생했습니다.');
    } finally {
      setProcessingCampaigns(false);
      setShowAlert(false);
    }
  };

  // ----------------------------
  //  “제거” 버튼 -> 팝업 열기
  // ----------------------------
  const moveToAll = () => {
    if (selectedRightCampaigns.length === 0) {
      toast.warn('제거할 캠페인을 선택해주세요.');
      return;
    }

    // 확인창 메시지
    const tableContent = createGroupCampaignListTable(selectedRightCampaigns);
    const alertContent = (
      <div>
        <p className="mb-2">
          {groupName} 에서 아래의 {selectedRightCampaigns.length} 개의 캠페인을
          제거하시겠습니까?
        </p>
        {tableContent}
      </div>
    );

    setAlertMessage(alertContent);
    setConfirmRemove(true);
    setShowAlert(true);
  };

  // ----------------------------
  //  “제거” 확정
  // ----------------------------
  const confirmRemoveFromGroup = async () => {
    if (selectedRightCampaigns.length === 0) {
      setShowAlert(false);
      return;
    }

    setRemovingCampaigns(true);

    try {
      const result = await batchRemoveCampaignsFromGroup(
        groupId,
        selectedRightCampaigns,
        tenant_id
      );

      queryClient.invalidateQueries({ queryKey: ['campaignGroupSkills', groupId] });
      queryClient.invalidateQueries({ queryKey: ['campaignGroupList'] });
      queryClient.invalidateQueries({ queryKey: ['sideMenuData'] });

      if (result.success) {
        toast.success(
          `${result.successCount}개의 캠페인이 "${groupName}" 그룹에서 제거되었습니다.`
        );
      } else if (result.successCount > 0 && result.failedCampaigns.length > 0) {
        toast.warning(
          `${result.successCount}개의 캠페인이 제거되었지만, ${result.failedCampaigns.length}개는 실패했습니다.`
        );
      } else {
        toast.error('캠페인 제거에 실패했습니다.');
      }
    } catch (error) {
      console.error('캠페인 제거 중 오류 발생:', error);
      toast.error('캠페인 제거 과정에서 오류가 발생했습니다.');
    } finally {
      setRemovingCampaigns(false);
      setShowAlert(false);
      setConfirmRemove(false);
      setSelectedRightCampaigns([]);
    }
  };

  // ----------------------------
  //  Alert Confirm
  // ----------------------------
  const handleAlertConfirm = () => {
    if (confirmRemove) {
      confirmRemoveFromGroup();
    } else {
      confirmAddToGroup();
    }
  };

  // ----------------------------
  //  Footer Confirm
  // ----------------------------
  const handleConfirm = () => {
    // onSelect에 현재 그룹의 캠페인 ID를 넘기고 닫기
    const campaignIds = groupCampaignsData.map(item => item.campaign_id);
    if (onSelect) onSelect(campaignIds);
    if (onClose) onClose();
  };

  // ----------------------------
  //  중복 존재 여부
  // ----------------------------
  // 팝업에서 보여줄 목록 중 하나라도 이미 그룹에 있으면 confirmDisabled
  const duplicatesExist = campaignIdsForPopup.some(id =>
    groupCampaignsData.some(item => item.campaign_id === id)
  );

  // ----------------------------
  //  Render
  // ----------------------------
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
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full py-1 px-2 text-xs border border-gray-300 rounded"
          />
        </div>

        {/* 본문 */}
        <div
          className="flex flex-col p-4 overflow-hidden"
          style={{ height: 'calc(100vh - 200px)' }}
        >
          <div className="px-2 py-1 mb-2 border-b flex justify-between items-center bg-slate-50">
            <h3 className="text-xs font-medium">
              전체 캠페인 목록 (총 {totalCampaigns}건)
            </h3>
          </div>

          <div className="flex flex-1 h-full">
            {/* 왼쪽 테이블 */}
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
              {/* 추가 버튼 */}
              <button
                className="w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50"
                onClick={moveToGroup}
                disabled={
                  selectedLeftCampaigns.length === 0 ||
                  processingCampaigns ||
                  isAddingCampaign ||
                  removingCampaigns ||
                  isRemovingCampaign
                }
                title="선택한 캠페인 추가"
              >
                {processingCampaigns || isAddingCampaign ? (
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <ChevronRight size={14} />
                )}
              </button>

              {/* 제거 버튼 */}
              <button
                className="w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50"
                onClick={moveToAll}
                disabled={
                  selectedRightCampaigns.length === 0 ||
                  processingCampaigns ||
                  isAddingCampaign ||
                  removingCampaigns ||
                  isRemovingCampaign
                }
                title="선택한 캠페인 제거"
              >
                {removingCampaigns || isRemovingCampaign ? (
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <ChevronLeft size={14} />
                )}
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
        <div className="h-5"></div>

        {/* 푸터 */}
        <div className="py-2 px-4 border-t bg-gray-50 flex justify-between items-center">
          <div className="text-xs text-gray-600">
            현재 그룹에 {groupCampaignsData.length}개의 캠페인이 있습니다
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

        {/* CustomAlert */}
        {showAlert && (
          <CustomAlert
            isOpen={showAlert}
            title={confirmRemove ? '캠페인 제거 확인' : '캠페인 추가 확인'}
            // 팝업 내부에서 "추가" 모드일 때는 campaignIdsForPopup를 테이블로 렌더링
            // "제거" 모드일 때는 이미 alertMessage 자체에 테이블 포함
            message={
              <div>
                {alertMessage}
                {!confirmRemove && createCampaignListTable(campaignIdsForPopup)}
              </div>
            }
            type="1"
            width="max-w-md"
            onClose={handleAlertConfirm}
            onCancle={() => setShowAlert(false)}
            confirmDisabled={confirmRemove ? false : duplicatesExist} 
            // 제거 모드에는 비활성화 없음, 추가 모드에는 중복 시 비활성화
          />
        )}
      </div>
    </div>
  );
};

export default CampaignAddPopup;
