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
import { log } from "console";

// interface IContextMenuForGroupAndTeamAndCounselorProps {
//   children: React.ReactNode;
//   item: {
//     id: string;
//     name: string;
//     tenantId: string;
//     type: "counselor" | "team" | "group";
//   };
// }

interface IContextMenuForGroupAndTeamAndCounselorProps {
  children: React.ReactNode;
  item: {
    id: string;
    name: string;
    tenantId: string;
    type: "counselor" | "team" | "group";
    members?: any[]; // members 속성 추가
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
      title: item.type === "counselor" 
        ? "상담원 스킬 할당"
        : item.type === "team"
        ? "팀 스킬 할당"
        : "그룹 스킬 할당",
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
          {item.type === "counselor"
            ? "상담원 스킬 할당"
            : item.type === "team"
            ? "팀 스킬 할당"
            : "그룹 스킬 할당"}
        </ContextMenuItem>
        <ContextMenuItem onClick={openSkillAssignmentTab}>
          <Ban className="mr-2 h-4 w-4" />
          스킬 할당 해제
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
