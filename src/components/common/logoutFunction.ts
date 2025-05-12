import Cookies from 'js-cookie';
import { useTabStore } from "@/store/tabStore";
import { useAuthStore } from "@/store/authStore"; // Ensure this is the correct path to your authStore

const logoutFunction = () => {
    
    
    const rows = useTabStore.getState().rows;
    
    Cookies.remove('session_key');

    // AuthStore의 상태를 초기화
    useAuthStore.getState().clearAuth();

    // tabStore의 초기화, 모든 탭 제거
    useTabStore.getState().closeAllTabs("row-1", "default");

    // 만들어진 탭그룹이 있는지 찾기
    const sectionExists = rows.some(row =>
      row.sections.find(section => section.id === "section-1")
    );
    // 만들어진 탭그룹이 있다면 해당 탭그룹을 전부 초기화하고 section도 초기화
    if (sectionExists) {
      useTabStore.getState().closeAllTabs("row-1", "section-1");
      useTabStore.getState().removeSection("row-1", "section-1");
    }

    // 통합모니터창이 열려있다면 popup close
    // if (popupRef.current && !popupRef.current.closed) {
    //   popupRef.current.close();
    // }


    


}

export default logoutFunction;