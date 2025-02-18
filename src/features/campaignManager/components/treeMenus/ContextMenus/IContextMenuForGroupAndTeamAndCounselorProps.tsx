// IContextMenuForGroupAndTeamAndCounselor.tsx
"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { LayoutGrid, Ban } from "lucide-react";

interface IContextMenuForGroupAndTeamAndCounselorProps {
  children: React.ReactNode;
  onAssignSkill?: () => void;
  onUnassignSkill?: () => void;
}

export function IContextMenuForGroupAndTeamAndCounselor({
  children,
  onAssignSkill,
  onUnassignSkill,
}: IContextMenuForGroupAndTeamAndCounselorProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem onClick={onAssignSkill}>
          <LayoutGrid className="mr-2 h-4 w-4" />
          상담원 스킬 할당
        </ContextMenuItem>
        <ContextMenuItem onClick={onUnassignSkill}>
          <Ban className="mr-2 h-4 w-4" />
          스킬 할당 해제
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}