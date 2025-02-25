"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { Checkbox } from "@/components/ui/checkbox";
import { useSideMenuCampaignTabStore } from "@/store/storeForSsideMenuCampaignTab";
import { useAssignableSkills } from "@/features/preferences/hooks/useAssignableSkills";

interface Skill {
  skill_id: number;
  skill_name: string;
}

// closePanel 콜백 추가
const SkilFilterOptionPannelForCampaignTab = ({ closePanel }: { closePanel?: () => void }) => {
  const { tenant_id } = useAuthStore();
  
  // 할당 가능한 스킬 목록 가져오기
  const { data: skills = [] as Skill[], isLoading, isError } = useAssignableSkills();
  
  // zustand 스토어에서 skilIdsForCampaignTreeMenu 가져오기
  const { skilIdsForCampaignTreeMenu, setSkilIdsForCampaignTreeMenu } = useSideMenuCampaignTabStore();

  // 로컬 상태로 체크 박스 선택 상태 관리
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);

  // 스토어에서 불러온 기존 선택된 스킬을 로컬 상태와 동기화
  useEffect(() => {
    setSelectedSkills(skilIdsForCampaignTreeMenu);
  }, [skilIdsForCampaignTreeMenu]);

  // 체크박스 변경 핸들러
  const handleSkillChange = (skill_id: number) => {
    setSelectedSkills((prev) =>
      prev.includes(skill_id) ? prev.filter((id) => id !== skill_id) : [...prev, skill_id]
    );
  };

  // 확인 버튼 → 선택한 스킬 ID를 zustand 스토어에 저장하고 패널 닫기
  const handleConfirm = () => {
    setSkilIdsForCampaignTreeMenu(selectedSkills);
    if (closePanel) closePanel();
  };

  // 취소 버튼 → 로컬 상태 초기화하고 패널 닫기
  const handleCancel = () => {
    setSelectedSkills(skilIdsForCampaignTreeMenu); // 기존 값으로 복원
    if (closePanel) closePanel();
  };

  return (
    <div>
      {/* 로딩/에러 처리 */}
      {isLoading && <p className="text-gray-500 text-center py-4">로딩 중...</p>}
      {isError && <p className="text-red-500 text-center py-4">스킬 데이터를 불러오는 중 오류가 발생했습니다.</p>}

      {!isLoading && !isError && (
        <>
          {/* 테이블 형태로 렌더링 */}
          <div className="border rounded">
            {/* 테이블 헤더 */}
            <div className="grid grid-cols-3 bg-gray-100 p-2 text-sm font-medium">
              <div className="text-center">선택</div>
              <div className="text-center">아이디</div>
              <div className="text-center">이름</div>
            </div>
            
            {/* 테이블 바디 */}
            <div className="max-h-[300px] overflow-y-auto">
              {skills.length > 0 ? (
                skills.map(({ skill_id, skill_name }) => (
                  <div key={skill_id} className="grid grid-cols-3 p-2 border-t hover:bg-gray-50">
                    <div className="flex justify-center items-center">
                      <Checkbox
                        id={`skill-${skill_id}`}
                        checked={selectedSkills.includes(skill_id)}
                        onCheckedChange={() => handleSkillChange(skill_id)}
                      />
                    </div>
                    <div className="text-center">{skill_id}</div>
                    <div className="text-center">{skill_name}</div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500">불러올 스킬이 없습니다.</div>
              )}
            </div>
          </div>

          {/* 확인/취소 버튼 */}
          <div className="mt-4 flex justify-end gap-2">
            <Button onClick={handleCancel} variant="secondary">
              취소
            </Button>
            <Button onClick={handleConfirm}>
              확인
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default SkilFilterOptionPannelForCampaignTab;