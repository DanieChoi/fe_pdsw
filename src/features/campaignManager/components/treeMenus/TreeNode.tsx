// TreeNode.tsx
import { TreeNodeProps } from "@/components/shared/layout/SidebarPresenter";
import { ContextMenuForTreeNode } from "./ContextMenuForTreeNode";
import { ChevronRight, ChevronDown, Folder, FileText } from "lucide-react";

export function TreeNode({
  item,
  level,
  expandedNodes,
  selectedNodeId,
  getStatusIcon,
  onNodeToggle,
  onNodeSelect,
}: TreeNodeProps) {
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedNodes.has(item.id);
  const isSelected = selectedNodeId === item.id;
  const statusIcon = getStatusIcon(item.status);

  const handleEdit = () => {
    console.log('Edit clicked:', { id: item.id, label: item.label, type: item.type });
  };

  const handleDelete = () => {
    console.log('Delete clicked:', { id: item.id, label: item.label, type: item.type });
  };

  const handleMonitor = () => {
    console.log('Monitor clicked:', { id: item.id, label: item.label, type: item.type });
  };

  const handleCopy = () => {
    console.log('Copy clicked:', { id: item.id, label: item.label, type: item.type });
  };

  const handleClick = () => {
    console.log('Node clicked:', { id: item.id, label: item.label, type: item.type });
    onNodeSelect(item.id);
    if (hasChildren) {
      onNodeToggle(item.id);
    }
  };

  return (
    <div className="select-none">
      <ContextMenuForTreeNode
        item={item}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onMonitor={handleMonitor}
        onCopy={handleCopy}
      >
        <div
          className={`flex items-center hover:bg-gray-100 rounded-lg px-2 py-1.5 cursor-pointer transition-colors duration-150
            ${isSelected ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : ""}`}
          onClick={handleClick}
          style={{ paddingLeft: `${level * 16 + 8}px` }}
        >
          <div className="flex items-center w-full gap-2">
            {hasChildren ? (
              isExpanded ? (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-500" />
              )
            ) : (
              <span className="w-4" />
            )}

            {item.type === "folder" ? (
              <Folder className="h-4 w-4 text-gray-400" />
            ) : (
              statusIcon ? (
                <img src={statusIcon} alt="status" className="w-4 h-4" />
              ) : (
                <FileText className="h-4 w-4 text-gray-400" />
              )
            )}

            <span className={`text-sm ${isSelected ? "font-medium" : ""}`}>
              {item.label}
            </span>
          </div>
        </div>
      </ContextMenuForTreeNode>

      {hasChildren && isExpanded && (
        <div>
          {item.children?.map((child) => (
            <TreeNode
              key={child.id}
              item={child}
              level={level + 1}
              expandedNodes={expandedNodes}
              selectedNodeId={selectedNodeId}
              getStatusIcon={getStatusIcon}
              onNodeToggle={onNodeToggle}
              onNodeSelect={onNodeSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}