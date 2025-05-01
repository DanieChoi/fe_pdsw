"use client";

import React from "react";
import CustomAlert from "@/components/shared/layout/CustomAlert";
import { Play, CheckCircle, Info, FileText, AlertCircle, CheckSquare, XCircle, ArrowRight } from "lucide-react";

interface CampaignInfo {
  name: string;
  status: number;
}

interface Props {
  open: boolean;
  items: CampaignInfo[];
  onConfirm: () => void;
  onCancel: () => void;
}

const statusText = (flag?: number) => {
  switch (flag) {
    case 1:
      return {
        label: "시작",
        icon: <Play className="h-4 w-4" />,
        color: "text-emerald-600",
        bgColor: "bg-white",
      };
    case 2:
      return {
        label: "멈춤",
        icon: <Play className="h-4 w-4" />,
        color: "text-gray-600",
        bgColor: "bg-white",
      };
    case 3:
      return {
        label: "중지",
        icon: <Play className="h-4 w-4" />,
        color: "text-rose-600",
        bgColor: "bg-white",
      };
    default:
      return {
        label: "알수없음",
        icon: null,
        color: "text-gray-400",
        bgColor: "bg-white"
      };
  }
};

// 유효성 검사 결과 메시지 (실제 로직에 맞게 수정 필요)
const getValidationResult = (campaignInfo: CampaignInfo, validationType: number) => {
  // 이미 실행 중인 캠페인은 모든 유효성 검사를 통과한 것으로 가정
  if (campaignInfo.status === 1) {
    return {
      passed: true,
      message: "통과",
      icon: <CheckCircle className="h-4 w-4 text-emerald-500" />,
      color: "text-emerald-500"
    };
  }

  // 유효성 검사 유형별 결과 (예시)
  switch (validationType) {
    case 1: // 유효성검사1 - 상담사 배정 여부
      return Math.random() > 0.2 ? {
        passed: true,
        message: "통과",
        icon: <CheckCircle className="h-4 w-4 text-emerald-500" />,
        color: "text-emerald-500"
      } : {
        passed: false,
        message: "상담사 미배정",
        icon: <XCircle className="h-4 w-4 text-amber-500" />,
        color: "text-amber-500"
      };
    case 2: // 유효성검사2 - 스크립트 설정
      return Math.random() > 0.15 ? {
        passed: true,
        message: "통과",
        icon: <CheckCircle className="h-4 w-4 text-emerald-500" />,
        color: "text-emerald-500"
      } : {
        passed: false,
        message: "스크립트 누락",
        icon: <XCircle className="h-4 w-4 text-amber-500" />,
        color: "text-amber-500"
      };
    case 3: // 유효성검사3 - 고객 데이터 설정
      return Math.random() > 0.1 ? {
        passed: true,
        message: "통과",
        icon: <CheckCircle className="h-4 w-4 text-emerald-500" />,
        color: "text-emerald-500"
      } : {
        passed: false,
        message: "데이터 누락",
        icon: <XCircle className="h-4 w-4 text-rose-500" />,
        color: "text-rose-500"
      };
    default:
      return {
        passed: true,
        message: "확인 필요",
        icon: <Info className="h-4 w-4 text-blue-500" />,
        color: "text-blue-500"
      };
  }
};

const IConfirmPopupForMultiUpdateCampaignProgressToStart = ({
  open,
  items,
  onConfirm,
  onCancel,
}: Props) => {
  // 이미 실행 중인 캠페인과 그렇지 않은 캠페인 분류
  const alreadyRunningCampaigns = items.filter(item => item.status === 1);
  const notRunningCampaigns = items.filter(item => item.status !== 1);
  
  // 최대 10개만 미리보기, 나머지는 ... 처리
  const previewItems = items.slice(0, 10);
  const moreCount = items.length - previewItems.length;

  return (
    <CustomAlert
      isOpen={open}
      title={
        <div className="flex items-center justify-between w-full py-1 px-1 border-emerald-200">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-emerald-100">
              <Play className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold">캠페인 일괄 시작</h3>
            </div>
          </div>
        </div>
      }
      type="1"
      onClose={onConfirm}
      onCancel={onCancel}
      width="max-w-2xl"
      showButtons={true}
      isShowForCancelButton={true}
      message={
        <div className="space-y-5">
          {/* 유효성 검사 조건 텍스트 설명 */}
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="font-medium text-blue-700 mb-2">유효성 검사 조건</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-blue-500" />
                <span>유효성검사1: 상담사가 1명 이상 배정된 캠페인만 시작할 수 있습니다.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-blue-500" />
                <span>유효성검사2: 스크립트가 설정된 캠페인만 시작할 수 있습니다.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-blue-500" />
                <span>유효성검사3: 고객 데이터가 업로드된 캠페인만 시작할 수 있습니다.</span>
              </li>
            </ul>
          </div>
          
          {/* 캠페인 목록 */}
          <div className="mx-auto">
            <div className="mb-2 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-gray-500" />
                <span className="font-medium text-gray-700">캠페인 목록</span>
              </div>
              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                총 {items.length}개 선택됨
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-sm divide-y divide-gray-200">
                <thead>
                  <tr className="bg-emerald-100 bg-opacity-30">
                    <th className="px-2 py-3 font-medium text-gray-700 text-center w-8">#</th>
                    <th className="px-2 py-3 font-medium text-gray-700 text-left">캠페인명</th>
                    <th className="px-2 py-3 font-medium text-gray-700 text-center">상태 변경</th>
                    <th className="px-2 py-3 font-medium text-gray-700 text-center">유효성검사1</th>
                    <th className="px-2 py-3 font-medium text-gray-700 text-center">유효성검사2</th>
                    <th className="px-2 py-3 font-medium text-gray-700 text-center">유효성검사3</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {previewItems.map((info, idx) => {
                    const currentStatus = statusText(info.status);
                    const targetStatus = statusText(1); // 시작 상태로 변경
                    
                    // 각 유효성 검사 결과
                    const validation1 = getValidationResult(info, 1);
                    const validation2 = getValidationResult(info, 2);
                    const validation3 = getValidationResult(info, 3);
                    
                    return (
                      <tr key={info.name + idx} className="hover:bg-gray-50 transition-colors duration-150">
                        <td className="px-2 py-2 text-gray-500 text-center">{idx + 1}</td>
                        <td className="px-2 py-2 text-gray-700 text-left font-medium">{info.name}</td>
                        <td className="px-2 py-2">
                          {info.status !== 1 ? (
                            <div className="flex items-center justify-center gap-1">
                              {/* 현재 상태 */}
                              <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-md ${currentStatus.bgColor} ${currentStatus.color} text-xs font-medium`}>
                                {currentStatus.icon}
                                <span>{currentStatus.label}</span>
                              </div>
                              
                              {/* 화살표 */}
                              <ArrowRight className="h-3 w-3 text-gray-400" />
                              
                              {/* 변경될 상태 */}
                              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white text-emerald-600 text-xs font-medium border border-dashed border-emerald-600">
                                <Play className="h-3 w-3" />
                                <span>시작</span>
                              </div>
                            </div>
                          ) : (
                            <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium">
                              <Info className="h-3 w-3" />
                              <span>이미 실행 중</span>
                            </div>
                          )}
                        </td>
                        <td className="px-2 py-2 text-center">
                          <div className={`inline-flex items-center gap-1 ${validation1.color}`}>
                            {validation1.icon}
                            <span className="text-xs">{validation1.message}</span>
                          </div>
                        </td>
                        <td className="px-2 py-2 text-center">
                          <div className={`inline-flex items-center gap-1 ${validation2.color}`}>
                            {validation2.icon}
                            <span className="text-xs">{validation2.message}</span>
                          </div>
                        </td>
                        <td className="px-2 py-2 text-center">
                          <div className={`inline-flex items-center gap-1 ${validation3.color}`}>
                            {validation3.icon}
                            <span className="text-xs">{validation3.message}</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {moreCount > 0 && (
                    <tr className="bg-gray-50">
                      <td colSpan={6} className="px-4 py-3 text-center text-gray-500 font-medium">
                        외 {moreCount}개 캠페인이 선택됨
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* 경고 메시지 */}
          <div className="p-3 rounded-lg bg-amber-50 bg-opacity-50 flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            <p className="text-sm text-gray-700">
              <span className="font-medium">주의:</span> 캠페인을 시작하면 에이전트에게 즉시 호출이 할당될 수 있습니다.
            </p>
          </div>
          
          {/* 버튼 영역 */}
          <div className="flex justify-end items-center space-x-4 pt-2 border-t border-gray-200 mt-4">
            <button
              onClick={onCancel}
              className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              취소
            </button>
            
            <button
              onClick={onConfirm}
              className="px-5 py-2.5 text-sm font-medium text-white rounded-md transition-colors bg-emerald-600 hover:bg-emerald-700"
            >
              <div className="flex items-center">
                <Play className="h-4 w-4" />
                <span className="ml-2">일괄 시작 진행</span>
              </div>
            </button>
          </div>
        </div>
      }
    />
  );
};

export default IConfirmPopupForMultiUpdateCampaignProgressToStart;