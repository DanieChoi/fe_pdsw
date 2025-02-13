import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { CampaignContextMenu } from "./CampaignContextMenuForTreeNode";
import { FolderContextMenu } from "./FolderContextMenuForTreeNode";

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