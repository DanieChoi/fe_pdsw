// src/features/campaignManager/components/TreeNode.tsx
import { TreeItem } from '@/features/campaignManager/types/typeForSidebar2';

interface TreeNodeProps {
 item: TreeItem;
 level: number;
 expandedNodes: Set<string>;
 selectedNodeId?: string;
 getStatusIcon: (status?: string) => string | null;
 onNodeToggle: (nodeId: string) => void;
 onNodeSelect: (nodeId: string) => void;
}

export function TreeNode({
 item,
 level,
 expandedNodes,
 selectedNodeId,
 getStatusIcon,
 onNodeToggle,
 onNodeSelect
}: TreeNodeProps) {
 const hasChildren = item.children && item.children.length > 0;
 const isExpanded = expandedNodes.has(item.id);
 const isSelected = selectedNodeId === item.id;
 const statusIcon = getStatusIcon(item.status);

 return (
   <div className="select-none">
     <div 
       className={`flex items-center hover:bg-gray-100 rounded px-2 py-1 cursor-pointer
         ${isSelected ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' : ''}`}
       onClick={() => {
         onNodeSelect(item.id);
         if (hasChildren) {
           onNodeToggle(item.id);
         }
       }}
       style={{ paddingLeft: `${level * 12 + 8}px` }}
     >
       <div className="flex items-center w-full">
         {hasChildren ? (
           <img 
             src={`/sidebar-menu/arrow_${isExpanded ? 'minus' : 'plus'}.svg`}
             alt={isExpanded ? 'collapse' : 'expand'} 
             className="w-4 h-4 mr-1"
           />
         ) : (
           <span className="w-4 h-4 mr-1" />
         )}
         
         {item.type === 'folder' ? (
           <img 
             src="/sidebar-menu/tree_folder.svg" 
             alt="folder" 
             className="w-4 h-4 mr-2"
           />
         ) : (
           statusIcon && <img src={statusIcon} alt="status" className="w-4 h-4 mr-2" />
         )}
         
         <span className={`text-sm ${isSelected ? 'font-medium' : ''}`}>
           {item.label}
         </span>
       </div>
     </div>

     {hasChildren && isExpanded && (
       <div>
         {item.children?.map(child => (
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

export type { TreeNodeProps };