// src/features/campaignManager/CampaignManagerList.tsx
'use client';
import { useEffect, useState, useCallback } from 'react';
import DataGrid, { CellClickArgs, Column as GridColumn } from "react-data-grid";
import 'react-data-grid/lib/styles.css';
import TitleWrap from "@/components/shared/TitleWrap";
import { Button } from "@/components/ui/button";
import { useMainStore, useCampainManagerStore, useTabStore } from '@/store';
import { CampaignHeaderSearch } from './CampaignManagerHeader';
import { CampaignListDataResponse } from '@/features/campaignManager/types/typeForCampaignForSideBar';
import { useApiForGetCampaignList } from '@/features/auth/hooks/useApiForGetCampaignList';
import { useApiForGetCampaignById } from '@/features/auth/hooks/useApiForGetCampaignById';

const dialModeList = [
  { dial_id: 1, dial_name: 'Power' },
  { dial_id: 2, dial_name: 'Progressive' },
  { dial_id: 3, dial_name: 'Predictive' },
  { dial_id: 4, dial_name: 'System Preview' },
];

type Row = {
  no: number;
  campaignId: number;
  idName: string;
  startDate: string;
  endDate: string;
  skill: string;
  dialMode: string;
  callingNumber: string;
};

type Column = GridColumn<Row>;

// columns 정의 (Grid에 표시될 열들)
const columns: Column[] = [
  { 
    key: "no", 
    name: "NO.", 
    width: 60,
    resizable: true 
  },
  { 
    key: "idName", 
    name: "아이디+이름", 
    width: 180,
    resizable: true 
  },
  { 
    key: "startDate", 
    name: "시작일자", 
    width: 120,
    resizable: true 
  },
  { 
    key: "endDate", 
    name: "종료일자", 
    width: 120,
    resizable: true 
  },
  { 
    key: "skill", 
    name: "스킬", 
    width: 100,
    resizable: true 
  },
  { 
    key: "dialMode", 
    name: "다이얼모드", 
    width: 150,
    resizable: true 
  },
  { 
    key: "callingNumber", 
    name: "발신번호", 
    width: 150,
    resizable: true 
  },
];

type Props = {
  campaignId?: string;
  campaignHeaderSearchParam?: CampaignHeaderSearch;
  onRowClick?: (campaignId: string) => void; // 추가된 속성
};

export default function CampaignManagerList({ campaignId, campaignHeaderSearchParam, onRowClick }: Props) {
  const [viewMode, setViewMode] = useState<string>(campaignId ? "single" : "full");

  // campaignId 값에 따라 viewMode 설정
  useEffect(() => {
    setViewMode(campaignId ? "single" : "full");
  }, []);

  useEffect(() => {
    if (campaignId) {
      // alert("캠페인 ID " + campaignId + "로 캠페인 상세 조회를 시작합니다.");
      setViewMode("single");
    } else {
      setViewMode("full");
    }
  }, [campaignId]);

  const campaignIdNumber = campaignId ? Number(campaignId) : undefined;

  // API hooks
  const campaignByIdQuery = useApiForGetCampaignById(campaignIdNumber ?? 0, {
    enabled: viewMode === "single" && !!campaignIdNumber,
  });
  const campaignListQuery = useApiForGetCampaignList();

  const { data: campaignListResponse, isLoading, error } =
    viewMode === "single" ? campaignByIdQuery : campaignListQuery;

  const { 
    setSelectedCampaign, 
    selectedCampaignRow, 
    setSelectedCampaignRow 
  } = useMainStore();

  const { setCampaignIdForUpdateFromSideMenu } = useTabStore();
  const { schedules, callingNumbers, campaignSkills } = useCampainManagerStore();

  const [filteredCampaigns, setFilteredCampaigns] = useState<CampaignListDataResponse[]>([]);
  const [tempData, setTempData] = useState<Row[]>([]);

  // campaignListResponse를 처리하여 filteredCampaigns 업데이트
  useEffect(() => {
    if (!campaignListResponse?.result_data) {
      setFilteredCampaigns([]);
      return;
    }

    if (viewMode === 'single') {
      if (Array.isArray(campaignListResponse.result_data)) {
        setFilteredCampaigns(campaignListResponse.result_data);
      } else if (campaignListResponse.result_data) {
        setFilteredCampaigns([campaignListResponse.result_data as CampaignListDataResponse]);
      } else {
        setFilteredCampaigns([]);
      }
    } else {
      // full view mode: search 파라미터 적용
      let _filteredCampaigns = [...campaignListResponse.result_data];

      if (campaignHeaderSearchParam) {
        if (campaignHeaderSearchParam.tenantId > -1) {
          _filteredCampaigns = _filteredCampaigns.filter(
            (campaign) => campaign.tenant_id === Number(campaignHeaderSearchParam.tenantId)
          );
        }

        if (campaignHeaderSearchParam.dailMode > 0) {
          _filteredCampaigns = _filteredCampaigns.filter(
            (campaign) => campaign.dial_mode === Number(campaignHeaderSearchParam.dailMode)
          );
        }

        if (campaignHeaderSearchParam.campaignName !== '') {
          _filteredCampaigns = _filteredCampaigns.filter(
            (campaign) => campaign.campaign_name.includes(campaignHeaderSearchParam.campaignName)
          );
        }

        if (campaignHeaderSearchParam.callNumber !== '') {
          const filteredCallingNumbers = callingNumbers.filter(
            (callingNumber) => callingNumber.calling_number.includes(campaignHeaderSearchParam.callNumber)
          );
          _filteredCampaigns = _filteredCampaigns.filter(
            (campaign) => filteredCallingNumbers.some(
              (callingNumber) => callingNumber.campaign_id === campaign.campaign_id
            )
          );
        }

        if (campaignHeaderSearchParam.skill > 0) {
          const filteredCampaignSkills = campaignSkills.filter(
            (campaignSkill) => campaignSkill.skill_id.includes(campaignHeaderSearchParam.skill)
          );
          _filteredCampaigns = _filteredCampaigns.filter(
            (campaign) => filteredCampaignSkills.some(
              (campaignSkill) => campaignSkill.campaign_id === campaign.campaign_id
            )
          );
        }
      }

      setFilteredCampaigns(_filteredCampaigns);
    }
  }, [
    campaignListResponse, 
    viewMode, 
    campaignHeaderSearchParam, 
    callingNumbers, 
    campaignSkills
  ]);

  // filteredCampaigns를 grid 데이터 형식(Row)로 변환
  useEffect(() => {
    if (filteredCampaigns.length === 0) {
      setTempData([]);
      setSelectedCampaign(null);
      setSelectedCampaignRow(null);
      return;
    }

    const newTempData: Row[] = filteredCampaigns.map((campaign, index) => ({
      no: index + 1,
      campaignId: campaign.campaign_id,
      idName: `[${campaign.campaign_id}]${campaign.campaign_name}`,
      startDate: schedules
        .filter((schedule) => schedule.campaign_id === campaign.campaign_id)
        .map((data) => data.start_date && data.start_date.length === 8 
          ? `${data.start_date.substring(0,4)}-${data.start_date.substring(4,6)}-${data.start_date.substring(6,8)}`
          : '')
        .join(','),
      endDate: schedules
        .filter((schedule) => schedule.campaign_id === campaign.campaign_id)
        .map((data) => data.end_date && data.end_date.length === 8 
          ? `${data.end_date.substring(0,4)}-${data.end_date.substring(4,6)}-${data.end_date.substring(6,8)}`
          : '')
        .join(','),
      skill: campaignSkills
        .filter((skill) => skill.campaign_id === campaign.campaign_id)
        .map((data) => data.skill_id)
        .join(','),
      dialMode: dialModeList
        .filter((dialMode) => dialMode.dial_id === campaign.dial_mode)
        .map((data) => data.dial_name)
        .join(','),
      callingNumber: callingNumbers
        .filter((callingNumber) => callingNumber.campaign_id === campaign.campaign_id)
        .map((data) => data.calling_number)
        .join(',')
    }));

    setTempData(newTempData);
  }, [filteredCampaigns, schedules, campaignSkills, callingNumbers]);

  // 자동 선택: 목록에 행이 있고 선택된 행이 없으면 첫 번째 행을 선택
  useEffect(() => {
    if (tempData.length === 0) return;
    
    const currentSelectedRowExists = selectedCampaignRow && 
      tempData.some(item => item.campaignId === selectedCampaignRow.campaignId);
    
    if (!currentSelectedRowExists && filteredCampaigns.length > 0) {
      const firstCampaignData = filteredCampaigns[0];
      if (firstCampaignData) {
        setSelectedCampaign(firstCampaignData as any);
        setSelectedCampaignRow(tempData[0]);
      }
    }
  }, [tempData, selectedCampaignRow, filteredCampaigns]);

  // 셀 클릭 시 호출 - 클릭한 행의 캠페인 데이터를 선택 상태로 업데이트하고, onRowClick이 있다면 호출
  const handleCellClick = useCallback(({ row }: CellClickArgs<Row>) => {
    const clickedCampaign = filteredCampaigns.find(
      campaign => campaign.campaign_id === row.campaignId
    );

    if (clickedCampaign) {
      setSelectedCampaign(clickedCampaign as any);
      setSelectedCampaignRow(row);
      if (onRowClick) {
        onRowClick(row.campaignId.toString());
      }
    }
  }, [filteredCampaigns, setSelectedCampaign, setSelectedCampaignRow, onRowClick]);

  const getCampaignRowClass = useCallback((row: Row) => {
    return selectedCampaignRow?.campaignId === row.campaignId ? 'bg-[#FFFAEE]' : '';
  }, [selectedCampaignRow]);

  if (isLoading) {
    return <div className="w-[40%] shrink-0 flex items-center justify-center h-[500px]">로딩 중...</div>;
  }

  if (error) {
    return (
      <div className="w-[40%] shrink-0 flex items-center justify-center h-[500px]">
        데이터를 불러오는 중 오류가 발생했습니다: {error.message}
      </div>
    );
  }

  const selectedRowKeys = selectedCampaignRow ? new Set<number>([selectedCampaignRow.campaignId]) : new Set<number>();

  return (
    <div className="w-[40%] shrink-0">
      <div className="flex items-center justify-between mb-2">
        <TitleWrap title="캠페인 목록" totalCount={filteredCampaigns?.length || 0} />
        {viewMode === 'single' && (
          <Button 
            onClick={() => setViewMode('full')} 
            className="ml-2"
          >
            ☰ 전체
          </Button>
        )}
      </div>
      <div className="overflow-x-auto">
        <div className="grid-custom-wrap h-[500px]"> 
          <DataGrid 
            columns={columns} 
            rows={tempData} 
            className="grid-custom text-align-left rdg-light"
            rowHeight={30}
            rowClass={getCampaignRowClass}
            headerRowHeight={30}
            onCellClick={handleCellClick}
            rowKeyGetter={(row) => row.campaignId}
            selectedRows={selectedRowKeys}
          />
        </div>
      </div>
    </div>
  );
}
