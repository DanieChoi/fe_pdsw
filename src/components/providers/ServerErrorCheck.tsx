

import CustomAlert from "../shared/layout/CustomAlert";
import logoutFunction from "../common/logoutFunction";
import { useRouter } from "next/navigation";


const ServerErrorCheck = (requestContent: string) => {

  const router = useRouter();

  
  const alertState = {
    isOpen: false,
    message: requestContent + ' 요청이 실패하였습니다. PDS 서버 시스템에 확인하여 주십시오.',
    title: "서버 연결 오류",
    type:"1",
  };
  
  return (
    <>
      {alertState.isOpen && (
        <CustomAlert
          message={alertState.message}
          title={alertState.title}
          type={alertState.type}
          isOpen={alertState.isOpen}
          onClose={() => {
            logoutFunction();

            // 홈 또는 로그인 페이지로 리다이렉트 
            router.push('/login');
          }}
        />
      )}
    </>
  );
};

export default ServerErrorCheck;