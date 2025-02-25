
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
import { SortType, TreeItem } from "@/features/campaignManager/types/typeForSidebar2";
import { TreeNode } from "./TreeNode";
import { useApiForGetTreeMenuDataForSideMenu } from "@/features/auth/hooks/useApiForGetTreeMenuDataForSideMenu";
import { getStatusIcon } from "@/components/shared/layout/utils/utils";

// ✅ 체크된 스킬 ID 배열을 가져오기 위한 store
import { useSideMenuCampaignTabStore } from "@/store/storeForSsideMenuCampaignTab";
import { useSortStore } from "@/components/shared/layout/comp/TabActions";
// 정렬 상태를 가져오기 위한 store

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
  
  // 정렬 상태 가져오기
  const { campaignSort } = useSortStore();

  // 가져온 체크된 스킬 ID 배열을 숫자로 변환
  const { skilIdsForCampaignTreeMenu } = useSideMenuCampaignTabStore();
  const selectedSkillIds = Array.isArray(skilIdsForCampaignTreeMenu)
    ? skilIdsForCampaignTreeMenu.map(id => Number(id))
    : [];

  // 캠페인 노드는 자식(skill) 중 하나라도 선택된 스킬이 있으면 통과,
  // 폴더는 id가 "nexus"인 경우 무조건 포함하고, 그렇지 않으면 자식 필터링 결과에 따라 포함
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
        // 테넌트(예: id가 "nexus"인 폴더)는 선택된 스킬 여부와 상관없이 항상 포함
        if (node.id === "nexus" || filteredChildren.length > 0) {
          acc.push({ ...node, children: filteredChildren });
        }
      }
      return acc;
    }, []);
  }

  // 캠페인 정렬 함수 (특정 폴더 내의 캠페인만 정렬)
  function sortCampaignsWithinFolder(items: TreeItem[], sortType: SortType): TreeItem[] {
    return items.map(item => {
      if (item.type === "folder" && item.children) {
        // 폴더 내 캠페인 노드만 선별하여 정렬
        const campaignChildren = item.children.filter(child => child.type === "campaign");
        const otherChildren = item.children.filter(child => child.type !== "campaign");
        
        let sortedCampaigns: TreeItem[];
        
        if (sortType === "name") {
          // 이름으로 정렬
          sortedCampaigns = [...campaignChildren].sort((a, b) => 
            a.label.localeCompare(b.label, 'ko')
          );
        } else if (sortType === "department") {
          // ID로 정렬 (ID가 문자열인 경우 숫자로 변환하여 정렬)
          sortedCampaigns = [...campaignChildren].sort((a, b) => {
            const aId = Number(a.id) || 0;
            const bId = Number(b.id) || 0;
            return aId - bId;
          });
        } else {
          sortedCampaigns = campaignChildren;
        }
        
        // 폴더의 자식들도 정렬 처리 (재귀)
        return {
          ...item,
          children: [
            ...sortedCampaigns,
            ...sortCampaignsWithinFolder(otherChildren, sortType)
          ]
        };
      }
      return item;
    });
  }

  // 선택된 스킬이 있으면 필터링, 없으면 원본 전체 출력
  const originalItems = treeData?.[0]?.items || [];
  const filteredItems =
    selectedSkillIds.length > 0 ? filterTreeItems(originalItems) : originalItems;
    
  // 정렬 적용 (최종 표시될 아이템)
  const sortedItems = sortCampaignsWithinFolder(filteredItems, campaignSort);

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
    return <div className="p-4 flex-1 min-h-[calc(100%-148px)]">Loading...</div>;
  }
  if (error) {
    return <div className="p-4 text-red-600 flex-1 min-h-[calc(100%-148px)]">{(error as Error).message}</div>;
  }

  console.log("원본 items:", originalItems);
  console.log("필터링된 items:", filteredItems);
  console.log("정렬된 items:", sortedItems);
  console.log("현재 정렬 방식:", campaignSort);

  return (
    <div className="flex-1 overflow-auto tree-node">
      {sortedItems.map((item: TreeItem) => (
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