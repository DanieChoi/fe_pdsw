import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { EnvironmentListResponse } from "@/features/auth/types/environmentIndex";

type EnvironmentStore = {
  // State
  environmentData: EnvironmentListResponse | null;
  
  // Actions
  setEnvironment: (data: EnvironmentListResponse) => void;
  clearEnvironment: () => void;
};

export const useEnvironmentStore = create<EnvironmentStore>()(
  devtools(
    persist(
      (set) => ({
        // Initial state
        environmentData: null,
        
        // Actions
        setEnvironment: (data) => 
          set({ environmentData: data }, false, "setEnvironment"),
          
        clearEnvironment: () => 
          set({ environmentData: null }, false, "clearEnvironment"),
      }),
      {
        name: "environment-storage", // localStorage에 저장될 키 이름
      }
    ),
    { name: "EnvironmentStore" } // Redux DevTools에 표시될 스토어 이름
  )
);