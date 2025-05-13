import Cookies from 'js-cookie';
import { useTabStore } from "@/store/tabStore";
import { useAuthStore } from "@/store/authStore"; // Ensure this is the correct path to your authStore
import { useOperationStore } from '@/app/main/comp/operation/store/OperationStore';
import { useSessionCheckStore } from '@/store/sessionCheckStore';


const logoutFunction = () => {
    
    // 로그아웃 시 쿠키 삭제
    Cookies.remove('session_key');

    // AuthStore의 상태를 초기화
    useAuthStore.getState().clearAuth();

    // tabStore 초기화 정보
    useTabStore.getState().resetTabStore();

    // 운영설정 stroe 초기화
    useOperationStore.getState().clearOperationCampaign();

    // 세션 체크 store 초기화
    useSessionCheckStore.getState().clearSessionError();

    // 팝업 창 닫는 로직 추가해야함
    // localStorage.setItem('monitorPopupOpen', 'false');
    
    // --- store 초기화 로직 추가하실거 있으시면 추가하시면 됩니다 ---



}

export default logoutFunction;