"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useTabStore } from "@/store/tabStore";
import { useAuthStore } from "@/store/authStore";
import { CounselorSkill } from "../../types/typeForCounselorSkill";
import { useCounselorFilterStore } from "@/store/storeForSideMenuCounselorTab";
import { useApiForGetRelatedInfoForAssignSkilToCounselor } from "@/features/preferences/hooks/useApiForGetRelatedInfoForAssignSkilToCounselor";
import { X } from "lucide-react";

export function SkillAssignmentTab() {
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
  const removeTab = useTabStore((state) => state.removeTab);
  const activeTabKey = useTabStore((state) => state.activeTabKey);
  const userId = useAuthStore((state) => state.id);
  
  const selectedBlendKind = useCounselorFilterStore((state) => state.selectedBlendKind);
  const selectedCounselor = useCounselorFilterStore((state) => state.selectedCounselor);

  const { assignedSkills, assignableSkills, isLoading, error } = useApiForGetRelatedInfoForAssignSkilToCounselor(
    selectedCounselor.counselorId ?? "",
    Number(selectedCounselor.tenantId)
  );

  useEffect(() => {
    if ((assignedSkills?.result_data ?? []).length > 0) {
      const assignedSkillIds = assignedSkills?.result_data.flatMap((item) => item.skill_id) ?? [];
      setSelectedSkills(assignedSkillIds);
    }
  }, [assignedSkills]);

  const handleSkillToggle = (skillId: number) => {
    setSelectedSkills((prev) => {
      const isCurrentlySelected = prev.includes(skillId);
      
      // 체크가 해제될 때 로그 출력
      if (isCurrentlySelected) {
        console.log("📌 체크 해제된 스킬 정보:", {
          skillId: skillId,
          counselorId: selectedCounselor.counselorId,
        });
      }

      return isCurrentlySelected 
        ? prev.filter(id => id !== skillId) 
        : [...prev, skillId];
    });
  };

  const handleCancel = () => {
    if (activeTabKey) {
      removeTab(500, activeTabKey);
    }
  };

  const handleConfirm = () => {
    console.log("선택된 스킬 ID:", selectedSkills);
    console.log("상담원 정보:", {
      counselorId: selectedCounselor.counselorId,
    });
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
      <div className="fixed top-[100px] left-[50px] z-50">
        <Card className="w-[480px]">
          <div className="p-6">Loading...</div>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed top-[100px] left-[50px] z-50">
      <Card className="w-[480px] relative bg-white shadow-lg">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold">상담원 스킬 할당</h2>
          <button onClick={handleCancel} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="text-sm text-gray-600 mb-4">
            상담원에게 스킬을 할당 할 수 있는 창입니다.<br />
            상담원에게 할당할 스킬을 선택하시면 체크 후 확인 버튼을 누르시면 체크된 스킬들이 일괄 할당됩니다.<br />
            (상담원에게 최대 10개 스킬까지만 할당 가능 합니다.)
          </div>

          <div className="max-h-[300px] overflow-y-auto border rounded">
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

