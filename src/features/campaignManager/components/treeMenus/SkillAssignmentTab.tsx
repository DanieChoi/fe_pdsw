"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useTabStore } from "@/store/tabStore";
import { useAuthStore } from "@/store/authStore";
import { CounselorSkill } from "../../types/typeForCounselorSkill";
import { useCounselorFilterStore } from "@/store/storeForSideMenuCounselorTab";
import { useApiForGetRelatedInfoForAssignSkilToCounselor } from "@/features/preferences/hooks/useApiForGetRelatedInfoForAssignSkilToCounselor";

export function SkillAssignmentTab() {
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
  const removeTab = useTabStore((state) => state.removeTab);
  const activeTabKey = useTabStore((state) => state.activeTabKey);
  const userId = useAuthStore((state) => state.id);
  
  // useCounselorFilterStore에서 상담원 정보와 블랜딩 종류 가져오기
  const selectedBlendKind = useCounselorFilterStore((state) => state.selectedBlendKind);
  const selectedCounselor = useCounselorFilterStore((state) => state.selectedCounselor);

  console.log("📌 선택된 상담원 정보:", selectedCounselor);

  // API 호출에 선택된 상담원 정보 사용
  const { assignedSkills, assignableSkills, isLoading, error } = useApiForGetRelatedInfoForAssignSkilToCounselor(
    selectedCounselor.counselorId ?? "",
    Number(selectedCounselor.tenantId)
  );

  console.log("📌 할당 가능한 스킬 목록들 조회:", assignableSkills);
  console.log("📌 상담원이 보유한 스킬 목록들 조회:", assignedSkills);

  useEffect(() => {
    if ((assignedSkills?.result_data ?? []).length > 0) {
      const assignedSkillIds = assignedSkills?.result_data.flatMap((item) => item.skill_id) ?? [];
      setSelectedSkills(assignedSkillIds);
    }
  }, [assignedSkills]);

  const handleSkillToggle = (skillId: number) => {
    setSelectedSkills((prev) =>
      prev.includes(skillId) ? prev.filter((id) => id !== skillId) : [...prev, skillId]
    );
  };

  const handleCancel = () => {
    if (activeTabKey) {
      removeTab(500, activeTabKey);
    }
  };

  if (error) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-red-500">Error: {error}</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-[800px] mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">상담원 스킬 목록</CardTitle>
        <div className="text-sm text-gray-500">
          <div>Tenant ID: {selectedCounselor.tenantId || "N/A"}</div>
          <div>상담원 ID: {selectedCounselor.counselorId || "N/A"}</div>
          <div>상담원 이름: {selectedCounselor.counselorName || "N/A"}</div>
          <div>로그인 사용자 ID: {userId || "N/A"}</div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="overflow-x-auto">
          <Table className="max-w-full w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-16 text-center">선택</TableHead>
                {/* <TableHead className="w-20 text-center">아이디</TableHead> */}
                <TableHead className="w-40 text-center">이름</TableHead>
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
                  {/* <TableCell className="text-center">{skill.skill_id}</TableCell> */}
                  <TableCell className="text-center">{skill.skill_name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={handleCancel}>
            닫기
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}