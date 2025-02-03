// src/features/campaignManager/components/treeMenus/ContextMenuForAgentNode.tsx
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { 
  User, 
  UserCog, 
  UserMinus, 
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
  const isCounselor = item.type === "counselor";
  const isTeam = item.type === "team";
  const isGroup = item.type === "group";

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        {isCounselor && (
          <>
            <ContextMenuItem onClick={onEdit}>
              <UserCog className="mr-2 h-4 w-4" />
              상담원 스킬 할당당
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
  );
}