import React from "react";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu";

interface IContextMenuForSkillProps {
  children: React.ReactNode;
  item: {
    id: string;
    name: string;
    // 필요시 추가 필드
  };
  onUnassignSkill?: (item: { id: string; name: string }) => void;
}

const IContextMenuForSkill: React.FC<IContextMenuForSkillProps> = ({
  children,
  item,
  onUnassignSkill,
}) => {
  const handleUnassign = () => {
    console.log("[컨텍스트메뉴] 스킬 할당 해제 클릭", item);
    if (onUnassignSkill) {
      onUnassignSkill(item);
    }
    // 추가 로직 필요시 여기에 작성
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger className="w-full h-full">
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent className="min-w-[150px]">
        <ContextMenuItem onClick={handleUnassign}>
          스킬 할당 해제
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default IContextMenuForSkill;