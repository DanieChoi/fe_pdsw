// // src/features/campaignManager/CampaignManagerList.tsx
// 'use client';
// import { useEffect, useState, useCallback } from 'react';
// import DataGrid, { CellClickArgs, Column as GridColumn } from "react-data-grid";
// import 'react-data-grid/lib/styles.css';
// import TitleWrap from "@/components/shared/TitleWrap";
// import { useMainStore, useCampainManagerStore, useTabStore } from '@/store';
// import { CampaignHeaderSearch } from './CampaignManagerHeader';
// import { CampaignListDataResponse } from '@/features/campaignManager/types/typeForCampaignForSideBar';

// const dialModeList = [
//   { dial_id: 1, dial_name: 'Power' },
//   { dial_id: 2, dial_name: 'Progressive' },
//   { dial_id: 3, dial_name: 'Predictive' },
//   { dial_id: 4, dial_name: 'System Preview' },
// ];

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

// type Column = GridColumn<Row>;

// // columns 정의 (Grid에 표시될 열들)
// const columns: Column[] = [
//   { 
//     key: "no", 
//     name: "NO.", 
//     width: 60,
//     resizable: true 
//   },
//   { 
//     key: "idName", 
//     name: "아이디+이름", 
//     width: 180,
//     resizable: true 
//   },
//   { 
//     key: "startDate", 
//     name: "시작일자", 
//     width: 120,
//     resizable: true 
//   },
//   { 
//     key: "endDate", 
//     name: "종료일자", 
//     width: 120,
//     resizable: true 
//   },
//   { 
//     key: "skill", 
//     name: "스킬", 
//     width: 100,
//     resizable: true 
//   },
//   { 
//     key: "dialMode", 
//     name: "다이얼모드", 
//     width: 150,
//     resizable: true 
//   },
//   { 
//     key: "callingNumber", 
//     name: "발신번호", 
//     width: 150,
//     resizable: true 
//   },
// ];

// type Props = {
//   campaignId?: string;
//   campaignHeaderSearchParam?: CampaignHeaderSearch;
//   onRowClick?: (campaignId: string) => void; // 추가된 속성
// };

// export default function CampaignManagerList({ campaignId, campaignHeaderSearchParam, onRowClick }: Props) {
//   const { campaigns, setSelectedCampaign, selectedCampaignRow, setSelectedCampaignRow } = useMainStore();
//   const { setCampaignIdForUpdateFromSideMenu } = useTabStore();
//   const { schedules, callingNumbers, campaignSkills } = useCampainManagerStore();

//   const [filteredCampaigns, setFilteredCampaigns] = useState<CampaignListDataResponse[]>([]);
//   const [tempData, setTempData] = useState<Row[]>([]);

//   // campaignListResponse를 처리하여 filteredCampaigns 업데이트
//   useEffect(() => {
//     let _filteredCampaigns = campaigns;
//     setFilteredCampaigns([]);
//     if( typeof campaignHeaderSearchParam != 'undefined' ){
//       // full view mode: search 파라미터 적용
//       if (campaignHeaderSearchParam) {
//         if (campaignHeaderSearchParam.tenantId > -1) {
//           _filteredCampaigns = _filteredCampaigns.filter(
//             (campaign) => campaign.tenant_id === Number(campaignHeaderSearchParam.tenantId)
//           );
//         }

//         if (campaignHeaderSearchParam.dailMode > 0) {
//           _filteredCampaigns = _filteredCampaigns.filter(
//             (campaign) => campaign.dial_mode === Number(campaignHeaderSearchParam.dailMode)
//           );
//         }

//         if (campaignHeaderSearchParam.campaignName !== '') {
//           _filteredCampaigns = _filteredCampaigns.filter(
//             (campaign) => campaign.campaign_name.includes(campaignHeaderSearchParam.campaignName)
//           );
//         }

//         if (campaignHeaderSearchParam.callNumber !== '') {
//           const filteredCallingNumbers = callingNumbers.filter(
//             (callingNumber) => callingNumber.calling_number.includes(campaignHeaderSearchParam.callNumber)
//           );
//           _filteredCampaigns = _filteredCampaigns.filter(
//             (campaign) => filteredCallingNumbers.some(
//               (callingNumber) => callingNumber.campaign_id === campaign.campaign_id
//             )
//           );
//         }

//         if (campaignHeaderSearchParam.skill > 0) {
//           const filteredCampaignSkills = campaignSkills.filter(
//             (campaignSkill) => campaignSkill.skill_id.includes(campaignHeaderSearchParam.skill)
//           );
//           _filteredCampaigns = _filteredCampaigns.filter(
//             (campaign) => filteredCampaignSkills.some(
//               (campaignSkill) => campaignSkill.campaign_id === campaign.campaign_id
//             )
//           );
//         }
//       }
//     }
//     setFilteredCampaigns(_filteredCampaigns);
//   }, [ campaignHeaderSearchParam, campaigns ]);

//   // 셀 클릭 시 호출 - 클릭한 행의 캠페인 데이터를 선택 상태로 업데이트하고, onRowClick이 있다면 호출
//   const handleCellClick = useCallback(({ row }: CellClickArgs<Row>) => {
//     const clickedCampaign = filteredCampaigns.find(
//       campaign => campaign.campaign_id === row.campaignId
//     );

//     if (clickedCampaign) {
//       setSelectedCampaign(clickedCampaign as any);
//       setSelectedCampaignRow(row);
//       setCampaignIdForUpdateFromSideMenu(clickedCampaign.campaign_id.toString());
//       if (onRowClick) {
//         onRowClick(row.campaignId.toString());
//       }
//     }

//     setCampaignIdForUpdateFromSideMenu(row.campaignId.toString());

//   }, [filteredCampaigns, setSelectedCampaign, setSelectedCampaignRow, onRowClick]);

//   // filteredCampaigns를 grid 데이터 형식(Row)로 변환
//   useEffect(() => {
//     if( filteredCampaigns.length > 0 ){        
//       const newTempData: Row[] = filteredCampaigns.map((campaign, index) => ({
//         no: index + 1,
//         campaignId: campaign.campaign_id,
//         idName: `[${campaign.campaign_id}]${campaign.campaign_name}`,
//         startDate: schedules
//           .filter((schedule) => schedule.campaign_id === campaign.campaign_id)
//           .map((data) => data.start_date && data.start_date.length === 8 
//             ? `${data.start_date.substring(0,4)}-${data.start_date.substring(4,6)}-${data.start_date.substring(6,8)}`
//             : '')
//           .join(','),
//         endDate: schedules
//           .filter((schedule) => schedule.campaign_id === campaign.campaign_id)
//           .map((data) => data.end_date && data.end_date.length === 8 
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
//     }else{
//       setTempData([]);
//       setSelectedCampaign(null);
//       setSelectedCampaignRow(null);
//     }

//   }, [filteredCampaigns, schedules, campaignSkills, callingNumbers]);

//   // 자동 선택: 목록에 행이 있고 선택된 행이 없으면 첫 번째 행을 선택
//   useEffect(() => {
//     if (tempData.length > 0 && filteredCampaigns.length > 0 && campaignId != ''){
//       const selectedCampaign = campaigns.find(c => c.campaign_id === Number(campaignId));
//       const filterCampaign = filteredCampaigns.find(c => c.campaign_id === Number(campaignId));
//       const index = tempData.findIndex(d => d.campaignId === Number(campaignId));

//       if (selectedCampaign && index !== -1 && typeof filterCampaign !== 'undefined' ) {
//         setSelectedCampaign(selectedCampaign ?? null);
//         setSelectedCampaignRow(tempData[index]);
//       }else{        
//         const selectedCampaign = campaigns.find(c => c.campaign_id === filteredCampaigns[0].campaign_id);
//         setSelectedCampaign(selectedCampaign ?? null);
//         setSelectedCampaignRow(tempData.filter(data => data.campaignId === filteredCampaigns[0].campaign_id)[0]);
//         setCampaignIdForUpdateFromSideMenu(filteredCampaigns[0].campaign_id.toString());
//         if (onRowClick) {
//           onRowClick(filteredCampaigns[0].campaign_id.toString());
//         }
//       }
//     }else if (tempData.length > 0 && filteredCampaigns.length > 0 ){
//       const selectedCampaign = campaigns.find(c => c.campaign_id === tempData[0].campaignId);
//       setSelectedCampaign(selectedCampaign ?? null);
//       setSelectedCampaignRow(tempData[0]);
//       setCampaignIdForUpdateFromSideMenu(filteredCampaigns[0].campaign_id.toString());
//       if (onRowClick) {
//         onRowClick(tempData[0].campaignId.toString());
//       }
//     }
    
//   }, [tempData, filteredCampaigns,campaignId]);

//   const getCampaignRowClass = useCallback((row: Row) => {
//     return selectedCampaignRow?.campaignId === row.campaignId ? 'bg-[#FFFAEE]' : '';
//   }, [selectedCampaignRow]);

//   const selectedRowKeys = selectedCampaignRow ? new Set<number>([selectedCampaignRow.campaignId]) : new Set<number>();

//   return (
//     <div className="w-[40%] shrink-0">
//       <div className="flex items-center justify-between mb-2">
//         <TitleWrap title="캠페인 목록" totalCount={filteredCampaigns?.length || 0} />
//         {/* {viewMode === 'single' && (
//           <Button 
//             onClick={() => setViewMode('full')} 
//             className="ml-2"
//           >
//             ☰ 전체
//           </Button>
//         )} */}
//       </div>
//       <div className="overflow-x-auto">
//         <div className="grid-custom-wrap h-[500px]"> 
//           <DataGrid 
//             columns={columns} 
//             rows={tempData} 
//             className="grid-custom text-align-left rdg-light"
//             rowHeight={30}
//             rowClass={getCampaignRowClass}
//             headerRowHeight={30}
//             onCellClick={handleCellClick}
//             rowKeyGetter={(row) => row.campaignId}
//             selectedRows={selectedRowKeys}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// src/features/campaignManager/CampaignManagerList.tsx
'use client';
import { useEffect, useState, useCallback, useRef } from 'react';
import DataGrid, { CellClickArgs, Column as GridColumn, DataGridHandle } from "react-data-grid";
import 'react-data-grid/lib/styles.css';
import TitleWrap from "@/components/shared/TitleWrap";
import { useMainStore, useCampainManagerStore, useTabStore } from '@/store';
import { CampaignHeaderSearch } from './CampaignManagerHeader';
import { CampaignListDataResponse } from '@/features/campaignManager/types/typeForCampaignForSideBar';

// ... (dialModeList, types, columns remain the same) ...
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

const columns: Column[] = [
    { key: "no", name: "NO.", width: 60, resizable: true },
    { key: "idName", name: "아이디+이름", width: 180, resizable: true },
    { key: "startDate", name: "시작일자", width: 120, resizable: true },
    { key: "endDate", name: "종료일자", width: 120, resizable: true },
    { key: "skill", name: "스킬", width: 100, resizable: true },
    { key: "dialMode", name: "다이얼모드", width: 150, resizable: true },
    { key: "callingNumber", name: "발신번호", width: 150, resizable: true },
];

type Props = {
    campaignId?: string; // ID potentially passed as prop for initial selection hint
    campaignHeaderSearchParam?: CampaignHeaderSearch;
    onRowClick?: (campaignId: string) => void; // Callback when a row is clicked
};

export default function CampaignManagerList({ campaignId, campaignHeaderSearchParam, onRowClick }: Props) {
    const { campaigns, setSelectedCampaign, selectedCampaignRow, setSelectedCampaignRow } = useMainStore();
    // campaignIdForUpdateFromSideMenu: ID coming from the store (e.g., sidebar action) that should trigger selection/scroll
    const { setCampaignIdForUpdateFromSideMenu, deletedCampaignIdAtSidebar, campaignIdForUpdateFromSideMenu } = useTabStore();
    const { schedules, callingNumbers, campaignSkills } = useCampainManagerStore();

    const [filteredCampaigns, setFilteredCampaigns] = useState<CampaignListDataResponse[]>([]);
    const [tempData, setTempData] = useState<Row[]>([]);

    const gridRef = useRef<DataGridHandle>(null);

    // --- Effect 1: Filtering ---
    useEffect(() => {
        let _filteredCampaigns = campaigns;

        if (deletedCampaignIdAtSidebar) {
            _filteredCampaigns = _filteredCampaigns.filter(
                (campaign) => campaign.campaign_id.toString() !== deletedCampaignIdAtSidebar
            );
        }

        if (campaignHeaderSearchParam) {
            // Apply search parameters... (filtering logic is likely ok)
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
                const callingNumberCampaignIds = new Set(filteredCallingNumbers.map(cn => cn.campaign_id));
                _filteredCampaigns = _filteredCampaigns.filter(
                  (campaign) => callingNumberCampaignIds.has(campaign.campaign_id)
                );
              }
              if (campaignHeaderSearchParam.skill > 0) {
                const filteredCampaignSkills = campaignSkills.filter(
                  (campaignSkill) => campaignSkill.skill_id.includes(campaignHeaderSearchParam.skill) // Assuming skill_id is string or number array? If number, convert skill param
                );
                const skillCampaignIds = new Set(filteredCampaignSkills.map(cs => cs.campaign_id));
                _filteredCampaigns = _filteredCampaigns.filter(
                  (campaign) => skillCampaignIds.has(campaign.campaign_id)
                );
              }
        }

        setFilteredCampaigns(_filteredCampaigns);
    }, [campaignHeaderSearchParam, campaigns, deletedCampaignIdAtSidebar, callingNumbers, campaignSkills]); // Dependencies seem ok

    // --- Effect 2: Data Mapping (Grid Rows) ---
    useEffect(() => {
        let newTempData: Row[] = [];
        if (filteredCampaigns.length > 0) {
            newTempData = filteredCampaigns.map((campaign, index) => {
                 // Pre-filter related data for efficiency
                const relevantSchedules = schedules.filter(s => s.campaign_id === campaign.campaign_id);
                const relevantSkills = campaignSkills.filter(s => s.campaign_id === campaign.campaign_id);
                const relevantCallingNumbers = callingNumbers.filter(cn => cn.campaign_id === campaign.campaign_id);
                const relevantDialMode = dialModeList.find(dm => dm.dial_id === campaign.dial_mode);

                const formatDate = (dateStr: string | null | undefined) => {
                    if (dateStr && dateStr.length === 8) {
                        return `${dateStr.substring(0, 4)}-${dateStr.substring(4, 6)}-${dateStr.substring(6, 8)}`;
                    }
                    return '';
                };

                return {
                    no: index + 1,
                    campaignId: campaign.campaign_id,
                    idName: `[${campaign.campaign_id}]${campaign.campaign_name}`,
                    startDate: relevantSchedules.map(data => formatDate(data.start_date)).join(','),
                    endDate: relevantSchedules.map(data => formatDate(data.end_date)).join(','),
                    skill: relevantSkills.map(data => data.skill_id).join(','),
                    dialMode: relevantDialMode ? relevantDialMode.dial_name : '',
                    callingNumber: relevantCallingNumbers.map(data => data.calling_number).join(',')
                };
            });
        }
        setTempData(newTempData);

        // If the data becomes empty, clear selection
        if (newTempData.length === 0) {
            if (selectedCampaignRow !== null) { // Check before setting
                setSelectedCampaign(null);
                setSelectedCampaignRow(null);
            }
        }

    }, [filteredCampaigns, schedules, campaignSkills, callingNumbers, selectedCampaignRow]); // REMOVED setters, added selectedCampaignRow dependency for the clearing logic

    // --- Effect 3: Auto Selection / Initial Selection ---
    useEffect(() => {
        // Only run if data exists and no specific update is incoming from side menu
        // OR if the currently selected row is no longer in the data
        const shouldAutoSelect = tempData.length > 0 && (
            !campaignIdForUpdateFromSideMenu || // No specific request active
            !tempData.some(row => row.campaignId.toString() === campaignIdForUpdateFromSideMenu) // Specific request ID not in current data
        );

        const selectedRowExistsInData = selectedCampaignRow && tempData.some(row => row.campaignId === selectedCampaignRow.campaignId);

        if (shouldAutoSelect && !selectedRowExistsInData) {
            let targetCampaignId: number | null = null;
            let targetRow: Row | null = null;

            // Try using the campaignId prop as a hint if available and valid
            if (campaignId) {
                const foundRowByProp = tempData.find(d => d.campaignId === Number(campaignId));
                if (foundRowByProp) {
                    targetRow = foundRowByProp;
                    targetCampaignId = Number(campaignId);
                }
            }

            // If prop didn't match or wasn't provided, default to the first item
            if (!targetRow && tempData.length > 0) {
                targetRow = tempData[0];
                targetCampaignId = targetRow.campaignId;
            }

            if (targetRow && targetCampaignId !== null) {
                const targetCampaign = campaigns.find(c => c.campaign_id === targetCampaignId) ?? null;
                if (targetCampaign) {
                    // Check before setting state to prevent loops
                    if (selectedCampaignRow?.campaignId !== targetRow.campaignId) {
                         console.log("Auto Selecting Row:", targetRow.campaignId);
                        setSelectedCampaign(targetCampaign as any);
                        setSelectedCampaignRow(targetRow);
                        // DO NOT set campaignIdForUpdateFromSideMenu here - this effect ensures *a* selection exists,
                        // it shouldn't drive the side menu update trigger.
                        // Let onRowClick handle informing the parent if needed, but maybe not even needed for auto-selection.
                        // if (onRowClick) {
                        //     onRowClick(targetCampaignId.toString());
                        // }
                    }
                }
            }
        } else if (tempData.length === 0 && selectedCampaignRow) {
             // Clear selection if data is empty and something is still selected (already handled in Effect 2, but double-check)
             setSelectedCampaign(null);
             setSelectedCampaignRow(null);
        }

    // Dependencies: Reacts to data changes and the external ID hint prop.
    // Excludes campaignIdForUpdateFromSideMenu intentionally to avoid conflict with scrolling effect.
    // REMOVED setters and onRowClick from deps. Added campaigns.
    }, [tempData, campaignId, campaigns, selectedCampaignRow]);

    // --- Effect 4: Scrolling to Selection driven by Side Menu/Store ---
    useEffect(() => {
        if (campaignIdForUpdateFromSideMenu && tempData.length > 0 && gridRef.current) {
            const targetRowIndex = tempData.findIndex(row => row.campaignId.toString() === campaignIdForUpdateFromSideMenu);

            if (targetRowIndex !== -1) {
                const targetRow = tempData[targetRowIndex];

                // Only proceed if the target row isn't already selected
                if (selectedCampaignRow?.campaignId !== targetRow.campaignId) {
                    const targetCampaign = campaigns.find(c => c.campaign_id.toString() === campaignIdForUpdateFromSideMenu);
                    if (targetCampaign) {
                         console.log("Scrolling Effect Selecting Row:", targetRow.campaignId);
                        setSelectedCampaign(targetCampaign as any);
                        setSelectedCampaignRow(targetRow);

                        // Use setTimeout to ensure selection state update has rendered before scrolling
                        setTimeout(() => {
                           if(gridRef.current) {
                               gridRef.current.scrollToCell({ rowIdx: targetRowIndex, idx: 0 });
                           }
                        }, 0); // Delay of 0ms defers execution slightly

                        // Inform parent via onRowClick if needed
                        if (onRowClick) {
                            onRowClick(campaignIdForUpdateFromSideMenu);
                        }
                    }
                } else {
                    // If already selected, still ensure it's scrolled into view
                     console.log("Scrolling Effect Scrolling to Row:", targetRow.campaignId);
                     setTimeout(() => {
                        if(gridRef.current) {
                           gridRef.current.scrollToCell({ rowIdx: targetRowIndex, idx: 0 });
                        }
                     }, 0);
                }
            }
        }
    // Dependencies: Reacts to the trigger ID and data changes.
    // REMOVED setters and onRowClick from dependencies. Added campaigns, selectedCampaignRow.
    }, [campaignIdForUpdateFromSideMenu, tempData, campaigns, selectedCampaignRow]);


    // --- Cell Click Handler ---
    const handleCellClick = useCallback(({ row }: CellClickArgs<Row>) => {
        // Check if already selected to prevent unnecessary updates
        if (selectedCampaignRow?.campaignId === row.campaignId) {
            return;
        }

        const clickedCampaign = filteredCampaigns.find(
            campaign => campaign.campaign_id === row.campaignId
        );

        if (clickedCampaign) {
            console.log("Cell Click Selecting Row:", row.campaignId);
            setSelectedCampaign(clickedCampaign as any);
            setSelectedCampaignRow(row);

            // *** REMOVED: Do not set the side menu trigger ID on cell click ***
            // setCampaignIdForUpdateFromSideMenu(clickedCampaign.campaign_id.toString());

            // Inform the parent/consumer about the click
            if (onRowClick) {
                onRowClick(row.campaignId.toString());
            }
        }
    // Dependencies: Include everything read inside the callback
    }, [filteredCampaigns, selectedCampaignRow, onRowClick, setSelectedCampaign, setSelectedCampaignRow]); // Added setters back here as they are used


    // --- Row Styling ---
    const getCampaignRowClass = useCallback((row: Row) => {
        return selectedCampaignRow?.campaignId === row.campaignId ? 'bg-[#FFFAEE] selected-row-highlight' : '';
    }, [selectedCampaignRow]);

    const selectedRowKeys = selectedCampaignRow ? new Set<number>([selectedCampaignRow.campaignId]) : new Set<number>();

    // --- Render ---
    return (
        <div className="w-[40%] shrink-0">
            <div className="flex items-center justify-between mb-2">
                <TitleWrap title="캠페인 목록" totalCount={filteredCampaigns?.length || 0} />
            </div>
            <div className="overflow-x-auto">
                <div className="grid-custom-wrap h-[500px]">
                    <DataGrid
                        ref={gridRef}
                        columns={columns}
                        rows={tempData}
                        className="grid-custom text-align-left rdg-light"
                        rowHeight={30}
                        rowClass={getCampaignRowClass}
                        headerRowHeight={30}
                        onCellClick={handleCellClick}
                        rowKeyGetter={(row) => row.campaignId}
                        selectedRows={selectedRowKeys}
                        // Setting selectedRows should handle visual selection
                        // onSelectedRowsChange might not be needed for single row selection via click
                    />
                </div>
            </div>
        </div>
    );
}