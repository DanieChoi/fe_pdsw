
"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { create } from "zustand";
import { TreeItem } from "@/features/campaignManager/types/typeForSidebar2";
import { TreeNodeForCampaignTab } from "./TreeNodeForCampaignTab";
import { useApiForGetTreeMenuDataForSideMenu } from "@/features/auth/hooks/useApiForGetTreeMenuDataForSideMenu";
import { getStatusIcon } from "@/components/shared/layout/utils/utils";
import { useSidebarWidthStore } from "@/store/useSidebarWidthStore";
import { useAuthStore } from "@/store";
import { useTreeMenuStore, ViewMode } from "@/store/storeForSsideMenuCampaignTab";
import { useShallow } from "zustand/react/shallow";


// 트리 노드 선택/확장 상태 관리
interface TreeState {
  selectedNodeId: string | undefined;
  expandedNodes: Set<string>;
  previousExpandedState: Set<string>; // 이전 확장 상태 저장
  setSelectedNodeId: (nodeId: string) => void;
  toggleNode: (nodeId: string) => void;
  expandNodes: (nodes: Set<string>) => void;
  savePreviousState: () => void; // 현재 확장 상태를 저장
  restorePreviousState: () => void; // 이전 확장 상태 복원
}

const useTreeStore = create<TreeState>((set, get) => ({
  selectedNodeId: undefined,
  expandedNodes: new Set<string>(),
  previousExpandedState: new Set<string>(),
  setSelectedNodeId: (nodeId) => set({ selectedNodeId: nodeId }),
  toggleNode: (nodeId) =>
    set((state) => {
      console.log(`노드 토글: ${nodeId}`);
      const newExpanded = new Set(state.expandedNodes);
      if (newExpanded.has(nodeId)) {
        newExpanded.delete(nodeId);
      } else {
        newExpanded.add(nodeId);
      }
      console.log(`확장된 노드 수: ${newExpanded.size}`);
      return { expandedNodes: newExpanded };
    }),
  expandNodes: (nodes) => set({ expandedNodes: nodes }),
  savePreviousState: () => set((state) => ({
    previousExpandedState: new Set(state.expandedNodes)
  })),
  restorePreviousState: () => set((state) => ({
    expandedNodes: new Set(state.previousExpandedState)
  }))
}));

export function TreeMenusForCampaigns() {
  // UI 강제 업데이트용 상태
  const [forceUpdate, setForceUpdate] = useState(0);
  const [lastViewMode, setLastViewMode] = useState<ViewMode | null>(null);

  // 인증 스토어에서 테넌트 ID 가져오기
  const { tenant_id } = useAuthStore();

  // 트리 데이터 API 호출
  const { data: treeData, isLoading, error } = useApiForGetTreeMenuDataForSideMenu();

  useEffect(() => {
    console.log("트리 데이터 at 캠페인탭:", treeData);
  }, []);

  // 트리 노드 선택/확장 상태 관리
  const [
    setSelectedNodeId,
    toggleNode,
    expandNodes,
    savePreviousState,
    restorePreviousState,
    selectedNodeId,
    expandedNodes
  ] = useTreeStore(
    useShallow(state => [
      state.setSelectedNodeId,
      state.toggleNode,
      state.expandNodes,
      state.savePreviousState,
      state.restorePreviousState,
      state.selectedNodeId,
      state.expandedNodes
    ])
  );

  // 원본 아이템을 useMemo로 감싸서 의존성 배열 변경 방지
  const originalItems = useMemo(() => {
    return treeData?.[0]?.items || [];
  }, [treeData]);

  // expandNodes 함수와 원본 아이템을 전역으로 사용할 수 있도록 저장
  useEffect(() => {
    window.treeExpandNodes = expandNodes;
    window.originalTreeItems = originalItems;
    window.treeSavePreviousState = savePreviousState;
    window.treeRestorePreviousState = restorePreviousState;
  }, [expandNodes, originalItems, savePreviousState, restorePreviousState]);


  // 통합 스토어에서 정렬 및 필터링 상태 가져오기
  const {
    campaignSort,
    skilIdsForCampaignTreeMenu,
    filterMode,
    viewMode,
    selectedNodeType
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
    // 필터 모드가 'all'이면 필터링 없이 모든 항목 반환
    if (filterMode === "all") {
      return items;
    }

    // 스킬 기반 필터링 (filterMode가 'skill' 또는 'filter'인 경우)
    const filteredItems = items.reduce((acc: TreeItem[], node: TreeItem) => {
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

    return filteredItems;
  }

  // 수정된 트리 아이템 정렬 함수
  function sortTreeItems(items: TreeItem[]): TreeItem[] {
    // 정렬 파라미터 가져오기
    const { type: sortType, direction } = campaignSort;
    const sortFactor = direction === 'asc' ? 1 : -1;
    const nodeType = selectedNodeType; // 'all', 'tenant', 'campaign'

    return items.map(item => {
      // NEXUS 루트 노드 처리
      if (item.id === "nexus" && item.children) {
        // 테넌트 폴더와 기타 아이템 분리
        const tenantFolders = item.children.filter(child => child.type === "folder");
        const otherItems = item.children.filter(child => child.type !== "folder");

        // 테넌트 폴더 정렬 - 노드 타입이 'all' 또는 'tenant'인 경우에만 
        let sortedTenantFolders = [...tenantFolders];

        if (nodeType === 'all' || nodeType === 'tenant') {
          // 테넌트 정렬 로직 적용
          if (sortType === "name") {
            sortedTenantFolders = sortedTenantFolders.sort((a, b) =>
              sortFactor * a.label.localeCompare(b.label, 'ko')
            );
          } else if (sortType === "id") {
            sortedTenantFolders = sortedTenantFolders.sort((a, b) => {
              const aId = parseInt(a.id, 10) || 0;
              const bId = parseInt(b.id, 10) || 0;
              return sortFactor * (aId - bId);
            });
          }
        }

        // 테넌트 폴더의 자식들 처리
        const processedTenantFolders = sortedTenantFolders.map(tenant => {
          if (tenant.children) {
            // 캠페인과 기타 자식 분리
            const campaignChildren = tenant.children.filter(child => child.type === "campaign");
            const otherChildren = tenant.children.filter(child => child.type !== "campaign");

            // 캠페인 정렬 - 노드 타입이 'all' 또는 'campaign'인 경우에만
            let sortedCampaigns = [...campaignChildren];

            if (nodeType === 'all' || nodeType === 'campaign') {
              // 캠페인 정렬 로직 적용
              if (sortType === "name") {
                sortedCampaigns = sortedCampaigns.sort((a, b) =>
                  sortFactor * a.label.localeCompare(b.label, 'ko')
                );
              } else if (sortType === "id") {
                sortedCampaigns = sortedCampaigns.sort((a, b) => {
                  const aId = parseInt(a.id, 10) || 0;
                  const bId = parseInt(b.id, 10) || 0;
                  return sortFactor * (aId - bId);
                });
              }
            }

            // 기타 자식 정렬 (재귀적으로)
            const sortedOtherChildren = sortTreeItems(otherChildren);

            return {
              ...tenant,
              children: [...sortedCampaigns, ...sortedOtherChildren]
            };
          }
          return tenant;
        });

        return {
          ...item,
          children: [...processedTenantFolders, ...otherItems]
        };
      }
      // 일반 폴더 아이템 처리
      else if (item.type === "folder" && item.children) {
        // 폴더 내의 캠페인 항목 정렬
        const campaignChildren = item.children.filter(child => child.type === "campaign");
        const otherChildren = item.children.filter(child => child.type !== "campaign");

        // 캠페인 정렬 - 노드 타입이 'all' 또는 'campaign'인 경우에만
        let sortedCampaigns = [...campaignChildren];

        if (nodeType === 'all' || nodeType === 'campaign') {
          // 캠페인 정렬 로직 적용
          if (sortType === "name") {
            sortedCampaigns = sortedCampaigns.sort((a, b) =>
              sortFactor * a.label.localeCompare(b.label, 'ko')
            );
          } else if (sortType === "id") {
            sortedCampaigns = sortedCampaigns.sort((a, b) => {
              const aId = parseInt(a.id, 10) || 0;
              const bId = parseInt(b.id, 10) || 0;
              return sortFactor * (aId - bId);
            });
          }
        }

        // 기타 자식 정렬
        const sortedOtherChildren = sortTreeItems(otherChildren);

        return {
          ...item,
          children: [...sortedCampaigns, ...sortedOtherChildren]
        };
      }

      // 기타 타입은 그대로 반환
      return item;
    });
  }

  // 정렬 상태가 변경될 때마다 UI 업데이트 강제
  useEffect(() => {
    console.log("정렬 상태 변경 감지:", {
      type: campaignSort.type,
      direction: campaignSort.direction,
      nodeType: selectedNodeType
    });
    setForceUpdate(prev => prev + 1);
  }, [campaignSort.type, campaignSort.direction, selectedNodeType]);

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

      // 여백 추가 (항상 캠페인 여백 사용)
      const idealWidth = maxContentWidth + 25;

      // 캠페인 탭 너비 설정
      //setTabWidth("campaign", idealWidth);
    }, 300);
  };

  // 필터링/정렬 적용
  const filteredItems = filterTreeItems(originalItems);
  const sortedItems = sortTreeItems(filteredItems);

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
    selectedSkillIds.length,
    viewMode,
    selectedNodeType,
    forceUpdate,
    measureTreeWidth
  ]);

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (widthTimeoutRef.current) {
        clearTimeout(widthTimeoutRef.current);
      }
    };
  }, []);

  // 뷰 모드 변경 감지
  useEffect(() => {
    // 뷰 모드가 변경될 때마다 현재 확장 상태를 저장
    if (lastViewMode !== null && lastViewMode !== viewMode) {
      // 테넌트 모드에서 캠페인 모드로 전환하는 경우, 테넌트 모드의 상태를 저장
      if (lastViewMode === 'tenant' && viewMode === 'campaign') {
        savePreviousState();
        console.log('테넌트 뷰 상태 저장됨', expandedNodes.size);
      }
    }

    setLastViewMode(viewMode);
  }, [viewMode, lastViewMode, expandedNodes, savePreviousState]);

  // 노드 확장 헬퍼 함수들 - 전역 함수로 등록
  useEffect(() => {
    if (!isLoading && !error && treeData && treeData.length > 0) {
      const items = originalItems;

      // NEXUS와 테넌트 노드까지만 확장하는 함수
      // NEXUS와 테넌트 노드까지만 확장하는 함수
      const expandTenantsOnly = () => {
        // 이전에 테넌트 뷰에서 사용자가 직접 확장/축소한 상태가 있는지 확인
        const hasCustomTenantState = useTreeStore.getState().previousExpandedState.size > 0;

        // 사용자가 직접 조작한 테넌트 뷰 상태가 있으면 복원
        if (hasCustomTenantState && viewMode === 'tenant') {
          restorePreviousState();
          console.log('테넌트 뷰의 사용자 정의 상태 복원됨', useTreeStore.getState().expandedNodes.size);
          return;
        }

        // 그렇지 않으면 기본 테넌트 확장 상태 생성 - 루트 노드만 확장
        const newExpanded = new Set<string>();

        // 루트 노드(NEXUS)만 확장
        const rootNode = items.find(item => item.id.toLowerCase() === "nexus");
        if (rootNode) {
          newExpanded.add(rootNode.id);

          // 루트 노드의 직계 자식(테넌트)은 접힌 상태로 시작
          // 테넌트 노드의 ID를 추가하지 않음 (접힌 상태로 유지)
        }

        expandNodes(newExpanded);
        console.log("테넌트 뷰: 루트만 확장, 테넌트 폴더는 접힘 상태", newExpanded.size);
      };

      // 모든 노드 확장 함수
      // const expandAllNodes = () => {
      //   // 루트 노드만 확장하는 초기 상태
      //   const newExpanded = new Set<string>();

      //   // 루트 노드(NEXUS)만 확장하고 나머지는 접힌 상태로 시작
      //   const rootNode = items.find(item => item.id.toLowerCase() === "nexus");
      //   if (rootNode) {
      //     newExpanded.add(rootNode.id);

      //     // 루트 노드의 직계 자식(테넌트)은 접힌 상태로 시작
      //     // 테넌트 노드의 ID를 추가하지 않음 (접힌 상태로 유지)
      //   }

      //   expandNodes(newExpanded);
      //   console.log("캠페인 뷰: 루트만 확장, 필요시 수동으로 확장 가능", newExpanded.size);
      // };

      const expandAllNodes = () => {
        const newExpanded = new Set<string>();

        const expandAll = (nodes: TreeItem[]) => {
          for (const node of nodes) {
            // 자식 노드가 있는 경우에만 expanded 상태에 추가
            if (node.children && node.children.length > 0) {
              newExpanded.add(node.id);
              expandAll(node.children);
            }
          }
        };

        expandAll(items);
        expandNodes(newExpanded);
        console.log("캠페인 뷰: 자식이 있는 노드만 확장됨", newExpanded.size);
      };

      // 초기 확장 상태 설정
      if (selectedNodeType === 'tenant') {
        expandTenantsOnly();
      } else {
        expandAllNodes();
      }

      // 함수를 전역 객체에 등록
      window.expandTenantsOnly = expandTenantsOnly;
      window.expandAllNodes = expandAllNodes;
    }
  }, [isLoading, error, treeData, expandNodes, originalItems, selectedNodeType, viewMode, restorePreviousState]);

  // 로딩 상태
  if (isLoading) {
    return <div className="p-2 flex-1 min-h-[calc(100%-148px)] text-sm">Loading...</div>;
  }

  // 에러 상태
  if (error) {
    return <div className="p-2 text-red-600 flex-1 min-h-[calc(100%-148px)] text-sm">{(error as Error).message}</div>;
  }

  // 트리 렌더링
  return (
    <div className="flex-1 overflow-auto tree-node text-sm" ref={containerRef}>
      {sortedItems.map((item: TreeItem) => (
        <TreeNodeForCampaignTab
          key={`${item.id}-${forceUpdate}`}
          item={item}
          level={0}
          expandedNodes={expandedNodes}
          selectedNodeId={selectedNodeId}
          getStatusIcon={getStatusIcon}
          onNodeToggle={toggleNode}
          onNodeSelect={setSelectedNodeId}
          compact={true}
        />
      ))}
    </div>
  );
}