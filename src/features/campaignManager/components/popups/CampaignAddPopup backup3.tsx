"use client";

import React, { useState, useMemo, useEffect } from 'react';
import DataGrid from "react-data-grid";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { CommonButton } from "@/components/shared/CommonButton";
import TitleWrap from "@/components/shared/TitleWrap";
import 'react-data-grid/lib/styles.css';
import CommonDialogForSideMenu from '@/components/shared/CommonDialog/CommonDialogForSideMenu';
import { toast } from 'react-toastify';

// 다이얼로그 Props 인터페이스
interface SkillsWithCampaignsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

// 왼쪽 그리드 행 인터페이스
interface LeftDisplayRow {
  id: string | number;
  parentId?: number;
  skill_id?: number;
  skill_name?: string;
  campaign_id?: number | string;
  campaign_name?: string;
  tenant_id?: number;
  isChild?: boolean;
  isExpanded?: boolean;
  hidden?: boolean;
  checked?: boolean;
}

// 오른쪽 그리드 행 인터페이스 (평평한 구조)
interface RightDisplayRow {
  id: number;
  no: number;  
  skill_id: number | string;
  skill_name: string;
  campaign_id: string;
  campaign_name: string;
  checked?: boolean;
}

const SkillsWithCampaignsPopup: React.FC<SkillsWithCampaignsPopupProps> = ({
  isOpen,
  onClose,
  onConfirm
}) => {
  const [tenantId, setTenantId] = useState<string>('1');
  const [searchText, setSearchText] = useState<string>('');
  
  // 왼쪽 그리드 데이터
  const [leftRows, setLeftRows] = useState<LeftDisplayRow[]>([]);
  
  // 오른쪽 그리드 데이터 (평평한 구조)
  const [rightRows, setRightRows] = useState<RightDisplayRow[]>([]);
  
  // 초기화 여부
  const [initialized, setInitialized] = useState(false);
  
  // 다이얼로그가 열릴 때 데이터 초기화
  useEffect(() => {
    if (isOpen && !initialized) {
      initializeData();
      setInitialized(true);
    }
  }, [isOpen, initialized]);
  
  // 다이얼로그가 닫힐 때 초기화 상태 리셋
  useEffect(() => {
    if (!isOpen) {
      setInitialized(false);
    }
  }, [isOpen]);
  
  // 샘플 데이터 초기화 함수
  const initializeData = () => {
    // 왼쪽 데이터 초기화
    const initialLeftRows: LeftDisplayRow[] = [];
    
    for (let i = 1; i <= 3; i++) {
      // 부모 행 (스킬) 추가 - 미리 열림 상태
      initialLeftRows.push({
        id: i,
        skill_id: i,
        skill_name: `스킬${i}`,
        tenant_id: 1,
        isExpanded: true // 기본값을 true로 설정
      });
      
      // 각 부모 행에 2-3개의 자식 행 추가 - 기본적으로 자식 행은 보임
      for (let j = 1; j <= 2 + (i % 2); j++) {
        const campaignId = i * 10000 + j;
        initialLeftRows.push({
          id: `${i}-${campaignId}`,
          parentId: i,
          skill_id: i,
          skill_name: `스킬${i}`,
          campaign_id: campaignId,
          campaign_name: j === 1 ? '원인 분석 캠페인' : j === 2 ? '이슈 설정 캠페인' : '신규 구축 설정',
          tenant_id: 1,
          isChild: true,
          hidden: false, // 자식 행을 기본적으로 보이도록 false 설정
          checked: false
        });
      }
    }
    
    // 오른쪽 데이터 초기화 (이미지의 평평한 구조와 일치)
    const initialRightRows: RightDisplayRow[] = [
      { id: 1, no: 1, skill_id: 1001, skill_name: '스킬1', campaign_id: 'OQO411-001', campaign_name: '기존 설정 캠페인', checked: false },
      { id: 2, no: 2, skill_id: 1001, skill_name: '스킬1', campaign_id: 'test_patrick', campaign_name: '테스트 캠페인', checked: false },
      { id: 3, no: 3, skill_id: 2001, skill_name: '스킬2', campaign_id: 'OQO422-001', campaign_name: '설정 지원 캠페인', checked: false }
    ];
    
    setLeftRows(initialLeftRows);
    setRightRows(initialRightRows);
  };
  
  // 검색어에 따른 왼쪽 그리드 필터링
  const filteredLeftRows = useMemo(() => {
    if (!leftRows.length) return [];
    
    if (!searchText) return leftRows.filter(row => !row.hidden);
    
    return leftRows.filter(row => {
      if (row.hidden) return false;
      
      if (row.isChild) {
        return row.campaign_name?.toLowerCase().includes(searchText.toLowerCase());
      } else {
        return row.skill_name?.toLowerCase().includes(searchText.toLowerCase());
      }
    });
  }, [leftRows, searchText]);
  
  // 검색어에 따른 오른쪽 그리드 필터링
  const filteredRightRows = useMemo(() => {
    if (!rightRows.length) return [];
    
    if (!searchText) return rightRows;
    
    return rightRows.filter(row => {
      return (
        row.skill_name.toLowerCase().includes(searchText.toLowerCase()) ||
        row.campaign_name.toLowerCase().includes(searchText.toLowerCase()) ||
        String(row.campaign_id).toLowerCase().includes(searchText.toLowerCase())
      );
    });
  }, [rightRows, searchText]);
  
  // 스킬명 클릭 핸들러 (왼쪽 그리드)
  const handleSkillNameClick = (skillId: number, skillName: string) => {
    console.log('스킬명 클릭:', { skillId, skillName });
    
    // 부모 행 찾기
    const parentRow = leftRows.find(r => r.skill_id === skillId && !r.isChild);
    if (!parentRow) return;
    
    // 부모의 새 확장 상태 계산
    const newExpanded = !parentRow.isExpanded;
    
    // 상태 업데이트
    const updatedRows = leftRows.map(row => {
      if (row.skill_id === skillId && !row.isChild) {
        return { ...row, isExpanded: newExpanded };
      } else if (row.parentId === skillId && row.isChild) {
        return { ...row, hidden: !newExpanded };
      }
      return row;
    });
    
    setLeftRows(updatedRows);
  };
  
  // 왼쪽 그리드 체크박스 상태 변경 핸들러
  const handleLeftRowCheck = (id: string | number, checked: boolean) => {
    const updatedRows = leftRows.map(row => {
      if (row.id === id) {
        return { ...row, checked };
      }
      return row;
    });
    
    setLeftRows(updatedRows);
  };
  
  // 오른쪽 그리드 체크박스 상태 변경 핸들러
  const handleRightRowCheck = (id: number, checked: boolean) => {
    const updatedRows = rightRows.map(row => {
      if (row.id === id) {
        return { ...row, checked };
      }
      return row;
    });
    
    setRightRows(updatedRows);
  };
  
  // 오른쪽으로 이동 버튼 클릭 핸들러
  const moveToRight = () => {
    // 체크된 캠페인 찾기
    const checkedCampaigns = leftRows.filter(row => row.isChild && row.checked);
    
    if (checkedCampaigns.length === 0) {
      toast.info('이동할 캠페인을 선택해주세요.');
      return;
    }
    
    // 오른쪽 그리드에 추가
    const newRightRows = [...rightRows];
    
    // 마지막 ID와 NO 찾기
    const lastId = Math.max(...rightRows.map(row => row.id));
    const lastNo = Math.max(...rightRows.map(row => row.no));
    
    // 체크된 캠페인 오른쪽으로 이동
    checkedCampaigns.forEach((campaign, index) => {
      // 이미 오른쪽에 있는지 확인
      const exists = newRightRows.some(
        row => row.campaign_id === campaign.campaign_id
      );
      
      if (!exists) {
        newRightRows.push({
          id: lastId + index + 1,
          no: lastNo + index + 1,
          skill_id: campaign.skill_id || 0,
          skill_name: campaign.skill_name || '',
          campaign_id: String(campaign.campaign_id || ''),
          campaign_name: campaign.campaign_name || '',
          checked: false
        });
      }
    });
    
    // 왼쪽 그리드에서 체크 해제
    const updatedLeftRows = leftRows.map(row => {
      if (row.checked) {
        return { ...row, checked: false };
      }
      return row;
    });
    
    setRightRows(newRightRows);
    setLeftRows(updatedLeftRows);
    
    toast.success(`${checkedCampaigns.length}개 캠페인이 추가되었습니다.`);
  };
  
  // 왼쪽으로 이동 버튼 클릭 핸들러
  const moveToLeft = () => {
    // 체크된 캠페인 찾기
    const checkedCampaigns = rightRows.filter(row => row.checked);
    
    if (checkedCampaigns.length === 0) {
      toast.info('제거할 캠페인을 선택해주세요.');
      return;
    }
    
    // 오른쪽 그리드에서 제거
    const newRightRows = rightRows.filter(row => !row.checked);
    
    // 왼쪽 그리드 체크 해제
    const updatedLeftRows = leftRows.map(row => {
      if (row.isChild && checkedCampaigns.some(c => String(c.campaign_id) === String(row.campaign_id))) {
        return { ...row, checked: false };
      }
      return row;
    });
    
    setRightRows(newRightRows);
    setLeftRows(updatedLeftRows);
    
    toast.success(`${checkedCampaigns.length}개 캠페인이 제거되었습니다.`);
  };
  
  // 왼쪽 그리드 컬럼 정의
  const leftColumns = useMemo(() => [
    {
      key: 'checked',
      name: '',
      width: 35,
      renderCell: ({ row }: { row: LeftDisplayRow }) => {
        // 스킬 행에는 체크박스 표시 안함
        if (!row.isChild) return null;
        
        return (
          <input
            type="checkbox"
            checked={row.checked || false}
            onChange={(e) => handleLeftRowCheck(row.id, e.target.checked)}
            onClick={(e) => e.stopPropagation()}
          />
        );
      }
    },
    { 
      key: 'skill_name', 
      name: '스킬', 
      width: 120,
      renderCell: ({ row }: { row: LeftDisplayRow }) => {
        if (row.isChild) return null;
        
        return (
          <div
            className="cursor-pointer flex items-center text-blue-600"
            onClick={(e) => {
              e.stopPropagation();
              if (row.skill_id && row.skill_name) {
                handleSkillNameClick(row.skill_id, row.skill_name);
              }
            }}
          >
            <Image 
              src={row.isExpanded ? "/tree_arrdown.png" : "/tree_arrup.png"} 
              alt={row.isExpanded ? "접힘" : "펼침"} 
              width={12} 
              height={12} 
              className="mr-1" 
            />
            <span className="underline">{row.skill_name}</span>
          </div>
        );
      }
    },
    { 
      key: 'campaign_id', 
      name: '캠페인ID', 
      width: 100,
      renderCell: ({ row }: { row: LeftDisplayRow }) => {
        if (!row.isChild) return null;
        return <span>{row.campaign_id}</span>;
      }
    },
    { 
      key: 'campaign_name', 
      name: '캠페인 이름', 
      width: 200,
      renderCell: ({ row }: { row: LeftDisplayRow }) => {
        if (!row.isChild) return null;
        return <span style={{ paddingLeft: '16px' }}>{row.campaign_name}</span>;
      }
    }
  ], [leftRows]);
  
  // 오른쪽 그리드 컬럼 정의 (이미지와 정확히 일치)
  const rightColumns = useMemo(() => [
    {
      key: 'checked',
      name: '',
      width: 35,
      renderCell: ({ row }: { row: RightDisplayRow }) => (
        <input
          type="checkbox"
          checked={row.checked || false}
          onChange={(e) => handleRightRowCheck(row.id, e.target.checked)}
          onClick={(e) => e.stopPropagation()}
        />
      )
    },
    { key: 'no', name: 'NO', width: 60 },
    { key: 'skill_id', name: '스킬ID', width: 80 },
    { key: 'skill_name', name: '스킬명', width: 80 },
    { key: 'campaign_id', name: '캠페인ID', width: 120 },
    { key: 'campaign_name', name: '캠페인이름', width: 150 }
  ], [rightRows]);
  
  // 행 배경색 설정 (왼쪽 그리드)
  const getLeftRowClass = (row: LeftDisplayRow) => {
    return row.isChild ? 'bg-white' : 'bg-gray-100';
  };
  
  // 조회 버튼 클릭 핸들러
  const handleSearch = () => {
    console.log('조회 버튼 클릭:', { searchText, tenantId });
    toast.info('검색어: ' + (searchText || '없음'));
  };

  return (
    <CommonDialogForSideMenu
      isOpen={isOpen}
      onClose={onClose}
      title="스킬 및 캠페인 연결 목록"
      dialogClassName="w-[1200px] max-h-[90vh] overflow-hidden"
    >
      <div className="flex flex-col h-full p-4">
        {/* 검색 영역 */}
        <div className="flex justify-between items-center mb-6 p-4 rounded bg-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Label className="pr-[15px] font-medium">테넌트ID</Label>
              <CustomInput 
                type="text" 
                className="w-[180px]" 
                value={tenantId}
                onChange={(e) => setTenantId(e.target.value)}
                placeholder="테넌트 ID 입력"
              />
            </div>
            <div className="flex items-center">
              <Label className="pr-[15px] font-medium">검색</Label>
              <CustomInput
                type="text"
                className="w-[180px]"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="스킬명, 캠페인명, ID 검색"
              />
            </div>
          </div>
          <div>
            <CommonButton onClick={handleSearch} className="bg-blue-500 text-white">조회</CommonButton>
          </div>
        </div>

        {/* 그리드 영역 - 좌우로 분할 */}
        <div className="flex flex-1 space-x-4 overflow-hidden mb-4">
          {/* 왼쪽 영역 - 전체 스킬과 캠페인 */}
          <div className="flex-1 overflow-hidden">
            <TitleWrap title="전체 캠페인 목록" totalCount={filteredLeftRows.filter(row => row.isChild).length} />
            <div className="grid-custom-wrap h-[450px]">
              <DataGrid
                columns={leftColumns}
                rows={filteredLeftRows}
                rowKeyGetter={(row) => row.id}
                rowHeight={40}
                headerRowHeight={40}
                style={{ height: '100%', width: '100%' }}
                rowClass={getLeftRowClass}
              />
            </div>
          </div>
          
          {/* 중앙 이동 버튼 영역 */}
          <div className="flex flex-col justify-center items-center space-y-4">
            <CommonButton 
              onClick={moveToRight}
              className="bg-blue-500 text-white w-[120px]"
            >
              {'→ 추가'}
            </CommonButton>
            <CommonButton 
              onClick={moveToLeft}
              className="bg-gray-300 text-gray-800 w-[120px]"
            >
              {'← 제거'}
            </CommonButton>
          </div>
          
          {/* 오른쪽 영역 - 그룹 소속 캠페인 (평평한 구조) */}
          <div className="flex-1 overflow-hidden">
            <TitleWrap title="그룹 소속 캠페인 목록" totalCount={filteredRightRows.length} />
            <div className="grid-custom-wrap h-[450px]">
              <DataGrid
                columns={rightColumns}
                rows={filteredRightRows}
                rowKeyGetter={(row) => row.id}
                rowHeight={40}
                headerRowHeight={40}
                style={{ height: '100%', width: '100%' }}
              />
            </div>
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-gray-200">
          <CommonButton onClick={onConfirm} className="bg-blue-500 text-white">확인</CommonButton>
          <CommonButton onClick={onClose} className="bg-gray-200 text-gray-800">취소</CommonButton>
        </div>
      </div>
    </CommonDialogForSideMenu>
  );
};

export default SkillsWithCampaignsPopup;
