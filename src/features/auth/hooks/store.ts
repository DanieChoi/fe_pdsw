import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface UserInfoData {
    id: string;
    tenant_id: number;
    session_key: string;
    role_id: number;
}

// Redux DevTools와 함께 스토어 생성
const useStore = create<UserInfoData>()(
    devtools(
        (set) => ({
            id: '',
            tenant_id: -1,
            session_key: '',
            role_id: -1
        }),
        {
            name: "UserStore", // Redux DevTools에 표시될 스토어 이름
            enabled: process.env.NODE_ENV !== 'production' // 개발 환경에서만 활성화
        }
    )
);

export default useStore;