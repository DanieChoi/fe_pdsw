// src/features/auth/api/login.ts
import { LoginCredentials, LoginRequest, LoginResponse, LoginResponseFirst } from '../types/loginIndex';
import { axiosInstance, externalAxiosInstance } from '@/lib/axios';
import useStore, { UserInfoData } from '@/features/auth/hooks/store';
import Cookies from 'js-cookie';

export const loginApi = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    try {
      // 첫 번째 로그인 API 호출 (외부)
      const { data: dataFirst } = await externalAxiosInstance.get<LoginResponseFirst>(
        `https://jedai-qa-web.nexuscommunity.net:9443/agent/loginCubeC`,
        {
          params: {
            id: credentials.user_name,
            passwd: credentials.password
          }
        }
      );

      if (typeof dataFirst.id === 'undefined') {
        throw new Error('서버 에러입니다.');
      }

      // 두 번째 로그인 API 호출 (내부)
      const loginData: LoginRequest = {
        grant_type: "password",
        device_id: "api_test",
        user_name: credentials.user_name,
        password: credentials.password,
      };

      const { data } = await axiosInstance.post<LoginResponse>('/login', loginData);

      if (data.result_code !== 0) {
        throw new Error(data.result_msg || '로그인 실패');
      }

      //SSE 실시간 이벤트 구독
      let tenant_id;

      if (data.role_id == 5 || data.role_id == 6) {
        tenant_id = 0;
      } else {
        tenant_id = data.tenant_id;
      }

      // 로그인 안되게 수정
      if (data.role_id == 1 || data.role_id == 2 || data.role_id == 3) {
        throw new Error('접근권한이 없습니다.');
      }

      // console.log("단계 = ", process.env.NEXT_PUBLIC_API_URL);

      // const DOMAIN = process.env.NEXT_PUBLIC_API_URL;

      // // const eventSource = new EventSource(`${DOMAIN}/api/v1/notification/${tenant_id}/subscribe`);
      // const eventSource = new EventSource(`http://10.10.30.228:4000/api/v1/notification/${tenant_id}/subscribe`);

      // console.log("eventSource = ", eventSource);

      // eventSource.addEventListener("message", (event) => {
      //   //실시간 이벤트를 받아서 처리(함수로 처리하면 좋을 듯)
      //   console.log("event = ", event.data);
      // });

      // 사용자 정보 전역 상태 저장
      const userInfo: UserInfoData = {
        id: dataFirst.id,
        tenant_id: data.tenant_id,
        session_key: data.session_key
      };
      useStore.setState(userInfo);

      // 로그인 응답 데이터 로깅
      console.log('Login response:', data);
      console.log('Session key:', data.session_key);

      // 클라이언트에서 직접 쿠키 설정
      Cookies.set('session_key', data.session_key, {
        expires: 1, // 1일
        secure: false, // HTTPS 환경이 아닐 경우 false로 설정
        sameSite: 'Lax',
        path: '/', // 전체 도메인에서 접근 가능하도록 설정
        domain: window.location.hostname // 현재 도메인으로 설정
      });
      
      Cookies.set('tenant_id', String(data.tenant_id), { // 명시적으로 문자열 변환
        expires: 1, // 1일
        secure: false, // HTTPS 환경이 아닐 경우 false로 설정
        sameSite: 'Lax',
        path: '/', // 전체 도메인에서 접근 가능하도록 설정
        domain: window.location.hostname // 현재 도메인으로 설정
      });

      // 쿠키 설정 확인
      console.log('Cookies after setting:', {
        session_key: Cookies.get('session_key'),
        tenant_id: Cookies.get('tenant_id')
      });

      return data;
    } catch (error: Error | unknown) {
      const err = error as Error;
      console.error('Login error:', err); // 에러 로깅 추가
      throw new Error(err?.message || '로그인 중 오류가 발생했습니다.');
    }
  }
};
