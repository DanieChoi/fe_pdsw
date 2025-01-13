import { create } from "zustand";

export interface UserInfoData {
    id: string;
    tenant_id: number;
    session_key: string;
}
const useStore = create<UserInfoData>((set) => ({
    id : '',
    tenant_id : 0,
    session_key : ''
}));

export default useStore;