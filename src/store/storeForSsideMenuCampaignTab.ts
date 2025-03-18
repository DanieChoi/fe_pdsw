"use client";

import { create } from "zustand";

// 정렬 타입과 방향 정의
export type SortType = "name" | "id";
export type SortDirection = "asc" | "desc";
export type NodeType = "all" | "tenant" | "group" | "campaign";

// 필터 모드 정의
type FilterMode = "all" | "skill";

// 뷰 모드 정의 (테넌트 또는 캠페인까지)
export type ViewMode = "tenant" | "campaign";

// 정렬 옵션 타입
export interface SortOption {
  type: SortType;
  direction: SortDirection;
  nodeType?: NodeType;
}

// 트리 메뉴 통합 상태 스토어
interface TreeMenuState {
  // 정렬 관련 상태
  campaignSort: SortOption;
  selectedNodeType: NodeType;
  
  // 필터 관련 상태
  selectedMenus: number[];
  skilIdsForCampaignTreeMenu: number[];
  filterMode: FilterMode;
  
  // 뷰 모드 상태 (추가)
  viewMode: ViewMode;
  
  // 정렬 액션
  setCampaignSort: (option: SortOption) => void;
  
  // 노드 타입별 정렬 액션
  sortByNodeType: (nodeType: NodeType, field: SortType, direction: SortDirection) => void;
  
  // 필터 관련 액션
  toggleMenu: (menuId: number) => void;
  setSkilIdsForCampaignTreeMenu: (skillIds: number[]) => void;
  setFilterMode: (mode: FilterMode) => void;
  
  // 뷰 모드 액션 (추가)
  setViewMode: (mode: ViewMode) => void;
}

// 트리 메뉴 통합 스토어 생성
export const useTreeMenuStore = create<TreeMenuState>((set) => ({
  // 정렬 초기 상태
  campaignSort: { type: "name", direction: "asc" },
  selectedNodeType: "all",
  
  // 필터 초기 상태
  selectedMenus: [],
  skilIdsForCampaignTreeMenu: [],
  filterMode: "all",
  
  // 뷰 모드 초기 상태 (추가)
  viewMode: "campaign", // 기본값은 모든 노드 표시
  
  // 정렬 액션
  setCampaignSort: (option) => 
    set(() => ({ 
      campaignSort: option,
      selectedNodeType: option.nodeType || "all"
    })),
  
  // 노드 타입별 정렬 액션
  sortByNodeType: (nodeType, field, direction) => 
    set(() => ({
      campaignSort: { 
        type: field, 
        direction: direction, 
        nodeType: nodeType 
      },
      selectedNodeType: nodeType
    })),
  
  // 필터 액션
  toggleMenu: (menuId) =>
    set((state) => ({
      selectedMenus: state.selectedMenus.includes(menuId)
        ? state.selectedMenus.filter((id) => id !== menuId)
        : [...state.selectedMenus, menuId],
    })),
    
  setSkilIdsForCampaignTreeMenu: (skillIds) =>
    set((state) => ({
      skilIdsForCampaignTreeMenu: skillIds,
      // 스킬이 선택되었는지에 따라 필터 모드 자동 설정
      filterMode: skillIds.length > 0 ? "skill" : state.filterMode,
    })),
    
  setFilterMode: (mode) =>
    set(() => ({
      filterMode: mode,
    })),
  
  // 뷰 모드 액션 (추가)
  setViewMode: (mode) =>
    set(() => ({
      viewMode: mode,
    })),
}));