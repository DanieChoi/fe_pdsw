// src/features/store/authStore.ts
import { create } from "zustand"
import { persist } from "zustand/middleware"

type AuthStore = {
  // State
  id: string
  tenant_id: number
  session_key: string
  // Actions
  setAuth: (id: string, tenant_id: number, session_key: string) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      // Initial state
      id: '',
      tenant_id: 0,
      session_key: '',
      // Actions
      setAuth: (id, tenant_id, session_key) => 
        set({ id, tenant_id, session_key }),
      clearAuth: () => 
        set({ id: '', tenant_id: 0, session_key: '' })
    }),
    {
      name: 'auth-storage' // localStorage에 저장될 키 이름
    }
  )
)