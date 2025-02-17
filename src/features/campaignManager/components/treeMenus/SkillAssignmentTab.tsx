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
    try {
      await assign([counselorId], selectedSkills);
      toast.success("스킬 할당이 완료되었습니다.");
    } catch (err) {
      console.error("❌ Error assigning skills:", err);
    }
  };

  const handleCancel = () => {
    if (activeTabKey) {
      removeTab(100, activeTabKey);
    }
  };

  if (isLoading) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div>Loading...</div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-red-500">Error: {error.message}</div>
        </CardContent>
      </Card>
    );
  }

  const skills = skillListData?.result_data || [];

  return (
    // <Card className="max-w-3xl w-full mx-auto">
      <Card className="w-full max-w-[800px] mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">상담원 스킬 할당2</CardTitle>
        <div className="text-sm text-gray-500">
          TenantID: {skillAssignmentInfo.tenantId || 'N/A'}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-gray-500">
          상담원에게 할당할 스킬을 선택하세요.
          <br />
          선택된 스킬만이 정상 할당됩니다.
          <br />
          (상담원에게 최대 10개 스킬까지만 할당 가능 합니다.)
        </div>
        <div className="overflow-x-auto">
          <Table className="max-w-full w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-16 text-center">선택</TableHead>
                <TableHead className="w-20 text-center">아이디</TableHead>
                <TableHead className="w-40 text-center">이름</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {skills.map((skill: CounselorSkill) => (
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
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={handleCancel}>취소</Button>
          <Button onClick={handleSave} disabled={assignIsLoading}>확인</Button>
        </div>
        {assignError && (
          <div className="text-red-500 text-sm">
            스킬 할당 중 오류가 발생했습니다. 다시 시도해주세요.
          </div>
        )}
      </CardContent>
    </Card>

  );
}
