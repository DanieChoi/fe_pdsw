"use client";

import React, { useState, useEffect } from 'react';
import { useApiForGetSkills2 } from '@/features/campaignManager/hooks/useApiForGetSkills2';
import { Loader2 } from "lucide-react";
import CustomAlert from '@/components/shared/layout/CustomAlert';
import DataGrid, { SelectColumn } from 'react-data-grid';
import { useSessionCheckStore } from '@/store/sessionCheckStore';



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
  const { data: skillsData, isLoading, isError} = useApiForGetSkills2({
    tenant_id_array: [tenantId],
  });
  
  // 이 컴포넌트가 통합모니터링 실행시 가장 먼저 api와 통신하는 컴포넌트임
  // sessionCheckStore에 저장된 값 확인하기 (세션 만료 확인)
  const sessionError = useSessionCheckStore((state) => state.sessionError);
  const clearSessionError = useSessionCheckStore((state) => state.clearSessionError);
  if ( sessionError && typeof window !== 'undefined') {
    // 팝업창인지 확인하기
    if (window.opener) {
      window.opener.postMessage({ type: "sessionFailed" }, "*");

      // 반드시 초기화!!! 
      clearSessionError();
      
      // 팝업창 닫기
      window.close();
    } // end of window if
  }
  
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

    // skill_id가 0인 항목 제외
    const rows = skills.filter((skill) => 
      skill.tenant_id === tenantId && skill.skill_id !== 0
  );

  const handleSelectedRowsChange = (newSelection: Set<number>) => {
    // 혹시 모를 0값이 포함되는 것을 방지
    const filteredSelection = new Set(
        Array.from(newSelection).filter(id => id !== 0)
    );
    setSelectedSkills(filteredSelection);
};

  const columns = [
    SelectColumn,
    {
        key: 'skill_id',
        name: '아이디',
        frozen: true,
        width: 157,
        minWidth: 100
    },
    {
        key: 'skill_name',
        name: '이름',
        frozen: true,
        width: 157,
        minWidth: 100
    }
  ];

  const rowClass = (row: Skill) => {
      return selectedSkills.has(row.skill_id) ? 'selected-row' : '';
  };

  const gridContent = (
    <div className="grid-custom-wrap w-full">
        <DataGrid
            columns={columns}
            rows={rows}
            className="grid-custom w-full"
            rowKeyGetter={(row) => row.skill_id}
            selectedRows={selectedSkills}
            onSelectedRowsChange={handleSelectedRowsChange}
            rowClass={rowClass}
            rowHeight={26}
        />
    </div>
);

  return (
    <CustomAlert
      isOpen={isOpen}
      title="캠페인 스킬 선택"
      message={gridContent}
      onClose={handleConfirm}
      onCancle={onCancel}
      type={type}
      // width={400}
      // height={450}
    />
  );
};

export default SkillListPopup;