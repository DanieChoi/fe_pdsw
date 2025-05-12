"use client";
import { useErrorAlertStore } from "@/store/errorAlertStore";
import CustomAlert from "@/components/shared/layout/CustomAlert";
import logoutFunction from "@/components/common/logoutFunction";
import {useRouter} from "next/navigation";


const GlobalErrorAlert = () => {
  
  const router = useRouter();
  const { isOpen, title, message, type, routerYn, onClose, closeAlert } = useErrorAlertStore();

  return (
    
    <CustomAlert
      isOpen={isOpen}
      title={title}
      message={message}
      type={type}
      onClose={ () => {
        logoutFunction();
        closeAlert();
        if (window.opener && routerYn) {
        // 팝업창일 경우 부모창으로 리디렉션
            window.opener.location.href = "/login";
            window.close();
        } else if(routerYn) {
            // 일반 페이지에서 라우터 사용
            router.push('/login');
        }
      }
    } 
    />
  );
};

export default GlobalErrorAlert;