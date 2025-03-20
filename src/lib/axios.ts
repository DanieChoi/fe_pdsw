// src/lib/axios.ts
import axios from 'axios';
import { getCookie } from './cookies';

export const axiosInstance = axios.create({
  baseURL: '/pds',
  withCredentials: true
});

export const axiosRedisInstance = axios.create({
  baseURL: '/api/v1',
  withCredentials: true
});

export const externalAxiosInstance = axios.create({
  withCredentials: true
});

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const sessionKey = getCookie('session_key');

    if (sessionKey && config.headers) {
      // Session-Cookie가 아닌 Session-Key로 변경
      config.headers['Session-Key'] = sessionKey;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  async (response) => {
    const url = response.config.url;
    let activation = '';
    let eventName = '';
    if( url === '/collections/campaign' ) {
      activation = '캠페인마스터목록조회';
      eventName = 'campaigns';
    } else if( url === '/collections/tenant' ) {
      activation = '테넌트정보조회';
      eventName = 'tenants';
    } else if( url === '/collections/skill-campaign' ) {
      activation = '스킬할당캠페인';
      eventName = 'skill-campaigns';
    } else if( url === 'collections/skill' ) {
      activation = '스킬마스터목록조회';
      eventName = 'skills';
    } else if( url === '/login' ) {
      activation = '로그인';
      eventName = 'login';
    }
    const logData = {
        "tenantId": Number(getCookie('tenant_id')),
        "employeeId": getCookie('id'),
        "userHost": getCookie('userHost'),
        "queryId": response.config.url,
        "queryType": "R",
        "activation": activation,
        "description": "",
        "successFlag": 1,
        "eventName": eventName,
        "queryRows": typeof response.data.result_data === 'undefined' ? 1 : response.data.result_data.length,
        "targetId": response.config.url,
        "userSessionType": 0,
        "exportFlag": 1,
        "memo": "",
        "updateEmployeeId": getCookie('id')
    };
    const { data } = await axiosRedisInstance.post<{code:string;message:string;}>(
      `/log/save`,
      logData 
    );
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = '/login';
      return Promise.reject(new Error('세션이 만료되었습니다. 다시 로그인해주세요.'));
    }
    return Promise.reject(error);
  }
);