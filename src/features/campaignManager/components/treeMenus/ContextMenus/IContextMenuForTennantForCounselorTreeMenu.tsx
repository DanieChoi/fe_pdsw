// IContextMenuForTennantForCounselorTreeMenu.tsx
"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "@/components/ui/context-menu";
import { Users, History, Mail, LogOut } from "lucide-react";

interface IContextMenuForTennantForCounselorTreeMenuProps {
  children: React.ReactNode;
  onViewHistory?: () => void;
  onInboard?: () => void;
  onOutboard?: () => void;
}

export function IContextMenuForTennantForCounselorTreeMenu({
  children,
  onViewHistory,
  onInboard,
  onOutboard,
}: IContextMenuForTennantForCounselorTreeMenuProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Users className="mr-2 h-4 w-4" />
            상담원 보기
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem onClick={onViewHistory}>
              <History className="mr-2 h-4 w-4" />
              전체 보기
            </ContextMenuItem>
            <ContextMenuItem onClick={onInboard}>
              <Mail className="mr-2 h-4 w-4" />
              인바운드
            </ContextMenuItem>
            <ContextMenuItem onClick={onOutboard}>
              <LogOut className="mr-2 h-4 w-4" />
              아웃바운드
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  );
}