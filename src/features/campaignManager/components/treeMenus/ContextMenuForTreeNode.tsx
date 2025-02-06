import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";
import { useTabStore } from "@/store/tabStore";
import { Edit, Copy, Activity, Trash2, Monitor, Settings, Search, List, Clock, History, UserCheck, Shield, RefreshCcw } from "lucide-react";

interface ContextMenuForTreeNodeProps {
  children: React.ReactNode;
  item: {
    type: string;
    id: string;
    label: string;
  };
  onEdit: () => void;
  onDelete: () => void;
  onMonitor: () => void;
  onCopy: () => void;
}

export function ContextMenuForTreeNode({
  children,
  item,
  onEdit,
  onDelete,
  onMonitor,
  onCopy,
}: ContextMenuForTreeNodeProps) {
  const isFolder = item.type === "folder";
  const { openCampaignManagerForUpdate, setCampaignIdForUpdateFromSideMenu, openCampaignProgressInfo, openRebroadcastSettings } = useTabStore();

  const handleEditMenuClick = () => {
    openCampaignManagerForUpdate(item.id, item.label);
    setCampaignIdForUpdateFromSideMenu(item.id);
  };

  const handleProgressInfoClick = () => {
    openCampaignProgressInfo(item.id, item.label);
  };

  const handleRebroadcastClick = () => {
    openRebroadcastSettings(item.id, item.label);
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem onClick={handleEditMenuClick}>
          <Edit className="mr-2 h-4 w-4" />
          캠페인 수정
        </ContextMenuItem>
        
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Search className="mr-2 h-4 w-4" />
            시작구분
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              <Clock className="mr-2 h-4 w-4" />
              시작
            </ContextMenuItem>
            <ContextMenuItem>
              <List className="mr-2 h-4 w-4" />
              임시
            </ContextMenuItem>
            <ContextMenuItem>
              <History className="mr-2 h-4 w-4" />
              중지
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>

        <ContextMenuItem onClick={handleProgressInfoClick}>
          <Settings className="mr-2 h-4 w-4" />
          캠페인 진행정보
        </ContextMenuItem>

        <ContextMenuSeparator />

        {/* <ContextMenuItem>
          <Monitor className="mr-2 h-4 w-4" />
          실시간 재발신
        </ContextMenuItem> */}

        <ContextMenuItem onClick={handleRebroadcastClick}>
          <RefreshCcw className="mr-2 h-4 w-4" />
          재발신
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuItem onClick={onMonitor}>
          <Monitor className="mr-2 h-4 w-4" />
          캠페인 삭제
        </ContextMenuItem>

        <ContextMenuItem onClick={onCopy}>
          <Copy className="mr-2 h-4 w-4" />
          캠페인 복사
        </ContextMenuItem>

        {!isFolder && (
          <ContextMenuItem onClick={onDelete} className="text-red-500">
            <Trash2 className="mr-2 h-4 w-4" />
            캠페인 삭제
          </ContextMenuItem>
        )}
      </ContextMenuContent>
    </ContextMenu>
  );
}
