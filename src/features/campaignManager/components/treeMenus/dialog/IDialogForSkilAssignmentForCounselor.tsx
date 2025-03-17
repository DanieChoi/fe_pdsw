"use client";

import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CustomCheckbox } from "@/components/shared/CustomCheckbox";
import { useAuthStore } from "@/store/authStore";
import { useApiForGetRelatedInfoForAssignSkilToCounselor } from "@/features/preferences/hooks/useApiForGetRelatedInfoForAssignSkilToCounselor";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { CounselorSkill } from "@/features/campaignManager/types/typeForCounselorSkill";
import CommonDialogForSideMenu from "@/components/shared/CommonDialog/CommonDialogForSideMenu";
import { useApiDeleteCounselorsFromSkills } from "@/features/campaignManager/hooks/useApiDeleteCounselorsFromSkills";
import { useApiBatchSkillAssignment } from "@/features/campaignManager/hooks/useApiBatchSkillAssignment";

interface IDialogForSkilAssignmentForCounselorProps {
  isOpen: boolean;
  onClose: () => void;
  counselorId: string;
  counselorName: string;
  tenantId: string;
  isUnassignment?: boolean;
  dialogTitle?: string;
}

export function IDialogForSkilAssignmentForCounselor({
  isOpen,
  onClose,
  counselorId,
  counselorName,
  tenantId,
  isUnassignment = false,
  dialogTitle
}: IDialogForSkilAssignmentForCounselorProps) {
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
  const [initialSkills, setInitialSkills] = useState<number[]>([]);
  const [isUnassignMode, setIsUnassignMode] = useState(false);
  const [pendingChanges, setPendingChanges] = useState<{
    added: number[];
    removed: number[];
  }>({ added: [], removed: [] });

  // isUnassignment prop이 변경될 때 isUnassignMode 상태 업데이트
  useEffect(() => {
    setIsUnassignMode(isUnassignment);
  }, [isUnassignment]);

  const { assignedSkills, assignableSkills, isLoading, error } = useApiForGetRelatedInfoForAssignSkilToCounselor(
    counselorId,
    Number(tenantId)
  );

  // 스킬 할당 및 해제 커스텀 훅 사용
  const addSkillsMutation = useApiBatchSkillAssignment(tenantId ?? "0");
  const deleteSkillsMutation = useApiDeleteCounselorsFromSkills(tenantId ?? "0");

  // 로딩 상태 통합
  const isProcessing = addSkillsMutation.isPending || deleteSkillsMutation.isPending;

  useEffect(() => {
    if ((assignedSkills?.result_data ?? []).length > 0) {
      const assignedSkillIds = assignedSkills?.result_data.flatMap((item) => item.skill_id) ?? [];
      setSelectedSkills(assignedSkillIds);
      setInitialSkills(assignedSkillIds);
      // 다이얼로그를 열 때마다 pending 변경사항 초기화
      setPendingChanges({ added: [], removed: [] });
    } else {
      setSelectedSkills([]);
      setInitialSkills([]);
      setPendingChanges({ added: [], removed: [] });
    }
  }, [assignedSkills]);

  const handleSkillToggle = (skillId: number) => {
    setSelectedSkills((prev) => {
      const isCurrentlySelected = prev.includes(skillId);
      
      // 최대 스킬 할당 개수 체크
      if (!isCurrentlySelected && prev.length >= 10 && !isUnassignMode) {
        toast.error("최대 10개의 스킬만 할당할 수 있습니다.");
        return prev;
      }

      // pending 변경사항 추적
      setPendingChanges(current => {
        if (isCurrentlySelected) {
          // 체크 해제: 이미 추가된 항목이면 added에서 제거, 원래 있던 항목이면 removed에 추가
          return {
            added: current.added.filter(id => id !== skillId),
            removed: initialSkills.includes(skillId) 
              ? [...current.removed, skillId]
              : current.removed
          };
        } else {
          // 체크: 이미 removed에 있으면 removed에서 제거, 원래 없던 항목이면 added에 추가
          return {
            added: !initialSkills.includes(skillId) 
              ? [...current.added, skillId]
              : current.added,
            removed: current.removed.filter(id => id !== skillId)
          };
        }
      });

      // 선택 상태 토글
      return isCurrentlySelected 
        ? prev.filter(id => id !== skillId) 
        : [...prev, skillId];
    });
  };

  const handleCancel = () => {
    onClose();
  };

  const handleConfirm = async () => {
    const { added, removed } = pendingChanges;
    
    if (added.length === 0 && removed.length === 0) {
      toast.info("변경된 사항이 없습니다.");
      onClose();
      return;
    }

    try {
      // 추가할 스킬이 있으면 배치 처리
      if (added.length > 0) {
        const addResult = await addSkillsMutation.mutateAsync({
          skillIds: added,
          counselorIds: [counselorId],
          tenantId,
          isUnassignment: false
        });
        
        if (addResult.success) {
          toast.success(`${added.length}개 스킬이 할당되었습니다.`);
        } else {
          toast.warning(`${addResult.successCount}개 스킬만 할당되었습니다. ${addResult.failedSkills.length}개 실패.`);
        }
      }
      
      // 제거할 스킬이 있으면 배치 처리
      if (removed.length > 0) {
        const removeResult = await deleteSkillsMutation.mutateAsync({
          skillIds: removed,
          counselorIds: [counselorId],
          tenantId
        });
        
        if (removeResult.success) {
          toast.success(`${removed.length}개 스킬이 해제되었습니다.`);
        } else {
          toast.warning(`${removeResult.successCount}개 스킬만 해제되었습니다. ${removeResult.failedSkills.length}개 실패.`);
        }
      }
      
      // 데이터 다시 불러오기 (React Query가 자동으로 무효화를 처리하지만, 명시적으로 호출할 수도 있음)
      onClose();
    } catch (error) {
      console.error("스킬 할당/해제 중 오류 발생:", error);
      toast.error("스킬 처리 중 오류가 발생했습니다.");
    }
  };

  const getConfirmButtonText = () => {
    const { added, removed } = pendingChanges;
    
    if (isUnassignMode) {
      return `스킬 해제 (${removed.length}개)`;
    } else if (added.length > 0 && removed.length > 0) {
      return `스킬 변경 (추가: ${added.length}, 해제: ${removed.length})`;
    } else if (added.length > 0) {
      return `스킬 할당 (${added.length}개)`;
    } else if (removed.length > 0) {
      return `스킬 해제 (${removed.length}개)`;
    }
    
    return isUnassignMode ? "스킬 해제" : "스킬 할당";
  };

  const renderContent = () => {
    if (error) {
      return <div className="text-red-500 p-4">Error: {error}</div>;
    }

    if (isLoading) {
      return <div className="p-4">데이터를 불러오는 중...</div>;
    }

    return (
      <div className="px-[20px] py-[15px]">
        <div className="text-sm text-[#333] mb-4">
          {isUnassignMode
            ? "할당된 스킬을 해제할 수 있습니다."
            : "상담원에게 스킬을 할당할 수 있습니다."}
          <br />
          체크 후 확인 버튼을 누르시면 선택한 작업이 적용됩니다.
        </div>

        <div className="max-h-[300px] overflow-y-auto border rounded">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16 text-center bg-[#F8F8F8] border-r text-[#333]">선택</TableHead>
                <TableHead className="w-16 text-center bg-[#F8F8F8] border-r text-[#333]">아이디</TableHead>
                <TableHead className="text-center bg-[#F8F8F8] text-[#333]">이름</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignableSkills?.result_data.map((skill: CounselorSkill) => {
                const isInitiallySelected = initialSkills.includes(skill.skill_id);
                const isCurrentlySelected = selectedSkills.includes(skill.skill_id);
                const hasChanged = isInitiallySelected !== isCurrentlySelected;
                
                return (
                  <TableRow 
                    key={`${skill.tenant_id}-${skill.skill_id}`} 
                    className={`custom-hover ${hasChanged ? 'bg-blue-50' : ''}`}
                  >
                    <TableCell className="text-center text-[#444]">
                      <CustomCheckbox
                        checked={selectedSkills.includes(skill.skill_id)}
                        onCheckedChange={() => handleSkillToggle(skill.skill_id)}
                        disabled={isProcessing}
                      />
                    </TableCell>
                    <TableCell className="text-center text-[#444]">{skill.skill_id}</TableCell>
                    <TableCell className="text-center text-[#444]">
                      {skill.skill_name}
                      {hasChanged && (
                        <span className="ml-2 text-xs text-blue-500">
                          {isCurrentlySelected ? '(추가 예정)' : '(해제 예정)'}
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          <Button
            onClick={handleConfirm}
            className="px-6 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm"
            disabled={isProcessing || (pendingChanges.added.length === 0 && pendingChanges.removed.length === 0)}
          >
            {isProcessing ? "처리 중..." : getConfirmButtonText()}
          </Button>
          <Button 
            variant="outline" 
            onClick={handleCancel} 
            className="px-6 py-1.5 border border-gray-300 rounded text-sm"
            disabled={isProcessing}
          >
            취소
          </Button>
        </div>
      </div>
    );
  };

  return (
    <CommonDialogForSideMenu 
      isOpen={isOpen} 
      onClose={onClose} 
      title={dialogTitle || `스킬 ${isUnassignMode ? "해제" : "할당"} - ${counselorName || ''}`}
    >
      {renderContent()}
    </CommonDialogForSideMenu>
  );
}