"use client";

import { useCallback } from "react";
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";
import { useTabStore } from "@/store/tabStore";
import { TreeItem } from "@/features/campaignManager/types/typeForSidebar2";
import { useAuthStore } from "@/store";

interface RootNodeContextMenuProps {
  item: TreeItem;
}

export function IRootNodeContextMenu({ item }: RootNodeContextMenuProps) {
  const { addTab } = useTabStore();
  const { session_key } = useAuthStore();

  const handleExpandAll = useCallback(() => {
    // @ts-expect-error - 전역 객체에 함수 추가 (window 타입에 정의되지 않은 속성)
    if (typeof window.expandAllNodes === 'function') {
      // @ts-expect-error - 전역 객체에 함수 추가 (window 타입에 정의되지 않은 속성)
      window.expandAllNodes();
    }
  }, []);

  const handleCollapseAll = useCallback(() => {
    // @ts-expect-error - 전역 객체에 함수 추가 (window 타입에 정의되지 않은 속성)
    if (typeof window.expandTenantsOnly === 'function') {
      // @ts-expect-error - 전역 객체에 함수 추가 (window 타입에 정의되지 않은 속성)
      window.expandTenantsOnly();
    }
  }, []);

  const handleAgentStatusMonitor = useCallback(() => {
    addTab({
      id: 22,
      uniqueKey: `22-${Date.now()}`,
      title: "상담사 상태 모니터",
      icon: "",
      href: "",
      content: null,
      params: {
        sessionKey: session_key,
        campaignId: 0,
        tenantId: 0,
      }
    });
  }, [addTab, session_key]);

  return (
    <ContextMenuContent className="w-48">
      <ContextMenuItem onSelect={handleAgentStatusMonitor}>
        상담사 상태 모니터
      </ContextMenuItem>

      
    </ContextMenuContent>
  );
}