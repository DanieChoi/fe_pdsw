// // src\app\main\comp\AgentStatusMonitoring\index.tsx
// import React, { useState, useMemo, useEffect } from "react";
// import TitleWrap from "@/components/shared/TitleWrap";
// import { Table, TableRow, TableHeader, TableCell } from "@/components/ui/table-custom";
// import Image from "next/image";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
// import { CustomCheckbox } from "@/components/shared/CustomCheckbox";
// import { Label } from "@/components/ui/label";
// import { useMainStore } from '@/store';
// import { useEnvironmentStore } from '@/store/environmentStore';

// // 타입 임포트
// import {
//   AgentStatus,
//   AgentData,
//   StatusHeaderItem,
//   SortField,
//   SortDirection,
//   AgentStatusMonitoringProps,
//   AgentStateMonitoringListResponse
// } from './types/typeForCunsultantMonitoring';
// import { useApiForGetConsultantStatusMonitorData } from "@/features/monitoring/hooks/useApiForGetConsultantStatusMonitorData";
// import StatusTimer from "./component/StatusTimer";

// const AgentStatusMonitoring: React.FC<AgentStatusMonitoringProps> = ({
//   sessionKey,
//   campaignId,
//   tenantId,
// }) => {
//   // 상태 관리
//   const [selectedStatuses, setSelectedStatuses] = useState<AgentStatus>({
//     waiting: true,
//     processing: false,
//     afterprocessing: false,
//     rest: false
//   });

//   // 정렬 관련 상태
//   const [sortField, setSortField] = useState<SortField>('time');
//   const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
//   const { campaigns } = useMainStore();
//   const [agentData, setAgentData] = useState<AgentData[]>([]);
//   const { statisticsUpdateCycle } = useEnvironmentStore();

//   const handleStatusChange = (status: keyof AgentStatus): void => {
//     setSelectedStatuses(prev => ({
//       ...prev,
//       [status]: !prev[status]
//     }));
//   };

//   const toggleSortDirection = (): void => {
//     setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
//   };

//   const getStatusColor = (status: AgentData['status']): string => {
//     const colors = {
//       waiting: 'text-[#3A9D6C]',
//       processing: 'text-[#C95E5E]',
//       afterprocessing: 'text-[#338BD3]',
//       rest: 'text-[#9459BF]'
//     };
//     return colors[status];
//   };

//   const getStatusText = (status: AgentData['status']): string => {
//     const statusMap = {
//       waiting: '대기',
//       processing: '처리',
//       afterprocessing: '후처리',
//       rest: '휴식'
//     };
//     return statusMap[status];
//   };

//   const sortedAndFilteredAgents = useMemo(() => {
//     const filtered = agentData.filter(agent => selectedStatuses[agent.status]);

//     return [...filtered].sort((a, b) => {
//       let compareA: string | number = a[sortField];
//       let compareB: string | number = b[sortField];

//       if (sortField === 'status') {
//         compareA = getStatusText(a.status);
//         compareB = getStatusText(b.status);
//       }

//       if (sortField === 'time') {
//         // 시간을 초 단위로 변환하여 비교
//         const timeToSeconds = (time: string): number => {
//           const [hours, minutes, seconds] = time.split(':').map(Number);
//           return hours * 3600 + minutes * 60 + seconds;
//         };
//         compareA = timeToSeconds(a.time);
//         compareB = timeToSeconds(b.time);
//       }

//       if (compareA < compareB) return sortDirection === 'asc' ? -1 : 1;
//       if (compareA > compareB) return sortDirection === 'asc' ? 1 : -1;
//       return 0;
//     });
//   }, [agentData, selectedStatuses, sortField, sortDirection]);

//   const getStatusCount = (status: AgentData['status']): number => {
//     return agentData.filter(agent => agent.status === status).length;
//   };

//   const statusHeaderItems: StatusHeaderItem[] = [
//     { status: 'waiting', bg: '!bg-[#DDF4F2]', text: '대기 상담사', icon: '/waiting.svg' },
//     { status: 'processing', bg: '!bg-[#FEE9EC]', text: '처리', icon: '/processing.svg' },
//     { status: 'afterprocessing', bg: '!bg-[#E8EFFA]', text: '후처리', icon: '/afterprocessing.svg' },
//     { status: 'rest', bg: '!bg-[#F6F0FA]', text: '휴식', icon: '/rest.svg' }
//   ];

//   // 새로 만든 useApiForGetConsultantStatusMonitorData 훅 사용
//   const { data, refetch, isLoading } = useApiForGetConsultantStatusMonitorData({
//     tenantId: Number(tenantId || 0),
//     campaignId: Number(campaignId || 0),
//     sessionKey: sessionKey || '',
//   }, {
//     enabled: !!sessionKey && tenantId !== 'undefined', // sessionKey가 존재하고 tenantId != null 인 경우
//     refetchInterval: statisticsUpdateCycle > 0 ? statisticsUpdateCycle * 1000 : false,
//   });

//   console.log("AgentStatusMonitoring data", data);
  

//   useEffect(() => {
//     if (data && data.counselorStatusList.length > 0) {
//       const tempDataList: AgentData[] = data.counselorStatusList.map((item, index) => ({
//         id: index,
//         status: item.statusCode === '204'
//           ? 'waiting'
//           : item.statusCode === '205'
//             ? 'processing'
//             : item.statusCode === '206'
//               ? 'afterprocessing'
//               : 'rest',
//         agent: item.counselorId,
//         name: item.counselorName,
//         time: item.statusTime || '0',
//       }));
//       setAgentData(tempDataList);
//     }else{
//       setAgentData([]);
//     }
//   }, [data]);

//   return (
//     <>
//       <div>
//         <TitleWrap
//           // title={`상담사 상태 통계${campaignId ? ` (캠페인 ID: ${campaignId})` : ''} tenantId: ${tenantId}`}
//           title={`상담사 상태 통계`}
//           className="border-b border-gray-300 pb-1"
//         />
//         <Table>
//           <tbody>
//             <TableRow>
//               {statusHeaderItems.map(item => (
//                 <TableHeader
//                   key={item.status}
//                   className={`${item.bg} !text-center text-sm font-normal !h-[30px] ${getStatusColor(item.status)}`}
//                 >
//                   <div className="flex items-center gap-2 justify-center">
//                     <Image
//                       src={item.icon}
//                       alt={item.text}
//                       width={14}
//                       height={14}
//                       priority
//                     />
//                     {item.text}
//                   </div>
//                 </TableHeader>
//               ))}
//             </TableRow>
//             <TableRow>
//               {statusHeaderItems.map(item => (
//                 <TableCell key={item.status} className="!text-center text-sm !h-[30px]">
//                   {getStatusCount(item.status)}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </tbody>
//         </Table>
//       </div>
//       <div className="h-[calc(100%-115px)]">
//         <TitleWrap
//           title="상담사 상태"
//           className="border-b border-gray-300 pb-1"
//         />
//         <div className="flex justify-between items-center bg-[#f8f8f8] h-[30px] px-5 border-t border-x rounded-t-[3px]">
//           <div className="flex gap-4">
//             {statusHeaderItems.map(item => (
//               <div key={item.status} className="flex gap-1 items-center">
//                 <div className="flex items-center space-x-2">
//                   <CustomCheckbox
//                     id={item.status}
//                     checked={selectedStatuses[item.status]}
//                     onCheckedChange={(checked: boolean) => handleStatusChange(item.status)}
//                   />
//                   <label
//                     htmlFor={item.status}
//                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                   >
//                     {getStatusText(item.status)}
//                   </label>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex gap-4 items-center">
//             <div className="flex items-center gap-2">
//               <Label className="pr-2">정렬선택</Label>
//               <div className="w-[120px]">
//                 <Select value={sortField} onValueChange={(value: SortField) => setSortField(value)}>
//                   <SelectTrigger className="w-full">
//                     <SelectValue placeholder="시간" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="time">시간</SelectItem>
//                     <SelectItem value="agent">상담사 아이디</SelectItem>
//                     <SelectItem value="name">상담사 이름</SelectItem>
//                     <SelectItem value="status">상태</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//             <button
//               onClick={toggleSortDirection}
//               type="button"
//               aria-label={sortDirection === 'asc' ? "오름차순" : "내림차순"}
//             >
//               <Image
//                 src="/sort_button.svg"
//                 alt={sortDirection === 'asc' ? "오름차순" : "내림차순"}
//                 width={12}
//                 height={12}
//                 className={sortDirection === 'desc' ? "rotate-180" : ""}
//               />
//             </button>
//           </div>
//         </div>
//         <div className="h-[calc(100%-59px)] overflow-auto border border-[#ebebeb] rounded-b-[3px]">
//           <table className="w-full table-auto rounded-[3px] border-separate border-spacing-0">
//             <tbody>
//               { sortedAndFilteredAgents && !isLoading ? sortedAndFilteredAgents.map((agent) => (
//                 <tr key={agent.id}>
//                   <td className="text-center text-sm border-b px-3 py-1 text-[#333]">
//                     <div className={`flex items-center gap-2 justify-center ${getStatusColor(agent.status)}`}>
//                       <Image
//                         src={`/${agent.status}.svg`}
//                         alt={getStatusText(agent.status)}
//                         width={14}
//                         height={14}
//                       />
//                       {getStatusText(agent.status)}
//                     </div>
//                   </td>
//                   <td className="text-center text-sm border-b px-3 py-1 text-[#333]">{agent.agent}</td>
//                   <td className="text-center text-sm border-b px-3 py-1 text-[#333]">{agent.name}</td>
//                   <td className="text-center text-sm border-b px-3 py-1 text-[#333]">
//                   <StatusTimer initialTime={agent.time || 0} />

//                   </td>
//                   <td className="text-center text-sm border-b px-3 py-1 text-[#333]">
//                     ({agentData.filter(a => a.status === agent.status).length}/{agentData.length})
//                   </td>
//                 </tr>
//               )) :
//                 (
//                   [...Array(6)].map((_, index) => (
//                     <tr key={`skeleton-${index}`}>
//                       {Array.from({ length: 5 }).map((_, colIndex) => (
//                         <td key={colIndex} className="text-center text-sm border-b px-3 py-1">
//                           <div className="flex justify-center">
//                             <div className="h-4 w-24 rounded bg-gray-200 animate-pulse" />
//                           </div>
//                         </td>
//                       ))}
//                     </tr>
//                   ))
//                 )
//               }
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AgentStatusMonitoring;

// src\app\main\comp\AgentStatusMonitoring\index.tsx
import React, { useState, useMemo, useEffect } from "react";
import TitleWrap from "@/components/shared/TitleWrap";
import { Table, TableRow, TableHeader, TableCell } from "@/components/ui/table-custom";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { CustomCheckbox } from "@/components/shared/CustomCheckbox";
import { Label } from "@/components/ui/label";
import { useMainStore } from '@/store';
import { useEnvironmentStore } from '@/store/environmentStore';

// 타입 임포트
import {
  AgentStatus,
  AgentData, // Make sure AgentData has time as number if modified below
  StatusHeaderItem,
  SortField,
  SortDirection,
  AgentStatusMonitoringProps,
  AgentStateMonitoringListResponse // Ensure this type matches API response
} from './types/typeForCunsultantMonitoring'; // Adjust path if needed
import { useApiForGetConsultantStatusMonitorData } from "@/features/monitoring/hooks/useApiForGetConsultantStatusMonitorData"; // Adjust path if needed
import StatusTimer from "./component/StatusTimer"; // Adjust path if needed

// --- Ensure AgentData type reflects time as number ---
// Example modification (adjust in your actual types file):
// export interface AgentData {
//   id: number;
//   status: 'waiting' | 'processing' | 'afterprocessing' | 'rest';
//   agent: string;
//   name: string;
//   time: number; // Changed from string to number
// }
// -----------------------------------------------------


const AgentStatusMonitoring: React.FC<AgentStatusMonitoringProps> = ({
  sessionKey,
  campaignId,
  tenantId,
}) => {
  // 상태 관리
  const [selectedStatuses, setSelectedStatuses] = useState<AgentStatus>({
    waiting: true,
    processing: true, // Defaulting more statuses to true for testing visibility
    afterprocessing: true,
    rest: true
  });

  // 정렬 관련 상태
  const [sortField, setSortField] = useState<SortField>('time'); // Default sort field
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc'); // Default sort direction
  const { campaigns } = useMainStore(); // campaigns might not be used here, check if needed
  const [agentData, setAgentData] = useState<AgentData[]>([]);
  const { statisticsUpdateCycle } = useEnvironmentStore();

  const handleStatusChange = (status: keyof AgentStatus): void => {
    setSelectedStatuses(prev => ({
      ...prev,
      [status]: !prev[status]
    }));
  };

  // API 훅 호출
  const { data, refetch, isLoading, error } = useApiForGetConsultantStatusMonitorData({
    tenantId: Number(tenantId || 0), // Ensure tenantId is a number
    campaignId: Number(campaignId || 0), // Ensure campaignId is a number
    sessionKey: sessionKey || '',
  }, {
    enabled: !!sessionKey && tenantId !== 'undefined' && tenantId !== null, // Enable only when valid props are present
    refetchInterval: statisticsUpdateCycle > 0 ? statisticsUpdateCycle * 1000 : false, // Use store value for interval
  });

  // API 데이터 처리 및 상태 업데이트
  useEffect(() => {
    // Check if data exists and has the expected structure
    if (data && data.counselorStatusList && data.counselorStatusList.length >= 0) { // Check >= 0 to handle empty arrays
        const tempDataList: AgentData[] = data.counselorStatusList.map((item, index) => {
            let status: AgentData['status'];
            switch (item.statusCode) {
                case '204': status = 'waiting'; break;
                case '205': status = 'processing'; break;
                case '206': status = 'afterprocessing'; break;
                default: status = 'rest'; // Assuming any other code means rest
            }

            return {
                // Use index as numeric ID to match AgentData type
                id: index,
                status: status,
                agent: item.counselorId,
                name: item.counselorName,
                // Keep time as string to match AgentData type
                time: String(item.statusTime || '0'), // Convert to string, default to '0' if falsy
            };
        });
        setAgentData(tempDataList);
    } else if (!isLoading && !error) {
        // If data is null/undefined/empty array after loading and no error, clear the list
        setAgentData([]);
    }
    // Add isLoading and error to dependencies if needed, e.g., for clearing data on error
  }, [data, isLoading, error]); // Dependencies for processing data


  const toggleSortDirection = (): void => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const getStatusColor = (status: AgentData['status']): string => {
    const colors = {
      waiting: 'text-[#3A9D6C]',
      processing: 'text-[#C95E5E]',
      afterprocessing: 'text-[#338BD3]',
      rest: 'text-[#9459BF]'
    };
    return colors[status];
  };

  const getStatusText = (status: AgentData['status']): string => {
    const statusMap = {
      waiting: '대기',
      processing: '처리',
      afterprocessing: '후처리',
      rest: '휴식'
    };
    return statusMap[status];
  };

  // 정렬 및 필터링 로직 (useMemo)
  const sortedAndFilteredAgents = useMemo(() => {
    // Start with filtering
    const filtered = agentData.filter(agent => selectedStatuses[agent.status]);

    // Then sort the filtered data
    return [...filtered].sort((a, b) => {
      let compareA: string | number = a[sortField];
      let compareB: string | number = b[sortField];

      // Handle specific sort fields
      if (sortField === 'status') {
        compareA = getStatusText(a.status);
        compareB = getStatusText(b.status);
        // String comparison
        return sortDirection === 'asc'
          ? compareA.localeCompare(compareB)
          : compareB.localeCompare(compareA);
      }

      if (sortField === 'agent' || sortField === 'name') {
        // String comparison (case-insensitive example)
         compareA = String(compareA).toLowerCase();
         compareB = String(compareB).toLowerCase();
         return sortDirection === 'asc'
          ? compareA.localeCompare(compareB)
          : compareB.localeCompare(compareA);
      }

      // *** MODIFICATION: Direct numeric comparison for 'time' ***
      if (sortField === 'time') {
          // Ensure values are numbers before comparison
          const numA = typeof compareA === 'string' ? Number(compareA) : compareA;
          const numB = typeof compareB === 'string' ? Number(compareB) : compareB;
          return sortDirection === 'asc' ? numA - numB : numB - numA;
      }

      // Default fallback (shouldn't be reached with defined SortField types)
      if (compareA < compareB) return sortDirection === 'asc' ? -1 : 1;
      if (compareA > compareB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [agentData, selectedStatuses, sortField, sortDirection]); // Dependencies

  const getStatusCount = (status: AgentData['status']): number => {
    // Count based on the original, unfiltered data
    return agentData.filter(agent => agent.status === status).length;
  };

  // Static header items
  const statusHeaderItems: StatusHeaderItem[] = [
    { status: 'waiting', bg: '!bg-[#DDF4F2]', text: '대기', icon: '/waiting.svg' }, // Text updated
    { status: 'processing', bg: '!bg-[#FEE9EC]', text: '처리', icon: '/processing.svg' },
    { status: 'afterprocessing', bg: '!bg-[#E8EFFA]', text: '후처리', icon: '/afterprocessing.svg' },
    { status: 'rest', bg: '!bg-[#F6F0FA]', text: '휴식', icon: '/rest.svg' }
  ];


  // --- JSX Rendering ---
  return (
    <>
      {/* 상단 통계 */}
      <div>
        <TitleWrap
          title={`상담사 상태 통계`}
          className="border-b border-gray-300 pb-1"
        />
        <Table>
          <tbody>
            <TableRow>
              {statusHeaderItems.map(item => (
                <TableHeader
                  key={item.status}
                  className={`${item.bg} !text-center text-sm font-normal !h-[30px] ${getStatusColor(item.status)}`}
                >
                  <div className="flex items-center gap-2 justify-center">
                    <Image
                      src={item.icon}
                      alt={item.text}
                      width={14}
                      height={14}
                      priority // Keep priority if these are critical above-the-fold images
                    />
                    {item.text}
                  </div>
                </TableHeader>
              ))}
            </TableRow>
            <TableRow>
              {statusHeaderItems.map(item => (
                <TableCell key={item.status} className="!text-center text-sm !h-[30px]">
                  {getStatusCount(item.status)}
                </TableCell>
              ))}
            </TableRow>
          </tbody>
        </Table>
      </div>

      {/* 하단 상세 목록 */}
      {/* Calculate height dynamically or use flex-grow if parent allows */}
      <div className="flex flex-col h-[calc(100%-115px)] mt-2"> {/* Added mt-2 for spacing */}
        <TitleWrap
          title="상담사 상태"
          className="border-b border-gray-300 pb-1"
        />
        {/* 필터 및 정렬 컨트롤 */}
        <div className="flex justify-between items-center bg-[#f8f8f8] h-[40px] px-4 border-t border-x rounded-t-[3px]"> {/* Increased height and padding */}
          <div className="flex gap-4 items-center"> {/* Added items-center */}
            {statusHeaderItems.map(item => (
              <div key={item.status} className="flex items-center"> {/* Removed redundant inner div */}
                <CustomCheckbox
                  id={item.status}
                  checked={selectedStatuses[item.status]}
                  // Pass boolean directly to onCheckedChange if CustomCheckbox expects it
                  onCheckedChange={() => handleStatusChange(item.status)}
                />
                <Label
                  htmlFor={item.status}
                  className="text-sm font-medium ml-2 cursor-pointer" // Added ml-2 and cursor-pointer
                >
                  {getStatusText(item.status)}
                </Label>
              </div>
            ))}
          </div>
          <div className="flex gap-3 items-center"> {/* Reduced gap slightly */}
            {/* <Label className="text-sm">정렬:</Label> Removed label for cleaner look */}
            <div className="w-[130px]"> {/* Slightly wider select */}
              <Select value={sortField} onValueChange={(value: SortField) => setSortField(value)}>
                <SelectTrigger className="w-full h-8 text-sm"> {/* Adjusted height and text size */}
                  <SelectValue placeholder="정렬 기준" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="time">시간</SelectItem>
                  <SelectItem value="agent">상담사 아이디</SelectItem>
                  <SelectItem value="name">상담사 이름</SelectItem>
                  <SelectItem value="status">상태</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <button
              onClick={toggleSortDirection}
              type="button"
              aria-label={sortDirection === 'asc' ? "오름차순" : "내림차순"}
              className="p-1 rounded hover:bg-gray-200" // Added padding and hover effect
            >
              <Image
                src="/sort_button.svg" // Ensure this path is correct
                alt={sortDirection === 'asc' ? "오름차순" : "내림차순"}
                width={14} // Slightly larger icon
                height={14}
                className={`transition-transform duration-200 ${sortDirection === 'desc' ? "rotate-180" : ""}`} // Added transition
              />
            </button>
          </div>
        </div>

        {/* 상담사 목록 테이블 */}
        {/* Use flex-grow to take remaining height */}
        <div className="flex-grow overflow-auto border border-t-0 border-[#ebebeb] rounded-b-[3px]">
          <table className="w-full table-fixed border-separate border-spacing-0"> {/* Use table-fixed for better column control */}
             <colgroup> {/* Define column widths */}
                <col style={{ width: '20%' }} />
                <col style={{ width: '25%' }} />
                <col style={{ width: '25%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '15%' }} />
            </colgroup>
            <tbody>
             {isLoading ? (
                 // Skeleton Loader
                [...Array(6)].map((_, index) => (
                  <tr key={`skeleton-${index}`} className="h-[34px]"> {/* Set skeleton row height */}
                    {Array.from({ length: 5 }).map((_, colIndex) => (
                      <td key={colIndex} className="text-center text-sm border-b px-3 py-1">
                        <div className="flex justify-center items-center h-full">
                          <div className="h-4 w-20 rounded bg-gray-200 animate-pulse" />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))
             ) : error ? (
                  // Error Message
                 <tr>
                    <td colSpan={5} className="text-center text-red-500 py-4">
                        데이터 로드 중 오류 발생: {error.message}
                    </td>
                 </tr>
             ) : sortedAndFilteredAgents.length === 0 ? (
                  // No Data Message
                  <tr>
                    <td colSpan={5} className="text-center text-gray-500 py-4">
                        표시할 데이터가 없습니다.
                    </td>
                  </tr>
             ) : (
                // Actual Data Rows
                sortedAndFilteredAgents.map((agent) => (
                  <tr key={agent.id} className="h-[34px]"> {/* Consistent row height */}
                    <td className="text-center text-sm border-b px-3 py-1 text-[#333] truncate">
                      <div className={`flex items-center gap-1.5 justify-center ${getStatusColor(agent.status)}`}>
                        <Image
                          src={`/${agent.status}.svg`} // Ensure these paths are correct
                          alt={getStatusText(agent.status)}
                          width={14}
                          height={14}
                        />
                        {getStatusText(agent.status)}
                      </div>
                    </td>
                    <td className="text-center text-sm border-b px-3 py-1 text-[#333] truncate">{agent.agent}</td>
                    <td className="text-center text-sm border-b px-3 py-1 text-[#333] truncate">{agent.name}</td>
                    <td className="text-center text-sm border-b px-3 py-1 text-[#333]">
                       {/* *** Pass initial time in seconds to StatusTimer *** */}
                      <StatusTimer initialTime={agent.time} />
                    </td>
                    <td className="text-center text-sm border-b px-3 py-1 text-[#333] truncate">
                      {/* Display count for the agent's current status */}
                      ({getStatusCount(agent.status)}/{agentData.length})
                    </td>
                  </tr>
                ))
             )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AgentStatusMonitoring;