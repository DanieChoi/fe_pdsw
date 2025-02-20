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
    counselorId: string;
    counselorName: string;
    tenantId: string;
  };
}

export function IContextMenuForGroupAndTeamAndCounselor({
  children,
  item,
}: IContextMenuForGroupAndTeamAndCounselorProps) {
  const { addTab, removeTab, openedTabs } = useTabStore();
  const { setSelectedCounselor } = useCounselorFilterStore();

  const openSkillAssignmentTab = () => {
    // 기존 500번 탭이 있으면 삭제
    const existingTabs = openedTabs.filter(tab => tab.id === 500);
    existingTabs.forEach(tab => {
      removeTab(tab.id, tab.uniqueKey);
    });

    console.log("item : ", item);
    
    // 상담원 정보 저장
    setSelectedCounselor(item.counselorId, item.counselorName, item.tenantId);

    // 새 500번 탭 추가
    addTab({
      id: 500,
      uniqueKey: `skill-assignment-${Date.now()}`,
      title: "상담원 스킬 할당",
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
          상담원 스킬 할당
        </ContextMenuItem>
        <ContextMenuItem onClick={openSkillAssignmentTab}>
          <Ban className="mr-2 h-4 w-4" />
          스킬 할당 해제
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}