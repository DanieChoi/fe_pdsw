"use client";

import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CustomCheckbox } from "@/components/shared/CustomCheckbox";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "react-toastify";
import { CounselorSkill } from "@/features/campaignManager/types/typeForCounselorSkill";
import CommonDialogForSideMenu from "@/components/shared/CommonDialog/CommonDialogForSideMenu";
import { useApiForDeleteCounselorsForSpecificSkill } from "@/features/campaignManager/hooks/useApiForDeleteCounselorsForSpecificSkill";
import { useApiForAddCounselorsForSpecificSkill } from "@/features/campaignManager/hooks/useApiForAddCounselorsForSpecificSkill";
import { useApiForGetRelatedInfoForAssignSkilToCounselor } from "@/features/preferences/hooks/useApiForGetRelatedInfoForAssignSkilToCounselor";
import { useAssignableSkills } from "@/features/preferences/hooks/useAssignableSkills";
import Image from "next/image";

interface IDialogForTeamSkilAssignmentProps {
  isOpen: boolean;
  onClose: () => void;
  teamId: string;
  teamName: string;
  teamMembers: any[];
  tenantId: string;
}

export function IDialogForTeamSkilAssignment({
  isOpen,
  onClose,
  teamId,
  teamName,
  teamMembers,
  tenantId
}: IDialogForTeamSkilAssignmentProps) {
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
  const [initialSkills, setInitialSkills] = useState<number[]>([]);
  const [showCounselors, setShowCounselors] = useState(false);

  console.log(`팀 스킬 할당 다이얼로그 열림 - 팀 ID: ${teamId}, 이름: ${teamName}, 테넌트: ${tenantId}, 멤버 수: ${teamMembers.length}`);

  // 첫 번째 상담원을 대표로 사용하여 스킬 정보 조회
  const firstCounselor = teamMembers.length > 0 ? teamMembers[0] : null;
  const representativeCounselorId = firstCounselor?.counselorId || firstCounselor?.data?.counselorId || "";

  // 할당 가능한 스킬 목록 조회
  const { data: assignableSkills, isLoading: isSkillsLoading, error: skillsError } = useAssignableSkills(Number(tenantId));

  // 기존 할당된 스킬 정보 조회
  const { assignedSkills, isLoading: isAssignedSkillsLoading, error: assignedSkillsError } = useApiForGetRelatedInfoForAssignSkilToCounselor(
    representativeCounselorId,
    Number(tenantId)
  );

  const deleteCounselorMutation = useApiForDeleteCounselorsForSpecificSkill(tenantId ?? "0");
  const addCounselorMutation = useApiForAddCounselorsForSpecificSkill(tenantId ?? "0");

  // 할당된 스킬 설정
  useEffect(() => {
    if ((assignedSkills?.result_data ?? []).length > 0) {
      const assignedSkillIds = assignedSkills?.result_data.flatMap((item) => item.skill_id) ?? [];
      setSelectedSkills(assignedSkillIds);
      setInitialSkills(assignedSkillIds);
      console.log("✅ 할당된 스킬 ID:", assignedSkillIds);
    } else {
      // 할당된 스킬이 없을 경우 초기화
      setSelectedSkills([]);
      setInitialSkills([]);
      console.log("ℹ️ 할당된 스킬 없음");
    }
  }, [assignedSkills]);

  // 유효한 상담원 ID 배열 생성 함수
  const getValidCounselorIds = () => {
    if (!teamMembers || teamMembers.length === 0) {
      console.warn("⚠️ 유효한 상담원 배열이 없습니다.");
      return [];
    }

    // 유효한 ID만 필터링
    const validIds = teamMembers
      .filter(counselor => {
        // 데이터 구조에 따라 ID 추출
        const id = (counselor.data && counselor.data.counselorId) || counselor.counselorId;
        return id && id !== '-';
      })
      .map(counselor => {
        // ID 추출
        return (counselor.data && counselor.data.counselorId) || counselor.counselorId;
      });
    
    console.log("✅ 추출된 상담원 ID 목록:", validIds, "개수:", validIds.length);
    
    return validIds;
  };

  // 스킬 선택/해제 핸들러
  const handleSkillToggle = (skillId: number) => {
    const counselorIds = getValidCounselorIds();

    if (counselorIds.length === 0) {
      toast.error('유효한 상담원이 없습니다.');
      return;
    }

    setSelectedSkills((prev) => {
      const isCurrentlySelected = prev.includes(skillId);

      if (isCurrentlySelected) {
        console.log("📌 체크 해제된 스킬 정보:", {
          skillId: skillId,
          counselorIds: counselorIds,
          counselorCount: counselorIds.length
        });

        deleteCounselorMutation.mutate({
          skillId: skillId,
          counselorIds: counselorIds
        }, {
          onSuccess: () => {
            toast.success('스킬이 해제되었습니다.');
          },
          onError: (error) => {
            console.error('스킬 해제 오류:', error);
            toast.error('스킬 해제 중 오류가 발생했습니다.');
          }
        });
      } else {
        console.log("📌 체크된 스킬 정보:", {
          skillId: skillId,
          counselorIds: counselorIds,
          counselorCount: counselorIds.length
        });

        addCounselorMutation.mutate({
          skillId: skillId,
          counselorIds: counselorIds
        }, {
          onSuccess: () => {
            toast.success('스킬이 할당되었습니다.');
          },
          onError: (error) => {
            console.error('스킬 할당 오류:', error);
            toast.error('스킬 할당 중 오류가 발생했습니다.');
          }
        });
      }

      return isCurrentlySelected
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId];
    });
  };

  // 상담원 목록 토글
  const toggleCounselors = () => {
    setShowCounselors(!showCounselors);
  };

  // 취소 버튼 핸들러
  const handleCancel = () => {
    onClose();
  };

  // 확인 버튼 핸들러
  const handleConfirm = () => {
    const counselorIds = getValidCounselorIds();

    if (counselorIds.length === 0) {
      toast.error('유효한 상담원이 없습니다.');
      return;
    }

    const skillsToAdd = selectedSkills.filter(skillId => !initialSkills.includes(skillId));
    const skillsToRemove = initialSkills.filter(skillId => !selectedSkills.includes(skillId));

    console.log("📊 스킬 변경 정보:", {
      추가할_스킬: skillsToAdd,
      제거할_스킬: skillsToRemove,
      상담원_IDs: counselorIds,
      상담원_수: counselorIds.length
    });

    // 변경사항이 있는지 확인
    const hasChanges = skillsToAdd.length > 0 || skillsToRemove.length > 0;

    if (!hasChanges) {
      toast.info('변경된 내용이 없습니다.');
      onClose();
      return;
    }

    // 변경 작업 시작
    let completedTasks = 0;
    const totalTasks = skillsToAdd.length + skillsToRemove.length;

    // 스킬 변경 작업이 모두 완료되었는지 확인하는 함수
    const checkCompletion = () => {
      completedTasks++;
      if (completedTasks === totalTasks) {
        toast.success('모든 스킬 할당 작업이 완료되었습니다.');
        onClose();
      }
    };

    // 추가할 스킬 처리
    if (skillsToAdd.length > 0) {
      skillsToAdd.forEach(skillId => {
        addCounselorMutation.mutate({
          skillId,
          counselorIds
        }, {
          onSuccess: () => {
            console.log(`✅ 스킬(ID: ${skillId}) 할당 성공`);
            checkCompletion();
          },
          onError: (error) => {
            console.error(`❌ 스킬(ID: ${skillId}) 할당 실패:`, error);
            checkCompletion();
          }
        });
      });
    }

    // 제거할 스킬 처리
    if (skillsToRemove.length > 0) {
      skillsToRemove.forEach(skillId => {
        deleteCounselorMutation.mutate({
          skillId,
          counselorIds
        }, {
          onSuccess: () => {
            console.log(`✅ 스킬(ID: ${skillId}) 해제 성공`);
            checkCompletion();
          },
          onError: (error) => {
            console.error(`❌ 스킬(ID: ${skillId}) 해제 실패:`, error);
            checkCompletion();
          }
        });
      });
    }
  };

  const isLoading = isSkillsLoading || isAssignedSkillsLoading;
  const error = skillsError || assignedSkillsError;

  const renderContent = () => {
    if (error) {
      return <div className="text-red-500 p-4">Error: {String(error)}</div>;
    }

    if (isLoading) {
      return (
        <div className="p-6 flex flex-col items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
          <div>데이터를 불러오는 중입니다...</div>
        </div>
      );
    }

    // 상담원이 없는 경우 UI
    if (!teamMembers || teamMembers.length === 0) {
      return (
        <div className="px-[30px] py-[20px]">
          <div className="flex items-center">
            <Image src="/tree-menu/team_icon_for_tree.png" alt="팀" width={14} height={12} className="mr-2" />
            <span className="text-sm text-[#333]">상담원 정보를 찾을 수 없습니다</span>
          </div>
          <p className="text-[#333] mb-4 text-sm">
            선택된 팀의 상담원 정보를 불러올 수 없습니다.<br />
            다시 시도하거나 관리자에게 문의하세요.
          </p>
        </div>
      );
    }

    return (
      <div className="px-[30px] py-[20px]">
        <div className="text-sm text-gray-600 mb-4">
          팀의 모든 상담원({teamMembers.length}명)에게 스킬을 일괄 할당할 수 있습니다.<br />
          할당할 스킬을 선택하고 확인 버튼을 누르면 팀의 모든 상담원에게 선택된 스킬이 할당됩니다.
        </div>

        {/* 상담원 목록 표시 */}
        <div className="mb-4">
          <div
            className="flex justify-between items-center p-2 border rounded cursor-pointer bg-gray-50 hover:bg-gray-100"
            onClick={toggleCounselors}
          >
            <div className="flex items-center">
              <Image src="/tree-menu/team_icon_for_tree.png" alt="팀" width={14} height={12} className="mr-2" />
              <span className="text-sm text-[#333]">{teamName}</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-sm text-[#333]">{teamMembers.length}명</span>
              {showCounselors ? (
                <ChevronUp className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              )}
            </div>
          </div>

          {showCounselors && (
            <div className="mt-2 max-h-[150px] overflow-y-auto border rounded">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16 text-center bg-[#F8F8F8] border-r text-[#333]" style={{ height: '30px' }}>ID</TableHead>
                    <TableHead className="w-16 text-center bg-[#F8F8F8] border-r text-[#333]" style={{ height: '30px' }}>이름</TableHead>
                    <TableHead className="w-16 text-center bg-[#F8F8F8] text-[#333]" style={{ height: '30px' }}>테넌트 ID</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teamMembers.map((counselor, index) => {
                    // 필드에 올바르게 접근
                    const id = counselor.data?.counselorId || counselor.counselorId || '-';
                    const name = counselor.data?.counselorname || counselor.counselorname || '-';
                    const currentTenantId = counselor.data?.tenantId || counselor.tenantId || '-';

                    return (
                      <TableRow key={`counselor-${index}`} className="custom-hover">
                        <TableCell className="py-1 text-sm text-center text-[#444]">{id}</TableCell>
                        <TableCell className="py-1 text-sm text-center text-[#444]">{name}</TableCell>
                        <TableCell className="py-1 text-sm text-center text-[#444]">{currentTenantId}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          )}
        </div>

        {/* 테넌트 ID 정보 */}
        <div className="p-2 bg-gray-50 border rounded text-sm text-[#333] mb-4">
          <span>테넌트 ID: {tenantId || 'N/A'}</span>
        </div>

        {/* 스킬 목록 테이블 */}
        <div className="max-h-[250px] overflow-y-auto border rounded">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16 text-center bg-[#F8F8F8] border-r text-[#333]" style={{ height: '30px' }}>선택</TableHead>
                <TableHead className="w-16 text-center bg-[#F8F8F8] border-r text-[#333]" style={{ height: '30px' }}>아이디</TableHead>
                <TableHead className="w-16 text-center bg-[#F8F8F8] text-[#333]" style={{ height: '30px' }}>이름</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignableSkills && assignableSkills.length > 0 ? (
                assignableSkills.map((skill) => (
                  <TableRow key={`skill-${skill.skill_id}`} className="custom-hover">
                    <TableCell className="text-center text-[#444]" style={{ height: '30px' , padding:0}}>
                      <CustomCheckbox
                        checked={selectedSkills.includes(skill.skill_id)}
                        onCheckedChange={() => handleSkillToggle(skill.skill_id)}
                      />
                    </TableCell>
                    <TableCell className="text-center text-[#444]" style={{ height: '30px' , padding:0}}>{skill.skill_id}</TableCell>
                    <TableCell className="text-center text-[#444]" style={{ height: '30px' , padding:0}}>{skill.skill_name}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-4">
                    할당 가능한 스킬이 없습니다.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          <Button
            onClick={handleConfirm}
            className="px-6 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm"
          >
            확인
          </Button>
          <Button
            variant="outline"
            onClick={handleCancel}
            className="px-6 py-1.5 border border-gray-300 rounded text-sm"
          >
            취소
          </Button>
        </div>
      </div>
    );
  };

  return (
    <CommonDialogForSideMenu
      isOpen={isOpen}
      onClose={onClose}
      title={`팀 스킬 할당 - ${teamName || ''}`}
    >
      {renderContent()}
    </CommonDialogForSideMenu>
  );
}