

// "use client";

// import { useState, useEffect } from 'react';
// import { create } from 'zustand';
// import { TreeItem } from '@/features/campaignManager/types/typeForSidebar2';
// import { TreeNode } from './TreeNode';
// import { useApiForGetTreeMenuDataForSideMenu } from "@/features/auth/hooks/useApiForGetTreeMenuDataForSideMenu";
// import { getStatusIcon } from "@/components/shared/layout/utils/utils";

// interface TreeState {
//   selectedNodeId: string | undefined;
//   expandedNodes: Set<string>;
//   setSelectedNodeId: (nodeId: string) => void;
//   toggleNode: (nodeId: string) => void;
//   expandNodes: (nodes: Set<string>) => void;
// }

// const useTreeStore = create<TreeState>((set) => ({
//   selectedNodeId: undefined,
//   expandedNodes: new Set<string>(),
//   setSelectedNodeId: (nodeId) => set({ selectedNodeId: nodeId }),
//   toggleNode: (nodeId) => set((state) => {
//     const newExpanded = new Set(state.expandedNodes);
//     if (newExpanded.has(nodeId)) {
//       newExpanded.delete(nodeId);
//     } else {
//       newExpanded.add(nodeId);
//     }
//     return { expandedNodes: newExpanded };
//   }),
//   expandNodes: (nodes) => set({ expandedNodes: nodes }),
// }));

// export function TreeMenusForCampaigns() {
//   const [mounted, setMounted] = useState(false);
//   const { data: treeData, isLoading, error } = useApiForGetTreeMenuDataForSideMenu();
  
//   const { 
//     selectedNodeId, 
//     expandedNodes,
//     setSelectedNodeId,
//     toggleNode,
//     expandNodes
//   } = useTreeStore();

//   // Mount 체크
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // 초기 확장 로직
//   useEffect(() => {
//     if (mounted && treeData && treeData.length > 0) {
//       const items = treeData[0].items || [];
//       const newExpanded = new Set<string>();

//       const expandUpToLevel = (nodes: TreeItem[], currentLevel: number, maxLevel: number) => {
//         for (const node of nodes) {
//           if (currentLevel < maxLevel) {
//             newExpanded.add(node.id);
//           }
//           if (node.children) {
//             expandUpToLevel(node.children, currentLevel + 1, maxLevel);
//           }
//         }
//       };

//       // 캠페인 트리메뉴의 경우 3레벨까지 자동으로 펼치기
//       expandUpToLevel(items, 0, 3);
//       expandNodes(newExpanded);
//     }
//   }, [mounted, treeData, expandNodes]);

//   // 서버사이드 렌더링 시 기본 로딩 상태 반환
//   if (!mounted) {
//     return <div className="p-4 min-h-[calc(100%-148px)]">Loading...</div>;
//   }

//   if (isLoading) {
//     return <div className="p-4 min-h-[calc(100%-148px)]">Loading...</div>;
//   }

//   if (error) {
//     return <div className="p-4 text-red-600">{error.message}</div>;
//   }

//   const items = treeData?.[0]?.items || [];

//   return (
//     <div className="flex-1 overflow-auto">
//       {items.map((item: TreeItem) => (
//         <TreeNode
//           key={item.id}
//           item={item}
//           level={0}
//           expandedNodes={expandedNodes}
//           selectedNodeId={selectedNodeId}
//           getStatusIcon={getStatusIcon}
//           onNodeToggle={toggleNode}
//           onNodeSelect={setSelectedNodeId}
//         />
//       ))}
//     </div>
//   );
// }

"use client";

import { useEffect } from "react";
import { create } from "zustand";
import { TreeItem } from "@/features/campaignManager/types/typeForSidebar2";
import { TreeNode } from "./TreeNode";
import { useApiForGetTreeMenuDataForSideMenu } from "@/features/auth/hooks/useApiForGetTreeMenuDataForSideMenu";
import { getStatusIcon } from "@/components/shared/layout/utils/utils";

// ✅ 체크된 스킬 ID 배열을 가져오기 위한 store
import { useSideMenuCampaignTabStore } from "@/store/storeForSsideMenuCampaignTab";

interface TreeState {
  selectedNodeId: string | undefined;
  expandedNodes: Set<string>;
  setSelectedNodeId: (nodeId: string) => void;
  toggleNode: (nodeId: string) => void;
  expandNodes: (nodes: Set<string>) => void;
}

const useTreeStore = create<TreeState>((set) => ({
  selectedNodeId: undefined,
  expandedNodes: new Set<string>(),
  setSelectedNodeId: (nodeId) => set({ selectedNodeId: nodeId }),
  toggleNode: (nodeId) =>
    set((state) => {
      const newExpanded = new Set(state.expandedNodes);
      if (newExpanded.has(nodeId)) {
        newExpanded.delete(nodeId);
      } else {
        newExpanded.add(nodeId);
      }
      return { expandedNodes: newExpanded };
    }),
  expandNodes: (nodes) => set({ expandedNodes: nodes }),
}));

export function TreeMenusForCampaigns() {
  const { data: treeData, isLoading, error } = useApiForGetTreeMenuDataForSideMenu();
  const { selectedNodeId, expandedNodes, setSelectedNodeId, toggleNode, expandNodes } =
    useTreeStore();

  // 가져온 체크된 스킬 ID 배열을 숫자로 변환
  const { skilIdsForCampaignTreeMenu } = useSideMenuCampaignTabStore();
  const selectedSkillIds = Array.isArray(skilIdsForCampaignTreeMenu)
    ? skilIdsForCampaignTreeMenu.map(id => Number(id))
    : [];

  // 캠페인 노드는 자식(skill) 중 체크된 스킬이 하나라도 있을 때만 통과하도록 필터링
  function filterTreeItems(items: TreeItem[]): TreeItem[] {
    return items.reduce((acc: TreeItem[], node: TreeItem) => {
      if (node.type === "campaign") {
        // 캠페인 노드의 자식 중 type이 "skill"인 노드에서 skillId 추출
        const campaignSkillIds = node.children
          ? node.children
              .filter(child => child.type === "skill")
              .map(child => Number(child.skillId))
          : [];
        const hasIntersection = selectedSkillIds.some(id => campaignSkillIds.includes(id));
        if (hasIntersection) {
          acc.push(node);
        }
      } else if (node.type === "folder") {
        // 폴더 노드는 자식들을 재귀적으로 필터링
        const filteredChildren = node.children ? filterTreeItems(node.children) : [];
        // 테넌트(예: id가 "nexus"인 폴더)는 무조건 출력
        if (node.id === "nexus" || filteredChildren.length > 0) {
          acc.push({ ...node, children: filteredChildren });
        }
      }
      return acc;
    }, []);
  }

  // 선택된 스킬이 있으면 필터링, 없으면 원본 전체 출력
  const originalItems = treeData?.[0]?.items || [];
  const filteredItems =
    selectedSkillIds.length > 0 ? filterTreeItems(originalItems) : originalItems;

  // 3레벨까지 자동으로 펼치기
  useEffect(() => {
    if (!isLoading && !error && treeData && treeData.length > 0) {
      const items = originalItems;
      const newExpanded = new Set<string>();

      const expandUpToLevel = (nodes: TreeItem[], currentLevel: number, maxLevel: number) => {
        for (const node of nodes) {
          if (currentLevel < maxLevel) {
            newExpanded.add(node.id);
          }
          if (node.children) {
            expandUpToLevel(node.children, currentLevel + 1, maxLevel);
          }
        }
      };

      expandUpToLevel(items, 0, 3);
      expandNodes(newExpanded);
    }
  }, [isLoading, error, treeData, expandNodes, originalItems]);

  if (isLoading) {
    return <div className="p-4 min-h-[calc(100%-148px)]">Loading...</div>;
  }
  if (error) {
    return <div className="p-4 text-red-600">{(error as Error).message}</div>;
  }

  console.log("원본 items:", originalItems);
  console.log("필터링된 items:", filteredItems);

  return (
    <div className="flex-1 overflow-auto">
      {filteredItems.map((item: TreeItem) => (
        <TreeNode
          key={item.id}
          item={item}
          level={0}
          expandedNodes={expandedNodes}
          selectedNodeId={selectedNodeId}
          getStatusIcon={getStatusIcon}
          onNodeToggle={toggleNode}
          onNodeSelect={setSelectedNodeId}
        />
      ))}
    </div>
  );
}
