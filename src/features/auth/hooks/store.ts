import { create } from "zustand";

export interface UserInfoData {
    id: string;
    tenant_id: number;
}
const useStore = create((set) => ({
    id : '',
    tenant_id : 0
}));

export default useStore;