


import { useErrorAlertStore } from "@/store/errorAlertStore";

// 0512 현재 200 이외의 모든 에러는 Alert 후 로그아웃 (로그인페이지로 강제이동) 처리
const ServerErrorCheck = (requestContent: string, dataMessage: string, routerCheck? : boolean) => {

  // 함수라서 컴포넌트 렌더링이 불가능하므로 공용 에러 store 사용
  const openAlert = useErrorAlertStore.getState().openAlert;


  let errorMessage = requestContent + ' 요청이 실패하였습니다. \nPDS 서버 시스템에 확인하여 주십시오.';
  const errorTitle = '알림';
  
  if(dataMessage.split('||')[0] === 'undefined' ){

    errorMessage = 'PDS 서버 시스템과 연결할 수 없습니다. \n서버 동작 상태를 확인하여 주십시오. 프로그램을 종료합니다.'
  }
  else if (dataMessage.split('||')[0] === '5') {
    
    errorMessage = 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.';
  }else if (dataMessage.split('||')[0] === '200') {

    return null;
  }

  // routerCheck ==> 로그인 페이지 보낼지 여부 변수 (나중에 필요할 경우 let 으로 변경)
  if(routerCheck === undefined) {
    routerCheck = true;
  }

  

  return openAlert({
    title: errorTitle,
    message: errorMessage,
    type: "1",
    routerYn: routerCheck,
  });
  
  
  
};

export default ServerErrorCheck;