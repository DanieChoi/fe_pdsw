// src\store\storeForSideMenuCounselorTab.ts

// todo1:
// 현재 사이드 메뉴에서 검색 조건으로 블랜딩 종류(1: 인바운드, 2: 아웃바운드, 3: 블랜드) 에 대한 전역 상태 설정

// todo2:
// ITreeNodeForCounselorListForSideBar 에서 블랜딩 종류에 따라 아이콘을 다르게 표시하도록 수정

import { create } from 'zustand';

// Define types for blend kinds
export type BlendKind = 1 | 2 | 3 | null; // 1: inbound, 2: outbound, 3: blend

interface CounselorFilterState {
  selectedBlendKind: BlendKind;
  setSelectedBlendKind: (blendKind: BlendKind) => void;
  resetFilter: () => void;
}

export const useCounselorFilterStore = create<CounselorFilterState>((set) => ({
  selectedBlendKind: null,
  setSelectedBlendKind: (blendKind) => set({ selectedBlendKind: blendKind }),
  resetFilter: () => set({ selectedBlendKind: null }),
}));