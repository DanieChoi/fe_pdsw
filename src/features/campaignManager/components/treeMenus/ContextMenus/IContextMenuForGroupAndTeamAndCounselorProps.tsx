
// "use client";

// import {
//   ContextMenu,
//   ContextMenuContent,
//   ContextMenuItem,
//   ContextMenuTrigger,
// } from "@/components/ui/context-menu";
// import { LayoutGrid, Ban } from "lucide-react";
// import { useCounselorFilterStore } from "@/store/storeForSideMenuCounselorTab";
// import { useTabStore } from "@/store/tabStore";

// interface IContextMenuForGroupAndTeamAndCounselorProps {
//   children: React.ReactNode;
//   item: {
//     id: string;
//     name: string;
//     tenantId: string;
//     type: "counselor" | "team" | "group";
//     members?: any[]; // 상담원 목록
//   };
// }

// export function IContextMenuForGroupAndTeamAndCounselor({
//   children,
//   item,
// }: IContextMenuForGroupAndTeamAndCounselorProps) {
//   const { addTab, removeTab, openedTabs } = useTabStore();
//   const { setSelectedCounselor, setCandidateMembersForSkilAssign } = useCounselorFilterStore();

//   const getTabId = () => {
//     switch (item.type) {
//       case "counselor": return 600;
//       case "team": return 601;
//       case "group": return 602;
//       default: return 100;
//     }
//   };

//   const getTabTitle = () => {
//     switch (item.type) {
//       case "counselor":
//         return `상담원 스킬 할당 - ${item.name}`;
//       case "team":
//         const teamMemberCount = item.members?.length || 0;
//         return `팀 스킬 할당 - ${item.name} (${teamMemberCount}명)`;
//       case "group":
//         const groupMemberCount = item.members?.length || 0;
//         return `그룹 스킬 할당 - ${item.name} (${groupMemberCount}명)`;
//       default:
//         return "스킬 할당";
//     }
//   };

//   const getMenuItemTitle = () => {
//     switch (item.type) {
//       case "counselor":
//         return "상담원 스킬 할당";
//       case "team":
//         return "팀 스킬 할당";
//       case "group":
//         return "그룹 스킬 할당";
//       default:
//         return "스킬 할당";
//     }
//   };

//   // tenantId 유효성 검증
//   const validateTenantId = () => {
//     if (!item.tenantId) {
//       console.error("Context Menu: tenantId가 누락되었습니다. item:", item);
//       return false;
//     }
//     return true;
//   };

//   const openSkillAssignmentTab = () => {
//     // tenantId 유효성 검증
//     if (!validateTenantId()) return;

//     const tabId = getTabId();

//     // 기존 탭 삭제
//     const existingTabs = openedTabs.filter((tab) => tab.id === tabId);
//     existingTabs.forEach((tab) => {
//       removeTab(tab.id, tab.uniqueKey);
//     });

//     // 상담원/팀/그룹에 따른 처리
//     if (item.type === "counselor") {
//       // tenantId 확인 및 로깅
//       console.log("Context menu - Opening skill assignment for:", {
//         counselorId: item.id,
//         counselorName: item.name,
//         tenantId: item.tenantId
//       });
      
//       setSelectedCounselor(item.id, item.name, item.tenantId);
//     } else if (["team", "group"].includes(item.type) && item.members) {
//       // 멤버에게도 tenantId 전파하여 설정
//       const membersWithTenantId = item.members.map(member => ({
//         ...member,
//         tenantId: item.tenantId
//       }));
      
//       console.log(`${item.type} 스킬 할당: 멤버에 tenantId ${item.tenantId} 설정`, membersWithTenantId);
//       setCandidateMembersForSkilAssign(membersWithTenantId);
//     }

//     // 새 탭 추가
//     addTab({
//       id: tabId,
//       uniqueKey: `${item.type}-skill-assignment-${Date.now()}`,
//       title: getTabTitle(),
//       icon: "",
//       href: "",
//       content: null,
//     });
//   };

//   const handleSkillUnassignment = () => {
//     // tenantId 유효성 검증
//     if (!validateTenantId()) return;
    
//     const tabId = getTabId();

//     // 기존 탭 삭제
//     const existingTabs = openedTabs.filter((tab) => tab.id === tabId);
//     existingTabs.forEach((tab) => {
//       removeTab(tab.id, tab.uniqueKey);
//     });

//     // 상담원/팀/그룹에 따른 처리
//     if (item.type === "counselor") {
//       // tenantId 확인 및 로깅
//       console.log("Context menu - Opening skill unassignment for:", {
//         counselorId: item.id,
//         counselorName: item.name,
//         tenantId: item.tenantId
//       });
      
//       setSelectedCounselor(item.id, item.name, item.tenantId);
//     } else if (["team", "group"].includes(item.type) && item.members) {
//       // 멤버에게도 tenantId 전파하여 설정
//       const membersWithTenantId = item.members.map(member => ({
//         ...member,
//         tenantId: item.tenantId
//       }));
      
//       console.log(`${item.type} 스킬 할당 해제: 멤버에 tenantId ${item.tenantId} 설정`, membersWithTenantId);
//       setCandidateMembersForSkilAssign(membersWithTenantId);
//     }

//     // 새 탭 추가 (스킬 해제용)
//     addTab({
//       id: tabId,
//       uniqueKey: `${item.type}-skill-unassignment-${Date.now()}`,
//       title: `스킬 할당 해제 - ${item.name}`,
//       icon: "",
//       href: "",
//       content: null,
//     });
//   };

//   return (
//     <ContextMenu>
//       <ContextMenuTrigger>{children}</ContextMenuTrigger>
//       <ContextMenuContent className="w-[150px]">
//         <ContextMenuItem onClick={openSkillAssignmentTab}>
//           {/* <LayoutGrid className="mr-2 h-4 w-4" /> */}
//           {getMenuItemTitle()}
//         </ContextMenuItem>
//         <ContextMenuItem onClick={handleSkillUnassignment}>
//           {/* <Ban className="mr-2 h-4 w-4" /> */}
//           스킬 할당 해제
//         </ContextMenuItem>
//       </ContextMenuContent>
//     </ContextMenu>
//   );
// }


"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { LayoutGrid, Ban } from "lucide-react";
import { useCounselorFilterStore } from "@/store/storeForSideMenuCounselorTab";
import { useTabStore } from "@/store/tabStore";

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
    
    // 상담원 정보 설정
    setSelectedCounselor(item.id, item.name, item.tenantId);
    
    // 기존 탭 정리
    clearExistingTabs(600);
    
    // 탭 생성
    addTab({
      id: 600,
      uniqueKey: `counselor-skill-assignment-${Date.now()}`,
      title: `스킬 할당 - 상담원: ${item.name}`,
      icon: "",
      href: "",
      content: null,
    });
  };
  
  const handleCounselorSkillUnassignment = () => {
    if (!validateTenantId()) return;
    
    logDebugInfo("상담원 스킬 할당 해제", {
      counselorId: item.id,
      counselorName: item.name,
      tenantId: item.tenantId
    });
    
    // 상담원 정보 설정
    setSelectedCounselor(item.id, item.name, item.tenantId);
    
    // 기존 탭 정리
    clearExistingTabs(600);
    
    // 탭 생성
    addTab({
      id: 600,
      uniqueKey: `counselor-skill-unassignment-${Date.now()}`,
      title: `스킬 할당 해제 - 상담원: ${item.name}`,
      icon: "",
      href: "",
      content: null,
    });
  };

  // ====== 팀 관련 함수 ======
  const handleTeamSkillAssignment = () => {
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
    
    logDebugInfo("팀 스킬 할당", {
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
    
    // 탭 생성
    addTab({
      id: 601,
      uniqueKey: `team-skill-assignment-${Date.now()}`,
      title: `스킬 할당 - 팀: ${item.name} (${membersWithTenantId.length}명)`,
      icon: "",
      href: "",
      content: null,
    });
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
    
    // 탭 생성
    addTab({
      id: 601,
      uniqueKey: `team-skill-unassignment-${Date.now()}`,
      title: `스킬 할당 해제 - 팀: ${item.name} (${membersWithTenantId.length}명)`,
      icon: "",
      href: "",
      content: null,
    });
  };

  // ====== 그룹 관련 함수 ======
  const handleGroupSkillAssignment = () => {
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
    
    logDebugInfo("그룹 스킬 할당", {
      groupId: item.id,
      groupName: item.name,
      memberCount: membersWithTenantId.length,
      tenantId: item.tenantId,
      members: membersWithTenantId
    });
    
    // 상담원 목록 설정
    setCandidateMembersForSkilAssign(membersWithTenantId);
    
    // 기존 탭 정리
    clearExistingTabs(602);
    
    // 탭 생성
    addTab({
      id: 602,
      uniqueKey: `group-skill-assignment-${Date.now()}`,
      title: `스킬 할당 - 그룹: ${item.name} (${membersWithTenantId.length}명)`,
      icon: "",
      href: "",
      content: null,
    });
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
    
    // 기존 탭 정리
    clearExistingTabs(602);
    
    // 탭 생성
    addTab({
      id: 602,
      uniqueKey: `group-skill-unassignment-${Date.now()}`,
      title: `스킬 할당 해제 - 그룹: ${item.name} (${membersWithTenantId.length}명)`,
      icon: "",
      href: "",
      content: null,
    });
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
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-[180px]">
        <ContextMenuItem onClick={openSkillAssignmentTab}>
          <LayoutGrid className="mr-2 h-4 w-4" />
          {getMenuItemTitle()}
        </ContextMenuItem>
        <ContextMenuItem onClick={handleSkillUnassignment}>
          <Ban className="mr-2 h-4 w-4" />
          스킬 할당 해제
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}