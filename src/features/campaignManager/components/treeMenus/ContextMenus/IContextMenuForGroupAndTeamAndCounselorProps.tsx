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

interface IContextMenuForGroupAndTeamAndCounselorProps {
  children: React.ReactNode;
  item: {
    id: string;
    name: string;
    tenantId: string;
    type: "counselor" | "team" | "group";
  };
}

export function IContextMenuForGroupAndTeamAndCounselor({
  children,
  item,
}: IContextMenuForGroupAndTeamAndCounselorProps) {
  const { addTab, removeTab, openedTabs } = useTabStore();
  const { setSelectedCounselor } = useCounselorFilterStore();

  // console.log("item at: ", item.type);

  const getTabId = () => {
    switch (item.type) {
      case "counselor":
        return 600;
      case "team":
        return 601;
      case "group":
        return 602;
      default:
        console.log("Invalid type : ", item.type);
        return 100; // 예외 처리
    }
  };

  const openSkillAssignmentTab = () => {
    const tabId = getTabId();

    // 기존 동일한 탭이 있으면 삭제
    const existingTabs = openedTabs.filter((tab) => tab.id === tabId);
    existingTabs.forEach((tab) => {
      removeTab(tab.id, tab.uniqueKey);
    });

    // 상담원 정보 저장 (상담원일 경우에만)
    if (item.type === "counselor") {
      setSelectedCounselor(item.id, item.name, item.tenantId);
    }

    // 새 탭 추가
    addTab({
      id: tabId,
      uniqueKey: `${item.type}-skill-assignment-${Date.now()}`,
      title:
        item.type === "counselor"
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
