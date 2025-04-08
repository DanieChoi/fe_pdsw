// // src/features/campaignManager/CampaignManagerList.tsx
// 'use client';
// import { useEffect, useState } from 'react';
// import DataGrid, { CellClickArgs } from "react-data-grid";
// import 'react-data-grid/lib/styles.css';
// import TitleWrap from "@/components/shared/TitleWrap";
// import { Button } from "@/components/ui/button";
// import { useMainStore, useCampainManagerStore, useTabStore, DataProps } from '@/store';
// import { CampaignHeaderSearch } from './CampaignManagerHeader';
// import { CampaignListDataResponse } from '@/features/campaignManager/types/typeForCampaignForSideBar';
// import { useApiForGetCampaignList } from '@/features/auth/hooks/useApiForGetCampaignList';
// import { useApiForGetCampaignById } from '@/features/auth/hooks/useApiForGetCampaignById';

// const dialModeList = [
//   { dial_id: 1, dial_name: 'Power' },
//   { dial_id: 2, dial_name: 'Progressive' },
//   { dial_id: 3, dial_name: 'Predictive' },
//   { dial_id: 4, dial_name: 'System Preview' },
// ];

// type Column = {
//   key: string;
//   name: string;
//   width?: number;
// };

// type Row = {
//   no: number;
//   campaignId: number;
//   idName: string;
//   startDate: string;
//   endDate: string;
//   skill: string;
//   dialMode: string;
//   callingNumber: string;
// };

// const columns: Column[] = [
//   { key: "no", name: "NO.", width: 50 },
//   { key: "idName", name: "아이디+이름" },
//   { key: "startDate", name: "시작일자" },
//   { key: "endDate", name: "종료일자" },
//   { key: "skill", name: "스킬", width: 50 },
//   { key: "dialMode", name: "다이얼모드" },
//   { key: "callingNumber", name: "발신번호" },
// ];

// type Props = {
//   campaignId?: string;
//   campaignHeaderSearchParam?: CampaignHeaderSearch;
// }

// export default function CampaignManagerList({ campaignId, campaignHeaderSearchParam }: Props) {
//   // campaignId prop에 따라 viewMode 상태 업데이트 ('single' 또는 'full')
//   const [viewMode, setViewMode] = useState<string>(campaignId ? "single" : "full");

//   // campaignId prop 변경 시 viewMode 갱신
//   useEffect(() => {
//     if (campaignId && campaignId !== '') {
//       setViewMode("single");
//     } else {
//       setViewMode("full");
//     }
//   }, [campaignId]);

//   const campaignIdNumber = campaignId ? Number(campaignId) : undefined;

//   // 두 API 훅을 모두 호출하고, viewMode에 따라 결과를 선택합니다.
//   const campaignByIdQuery = useApiForGetCampaignById(campaignIdNumber ?? 0, {
//     enabled: viewMode === "single" && !!campaignIdNumber,
//   });
//   const campaignListQuery = useApiForGetCampaignList();

//   const { data: campaignListResponse, isLoading, error } =
//     viewMode === "single" ? campaignByIdQuery : campaignListQuery;

//   const { 
//     setSelectedCampaign, 
//     selectedCampaignRow, 
//     setSelectedCampaignRow 
//   } = useMainStore();

//   const { setCampaignIdForUpdateFromSideMenu } = useTabStore();
//   const { schedules, callingNumbers, campaignSkills } = useCampainManagerStore();

//   const [filteredCampaigns, setFilteredCampaigns] = useState<CampaignListDataResponse[]>([]);
//   const [tempData, setTempData] = useState<DataProps[]>([]);

//   // 캠페인 필터링: viewMode가 'single'이면 campaignId로 필터링, 아니면 전체 목록 사용
//   useEffect(() => {
//     if (campaignListResponse?.result_data) {
//       if (viewMode === 'single' && campaignId && campaignId !== '') {
//         const tempList = campaignListResponse.result_data.filter(
//           (campaign) => campaign.campaign_id === Number(campaignId)
//         );
//         if (tempList.length > 0) {
//           setFilteredCampaigns(tempList);
//         } else {
//           setFilteredCampaigns(campaignListResponse.result_data);
//         }
//       } else {
//         setFilteredCampaigns(campaignListResponse.result_data);
//       }
//     }
//   }, [campaignListResponse, campaignId, viewMode]);

//   // 검색 필터 적용 (전체 목록 모드에서만 적용)
//   useEffect(() => {
//     if (campaignHeaderSearchParam && viewMode === 'full' && campaignListResponse?.result_data) {
//       let _filteredCampaigns = campaignListResponse.result_data;

//       if (campaignHeaderSearchParam.tenantId > -1) {
//         _filteredCampaigns = _filteredCampaigns.filter(
//           (campaign) => campaign.tenant_id === Number(campaignHeaderSearchParam.tenantId)
//         );
//       }

//       if (campaignHeaderSearchParam.dailMode > 0) {
//         _filteredCampaigns = _filteredCampaigns.filter(
//           (campaign) => campaign.dial_mode === Number(campaignHeaderSearchParam.dailMode)
//         );
//       }

//       if (campaignHeaderSearchParam.campaignName !== '') {
//         _filteredCampaigns = _filteredCampaigns.filter(
//           (campaign) => campaign.campaign_name.includes(campaignHeaderSearchParam.campaignName)
//         );
//       }

//       if (campaignHeaderSearchParam.callNumber !== '') {
//         const filteredCallingNumbers = callingNumbers.filter(
//           (callingNumber) => callingNumber.calling_number.includes(campaignHeaderSearchParam.callNumber)
//         );
//         _filteredCampaigns = _filteredCampaigns.filter(
//           (campaign) => filteredCallingNumbers.some(
//             (callingNumber) => callingNumber.campaign_id === campaign.campaign_id
//           )
//         );
//       }

//       if (campaignHeaderSearchParam.skill > 0) {
//         const filteredCampaignSkills = campaignSkills.filter(
//           (campaignSkill) => campaignSkill.skill_id.includes(campaignHeaderSearchParam.skill)
//         );
//         _filteredCampaigns = _filteredCampaigns.filter(
//           (campaign) => filteredCampaignSkills.some(
//             (campaignSkill) => campaignSkill.campaign_id === campaign.campaign_id
//           )
//         );
//       }

//       setFilteredCampaigns(_filteredCampaigns);
//     }
//   }, [campaignHeaderSearchParam, campaignListResponse, callingNumbers, campaignSkills, viewMode]);

//   // 필터링된 캠페인을 그리드 데이터로 변환
//   useEffect(() => {
//     if (filteredCampaigns.length > 0) {
//       const newTempData: DataProps[] = filteredCampaigns.map((campaign, index) => ({
//         no: index + 1,
//         campaignId: campaign.campaign_id,
//         idName: `[${campaign.campaign_id}]${campaign.campaign_name}`,
//         startDate: schedules
//           .filter((schedule) => schedule.campaign_id === campaign.campaign_id)
//           .map((data) => data.start_date.length === 8 
//             ? `${data.start_date.substring(0,4)}-${data.start_date.substring(4,6)}-${data.start_date.substring(6,8)}`
//             : '')
//           .join(','),
//         endDate: schedules
//           .filter((schedule) => schedule.campaign_id === campaign.campaign_id)
//           .map((data) => data.end_date.length === 8 
//             ? `${data.end_date.substring(0,4)}-${data.end_date.substring(4,6)}-${data.end_date.substring(6,8)}`
//             : '')
//           .join(','),
//         skill: campaignSkills
//           .filter((skill) => skill.campaign_id === campaign.campaign_id)
//           .map((data) => data.skill_id)
//           .join(','),
//         dialMode: dialModeList
//           .filter((dialMode) => dialMode.dial_id === campaign.dial_mode)
//           .map((data) => data.dial_name)
//           .join(','),
//         callingNumber: callingNumbers
//           .filter((callingNumber) => callingNumber.campaign_id === campaign.campaign_id)
//           .map((data) => data.calling_number)
//           .join(',')
//       }));

//       setTempData(newTempData);

//       if (newTempData.length > 0) {
//         if (!selectedCampaignRow || !newTempData.some(item => item.campaignId === selectedCampaignRow.campaignId)) {
//           setSelectedCampaign(filteredCampaigns[0] as any);
//           setSelectedCampaignRow(newTempData[0]);
//         }
//       }
//     } else {
//       setTempData([]);
//       // if (filteredCampaigns.length === 0 && campaignListResponse?.result_data && campaignListResponse.result_data.length > 0) {
//       //   setSelectedCampaign(null);
//       //   setSelectedCampaignRow(null);
//       // }
//     }
//   }, [filteredCampaigns, schedules, campaignSkills, callingNumbers, selectedCampaignRow, setSelectedCampaign, setSelectedCampaignRow, campaignListResponse]);

//   const handleCellClick = ({ row }: CellClickArgs<Row>) => {
//     const clickedCampaign = campaignListResponse?.result_data?.find(
//       campaign => campaign.campaign_id === row.campaignId
//     );

//     if (clickedCampaign) {
//       setSelectedCampaign(clickedCampaign as any);
//       setSelectedCampaignRow(row as DataProps);
//     }
//   };

//   const getCampaignRowClass = (row: DataProps) => {
//     return selectedCampaignRow?.campaignId === row.campaignId ? 'bg-[#FFFAEE]' : '';
//   };

//   if (isLoading) {
//     return <div className="w-[40%] shrink-0 flex items-center justify-center h-[500px]">로딩 중...</div>;
//   }

//   if (error) {
//     return (
//       <div className="w-[40%] shrink-0 flex items-center justify-center h-[500px]">
//         데이터를 불러오는 중 오류가 발생했습니다.
//       </div>
//     );
//   }

//   return (
//     <div className="w-[40%] shrink-0">
//       <div className="flex items-center justify-between">
//         <TitleWrap title="캠페인 목록" totalCount={filteredCampaigns?.length || 0} />
//         {viewMode === 'single' && (
//           <Button onClick={() => setViewMode('full')} className="ml-2 mb-2">
//             ☰ 전체
//           </Button>
//         )}
//       </div>
//       <div className="overflow-x-auto">
//         <div className="grid-custom-wrap h-[500px]">
//           <DataGrid 
//             columns={columns} 
//             rows={tempData} 
//             className="grid-custom text-align-left" 
//             rowHeight={30}
//             rowClass={getCampaignRowClass}
//             headerRowHeight={30}
//             onCellClick={handleCellClick}
//             selectedRows={selectedCampaignRow ? new Set<number>([selectedCampaignRow.campaignId]) : new Set<number>()}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import DataGrid, { CellClickArgs } from "react-data-grid";
import 'react-data-grid/lib/styles.css';
import TitleWrap from "@/components/shared/TitleWrap";
import { Button } from "@/components/ui/button";
import { useMainStore, useCampainManagerStore, useTabStore, DataProps } from '@/store';
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

type Column = {
  key: string;
  name: string;
  width?: number;
};

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

const columns: Column[] = [
  { key: "no", name: "NO.", width: 50 },
  { key: "idName", name: "아이디+이름" },
  { key: "startDate", name: "시작일자" },
  { key: "endDate", name: "종료일자" },
  { key: "skill", name: "스킬", width: 50 },
  { key: "dialMode", name: "다이얼모드" },
  { key: "callingNumber", name: "발신번호" },
];

type Props = {
  campaignId?: string;
  campaignHeaderSearchParam?: CampaignHeaderSearch;
}

export default function CampaignManagerList({ campaignId, campaignHeaderSearchParam }: Props) {
  const [viewMode, setViewMode] = useState<string>(campaignId ? "single" : "full");

  // 🔧 campaignHeaderSearchParam 들어오면 강제로 full 모드 전환
  useEffect(() => {
    if (campaignHeaderSearchParam) {
      setViewMode('full');
    } else if (campaignId && campaignId !== '') {
      setViewMode("single");
    } else {
      setViewMode("full");
    }
  }, [campaignHeaderSearchParam, campaignId]);

  const campaignIdNumber = campaignId ? Number(campaignId) : undefined;

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
  const [tempData, setTempData] = useState<DataProps[]>([]);

  useEffect(() => {
    if (campaignListResponse?.result_data) {
      if (viewMode === 'single' && campaignId && campaignId !== '') {
        const tempList = campaignListResponse.result_data.filter(
          (campaign) => campaign.campaign_id === Number(campaignId)
        );
        setFilteredCampaigns(tempList.length > 0 ? tempList : campaignListResponse.result_data);
      } else {
        setFilteredCampaigns(campaignListResponse.result_data);
      }
    }
  }, [campaignListResponse, campaignId, viewMode]);

  useEffect(() => {
    if (campaignHeaderSearchParam && viewMode === 'full' && campaignListResponse?.result_data) {
      let _filteredCampaigns = campaignListResponse.result_data;

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

      setFilteredCampaigns(_filteredCampaigns);

      // 🔧 검색 결과에 따라 선택 상태 초기화
      setSelectedCampaign(null);
      setSelectedCampaignRow(null);
    }
  }, [campaignHeaderSearchParam, campaignListResponse, callingNumbers, campaignSkills, viewMode]);

  useEffect(() => {
    if (filteredCampaigns.length > 0) {
      const newTempData: DataProps[] = filteredCampaigns.map((campaign, index) => ({
        no: index + 1,
        campaignId: campaign.campaign_id,
        idName: `[${campaign.campaign_id}]${campaign.campaign_name}`,
        startDate: schedules
          .filter((schedule) => schedule.campaign_id === campaign.campaign_id)
          .map((data) => data.start_date.length === 8
            ? `${data.start_date.substring(0, 4)}-${data.start_date.substring(4, 6)}-${data.start_date.substring(6, 8)}`
            : '')
          .join(','),
        endDate: schedules
          .filter((schedule) => schedule.campaign_id === campaign.campaign_id)
          .map((data) => data.end_date.length === 8
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

      if (newTempData.length > 0) {
        if (!selectedCampaignRow || !newTempData.some(item => item.campaignId === selectedCampaignRow.campaignId)) {
          setSelectedCampaign(filteredCampaigns[0] as any);
          setSelectedCampaignRow(newTempData[0]);
        }
      }
    } else {
      setTempData([]);
    }
  }, [filteredCampaigns, schedules, campaignSkills, callingNumbers, selectedCampaignRow, setSelectedCampaign, setSelectedCampaignRow]);

  const handleCellClick = ({ row }: CellClickArgs<Row>) => {
    const clickedCampaign = campaignListResponse?.result_data?.find(
      campaign => campaign.campaign_id === row.campaignId
    );

    if (clickedCampaign) {
      setSelectedCampaign(clickedCampaign as any);
      setSelectedCampaignRow(row as DataProps);
    }
  };

  const getCampaignRowClass = (row: DataProps) => {
    return selectedCampaignRow?.campaignId === row.campaignId ? 'bg-[#FFFAEE]' : '';
  };

  if (isLoading) {
    return <div className="w-[40%] shrink-0 flex items-center justify-center h-[500px]">로딩 중...</div>;
  }

  if (error) {
    return (
      <div className="w-[40%] shrink-0 flex items-center justify-center h-[500px]">
        데이터를 불러오는 중 오류가 발생했습니다.
      </div>
    );
  }

  return (
    <div className="w-[40%] shrink-0">
      <div className="flex items-center justify-between">
        <TitleWrap title="캠페인 목록" totalCount={filteredCampaigns?.length || 0} />
        {viewMode === 'single' && (
          <Button onClick={() => setViewMode('full')} className="ml-2 mb-2">
            ☰ 전체
          </Button>
        )}
      </div>
      <div className="overflow-x-auto">
        <div className="grid-custom-wrap h-[500px]">
          <DataGrid
            columns={columns}
            rows={tempData}
            className="grid-custom text-align-left"
            rowHeight={30}
            rowClass={getCampaignRowClass}
            headerRowHeight={30}
            onCellClick={handleCellClick}
            selectedRows={selectedCampaignRow ? new Set<number>([selectedCampaignRow.campaignId]) : new Set<number>()}
          />
        </div>
      </div>
    </div>
  );
}
