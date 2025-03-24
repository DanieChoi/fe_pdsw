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
      } else if( url === '/collections/channel-group' ) {
        activation = '채널그룹조회';
        eventName = 'channel-group';
      } else if( url === '/channel-group' ) {
        if( response.config.method === 'post' ) {
          activation = '채널그룹생성';
          eventName = 'channel-group';
          queryType = 'C';
        }else if( response.config.method === 'put' ) {
          activation = '채널그룹수정';
          eventName = 'channel-group';
          queryType = 'U';
        }else if( response.config.method === 'delete' ) {
          activation = '채널그룹삭제';
          eventName = 'channel-group';
          queryType = 'D';
        }
      } else if( url === '/collections/channel-assign' ) {
        activation = '채널할당조회';
        eventName = 'channel-assign';
      } else if( url === '/channel-assign' ) {
        if( response.config.method === 'put' ) {
          activation = '채널할당수정';
          eventName = 'channel-assign';
          queryType = 'U';
        }
      } else if( url === '/collections/skill' || url === 'collections/skill' ) {
        activation = '스킬마스터목록조회';
        eventName = 'skills';
      } else if( url.indexOf('/skills') > -1 && url.indexOf('/agent-list') == -1 ) {
        if( response.config.method === 'post' ) {
          activation = '스킬마스터생성';
          eventName = 'skills';
          queryType = 'C';
        } else if( response.config.method === 'put' ) {
          activation = '스킬마스터수정';
          eventName = 'skills';
          queryType = 'U';
        } else if( response.config.method === 'delete' ) {
          activation = '스킬마스터삭제';
          eventName = 'skills';
          queryType = 'D';
        }
      } else if( url === '/collections/skill-agent' ) {
        activation = '스킬할당상담사';
        eventName = 'skill-agent';
      } else if( url.indexOf('/skills') > -1 && url.indexOf('/agent-list') > -1 ) {
        if( response.config.method === 'post' ) {
          activation = '스킬할당상담사생성';
          eventName = 'skill-agent';
          queryType = 'C';
        } else if( response.config.method === 'delete' ) {
          activation = '스킬할당상담사삭제';
          eventName = 'skill-agent';
          queryType = 'D';
        }
      } else if( url === '/collections/skill-campaign' ) {
        activation = '스킬할당캠페인';
        eventName = 'skill-campaign';
      } else if( url === '/collections/agent-skill' ) {
        activation = '상담사보유스킬';
        eventName = 'agent-skill';
      } else if( url === '/collections/campaign-skill' || url === 'collections/campaign-skill' ) {
        activation = '캠페인요구스킬조회';
        eventName = 'skill';
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/skill') > -1 ) {
        if( response.config.method === 'put' ) {
          activation = '캠페인요구스킬수정';
          eventName = 'campaign-skill';
          queryType = 'U';
        }
      } else if( url === '/collections/maxcall-init-time' ) {
        activation = '분배제한초기화시각조회';
        eventName = 'maxcall-init-time';
      } else if( url === '/maxcall-init-time' ) {
        activation = '분배제한초기화시각수정';
        eventName = 'maxcall-init-time';
        queryType = 'U';
      } else if( url === '/collections/suspended-skill' ) {
        activation = '일지중지캠페인조회';
        eventName = 'suspended-skill';
      } else if( url === '/suspended-skill' ) {
        activation = '일지중지캠페인삭제';
        eventName = 'suspended-skill';
        queryType = 'D';
      } else if( url === 'collections/campaign-list' ) {
        activation = '캠페인리스트조회';
        eventName = 'campaign-list';
      } else if( url === '/collections/campaign' ) {
        activation = '캠페인마스터목록조회';
        eventName = 'campaigns';
      } else if( url.indexOf('/collections') > -1 && url.split('/').length === 2 ) {
        if( response.config.method === 'post' ) {
          activation = '캠페인마스터생성';
          eventName = 'campaigns';
          queryType = 'C';
        }else if( response.config.method === 'put' ) {
          activation = '캠페인마스터수정';
          eventName = 'campaigns';
          queryType = 'U';
        }else if( response.config.method === 'delete' ) {
          activation = '캠페인마스터삭제';
          eventName = 'campaigns';
          queryType = 'D';
        }
      } else if( url.indexOf('/status') > -1 ) {
        const status = JSON.parse(response.config.data).request_data.campaign_status === 1 ? '시작': 
          JSON.parse(response.config.data).request_data.campaign_status === 2 ?'멈춤':'중지';
        activation = '캠페인상태변경';
        eventName = 'updateStatus';
        queryType = 'U';
        description = '캠페인 상태를 "' + status + '"으로 변경';
      } else if( url === '/collections/campaign-reserved-call' ) {
        activation = '예약호마스터조회';
        eventName = 'campaign-reserved-call';
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/reserved-call') > -1 ) {
        if( response.config.method === 'post' ) {
          activation = '예약호마스터생성';
          eventName = 'campaign-reserved-call';
          queryType = 'C';
        } else if( response.config.method === 'put' ) {
          activation = '예약호마스터수정';
          eventName = 'campaign-reserved-call';
          queryType = 'U';
        } else if( response.config.method === 'delete' ) {
          activation = '예약호마스터삭제';
          eventName = 'campaign-reserved-call';
          queryType = 'D';
        }
      } else if( url === '/collections/campaign-scheduled-redial' ) {
        activation = '캠페인예약재발신정보조회';
        eventName = 'campaign-scheduled-redial';
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/scheduled-redial') > -1 ) {
        if( response.config.method === 'post' ) {
          activation = '캠페인예약재발신정보생성';
          eventName = 'campaign-scheduled-redial';
          queryType = 'C';
        } else if( response.config.method === 'put' ) {
          activation = '캠페인예약재발신정보수정';
          eventName = 'campaign-scheduled-redial';
          queryType = 'U';
        } else if( response.config.method === 'delete' ) {
          activation = '캠페인예약재발신정보삭제';
          eventName = 'campaign-scheduled-redial';
          queryType = 'D';
        }
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/current-redial') > -1 ) {
        activation = '캠페인재발신추출수정';
        eventName = 'campaign-current-redial';
        queryType = 'U';
      } else if( url === '/collections/campaign-redial-preview' ) {
        activation = '캠페인재발신미리보기';
        eventName = 'campaign-redial-preview';
      } else if( url === '/collections/campaign-schedule' ) {
        activation = '캠페인스케줄정보조회';
        eventName = 'campaign-schedule';
      } else if( url.indexOf('/schedule') > -1 ) {
        if( response.config.method === 'post' ) {
          activation = '캠페인스케줄정보생성';
          eventName = 'campaign-schedule';
          queryType = 'C';
        }else if( response.config.method === 'put' ) {
          activation = '캠페인스케줄정보수정';
          eventName = 'campaign-schedule';
          queryType = 'U';
        }else if( response.config.method === 'delete' ) {
          activation = '캠페인스케줄정보삭제';
          eventName = 'campaign-schedule';
          queryType = 'D';
        }
      } else if( url === '/collections/campaign-calling-number' ) {
        activation = '캠페인발신번호조회';
        eventName = 'campaign-calling-number';
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/calling-number') > -1 ) {
        if( response.config.method === 'post' ) {
          activation = '캠페인발신번호생성';
          eventName = 'campaign-calling-number';
          queryType = 'C';
        } else if( response.config.method === 'put' ) {
          activation = '캠페인발신번호수정';
          eventName = 'campaign-calling-number';
          queryType = 'U';
        } else if( response.config.method === 'delete' ) {
          activation = '캠페인발신번호삭제';
          eventName = 'campaign-calling-number';
          queryType = 'D';
        }
      } else if( url === '/collections/maxcall-ext' ) {
        activation = '캠페인분배제한조회';
        eventName = 'maxcall-ext';
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/maxcall-ext') > -1 ) {
        if( response.config.method === 'post' ) {
          activation = '캠페인분배제한생성';
          eventName = 'maxcall-ext';
          queryType = 'C';
        } else if( response.config.method === 'put' ) {
          activation = '캠페인분배제한수정';
          eventName = 'maxcall-ext';
          queryType = 'U';
        } else if( response.config.method === 'delete' ) {
          activation = '캠페인분배제한삭제';
          eventName = 'maxcall-ext';
          queryType = 'D';
        }
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/calling-list') > -1 ) {
        if( response.config.method === 'post' ) {
          activation = '발신리스트업로드추가';
          eventName = 'campaign-calling-list';
          queryType = 'C';
        } else if( response.config.method === 'delete' ) {
          activation = '발신리스트업로드삭제';
          eventName = 'campaign-calling-list';
          queryType = 'D';
        }
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/black-list') > -1 ) {
        if( response.config.method === 'post' ) {
          activation = '블랙리스트업로드추가';
          eventName = 'campaign-black-list';
          queryType = 'C';
        } else if( response.config.method === 'delete' ) {
          activation = '블랙리스트업로드삭제';
          eventName = 'campaign-black-list';
          queryType = 'D';
        }
      } else if( url === '/collections/campaign-blacklist-max' ) {
        activation = '블랙리스트최대수량조회';
        eventName = 'campaign-blacklist-max';
      } else if( url === '/collections/campaign-blacklist-count' ) {
        activation = '블랙리스트수량조회';
        eventName = 'campaign-blacklist-count';
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/dial-speed') > -1 ) {
        activation = '캠페인발신속도수정';
        eventName = 'campaign-black-list';
        queryType = 'U';
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/callback-list') > -1 ) {
        activation = '캠페인콜백리스트추가';
        eventName = 'campaign-callback-list';
        queryType = 'C';
      } else if( url === '/collections/campaign-agent' ) {
        activation = '캠페인소속상담사조회';
        eventName = 'campaignAgents';
      } else if( url === '/collections/agent-campaign' ) {
        activation = '상담사소속캠페인조회';
        eventName = 'agentCampaigns';
      } else if( url === '/collections/callback-campaign' ) {
        activation = '콜백캠페인조회';
        eventName = 'callback-campaign';
      } else if( url === '/collections/campaign-history' ) {
        activation = '캠페인운영이력조회';
        eventName = 'campaign-history';
      } else if( url === '/collections/dial-result' ) {
        activation = '캠페인발신결과조회';
        eventName = 'dial-result';
      } else if( url === '/collections/agent-ready-count' ) {
        activation = '캠페인대기상담사수조회';
        eventName = 'agent-ready-count';






      } else if( url === '/collections/campaign-group' || url === 'collections/campaign-group' ) {
        activation = '캠페인그룹정보조회';
        eventName = 'campaignGroups';
      } else if( url === '/collections/campaign-group-list' || url === 'collections/campaign-group-list' ) {
        activation = '캠페인그룹소속캠페인조회';
        eventName = 'campaignGroupCampaigns';
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
  async (error) => {
    const url = error.config.url || '';
    if( url !== '/login' ) {
      let activation = '';
      let eventName = '';
      let queryType = 'R';
      // let description = '';
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
        if( error.config.method === 'post' ) {
          activation = '전화번호설명템플릿생성';
          eventName = 'description';
          queryType = 'C';
        }else if( error.config.method === 'put' ) {
          activation = '전화번호설명템플릿수정';
          eventName = 'description';
          queryType = 'U';
        }else if( error.config.method === 'delete' ) {
          activation = '전화번호설명템플릿삭제';
          eventName = 'description';
          queryType = 'D';
        }
      } else if( url === '/collections/dialing-device' ) {
        activation = '다이얼링장비조회';
        eventName = 'dialing-device';
      } else if( url === '/dialing-device' ) {
        if( error.config.method === 'post' ) {
          activation = '다이얼링장비생성';
          eventName = 'dialing-device';
          queryType = 'C';
        }else if( error.config.method === 'put' ) {
          activation = '다이얼링장비수정';
          eventName = 'dialing-device';
          queryType = 'U';
        }else if( error.config.method === 'delete' ) {
          activation = '다이얼링장비삭제';
          eventName = 'dialing-device';
          queryType = 'D';
        }
      } else if( url === '/collections/channel-group' ) {
        activation = '채널그룹조회';
        eventName = 'channel-group';
      } else if( url === '/channel-group' ) {
        if( error.config.method === 'post' ) {
          activation = '채널그룹생성';
          eventName = 'channel-group';
          queryType = 'C';
        }else if( error.config.method === 'put' ) {
          activation = '채널그룹수정';
          eventName = 'channel-group';
          queryType = 'U';
        }else if( error.config.method === 'delete' ) {
          activation = '채널그룹삭제';
          eventName = 'channel-group';
          queryType = 'D';
        }
      } else if( url === '/collections/channel-assign' ) {
        activation = '채널할당조회';
        eventName = 'channel-assign';
      } else if( url === '/channel-assign' ) {
        if( error.config.method === 'put' ) {
          activation = '채널할당수정';
          eventName = 'channel-assign';
          queryType = 'U';
        }
      } else if( url === '/collections/skill' || url === 'collections/skill' ) {
        activation = '스킬마스터목록조회';
        eventName = 'skills';
      } else if( url.indexOf('/skills') > -1 && url.indexOf('/agent-list') == -1 ) {
        if( error.config.method === 'post' ) {
          activation = '스킬마스터생성';
          eventName = 'skills';
          queryType = 'C';
        } else if( error.config.method === 'put' ) {
          activation = '스킬마스터수정';
          eventName = 'skills';
          queryType = 'U';
        } else if( error.config.method === 'delete' ) {
          activation = '스킬마스터삭제';
          eventName = 'skills';
          queryType = 'D';
        }
      } else if( url === '/collections/skill-agent' ) {
        activation = '스킬할당상담사';
        eventName = 'skill-agent';
      } else if( url.indexOf('/skills') > -1 && url.indexOf('/agent-list') > -1 ) {
        if( error.config.method === 'post' ) {
          activation = '스킬할당상담사생성';
          eventName = 'skill-agent';
          queryType = 'C';
        } else if( error.config.method === 'delete' ) {
          activation = '스킬할당상담사삭제';
          eventName = 'skill-agent';
          queryType = 'D';
        }
      } else if( url === '/collections/skill-campaign' ) {
        activation = '스킬할당캠페인';
        eventName = 'skill-campaign';
      } else if( url === '/collections/agent-skill' ) {
        activation = '상담사보유스킬';
        eventName = 'agent-skill';
      } else if( url === '/collections/campaign-skill' || url === 'collections/campaign-skill' ) {
        activation = '캠페인요구스킬조회';
        eventName = 'skill';
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/skill') > -1 ) {
        if( error.config.method === 'put' ) {
          activation = '캠페인요구스킬수정';
          eventName = 'campaign-skill';
          queryType = 'U';
        }
      } else if( url === '/collections/maxcall-init-time' ) {
        activation = '분배제한초기화시각조회';
        eventName = 'maxcall-init-time';
      } else if( url === '/maxcall-init-time' ) {
        activation = '분배제한초기화시각수정';
        eventName = 'maxcall-init-time';
        queryType = 'U';
      } else if( url === '/collections/suspended-skill' ) {
        activation = '일지중지스킬조회';
        eventName = 'suspended-skill';
      } else if( url === '/suspended-skill' ) {
        activation = '일지중지스킬삭제';
        eventName = 'suspended-skill';
        queryType = 'D';
      } else if( url === 'collections/campaign-list' ) {
        activation = '캠페인리스트조회';
        eventName = 'campaign-list';
      } else if( url === '/collections/campaign' ) {
        activation = '캠페인마스터목록조회';
        eventName = 'campaigns';
      } else if( url.indexOf('/collections') > -1 && url.split('/').length === 2 ) {
        if( error.config.method === 'post' ) {
          activation = '캠페인마스터생성';
          eventName = 'campaigns';
          queryType = 'C';
        }else if( error.config.method === 'put' ) {
          activation = '캠페인마스터수정';
          eventName = 'campaigns';
          queryType = 'U';
        }else if( error.config.method === 'delete' ) {
          activation = '캠페인마스터삭제';
          eventName = 'campaigns';
          queryType = 'D';
        }
      } else if( url.indexOf('/status') > -1 ) {
        const status = JSON.parse(error.config.data).request_data.campaign_status === 1 ? '시작': 
          JSON.parse(error.config.data).request_data.campaign_status === 2 ?'멈춤':'중지';
        activation = '캠페인상태변경';
        eventName = 'updateStatus';
        queryType = 'U';
        // description = '캠페인 상태를 "' + status + '"으로 변경';
      } else if( url === '/collections/campaign-reserved-call' ) {
        activation = '예약호마스터조회';
        eventName = 'campaign-reserved-call';
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/reserved-call') > -1 ) {
        if( error.config.method === 'post' ) {
          activation = '예약호마스터생성';
          eventName = 'campaign-reserved-call';
          queryType = 'C';
        } else if( error.config.method === 'put' ) {
          activation = '예약호마스터수정';
          eventName = 'campaign-reserved-call';
          queryType = 'U';
        } else if( error.config.method === 'delete' ) {
          activation = '예약호마스터삭제';
          eventName = 'campaign-reserved-call';
          queryType = 'D';
        }
      } else if( url === '/collections/campaign-scheduled-redial' ) {
        activation = '캠페인예약재발신정보조회';
        eventName = 'campaign-scheduled-redial';
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/scheduled-redial') > -1 ) {
        if( error.config.method === 'post' ) {
          activation = '캠페인예약재발신정보생성';
          eventName = 'campaign-scheduled-redial';
          queryType = 'C';
        } else if( error.config.method === 'put' ) {
          activation = '캠페인예약재발신정보수정';
          eventName = 'campaign-scheduled-redial';
          queryType = 'U';
        } else if( error.config.method === 'delete' ) {
          activation = '캠페인예약재발신정보삭제';
          eventName = 'campaign-scheduled-redial';
          queryType = 'D';
        }
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/current-redial') > -1 ) {
        activation = '캠페인재발신추출수정';
        eventName = 'campaign-current-redial';
        queryType = 'U';
      } else if( url === '/collections/campaign-redial-preview' ) {
        activation = '캠페인재발신미리보기';
        eventName = 'campaign-redial-preview';
      } else if( url === '/collections/campaign-schedule' ) {
        activation = '캠페인스케줄정보조회';
        eventName = 'campaign-schedule';
      } else if( url.indexOf('/schedule') > -1 ) {
        if( error.config.method === 'post' ) {
          activation = '캠페인스케줄정보생성';
          eventName = 'campaign-schedule';
          queryType = 'C';
        }else if( error.config.method === 'put' ) {
          activation = '캠페인스케줄정보수정';
          eventName = 'campaign-schedule';
          queryType = 'U';
        }else if( error.config.method === 'delete' ) {
          activation = '캠페인스케줄정보삭제';
          eventName = 'campaign-schedule';
          queryType = 'D';
        }
      } else if( url === '/collections/campaign-calling-number' ) {
        activation = '캠페인발신번호조회';
        eventName = 'campaign-calling-number';
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/calling-number') > -1 ) {
        if( error.config.method === 'post' ) {
          activation = '캠페인발신번호생성';
          eventName = 'campaign-calling-number';
          queryType = 'C';
        } else if( error.config.method === 'put' ) {
          activation = '캠페인발신번호수정';
          eventName = 'campaign-calling-number';
          queryType = 'U';
        } else if( error.config.method === 'delete' ) {
          activation = '캠페인발신번호삭제';
          eventName = 'campaign-calling-number';
          queryType = 'D';
        }
      } else if( url === '/collections/maxcall-ext' ) {
        activation = '캠페인분배제한조회';
        eventName = 'maxcall-ext';
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/maxcall-ext') > -1 ) {
        if( error.config.method === 'post' ) {
          activation = '캠페인분배제한생성';
          eventName = 'maxcall-ext';
          queryType = 'C';
        } else if( error.config.method === 'put' ) {
          activation = '캠페인분배제한수정';
          eventName = 'maxcall-ext';
          queryType = 'U';
        } else if( error.config.method === 'delete' ) {
          activation = '캠페인분배제한삭제';
          eventName = 'maxcall-ext';
          queryType = 'D';
        }
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/calling-list') > -1 ) {
        if( error.config.method === 'post' ) {
          activation = '발신리스트업로드추가';
          eventName = 'campaign-calling-list';
          queryType = 'C';
        } else if( error.config.method === 'delete' ) {
          activation = '발신리스트업로드삭제';
          eventName = 'campaign-calling-list';
          queryType = 'D';
        }
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/black-list') > -1 ) {
        if( error.config.method === 'post' ) {
          activation = '블랙리스트업로드추가';
          eventName = 'campaign-black-list';
          queryType = 'C';
        } else if( error.config.method === 'delete' ) {
          activation = '블랙리스트업로드삭제';
          eventName = 'campaign-black-list';
          queryType = 'D';
        }
      } else if( url === '/collections/campaign-blacklist-max' ) {
        activation = '블랙리스트최대수량조회';
        eventName = 'campaign-blacklist-max';
      } else if( url === '/collections/campaign-blacklist-count' ) {
        activation = '블랙리스트수량조회';
        eventName = 'campaign-blacklist-count';
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/dial-speed') > -1 ) {
        activation = '캠페인발신속도수정';
        eventName = 'campaign-black-list';
        queryType = 'U';
      } else if( url.indexOf('/campaigns') > -1 && url.indexOf('/callback-list') > -1 ) {
        activation = '캠페인콜백리스트추가';
        eventName = 'campaign-callback-list';
        queryType = 'C';
      } else if( url === '/collections/campaign-agent' ) {
        activation = '캠페인소속상담사조회';
        eventName = 'campaignAgents';
      } else if( url === '/collections/agent-campaign' ) {
        activation = '상담사소속캠페인조회';
        eventName = 'agentCampaigns';
      } else if( url === '/collections/callback-campaign' ) {
        activation = '콜백캠페인조회';
        eventName = 'callback-campaign';
      } else if( url === '/collections/suspended-campaign' ) {




      } else if( url === '/collections/campaign-group' || url === 'collections/campaign-group' ) {
        activation = '캠페인그룹정보조회';
        eventName = 'campaignGroups';
      } else if( url === '/collections/campaign-group-list' || url === 'collections/campaign-group-list' ) {
        activation = '캠페인그룹소속캠페인조회';
        eventName = 'campaignGroupCampaigns';
      } else if( url === '/collections/campaign-agent' ) {
        activation = '캠페인소속상담사조회';
        eventName = 'campaignAgents';
      } else if( url.split('/')[0] === 'campaign-groups' ) {
        activation = '캠페인그룹정보삭제';
        eventName = 'campaignGroup';
        // description = '캠페인 그룹 아이디 : "' + url.split('/')[1] + '"번 삭제';
        queryType = 'D';
      } else if( url.split('/')[0] === 'campaign-group' ) {
        activation = '캠페인그룹소속캠페인정보삭제';
        eventName = 'campaignGroupCampaign';
        // description = '캠페인 그룹 아이디 : "' + url.split('/')[1] + '"번 소속캠페인 삭제';
        queryType = 'D';
      }
      const logData = {
          "tenantId": Number(getCookie('tenant_id')),
          "employeeId": getCookie('id'),
          "userHost": getCookie('userHost'),
          "queryId": error.config.url,
          "queryType": queryType,
          "activation": activation,
          "description": error.message,
          "successFlag": 0,
          "eventName": eventName,
          "queryRows": 0,
          "targetId": error.config.url||0,
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
      } else if( url === '/monitor/tenant/campaign/dial' ) {
        activation = '발신진행상태조회';
        eventName = 'dial';
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