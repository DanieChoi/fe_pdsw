// features/auth/api/login.ts
import { LoginCredentials, LoginRequest, LoginResponse, LoginResponseFirst } from '../types/loginIndex';
import { axiosInstance, externalAxiosInstance } from '@/lib/axios';
import useStore, { UserInfoData } from '@/features/auth/hooks/store';
import Cookies from 'js-cookie';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getRuntimeEnv } from '@/lib/getRuntimeEnv';

export const loginApi = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    try {
      // ✅ 반드시 함수 안에서 호출해야 env.js 로딩 이후 window 객체에 접근 가능
      const LOGIN_URL = getRuntimeEnv('LOGIN_API_URL');

      if (!LOGIN_URL) {
        console.log("🚨 LOGIN_URL이 정의되지 않았습니다.");
        throw new Error('LOGIN_URL이 정의되지 않았습니다.');
      }

      // console.log("🌐 LOGIN_URL:", LOGIN_URL);
      // toast.success(`🚀 로그인 URL: ${LOGIN_URL}`);

      // 🔐 첫 번째 로그인 (외부 인증)
      const { data: dataFirst } = await externalAxiosInstance.get<LoginResponseFirst>(
        LOGIN_URL,
        {
          params: {
            id: credentials.user_name,
            passwd: credentials.password
          }
        }
      );

      if (!dataFirst.id) {
        throw new Error('서버 에러입니다.');
      }

      // 🔐 두 번째 로그인 (내부 인증)
      const loginData: LoginRequest = {
        grant_type: 'password',
        device_id: 'WEB',
        user_name: dataFirst.id,
        password: dataFirst.passwd,
      };

      const { data } = await axiosInstance.post<LoginResponse>('/login', loginData);

      if (data.result_code !== 0) {
        throw new Error(data.result_msg || '로그인 실패');
      }

      // 접근 권한 체크
      // if (!data.menu_role_id) {
      //   throw new Error('접근권한이 없습니다.');
      // }

      // 🌐 클라이언트 IP 조회
      const { data: dataSecond } = await axios.get<{ ip: string }>(
        `https://api.ipify.org?format=json`
      );

      // 🍪 쿠키 저장
      Cookies.set('userHost', dataSecond.ip, {
        expires: 1,
        secure: false,
        sameSite: 'Lax',
        path: '/',
      });

      Cookies.set('id', dataFirst.id, {
        expires: 1,
        secure: false,
        sameSite: 'Lax',
        path: '/'
      });

      // ###### 로그인 시간 기준으로 세션키 만료시간 설정 ######
      const currentDate = new Date();
      const expiredDate = new Date(currentDate.getTime() + data.expires_in); // 밀리세컨드 더하기
      
      data.expires_in = expiredDate.getTime(); // 만료일시를 밀리세컨드로 변환하여 저장
      
      // 디버깅: 저장 후 스토어 상태 확인
      setTimeout(() => {
        // console.log("🟢 Current store state after setting (with timeout):", useStore.getState());
      }, 0);

      // 쿠키 설정
      Cookies.set('session_key', data.session_key, {
        expires: 1,
        path: '/',
        secure: false,
        sameSite: 'Lax',
        domain: window.location.hostname,
      });

      Cookies.set('tenant_id', String(data.tenant_id), { expires: 1, path: '/' });
      Cookies.set('role_id', String(data.role_id), { expires: 1, path: '/' });
      Cookies.set('menu_role_id', String(data.menu_role_id), { expires: 1, path: '/' });

      console.log("🍪 Cookies after setting:", {
        session_key: Cookies.get('session_key'),
        tenant_id: Cookies.get('tenant_id'),
        role_id: Cookies.get('role_id'),
        menu_role_id: Cookies.get('menu_role_id'),
      });

      // 🧠 사용자 정보 저장 (Zustand)
      const userInfo: UserInfoData = {
        id: dataFirst.id,
        tenant_id: data.tenant_id,
        session_key: data.session_key,
        role_id: data.role_id,
        menu_role_id: data.menu_role_id,
      };

      useStore.getState().setUserInfo(userInfo);

      return data;
    } catch (error: Error | unknown) {
      const err = error as Error;
      toast.error(`❌ 로그인 실패: ${err.message}`);
      throw err;
    }
  },
};
