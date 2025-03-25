
// import React, { useState, useEffect } from "react";
// import { useMainStore } from '@/store';
// import TitleWrap from "@/components/shared/TitleWrap";
// import { Table, TableRow, TableHeader, TableCell } from "@/components/ui/table-custom";
// import { Label } from "@/components/ui/label";
// import { CommonRadio, CommonRadioItem } from "@/components/shared/CommonRadio";
// import { CommonButton } from "@/components/shared/CommonButton";
// import UsageTimePopup from './UsageTimePopup';
// import GridView from './GridView';
// import ChartView from './ChartView';
// import { MainDataResponse } from '@/features/auth/types/mainIndex';
// import { useApiForCampaignProgressInformation } from '@/features/monitoring/hooks/useApiForCampaignProgressInformation';
// import { CampaignProgressInformationResponseDataType } from '@/features/monitoring/types/monitoringIndex';

// interface CallItem {
//   id: number;
//   label: string;
// }

// interface CampaignMonitorDashboardProps {
//   campaignId?: string; // props로 캠페인 ID 직접 받기
// }

// type ViewType = "gridView" | "chartView";

// const CampaignMonitorDashboard: React.FC<CampaignMonitorDashboardProps> = ({ campaignId }) => {
//   // 상태 추가
//   const [viewType, setViewType] = useState<ViewType>("gridView");
//   const [selectedCall, setSelectedCall] = useState<CampaignProgressInformationResponseDataType | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   // props로 전달받은 campaignId를 사용
//   const numericCampaignId = campaignId ? Number(campaignId) : null;

//   const { campaigns } = useMainStore();
//   const [campaignInfo, setCampaignInfo] = useState<MainDataResponse | null>(null);
//   const [dataList, setDataList] = useState<CampaignProgressInformationResponseDataType[]>([]);
//   const [campaignIdList, setCampaignIdList] = useState<number[]>([]);
//   const [usageTimePopupState, setUsageTimePopupState] = useState<{
//     campaignIdList: number[];
//     dialKindList: number[];
//     isOpen: boolean;
//   }>({
//     campaignIdList: [],
//     dialKindList: [],
//     isOpen: false,
//   });

//   // 라디오 버튼 변경 핸들러
//   const handleViewTypeChange = (value: string) => {
//     setViewType(value as ViewType);
//   };

//   // 캠페인 진행 정보 api 호출
//   const { mutate: fetchCampaignProgressInformation } = useApiForCampaignProgressInformation({
//     onSuccess: (data) => {  
//       const tempList = data.progressInfoList.sort((a, b) => a.reuseCnt - b.reuseCnt);
//       setDataList(tempList);
//       setSelectedCall(tempList[0]);
//       console.log("API 응답 데이터:", tempList);
//     }
//   });

//   // 컴포넌트 마운트 시 캠페인 ID로 데이터 로드
//   useEffect(() => {
//     console.log("컴포넌트 마운트, 캠페인 ID:", numericCampaignId);
    
//     if (numericCampaignId) {
//       // API 호출
//       setDataList([]);
//       fetchCampaignProgressInformation({
//         tenantId: 1,
//         campaignId: numericCampaignId
//       });
      
//       // 캠페인 정보 찾기
//       if (campaigns && campaigns.length > 0) {
//         const tempCampaign = campaigns.find(data => data.campaign_id === numericCampaignId);
//         console.log("찾은 캠페인 정보:", tempCampaign);
        
//         if (tempCampaign) {
//           setCampaignInfo(tempCampaign);
//           setCampaignIdList([numericCampaignId]);
//         }
//       }
//     } else {
//       console.warn("캠페인 ID가 없어 API 호출을 건너뜁니다.");
//     }
//   }, [numericCampaignId, campaigns, fetchCampaignProgressInformation]);

//   return (
//     <div className="flex gap-4 w-full limit-width">
//       {/* 왼쪽 설정 영역 */}
//       <div className="flex flex-col gap-5 w-[230px] min-w-[230px]">
//         <div>
//           <TitleWrap title="캠페인 정보" />
//           <Table>
//             <tbody>
//               <TableRow>
//                 <TableHeader className="w-[120px]">
//                   <Label>캠페인 아이디</Label>
//                 </TableHeader>
//                 <TableCell>
//                   <span className="text-sm">{campaignInfo?.campaign_id || numericCampaignId || ''}</span>
//                 </TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableHeader className="w-[120px]">
//                   <Label>캠페인 이름</Label>
//                 </TableHeader>
//                 <TableCell>
//                   <span className="text-sm">{campaignInfo?.campaign_name || ''}</span>
//                 </TableCell>
//               </TableRow>
//             </tbody>
//           </Table>
//         </div>

//         <div>
//           <TitleWrap title="표시방법" />
//           <CommonRadio 
//             className="flex gap-8 pl-4" 
//             value={viewType} 
//             onValueChange={handleViewTypeChange}
//           >
//             <div className="flex items-center space-x-2">
//               <CommonRadioItem value="gridView" id="gridView" />
//               <Label htmlFor="gridView">그리드형</Label>
//             </div>
//             <div className="flex items-center space-x-2">
//               <CommonRadioItem value="chartView" id="chartView" />
//               <Label htmlFor="chartView">차트형</Label>
//             </div>
//           </CommonRadio>
//         </div>

//         <div className="flex-1 h-full">
//           <TitleWrap title="발신구분" />
//           <div className="border rounded overflow-y-auto h-[calc(100%-20px)]">
//             <table className="w-full text-sm border-collapse">
//               <tbody>
//                 {dataList.length > 0 ? dataList.map((item, index) => (
//                   <tr
//                     key={item.reuseCnt}
//                     onClick={() => setSelectedCall(item)}
//                     className={`cursor-pointer hover:bg-[#FFFAEE] ${
//                       selectedCall === item ? "bg-[#FFFAEE]" : ""
//                     }`}
//                   >
//                     <td className="border-b border-r px-3 py-1">
//                       {index === 0 ? '최초발신' : index + '번째 재발신'}
//                     </td>
//                   </tr>
//                 )) : (
//                   <tr>
//                     <td className="p-4 text-center text-gray-500">데이터가 없습니다</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="flex justify-end gap-2">
//           <CommonButton 
//             onClick={() => 
//               setUsageTimePopupState({
//                 ...usageTimePopupState,
//                 campaignIdList: campaignIdList,
//                 dialKindList: [selectedCall?.reuseCnt || 0],
//                 isOpen: true,
//               })}
//             disabled={!selectedCall}
//           >
//             사용 시간 보기
//           </CommonButton>
//         </div>
//       </div>

//       {/* 오른쪽 대시보드 영역 */}
//       <div className="flex-1">
//         {viewType === "gridView" ? 
//           <GridView selectedCall={selectedCall} /> : 
//           <ChartView selectedCall={selectedCall} />
//         }
//       </div>

//       {/* 사용 시간 팝업 */}
//       <UsageTimePopup 
//         campaignIdList={usageTimePopupState.campaignIdList}
//         dialKindList={usageTimePopupState.dialKindList}
//         isOpen={usageTimePopupState.isOpen}
//         onClose={() => setUsageTimePopupState((prev) => ({ ...prev, isOpen: false }))}
//       />
//     </div>
//   );
// };

// export default CampaignMonitorDashboard;

import React, { useState, useEffect, useCallback } from "react";
import { useMainStore } from '@/store';
import TitleWrap from "@/components/shared/TitleWrap";
import { Table, TableRow, TableHeader, TableCell } from "@/components/ui/table-custom";
import { Label } from "@/components/ui/label";
import { CommonRadio, CommonRadioItem } from "@/components/shared/CommonRadio";
import { CommonButton } from "@/components/shared/CommonButton";
import UsageTimePopup from './UsageTimePopup';
import GridView from './GridView';
import ChartView from './ChartView';
import { MainDataResponse } from '@/features/auth/types/mainIndex';
import { useApiForCampaignProgressInformation } from '@/features/monitoring/hooks/useApiForCampaignProgressInformation';
import { CampaignProgressInformationResponseDataType } from '@/features/monitoring/types/monitoringIndex';

interface CallItem {
  id: number;
  label: string;
}

interface CampaignMonitorDashboardProps {
  campaignId?: string; // props로 캠페인 ID 직접 받기
}

type ViewType = "gridView" | "chartView";

const CampaignMonitorDashboard: React.FC<CampaignMonitorDashboardProps> = ({ campaignId }) => {
  // 상태 추가
  const [viewType, setViewType] = useState<ViewType>("gridView");
  const [selectedCall, setSelectedCall] = useState<CampaignProgressInformationResponseDataType | null>(null);
  
  // props로 전달받은 campaignId를 사용
  const numericCampaignId = campaignId ? Number(campaignId) : null;

  const { campaigns } = useMainStore();
  const [campaignInfo, setCampaignInfo] = useState<MainDataResponse | null>(null);
  const [dataList, setDataList] = useState<CampaignProgressInformationResponseDataType[]>([]);
  const [campaignIdList, setCampaignIdList] = useState<number[]>([]);
  const [usageTimePopupState, setUsageTimePopupState] = useState<{
    campaignIdList: number[];
    dialKindList: number[];
    isOpen: boolean;
  }>({
    campaignIdList: [],
    dialKindList: [],
    isOpen: false,
  });

  // 라디오 버튼 변경 핸들러
  const handleViewTypeChange = (value: string) => {
    setViewType(value as ViewType);
  };

  // 캠페인 진행 정보 API 호출 (useQuery 사용)
  const { 
    data: progressData, 
    isLoading, 
    isError,
    refetch,
    invalidateCache 
  } = useApiForCampaignProgressInformation({
    tenantId: 1,
    campaignId: numericCampaignId || 0
  });

  // 데이터 갱신 함수
  const refreshData = useCallback(() => {
    // invalidateCache 함수가 있으면 사용하고, 없으면 refetch 사용
    if (invalidateCache) {
      invalidateCache();
    } else {
      refetch();
    }
  }, [invalidateCache, refetch]);

  // 데이터가 변경될 때마다 처리
  useEffect(() => {
    if (progressData && progressData.progressInfoList) {
      const tempList = [...progressData.progressInfoList].sort((a, b) => a.reuseCnt - b.reuseCnt);
      setDataList(tempList);
      
      // 첫 번째 항목을 선택 (데이터가 있는 경우에만)
      // 마지막 항목 선택으로 변경 20250325
      if (tempList.length > 0 && !selectedCall) {
        setSelectedCall(tempList[tempList.length-1]);
      }else{
        
      }
      
      console.log("API 응답 데이터:", tempList);
    }
  }, [progressData, selectedCall]);

  // 컴포넌트 마운트 시 캠페인 정보 로드
  useEffect(() => {
    console.log("컴포넌트 마운트, 캠페인 ID:", numericCampaignId);
    
    if (numericCampaignId) {
      // 캠페인 정보 찾기
      if (campaigns && campaigns.length > 0) {
        const tempCampaign = campaigns.find(data => data.campaign_id === numericCampaignId);
        console.log("찾은 캠페인 정보:", tempCampaign);
        
        if (tempCampaign) {
          setCampaignInfo(tempCampaign);
          setCampaignIdList([numericCampaignId]);
        }
      }
    } else {
      console.warn("캠페인 ID가 없어 API 호출이 비활성화됩니다.");
    }
  }, [numericCampaignId, campaigns]);

  return (
    <div className="flex gap-4 w-full limit-width">
      {/* 왼쪽 설정 영역 */}
      <div className="flex flex-col gap-5 w-[230px] min-w-[230px]">
        <div>
          <TitleWrap title="캠페인 정보" />
          <Table>
            <tbody>
              <TableRow>
                <TableHeader className="w-[120px]">
                  <Label>캠페인 아이디</Label>
                </TableHeader>
                <TableCell>
                  <span className="text-sm">{campaignInfo?.campaign_id || numericCampaignId || ''}</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeader className="w-[120px]">
                  <Label>캠페인 이름</Label>
                </TableHeader>
                <TableCell>
                  <span className="text-sm">{campaignInfo?.campaign_name || ''}</span>
                </TableCell>
              </TableRow>
            </tbody>
          </Table>
        </div>

        <div>
          <TitleWrap title="표시방법" />
          <CommonRadio 
            className="flex gap-8 pl-4" 
            value={viewType} 
            onValueChange={handleViewTypeChange}
          >
            <div className="flex items-center space-x-2">
              <CommonRadioItem value="gridView" id="gridView" />
              <Label htmlFor="gridView">그리드형</Label>
            </div>
            <div className="flex items-center space-x-2">
              <CommonRadioItem value="chartView" id="chartView" />
              <Label htmlFor="chartView">차트형</Label>
            </div>
          </CommonRadio>
        </div>

        <div className="flex-1 h-full">
          <TitleWrap title="발신구분" />
          <div className="border rounded overflow-y-auto h-[calc(100%-20px)]">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {isLoading ? (
                  <tr>
                    <td className="p-4 text-center text-gray-500">로딩 중...</td>
                  </tr>
                ) : isError ? (
                  <tr>
                    <td className="p-4 text-center text-gray-500">데이터 로드 오류</td>
                  </tr>
                ) : dataList.length > 0 ? dataList.map((item, index) => (
                  <tr
                    key={item.reuseCnt}
                    onClick={() => setSelectedCall(item)}
                    className={`cursor-pointer hover:bg-[#FFFAEE] ${
                      selectedCall?.reuseCnt === item.reuseCnt ? "bg-[#FFFAEE]" : ""
                    }`}
                  >
                    <td className="border-b border-r px-3 py-1">
                      {index === 0 ? '최초발신' : index + '번째 재발신'}
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td className="p-4 text-center text-gray-500">데이터가 없습니다</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <CommonButton
            variant="outline"
            onClick={refreshData}
            disabled={isLoading}
          >
            새로고침
          </CommonButton>
          <CommonButton 
            onClick={() => 
              setUsageTimePopupState({
                ...usageTimePopupState,
                campaignIdList: campaignIdList,
                dialKindList: [selectedCall?.reuseCnt || 0],
                isOpen: true,
              })}
            disabled={!selectedCall}
          >
            사용 시간 보기
          </CommonButton>
        </div>
      </div>

      {/* 오른쪽 대시보드 영역 */}
      <div className="flex-1">
        {viewType === "gridView" ? 
          <GridView selectedCall={selectedCall} /> : 
          <ChartView selectedCall={selectedCall} />
        }
      </div>

      {/* 사용 시간 팝업 */}
      <UsageTimePopup 
        campaignIdList={usageTimePopupState.campaignIdList}
        dialKindList={usageTimePopupState.dialKindList}
        isOpen={usageTimePopupState.isOpen}
        onClose={() => setUsageTimePopupState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
};

export default CampaignMonitorDashboard;