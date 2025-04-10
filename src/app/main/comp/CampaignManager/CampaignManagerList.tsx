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

// src/features/campaignManager/CampaignManagerList.tsx
'use client';
import { useEffect, useState } from 'react';
import DataGrid, { CellClickArgs, Column as GridColumn } from "react-data-grid"; // Import Column type from the library
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

// react-data-grid의 Column 타입을 사용하고 resizable 속성을 추가
type Column = GridColumn<Row>; // Use the imported Column type

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

// 컬럼 정의 수정: resizable: true 추가 및 적절한 기본 width 설정
const columns: Column[] = [
  { 
    key: "no", 
    name: "NO.", 
    width: 60,       // 약간 늘림
    resizable: true 
  },
  { 
    key: "idName", 
    name: "아이디+이름", 
    width: 180,      // 기본 너비 설정
    resizable: true 
  },
  { 
    key: "startDate", 
    name: "시작일자", 
    width: 120,      // 날짜 형식에 맞게 설정
    resizable: true 
  },
  { 
    key: "endDate", 
    name: "종료일자", 
    width: 120,      // 날짜 형식에 맞게 설정
    resizable: true 
  },
  { 
    key: "skill", 
    name: "스킬", 
    width: 100,      // 여러 스킬 가능성을 고려해 늘림
    resizable: true 
  },
  { 
    key: "dialMode", 
    name: "다이얼모드", 
    width: 150,      // 가장 긴 'System Preview'에 맞게 설정
    resizable: true 
  },
  { 
    key: "callingNumber", 
    name: "발신번호", 
    width: 150,      // 전화번호 길이를 고려하여 설정
    resizable: true 
  },
];

type Props = {
  campaignId?: string;
  campaignHeaderSearchParam?: CampaignHeaderSearch;
}

export default function CampaignManagerList({ campaignId, campaignHeaderSearchParam }: Props) {
  // campaignId prop에 따라 viewMode 상태 업데이트 ('single' 또는 'full')
  const [viewMode, setViewMode] = useState<string>(campaignId ? "single" : "full");

  // campaignId prop 변경 시 viewMode 갱신
  useEffect(() => {
    if (campaignId && campaignId !== '') {
      setViewMode("single");
    } else {
      setViewMode("full");
    }
  }, [campaignId]);

  const campaignIdNumber = campaignId ? Number(campaignId) : undefined;

  // 두 API 훅을 모두 호출하고, viewMode에 따라 결과를 선택합니다.
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
  const [tempData, setTempData] = useState<Row[]>([]); // Row 타입으로 변경

  // 캠페인 필터링: viewMode가 'single'이면 campaignId로 필터링, 아니면 전체 목록 사용
  useEffect(() => {
    if (campaignListResponse?.result_data) {
      if (viewMode === 'single' && campaignId && campaignId !== '') {
        // 단일 뷰 모드에서는 campaignId로 필터링하지 않고, API 호출 결과를 그대로 사용
        // useApiForGetCampaignById 훅이 이미 ID로 데이터를 가져오므로 추가 필터링 불필요
        // 만약 ID로 가져온 데이터가 배열 형태가 아니라 단일 객체 형태라면 배열로 감싸줘야 할 수 있음
        // (API 응답 구조에 따라 조정 필요)
        if (Array.isArray(campaignListResponse.result_data)) {
            setFilteredCampaigns(campaignListResponse.result_data);
        } else if (campaignListResponse.result_data) {
            // 응답이 단일 객체인 경우 배열로 변환
            setFilteredCampaigns([campaignListResponse.result_data as CampaignListDataResponse]);
        } else {
            setFilteredCampaigns([]);
        }
      } else {
        // 전체 뷰 모드에서는 전체 목록 사용
        setFilteredCampaigns(campaignListResponse.result_data);
      }
    } else {
        setFilteredCampaigns([]); // 데이터가 없으면 빈 배열로 초기화
    }
  }, [campaignListResponse, campaignId, viewMode]); // campaignId, viewMode 의존성 추가


  // 검색 필터 적용 (전체 목록 모드에서만 적용)
  useEffect(() => {
    // viewMode가 'full'일 때만 검색 필터를 적용합니다.
    // campaignListResponse가 변경될 때 마다 초기화된 전체 목록에서 시작합니다.
    if (viewMode === 'full' && campaignListResponse?.result_data) {
        let _filteredCampaigns = [...campaignListResponse.result_data]; // 원본 복사

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
                    (campaignSkill) => campaignSkill.skill_id.includes(campaignHeaderSearchParam.skill) // skill_id가 문자열 배열일 수 있으므로 String으로 변환
                );
                _filteredCampaigns = _filteredCampaigns.filter(
                    (campaign) => filteredCampaignSkills.some(
                        (campaignSkill) => campaignSkill.campaign_id === campaign.campaign_id
                    )
                );
            }
        }

        setFilteredCampaigns(_filteredCampaigns); // 필터링된 결과로 상태 업데이트
    } else if (viewMode === 'single') {
        // 단일 뷰 모드에서는 검색 필터를 적용하지 않고,
        // 위쪽 useEffect에서 설정된 캠페인 ID에 해당하는 데이터만 유지합니다.
        // (이미 campaignByIdQuery 결과가 filteredCampaigns에 설정되어 있음)
    } else {
        // 데이터 로딩 중이거나 오류 발생 시
        setFilteredCampaigns([]);
    }
}, [campaignHeaderSearchParam, campaignListResponse, callingNumbers, campaignSkills, viewMode]); // campaignHeaderSearchParam 의존성 추가


  // 필터링된 캠페인을 그리드 데이터로 변환
  useEffect(() => {
    if (filteredCampaigns.length > 0) {
      const newTempData: Row[] = filteredCampaigns.map((campaign, index) => ({ // Row 타입으로 변경
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
          .join(','), // 어차피 하나일 것이므로 join 필요 없을 수 있음
        callingNumber: callingNumbers
          .filter((callingNumber) => callingNumber.campaign_id === campaign.campaign_id)
          .map((data) => data.calling_number)
          .join(',')
      }));

      setTempData(newTempData);

      // 첫 번째 행 자동 선택 로직 (선택된 행이 없거나, 현재 목록에 없을 경우)
      if (newTempData.length > 0) {
          const currentSelectedRowExists = selectedCampaignRow && newTempData.some(item => item.campaignId === selectedCampaignRow.campaignId);
          if (!currentSelectedRowExists) {
              const firstCampaignData = filteredCampaigns[0];
              if (firstCampaignData) {
                setSelectedCampaign(firstCampaignData as any); // 타입 단언 주의
                setSelectedCampaignRow(newTempData[0]);
              }
          }
      } else {
          // 목록이 비워졌을 때 선택 해제
          setSelectedCampaign(null);
          setSelectedCampaignRow(null);
      }

    } else {
      setTempData([]);
      // 필터링 결과가 없을 때 선택 해제
      setSelectedCampaign(null);
      setSelectedCampaignRow(null);
    }
    // selectedCampaignRow, setSelectedCampaign, setSelectedCampaignRow는 의존성 배열에서 제거하는 것을 고려해볼 수 있습니다.
    // 자동 선택 로직이 다른 상태 변화에 의해 불필요하게 재실행되는 것을 방지하기 위함입니다.
    // 단, 이들의 변경이 실제로 데이터 변환에 영향을 미쳐야 한다면 유지해야 합니다.
  }, [filteredCampaigns, schedules, campaignSkills, callingNumbers]); // 의존성 배열 검토

  const handleCellClick = ({ row }: CellClickArgs<Row>) => {
    // 클릭된 행(row)에 해당하는 원본 캠페인 데이터를 찾습니다.
    // filteredCampaigns는 이미 필터링된 상태이므로 여기서 찾습니다.
    const clickedCampaign = filteredCampaigns.find(
      campaign => campaign.campaign_id === row.campaignId
    );

    if (clickedCampaign) {
      setSelectedCampaign(clickedCampaign as any); // 타입 단언 주의
      setSelectedCampaignRow(row); // 클릭된 그리드 행 데이터로 업데이트
    }
  };

  const getCampaignRowClass = (row: Row) => { // Row 타입 사용
    // selectedCampaignRow가 null일 수 있으므로 optional chaining 사용
    return selectedCampaignRow?.campaignId === row.campaignId ? 'bg-[#FFFAEE]' : '';
  };

  // 로딩 및 오류 처리
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

  // selectedRows prop 타입 수정: Set<React.Key> 또는 Set<number> (rowKeyGetter 사용 여부에 따라)
  // campaignId가 숫자이므로 Set<number> 사용
  const selectedRowKeys = selectedCampaignRow ? new Set<number>([selectedCampaignRow.campaignId]) : new Set<number>();


  return (
    <div className="w-[40%] shrink-0">
      <div className="flex items-center justify-between mb-2"> {/* mb-2 추가 */}
        <TitleWrap title="캠페인 목록" totalCount={filteredCampaigns?.length || 0} />
        {/* 전체 보기 버튼은 단일 모드일 때만 표시 */}
        {viewMode === 'single' && (
          <Button 
            onClick={() => {
              setViewMode('full');
              // 전체 보기로 전환 시, campaignId prop의 영향을 받지 않도록
              // 부모 컴포넌트 상태나 라우팅 변경이 필요할 수 있음 (여기서는 viewMode만 변경)
            }} 
            className="ml-2" // mb-2 제거하고 부모 div에 적용
          >
            ☰ 전체
          </Button>
        )}
      </div>
      <div className="overflow-x-auto">
        {/* 데이터 그리드 높이 고정 및 스크롤 적용 */}
        <div className="grid-custom-wrap h-[500px]"> 
          <DataGrid 
            columns={columns} 
            rows={tempData} 
            className="grid-custom text-align-left rdg-light" // 기본 테마 또는 커스텀 클래스 지정
            rowHeight={30}
            rowClass={getCampaignRowClass} // 행 클래스 적용 함수
            headerRowHeight={30}
            onCellClick={handleCellClick} // 셀 클릭 이벤트 핸들러
            rowKeyGetter={(row) => row.campaignId} // 행의 고유 키 지정 (선택 기능에 중요)
            selectedRows={selectedRowKeys} // 선택된 행의 키 Set 전달
            // onSelectedRowsChange={(selected) => { // 선택 변경 시 처리 (필요하다면)
            //   const selectedId = Array.from(selected)[0];
            //   const selectedRowData = tempData.find(row => row.campaignId === selectedId);
            //   if (selectedRowData) {
            //     handleCellClick({ row: selectedRowData, column: columns[0], rowIdx: tempData.indexOf(selectedRowData) }); // 예시: 첫번째 컬럼 정보 전달
            //   }
            // }}
          />
        </div>
      </div>
    </div>
  );
}
