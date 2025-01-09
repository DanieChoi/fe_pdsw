// src/features/auth/api/login.ts
import { LoginCredentials, LoginRequest, LoginResponse } from '../types';

export const loginApi = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const loginData: LoginRequest = {
      grant_type: "password",
      device_id: "api_test",
      user_name: credentials.email,
      password: credentials.password,
    };

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