"use client";

import React, { useState, useEffect } from 'react';
import { useApiForGetSkills2 } from '@/features/campaignManager/hooks/useApiForGetSkills2';
import { Loader2 } from "lucide-react";
import CustomAlert from '@/components/shared/layout/CustomAlert';

interface Skill {
  tenant_id: number | string;
  skill_id: number;
  skill_name: string;
  skill_description: string;
}

export interface SkillListPopupProps {
  param: number[];
  tenantId: number;
  isOpen?: boolean;
  type: string;
  onConfirm: (param: string) => void;
  onCancel?: () => void;
}

const SkillListPopup = ({
  param = [],
  tenantId,
  type,
  isOpen = true,
  onConfirm,
  onCancel
}: SkillListPopupProps) => {
  // API call to fetch skills
  const { data: skillsData, isLoading, isError } = useApiForGetSkills2({
    tenant_id_array: [tenantId],
  });
  
  // Selected rows management
  const [selectedSkills, setSelectedSkills] = useState<Set<number>>(() => {
    const initialSelection = new Set<number>();
    if (param && param.length > 0) {
      param.forEach(id => {
        if (id !== 0) initialSelection.add(id);
      });
    }
    return initialSelection;
  });
  
  // Update selected skills when param changes or popup reopens
  useEffect(() => {
    if (isOpen) {
      const initialSelection = new Set<number>();
      if (param && param.length > 0) {
        param.forEach(id => {
          if (id !== 0) initialSelection.add(id);
        });
      }
      setSelectedSkills(initialSelection);
    }
  }, [param, isOpen]);
  
  // Handle confirm button click
  const handleConfirm = () => {
    const selectedArray = Array.from(selectedSkills);
    const resultString = selectedArray.sort((a, b) => a - b).join(',');
    onConfirm(resultString);
  };

  // Filter and sort data for display
  const skills = skillsData?.result_data
    ? skillsData.result_data
        .filter((skill: Skill) => skill.tenant_id === tenantId && skill.skill_id !== 0)
        .sort((a: Skill, b: Skill) => a.skill_id - b.skill_id)
    : [];

  // Toggle skill selection
  const toggleSkill = (skillId: number) => {
    setSelectedSkills(prev => {
      const newSelection = new Set(prev);
      if (newSelection.has(skillId)) {
        newSelection.delete(skillId);
      } else {
        newSelection.add(skillId);
      }
      return newSelection;
    });
  };

  // Loading state
  if (isLoading) {
    return (
      <CustomAlert
        isOpen={isOpen}
        title="캠페인 스킬 선택"
        message={
          <div className="flex justify-center items-center h-24">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="ml-2 text-sm">스킬 정보를 불러오는 중...</span>
          </div>
        }
        onClose={onCancel || (() => {})}
        type={type}
      />
    );
  }

  // Error state
  if (isError) {
    return (
      <CustomAlert
        isOpen={isOpen}
        title="캠페인 스킬 선택"
        message={
          <div className="flex justify-center items-center h-24 text-red-500 text-sm">
            스킬 정보를 불러오는 중 오류가 발생했습니다.
          </div>
        }
        onClose={onCancel || (() => {})}
        type={type}
      />
    );
  }

  // Modern compact UI
  const skillsContent = (
    <div className="w-full max-h-[440px]">
      <div className="mb-3">
        <div className="flex items-center mb-2">
          {/* <div className="font-medium text-sm mr-2">Tenant ID:</div> */}
          {/* <div className="text-sm">{tenantId}</div> */}
        </div>
        <div className="text-xs text-gray-600">
          총 {skills.length}개 중 {selectedSkills.size}개 선택됨
        </div>
      </div>
      
      <div className="border rounded shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="w-10 p-2 text-center"></th>
              <th className="w-16 py-2 px-3 text-left font-medium">아이디</th>
              <th className="w-[120px] py-2 px-3 text-left font-medium">이름</th>
              <th className="py-2 px-3 text-left font-medium">설명</th>
            </tr>
          </thead>
          <tbody className="max-h-[320px] overflow-y-auto">
            {skills.map((skill: Skill) => (
              <tr 
                key={skill.skill_id} 
                className={`border-b last:border-b-0 hover:bg-gray-50 ${
                  selectedSkills.has(skill.skill_id) ? 'bg-blue-50' : ''
                }`}
              >
                <td className="p-2 text-center">
                  <input
                    type="checkbox"
                    checked={selectedSkills.has(skill.skill_id)}
                    onChange={() => toggleSkill(skill.skill_id)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                  />
                </td>
                <td className="py-2 px-3">{skill.skill_id}</td>
                <td className="py-2 px-3">{skill.skill_name}</td>
                <td className="py-2 px-3">{skill.skill_description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <CustomAlert
      isOpen={isOpen}
      title="캠페인 스킬 선택"
      message={skillsContent}
      onClose={handleConfirm}
      onCancle={onCancel}
      type={type}
      width="md"
    />
  );
};

export default SkillListPopup;