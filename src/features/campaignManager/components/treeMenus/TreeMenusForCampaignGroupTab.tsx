// "use client";

// import { useEffect, useState } from "react"; // useState 추가
// import { TreeNodeForSideBarCampaignGroupTab } from "./TreeNodeForSideBarCampaignGroupTab";
// import { useAuthStore } from "@/store/authStore";
// import { useSideMenuCampaignGroupTabStore } from "@/store/storeForSideMenuCampaignGroupTab";
// import SearchBarForSideMenuForCampaignGroupTab from "./searchbar/SearchBarForSideMenuForCampaignGroupTab";
// import { useApiForGetTreeDataForCampaignGroupTab } from "@/features/campaignManager/hooks/useApiForGetTreeDataForCampaignGroupTab";

// export function TreeMenusForCampaignGroupTab() {
//   // forceUpdate 상태 추가
//   const [forceUpdate, setForceUpdate] = useState(0);

//   const { tenant_id } = useAuthStore();

//   // TanStack Query 커스텀 훅 사용 (tenant_id 자동 적용)
//   const { isLoading, error, data } = useApiForGetTreeDataForCampaignGroupTab(tenant_id);

//   const treeData                = useSideMenuCampaignGroupTabStore(state => state.treeData);
//   const expandedNodes           = useSideMenuCampaignGroupTabStore(state => state.expandedNodes);
//   const selectedNodeId          = useSideMenuCampaignGroupTabStore(state => state.selectedNodeId);
//   const toggleNode              = useSideMenuCampaignGroupTabStore(state => state.toggleNode);
//   const selectNode              = useSideMenuCampaignGroupTabStore(state => state.selectNode);
//   const expandTenantAndGroup    = useSideMenuCampaignGroupTabStore(state => state.expandTenantAndGroup);
//   const removeCampaignFromGroup = useSideMenuCampaignGroupTabStore(state => state.removeCampaignFromGroup);

//   console.log("TreeMenusForCampaignGroupTab 렌더링", treeData);


//   // 데이터가 로드된 후 테넌트와 그룹 레벨 확장
//   useEffect(() => {
//     if (treeData.length > 0) {
//       useSideMenuCampaignGroupTabStore.getState().expandTenantAndGroup();
//     }
//   }, [treeData]);

//   // 전역 객체 설정
//   useEffect(() => {
//     window.campaignGroupTreeData = treeData;

//     window.campaignGroupTreeForceUpdate = () => {
//       setForceUpdate(prev => prev + 1);
//     };

//     window.removeCampaignFromGroupTree = (campaignId: string | number) => {
//       const id = typeof campaignId === 'string' ? campaignId : campaignId.toString();

//       // 스토어 함수 호출하여 노드 제거
//       removeCampaignFromGroup(id);

//       // 강제 리렌더링
//       window.campaignGroupTreeForceUpdate?.();

//       console.log(`캠페인 ID ${id}가 그룹 트리에서 제거됨`);
//     };

//     return () => {
//       delete window.campaignGroupTreeData;
//       delete window.campaignGroupTreeForceUpdate;
//       delete window.removeCampaignFromGroupTree;
//     };
//   }, [treeData, removeCampaignFromGroup]);

  
//   return (
//     <div className="flex flex-col h-full">
//       {/* 선택된 아이디 정보 출력: {selectedNodeId} */}
//       <div className="flex items-center border-b">
//         <SearchBarForSideMenuForCampaignGroupTab />
//       </div>
//       <div className="flex flex-grow overflow-y-auto min-h-0 tree-node">
//         <div className="w-full">
//           {isLoading ? (
//             <div className="p-4 text-center text-gray-500">데이터를 불러오는 중...</div>
//           ) : error ? (
//             <div className="p-4 text-center text-red-500">오류 발생: {error.message}</div>
//           ) : treeData.length === 0 ? (
//             <div className="p-4 text-center text-gray-500">표시할 데이터가 없습니다</div>
//           ) : (
//             treeData.map((node) => (
//               <TreeNodeForSideBarCampaignGroupTab
//                 key={`${node.id}-${forceUpdate}`} // forceUpdate 추가
//                 node={node}
//                 level={0}
//                 expandedNodes={expandedNodes}
//                 selectedNodeId={selectedNodeId}
//                 onNodeToggle={toggleNode}
//                 onNodeSelect={selectNode}
//               />
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // window 객체에 타입 확장
// declare global {
//   interface Window {
//     campaignGroupTreeData?: any;
//     campaignGroupTreeForceUpdate?: () => void;
//     removeCampaignFromGroupTree?: (campaignId: string | number) => void;
//   }
// }

"use client";

import { useEffect, useState, useCallback, memo, useMemo, useRef } from "react";
import { useAuthStore } from "@/store/authStore";
import { useSideMenuCampaignGroupTabStore } from "@/store/storeForSideMenuCampaignGroupTab";
import { useApiForGetTreeDataForCampaignGroupTab } from "@/features/campaignManager/hooks/useApiForGetTreeDataForCampaignGroupTab";
import { TreeNodeForSideBarCampaignGroupTab } from "@/features/campaignManager/components/treeMenus/TreeNodeForSideBarCampaignGroupTab";
import SearchBarForSideMenuForCampaignGroupTab from "@/features/campaignManager/components/treeMenus/searchbar/SearchBarForSideMenuForCampaignGroupTab";

// Memoize the tree node component
const MemoizedTreeNode = memo(TreeNodeForSideBarCampaignGroupTab);

// Define selectors outside the component
const selectTreeData = (state: any) => state.treeData;
const selectExpandedNodes = (state: any) => state.expandedNodes;
const selectSelectedNodeId = (state: any) => state.selectedNodeId;
const selectToggleNode = (state: any) => state.toggleNode;
const selectSelectNode = (state: any) => state.selectNode;
const selectExpandTenantAndGroup = (state: any) => state.expandTenantAndGroup;
const selectRemoveCampaignFromGroup = (state: any) => state.removeCampaignFromGroup;
const selectTenantId = (state: any) => state.tenant_id;

// Create a memoized loading state component
const LoadingState = memo(() => (
  <div className="p-4 text-center text-gray-500">데이터를 불러오는 중...</div>
));
LoadingState.displayName = 'LoadingState';

// Create a memoized error state component
// Define interface for ErrorState props
interface ErrorStateProps {
  message?: string;
}

const ErrorState = memo(({ message }: ErrorStateProps) => (
  <div className="p-4 text-center text-red-500">오류 발생: {message}</div>
));
ErrorState.displayName = 'ErrorState';

// Create a memoized empty state component
const EmptyState = memo(() => (
  <div className="p-4 text-center text-gray-500">표시할 데이터가 없습니다</div>
));
EmptyState.displayName = 'EmptyState';

// Create a memoized search bar component
const SearchBarWrapper = memo(() => (
  <div className="flex items-center border-b">
    <SearchBarForSideMenuForCampaignGroupTab />
  </div>
));
SearchBarWrapper.displayName = 'SearchBarWrapper';

// Main component that uses React.memo to prevent unnecessary renders
export const TreeMenusForCampaignGroupTab = memo(function TreeMenusForCampaignGroupTab() {
  // Use a ref for logging to avoid re-renders
  const hasLoggedRef = useRef(false);
  
  const [forceUpdate, setForceUpdate] = useState(0);
  
  // Use individual selectors to minimize re-renders
  const tenant_id = useAuthStore(selectTenantId);
  const { isLoading, error } = useApiForGetTreeDataForCampaignGroupTab(tenant_id);
  
  // Only get the state values you need
  const treeData = useSideMenuCampaignGroupTabStore(selectTreeData);
  const expandedNodes = useSideMenuCampaignGroupTabStore(selectExpandedNodes);
  const selectedNodeId = useSideMenuCampaignGroupTabStore(selectSelectedNodeId);
  const toggleNode = useSideMenuCampaignGroupTabStore(selectToggleNode);
  const selectNode = useSideMenuCampaignGroupTabStore(selectSelectNode);
  const expandTenantAndGroup = useSideMenuCampaignGroupTabStore(selectExpandTenantAndGroup);
  const removeCampaignFromGroup = useSideMenuCampaignGroupTabStore(selectRemoveCampaignFromGroup);
  
  // Log only once with useEffect instead of on every render
  useEffect(() => {
    if (!hasLoggedRef.current) {
      console.log("TreeMenusForCampaignGroupTab 렌더링", treeData);
      hasLoggedRef.current = true;
    }
  }, [treeData]);
  
  // Memoize the handlers to prevent new function instances on every render
  const handleForceUpdate = useCallback(() => {
    setForceUpdate(prev => prev + 1);
    // Reset logging ref to allow a new log entry
    hasLoggedRef.current = false;
  }, []);
  
  const handleRemoveCampaignFromGroup = useCallback((campaignId: string | number) => {
    const id = typeof campaignId === 'string' ? campaignId : campaignId.toString();
    removeCampaignFromGroup(id);
    handleForceUpdate();
    console.log(`캠페인 ID ${id}가 그룹 트리에서 제거됨`);
  }, [removeCampaignFromGroup, handleForceUpdate]);
  
  // Set global objects only when values actually change
  useEffect(() => {
    window.campaignGroupTreeData = treeData;
    window.campaignGroupTreeForceUpdate = handleForceUpdate;
    window.removeCampaignFromGroupTree = handleRemoveCampaignFromGroup;
    
    return () => {
      delete window.campaignGroupTreeData;
      delete window.campaignGroupTreeForceUpdate;
      delete window.removeCampaignFromGroupTree;
    };
  }, [treeData, handleForceUpdate, handleRemoveCampaignFromGroup]);
  
  // Effect for expansion, with proper dependencies
  useEffect(() => {
    if (treeData && treeData.length > 0) {
      expandTenantAndGroup();
    }
  }, [treeData, expandTenantAndGroup]);
  
  // Define type for tree node
  interface TreeNode {
    id: string | number;
    name: string;
    type: "tenant" | "group" | "campaign" | "root";
    [key: string]: any; // Allow other properties
  }
  
  // Memoize the tree nodes to prevent unnecessary recalculation
  const treeNodes = useMemo(() => {
    if (!treeData || treeData.length === 0) return null;
    
    return treeData.map((node: TreeNode) => {
      // Convert node to have string id and ensure type is valid
      const nodeWithStringId = {
        ...node,
        id: String(node.id),
        type: node.type as "tenant" | "group" | "campaign" | "root"
      };
      
      return (
        <MemoizedTreeNode
          key={`${node.id}-${forceUpdate}`}
          node={nodeWithStringId}
          level={0}
          expandedNodes={expandedNodes}
          selectedNodeId={selectedNodeId}
          onNodeToggle={toggleNode}
          onNodeSelect={selectNode}
        />
      );
    });
  }, [treeData, forceUpdate, expandedNodes, selectedNodeId, toggleNode, selectNode]);
  
  // Return early for loading, error, and empty states
  if (isLoading) {
    return (
      <div className="flex flex-col h-full">
        <SearchBarWrapper />
        <LoadingState />
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="flex flex-col h-full">
        <SearchBarWrapper />
        <ErrorState message={error.message} />
      </div>
    );
  }
  
  if (!treeData || treeData.length === 0) {
    return (
      <div className="flex flex-col h-full">
        <SearchBarWrapper />
        <EmptyState />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col h-full">
      <SearchBarWrapper />
      <div className="flex flex-grow overflow-y-auto min-h-0 tree-node">
        <div className="w-full">
          {treeNodes}
        </div>
      </div>
    </div>
  );
});

// TypeScript type declarations for Window
declare global {
  interface Window {
    campaignGroupTreeData?: any;
    campaignGroupTreeForceUpdate?: () => void;
    removeCampaignFromGroupTree?: (campaignId: string | number) => void;
  }
}