import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import CustomAlert from "../shared/layout/CustomAlert";
import Cookies from 'js-cookie';
import { useTabStore } from "@/store/tabStore";

const AuthTimeOutCheck = ({ popupRef }: { popupRef: React.MutableRefObject<Window | null> }) => {

  const expiresCheck = useAuthStore((state) => state.expires_check);
  const setExpiresCheck = useAuthStore((state) => state.setExpiresCheck);

  const [alertState, setAlertState] = useState({
    isOpen: false,
    message: "",
    title: "",
    type:"1",
  });  

  const router = useRouter();

  useEffect(() => {
    // console.log("AuthTimeOutCheck: expiresCheck 상태:", expiresCheck);
    if (expiresCheck) {

      // 수동으로 popupRef를 props로 전달받은 이유 ==> onClose 이벤트에 로그아웃 함수를 호출하면 닫기버튼을 누르기전까지 popupRef가 닫히지 않음
      if (popupRef.current && !popupRef.current.closed) {
        popupRef.current.close();
      }

      setAlertState({
        ...alertState,
        isOpen: true,
        message: "로그인 세션시간이 만료되었습니다. 로그인 페이지로 이동합니다.",
        title: "세션 만료",
      });
    }
    
  }, [expiresCheck]);

  return (
    <>
      {alertState.isOpen && (
        <CustomAlert
          message={alertState.message}
          title={alertState.title}
          type={alertState.type}
          isOpen={alertState.isOpen}
          onClose={() => {
            setAlertState((prev) => ({ ...prev, isOpen: false })); // Alert 닫기
            
            Cookies.remove("session_key"); // 쿠키 제거
            useAuthStore.getState().clearAuth(); // AuthStore의 상태를 초기화
            useTabStore.getState().closeAllTabs("row-1", "default"); // tabStore의 초기화, 모든 탭 제거
            router.push("/login"); // 로그인 페이지로 리다이렉트

            setExpiresCheck(false); // 상태 초기화
          }}
        />
      )}
    </>
  );
};

export default AuthTimeOutCheck;