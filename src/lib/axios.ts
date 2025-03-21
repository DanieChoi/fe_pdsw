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
    const url = response.config.url || '';
    if( url !== '/log/save' ) {
      let activation = '';
      let eventName = '';
      let queryType = 'R';
      let description = '';
      if( url === '/collections/campaign' ) {
        activation = '캠페인마스터목록조회';
        eventName = 'campaigns';
      } else if( url === '/collections/tenant' ) {
        activation = '테넌트정보조회';
        eventName = 'tenants';
      } else if( url === '/collections/skill-campaign' ) {
        activation = '스킬할당캠페인';
        eventName = 'skill-campaign';
      } else if( url === '/collections/skill' ) {
        activation = '스킬마스터목록조회';
        eventName = 'skills';
      } else if( url === '/collections/campaign-schedule' ) {
        activation = '캠페인스케줄정보조회';
        eventName = 'campaign-schedule';
      } else if( url === '/collections/campaign-calling-number' ) {
        activation = '캠페인발신번호조회';
        eventName = 'campaign-calling-number';
      } else if( url === '/collections/phone-description' ) {
        activation = '전화번호설명템플릿조회';
        eventName = 'phone-description';
      } else if( url === '/login' ) {
        activation = '로그인';
        eventName = 'login';
      } else if( url.indexOf('/status') > -1 ) {
        const status = JSON.parse(response.config.data).request_data.campaign_status === 1 ? '시작': 
          JSON.parse(response.config.data).request_data.campaign_status === 2 ?'멈춤':'중지';
        activation = '캠페인상태변경';
        eventName = 'updateStatus';
        queryType = 'U';
        description = '캠페인 상태를 "' + status + '"으로 변경';
      } else if( url === '/collections/campaign-skill' ) {
        activation = '캠페인요구스킬조회';
        eventName = 'skill';
      } else if( url === 'collections/campaign-group' ) {
        activation = '캠페인그룹정보조회';
        eventName = 'campaignGroups';
      } else if( url === 'collections/campaign-group-list' ) {
        activation = '캠페인그룹소속캠페인조회';
        eventName = 'campaignGroupCampaigns';
      } else if( url === '/collections/campaign-agent' ) {
        activation = '캠페인소속상담사조회';
        eventName = 'campaignAgents';
      } else if( url.split('/')[0] === 'campaign-groups' ) {
        activation = '캠페인그룹정보삭제';
        eventName = 'campaignGroup';
        description = '캠페인 그룹 아이디 : "' + url.split('/')[1] + '"번 삭제';
        queryType = 'D';
      } else if( url.split('/')[0] === 'campaign-group' ) {
        activation = '캠페인그룹소속캠페인정보삭제';
        eventName = 'campaignGroupCampaign';
        description = '캠페인 그룹 아이디 : "' + url.split('/')[1] + '"번 소속캠페인 삭제';
        queryType = 'D';
      }
      const logData = {
          "tenantId": Number(getCookie('tenant_id')),
          "employeeId": getCookie('id'),
          "userHost": getCookie('userHost'),
          "queryId": response.config.url,
          "queryType": queryType,
          "activation": activation,
          "description": description,
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
    }
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
// 응답 인터셉터
axiosRedisInstance.interceptors.response.use(
  async (response) => {
    const url = response.config.url || '';
    if( url !== '/log/save' ) {
      const activation = '';
      const eventName = '';
      const queryType = 'R';
      const description = '';
    // if( url === '/collections/campaign' ) {
    //   activation = '캠페인마스터목록조회';
    //   eventName = 'campaigns';
    // } else if( url === '/collections/tenant' ) {
    //   activation = '테넌트정보조회';
    //   eventName = 'tenants';
    // } else if( url === '/collections/skill-campaign' ) {
    //   activation = '스킬할당캠페인';
    //   eventName = 'skill-campaign';
    // } else if( url === '/collections/skill' ) {
    //   activation = '스킬마스터목록조회';
    //   eventName = 'skills';
    // } else if( url === '/collections/campaign-schedule' ) {
    //   activation = '캠페인스케줄정보조회';
    //   eventName = 'campaign-schedule';
    // } else if( url === '/collections/campaign-calling-number' ) {
    //   activation = '캠페인발신번호조회';
    //   eventName = 'campaign-calling-number';
    // } else if( url === '/collections/phone-description' ) {
    //   activation = '전화번호설명템플릿조회';
    //   eventName = 'phone-description';
    // } else if( url === '/login' ) {
    //   activation = '로그인';
    //   eventName = 'login';
    // } else if( url.indexOf('/status') > -1 ) {
    //   const status = JSON.parse(response.config.data).request_data.campaign_status === 1 ? '시작': 
    //     JSON.parse(response.config.data).request_data.campaign_status === 2 ?'멈춤':'중지';
    //   activation = '캠페인상태변경';
    //   eventName = 'updateStatus';
    //   queryType = 'U';
    //   description = '캠페인 상태를 "' + status + '"으로 변경';
    // } else if( url === 'collections/campaign-skill' ) {
    //   activation = '캠페인요구스킬조회';
    //   eventName = 'skill';
    // } else if( url === 'collections/campaign-group' ) {
    //   activation = '캠페인그룹정보조회';
    //   eventName = 'campaignGroups';
    // } else if( url === 'collections/campaign-group-list' ) {
    //   activation = '캠페인그룹소속캠페인조회';
    //   eventName = 'campaignGroupCampaigns';
    // } else if( url === '/collections/campaign-agent' ) {
    //   activation = '캠페인소속상담사조회';
    //   eventName = 'campaignAgents';
    // } else if( url.split('/')[0] === 'campaign-groups' ) {
    //   activation = '캠페인그룹정보삭제';
    //   eventName = 'campaignGroup';
    //   description = '캠페인 그룹 아이디 : "' + url.split('/')[1] + '"번 삭제';
    //   queryType = 'D';
    // } else if( url.split('/')[0] === 'campaign-group' ) {
    //   activation = '캠페인그룹소속캠페인정보삭제';
    //   eventName = 'campaignGroupCampaign';
    //   description = '캠페인 그룹 아이디 : "' + url.split('/')[1] + '"번 소속캠페인 삭제';
    //   queryType = 'D';
    // }
      // const logData = {
      //     "tenantId": Number(getCookie('tenant_id')),
      //     "employeeId": getCookie('id'),
      //     "userHost": getCookie('userHost'),
      //     "queryId": response.config.url,
      //     "queryType": queryType,
      //     "activation": activation,
      //     "description": description,
      //     "successFlag": 1,
      //     "eventName": eventName,
      //     "queryRows": typeof response.data.result_data === 'undefined' ? 1 : response.data.result_data.length,
      //     "targetId": response.config.url,
      //     "userSessionType": 0,
      //     "exportFlag": 1,
      //     "memo": "",
      //     "updateEmployeeId": getCookie('id')
      // };
      // const { data } = await axiosRedisInstance.post<{code:string;message:string;}>(
      //   `/log/save`,
      //   logData 
      // );
    }
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