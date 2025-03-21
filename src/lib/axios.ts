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
    if( url !== '/login' ) {
      let activation = '';
      let eventName = '';
      let queryType = 'R';
      let description = '';
      if( url === '/login' ) {
        activation = '로그인';
        eventName = 'login';
      } else if( url === '/collections/tenant' ) {
        activation = '테넌트정보조회';
        eventName = 'tenants';
      } else if( url === '/collections/phone-description' ) {
        activation = '전화번호설명템플릿조회';
        eventName = 'phone-description';
      } else if( url === '/phone-description' ) {
        if( response.config.method === 'post' ) {
          activation = '전화번호설명템플릿생성';
          eventName = 'description';
          queryType = 'C';
        }else if( response.config.method === 'put' ) {
          activation = '전화번호설명템플릿수정';
          eventName = 'description';
          queryType = 'U';
        }else if( response.config.method === 'delete' ) {
          activation = '전화번호설명템플릿삭제';
          eventName = 'description';
          queryType = 'D';
        }
      } else if( url === '/collections/dialing-device' ) {
        activation = '다이얼링장비조회';
        eventName = 'dialing-device';
      } else if( url === '/dialing-device' ) {
        if( response.config.method === 'post' ) {
          activation = '다이얼링장비생성';
          eventName = 'dialing-device';
          queryType = 'C';
        }else if( response.config.method === 'put' ) {
          activation = '다이얼링장비수정';
          eventName = 'dialing-device';
          queryType = 'U';
        }else if( response.config.method === 'delete' ) {
          activation = '다이얼링장비삭제';
          eventName = 'dialing-device';
          queryType = 'D';
        }
        
      } else if( url === '/collections/campaign' ) {
        activation = '캠페인마스터목록조회';
        eventName = 'campaigns';
      } else if( url === '/collections/skill-campaign' ) {
        activation = '스킬할당캠페인';
        eventName = 'skill-campaign';
      } else if( url === '/collections/skill' || url === 'collections/skill' ) {
        activation = '스킬마스터목록조회';
        eventName = 'skills';
      } else if( url === '/collections/campaign-schedule' ) {
        activation = '캠페인스케줄정보조회';
        eventName = 'campaign-schedule';
      } else if( url === '/collections/campaign-calling-number' ) {
        activation = '캠페인발신번호조회';
        eventName = 'campaign-calling-number';
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
      } else if( url === '/collections/channel-assign' ) {
        activation = '채널할당조회';
        eventName = 'channel-assign';
      } else if( url === '/collections/maxcall-init-time' ) {
        activation = '분배제한초기화시각조회';
        eventName = 'maxcall-init-time';
      } else if( url === '/collections/campaign-reserved-call' ) {
        activation = '예약호마스터조회';
        eventName = 'campaign-reserved-call';
      } else if( url === '/collections/agent-skill' ) {
        activation = '상담사보유스킬';
        eventName = 'agent-skill';
      } else if( url === 'collections/campaign-list' ) {
        activation = '캠페인리스트조회';
        eventName = 'campaign-list';
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
      let activation = '';
      let eventName = '';
      const queryType = 'R';
      let description = '';
      if( url === '/auth/environment' ) {
        activation = '사용자별 환경설정 가져오기';
        eventName = 'environment';
      } else if( url.indexOf('/auth/availableMenuList') > -1 ) {
        activation = '사용가능한 메뉴 리스트 가져오기';
        eventName = 'availableMenuList';
      } else if( url.indexOf('/counselor/list') > -1 ) {
        activation = '상담사 리스트 가져오기';
        eventName = 'counselorList';
      } else if( url === '/monitor/process' ) {
        activation = '타 시스템 프로세스 상태정보 가져오기';
        eventName = 'process';
      } else if( url === '/monitor/dialer/channel' ) {
        activation = '채널 상태 정보 가져오기';
        eventName = 'channel';
      } else if( url.indexOf('/statistics') > -1 ) {
        activation = '캠페인별 진행정보 가져오기';
        eventName = 'statistics';
        description = '캠페인 아이디 : ' + url.split('/')[5] + '번 진행정보 가져오기';
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