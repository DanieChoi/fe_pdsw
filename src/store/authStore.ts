// // src/features/store/authStore.ts
// import { create } from "zustand"
// import { persist } from "zustand/middleware"

// type AuthStore = {
//  // State
//  id: string
//  tenant_id: number
//  session_key: string
//  role_id: number
//  // Actions
//  setAuth: (id: string, tenant_id: number, session_key: string, role_id: number) => void
//  clearAuth: () => void
// }

// export const useAuthStore = create<AuthStore>()(
//  persist(
//    (set) => ({
//      // Initial state
//      id: '',
//      tenant_id: 0,
//      session_key: '', 
//      role_id: 0,
//      // Actions
//      setAuth: (id, tenant_id, session_key, role_id) => 
//        set({ id, tenant_id, session_key, role_id }),
//      clearAuth: () => 
//        set({ id: '', tenant_id: 0, session_key: '', role_id: 0 })
//    }),
//    {
//      name: 'auth-storage' // localStorage에 저장될 키 이름
//    }
//  )
// )

// src/features/store/authStore.ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type AuthStore = {
  // State
  id: string;
  tenant_id: number;
  session_key: string;
  role_id: number;
  // Actions
  setAuth: (id: string, tenant_id: number, session_key: string, role_id: number) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        // Initial state
        id: "",
        tenant_id: 0,
        session_key: "",
        role_id: 0,
        // Actions
        setAuth: (id, tenant_id, session_key, role_id) =>
          set({ id, tenant_id, session_key, role_id }, false, "setAuth"),
        clearAuth: () =>
          set({ id: "", tenant_id: 0, session_key: "", role_id: 0 }, false, "clearAuth"),
      }),
      {
        name: "auth-storage", // localStorage에 저장될 키 이름
      }
    ),
    { name: "AuthStore" } // Redux DevTools에 표시될 스토어 이름
  )
);
