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

  const getTabId = () => {
    switch (item.type) {
      case "counselor": return 600;
      case "team": return 601;
      case "group": return 602;
      default: return 100;
    }
  };

  const getTabTitle = () => {
    switch (item.type) {
      case "counselor":
        return `상담원 스킬 할당 - ${item.name}`;
      case "team":
        const teamMemberCount = item.members?.length || 0;
        return `팀 스킬 할당 - ${item.name} (${teamMemberCount}명)`;
      case "group":
        const groupMemberCount = item.members?.length || 0;
        return `그룹 스킬 할당 - ${item.name} (${groupMemberCount}명)`;
      default:
        return "스킬 할당";
    }
  };

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

  const openSkillAssignmentTab = () => {
    const tabId = getTabId();

    // 기존 탭 삭제
    const existingTabs = openedTabs.filter((tab) => tab.id === tabId);
    existingTabs.forEach((tab) => {
      removeTab(tab.id, tab.uniqueKey);
    });

    // 상담원/팀/그룹에 따른 처리
    if (item.type === "counselor") {
      setSelectedCounselor(item.id, item.name, item.tenantId);
    } else if (["team", "group"].includes(item.type) && item.members) {
      setCandidateMembersForSkilAssign(item.members);
    }

    // 새 탭 추가
    addTab({
      id: tabId,
      uniqueKey: `${item.type}-skill-assignment-${Date.now()}`,
      title: getTabTitle(),
      icon: "",
      href: "",
      content: null,
    });
  };

  const handleSkillUnassignment = () => {
    const tabId = getTabId();

    // 기존 탭 삭제
    const existingTabs = openedTabs.filter((tab) => tab.id === tabId);
    existingTabs.forEach((tab) => {
      removeTab(tab.id, tab.uniqueKey);
    });

    // 상담원/팀/그룹에 따른 처리
    if (item.type === "counselor") {
      setSelectedCounselor(item.id, item.name, item.tenantId);
    } else if (["team", "group"].includes(item.type) && item.members) {
      setCandidateMembersForSkilAssign(item.members);
    }

    // 새 탭 추가 (스킬 해제용)
    addTab({
      id: tabId,
      uniqueKey: `${item.type}-skill-unassignment-${Date.now()}`,
      title: `스킬 할당 해제 - ${item.name}`,
      icon: "",
      href: "",
      content: null,
    });
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-48">
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