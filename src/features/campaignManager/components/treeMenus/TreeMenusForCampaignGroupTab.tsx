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
  

  console.log("캡페인 그룹탭 트리 데이터", treeData);
  

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

// src/features/campaignManager/components/treeMenus/TreeMenusForCampaignGroupTab.tsx
// "use client";

// import { useEffect, useState, useCallback, memo, useMemo, useRef } from "react";
// import { useAuthStore, useMainStore } from "@/store";
// import { TreeNodeForSideBarCampaignGroupTab } from "@/features/campaignManager/components/treeMenus/TreeNodeForSideBarCampaignGroupTab";
// import SearchBarForSideMenuForCampaignGroupTab from "@/features/campaignManager/components/treeMenus/searchbar/SearchBarForSideMenuForCampaignGroupTab";
// import { create } from "zustand";

// // 트리 상태 관리를 위한 간단한 스토어
// interface TreeState {
//   expandedNodes: Set<string>;
//   selectedNodeId: string | null;
//   toggleNode: (nodeId: string) => void;
//   selectNode: (nodeId: string) => void;
// }

// const useTreeStore = create<TreeState>((set) => ({
//   expandedNodes: new Set<string>(),
//   selectedNodeId: null,
//   toggleNode: (nodeId) => set((state) => {
//     const newExpanded = new Set(state.expandedNodes);
//     if (newExpanded.has(nodeId)) {
//       newExpanded.delete(nodeId);
//     } else {
//       newExpanded.add(nodeId);
//     }
//     return { expandedNodes: newExpanded };
//   }),
//   selectNode: (nodeId) => set({ selectedNodeId: nodeId }),
// }));

// // Memoize the tree node component
// const MemoizedTreeNode = memo(TreeNodeForSideBarCampaignGroupTab);

// // Create a memoized loading state component
// const LoadingState = memo(() => (
//   <div className="p-4 text-center text-gray-500">데이터를 불러오는 중...</div>
// ));
// LoadingState.displayName = 'LoadingState';

// // Create a memoized error state component
// interface ErrorStateProps {
//   message?: string;
// }

// const ErrorState = memo(({ message }: ErrorStateProps) => (
//   <div className="p-4 text-center text-red-500">오류 발생: {message}</div>
// ));
// ErrorState.displayName = 'ErrorState';

// // Create a memoized empty state component
// const EmptyState = memo(() => (
//   <div className="p-4 text-center text-gray-500">표시할 데이터가 없습니다</div>
// ));
// EmptyState.displayName = 'EmptyState';

// // Create a memoized search bar component
// const SearchBarWrapper = memo(() => (
//   <div className="flex items-center border-b">
//     <SearchBarForSideMenuForCampaignGroupTab />
//   </div>
// ));
// SearchBarWrapper.displayName = 'SearchBarWrapper';

// // Main component that uses React.memo to prevent unnecessary renders
// export const TreeMenusForCampaignGroupTab = memo(function TreeMenusForCampaignGroupTab() {
//   // 로깅용 ref
//   const hasLoggedRef = useRef(false);
  
//   // 화면 갱신용 상태
//   const [forceUpdate, setForceUpdate] = useState(0);
  
//   // 메인 스토어에서 캠페인 그룹 데이터 가져오기
//   const { 
//     campaignGroups, 
//     campaignGroupsLoaded, 
//     campaignGroupsLoading,
//     tenants
//   } = useMainStore();

//   // 트리 상태 관리 스토어
//   const { expandedNodes, selectedNodeId, toggleNode, selectNode } = useTreeStore();
  
//   // 로그 출력 (한 번만)
//   useEffect(() => {
//     if (!hasLoggedRef.current && campaignGroups.length > 0) {
//       console.log("TreeMenusForCampaignGroupTab 렌더링", campaignGroups);
//       hasLoggedRef.current = true;
//     }
//   }, [campaignGroups]);
  
//   // 화면 강제 갱신 함수
//   const handleForceUpdate = useCallback(() => {
//     setForceUpdate(prev => prev + 1);
//     // 로그 ref 초기화
//     hasLoggedRef.current = false;
//   }, []);
  
//   // 캠페인 그룹에서 캠페인 제거 함수
//   const handleRemoveCampaignFromGroup = useCallback((campaignId: string | number) => {
//     const id = typeof campaignId === 'string' ? campaignId : campaignId.toString();
//     console.log(`캠페인 ID ${id}가 그룹 트리에서 제거됨`);
//     // 실제 제거 로직은 API 호출이 필요합니다
//     // 제거 후 데이터 갱신
//     handleForceUpdate();
//   }, [handleForceUpdate]);
  
//   // 전역 객체에 함수 할당
//   useEffect(() => {
//     window.campaignGroupTreeData = campaignGroups;
//     window.campaignGroupTreeForceUpdate = handleForceUpdate;
//     window.removeCampaignFromGroupTree = handleRemoveCampaignFromGroup;
    
//     return () => {
//       delete window.campaignGroupTreeData;
//       delete window.campaignGroupTreeForceUpdate;
//       delete window.removeCampaignFromGroupTree;
//     };
//   }, [campaignGroups, handleForceUpdate, handleRemoveCampaignFromGroup]);
  
//   // 노드 확장 관련 효과
//   useEffect(() => {
//     if (campaignGroups.length > 0 && tenants.length > 0) {
//       // 루트 노드 및 테넌트 노드 자동 확장
//       const newExpandedNodes = new Set<string>();
      
//       // 루트 노드 (가상)
//       newExpandedNodes.add('root');
      
//       // 테넌트 노드 확장
//       tenants.forEach(tenant => {
//         newExpandedNodes.add(`tenant-${tenant.tenant_id}`);
//       });
      
//       // 트리 스토어에 확장 상태 설정
//       useTreeStore.setState({ expandedNodes: newExpandedNodes });
//     }
//   }, [campaignGroups, tenants]);
  
//   // 트리 데이터 변환 함수
//   const transformToTreeData = useCallback(() => {
//     if (!campaignGroups.length || !tenants.length) return [];
    
//     // 트리 데이터 구조 생성
//     // 루트 노드
//     const rootNode = {
//       id: 'root',
//       name: '캠페인 그룹',
//       type: 'root' as const,
//       children: [] as any[]
//     };
    
//     // 테넌트별 그룹화
//     const groupsByTenant: Record<number, any[]> = {};
    
//     // 캠페인 그룹 정리
//     campaignGroups.forEach(group => {
//       if (!groupsByTenant[group.tenant_id]) {
//         groupsByTenant[group.tenant_id] = [];
//       }
      
//       groupsByTenant[group.tenant_id].push({
//         id: `group-${group.group_id}`,
//         name: group.group_name,
//         type: 'group' as const,
//         group_id: group.group_id,
//         tenant_id: group.tenant_id,
//         children: [] // 캠페인이 여기에 들어갈 수 있음
//       });
//     });
    
//     // 테넌트 노드 생성 및 자식으로 그룹 추가
//     tenants.forEach(tenant => {
//       const tenantNode = {
//         id: `tenant-${tenant.tenant_id}`,
//         name: tenant.tenant_name,
//         type: 'tenant' as const,
//         tenant_id: tenant.tenant_id,
//         children: groupsByTenant[tenant.tenant_id] || []
//       };
      
//       // 루트 노드에 테넌트 추가
//       rootNode.children.push(tenantNode);
//     });
    
//     return [rootNode];
//   }, [campaignGroups, tenants]);
  
//   // 트리 데이터 생성
//   const treeData = useMemo(() => transformToTreeData(), [transformToTreeData]);
  
//   // 트리 노드 렌더링
//   const renderTreeNode = useCallback((node: any, level: number) => {
//     // 노드 ID 문자열 변환
//     const nodeId = String(node.id);
    
//     // 자식 노드 렌더링
//     const children = node.children && node.children.length > 0 && expandedNodes.has(nodeId)
//       ? node.children.map((child: any) => renderTreeNode(child, level + 1))
//       : null;
    
//     return (
//       <div key={`${nodeId}-${forceUpdate}`} className="tree-node">
//         <div 
//           className={`flex items-center py-1 px-2 cursor-pointer ${selectedNodeId === nodeId ? 'bg-blue-100' : ''}`}
//           style={{ paddingLeft: `${level * 16 + 8}px` }}
//           onClick={() => selectNode(nodeId)}
//         >
//           {/* 확장/축소 아이콘 */}
//           {node.children && node.children.length > 0 && (
//             <span 
//               className="mr-1 inline-block w-4 text-center"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 toggleNode(nodeId);
//               }}
//             >
//               {expandedNodes.has(nodeId) ? '▼' : '►'}
//             </span>
//           )}
          
//           {/* 노드 아이콘 (타입별로 다른 아이콘) */}
//           <span className="mr-1">
//             {node.type === 'root' ? '📁' : 
//              node.type === 'tenant' ? '🏢' : 
//              node.type === 'group' ? '📋' : 
//              node.type === 'campaign' ? '📱' : '📄'}
//           </span>
          
//           {/* 노드 이름 */}
//           <span>{node.name}</span>
//         </div>
        
//         {/* 자식 노드들 */}
//         {children}
//       </div>
//     );
//   }, [expandedNodes, selectedNodeId, forceUpdate, selectNode, toggleNode]);
  
//   // 로딩 상태
//   if (campaignGroupsLoading || (!campaignGroupsLoaded && campaignGroups.length === 0)) {
//     return (
//       <div className="flex flex-col h-full">
//         <SearchBarWrapper />
//         <LoadingState />
//       </div>
//     );
//   }
  
//   // 데이터 없음
//   if (campaignGroupsLoaded && campaignGroups.length === 0) {
//     return (
//       <div className="flex flex-col h-full">
//         <SearchBarWrapper />
//         <EmptyState />
//       </div>
//     );
//   }
  
//   // 트리 메뉴 렌더링
//   return (
//     <div className="flex flex-col h-full">
//       <SearchBarWrapper />
//       <div className="flex flex-grow overflow-y-auto min-h-0 tree-node">
//         <div className="w-full">
//           {treeData.map(node => renderTreeNode(node, 0))}
//         </div>
//       </div>
//     </div>
//   );
// });

// // TypeScript type declarations for Window
// declare global {
//   interface Window {
//     campaignGroupTreeData?: any;
//     campaignGroupTreeForceUpdate?: () => void;
//     removeCampaignFromGroupTree?: (campaignId: string | number) => void;
//   }
// }