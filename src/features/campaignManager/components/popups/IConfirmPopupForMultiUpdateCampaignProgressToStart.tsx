
// "use client";

// import React, { useState, useEffect, Fragment } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { Play, Loader2, CheckCircle, XCircle, AlertCircle } from "lucide-react";

// // Headless UI가 프로젝트에 설치되어 있는지 확인하세요:
// // npm install @headlessui/react
// // 또는
// // yarn add @headlessui/react

// interface Campaign {
//   campaign_id?: string | number;
//   name?: string;
//   status?: number;
//   [key: string]: any;
// }

// interface Props {
//   open: boolean;
//   items: Campaign[];
//   onConfirm: () => Promise<any>;
//   onCancel: () => void;
// }

// interface CampaignResult {
//   campaignId: string;
//   success: boolean;
//   response?: {
//     result_code: number;
//     result_msg: string;
//     reason_code: number;
//   };
// }

// interface UpdateResult {
//   success: boolean;
//   message?: string;
//   totalCount?: number;
//   successCount?: number;
//   failCount?: number;
//   results?: CampaignResult[];
// }

// const IConfirmPopupForMultiUpdateCampaignProgressToStart = ({
//   open,
//   items,
//   onConfirm,
//   onCancel,
// }: Props) => {
//   // 상태 관리
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [updateCompleted, setUpdateCompleted] = useState(false);
//   const [updateResult, setUpdateResult] = useState<UpdateResult | null>(null);
//   const [campaignResults, setCampaignResults] = useState<Map<string, CampaignResult>>(new Map());
  
//   // 강제 표시 방식: 한번 열리면 내부에서 닫기 버튼 클릭 전까지 절대 닫히지 않음
//   const [internalOpen, setInternalOpen] = useState(false);
  
//   // 컴포넌트 초기화 시 또는 open prop이 true로 바뀔 때만 모달 열기
//   useEffect(() => {
//     if (open) {
//       setInternalOpen(true);
//       // 결과 초기화
//       setCampaignResults(new Map());
//       setUpdateResult(null);
//       setUpdateCompleted(false);
//     }
//     // open이 false가 되어도 internalOpen은 변경하지 않음
//   }, [open]);

//   // 배경 클릭 방지
//   const stopPropagation = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   // 업데이트 함수 - 원본 함수와 동일하게 이벤트 파라미터 추가 및 전파 중지
//   const handleUpdate = async (e: React.MouseEvent) => {
//     // 이벤트 전파 중단
//     e.preventDefault();
//     e.stopPropagation();
    
//     if (isUpdating) return;
//     setIsUpdating(true);
    
//     try {
//       console.log("API 호출 시작");
//       const result = await onConfirm();
//       console.log("API 호출 완료, 결과 처리 시작:", result);
      
//       // 결과 처리 - result_code가 -1인 경우 실패로 간주
//       if (result && result.results && Array.isArray(result.results)) {
//         // 결과 처리를 위한 수정된 데이터
//         let successCount = 0;
//         let failCount = 0;
        
//         // 결과 배열을 수정하여 result_code를 기반으로 success 상태를 업데이트
//         const updatedResults = result.results.map((item: CampaignResult) => {
//           // result_code가 -1이면 실패로 처리
//           const isSuccess = !(item.response && item.response.result_code === -1);
          
//           if (isSuccess) {
//             successCount++;
//           } else {
//             failCount++;
//           }
          
//           return {
//             ...item,
//             success: isSuccess
//           };
//         });
        
//         // 업데이트된 결과로 상태 업데이트
//         const updatedResult = {
//           ...result,
//           results: updatedResults,
//           successCount: successCount,
//           failCount: failCount,
//           totalCount: updatedResults.length
//         };
        
//         setUpdateResult(updatedResult);
        
//         // 결과 맵 생성
//         const resultMap = new Map<string, CampaignResult>();
//         updatedResults.forEach((item: CampaignResult) => {
//           if (item && item.campaignId) {
//             resultMap.set(item.campaignId.toString(), item);
//           }
//         });
//         setCampaignResults(resultMap);
        
//         // 디버깅 - 매핑된 결과 확인
//         console.log("결과 맵 생성 완료:", resultMap);
//         items.forEach(item => {
//           const campaignId = item.campaign_id?.toString() || '';
//           console.log(`캠페인 ID ${campaignId}에 대한 결과:`, resultMap.get(campaignId));
//         });
//       } else {
//         // 결과가 형식에 맞지 않는 경우
//         setUpdateResult({
//           success: false,
//           message: "응답 형식이 올바르지 않습니다.",
//           totalCount: 0,
//           successCount: 0,
//           failCount: 0
//         });
//       }
      
//       setUpdateCompleted(true);
//       console.log("업데이트 완료, 결과 표시됨");
//     } catch (error) {
//       console.error("업데이트 오류:", error);
//       setUpdateResult({
//         success: false,
//         message: error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다.",
//         totalCount: 0,
//         successCount: 0,
//         failCount: 0
//       });
//       setUpdateCompleted(true);
//     } finally {
//       setIsUpdating(false);
//     }
//   };

//   // 닫기 함수 (명시적인 닫기 버튼 클릭 시에만 호출) - 원본과 동일하게 이벤트 파라미터 추가
//   const handleCancel = (e?: React.MouseEvent) => {
//     if (e) {
//       e.preventDefault();
//       e.stopPropagation();
//     }
    
//     // 업데이트 중이면 무시
//     if (isUpdating) {
//       return;
//     }
    
//     // 내부 상태를 먼저 변경하여 렌더링 사이클 분리
//     setInternalOpen(false);
    
//     // 약간의 지연 후 부모 컴포넌트에 닫힘을 알림
//     // 이렇게 하면 모든 상태 변경이 완료된 후 onCancel이 호출됨
//     requestAnimationFrame(() => {
//       onCancel();
//     });
//   };

//   // 결과 상태에 따른 스타일 결정
//   const getStatusBadgeStyle = (success: boolean) => {
//     return success
//       ? "bg-green-100 text-green-800 border border-green-200"
//       : "bg-red-100 text-red-800 border border-red-200";
//   };

//   // 결과 코드에 따른 메시지
//   const getStatusMessage = (item: CampaignResult | undefined) => {
//     if (!item) return "알 수 없음";
    
//     if (item.response && item.response.result_msg) {
//       return item.response.result_msg;
//     }
    
//     return item.success ? "성공" : "실패";
//   };

//   return (
//     <Transition show={internalOpen} as={Fragment}>
//       <Dialog 
//         as="div" 
//         className="fixed inset-0 z-[9999] overflow-y-auto"
//         onClose={() => {/* 배경 클릭 시 닫히지 않도록 방지 */}}
//       >
//         <div className="min-h-screen px-4 text-center" onClick={stopPropagation} onMouseDown={stopPropagation}>
//           {/* 배경 오버레이 */}
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black/50" />
//           </Transition.Child>

//           {/* 모달 중앙 정렬을 위한 요소 */}
//           <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
          
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0 scale-95"
//             enterTo="opacity-100 scale-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100 scale-100"
//             leaveTo="opacity-0 scale-95"
//           >
//             <div 
//               className="inline-block w-[800px] my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-lg" 
//               onClick={stopPropagation}
//               onMouseDown={stopPropagation}
//             >
//               {/* 헤더 - 버튼을 제거하고 심플하게 유지 */}
//               <div className="bg-[#AAA] px-4 py-2 border-b flex items-center">
//                 <div className="p-2 rounded-full bg-emerald-100 mr-3">
//                   <Play className="h-5 w-5 text-emerald-600" />
//                 </div>
//                 <h3 className="text-lg font-bold">
//                   캠페인 일괄 시작
//                 </h3>
//               </div>
              
//               {/* 본문 */}
//               <div className="p-4 space-y-5">
//                 {/* 업데이트 안내 텍스트 - 버튼을 이 영역 오른쪽에 배치 */}
//                 <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 flex justify-between items-start">
//                   <div className="flex items-start">
//                     <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
//                     <div>
//                       <p className="text-sm text-blue-800">
//                         {updateCompleted 
//                           ? "캠페인 일괄 시작 작업이 완료되었습니다."
//                           : "선택하신 캠페인을 일괄적으로 시작 상태로 변경합니다."}
//                       </p>
//                       {!updateCompleted && (
//                         <p className="mt-1 text-xs text-blue-600">
//                           총 {items.length}개의 캠페인이 선택되었습니다.
//                         </p>
//                       )}
//                       {updateCompleted && updateResult && (
//                         <div className="mt-2 text-sm">
//                           <div className="flex items-center gap-2">
//                             <span className="font-medium">총 {updateResult.totalCount}개 중</span>
//                             <span className="px-2 py-0.5 rounded bg-green-100 text-green-800 text-xs">
//                               성공: {updateResult.successCount}개
//                             </span>
//                             {updateResult.failCount && updateResult.failCount > 0 && (
//                               <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 text-xs">
//                                 실패: {updateResult.failCount}개
//                               </span>
//                             )}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
                  
//                   {/* 일괄 시작 진행 버튼 - 테두리 검은색으로 변경 */}
//                   {!updateCompleted && (
//                     <button
//                       onClick={handleUpdate}
//                       disabled={isUpdating}
//                       className={`px-4 py-2 font-medium rounded-md transition-colors border-2 ${
//                         isUpdating 
//                           ? 'border-gray-400 text-gray-400' 
//                           : 'border-black text-emerald-600 hover:bg-emerald-50'
//                       }`}
//                     >
//                       <div className="flex items-center">
//                         {isUpdating ? (
//                           <Loader2 className="h-4 w-4 animate-spin mr-2" />
//                         ) : (
//                           <Play className="h-4 w-4 mr-2" />
//                         )}
//                         <span>캠페인 시작</span>
//                       </div>
//                     </button>
//                   )}
//                 </div>

//                 {/* 캠페인 목록 테이블 */}
//                 <div className="mx-auto">
//                   <div className="border rounded-lg overflow-hidden">
//                     <table className="min-w-full divide-y divide-gray-200">
//                       <thead className="bg-gray-50">
//                         <tr>
//                           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             캠페인 정보
//                           </th>
//                           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             현재 상태
//                           </th>
//                           {updateCompleted && (
//                             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                               결과
//                             </th>
//                           )}
//                         </tr>
//                       </thead>
//                       <tbody className="bg-white divide-y divide-gray-200">
//                         {items.map((item, index) => {
//                           const campaignId = item.campaign_id?.toString() || '';
//                           const result = campaignResults.get(campaignId);
//                           return (
//                             <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
//                               <td className="px-6 py-2 whitespace-nowrap">
//                                 <div className="flex items-center">
//                                   <div className="text-sm font-medium text-gray-900">
//                                     {item.name}
//                                   </div>
//                                   <div className="ml-2 text-xs text-gray-500">
//                                     ({campaignId})
//                                   </div>
//                                 </div>
//                               </td>
//                               <td className="px-6 py-2 whitespace-nowrap">
//                                 <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
//                                   {item.status === 1 ? "시작" : item.status === 2 ? "대기" : item.status === 3 ? "중지" : "상태 없음"}
//                                 </span>
//                               </td>
//                               {updateCompleted && (
//                                 <td className="px-6 py-2 whitespace-nowrap">
//                                   {result ? (
//                                     <div className="flex items-center">
//                                       {result.success ? (
//                                         <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                                       ) : (
//                                         <XCircle className="h-4 w-4 text-red-500 mr-2" />
//                                       )}
//                                       <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeStyle(result.success)}`}>
//                                         {getStatusMessage(result)}
//                                       </span>
//                                     </div>
//                                   ) : (
//                                     <span className="text-gray-400 text-xs">정보 없음</span>
//                                   )}
//                                 </td>
//                               )}
//                             </tr>
//                           );
//                         })}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>

//                 {/* 경고 메시지 */}
//                 <div className="p-3 rounded-lg bg-amber-50 bg-opacity-50 flex items-center gap-3">
//                   <AlertCircle className="h-5 w-5 text-amber-500" />
//                   <p className="text-xs text-amber-800">
//                     {updateCompleted
//                       ? "일괄 처리 작업이 완료되었습니다. 결과를 확인하고 필요한 경우 개별적으로 재시도해 주세요."
//                       : "캠페인을 일괄 시작하면 즉시 적용되며, 실행 중인 다른 작업에 영향을 줄 수 있습니다."}
//                   </p>
//                 </div>

//                 {/* 버튼 영역 */}
//                 <div className="flex justify-end items-center space-x-4 pt-2 border-t border-gray-200 mt-4">
//                   <button
//                     onClick={handleCancel}
//                     disabled={isUpdating}
//                     className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
//                   >
//                     {updateCompleted ? "닫기" : "취소"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </Transition.Child>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// };

// export default IConfirmPopupForMultiUpdateCampaignProgressToStart;

"use client";

import React, { useState, useEffect } from "react";
import { Play, Loader2, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface Campaign {
  campaign_id?: string | number;
  name?: string;
  status?: number;
  [key: string]: any;
}

interface Props {
  open: boolean;
  items: Campaign[];
  onConfirm: () => Promise<any>;
  onCancel: () => void;
}

interface CampaignResult {
  campaignId: string;
  success: boolean;
  response?: {
    result_code: number;
    result_msg: string;
    reason_code: number;
  };
}

interface UpdateResult {
  success: boolean;
  message?: string;
  totalCount?: number;
  successCount?: number;
  failCount?: number;
  results?: CampaignResult[];
}

const CampaignStartModal = ({
  open,
  items,
  onConfirm,
  onCancel,
}: Props) => {
  // 상태 관리
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateCompleted, setUpdateCompleted] = useState(false);
  const [updateResult, setUpdateResult] = useState<UpdateResult | null>(null);
  const [campaignResults, setCampaignResults] = useState<Map<string, CampaignResult>>(new Map());
  
  // 내부 상태 관리
  const [internalOpen, setInternalOpen] = useState(false);
  
  // open prop이 true로 바뀔 때만 모달 열기
  useEffect(() => {
    if (open) {
      setInternalOpen(true);
      // 결과 초기화
      setCampaignResults(new Map());
      setUpdateResult(null);
      setUpdateCompleted(false);
    }
  }, [open]);

  // 업데이트 함수
  const handleUpdate = async () => {
    if (isUpdating) return;
    setIsUpdating(true);
    
    try {
      console.log("API 호출 시작");
      const result = await onConfirm();
      console.log("API 호출 완료, 결과 처리 시작:", result);
      
      // 결과 처리
      if (result && result.results && Array.isArray(result.results)) {
        let successCount = 0;
        let failCount = 0;
        
        const updatedResults = result.results.map((item: CampaignResult) => {
          const isSuccess = !(item.response && item.response.result_code === -1);
          
          if (isSuccess) {
            successCount++;
          } else {
            failCount++;
          }
          
          return {
            ...item,
            success: isSuccess
          };
        });
        
        const updatedResult = {
          ...result,
          results: updatedResults,
          successCount: successCount,
          failCount: failCount,
          totalCount: updatedResults.length
        };
        
        setUpdateResult(updatedResult);
        
        // 결과 맵 생성
        const resultMap = new Map<string, CampaignResult>();
        updatedResults.forEach((item: CampaignResult) => {
          if (item && item.campaignId) {
            resultMap.set(item.campaignId.toString(), item);
          }
        });
        setCampaignResults(resultMap);
      } else {
        setUpdateResult({
          success: false,
          message: "응답 형식이 올바르지 않습니다.",
          totalCount: 0,
          successCount: 0,
          failCount: 0
        });
      }
      
      setUpdateCompleted(true);
    } catch (error) {
      console.error("업데이트 오류:", error);
      setUpdateResult({
        success: false,
        message: error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다.",
        totalCount: 0,
        successCount: 0,
        failCount: 0
      });
      setUpdateCompleted(true);
    } finally {
      setIsUpdating(false);
    }
  };

  // 닫기 함수
  const handleCancel = () => {
    // 업데이트 중이면 무시
    if (isUpdating) return;
    
    // 내부 상태 변경
    setInternalOpen(false);
    
    // 약간의 지연 후 부모 컴포넌트에 닫힘을 알림
    setTimeout(() => {
      onCancel();
    }, 100);
  };

  // 결과 상태에 따른 뱃지 변형 결정
  const getStatusBadge = (success: boolean) => {
    return success ? (
      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
        성공
      </Badge>
    ) : (
      <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
        실패
      </Badge>
    );
  };

  // 결과 코드에 따른 메시지
  const getStatusMessage = (item: CampaignResult | undefined) => {
    if (!item) return "알 수 없음";
    
    if (item.response && item.response.result_msg) {
      return item.response.result_msg;
    }
    
    return item.success ? "성공" : "실패";
  };

  return (
    <Dialog open={internalOpen} onOpenChange={(open) => {
      if (!open && !isUpdating) handleCancel();
    }}>
      <DialogContent 
      className="!w-[80%] lg:w-[60%] max-w-[1000px]" 
      onInteractOutside={(e) => {
        // 바깥 클릭 시 모달이 닫히지 않도록
        if (isUpdating) e.preventDefault();
      }}>
        <DialogHeader>
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-emerald-100 mr-3">
              <Play className="h-5 w-5 text-emerald-600" />
            </div>
            <DialogTitle>캠페인 일괄 시작</DialogTitle>
          </div>
        </DialogHeader>

        {/* 본문 */}
        <div className="space-y-5">
          {/* 업데이트 안내 텍스트 */}
          <Alert className="bg-blue-50 border-blue-100">
            <div className="flex justify-between items-start w-full">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                <AlertDescription className="text-blue-800">
                  {updateCompleted 
                    ? "캠페인 일괄 시작 작업이 완료되었습니다."
                    : "선택하신 캠페인을 일괄적으로 시작 상태로 변경합니다."}
                  
                  {!updateCompleted && (
                    <p className="mt-1 text-xs text-blue-600">
                      총 {items.length}개의 캠페인이 선택되었습니다.
                    </p>
                  )}
                  
                  {updateCompleted && updateResult && (
                    <div className="mt-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">총 {updateResult.totalCount}개 중</span>
                        <span className="px-2 py-0.5 rounded bg-green-100 text-green-800 text-xs">
                          성공: {updateResult.successCount}개
                        </span>
                        {updateResult.failCount && updateResult.failCount > 0 && (
                          <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 text-xs">
                            실패: {updateResult.failCount}개
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </AlertDescription>
              </div>
              
              {/* 일괄 시작 진행 버튼 */}
              {!updateCompleted && (
                <Button
                  onClick={handleUpdate}
                  disabled={isUpdating}
                  className="border-2 border-black text-emerald-600 hover:bg-emerald-50"
                  variant="outline"
                >
                  <div className="flex items-center">
                    {isUpdating ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : (
                      <Play className="h-4 w-4 mr-2" />
                    )}
                    <span>캠페인 시작</span>
                  </div>
                </Button>
              )}
            </div>
          </Alert>

          {/* 캠페인 목록 테이블 */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>캠페인 정보</TableHead>
                  <TableHead>현재 상태</TableHead>
                  {updateCompleted && (
                    <TableHead>결과</TableHead>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item, index) => {
                  const campaignId = item.campaign_id?.toString() || '';
                  const result = campaignResults.get(campaignId);
                  return (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center">
                          <div className="font-medium">
                            {item.name}
                          </div>
                          <div className="ml-2 text-xs text-gray-500">
                            ({campaignId})
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-gray-100 text-gray-800">
                          {item.status === 1 ? "시작" : item.status === 2 ? "대기" : item.status === 3 ? "중지" : "상태 없음"}
                        </Badge>
                      </TableCell>
                      {updateCompleted && (
                        <TableCell>
                          {result ? (
                            <div className="flex items-center">
                              {result.success ? (
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              ) : (
                                <XCircle className="h-4 w-4 text-red-500 mr-2" />
                              )}
                              {getStatusBadge(result.success)}
                              <span className="ml-2 text-xs text-gray-600">
                                {getStatusMessage(result)}
                              </span>
                            </div>
                          ) : (
                            <span className="text-gray-400 text-xs">정보 없음</span>
                          )}
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>

          {/* 경고 메시지 */}
          <Alert variant="default" className="bg-amber-50 border-amber-100">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            <AlertDescription className="text-xs text-amber-800">
              {updateCompleted
                ? "일괄 처리 작업이 완료되었습니다. 결과를 확인하고 필요한 경우 개별적으로 재시도해 주세요."
                : "캠페인을 일괄 시작하면 즉시 적용되며, 실행 중인 다른 작업에 영향을 줄 수 있습니다."}
            </AlertDescription>
          </Alert>
        </div>

        {/* 버튼 영역 */}
        <DialogFooter>
          <Button
            onClick={handleCancel}
            disabled={isUpdating}
            variant="secondary"
          >
            {updateCompleted ? "닫기" : "취소"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CampaignStartModal;