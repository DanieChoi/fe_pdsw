// "use client";

// import { useEffect } from "react";
// import { create } from "zustand";
// import { TreeItem } from "@/features/campaignManager/types/typeForSidebar2";
// import { TreeNode } from "./TreeNode";
// import { useApiForGetTreeMenuDataForSideMenu } from "@/features/auth/hooks/useApiForGetTreeMenuDataForSideMenu";
// import { getStatusIcon } from "@/components/shared/layout/utils/utils";

// // ✅ 체크된 스킬 ID 배열을 가져오기 위한 store
// import { useSideMenuCampaignTabStore } from "@/store/storeForSsideMenuCampaignTab";

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
//   toggleNode: (nodeId) =>
//     set((state) => {
//       const newExpanded = new Set(state.expandedNodes);
//       if (newExpanded.has(nodeId)) {
//         newExpanded.delete(nodeId);
//       } else {
//         newExpanded.add(nodeId);
//       }
//       return { expandedNodes: newExpanded };
//     }),
//   expandNodes: (nodes) => set({ expandedNodes: nodes }),
// }));

// export function TreeMenusForCampaigns() {
//   const { data: treeData, isLoading, error } = useApiForGetTreeMenuDataForSideMenu();
//   const { selectedNodeId, expandedNodes, setSelectedNodeId, toggleNode, expandNodes } = useTreeStore();

//   // 가져온 체크된 스킬 ID 배열을 숫자로 변환
//   const { skilIdsForCampaignTreeMenu } = useSideMenuCampaignTabStore();
//   const selectedSkillIds = Array.isArray(skilIdsForCampaignTreeMenu)
//     ? skilIdsForCampaignTreeMenu.map(id => Number(id))
//     : [];

//   // 캠페인 노드는 자식(skill) 중 하나라도 선택된 스킬이 있으면 통과,
//   // 폴더는 id가 "nexus"인 경우 무조건 포함하고, 그렇지 않으면 자식 필터링 결과에 따라 포함
//   function filterTreeItems(items: TreeItem[]): TreeItem[] {
//     return items.reduce((acc: TreeItem[], node: TreeItem) => {
//       if (node.type === "campaign") {
//         const campaignSkillIds = Array.isArray(node.children)
//           ? node.children
//               .filter(child => child.type === "skill")
//               .map(child => Number(child.skillId))
//           : [];
//         const hasIntersection = selectedSkillIds.some(id => campaignSkillIds.includes(id));
//         if (hasIntersection) {
//           acc.push(node);
//         }
//       } else if (node.type === "folder") {
//         const filteredChildren = node.children ? filterTreeItems(node.children) : [];
//         // 테넌트(예: id가 "nexus"인 폴더)는 선택된 스킬 여부와 상관없이 항상 포함
//         if (node.id === "nexus" || filteredChildren.length > 0) {
//           acc.push({ ...node, children: filteredChildren });
//         }
//       }
//       return acc;
//     }, []);
//   }

//   // 선택된 스킬이 있으면 필터링, 없으면 원본 전체 출력
//   const originalItems = treeData?.[0]?.items || [];
//   const filteredItems =
//     selectedSkillIds.length > 0 ? filterTreeItems(originalItems) : originalItems;

//   // 3레벨까지 자동으로 펼치기
//   useEffect(() => {
//     if (!isLoading && !error && treeData && treeData.length > 0) {
//       const items = originalItems;
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

//       expandUpToLevel(items, 0, 3);
//       expandNodes(newExpanded);
//     }
//   }, [isLoading, error, treeData, expandNodes, originalItems]);

//   if (isLoading) {
//     return <div className="p-4 flex-1 min-h-[calc(100%-148px)]">Loading...</div>;
//   }
//   if (error) {
//     return <div className="p-4 text-red-600 flex-1 min-h-[calc(100%-148px)]">{(error as Error).message}</div>;
//   }

//   console.log("원본 items:", originalItems);
//   console.log("필터링된 items:", filteredItems);

//   return (
//     <div className="flex-1 overflow-auto tree-node">
//       {filteredItems.map((item: TreeItem) => (
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
import { useSideMenuCampaignTabStore } from "@/store/storeForSsideMenuCampaignTab";
import { useMainStore } from '@/store';

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
  const { selectedNodeId, expandedNodes, setSelectedNodeId, toggleNode, expandNodes } = useTreeStore();
  const { skilIdsForCampaignTreeMenu } = useSideMenuCampaignTabStore();
  const { campaigns, tenants } = useMainStore();

  const selectedSkillIds = Array.isArray(skilIdsForCampaignTreeMenu)
    ? skilIdsForCampaignTreeMenu.map(id => Number(id))
    : [];

  function filterTreeItems(items: TreeItem[]): TreeItem[] {
    return items.reduce((acc: TreeItem[], node: TreeItem) => {
      if (node.type === "campaign") {
        const campaignSkillIds = Array.isArray(node.children)
          ? node.children
              .filter(child => child.type === "skill")
              .map(child => Number(child.skillId))
          : [];
        const hasIntersection = selectedSkillIds.some(id => campaignSkillIds.includes(id));
        if (hasIntersection) {
          acc.push(node);
        }
      } else if (node.type === "folder") {
        const filteredChildren = node.children ? filterTreeItems(node.children) : [];
        if (node.id === "nexus" || filteredChildren.length > 0) {
          acc.push({ ...node, children: filteredChildren });
        }
      }
      return acc;
    }, []);
  }

  const originalItems = treeData?.[0]?.items || [];
  const filteredItems =
    selectedSkillIds.length > 0 ? filterTreeItems(originalItems) : originalItems;

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
    return <div className="p-4 h-full">Loading...</div>;
  }
  if (error) {
    return <div className="p-4 text-red-600 h-full">{(error as Error).message}</div>;
  }

  return (
    <div className="h-full overflow-y-auto min-h-0 tree-node">
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