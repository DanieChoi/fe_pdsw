
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
export type FilterMode = 'all' | 'filter' | 'skill';

// 정렬 옵션 타입
export interface SortOption {
  type: SortType;
  direction: SortDirection;
  nodeType?: NodeType;
}

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
  selectedMenus: number[];
  skilIdsForCampaignTreeMenu: string[];
  filterMode: FilterMode;
  
  // 액션
  sortByNodeType: (nodeType: NodeType, sortType: SortType, direction: SortDirection) => void;
  setCampaignSort: (option: SortOption) => void;
  setViewMode: (mode: ViewMode) => void;
  setSelectedNodeType: (nodeType: NodeType) => void;
  setSkillIdsForFilter: (skillIds: string[]) => void;
  setSkilIdsForCampaignTreeMenu: (skillIds: number[] | string[]) => void;
  toggleMenu: (menuId: number) => void;
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
      selectedNodeType: 'campaign',
      viewMode: 'campaign',
      selectedMenus: [],
      skilIdsForCampaignTreeMenu: [],
      filterMode: 'all',
      
      // 정렬 옵션 설정 (완전한 옵션으로 설정)
      setCampaignSort: (option) => 
        set(() => ({ 
          campaignSort: {
            type: option.type,
            direction: option.direction
          },
          selectedNodeType: option.nodeType || 'all',
          // 노드 타입에 맞게 뷰 모드 동기화
          ...(option.nodeType === 'tenant' && { viewMode: 'tenant' }),
          ...(option.nodeType === 'campaign' && { viewMode: 'campaign' }),
          // 'all' 타입일 경우 캠페인 뷰 모드로 설정
          ...(option.nodeType === 'all' && { viewMode: 'campaign' }),
        })),
      
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
          // 'all' 타입일 경우 캠페인 뷰 모드로 설정
          ...(nodeType === 'all' && { viewMode: 'campaign' }),
        })),
      
      // 뷰 모드 설정
      setViewMode: (mode) => 
        set((state) => ({
          viewMode: mode,
          // 뷰 모드에 따라 노드 타입 동기화
          ...(mode === 'tenant' && { selectedNodeType: 'tenant' }),
          ...(mode === 'campaign' && { 
            // 전체 모드인 경우 그대로 유지, 아니면 캠페인 모드로 설정
            selectedNodeType: state.selectedNodeType === 'all' 
              ? 'all' 
              : 'campaign' 
          }),
        })),
      
      // 노드 타입 직접 설정
      setSelectedNodeType: (nodeType) => 
        set(() => ({
          selectedNodeType: nodeType,
        })),
      
      // 필터링용 스킬 ID 설정 (신규 인터페이스)
      setSkillIdsForFilter: (skillIds) => 
        set(() => ({
          skilIdsForCampaignTreeMenu: skillIds,
          filterMode: skillIds.length > 0 ? 'filter' : 'all',
        })),
      
      // 캠페인 트리 메뉴용 스킬 ID 설정 (구 인터페이스 유지)
      setSkilIdsForCampaignTreeMenu: (skillIds) =>
        set(() => {
          // 문자열 배열로 변환 (숫자 배열이 들어올 수 있음)
          const stringSkillIds = Array.isArray(skillIds)
            ? skillIds.map(id => id.toString())
            : [];
            
          return {
            skilIdsForCampaignTreeMenu: stringSkillIds,
            // 스킬이 선택되었는지에 따라 필터 모드 자동 설정
            filterMode: stringSkillIds.length > 0 ? 'skill' : 'all',
          };
        }),
      
      // 메뉴 토글 (구 인터페이스 유지)
      toggleMenu: (menuId) =>
        set((state) => ({
          selectedMenus: state.selectedMenus.includes(menuId)
            ? state.selectedMenus.filter(id => id !== menuId)
            : [...state.selectedMenus, menuId],
        })),
      
      // 필터 모드 설정
      setFilterMode: (mode) => 
        set(() => ({
          filterMode: mode,
        })),
    }),
    {
      name: "tree-menu-storage", // localStorage에 저장될 키 이름
    }
  )
);