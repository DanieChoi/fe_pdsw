// "use client";

// import React, { useState } from "react";
// import {
//   ContextMenu,
//   ContextMenuContent,
//   ContextMenuItem,
//   ContextMenuTrigger,
// } from "@/components/ui/context-menu";
// import { useCounselorFilterStore } from "@/store/storeForSideMenuCounselorTab";
// import { useTabStore } from "@/store/tabStore";
// import { IDialogForSkilAssignmentForCounselor } from "../dialog/IDialogForSkilAssignmentForCounselor";
// import { IDialogForTeamSkilAssignment } from "../dialog/IDialogForTeamSkilAssignment";
// import { toast } from "react-toastify";
// import { IDialogForGroupSkilAssignment } from "../dialog/IDialogForGroupSkilAssignment";

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
//   const { setCandidateMembersForSkilAssign } = useCounselorFilterStore();

//   // 다이얼로그 상태 관리
//   const [isSkillDialogOpen, setIsSkillDialogOpen] = useState(false);
//   const [isTeamSkillDialogOpen, setIsTeamSkillDialogOpen] = useState(false);
//   const [isGroupSkillDialogOpen, setIsGroupSkillDialogOpen] = useState(false);

//   // 디버깅용 로그
//   const logDebugInfo = (actionType: string, data: any) => {
//     console.group(`🔍 [ContextMenu] ${actionType}`);
//     console.log("타입:", item.type);
//     console.log("이름:", item.name);
//     console.log("ID:", item.id);
//     console.log("테넌트 ID:", item.tenantId);

//     if (item.members) {
//       console.log("멤버 수:", item.members.length);
//       console.log("첫 번째 멤버 샘플:", item.members[0]);
//     }
//     console.log("전달 데이터:", data);
//     console.groupEnd();
//   };

//   // tenantId 유효성 검증
//   const validateTenantId = () => {
//     if (!item.tenantId) {
//       console.error("⚠️ Context Menu: tenantId가 누락되었습니다. item:", item);
//       return false;
//     }
//     return true;
//   };

//   // ====== 상담원(개인) 관련 함수 ======
//   const handleCounselorSkillAssignment = () => {
//     if (!validateTenantId()) return;

//     logDebugInfo("상담원 스킬 할당", {
//       counselorId: item.id,
//       counselorName: item.name,
//       tenantId: item.tenantId,
//     });

//     setIsSkillDialogOpen(true);
//   };

//   const handleCounselorSkillUnassignment = () => {
//     if (!validateTenantId()) return;

//     logDebugInfo("상담원 스킬 해제", {
//       counselorId: item.id,
//       counselorName: item.name,
//       tenantId: item.tenantId,
//     });

//     // 상담원 스킬 해제도 동일 다이얼로그 재활용
//     setIsSkillDialogOpen(true);
//   };

//   // ====== 팀 관련 함수 ======
//   const handleTeamSkillAssignment = () => {
//     if (!validateTenantId()) return;

//     if (!item.members || item.members.length === 0) {
//       toast.warn("팀에 멤버가 없습니다.");
//       return;
//     }

//     const membersWithTenantId = item.members.map((member) => ({
//       ...member,
//       tenantId: item.tenantId,
//     }));

//     logDebugInfo("팀 스킬 할당", {
//       teamId: item.id,
//       teamName: item.name,
//       memberCount: membersWithTenantId.length,
//       tenantId: item.tenantId,
//     });

//     setCandidateMembersForSkilAssign(membersWithTenantId);
//     setIsTeamSkillDialogOpen(true);
//   };

//   const handleTeamSkillUnassignment = () => {
//     if (!validateTenantId()) return;

//     if (!item.members || item.members.length === 0) {
//       toast.warn("팀에 멤버가 없습니다.");
//       return;
//     }

//     const membersWithTenantId = item.members.map((member) => ({
//       ...member,
//       tenantId: item.tenantId,
//     }));

//     logDebugInfo("팀 스킬 해제", {
//       teamId: item.id,
//       teamName: item.name,
//       memberCount: membersWithTenantId.length,
//       tenantId: item.tenantId,
//     });

//     setCandidateMembersForSkilAssign(membersWithTenantId);
//     setIsTeamSkillDialogOpen(true);
//   };

//   // ====== 그룹 관련 함수 ======
//   const handleGroupSkillAssignment = () => {
//     if (!validateTenantId()) return;

//     if (!item.members || item.members.length === 0) {
//       toast.warn("그룹에 멤버가 없습니다.");
//       return;
//     }

//     const membersWithTenantId = item.members.map((member) => ({
//       ...member,
//       tenantId: item.tenantId,
//     }));

//     logDebugInfo("그룹 스킬 할당", {
//       groupId: item.id,
//       groupName: item.name,
//       memberCount: membersWithTenantId.length,
//       tenantId: item.tenantId,
//     });

//     setCandidateMembersForSkilAssign(membersWithTenantId);
//     setIsGroupSkillDialogOpen(true);
//   };

//   const handleGroupSkillUnassignment = () => {
//     if (!validateTenantId()) return;

//     if (!item.members || item.members.length === 0) {
//       toast.warn("그룹에 멤버가 없습니다.");
//       return;
//     }

//     const membersWithTenantId = item.members.map((member) => ({
//       ...member,
//       tenantId: item.tenantId,
//     }));

//     logDebugInfo("그룹 스킬 해제", {
//       groupId: item.id,
//       groupName: item.name,
//       memberCount: membersWithTenantId.length,
//       tenantId: item.tenantId,
//     });

//     setCandidateMembersForSkilAssign(membersWithTenantId);
//     setIsGroupSkillDialogOpen(true);
//   };

//   // 타입별로 할당 / 해제 분기
//   const openSkillAssignmentDialog = () => {
//     switch (item.type) {
//       case "counselor":
//         handleCounselorSkillAssignment();
//         break;
//       case "team":
//         handleTeamSkillAssignment();
//         break;
//       case "group":
//         handleGroupSkillAssignment();
//         break;
//       default:
//         console.warn(`⚠️ 알 수 없는 타입: ${item.type}`);
//     }
//   };

//   const handleSkillUnassignment = () => {
//     switch (item.type) {
//       case "counselor":
//         handleCounselorSkillUnassignment();
//         break;
//       case "team":
//         handleTeamSkillUnassignment();
//         break;
//       case "group":
//         handleGroupSkillUnassignment();
//         break;
//       default:
//         console.warn(`⚠️ 알 수 없는 타입: ${item.type}`);
//     }
//   };

//   // 메뉴 항목 제목
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

//   return (
//     <>
//       <ContextMenu>
//         <ContextMenuTrigger>{children}</ContextMenuTrigger>
//         <ContextMenuContent className="w-[150px]">
//           <ContextMenuItem onClick={openSkillAssignmentDialog}>
//             {getMenuItemTitle()}
//           </ContextMenuItem>
//           <ContextMenuItem onClick={handleSkillUnassignment}>
//             스킬 할당 해제
//           </ContextMenuItem>
//         </ContextMenuContent>
//       </ContextMenu>

//       {/* ===== 상담원 스킬 할당 다이얼로그 ===== */}
//       {item.type === "counselor" && isSkillDialogOpen && (
//         <IDialogForSkilAssignmentForCounselor
//           isOpen={isSkillDialogOpen}
//           onClose={() => setIsSkillDialogOpen(false)}
//           counselorId={item.id}
//           counselorName={item.name}
//           tenantId={item.tenantId}
//         />
//       )}

//       {/* ===== 팀 스킬 할당 다이얼로그 ===== */}
//       {item.type === "team" && isTeamSkillDialogOpen && (
//         <IDialogForTeamSkilAssignment
//           isOpen={isTeamSkillDialogOpen}
//           onClose={() => setIsTeamSkillDialogOpen(false)}
//           teamId={item.id}
//           teamName={item.name}
//           teamMembers={item.members || []}
//           tenantId={item.tenantId}
//         />
//       )}

//       {/* ===== 그룹 스킬 할당 다이얼로그 ===== */}
//       {item.type === "group" && isGroupSkillDialogOpen && (
//         <IDialogForGroupSkilAssignment
//           isOpen={isGroupSkillDialogOpen}
//           onClose={() => setIsGroupSkillDialogOpen(false)}
//           groupId={item.id}
//           groupName={item.name}
//           groupMembers={item.members || []}
//           tenantId={item.tenantId}
//         />
//       )}
//     </>
//   );
// }

"use client";

import React, { useState, useCallback } from "react";
import { Menu, Item, useContextMenu } from "react-contexify";
import "react-contexify/ReactContexify.css";
import { useCounselorFilterStore } from "@/store/storeForSideMenuCounselorTab";
import { useTabStore } from "@/store/tabStore";
import { IDialogForSkilAssignmentForCounselor } from "../dialog/IDialogForSkilAssignmentForCounselor";
import { IDialogForTeamSkilAssignment } from "../dialog/IDialogForTeamSkilAssignment";
import { toast } from "react-toastify";
import { IDialogForGroupSkilAssignment } from "../dialog/IDialogForGroupSkilAssignment";

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
  const { setCandidateMembersForSkilAssign } = useCounselorFilterStore();

  // 다이얼로그 상태 관리
  const [isSkillDialogOpen, setIsSkillDialogOpen] = useState(false);
  const [isTeamSkillDialogOpen, setIsTeamSkillDialogOpen] = useState(false);
  const [isGroupSkillDialogOpen, setIsGroupSkillDialogOpen] = useState(false);

  // Contexify 메뉴 ID 생성 (unique ID)
  const MENU_ID = `menu-for-${item.type}-${item.id}`;
  
  // Contexify hook
  const { show } = useContextMenu({
    id: MENU_ID,
  });

  // 우클릭 이벤트 핸들러
  const handleContextMenu = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      show({ event });
    },
    [show]
  );

  // 디버깅용 로그
  const logDebugInfo = (actionType: string, data: any) => {
    console.group(`🔍 [ContextMenu] ${actionType}`);
    console.log("타입:", item.type);
    console.log("이름:", item.name);
    console.log("ID:", item.id);
    console.log("테넌트 ID:", item.tenantId);

    if (item.members) {
      console.log("멤버 수:", item.members.length);
      console.log("첫 번째 멤버 샘플:", item.members[0]);
    }
    console.log("전달 데이터:", data);
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

  // ====== 상담원(개인) 관련 함수 ======
  const handleCounselorSkillAssignment = () => {
    if (!validateTenantId()) return;

    logDebugInfo("상담원 스킬 할당", {
      counselorId: item.id,
      counselorName: item.name,
      tenantId: item.tenantId,
    });

    setIsSkillDialogOpen(true);
  };

  const handleCounselorSkillUnassignment = () => {
    if (!validateTenantId()) return;

    logDebugInfo("상담원 스킬 해제", {
      counselorId: item.id,
      counselorName: item.name,
      tenantId: item.tenantId,
    });

    // 상담원 스킬 해제도 동일 다이얼로그 재활용
    setIsSkillDialogOpen(true);
  };

  // ====== 팀 관련 함수 ======
  const handleTeamSkillAssignment = () => {
    if (!validateTenantId()) return;

    if (!item.members || item.members.length === 0) {
      toast.warn("팀에 멤버가 없습니다.");
      return;
    }

    const membersWithTenantId = item.members.map((member) => ({
      ...member,
      tenantId: item.tenantId,
    }));

    logDebugInfo("팀 스킬 할당", {
      teamId: item.id,
      teamName: item.name,
      memberCount: membersWithTenantId.length,
      tenantId: item.tenantId,
    });

    setCandidateMembersForSkilAssign(membersWithTenantId);
    setIsTeamSkillDialogOpen(true);
  };

  const handleTeamSkillUnassignment = () => {
    if (!validateTenantId()) return;

    if (!item.members || item.members.length === 0) {
      toast.warn("팀에 멤버가 없습니다.");
      return;
    }

    const membersWithTenantId = item.members.map((member) => ({
      ...member,
      tenantId: item.tenantId,
    }));

    logDebugInfo("팀 스킬 해제", {
      teamId: item.id,
      teamName: item.name,
      memberCount: membersWithTenantId.length,
      tenantId: item.tenantId,
    });

    setCandidateMembersForSkilAssign(membersWithTenantId);
    setIsTeamSkillDialogOpen(true);
  };

  // ====== 그룹 관련 함수 ======
  const handleGroupSkillAssignment = () => {
    if (!validateTenantId()) return;

    if (!item.members || item.members.length === 0) {
      toast.warn("그룹에 멤버가 없습니다.");
      return;
    }

    const membersWithTenantId = item.members.map((member) => ({
      ...member,
      tenantId: item.tenantId,
    }));

    logDebugInfo("그룹 스킬 할당", {
      groupId: item.id,
      groupName: item.name,
      memberCount: membersWithTenantId.length,
      tenantId: item.tenantId,
    });

    setCandidateMembersForSkilAssign(membersWithTenantId);
    setIsGroupSkillDialogOpen(true);
  };

  const handleGroupSkillUnassignment = () => {
    if (!validateTenantId()) return;

    if (!item.members || item.members.length === 0) {
      toast.warn("그룹에 멤버가 없습니다.");
      return;
    }

    const membersWithTenantId = item.members.map((member) => ({
      ...member,
      tenantId: item.tenantId,
    }));

    logDebugInfo("그룹 스킬 해제", {
      groupId: item.id,
      groupName: item.name,
      memberCount: membersWithTenantId.length,
      tenantId: item.tenantId,
    });

    setCandidateMembersForSkilAssign(membersWithTenantId);
    setIsGroupSkillDialogOpen(true);
  };

  // 타입별로 할당 / 해제 분기
  const openSkillAssignmentDialog = () => {
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
      case "counselor":
        return "상담원 스킬 할당";
      case "team":
        return "팀 스킬 할당";
      case "group":
        return "그룹 스킬 할당";
      default:
        return "스킬 할당";
    }
  };

  return (
    <>
      {/* 컨텍스트 메뉴를 트리거할 요소 */}
      <div onContextMenu={handleContextMenu}>{children}</div>

      {/* React-Contexify 메뉴 정의 */}
      <Menu id={MENU_ID} animation="fade">
        <Item onClick={openSkillAssignmentDialog}>
          {getMenuItemTitle()}
        </Item>
        <Item onClick={handleSkillUnassignment}>
          스킬 할당 해제
        </Item>
      </Menu>

      {/* ===== 상담원 스킬 할당 다이얼로그 ===== */}
      {item.type === "counselor" && isSkillDialogOpen && (
        <IDialogForSkilAssignmentForCounselor
          isOpen={isSkillDialogOpen}
          onClose={() => setIsSkillDialogOpen(false)}
          counselorId={item.id}
          counselorName={item.name}
          tenantId={item.tenantId}
        />
      )}

      {/* ===== 팀 스킬 할당 다이얼로그 ===== */}
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

      {/* ===== 그룹 스킬 할당 다이얼로그 ===== */}
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