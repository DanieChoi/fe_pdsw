// src/features/campaignManager/components/treeMenus/SkillAssignmentTab.tsx
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useTabStore } from '@/store/tabStore';
import { CounselorSkill } from '../../types/typeForCounselorSkill';
import { useApiForCounselorSkill } from '../../hooks/useApiForCounselorSkill';
import { useApiForAssignCheckedSkilsToCounselor } from "@/features/campaignManager/hooks/useApiForAssignCheckedSkilsToCounselor";
import { toast } from 'react-toastify';

interface SkillAssignmentTabProps {
  counselorId: string;
}

export function SkillAssignmentTab({ counselorId }: SkillAssignmentTabProps) {
  const [selectedSkills, setSelectedSkills] = React.useState<number[]>([]);
  const removeTab = useTabStore(state => state.removeTab);
  const activeTabKey = useTabStore(state => state.activeTabKey);
  const skillAssignmentInfo = useTabStore(state => state.counselorSkillAssignmentInfo);

  // 상담원 스킬 목록 가져오기
  const { data: skillListData, isLoading, error } = useApiForCounselorSkill(
    Number(skillAssignmentInfo.tenantId),
    counselorId
  );

  // 스킬 할당 API 호출용 커스텀 훅
  const { assign, isLoading: assignIsLoading, error: assignError } = useApiForAssignCheckedSkilsToCounselor();

  const handleSkillToggle = (skillId: number) => {
    setSelectedSkills(prev =>
      prev.includes(skillId)
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  const handleSave = async () => {
    console.log("🎯 상담원 스킬 할당 요청!");
    console.log("✅ 상담원:", counselorId);
    console.log("✅ 선택된 스킬:", selectedSkills);

    try {
      // 커스텀 훅의 assign 함수를 호출하여 스킬 할당 API 요청을 보냅니다.
      const responses = await assign([counselorId], selectedSkills);  // ✅ 단일 값이지만 배열로 변경
      console.log("📌 Assignment responses:", responses);
      // 추가: 성공 메시지 표시, 상태 업데이트 등
      toast.success("스킬 할당이 완료되었습니다.");
    } catch (err) {
      console.error("❌ Error assigning skills:", err);
      // 추가: 에러 처리 로직 구현
    }
  };

  const handleCancel = () => {
    if (activeTabKey) {
      removeTab(100, activeTabKey);
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div>Loading...</div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-red-500">Error: {error.message}</div>
        </CardContent>
      </Card>
    );
  }

  const skills = skillListData?.result_data || [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>상담원 스킬 할당</CardTitle>
        <div className="text-sm text-gray-500">
          TenantID: {skillAssignmentInfo.tenantId || 'N/A'}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-sm text-gray-500">
            상담원에게 할당할 스킬을 선택하세요.
            <br />
            선택된 스킬만이 정상 할당됩니다.
            <br />
            (상담원에게 최대 10개 스킬까지만 할당 가능 합니다.)
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">선택</TableHead>
                <TableHead>아이디</TableHead>
                <TableHead>스킬</TableHead>
                <TableHead>설명</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {skills.map((skill: CounselorSkill) => (
                <TableRow key={`${skill.tenant_id}-${skill.skill_id}`}>
                  <TableCell>
                    <Checkbox
                      checked={selectedSkills.includes(skill.skill_id)}
                      onCheckedChange={() => handleSkillToggle(skill.skill_id)}
                    />
                  </TableCell>
                  <TableCell>{skill.skill_id}</TableCell>
                  <TableCell>{skill.skill_name}</TableCell>
                  <TableCell>{skill.skill_description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={handleCancel}>취소</Button>
            <Button onClick={handleSave} disabled={assignIsLoading}>확인</Button>
          </div>
          {assignError && (
            <div className="text-red-500 text-sm">
              스킬 할당 중 오류가 발생했습니다. 다시 시도해주세요.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
