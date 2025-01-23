// src/features/campaignManager/components/treeMenus/TreeMenusForCampaigns.tsx
import { useApiForGetTreeMenuDataForCampaignTab } from "@/features/auth/hooks/useApiForGetTreeMenuDataForCampaignTab";
import { TreeItem } from '@/features/campaignManager/types/typeForSidebar2';
import { TreeNode } from "./TreeNode";

interface TreeMenuProps {
 expandedNodes: Set<string>;
 selectedNodeId?: string;
 getStatusIcon: (status?: string) => string | null;
 onNodeToggle: (nodeId: string) => void;
 onNodeSelect: (nodeId: string) => void;
}

export function TreeMenusForCampaigns({
 expandedNodes,
 selectedNodeId,
 getStatusIcon,
 onNodeToggle,
 onNodeSelect
}: TreeMenuProps) {
 const { treeData, isLoading, error } = useApiForGetTreeMenuDataForCampaignTab();
 
 if (isLoading) {
   return <div className="p-4">Loading...</div>;
 }

 if (error) {
   return <div className="p-4 text-red-600">{error.message}</div>;
 }

 const items = treeData[0]?.items || [];

 return (
   <div className="flex-1 overflow-auto">
     {items.map((item: TreeItem) => (
       <TreeNode
         key={item.id}
         item={item}
         level={0}
         expandedNodes={expandedNodes}
         selectedNodeId={selectedNodeId}
         getStatusIcon={getStatusIcon}
         onNodeToggle={onNodeToggle}
         onNodeSelect={onNodeSelect}
       />
     ))}
   </div>
 );
}