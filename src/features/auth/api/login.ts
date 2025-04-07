import { LoginCredentials, LoginRequest, LoginResponse, LoginResponseFirst } from '../types/loginIndex';
import { axiosInstance, externalAxiosInstance } from '@/lib/axios';
import useStore, { UserInfoData } from '@/features/auth/hooks/store';
import Cookies from 'js-cookie';
import axios from 'axios';

export const loginApi = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    try {
      const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_API_URL;
      console.log(LOGIN_URL);
      // 첫 번째 로그인 API 호출 (외부)
      const { data: dataFirst } = await externalAxiosInstance.get<LoginResponseFirst>(
        `${LOGIN_URL}`,
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
        device_id: "WEB",
        user_name: dataFirst.id,
        password: dataFirst.passwd,
      };

      const { data } = await axiosInstance.post<LoginResponse>('/login', loginData);
      // console.log("✅ API Response Data:", data); // 로그인 응답 데이터 확인

      if (data.result_code !== 0) {
        throw new Error(data.result_msg || '로그인 실패');
      }

      //SSE 실시간 이벤트 구독
      // const tenant_id = (data.role_id === 5 || data.role_id === 6) ? 0 : data.tenant_id;
      // console.log("data.menu_role_id at login !!!!!!!!!!!!!!!!!!!!! : ", data.menu_role_id);


      // 특정 role_id에 대한 접근 제한
      if (
        // data.role_id === 1 || data.role_id === 2 || data.role_id === 3 || 
        data.menu_role_id === null || 
        data.menu_role_id === undefined
      ) {
        throw new Error('접근권한이 없습니다.');
      }

      // IP 조회 API 호출 (외부)
      const { data: dataSecond } = await axios.get<{ ip: string }>(
        `https://api.ipify.org?format=json`,
      );
      Cookies.set('userHost', String(dataSecond.ip), {
        expires: 1,
        secure: false,
        sameSite: 'Lax',
        path: '/'
      });
      Cookies.set('id', String(dataFirst.id), {
        expires: 1,
        secure: false,
        sameSite: 'Lax',
        path: '/'
      });

      // 사용자 정보 객체 생성
      const userInfo: UserInfoData = {
        id: dataFirst.id,
        tenant_id: data.tenant_id,
        session_key: data.session_key,
        role_id: data.role_id,
        menu_role_id: data.menu_role_id // `menu_role_id` 확인
      };

      // console.log("✅ Constructed userInfo before storing:", userInfo);

      // Zustand store 업데이트
      useStore.getState().setUserInfo(userInfo);

      // 디버깅: 저장 후 스토어 상태 확인
      setTimeout(() => {
        // console.log("🟢 Current store state after setting (with timeout):", useStore.getState());
      }, 0);

      // 쿠키 설정
      Cookies.set('session_key', data.session_key, {
        expires: 1,
        secure: false,
        sameSite: 'Lax',
        path: '/',
        domain: window.location.hostname
      });

      Cookies.set('tenant_id', String(data.tenant_id), {
        expires: 1,
        secure: false,
        sameSite: 'Lax',
        path: '/'
      });

      Cookies.set('role_id', String(data.role_id), {
        expires: 1,
        secure: false,
        sameSite: 'Lax',
        path: '/'
      });

      Cookies.set('menu_role_id', String(data.menu_role_id), {
        expires: 1,
        secure: false,
        sameSite: 'Lax',
        path: '/'
      });

      // 쿠키 설정 확인
      console.log("🍪 Cookies after setting:", {
        session_key: Cookies.get('session_key'),
        tenant_id: Cookies.get('tenant_id'),
        role_id: Cookies.get('role_id'),
        menu_role_id: Cookies.get('menu_role_id')
      });

      return data;
    } catch (error: Error | unknown) {
      const err = error as Error;
      // console.error("❌ Login error:", err);
      throw err;
    }
  }
};
