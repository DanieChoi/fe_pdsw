"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Play, Loader2, CheckCircle, XCircle, AlertCircle, Calendar, Clock, Phone, Users, Award } from "lucide-react";
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
import { useApiForCampaignScheduleInfosForSystemAdmin } from "@/shared/hooks/campaign/useApiForCampaignScheduleInfosForSystemAdmin";
import { useApiForCampaignCallingNumberListForSystemAdmin } from "@/shared/hooks/campaign/useApiForCampaignCallingNumberListForSystemAdmin";
import { useApiForCampaignAgentListForSystemAdmin } from "@/shared/hooks/campaign/useApiForCampaignAgentListForSystemAdmin";
import { useApiForCampaignSkillListForSystemAdmin } from "@/shared/hooks/campaign/useApiForCampaignSkillListForSystemAdmin";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  console.log("items :::::::::::::", items);

  // 현재 시간
  const now = useMemo(() => new Date(), []);

  // 캠페인 아이디 배열 추출
  const campaignIds = useMemo(() => {
    return items
      .map(item => Number(item.campaign_id))
      .filter(id => !isNaN(id));
  }, [items]);

  // 캠페인 스케줄 정보 가져오기
  const { data: scheduleData, isLoading: isLoadingSchedule } = useApiForCampaignScheduleInfosForSystemAdmin({
    request: {
      filter: {
        campaign_id: {
          start: Math.min(...campaignIds, 1),
          end: Math.max(...campaignIds, 9999999)
        }
      }
    },
    enabled: campaignIds.length > 0 && internalOpen
  });

  // 캠페인 발신번호 정보 가져오기
  const { data: callingNumberData, isLoading: isLoadingCallingNumbers } = useApiForCampaignCallingNumberListForSystemAdmin({
    request: {
      filter: {
        campaign_id: {
          start: Math.min(...campaignIds, 1),
          end: Math.max(...campaignIds, 9999999)
        }
      }
    },
    enabled: campaignIds.length > 0 && internalOpen
  });

  // 캠페인 상담사 정보 가져오기
  const { data: agentData, isLoading: isLoadingAgents } = useApiForCampaignAgentListForSystemAdmin({
    request: {
      filter: {
        campaign_id: campaignIds
      }
    },
    enabled: campaignIds.length > 0 && internalOpen
  });

  // 캠페인 스킬 정보 가져오기
  const { data: skillData, isLoading: isLoadingSkills } = useApiForCampaignSkillListForSystemAdmin({
    request: {
      filter: {
        skill_id: {
          start: 1,
          end: 9999999
        }
      }
    },
    enabled: campaignIds.length > 0 && internalOpen
  });

  // 캠페인 스케줄 맵 생성
  const scheduleMap = useMemo(() => {
    const map = new Map();
    if (scheduleData?.result_data) {
      scheduleData.result_data.forEach(schedule => {
        map.set(schedule.campaign_id.toString(), schedule);
      });
    }
    return map;
  }, [scheduleData]);

  // 캠페인별 발신번호 맵 생성
  const callingNumberMap = useMemo(() => {
    const map = new Map<string, string[]>();

    if (callingNumberData?.result_data) {
      // 캠페인 ID별로 발신번호 그룹화
      callingNumberData.result_data.forEach(item => {
        const campaignId = item.campaign_id.toString();
        if (!map.has(campaignId)) {
          map.set(campaignId, []);
        }
        map.get(campaignId)?.push(item.calling_number);
      });
    }

    return map;
  }, [callingNumberData]);

  // 캠페인별 상담사 맵 생성
  const agentMap = useMemo(() => {
    const map = new Map<string, string[]>();

    if (agentData?.result_data) {
      agentData.result_data.forEach(item => {
        // agent_id를 string[]으로 변환하여 저장
        const agentIds = item.agent_id.map(id => id.toString());
        map.set(item.campaign_id.toString(), agentIds);
      });
    }

    return map;
  }, [agentData]);

  // 캠페인별 스킬 맵 생성
  const skillMap = useMemo(() => {
    const map = new Map<string, { id: number, name: string }[]>();

    if (skillData?.result_data) {
      // 각 캠페인에 할당된 스킬 정보를 매핑
      // 실제 데이터 구조에 맞게 변경해야 할 수 있음
      campaignIds.forEach(campaignId => {
        const campaignSkills = skillData.result_data.filter(skill => 
          // 이 부분은 API 응답 구조에 따라 수정 필요
          // 여기서는 예시로 모든 스킬을 각 캠페인에 연결
          true
        );
        
        map.set(campaignId.toString(), campaignSkills.map(skill => ({
          id: skill.skill_id,
          name: skill.skill_name || `Skill ${skill.skill_id}`
        })));
      });
    }
    
    return map;
  }, [skillData, campaignIds]);

  // 날짜 형식 변환 함수
  const formatDate = (dateStr: string) => {
    if (!dateStr || dateStr.length !== 8) return "-";
    const year = dateStr.slice(0, 4);
    const month = dateStr.slice(4, 6);
    const day = dateStr.slice(6, 8);
    return `${year}.${month}.${day}`;
  };

  // 시간 형식 변환 함수
  const formatTime = (timeArr: string[]) => {
    if (!timeArr || !timeArr.length) return "-";

    return timeArr.map(time => {
      if (!time || time.length !== 4) return time;
      const hour = time.slice(0, 2);
      const minute = time.slice(2, 4);
      return `${hour}:${minute}`;
    }).join(", ");
  };

  // 날짜 및 시간 문자열을 Date 객체로 변환
  const parseDateTime = (dateStr: string, timeStr: string) => {
    if (!dateStr || dateStr.length !== 8 || !timeStr || timeStr.length !== 4) {
      return null;
    }

    const year = parseInt(dateStr.slice(0, 4));
    const month = parseInt(dateStr.slice(4, 6)) - 1; // JavaScript 월은 0부터 시작
    const day = parseInt(dateStr.slice(6, 8));
    const hour = parseInt(timeStr.slice(0, 2));
    const minute = parseInt(timeStr.slice(2, 4));

    return new Date(year, month, day, hour, minute);
  };

  // 시작 시간 유효성 검사
  const isStartTimeValid = (schedule: any) => {
    if (!schedule || !schedule.start_date || !schedule.start_time || schedule.start_time.length === 0) {
      return false;
    }

    const startDateTime = parseDateTime(schedule.start_date, schedule.start_time[0]);
    if (!startDateTime) return false;

    return startDateTime <= now;
  };

  // 종료 시간 유효성 검사
  const isEndTimeValid = (schedule: any) => {
    if (!schedule || !schedule.end_date || !schedule.end_time || schedule.end_time.length === 0) {
      return false;
    }

    const endDateTime = parseDateTime(schedule.end_date, schedule.end_time[0]);
    if (!endDateTime) return false;

    return endDateTime >= now;
  };

  // 발신번호 유효성 검사
  const hasCallingNumbers = (campaignId: string) => {
    const numbers = callingNumberMap.get(campaignId);
    return numbers && numbers.length > 0;
  };

  // 상담사 유효성 검사 (상담사가 1명 이상 있는지)
  const hasAgents = (campaignId: string) => {
    const agents = agentMap.get(campaignId);
    return agents && agents.length > 0;
  };

  // 스킬 유효성 검사 (스킬이 1개 이상 있는지)
  const hasSkills = (campaignId: string) => {
    const skills = skillMap.get(campaignId);
    return skills && skills.length > 0;
  };

  // 캠페인 유효성 검사 (시작/종료 시간, 발신번호, 상담사, 스킬)
  const isCampaignValid = (schedule: any, campaignId: string) => {
    return isStartTimeValid(schedule) &&
      isEndTimeValid(schedule) &&
      hasCallingNumbers(campaignId) &&
      hasAgents(campaignId) &&
      hasSkills(campaignId);
  };

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

  // 테이블 로딩 여부
  const isLoading = isLoadingSchedule || isLoadingCallingNumbers || isLoadingAgents || isLoadingSkills;

  return (
    <Dialog open={internalOpen} onOpenChange={(open) => {
      if (!open && !isUpdating) handleCancel();
    }}>
      <DialogContent
        className="!w-[90%] lg:w-[80%] max-w-[1200px]"
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
                  <TableHead>발신 번호</TableHead>
                  <TableHead>상담사</TableHead>
                  <TableHead>스킬</TableHead>
                  <TableHead>시작 날짜</TableHead>
                  <TableHead>종료 날짜</TableHead>
                  <TableHead>유효성</TableHead>
                  <TableHead>현재 상태</TableHead>
                  {updateCompleted && (
                    <TableHead>결과</TableHead>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={updateCompleted ? 9 : 8} className="text-center py-4">
                      <Loader2 className="h-5 w-5 animate-spin mx-auto" />
                      <div className="mt-2 text-sm text-gray-500">정보를 불러오는 중...</div>
                    </TableCell>
                  </TableRow>
                ) : (
                  items.map((item, index) => {
                    const campaignId = item.campaign_id?.toString() || '';
                    const result = campaignResults.get(campaignId);
                    const schedule = scheduleMap.get(campaignId);
                    const callingNumbers = callingNumberMap.get(campaignId) || [];
                    const agents = agentMap.get(campaignId) || [];
                    const skills = skillMap.get(campaignId) || [];

                    const hasNumbers = callingNumbers.length > 0;
                    const hasAgentsList = agents.length > 0;
                    const hasSkillsList = skills.length > 0;
                    const startValid = isStartTimeValid(schedule);
                    const endValid = isEndTimeValid(schedule);
                    const isValid = isCampaignValid(schedule, campaignId);

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
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex items-center">
                                  <Phone className="h-4 w-4 text-gray-500 mr-1" />
                                  <span className="text-sm">{callingNumbers.length}개</span>
                                  {hasNumbers ? (
                                    <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                                  ) : (
                                    <XCircle className="h-4 w-4 text-red-500 ml-2" />
                                  )}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                {hasNumbers ? (
                                  <div>
                                    <p className="font-medium mb-1">등록된 발신번호 ({callingNumbers.length}개)</p>
                                    <ul className="text-xs space-y-1">
                                      {callingNumbers.slice(0, 5).map((number: string, idx) => (
                                        <li key={idx}>• {number}</li>
                                      ))}
                                      {callingNumbers.length > 5 && (
                                        <li>• 외 {callingNumbers.length - 5}개</li>
                                      )}
                                    </ul>
                                  </div>
                                ) : (
                                  <p className="text-red-600">발신번호가 등록되지 않았습니다.</p>
                                )}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TableCell>
                        <TableCell>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex items-center">
                                  <Users className="h-4 w-4 text-gray-500 mr-1" />
                                  <span className="text-sm">{agents.length}명</span>
                                  {hasAgentsList ? (
                                    <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                                  ) : (
                                    <XCircle className="h-4 w-4 text-red-500 ml-2" />
                                  )}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                {hasAgentsList ? (
                                  <div>
                                    <p className="font-medium mb-1">등록된 상담사 ({agents.length}명)</p>
                                    <ul className="text-xs space-y-1">
                                      {agents.slice(0, 5).map((agent: string, idx) => (
                                        <li key={idx}>• {agent}</li>
                                      ))}
                                      {agents.length > 5 && (
                                        <li>• 외 {agents.length - 5}명</li>
                                      )}
                                    </ul>
                                  </div>
                                ) : (
                                  <p className="text-red-600">등록된 상담사가 없습니다.</p>
                                )}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TableCell>
                        <TableCell>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex items-center">
                                  <Award className="h-4 w-4 text-gray-500 mr-1" />
                                  <span className="text-sm">{skills.length}개</span>
                                  {hasSkillsList ? (
                                    <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                                  ) : (
                                    <XCircle className="h-4 w-4 text-red-500 ml-2" />
                                  )}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                {hasSkillsList ? (
                                  <div>
                                    <p className="font-medium mb-1">등록된 스킬 ({skills.length}개)</p>
                                    <ul className="text-xs space-y-1">
                                      {skills.slice(0, 5).map((skill, idx) => (
                                        <li key={idx}>• {skill.name}</li>
                                      ))}
                                      {skills.length > 5 && (
                                        <li>• 외 {skills.length - 5}개</li>
                                      )}
                                    </ul>
                                  </div>
                                ) : (
                                  <p className="text-red-600">등록된 스킬이 없습니다.</p>
                                )}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TableCell>
                        <TableCell>
                          {schedule ? (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div className="flex items-center">
                                    <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                                    <span>{formatDate(schedule.start_date)}</span>
                                    <Clock className="h-4 w-4 text-gray-500 ml-2 mr-1" />
                                    <span className="text-xs">{formatTime(schedule.start_time)}</span>
                                    {startValid ? (
                                      <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                                    ) : (
                                      <XCircle className="h-4 w-4 text-red-500 ml-2" />
                                    )}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>시작 시간: {formatTime(schedule.start_time)}</p>
                                  {startValid ? (
                                    <p className="text-green-600 text-xs mt-1">유효: 시작 시간이 현재 시간 이전입니다.</p>
                                  ) : (
                                    <p className="text-red-600 text-xs mt-1">유효하지 않음: 시작 시간이 현재 시간 이후입니다.</p>
                                  )}
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          ) : (
                            <span className="text-gray-400 text-xs">정보 없음</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {schedule ? (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div className="flex items-center">
                                    <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                                    <span>{formatDate(schedule.end_date)}</span>
                                    <Clock className="h-4 w-4 text-gray-500 ml-2 mr-1" />
                                    <span className="text-xs">{formatTime(schedule.end_time)}</span>
                                    {endValid ? (
                                      <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                                    ) : (
                                      <XCircle className="h-4 w-4 text-red-500 ml-2" />
                                    )}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>종료 시간: {formatTime(schedule.end_time)}</p>
                                  {endValid ? (
                                    <p className="text-green-600 text-xs mt-1">유효: 종료 시간이 현재 시간 이후입니다.</p>
                                  ) : (
                                    <p className="text-red-600 text-xs mt-1">유효하지 않음: 종료 시간이 현재 시간 이전입니다.</p>
                                  )}
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          ) : (
                            <span className="text-gray-400 text-xs">정보 없음</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div>
                                  {schedule ? (
                                    isValid ? (
                                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        유효함
                                      </Badge>
                                    ) : (
                                      <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
                                        <XCircle className="h-4 w-4 text-red-500 mr-2" />
                                        유효하지 않음
                                      </Badge>
                                    )
                                  ) : (
                                    <span className="text-gray-400 text-xs">정보 없음</span>
                                  )}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                {schedule ? (
                                  isValid ? (
                                    <div>
                                      <p className="text-green-600 font-medium">모든 조건 충족</p>
                                      <ul className="mt-1 text-xs space-y-1">
                                        <li className="text-green-600">• 발신번호가 등록되어 있습니다.</li>
                                        <li className="text-green-600">• 상담사가 등록되어 있습니다.</li>
                                        <li className="text-green-600">• 스킬이 등록되어 있습니다.</li>
                                        <li className="text-green-600">• 시작 시간이 현재 시간 이전입니다.</li>
                                        <li className="text-green-600">• 종료 시간이 현재 시간 이후입니다.</li>
                                      </ul>
                                    </div>
                                  ) : (
                                    <div>
                                      <p className="text-red-600 font-medium">일부 조건 미충족</p>
                                      <ul className="mt-1 text-xs">
                                        {!hasNumbers && <li className="text-red-600">• 발신번호가 등록되지 않았습니다.</li>}
                                        {!hasAgentsList && <li className="text-red-600">• 상담사가 등록되지 않았습니다.</li>}
                                        {!hasSkillsList && <li className="text-red-600">• 스킬이 등록되지 않았습니다.</li>}
                                        {!startValid && <li className="text-red-600">• 시작 시간이 현재 시간 이후입니다.</li>}
                                        {!endValid && <li className="text-red-600">• 종료 시간이 현재 시간 이전입니다.</li>}
                                      </ul>
                                    </div>
                                  )
                                ) : (
                                  <p>캠페인 정보를 찾을 수 없습니다.</p>
                                )}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
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
                  })
                )}
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