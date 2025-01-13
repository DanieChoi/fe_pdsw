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

      // 사용자 정보 전역 상태 저장
      const userInfo: UserInfoData = {
        id: dataFirst.id,
        tenant_id: data.tenant_id,
        session_key: data.session_key
      };
      useStore.setState(userInfo);

      // 클라이언트에서 직접 쿠키 설정
      Cookies.set('session_key', data.session_key, {
        expires: 1, // 1일
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax'
      });
      Cookies.set('tenant_id', data.tenant_id+'', {
        expires: 1, // 1일
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax'
      });

      return data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message || '로그인 중 오류가 발생했습니다.');
    }
  }
};