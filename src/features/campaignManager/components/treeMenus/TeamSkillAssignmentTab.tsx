"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useTabStore } from "@/store/tabStore";
import { CounselorSkill } from "../../types/typeForCounselorSkill";
import { useCounselorFilterStore } from "@/store/storeForSideMenuCounselorTab";
import { useApiForGetRelatedInfoForAssignSkilToCounselor } from "@/features/preferences/hooks/useApiForGetRelatedInfoForAssignSkilToCounselor";
import { useApiForDeleteCounselorsForSpecificSkill } from "@/features/campaignManager/hooks/useApiForDeleteCounselorsForSpecificSkill";
import { useApiForAddCounselorsForSpecificSkill } from "@/features/campaignManager/hooks/useApiForAddCounselorsForSpecificSkill";
import { X } from "lucide-react";
import { toast } from "react-toastify";

export function TeamSkillAssignmentTab() {
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
  const [initialSkills, setInitialSkills] = useState<number[]>([]);
  const removeTab = useTabStore((state) => state.removeTab);
  const activeTabKey = useTabStore((state) => state.activeTabKey);
  const { candidateMembersForSkilAssign } = useCounselorFilterStore();

  // 첫 번째 상담원의 테넌트 ID를 사용해 스킬 목록을 가져옴
  const firstCounselor = candidateMembersForSkilAssign[0];
  const tenantId = firstCounselor?.tenantId;

  const { assignedSkills, assignableSkills, isLoading, error } = useApiForGetRelatedInfoForAssignSkilToCounselor(
    firstCounselor?.counselorId ?? "",
    Number(tenantId)
  );

  const deleteCounselorMutation = useApiForDeleteCounselorsForSpecificSkill(tenantId ?? "0");
  const addCounselorMutation = useApiForAddCounselorsForSpecificSkill(tenantId ?? "0");

  useEffect(() => {
    if ((assignedSkills?.result_data ?? []).length > 0) {
      const assignedSkillIds = assignedSkills?.result_data.flatMap((item) => item.skill_id) ?? [];
      setSelectedSkills(assignedSkillIds);
      setInitialSkills(assignedSkillIds);
    }
  }, [assignedSkills]);

  const handleSkillToggle = (skillId: number) => {
    setSelectedSkills((prev) => {
      const isCurrentlySelected = prev.includes(skillId);
      
      // 모든 팀원들의 ID를 배열로 만듦
      const counselorIds = candidateMembersForSkilAssign.map(counselor => counselor.counselorId);

      if (isCurrentlySelected) {
        console.log("📌 체크 해제된 스킬 정보:", {
          skillId: skillId,
          counselorIds: counselorIds,
        });

        deleteCounselorMutation.mutate({
          skillId: skillId,
          counselorIds: counselorIds
        }, {
          onSuccess: () => {
            toast.success('스킬이 해제되었습니다.');
          }
        });
      } else {
        console.log("📌 체크된 스킬 정보:", {
          skillId: skillId,
          counselorIds: counselorIds,
        });

        addCounselorMutation.mutate({
          skillId: skillId,
          counselorIds: counselorIds
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
    if (activeTabKey) {
      removeTab(601, activeTabKey);
    }
  };

  const handleConfirm = () => {
    const skillsToAdd = selectedSkills.filter(skillId => !initialSkills.includes(skillId));
    const skillsToRemove = initialSkills.filter(skillId => !selectedSkills.includes(skillId));
    const counselorIds = candidateMembersForSkilAssign.map(counselor => counselor.counselorId);

    // 추가할 스킬 처리
    if (skillsToAdd.length > 0) {
      skillsToAdd.forEach(skillId => {
        addCounselorMutation.mutate({
          skillId,
          counselorIds
        });
      });
    }

    // 제거할 스킬 처리
    if (skillsToRemove.length > 0) {
      skillsToRemove.forEach(skillId => {
        deleteCounselorMutation.mutate({
          skillId,
          counselorIds
        });
      });
    }

    if (activeTabKey) {
      removeTab(601, activeTabKey);
    }
  };

  if (error) {
    return (
      <div className="fixed top-[100px] left-[50px] z-50">
        <Card className="w-[480px] relative">
          <div className="p-6">
            <div className="text-red-500">Error: {error}</div>
          </div>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="">
        <Card className="w-[480px]">
          <div className="p-6">Loading...</div>
        </Card>
      </div>
    );
  }

  return (
    <div className="">
      <Card className="w-[480px] relative bg-white shadow-lg">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold">팀 스킬 할당</h2>
          <button onClick={handleCancel} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4">
          <div className="text-sm text-gray-600 mb-4">
            팀의 모든 상담원에게 스킬을 일괄 할당할 수 있습니다.<br />
            할당할 스킬을 선택하고 확인 버튼을 누르면 팀의 모든 상담원에게 선택된 스킬이 할당됩니다.
          </div>

          {/* <div className="mb-4">
            <h3 className="text-md font-medium mb-2">소속 상담원 목록</h3>
            <div className="max-h-[150px] overflow-y-auto border rounded p-2 mb-4">
              {candidateMembersForSkilAssign.map((counselor: any) => (
                <div 
                  key={counselor.counselorId}
                  className="text-sm p-1"
                >
                  {counselor.counselorname} ({counselor.counselorId})
                </div>
              ))}
            </div>
          </div> */}

          <div className="max-h-[200px] overflow-y-auto border rounded">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16 text-center">선택</TableHead>
                  <TableHead className="w-16 text-center">아이디</TableHead>
                  <TableHead className="text-center">이름</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assignableSkills?.result_data.map((skill: CounselorSkill) => (
                  <TableRow key={`${skill.tenant_id}-${skill.skill_id}`}>
                    <TableCell className="text-center">
                      <Checkbox
                        checked={selectedSkills.includes(skill.skill_id)}
                        onCheckedChange={() => handleSkillToggle(skill.skill_id)}
                      />
                    </TableCell>
                    <TableCell className="text-center">{skill.skill_id}</TableCell>
                    <TableCell className="text-center">{skill.skill_name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 flex justify-center gap-2">
          <Button
            onClick={handleConfirm}
            className="px-8 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          >
            확인
          </Button>
          <Button
            variant="outline"
            onClick={handleCancel}
            className="px-8 py-2 border border-gray-300 rounded"
          >
            취소
          </Button>
        </div>
      </Card>
    </div>
  );
}