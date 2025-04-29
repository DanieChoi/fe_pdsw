// src/features/campaignManager/CampaignManagerList.tsx
'use client';
import { useEffect, useState, useCallback, useRef } from 'react';
import DataGrid, { CellClickArgs, Column as GridColumn } from "react-data-grid";
import 'react-data-grid/lib/styles.css';
import TitleWrap from "@/components/shared/TitleWrap";
import { useMainStore, useCampainManagerStore, useTabStore } from '@/store';
import { CampaignHeaderSearch } from './CampaignManagerHeader';
import { CampaignListDataResponse } from '@/features/campaignManager/types/typeForCampaignForSideBar';
import { useSideMenuCampaignGroupTabStore } from '@/store/storeForSideMenuCampaignGroupTab';

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
  const { campaigns, setSelectedCampaign, selectedCampaignRow, setSelectedCampaignRow } = useMainStore();
  // const { campaignIdForUpdateFromSideMenu, setCampaignIdForUpdateFromSideMenu } = useTabStore();
  const campaignIdForUpdateFromSideMenu = useTabStore(state => state.campaignIdForUpdateFromSideMenu);
  const setCampaignIdForUpdateFromSideMenu = useTabStore(state => state.setCampaignIdForUpdateFromSideMenu);

  const { schedules, callingNumbers, campaignSkills } = useCampainManagerStore();
  const { setSelectedNodeId, selectedNodeId } = useSideMenuCampaignGroupTabStore();

  const [filteredCampaigns, setFilteredCampaigns] = useState<CampaignListDataResponse[]>([]);
  const [tempData, setTempData] = useState<Row[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);


  // campaignListResponse를 처리하여 filteredCampaigns 업데이트
  useEffect(() => {
    let _filteredCampaigns = campaigns;
    setFilteredCampaigns([]);
    if (typeof campaignHeaderSearchParam != 'undefined') {
      // full view mode: search 파라미터 적용
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
    }
    setFilteredCampaigns(_filteredCampaigns);
  }, [campaignHeaderSearchParam, campaigns]);

  // 셀 클릭 시 호출 - 클릭한 행의 캠페인 데이터를 선택 상태로 업데이트하고, onRowClick이 있다면 호출
  const handleCellClick = useCallback(({ row }: CellClickArgs<Row>) => {
    const clickedCampaign = filteredCampaigns.find(
      campaign => campaign.campaign_id === row.campaignId
    );

    if (clickedCampaign) {
      setSelectedCampaign(clickedCampaign as any);
      setSelectedCampaignRow(row);
      setSelectedNodeId(clickedCampaign.campaign_id.toString());

      setCampaignIdForUpdateFromSideMenu(clickedCampaign.campaign_id.toString());
      if (onRowClick) {
        onRowClick(row.campaignId.toString());
      }
    }

    setCampaignIdForUpdateFromSideMenu(row.campaignId.toString());

  }, [filteredCampaigns, setSelectedCampaign, setSelectedCampaignRow, onRowClick]);

  // filteredCampaigns를 grid 데이터 형식(Row)로 변환
  useEffect(() => {
    if (filteredCampaigns.length > 0) {
      const newTempData: Row[] = filteredCampaigns.map((campaign, index) => ({
        no: index + 1,
        campaignId: campaign.campaign_id,
        idName: `[${campaign.campaign_id}]${campaign.campaign_name}`,
        startDate: schedules
          .filter((schedule) => schedule.campaign_id === campaign.campaign_id)
          .map((data) => data.start_date && data.start_date.length === 8
            ? `${data.start_date.substring(0, 4)}-${data.start_date.substring(4, 6)}-${data.start_date.substring(6, 8)}`
            : '')
          .join(','),
        endDate: schedules
          .filter((schedule) => schedule.campaign_id === campaign.campaign_id)
          .map((data) => data.end_date && data.end_date.length === 8
            ? `${data.end_date.substring(0, 4)}-${data.end_date.substring(4, 6)}-${data.end_date.substring(6, 8)}`
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
    } else {
      setTempData([]);
      setSelectedCampaign(null);
      setSelectedCampaignRow(null);
    }

  }, [filteredCampaigns, schedules, campaignSkills, callingNumbers]);

  // 자동 선택: 목록에 행이 있고 선택된 행이 없으면 첫 번째 행을 선택
  useEffect(() => {
    if (tempData.length > 0 && filteredCampaigns.length > 0 && campaignId != '') {
      const selectedCampaign = campaigns.find(c => c.campaign_id === Number(campaignId));
      const filterCampaign = filteredCampaigns.find(c => c.campaign_id === Number(campaignId));
      const index = tempData.findIndex(d => d.campaignId === Number(campaignId));

      if (selectedCampaign && index !== -1 && typeof filterCampaign !== 'undefined') {
        setSelectedCampaign(selectedCampaign ?? null);
        setSelectedCampaignRow(tempData[index]);
      } else {
        const selectedCampaign = campaigns.find(c => c.campaign_id === filteredCampaigns[0].campaign_id);
        setSelectedCampaign(selectedCampaign ?? null);
        setSelectedCampaignRow(tempData.filter(data => data.campaignId === filteredCampaigns[0].campaign_id)[0]);
        setCampaignIdForUpdateFromSideMenu(filteredCampaigns[0].campaign_id.toString());
        if (onRowClick) {
          onRowClick(filteredCampaigns[0].campaign_id.toString());
        }
      }
    } else if (tempData.length > 0 && filteredCampaigns.length > 0) {
      const selectedCampaign = campaigns.find(c => c.campaign_id === tempData[0].campaignId);
      setSelectedCampaign(selectedCampaign ?? null);
      setSelectedCampaignRow(tempData[0]);
      setCampaignIdForUpdateFromSideMenu(filteredCampaigns[0].campaign_id.toString());
      if (onRowClick) {
        onRowClick(tempData[0].campaignId.toString());
      }
    }

  }, [tempData, filteredCampaigns, campaignId]);

  const getCampaignRowClass = useCallback((row: Row) => {
    return selectedCampaignRow?.campaignId === row.campaignId ? 'bg-[#FFFAEE]' : '';
  }, [selectedCampaignRow]);

  // 0421 양방향 캠페인 선택 매핑
  // campaignIdForUpdateFromSideMenu 변경 시 스크롤 위치 조정
  useEffect(() => {
    if (campaignIdForUpdateFromSideMenu && tempData.length > 0 && gridRef.current) {
      const targetCampaignId = Number(campaignIdForUpdateFromSideMenu);
      const selectedRow = tempData.find(row => row.campaignId === targetCampaignId);
      const selectedCampaign = campaigns.find(c => c.campaign_id === targetCampaignId);

      if (selectedRow && selectedCampaign) {
        setSelectedCampaignRow(selectedRow);
        setSelectedCampaign(selectedCampaign);
        setSelectedNodeId(selectedCampaign.campaign_id.toString());

        // 선택된 행이 어디 있는지 찾기
        const rowIndex = tempData.findIndex(row => row.campaignId === targetCampaignId);

        // 스크롤 조정 (다음 렌더링 사이클에서 실행하기 위해 setTimeout 사용)
        if (rowIndex !== -1) {
          setTimeout(() => {
            // null 체크 한번 더 (setTimeout 내부에서)
            if (!gridRef.current) return;

            // 행 높이와 헤더 높이를 고려하여 스크롤 위치 계산
            const rowHeight = 30; // 행 높이
            const scrollTop = rowIndex * rowHeight;

            // 그리드 컨테이너의 실제 DOM 엘리먼트 찾기
            const gridContainer = gridRef.current.querySelector('.rdg');
            if (gridContainer) {
              // 뷰포트 중앙에 행이 오도록 스크롤 조정
              const containerHeight = gridContainer.clientHeight;
              const scrollPosition = scrollTop - (containerHeight / 2) + rowHeight;

              // 스크롤 적용
              gridContainer.scrollTop = Math.max(0, scrollPosition);
            }
          }, 0);
        }
      }
    }
  }, [campaignIdForUpdateFromSideMenu, tempData, campaigns, setSelectedCampaignRow, setSelectedCampaign, selectedNodeId]);

  const selectedRowKeys = selectedCampaignRow ? new Set<number>([selectedCampaignRow.campaignId]) : new Set<number>();

  return (
    <div className="w-[40%] shrink-0">
      {/* campaignIdForUpdateFromSideMenu :{campaignIdForUpdateFromSideMenu} */}
      <div className="flex items-center justify-between mb-2">
        <TitleWrap title="캠페인 목록" totalCount={filteredCampaigns?.length || 0} />
        {/* {viewMode === 'single' && (
          <Button 
            onClick={() => setViewMode('full')} 
            className="ml-2"
          >
            ☰ 전체
          </Button>
        )} */}
      </div>
      <div className="overflow-x-auto">
        <div className="grid-custom-wrap h-[500px]" ref={gridRef}>
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
