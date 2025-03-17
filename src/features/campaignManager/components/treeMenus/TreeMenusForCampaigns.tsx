"use client";

import { useEffect, useRef } from "react";
import { create } from "zustand";
import { TreeItem } from "@/features/campaignManager/types/typeForSidebar2";
import { TreeNode } from "./TreeNode";
import { useApiForGetTreeMenuDataForSideMenu } from "@/features/auth/hooks/useApiForGetTreeMenuDataForSideMenu";
import { getStatusIcon } from "@/components/shared/layout/utils/utils";
import { useSidebarWidthStore } from "@/store/useSidebarWidthStore";
import { useAuthStore } from "@/store";
import { useTreeMenuStore } from "@/store/storeForSsideMenuCampaignTab";

// 트리 노드 선택/확장 상태 관리
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
  // 인증 스토어에서 테넌트 ID 가져오기
  const { tenant_id } = useAuthStore();

  // 트리 데이터 API 호출
  const { data: treeData, isLoading, error } = useApiForGetTreeMenuDataForSideMenu();

  // 트리 노드 선택/확장 상태 관리
  const { selectedNodeId, expandedNodes, setSelectedNodeId, toggleNode, expandNodes } = useTreeStore();

  // 통합 스토어에서 정렬 및 필터링 상태 가져오기
  const {
    campaignSort,
    skilIdsForCampaignTreeMenu,
    filterMode
  } = useTreeMenuStore();

  // 사이드바 너비 설정
  const setTabWidth = useSidebarWidthStore?.((state) => state.setTabWidth);

  // 너비 측정용 ref
  const containerRef = useRef<HTMLDivElement>(null);
  const widthTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 선택된 스킬 ID 배열 변환
  const selectedSkillIds = Array.isArray(skilIdsForCampaignTreeMenu)
    ? skilIdsForCampaignTreeMenu.map(id => Number(id))
    : [];

  // 필터링 로직
  function filterTreeItems(items: TreeItem[]): TreeItem[] {
    // 필터 모드가 'all'이면 모든 아이템 표시
    if (filterMode === "all") return items;

    // 스킬 기반 필터링
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

  // 정렬 로직
  function sortCampaignsWithinFolder(items: TreeItem[]): TreeItem[] {
    return items.map(item => {
      if (item.type === "folder" && item.children) {
        const campaignChildren = item.children.filter(child => child.type === "campaign");
        const otherChildren = item.children.filter(child => child.type !== "campaign");

        let sortedCampaigns: TreeItem[];

        // 스토어에서 정렬 옵션 가져오기
        const { type: sortType, direction } = campaignSort;
        // 정렬 방향에 따른 계수
        const sortFactor = direction === 'asc' ? 1 : -1;

        if (sortType === "name") {
          // 이름 기준 정렬
          sortedCampaigns = [...campaignChildren].sort((a, b) =>
            sortFactor * a.label.localeCompare(b.label, 'ko')
          );
        } else if (sortType === "id") {
          // ID 기준 정렬
          sortedCampaigns = [...campaignChildren].sort((a, b) => {
            const aId = Number(a.id) || 0;
            const bId = Number(b.id) || 0;
            return sortFactor * (aId - bId);
          });
        } else {
          sortedCampaigns = campaignChildren;
        }

        return {
          ...item,
          children: [
            ...sortedCampaigns,
            ...sortCampaignsWithinFolder(otherChildren)
          ]
        };
      }
      return item;
    });
  }

  // 트리 너비 측정 함수
  const measureTreeWidth = () => {
    if (!containerRef.current || !setTabWidth) return;

    // 이전 타이머 정리
    if (widthTimeoutRef.current) {
      clearTimeout(widthTimeoutRef.current);
    }

    // DOM 업데이트 후 측정하도록 지연
    widthTimeoutRef.current = setTimeout(() => {
      if (!containerRef.current) return;

      // 캠페인 노드의 최대 너비 측정
      let campaignMaxWidth = 0;
      const campaignNodes = containerRef.current.querySelectorAll('.campaign-node');
      if (campaignNodes.length > 0) {
        campaignNodes.forEach((node) => {
          const nodeWidth = (node as HTMLElement).scrollWidth;
          campaignMaxWidth = Math.max(campaignMaxWidth, nodeWidth);
        });
      }

      // 폴더 노드의 최대 너비 측정
      let folderMaxWidth = 0;
      const folderNodes = containerRef.current.querySelectorAll('.folder-node');
      if (folderNodes.length > 0) {
        folderNodes.forEach((node) => {
          const nodeWidth = (node as HTMLElement).scrollWidth;
          folderMaxWidth = Math.max(folderMaxWidth, nodeWidth);
        });
      }

      // 전체 트리 아이템의 최대 너비
      let treeMaxWidth = 0;
      const treeItems = containerRef.current.querySelectorAll('.tree-item');
      if (treeItems.length > 0) {
        treeItems.forEach((item) => {
          const itemWidth = (item as HTMLElement).scrollWidth;
          treeMaxWidth = Math.max(treeMaxWidth, itemWidth);
        });
      }

      // 측정된 너비 중 가장 큰 값 사용
      let maxContentWidth = Math.max(campaignMaxWidth, folderMaxWidth, treeMaxWidth);

      // 최소값 설정
      maxContentWidth = Math.max(maxContentWidth, 200);

      // 여백 추가
      const idealWidth = maxContentWidth + 25;

      console.log("캠페인 탭 측정:", {
        campaignWidth: campaignMaxWidth,
        folderWidth: folderMaxWidth,
        treeWidth: treeMaxWidth,
        finalWidth: idealWidth
      });

      // 캠페인 탭 너비 설정
      setTabWidth("campaign", idealWidth);
    }, 300);
  };

  // 원본 항목 및 필터링/정렬 적용
  const originalItems = treeData?.[0]?.items || [];
  const filteredItems = filterTreeItems(originalItems);
  const sortedItems = sortCampaignsWithinFolder(filteredItems);

  // 데이터나 필터, 정렬 변경 시 너비 재측정
  useEffect(() => {
    if (!isLoading && !error && sortedItems.length > 0) {
      const timer = setTimeout(() => {
        measureTreeWidth();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [
    isLoading,
    error,
    sortedItems.length,
    campaignSort.type,
    campaignSort.direction,
    filterMode,
    selectedSkillIds.length
  ]);

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (widthTimeoutRef.current) {
        clearTimeout(widthTimeoutRef.current);
      }
    };
  }, []);

  // 초기 펼침 설정
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

  // 로딩 상태
  if (isLoading) {
    return <div className="p-4 flex-1 min-h-[calc(100%-148px)]">Loading...</div>;
  }

  // 에러 상태
  if (error) {
    return <div className="p-4 text-red-600 flex-1 min-h-[calc(100%-148px)]">{(error as Error).message}</div>;
  }

  // 트리 렌더링
  return (
    <div className="flex-1 overflow-auto tree-node" ref={containerRef}>
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