"use client";

import React, { useState } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { LayoutGrid, Ban } from "lucide-react";
import { useCounselorFilterStore } from "@/store/storeForSideMenuCounselorTab";
import { useTabStore } from "@/store/tabStore";
import { IDialogForSkilAssignmentForCounselor } from "../dialog/IDialogForSkilAssignmentForCounselor";
import { IDialogForTeamSkilAssignment } from "../dialog/IDialogForTeamSkilAssignment";
import { IDialogForGroupSkilAssignment } from "../dialog/IDialogForGroupSkilAssignment";
import { toast } from "react-toastify";

interface IContextMenuForGroupAndTeamAndCounselorProps {
  children: React.ReactNode;
  item: {
    id: string;
    name: string;
    tenantId: string;
    type: "counselor" | "team" | "group";
    members?: any[]; // 상담원 목록
  };
}

export function IContextMenuForGroupAndTeamAndCounselor({
  children,
  item,
}: IContextMenuForGroupAndTeamAndCounselorProps) {
  const { addTab, removeTab, openedTabs } = useTabStore();
  const { setSelectedCounselor, setCandidateMembersForSkilAssign } = useCounselorFilterStore();

  // 다이얼로그 상태 관리
  const [isSkillDialogOpen, setIsSkillDialogOpen] = useState(false);
  const [isTeamSkillDialogOpen, setIsTeamSkillDialogOpen] = useState(false);
  const [isGroupSkillDialogOpen, setIsGroupSkillDialogOpen] = useState(false);

  // 디버깅 함수 - 상세 로그 출력
  const logDebugInfo = (actionType: string, data: any) => {
    console.group(`🔍 [ContextMenu] ${actionType}`);
    console.log('타입:', item.type);
    console.log('이름:', item.name);
    console.log('ID:', item.id);
    console.log('테넌트 ID:', item.tenantId);

    if (item.members) {
      console.log('멤버 수:', item.members.length);
      console.log('첫 번째 멤버 샘플:', item.members[0]);
      console.log('전체 멤버 목록:', item.members);
    }

    console.log('전달 데이터:', data);
    console.groupEnd();
  };

  // tenantId 유효성 검증
  const validateTenantId = () => {
    if (!item.tenantId) {
      console.error("⚠️ Context Menu: tenantId가 누락되었습니다. item:", item);
      return false;
    }
    return true;
  };

  // 기존 탭 정리 함수
  const clearExistingTabs = (tabId: number) => {
    const existingTabs = openedTabs.filter((tab) => tab.id === tabId);
    existingTabs.forEach((tab) => {
      removeTab(tab.id, tab.uniqueKey);
    });
  };

  // ====== 상담원 관련 함수 ======
  const handleCounselorSkillAssignment = () => {
    if (!validateTenantId()) return;

    logDebugInfo("상담원 스킬 할당", {
      counselorId: item.id,
      counselorName: item.name,
      tenantId: item.tenantId
    });

    // 다이얼로그 열기
    setIsSkillDialogOpen(true);
  };

  // 2. 팀 스킬 할당 함수 수정
  const handleTeamSkillAssignment = () => {
    if (!validateTenantId()) return;

    
    if (!item.members || item.members.length === 0) {
      toast.warn("팀에 멤버가 없습니다");
      console.warn(`⚠️ 팀에 멤버가 없습니다. ${item.name} (${item.id})`);
      return;
    }

    // 멤버에게도 tenantId 전파하여 설정
    const membersWithTenantId = item.members.map(member => ({
      ...member,
      tenantId: item.tenantId
    }));

    logDebugInfo("팀 스킬 할당", {
      teamId: item.id,
      teamName: item.name,
      memberCount: membersWithTenantId.length,
      tenantId: item.tenantId,
      members: membersWithTenantId
    });

    // 상담원 목록 설정
    setCandidateMembersForSkilAssign(membersWithTenantId);

    // 팀 스킬 할당 다이얼로그 열기
    setIsTeamSkillDialogOpen(true);
  };

  const handleCounselorSkillUnassignment = () => {
    if (!validateTenantId()) return;

    logDebugInfo("상담원 스킬 할당 해제", {
      counselorId: item.id,
      counselorName: item.name,
      tenantId: item.tenantId
    });

    // 할당 해제도 동일한 다이얼로그 사용
    setIsSkillDialogOpen(true);
  };

  const handleTeamSkillUnassignment = () => {
    if (!validateTenantId()) return;

    if (!item.members || item.members.length === 0) {
      console.warn(`⚠️ 팀에 멤버가 없습니다. ${item.name} (${item.id})`);
      return;
    }

    // 멤버에게도 tenantId 전파하여 설정
    const membersWithTenantId = item.members.map(member => ({
      ...member,
      tenantId: item.tenantId
    }));

    logDebugInfo("팀 스킬 할당 해제", {
      teamId: item.id,
      teamName: item.name,
      memberCount: membersWithTenantId.length,
      tenantId: item.tenantId,
      members: membersWithTenantId
    });

    // 상담원 목록 설정
    setCandidateMembersForSkilAssign(membersWithTenantId);

    // 기존 탭 정리
    clearExistingTabs(601);

    // 다이어로그 출력
    setIsTeamSkillDialogOpen(true);
  };

  // ====== 그룹 관련 함수 ======
  const handleGroupSkillAssignment = () => {
    if (!validateTenantId()) return;

    if (!item.members || item.members.length === 0) {
      console.warn(`⚠️ 그룹에 멤버가 없습니다. ${item.name} (${item.id})`);
      return;
    }

    // 처리 전 원본 멤버 데이터 로깅 (기존 코드 유지)
    console.group("🔎 그룹 스킬 할당 - 멤버 데이터 처리 과정");
    console.log("1️⃣ 원본 멤버 데이터:", item.members);
    console.log("📊 멤버 수:", item.members.length);

    // 첫 번째 멤버의 구조 자세히 확인 (기존 코드 유지)
    if (item.members.length > 0) {
      console.log("🔍 첫 번째 멤버 상세 구조:", JSON.stringify(item.members[0], null, 2));
    }

    // 멤버에게도 tenantId 전파하여 설정 (기존 코드 유지)
    const membersWithTenantId = item.members.map(member => ({
      ...member,
      tenantId: item.tenantId
    }));

    // 처리 후 데이터 로깅 (기존 코드 유지)
    console.log("2️⃣ tenantId 추가 후 멤버 데이터:", membersWithTenantId);
    console.log("📊 처리된 멤버 수:", membersWithTenantId.length);

    // 스토어 설정 전 최종 데이터 확인 (기존 코드 유지)
    console.log("3️⃣ 스토어에 설정할 최종 데이터:", membersWithTenantId);
    console.groupEnd();

    logDebugInfo("그룹 스킬 할당", {
      groupId: item.id,
      groupName: item.name,
      memberCount: membersWithTenantId.length,
      tenantId: item.tenantId,
      members: membersWithTenantId
    });

    // 상담원 목록 설정 (기존 코드 유지)
    setCandidateMembersForSkilAssign(membersWithTenantId);

    // 스토어에 실제로 저장된 데이터 확인 (기존 코드 유지)
    setTimeout(() => {
      const storeState = useCounselorFilterStore.getState();
      console.group("🔄 스토어 상태 확인");
      console.log("📋 candidateMembersForSkilAssign:", storeState.candidateMembersForSkilAssign);
      console.log("📊 스토어에 저장된 멤버 수:", storeState.candidateMembersForSkilAssign.length);
      console.groupEnd();
    }, 100);

    // 여기부터 변경: 탭 대신 다이얼로그 사용
    setIsGroupSkillDialogOpen(true);
  };

  const handleGroupSkillUnassignment = () => {
    if (!validateTenantId()) return;

    if (!item.members || item.members.length === 0) {
      console.warn(`⚠️ 그룹에 멤버가 없습니다. ${item.name} (${item.id})`);
      return;
    }

    // 멤버에게도 tenantId 전파하여 설정
    const membersWithTenantId = item.members.map(member => ({
      ...member,
      tenantId: item.tenantId
    }));

    logDebugInfo("그룹 스킬 할당 해제", {
      groupId: item.id,
      groupName: item.name,
      memberCount: membersWithTenantId.length,
      tenantId: item.tenantId,
      members: membersWithTenantId
    });

    // 상담원 목록 설정
    setCandidateMembersForSkilAssign(membersWithTenantId);

    // // 기존 탭 정리
    // clearExistingTabs(602);

    // // 탭 생성
    // addTab({
    //   id: 602,
    //   uniqueKey: `group-skill-unassignment-${Date.now()}`,
    //   title: `스킬 할당 해제 - 그룹: ${item.name} (${membersWithTenantId.length}명)`,
    //   icon: "",
    //   href: "",
    //   content: null,
    // });
    setIsGroupSkillDialogOpen(true);
  };

  // 타입에 따라 적절한 핸들러 선택
  const openSkillAssignmentTab = () => {
    switch (item.type) {
      case "counselor":
        handleCounselorSkillAssignment();
        break;
      case "team":
        handleTeamSkillAssignment();
        break;
      case "group":
        handleGroupSkillAssignment();
        break;
      default:
        console.warn(`⚠️ 알 수 없는 타입: ${item.type}`);
    }
  };

  const handleSkillUnassignment = () => {
    switch (item.type) {
      case "counselor":
        handleCounselorSkillUnassignment();
        break;
      case "team":
        handleTeamSkillUnassignment();
        break;
      case "group":
        handleGroupSkillUnassignment();
        break;
      default:
        console.warn(`⚠️ 알 수 없는 타입: ${item.type}`);
    }
  };

  // 메뉴 항목 제목
  const getMenuItemTitle = () => {
    switch (item.type) {
      case "counselor": return "상담원 스킬 할당";
      case "team": return "팀 스킬 할당";
      case "group": return "그룹 스킬 할당";
      default: return "스킬 할당";
    }
  };

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger>{children}</ContextMenuTrigger>
        <ContextMenuContent className="w-[150px]">
          <ContextMenuItem onClick={openSkillAssignmentTab}>
            {/* <LayoutGrid className="mr-2 h-4 w-4" /> */}
            {getMenuItemTitle()}
          </ContextMenuItem>
          <ContextMenuItem onClick={handleSkillUnassignment}>
            {/* <Ban className="mr-2 h-4 w-4" /> */}
            스킬 할당 해제
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      {/* 상담원 스킬 할당 다이얼로그 */}
      {item.type === "counselor" && isSkillDialogOpen && (
        <IDialogForSkilAssignmentForCounselor
          isOpen={isSkillDialogOpen}
          onClose={() => setIsSkillDialogOpen(false)}
          counselorId={item.id}
          counselorName={item.name}
          tenantId={item.tenantId}
        />
      )}

      {item.type === "team" && isTeamSkillDialogOpen && (
        <IDialogForTeamSkilAssignment
          isOpen={isTeamSkillDialogOpen}
          onClose={() => setIsTeamSkillDialogOpen(false)}
          teamId={item.id}
          teamName={item.name}
          teamMembers={item.members || []}
          tenantId={item.tenantId}
        />
      )}

      {item.type === "group" && isGroupSkillDialogOpen && (
        <IDialogForGroupSkilAssignment
          isOpen={isGroupSkillDialogOpen}
          onClose={() => setIsGroupSkillDialogOpen(false)}
          groupId={item.id}
          groupName={item.name}
          groupMembers={item.members || []}
          tenantId={item.tenantId}
        />
      )}

    </>
  );
}