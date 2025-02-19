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
import { Users, History, Check } from "lucide-react";
import { useCounselorFilterStore } from "@/store/storeForSideMenuCounselorTab";

interface IContextMenuForTennantForCounselorTreeMenuProps {
  children: React.ReactNode;
  onViewHistory?: () => void;
}

export function IContextMenuForTennantForCounselorTreeMenu({
  children,
  onViewHistory,
}: IContextMenuForTennantForCounselorTreeMenuProps) {
  const { selectedBlendKind, setSelectedBlendKind, resetFilter } = useCounselorFilterStore();

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
            <ContextMenuItem onClick={() => {
              resetFilter();
              onViewHistory?.();
            }}>
              <History className="mr-2 h-4 w-4" />
              <span className="flex-1">전체 보기</span>
              {selectedBlendKind === null && <Check className="h-4 w-4 text-green-600" />}
            </ContextMenuItem>
            <ContextMenuItem onClick={() => setSelectedBlendKind(1)}>
              <img src="/tree-menu/inbound_counselor.png" alt="인바운드" className="mr-2 h-4 w-4" />
              <span className="flex-1">인바운드</span>
              {selectedBlendKind === 1 && <Check className="h-4 w-4 text-green-600" />}
            </ContextMenuItem>
            <ContextMenuItem onClick={() => setSelectedBlendKind(2)}>
              <img src="/tree-menu/outbound_counselor.png" alt="아웃바운드" className="mr-2 h-4 w-4" />
              <span className="flex-1">아웃바운드</span>
              {selectedBlendKind === 2 && <Check className="h-4 w-4 text-green-600" />}
            </ContextMenuItem>
            <ContextMenuItem onClick={() => setSelectedBlendKind(3)}>
              <img src="/tree-menu/inbound_outbound_mix.png" alt="블렌드" className="mr-2 h-4 w-4" />
              <span className="flex-1">블렌드</span>
              {selectedBlendKind === 3 && <Check className="h-4 w-4 text-green-600" />}
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  );
}