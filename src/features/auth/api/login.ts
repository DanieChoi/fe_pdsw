// src/features/auth/api/login.ts
import { LoginCredentials, LoginRequest, LoginResponse, LoginResponseFirst } from '../types';

export const loginApi = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const loginData: LoginRequest = {
      grant_type: "password",
      device_id: "api_test",
      user_name: "NEX20000",
      password: "1",
    };
    
    const responseFirst = await fetch(`https://jedai-qa-web.nexuscommunity.net:9443/agent/loginCubeC?id=${credentials.user_name}&passwd=${credentials.password}`, {
      method: 'GET'
    });
    
    const dataFirst: LoginResponseFirst = await responseFirst.json();
    
    if (!responseFirst.ok || typeof dataFirst.id === 'undefined') {      
      throw new Error('서버 에러 입니다.');
    }

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    const data: LoginResponse = await response.json();
    
    if (!response.ok || data.result_code !== 0) {
      throw new Error(data.result_msg || '로그인 실패');
    }

    // 로그인 성공 시 세션 저장
    await fetch('/api/auth/set-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ session_key: data.session_key }),
    });

    return data;
  }
};