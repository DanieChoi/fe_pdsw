// "use client";

// import { create } from "zustand";

// // 정렬 타입과 방향 정의
// export type SortType = "name" | "id";
// export type SortDirection = "asc" | "desc";
// export type NodeType = "all" | "tenant" | "group" | "campaign";

// // 필터 모드 정의
// type FilterMode = "all" | "skill";

// // 뷰 모드 정의 (테넌트 또는 캠페인까지)
// export type ViewMode = "tenant" | "campaign";

// // 정렬 옵션 타입
// export interface SortOption {
//   type: SortType;
//   direction: SortDirection;
//   nodeType?: NodeType;
// }

// // 트리 메뉴 통합 상태 스토어
// interface TreeMenuState {
//   // 정렬 관련 상태
//   campaignSort: SortOption;
//   selectedNodeType: NodeType;
  
//   // 필터 관련 상태
//   selectedMenus: number[];
//   skilIdsForCampaignTreeMenu: number[];
//   filterMode: FilterMode;
  
//   // 뷰 모드 상태 (추가)
//   viewMode: ViewMode;
  
//   // 정렬 액션
//   setCampaignSort: (option: SortOption) => void;
  
//   // 노드 타입별 정렬 액션
//   sortByNodeType: (nodeType: NodeType, field: SortType, direction: SortDirection) => void;
  
//   // 필터 관련 액션
//   toggleMenu: (menuId: number) => void;
//   setSkilIdsForCampaignTreeMenu: (skillIds: number[]) => void;
//   setFilterMode: (mode: FilterMode) => void;
  
//   // 뷰 모드 액션 (추가)
//   setViewMode: (mode: ViewMode) => void;
// }

// // 트리 메뉴 통합 스토어 생성
// export const useTreeMenuStore = create<TreeMenuState>((set) => ({
//   // 정렬 초기 상태
//   campaignSort: { type: "name", direction: "asc" },
//   selectedNodeType: "all",
  
//   // 필터 초기 상태
//   selectedMenus: [],
//   skilIdsForCampaignTreeMenu: [],
//   filterMode: "all",
  
//   // 뷰 모드 초기 상태 (추가)
//   viewMode: "campaign", // 기본값은 모든 노드 표시
  
//   // 정렬 액션
//   setCampaignSort: (option) => 
//     set(() => ({ 
//       campaignSort: option,
//       selectedNodeType: option.nodeType || "all"
//     })),
  
//   // 노드 타입별 정렬 액션
//   sortByNodeType: (nodeType, field, direction) => 
//     set(() => ({
//       campaignSort: { 
//         type: field, 
//         direction: direction, 
//         nodeType: nodeType 
//       },
//       selectedNodeType: nodeType
//     })),
  
//   // 필터 액션
//   toggleMenu: (menuId) =>
//     set((state) => ({
//       selectedMenus: state.selectedMenus.includes(menuId)
//         ? state.selectedMenus.filter((id) => id !== menuId)
//         : [...state.selectedMenus, menuId],
//     })),
    
//   setSkilIdsForCampaignTreeMenu: (skillIds) =>
//     set((state) => ({
//       skilIdsForCampaignTreeMenu: skillIds,
//       // 스킬이 선택되었는지에 따라 필터 모드 자동 설정
//       filterMode: skillIds.length > 0 ? "skill" : state.filterMode,
//     })),
    
//   setFilterMode: (mode) =>
//     set(() => ({
//       filterMode: mode,
//     })),
  
//   // 뷰 모드 액션 (추가)
//   setViewMode: (mode) =>
//     set(() => ({
//       viewMode: mode,
//     })),
// }));

// storeForSsideMenuCampaignTab.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

// 뷰 모드 타입: 테넌트 뷰 또는 캠페인 뷰
export type ViewMode = 'tenant' | 'campaign' | null;

// 노드 타입: 전체, 테넌트, 캠페인
export type NodeType = 'all' | 'tenant' | 'campaign';

// 정렬 필드 타입: 이름 또는 ID
export type SortType = 'name' | 'id';

// 정렬 방향: 오름차순 또는 내림차순
export type SortDirection = 'asc' | 'desc';

// 필터 모드: 전체 또는 필터링
export type FilterMode = 'all' | 'filter';

// 트리 메뉴 상태 인터페이스
export interface TreeMenuState {
  // 정렬 관련 상태
  campaignSort: {
    type: SortType;
    direction: SortDirection;
  };
  selectedNodeType: NodeType;
  
  // 뷰 모드
  viewMode: ViewMode;
  
  // 필터링 관련
  skilIdsForCampaignTreeMenu: string[];
  filterMode: FilterMode;
  
  // 액션
  sortByNodeType: (nodeType: NodeType, sortType: SortType, direction: SortDirection) => void;
  setViewMode: (mode: ViewMode) => void;
  setSelectedNodeType: (nodeType: NodeType) => void;
  setSkillIdsForFilter: (skillIds: string[]) => void;
  setFilterMode: (mode: FilterMode) => void;
}

// Zustand 스토어 생성
export const useTreeMenuStore = create<TreeMenuState>()(
  persist(
    (set) => ({
      // 기본 상태
      campaignSort: {
        type: 'name',
        direction: 'asc',
      },
      selectedNodeType: 'tenant',
      viewMode: 'tenant',
      skilIdsForCampaignTreeMenu: [],
      filterMode: 'all',
      
      // 정렬 액션 - 노드 타입별 정렬 설정
      sortByNodeType: (nodeType, sortType, direction) => 
        set((state) => ({
          campaignSort: {
            type: sortType,
            direction: direction,
          },
          selectedNodeType: nodeType,
          // 노드 타입에 맞게 뷰 모드 동기화
          ...(nodeType === 'tenant' && { viewMode: 'tenant' }),
          ...(nodeType === 'campaign' && { viewMode: 'campaign' }),
          // 'all' 타입은 현재 뷰 모드 유지
        })),
      
      // 뷰 모드 설정
      setViewMode: (mode) => 
        set((state) => ({
          viewMode: mode,
          // 뷰 모드에 따라 노드 타입 동기화
          ...(mode === 'tenant' && { selectedNodeType: 'tenant' }),
          ...(mode === 'campaign' && { selectedNodeType: 'campaign' }),
        })),
      
      // 노드 타입 직접 설정
      setSelectedNodeType: (nodeType) => 
        set(() => ({
          selectedNodeType: nodeType,
        })),
      
      // 필터링용 스킬 ID 설정
      setSkillIdsForFilter: (skillIds) => 
        set(() => ({
          skilIdsForCampaignTreeMenu: skillIds,
          filterMode: skillIds.length > 0 ? 'filter' : 'all',
        })),
      
      // 필터 모드 설정
      setFilterMode: (mode) => 
        set(() => ({
          filterMode: mode,
        })),
    }),
    {
      name: "treeMenu-storage", // 로컬 스토리지 키 이름
      partialize: (state) => ({
        campaignSort: state.campaignSort,
        selectedNodeType: state.selectedNodeType,
        viewMode: state.viewMode,
        skilIdsForCampaignTreeMenu: state.skilIdsForCampaignTreeMenu,
        filterMode: state.filterMode,
      }),
    }
  )
);