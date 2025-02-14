import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { CampaignContextMenu, CampaignStatus } from "./CampaignContextMenuForTreeNode";
import { FolderContextMenu } from "./FolderContextMenuForTreeNode";
import { TreeItem } from "../../types/typeForSidebar2";

interface ContextMenuForTreeNodeProps {
  children: React.ReactNode;
  item: {
    id: string;
    label: string;
    type: any;
    status: CampaignStatus; // status를 필수값으로 변경
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
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
      {item.type === "folder" ? (
        <FolderContextMenu
          item={item}
        />
      ) : (
        <CampaignContextMenu
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
          onMonitor={onMonitor}
          onCopy={onCopy}
        />
      )}
    </ContextMenu>
  );
}