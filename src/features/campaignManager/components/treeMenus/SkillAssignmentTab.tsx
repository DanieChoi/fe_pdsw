import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useTabStore } from '@/store/tabStore';
import { CounselorSkill } from '../../types/typeForCounselorSkill';
import { useApiForCounselorSkill } from '../../hooks/useApiForCounselorSkill';

interface SkillAssignmentTabProps {
  counselorId: string;
}

export function SkillAssignmentTab({ counselorId }: SkillAssignmentTabProps) {
  const [selectedSkills, setSelectedSkills] = React.useState<number[]>([]);
  const removeTab = useTabStore(state => state.removeTab);
  const activeTabKey = useTabStore(state => state.activeTabKey);
  const skillAssignmentInfo = useTabStore(state => state.counselorSkillAssignmentInfo);

  const { data: skillListData, isLoading, error } = useApiForCounselorSkill(
    Number(skillAssignmentInfo.tenantId),
    counselorId  // counselorId 추가
  );

  const handleSkillToggle = (skillId: number) => {
    setSelectedSkills(prev =>
      prev.includes(skillId)
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  const handleSave = () => {
    // TODO: API 호출하여 스킬 할당 저장
    console.log('Selected skills for counselor:', counselorId, 'tenantId:', skillAssignmentInfo.tenantId, selectedSkills);
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

  console.log("skillListData : ", skillListData);
  

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
            <Button onClick={handleSave}>확인</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}