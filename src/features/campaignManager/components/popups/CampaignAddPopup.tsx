// src/features/campaignManager/components/popups/CampaignAddPopup.tsx
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import useApiForGetSkillsWithCampaigns from '@/widgets/sidebar/hooks/useApiForGetSkillsWithCampaigns';
import { useTotalCampaignListForAddCampaignToCampaignGroup } from '@/widgets/sidebar/hooks/useTotalCampaignListForAddCampaignToCampaignGroup';
import { useTotalSkillListForAddCampaignToCampaignGroup } from '@/widgets/sidebar/hooks/useTotalSkillListForAddCampaignToCampaignGroup';
import { CampaignInfo, SkillInfo } from '@/widgets/sidebar/api/type/typeForAddCampaignForCampaignGroup';

// 스킬별 캠페인 구조
interface SkillWithCampaigns {
    skillId: number;
    campaigns: {
        campaignId: number;
        tenantId: number;
    }[];
}

// 그룹 소속 캠페인 구조 (오른쪽 테이블에 표시할 데이터)
interface GroupCampaign {
    skillId: number;
    campaignId: number;
    tenantId: number;
}

interface Props {
    isOpen?: boolean;
    groupId: number;
    onClose?: () => void;
    onSelect?: (selectedCampaigns: number[]) => void;
}

const CampaignAddPopup: React.FC<Props> = ({ isOpen = true, onClose, onSelect, groupId }) => {
    // ─────────────────────────────────────────────────────────────────────────
    // 1) 공통 상태
    // ─────────────────────────────────────────────────────────────────────────
    // (1) 스킬+캠페인 구조화 데이터
    const [skillsWithCampaigns, setSkillsWithCampaigns] = useState<SkillWithCampaigns[]>([]);
    // (2) 확장된 스킬 ID 목록
    const [expandedSkills, setExpandedSkills] = useState<number[]>([1]);
    // (3) 왼쪽 테이블(스킬/캠페인)에서 선택된 캠페인 ID
    const [selectedLeftCampaigns, setSelectedLeftCampaigns] = useState<number[]>([]);
    // (4) 검색어
    const [searchTerm, setSearchTerm] = useState('');
    // (5) 오른쪽 테이블(그룹 소속 캠페인) 목록
    const [groupCampaigns, setGroupCampaigns] = useState<GroupCampaign[]>([]);
    // (6) 오른쪽 테이블에서 선택된 캠페인 ID
    const [selectedRightCampaigns, setSelectedRightCampaigns] = useState<number[]>([]);

    // Lookups for 빠른 접근
    const [campaignLookup, setCampaignLookup] = useState<Record<number, CampaignInfo>>({});
    const [skillLookup, setSkillLookup] = useState<Record<number, SkillInfo>>({});

    // ─────────────────────────────────────────────────────────────────────────
    // 2) API 호출 훅
    // ─────────────────────────────────────────────────────────────────────────
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

    // ─────────────────────────────────────────────────────────────────────────
    // 3) 캠페인/스킬 Lookup 구성
    // ─────────────────────────────────────────────────────────────────────────
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

    // ─────────────────────────────────────────────────────────────────────────
    // 4) 스킬+캠페인 구조화
    // ─────────────────────────────────────────────────────────────────────────
    useEffect(() => {
        if (data && data.result_data) {
            const skillMap: Record<number, SkillWithCampaigns> = {};

            data.result_data.forEach(campaign => {
                if (Array.isArray(campaign.skill_id)) {
                    campaign.skill_id.forEach(skillId => {
                        if (!skillMap[skillId]) {
                            skillMap[skillId] = {
                                skillId,
                                campaigns: []
                            };
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

    // 팝업 열릴 때마다 초기화
    useEffect(() => {
        if (isOpen) {
            setSelectedLeftCampaigns([]);
            setExpandedSkills([1]);
            setSearchTerm('');
            setGroupCampaigns([]); // 그룹 소속 캠페인도 초기화 (원하시면 제거)
            setSelectedRightCampaigns([]);
        }
    }, [isOpen]);

    // 로딩/에러 상태
    const isLoadingAny = isLoading || isLoadingCampaigns || isLoadingSkills;
    const hasError = error || campaignError || skillError;

    // ─────────────────────────────────────────────────────────────────────────
    // 5) 스킬/캠페인명 헬퍼
    // ─────────────────────────────────────────────────────────────────────────
    const getCampaignName = (campaignId: number): string => {
        return campaignLookup[campaignId]?.campaign_name || `캠페인 ${campaignId}`;
    };
    const getSkillName = (skillId: number): string => {
        return skillLookup[skillId]?.skill_name || `스킬 ${skillId}`;
    };

    // ─────────────────────────────────────────────────────────────────────────
    // 6) 검색 필터
    // ─────────────────────────────────────────────────────────────────────────
    const filteredSkills = useMemo(() => {
        if (!searchTerm) return skillsWithCampaigns;
        return skillsWithCampaigns.filter(skill => {
            // 스킬 ID나 스킬명으로 검색
            if (
                String(skill.skillId).includes(searchTerm) ||
                getSkillName(skill.skillId).toLowerCase().includes(searchTerm.toLowerCase())
            ) {
                return true;
            }
            // 캠페인 ID나 캠페인명으로 검색
            return skill.campaigns.some(c => {
                const campaignIdMatch = String(c.campaignId).includes(searchTerm);
                const campaignNameMatch = getCampaignName(c.campaignId).toLowerCase().includes(searchTerm.toLowerCase());
                return campaignIdMatch || campaignNameMatch;
            });
        });
    }, [skillsWithCampaigns, searchTerm]);

    // 전체 캠페인 수
    const totalCampaigns = useMemo(() => {
        return filteredSkills.reduce((acc, skill) => acc + skill.campaigns.length, 0);
    }, [filteredSkills]);

    // ─────────────────────────────────────────────────────────────────────────
    // 7) 왼쪽(스킬/캠페인) 테이블 관련
    // ─────────────────────────────────────────────────────────────────────────
    // 스킬 확장/축소
    const toggleSkill = (skillId: number) => {
        setExpandedSkills(prev =>
            prev.includes(skillId)
                ? prev.filter(id => id !== skillId)
                : [...prev, skillId]
        );
    };

    // 왼쪽 캠페인 체크
    const toggleLeftCampaignSelection = (campaignId: number) => {
        setSelectedLeftCampaigns(prev =>
            prev.includes(campaignId)
                ? prev.filter(id => id !== campaignId)
                : [...prev, campaignId]
        );
    };

    // ─────────────────────────────────────────────────────────────────────────
    // 8) 오른쪽(그룹 소속 캠페인) 테이블 관련
    // ─────────────────────────────────────────────────────────────────────────
    // 오른쪽 캠페인 체크
    const toggleRightCampaignSelection = (campaignId: number) => {
        setSelectedRightCampaigns(prev =>
            prev.includes(campaignId)
                ? prev.filter(id => id !== campaignId)
                : [...prev, campaignId]
        );
    };

    // ─────────────────────────────────────────────────────────────────────────
    // 9) 캠페인 이동
    // ─────────────────────────────────────────────────────────────────────────
    // 왼쪽 → 오른쪽
    const moveToRight = () => {
        // 선택된 캠페인 정보를 찾아서 groupCampaigns에 추가
        const newGroup: GroupCampaign[] = [];
        filteredSkills.forEach(skill => {
            skill.campaigns.forEach(campaign => {
                if (selectedLeftCampaigns.includes(campaign.campaignId)) {
                    newGroup.push({
                        skillId: skill.skillId,
                        campaignId: campaign.campaignId,
                        tenantId: campaign.tenantId
                    });
                }
            });
        });
        // 이미 추가된 중복 제거
        const combined = [...groupCampaigns, ...newGroup];
        const unique = Array.from(
            new Set(combined.map((c) => `${c.skillId}-${c.campaignId}`))
        ).map(key => {
            const [skillId, campaignId] = key.split('-').map(Number);
            return combined.find(c => c.skillId === skillId && c.campaignId === campaignId)!;
        });

        setGroupCampaigns(unique);
        setSelectedLeftCampaigns([]);
    };

    // 오른쪽 → 왼쪽
    const moveToLeft = () => {
        // selectedRightCampaigns에 포함된 항목은 제거
        const remain = groupCampaigns.filter(c => !selectedRightCampaigns.includes(c.campaignId));
        setGroupCampaigns(remain);
        setSelectedRightCampaigns([]);
    };

    // ─────────────────────────────────────────────────────────────────────────
    // 10) 확인/취소
    // ─────────────────────────────────────────────────────────────────────────
    const handleConfirm = () => {
        // 최종적으로 선택된 캠페인 ID를 넘겨줌
        // (우측에 있는 캠페인 전부를 onSelect로 넘긴다거나,
        //  아니면 selectedLeftCampaigns를 넘기거나,
        //  원하는 로직에 맞게 수정하세요)
        const finalIds = groupCampaigns.map(c => c.campaignId);
        if (onSelect) {
            onSelect(finalIds);
        }
        if (onClose) {
            onClose();
        }
    };

    if (!isOpen) return null;
    
    // 로딩/에러 상태
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            {/* 다이어로그 크기 2배 이상 확대 */}
            <div className="bg-white rounded shadow-md w-[70%] max-h-[1000px] flex flex-col overflow-hidden">
                {/* Header */}

                <div>groupId: {groupId}</div>

                <div className="flex justiy-between items-center px-4 py-2 border-b bg-gray-50">
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

                {/* Content: 좌/우 테이블 + 중앙 버튼 */}
                <div className="flex-1 overflow-hidden flex flex-col p-2">
                    {/* 상단 영역: 전체 캠페인 갯수 */}
                    <div className="px-2 py-1 border-b flex justify-between items-center bg-slate-50">
                        <h3 className="text-xs font-medium">
                            전체 캠페인 목록 (총 {totalCampaigns}건)
                        </h3>
                    </div>

                    {/* 메인 영역: 좌우 분할 */}
                    <div className="flex flex-1 mt-2 overflow-hidden">
                        {/* Left Table (스킬/캠페인) */}
                        <div className="flex-1 border mr-2 overflow-auto rounded">
                            {isLoadingAny ? (
                                <div className="flex items-center justify-center h-full text-sm">
                                    로딩 중...
                                </div>
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
                                                    {/* Skill Row */}
                                                    <tr
                                                        className={`border-b ${isExpanded ? 'bg-slate-100' : 'bg-white'}`}
                                                    >
                                                        <td className="py-1 px-2 align-middle">
                                                            <button
                                                                className="focus:outline-none"
                                                                onClick={() => toggleSkill(skill.skillId)}
                                                            >
                                                                {isExpanded ? (
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
                                                            <span className="font-medium">
                                                                {getSkillName(skill.skillId)}
                                                            </span>
                                                        </td>
                                                        <td className="py-1 px-2 align-middle"></td>
                                                        <td className="py-1 px-2 align-middle"></td>
                                                    </tr>

                                                    {/* Campaign Rows */}
                                                    {isExpanded &&
                                                        skill.campaigns.map(campaign => (
                                                            <tr
                                                                key={`campaign-${skill.skillId}-${campaign.campaignId}`}
                                                                className="border-b bg-white hover:bg-gray-50"
                                                            >
                                                                <td className="py-1 px-2 align-middle">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectedLeftCampaigns.includes(campaign.campaignId)}
                                                                        onChange={() =>
                                                                            toggleLeftCampaignSelection(campaign.campaignId)
                                                                        }
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
                                            );
                                        })}
                                    </tbody>
                                </table>
                            )}
                        </div>

                        {/* 중앙 버튼 영역 */}
                        <div className="flex flex-col items-center justify-center gap-2 mx-2">
                            <button
                                onClick={moveToRight}
                                disabled={selectedLeftCampaigns.length === 0}
                                className="px-2 py-1 text-sm bg-blue-100 hover:bg-blue-200 rounded disabled:opacity-50"
                            >
                                →
                            </button>
                            <button
                                onClick={moveToLeft}
                                disabled={selectedRightCampaigns.length === 0}
                                className="px-2 py-1 text-sm bg-blue-100 hover:bg-blue-200 rounded disabled:opacity-50"
                            >
                                ←
                            </button>
                        </div>

                        {/* Right Table (그룹 소속 캠페인) */}
                        <div className="flex-1 border ml-2 overflow-auto rounded">
                            <table className="w-full border-collapse table-fixed text-xs">
                                <thead>
                                    <tr className="bg-white border-b">
                                        <th className="w-8"></th>
                                        <th className="text-left py-1 px-2 font-medium w-1/4">스킬</th>
                                        <th className="text-left py-1 px-2 font-medium w-1/4">캠페인ID</th>
                                        <th className="text-left py-1 px-2 font-medium w-1/2">캠페인 이름</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {groupCampaigns.length === 0 ? (
                                        <tr>
                                            <td colSpan={4} className="text-center py-6 text-gray-400">
                                                그룹 소속 캠페인이 없습니다.
                                            </td>
                                        </tr>
                                    ) : (
                                        groupCampaigns.map(item => (
                                            <tr
                                                key={`right-${item.skillId}-${item.campaignId}`}
                                                className="border-b bg-white hover:bg-gray-50"
                                            >
                                                <td className="py-1 px-2 align-middle">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedRightCampaigns.includes(item.campaignId)}
                                                        onChange={() => toggleRightCampaignSelection(item.campaignId)}
                                                        className="h-3 w-3 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="py-1 px-2 align-middle">
                                                    {getSkillName(item.skillId)}
                                                </td>
                                                <td className="py-1 px-2 align-middle">{item.campaignId}</td>
                                                <td className="py-1 px-2 align-middle text-blue-600">
                                                    {getCampaignName(item.campaignId)}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="py-2 px-4 border-t bg-gray-50 flex justify-between items-center">
                    <div className="text-xs text-gray-600">
                        {groupCampaigns.length}개의 캠페인 선택됨
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
