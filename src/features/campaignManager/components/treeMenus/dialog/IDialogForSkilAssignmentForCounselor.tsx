"use client";

import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CustomCheckbox } from "@/components/shared/CustomCheckbox";
import { useAuthStore } from "@/store/authStore";
import { useApiForGetRelatedInfoForAssignSkilToCounselor } from "@/features/preferences/hooks/useApiForGetRelatedInfoForAssignSkilToCounselor";
import { useApiForDeleteCounselorsForSpecificSkill } from "@/features/campaignManager/hooks/useApiForDeleteCounselorsForSpecificSkill";
import { useApiForAddCounselorsForSpecificSkill } from "@/features/campaignManager/hooks/useApiForAddCounselorsForSpecificSkill";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { CounselorSkill } from "@/features/campaignManager/types/typeForCounselorSkill";
import CommonDialogForSideMenu from "@/components/shared/CommonDialog/CommonDialogForSideMenu";

interface IDialogForSkilAssignmentForCounselorProps {
  isOpen: boolean;
  onClose: () => void;
  counselorId: string;
  counselorName: string;
  tenantId: string;
}

export function IDialogForSkilAssignmentForCounselor({
  isOpen,
  onClose,
  counselorId,
  counselorName,
  tenantId
}: IDialogForSkilAssignmentForCounselorProps) {
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
  const [initialSkills, setInitialSkills] = useState<number[]>([]);
  const userId = useAuthStore((state) => state.id);

  console.log(`다이얼로그 열림 - 상담원 ID: ${counselorId}, 이름: ${counselorName}, 테넌트: ${tenantId}`);

  const { assignedSkills, assignableSkills, isLoading, error } = useApiForGetRelatedInfoForAssignSkilToCounselor(
    counselorId,
    Number(tenantId)
  );

  const deleteCounselorMutation = useApiForDeleteCounselorsForSpecificSkill(
    tenantId ?? "0"
  );

  const addCounselorMutation = useApiForAddCounselorsForSpecificSkill(
    tenantId ?? "0"
  );

  useEffect(() => {
    if ((assignedSkills?.result_data ?? []).length > 0) {
      const assignedSkillIds = assignedSkills?.result_data.flatMap((item) => item.skill_id) ?? [];
      setSelectedSkills(assignedSkillIds);
      setInitialSkills(assignedSkillIds);
    } else {
      // 할당된 스킬이 없을 경우 초기화
      setSelectedSkills([]);
      setInitialSkills([]);
    }
  }, [assignedSkills]);

  const handleSkillToggle = (skillId: number) => {
    setSelectedSkills((prev) => {
      const isCurrentlySelected = prev.includes(skillId);

      if (isCurrentlySelected) {
        console.log("📌 체크 해제된 스킬 정보:", {
          skillId: skillId,
          counselorId: counselorId,
        });

        deleteCounselorMutation.mutate({
          skillId: skillId,
          counselorIds: [counselorId]
        }, {
          onSuccess: () => {
            toast.success('스킬이 해제되었습니다.');
          }
        });
      } else {
        console.log("📌 체크된 스킬 정보:", {
          skillId: skillId,
          counselorId: counselorId,
        });

        if (prev.length >= 10) {
          toast.error('최대 10개의 스킬만 할당할 수 있습니다.');
          return prev;
        }

        addCounselorMutation.mutate({
          skillId: skillId,
          counselorIds: [counselorId]
        }, {
          onSuccess: () => {
            toast.success('스킬이 할당되었습니다.');
          }
        });
      }

      return isCurrentlySelected
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId];
    });
  };

  const handleCancel = () => {
    onClose();
  };

  const handleConfirm = () => {
    // 변경된 스킬 상태를 서버에 반영
    const skillsToAdd = selectedSkills.filter(skillId => !initialSkills.includes(skillId));
    const skillsToRemove = initialSkills.filter(skillId => !selectedSkills.includes(skillId));

    // 추가할 스킬 처리
    if (skillsToAdd.length > 0) {
      skillsToAdd.forEach(skillId => {
        addCounselorMutation.mutate({
          skillId,
          counselorIds: [counselorId]
        });
      });
    }

    // 제거할 스킬 처리
    if (skillsToRemove.length > 0) {
      skillsToRemove.forEach(skillId => {
        deleteCounselorMutation.mutate({
          skillId,
          counselorIds: [counselorId]
        });
      });
    }

    // 다이얼로그 닫기
    onClose();
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
          상담원에게 스킬을 할당 할 수 있는 창입니다.<br />
          체크 후 확인 버튼을 누르시면 체크된 스킬들이 일괄 할당됩니다.<br />
          (상담원에게 최대 10개 스킬까지만 할당 가능 합니다.)
        </div>

        <div className="max-h-[300px] overflow-y-auto border rounded">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16 text-center bg-[#F8F8F8] border-r text-[#333]" style={{ height: '30px' }}>선택</TableHead>
                <TableHead className="w-16 text-center bg-[#F8F8F8] border-r text-[#333]" style={{ height: '30px' }}>아이디</TableHead>
                <TableHead className="text-center bg-[#F8F8F8] text-[#333]" style={{ height: '30px' }}>이름</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignableSkills?.result_data.map((skill: CounselorSkill) => (
                <TableRow key={`${skill.tenant_id}-${skill.skill_id}`} className="custom-hover">
                  <TableCell className="text-center text-[#444]" style={{ height: '30px', padding: 0 }}>
                    <CustomCheckbox
                      checked={selectedSkills.includes(skill.skill_id)}
                      onCheckedChange={() => handleSkillToggle(skill.skill_id)}
                    />
                  </TableCell>
                  <TableCell className="text-center text-[#444]" style={{ height: '30px', padding: 0 }}>{skill.skill_id}</TableCell>
                  <TableCell className="text-center text-[#444]" style={{ height: '30px', padding: 0 }}>{skill.skill_name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          <Button
            onClick={handleConfirm}
            className="px-6 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm"
          >
            확인
          </Button>
          <Button
            variant="outline"
            onClick={handleCancel}
            className="px-6 py-1.5 border border-gray-300 rounded text-sm"
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
      title={`상담원 스킬 할당 - ${counselorName || ''}`}
    >
      {renderContent()}
    </CommonDialogForSideMenu>
  );
}