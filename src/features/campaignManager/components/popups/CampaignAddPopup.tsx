// src/features/campaignManager/components/popups/CampaignAddPopup.tsx
import React, { useState, useMemo, useEffect } from 'react';
import DataGrid, { SelectColumn } from "react-data-grid";
import CustomAlert from '@/components/shared/layout/CustomAlert';
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { CommonButton } from "@/components/shared/CommonButton";
import TitleWrap from "@/components/shared/TitleWrap";
import { ChevronRight, ChevronDown } from 'lucide-react';
import 'react-data-grid/lib/styles.css';
import Image from "next/image";
export interface CampaignAddPopupProps {
    isOpen?: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
}

// 스킬 정보 인터페이스
interface Skill {
    skillId: string;
    skillName: string;
}

// 캠페인 정보 인터페이스
interface Campaign {
    campaignId: string;
    campaignName: string;
    skillId: string;
    skillName: string;
}

// 그룹 소속 캠페인 정보 인터페이스
interface GroupCampaign {
    no: number;
    skillId: string;
    skillName: string;
    campaignId: string;
    campaignName: string;
}

// 트리 구조 인터페이스
interface TreeRow {
    id: string;
    parentId?: string;
    level: number;
    isExpanded?: boolean;
    hasChildren?: boolean;
    children?: TreeRow[];
    skillId: string;
    skillName: string;
    campaignId?: string;
    campaignName: string;
}

const CampaignAddPopup = ({
    isOpen = false,
    onConfirm = () => {},
    onCancel = () => {}
}: CampaignAddPopupProps) => {
    // 기본 상태 관리
    const [tenantId, setTenantId] = useState<string>('');
    const [campaignGroup, setCampaignGroup] = useState<string>('');
    const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set(['skill-1001', 'skill-2001', 'skill-3001', 'skill-4001', 'skill-5001']));
    
    // 스킬 목록
    const [skills] = useState<Skill[]>([
        { skillId: '1001', skillName: '스킬1' },
        { skillId: '2001', skillName: '스킬2' },
        { skillId: '3001', skillName: '스킬3' },
        { skillId: '4001', skillName: '스킬4' },
        { skillId: '5001', skillName: '스킬5' }
    ]);
    
    // 전체 캠페인 목록
    const [allCampaigns, setAllCampaigns] = useState<Campaign[]>([
        { campaignId: '123001', campaignName: '일반 상담 캠페인', skillId: '1001', skillName: '스킬1' },
        { campaignId: '123002', campaignName: '이슈 상담 캠페인', skillId: '1001', skillName: '스킬1' },
        { campaignId: '123003', campaignName: '신규 고객 상담', skillId: '1001', skillName: '스킬1' },
        { campaignId: '456001', campaignName: '기술 지원 캠페인', skillId: '2001', skillName: '스킬2' },
        { campaignId: '456002', campaignName: '네트워크 문제 상담', skillId: '2001', skillName: '스킬2' },
        { campaignId: '789001', campaignName: '해지 방어 캠페인', skillId: '3001', skillName: '스킬3' },
        { campaignId: '789002', campaignName: 'VIP 고객 해지방어', skillId: '3001', skillName: '스킬3' },
        { campaignId: '789003', campaignName: '장기 고객 해지방어', skillId: '3001', skillName: '스킬3' }
    ]);
    
    // 그룹 소속 캠페인 목록
    const [groupCampaigns, setGroupCampaigns] = useState<GroupCampaign[]>([
        { no: 1, skillId: '1001', skillName: '스킬1', campaignId: 'OQ0411-001', campaignName: '기존 상담 캠페인' },
        { no: 2, skillId: '1001', skillName: '스킬1', campaignId: 'test_patrick', campaignName: '테스트 캠페인' },
        { no: 3, skillId: '2001', skillName: '스킬2', campaignId: 'OQ0422-001', campaignName: '장비 지원 캠페인' }
    ]);
    
    // 선택된 캠페인 관리
    const [selectedAllCampaignIds, setSelectedAllCampaignIds] = useState<Set<string>>(new Set());
    const [selectedGroupCampaigns, setSelectedGroupCampaigns] = useState<Set<string>>(new Set());
    
    // 캠페인을 트리 구조로 변환
    const createTreeData = (campaigns: Campaign[]): TreeRow[] => {
        const skillNodes: { [key: string]: TreeRow } = {};
        const result: TreeRow[] = [];
        
        // 스킬별로 그룹화
        campaigns.forEach(campaign => {
            const skillNodeId = `skill-${campaign.skillId}`;
            
            // 스킬 노드가 없으면 생성
            if (!skillNodes[skillNodeId]) {
                skillNodes[skillNodeId] = {
                    id: skillNodeId,
                    level: 0,
                    hasChildren: true,
                    children: [],
                    skillId: campaign.skillId,
                    skillName: campaign.skillName,
                    campaignName: campaign.skillName // 스킬 노드의 표시명은 스킬 이름
                };
                result.push(skillNodes[skillNodeId]);
            }
            
            // 스킬 노드에 캠페인 추가
            skillNodes[skillNodeId].children = skillNodes[skillNodeId].children || [];
            skillNodes[skillNodeId].children.push({
                id: `campaign-${campaign.campaignId}`,
                parentId: skillNodeId,
                level: 1,
                hasChildren: false,
                skillId: campaign.skillId,
                skillName: campaign.skillName,
                campaignId: campaign.campaignId,
                campaignName: campaign.campaignName
            });
        });
        
        return result;
    };
    
    // 전체 캠페인 목록을 트리 구조로 변환
    const treeData = useMemo(() => createTreeData(allCampaigns), [allCampaigns]);
    
    // 트리 토글 함수
    const toggleRowExpand = (rowId: string) => {
        setExpandedRows(prevExpandedRows => {
            const newExpandedRows = new Set(prevExpandedRows);
            if (newExpandedRows.has(rowId)) {
                newExpandedRows.delete(rowId);
            } else {
                newExpandedRows.add(rowId);
            }
            return newExpandedRows;
        });
    };
    
    // 트리 데이터를 평면화
    const flattenRows = (rows: TreeRow[]): TreeRow[] => {
        let flat: TreeRow[] = [];
        rows.forEach((row) => {
            const isExpanded = expandedRows.has(row.id);
            flat.push({ ...row, isExpanded });
            if (row.children && isExpanded) {
                flat = flat.concat(flattenRows(row.children));
            }
        });
        return flat;
    };

    // 선택 가능한 행만 필터링 (레벨 1 - 캠페인 행만)
    const getSelectableRows = (): Set<string> => {
        const selectableRowIds = new Set<string>();
        const flattenedRows = flattenRows(treeData);
        
        flattenedRows.forEach(row => {
            if (row.level === 1) {
                selectableRowIds.add(row.id);
            }
        });
        
        return selectableRowIds;
    };
    
    // 전체 캠페인 목록 컬럼 정의
    const allCampaignsColumns = useMemo(() => [
        {
            ...SelectColumn,
            formatter: ({ row }: { row: TreeRow }) => {
                // 스킬 노드(레벨 0)에는 체크박스를 표시하지 않음
                if (row.level === 0) {
                    return <div className="rdg-checkbox"></div>; // 투명한 체크박스 공간 유지
                }
                
                // 캠페인 노드에는 체크박스 표시
                const isRowSelected = selectedAllCampaignIds.has(row.id);
                return (
                    <div className="rdg-checkbox-container">
                        <input
                            type="checkbox"
                            checked={isRowSelected}
                            onChange={(e) => {
                                e.stopPropagation();
                                const newSelection = new Set(selectedAllCampaignIds);
                                if (isRowSelected) {
                                    newSelection.delete(row.id);
                                } else {
                                    newSelection.add(row.id);
                                }
                                setSelectedAllCampaignIds(newSelection);
                            }}
                            className="rdg-checkbox"
                        />
                    </div>
                );
            }
        },
        {
            key: 'skillName',
            name: '스킬',
            width: 120,
            renderCell: ({ row }: { row: TreeRow }) => {
                const indent = row.level * 20;
                const showToggle = row.hasChildren;
                
                return (
                    <div style={{ marginLeft: `${indent}px` }} className="flex items-center">
                        {showToggle && (
                            <span
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleRowExpand(row.id);
                                }}
                                className="cursor-pointer mr-2"
                            >
                                {row.isExpanded ? (
                                    <Image src="/tree_arrdown.png" alt="마이너스" width={12} height={12} />
                                ) : (
                                    <Image src="/tree_arrup.png" alt="플러스" width={12} height={12} />
                                )}
                            </span>
                        )}
                        <span className={row.level === 0 ? "" : ""}>
                            {row.skillName}
                        </span>
                    </div>
                );
            }
        },
        { 
            key: 'campaignId', 
            name: '캠페인ID',
            width: 120,
            renderCell: ({ row }: { row: TreeRow }) => {
                return row.level === 0 ? "" : row.campaignId || "";
            }
        },
        { 
            key: 'campaignName', 
            name: '캠페인 이름',
            width: 200,
            renderCell: ({ row }: { row: TreeRow }) => {
                return row.level === 0 ? "" : row.campaignName;
            }
        }
    ], [selectedAllCampaignIds, expandedRows]);

    // 그룹 소속 캠페인 목록 컬럼 정의
    const groupCampaignsColumns = useMemo(() => [
        {
            ...SelectColumn,
            formatter: ({ row }: { row: GroupCampaign }) => {
                const isRowSelected = selectedGroupCampaigns.has(row.campaignId);
                return (
                    <div className="rdg-checkbox-container">
                        <input
                            type="checkbox"
                            checked={isRowSelected}
                            onChange={(e) => {
                                e.stopPropagation();
                                const newSelection = new Set(selectedGroupCampaigns);
                                if (isRowSelected) {
                                    newSelection.delete(row.campaignId);
                                } else {
                                    newSelection.add(row.campaignId);
                                }
                                setSelectedGroupCampaigns(newSelection);
                            }}
                            className="rdg-checkbox"
                        />
                    </div>
                );
            }
        },
        { key: 'no', name: 'NO', width: 50, minWidth: 50 },
        { key: 'skillId', name: '스킬ID', width: 80, minWidth: 80 },
        { key: 'skillName', name: '스킬명', width: 90, minWidth: 90 },
        { key: 'campaignId', name: '캠페인ID', width: 110, minWidth: 110 },
        { key: 'campaignName', name: '캠페인이름', width: 140, minWidth: 140 }
    ], [selectedGroupCampaigns]);

    // 스킬 노드 선택 처리
    const handleSkillSelect = (skillId: string) => {
        const skillNode = treeData.find(node => node.id === skillId);
        if (!skillNode || !skillNode.children) return;
        
        // 해당 스킬에 속한 모든 캠페인 ID 가져오기
        const campaignRows = flattenRows([skillNode]).filter(row => row.level === 1);
        const campaignIds = campaignRows.map(row => row.id);
        
        // 선택된 트리 노드 상태 업데이트
        const selectedTreeNodes = new Set(selectedAllCampaignIds);
        const allSelected = campaignIds.every(id => selectedTreeNodes.has(id));
        
        if (allSelected) {
            // 모두 선택된 경우 모두 해제
            campaignIds.forEach(id => selectedTreeNodes.delete(id));
        } else {
            // 일부만 선택되었거나 모두 선택되지 않은 경우 모두 선택
            campaignIds.forEach(id => selectedTreeNodes.add(id));
        }
        
        setSelectedAllCampaignIds(selectedTreeNodes);
    };

    // 전체 캠페인 선택 상태 변경 핸들러
    const handleAllCampaignsSelectionChange = (selectedRows: Set<string>) => {
        setSelectedAllCampaignIds(selectedRows);
    };

    // 그룹 소속 캠페인 선택 상태 변경 핸들러
    const handleGroupCampaignsSelectionChange = (selectedRows: Set<string>) => {
        setSelectedGroupCampaigns(selectedRows);
    };

    // 행 클릭 핸들러
    const handleRowClick = (row: TreeRow) => {
        if (row.level === 0) {
            // 스킬 노드 클릭 시 토글
            toggleRowExpand(row.id);
            // 스킬 노드 선택 처리
            handleSkillSelect(row.id);
        }
    };

    // 선택된 트리 노드에서 실제 캠페인 ID 추출
    const getSelectedCampaignIds = (): string[] => {
        const campaignIds: string[] = [];
        flattenRows(treeData).forEach(row => {
            if (row.level === 1 && row.campaignId && selectedAllCampaignIds.has(row.id)) {
                campaignIds.push(row.campaignId);
            }
        });
        return campaignIds;
    };

    // 전체 캠페인 → 그룹 소속 캠페인으로 이동
    const moveToGroup = () => {
        const selectedCampaignIds = getSelectedCampaignIds();
        if (selectedCampaignIds.length === 0) return;
        
        // 선택된 캠페인 찾기
        const selectedCampaigns = allCampaigns.filter(campaign => 
            selectedCampaignIds.includes(campaign.campaignId)
        );
        
        // 새로운 그룹 소속 캠페인 생성
        const newGroupCampaigns = [
            ...groupCampaigns,
            ...selectedCampaigns.map((campaign, index) => ({
                no: groupCampaigns.length + index + 1,
                skillId: campaign.skillId,
                skillName: campaign.skillName,
                campaignId: campaign.campaignId,
                campaignName: campaign.campaignName
            }))
        ];
        
        // 전체 캠페인에서 선택된 항목 제거
        const remainingAllCampaigns = allCampaigns.filter(
            campaign => !selectedCampaignIds.includes(campaign.campaignId)
        );
        
        // 상태 업데이트
        setGroupCampaigns(newGroupCampaigns);
        setAllCampaigns(remainingAllCampaigns);
        setSelectedAllCampaignIds(new Set());
    };

    // 그룹 소속 캠페인 → 전체 캠페인으로 이동
    const moveToAll = () => {
        if (selectedGroupCampaigns.size === 0) return;
        
        // 선택된 그룹 소속 캠페인 찾기
        const selectedCampaigns = groupCampaigns.filter(campaign => 
            selectedGroupCampaigns.has(campaign.campaignId)
        );
        
        // 새로운 전체 캠페인 목록 생성 - 스킬 정보 유지
        const newAllCampaigns = [
            ...allCampaigns,
            ...selectedCampaigns.map(campaign => ({
                campaignId: campaign.campaignId,
                campaignName: campaign.campaignName,
                skillId: campaign.skillId,
                skillName: campaign.skillName
            }))
        ];
        
        // 그룹 소속 캠페인에서 선택된 항목 제거
        const remainingGroupCampaigns = groupCampaigns.filter(
            campaign => !selectedGroupCampaigns.has(campaign.campaignId)
        );
        
        // no 필드 재정렬
        const reorderedGroupCampaigns = remainingGroupCampaigns.map((campaign, index) => ({
            ...campaign,
            no: index + 1
        }));
        
        // 상태 업데이트
        setAllCampaigns(newAllCampaigns);
        setGroupCampaigns(reorderedGroupCampaigns);
        setSelectedGroupCampaigns(new Set());
    };

    // 조회 버튼 클릭 핸들러
    const handleSearch = () => {
        // 실제 구현에서는 API 호출 등이 필요
        console.log('조회:', tenantId, campaignGroup);
    };

    const content = (
        <div>
            <div className="flex title-background justify-between">
                <div className="flex gap-[40px] items-center">
                    <div className="flex items-center gap-1r">
                        <Label className="pr-[15px]">테넌트ID</Label>
                        <CustomInput
                            type="text"
                            className="w-[180px]"
                            value={tenantId}
                            onChange={(e) => setTenantId(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center">
                        <Label className="pr-[15px]">캠페인 그룹명</Label>
                        <CustomInput
                            type="text"
                            className="w-[180px]"
                            value={campaignGroup}
                            onChange={(e) => setCampaignGroup(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-end gap-2">
                    <CommonButton onClick={handleSearch}>조회</CommonButton>
                </div>
            </div>
            
            <div className='flex gap-[15px] items-center mt-[20px]'>
                <div className=''>
                    <TitleWrap title="전체 캠페인 목록" totalCount={allCampaigns.length} />
                    <div className="grid-custom-wrap h-340">
                        <DataGrid
                            columns={allCampaignsColumns}
                            rows={flattenRows(treeData)}
                            className="grid-custom"
                            rowKeyGetter={(row) => row.id}
                            selectedRows={selectedAllCampaignIds}
                            onSelectedRowsChange={handleAllCampaignsSelectionChange}
                            onCellClick={({ row }) => {
                                if (row.level === 0) {
                                    // 스킬 노드 클릭 시 토글
                                    toggleRowExpand(row.id);
                                    // 스킬 노드 선택 처리
                                    handleSkillSelect(row.id);
                                }
                            }}
                            rowHeight={30}
                            headerRowHeight={30}
                            enableVirtualization={false}
                            rowClass={(row) => 
                                row.level === 0 ? 'bg-[#f5faff] chknone' : ''
                            }
                        />
                    </div>
                </div>
                
                <div className="flex flex-col items-center gap-2 min-w-[22px] justify-center">
                    <button
                        className="w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50"
                        onClick={moveToGroup}
                        disabled={getSelectedCampaignIds().length === 0}
                    >
                        →
                    </button>
                    <button
                        className="w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50"
                        onClick={moveToAll}
                        disabled={selectedGroupCampaigns.size === 0}
                    >
                        ←
                    </button>
                </div>
                
                <div className=''>
                    <TitleWrap title="그룹 소속 캠페인 목록" totalCount={groupCampaigns.length} />
                    <div className="grid-custom-wrap h-340">
                        <DataGrid
                            columns={groupCampaignsColumns}
                            rows={groupCampaigns}
                            className="grid-custom"
                            rowKeyGetter={(row) => row.campaignId}
                            selectedRows={selectedGroupCampaigns}
                            onSelectedRowsChange={handleGroupCampaignsSelectionChange}
                            rowHeight={30}
                            headerRowHeight={30}
                            enableVirtualization={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <CustomAlert
            isOpen={isOpen}
            title="캠페인 추가/제외"
            message={content}
            onClose={onConfirm}
            onCancle={onCancel}
            type="1"
            width="m-w-1080"
        />
    );
};

export default CampaignAddPopup;