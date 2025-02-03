// src/features/campaignManager/components/treeMenus/SkillAssignmentDialog.tsx

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface SkillAssignmentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  counselorId: string;
}

const mockSkills = [
  { id: 1, name: "스킬1" },
  { id: 2, name: "스킬2" },
  { id: 3, name: "스킬3" },
  { id: 4, name: "스킬4" },
];

export function SkillAssignmentDialog({
  isOpen,
  onClose,
  counselorId,
}: SkillAssignmentDialogProps) {
  const [selectedSkills, setSelectedSkills] = React.useState<number[]>([]);

  const handleSkillToggle = (skillId: number) => {
    setSelectedSkills((prev) =>
      prev.includes(skillId)
        ? prev.filter((id) => id !== skillId)
        : [...prev, skillId]
    );
  };

  const handleSave = () => {
    // TODO: API 호출하여 스킬 할당 저장
    console.log("Selected skills:", selectedSkills, "for counselor:", counselorId);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md" onClick={(e) => e.stopPropagation()}>
        <DialogHeader>
          <DialogTitle>상담원 스킬 할당</DialogTitle>
        </DialogHeader>
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSkills.map((skill) => (
                <TableRow key={skill.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedSkills.includes(skill.id)}
                      onCheckedChange={() => handleSkillToggle(skill.id)}
                    />
                  </TableCell>
                  <TableCell>{skill.id}</TableCell>
                  <TableCell>{skill.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              취소
            </Button>
            <Button onClick={handleSave}>확인</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}