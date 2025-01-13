// src/features/store/tabStore.ts
import { create } from 'zustand'

type Tab = {
  id: string
  title: string
  content: string
}

type TabState = {
  tabs: Tab[]
  activeTab: string | null
  addTab: (tab: Tab) => void
  removeTab: (id: string) => void
  setActiveTab: (id: string) => void
}

export const useTabStore = create<TabState>()((set) => ({
  tabs: [],
  activeTab: null,
  addTab: (tab) => 
    set((state) => ({
      tabs: [...state.tabs, tab],
      activeTab: tab.id,
    })),
  removeTab: (id) => 
    set((state) => ({
      tabs: state.tabs.filter((tab) => tab.id !== id),
      activeTab: state.activeTab === id ? state.tabs[0]?.id ?? null : state.activeTab,
    })),
  setActiveTab: (id) => 
    set({ activeTab: id })
}))