// src/features/campaignManager/components/treeMenus/ContextMenuForAgentNode.tsx
import React from "react";
import { useTabStore } from '@/store/tabStore';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  UserCog,
  PhoneCall,
  History,
  Settings
} from "lucide-react";

interface ContextMenuForAgentNodeProps {
  children: React.ReactNode;
  item: {
    type: string;
    id: string;
    label: string;
  };
  onEdit: () => void;
  onDelete: () => void;
  onManage: () => void;
}

export function ContextMenuForAgentNode({
  children,
  item,
  onEdit,
  onDelete,
  onManage,
}: ContextMenuForAgentNodeProps) {
  const addTab = useTabStore(state => state.addTab);
  const [menuKey, setMenuKey] = React.useState(0);
  const isCounselor = item.type === "counselor";
  const isTeam = item.type === "team";
  const isGroup = item.type === "group";

  const handleSkillAssignment = () => {
    // 기존 스킬할당 탭들을 찾아서 제거하기 위해 removeTab 가져오기
    const { removeTab, openedTabs } = useTabStore.getState();
    
    // ID가 100인 기존 탭들 찾기
    const existingTabs = openedTabs.filter(tab => tab.id === 100);
    
    // 기존 탭들 제거
    existingTabs.forEach(tab => {
      removeTab(tab.id, tab.uniqueKey);
    });
  
    // 새로운 탭 생성
    const uniqueKey = `skill-assignment-${item.id}-${Date.now()}`;
    const newTab = {
      id: 100, // 스킬 추가 탭의 ID
      uniqueKey,
      title: `상담원 스킬 할당 - ${item.label}`,
      icon: "header-menu/스킬할당.svg",
      href: "/skill-assignment",
      content: null,
      counselorId: item.id
    };
  
    addTab(newTab);
  };

  return (
    <>
      <ContextMenu key={menuKey}>
        <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
        <ContextMenuContent className="w-56">
          {isCounselor && (
            <>
              <ContextMenuItem onClick={handleSkillAssignment}>
                <UserCog className="mr-2 h-4 w-4" />
                상담원 스킬 할당
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>
                <PhoneCall className="mr-2 h-4 w-4" />
                상담원 스킬 해제
              </ContextMenuItem>
            </>
          )}

          {isTeam && (
            <>
              <ContextMenuItem onClick={onManage}>
                <Settings className="mr-2 h-4 w-4" />
                팀 관리
              </ContextMenuItem>
              
              <ContextMenuItem>
                <History className="mr-2 h-4 w-4" />
                팀 이력
              </ContextMenuItem>
            </>
          )}

          {isGroup && (
            <>
              <ContextMenuItem onClick={onManage}>
                <Settings className="mr-2 h-4 w-4" />
                그룹 관리
              </ContextMenuItem>

              <ContextMenuItem>
                <History className="mr-2 h-4 w-4" />
                그룹 이력
              </ContextMenuItem>
            </>
          )}
        </ContextMenuContent>
      </ContextMenu>
    </>
  );
}