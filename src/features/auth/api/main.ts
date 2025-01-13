// src/features/auth/api/login.ts
import { set } from 'react-hook-form';
import { MainCredentials, LoginRequest, LoginResponse, LoginResponseFirst } from '../types/mainIndex';
import useStore from '@/features/auth/hooks/store';

export const MainApi = {
  login: async (credentials: MainCredentials): Promise<LoginResponse> => {
    
    const { id, tenant_id, session_key } = useStore.getState();

    const mainData = {
        "filter": {
            "campaign_id": {
                "start": 1,
                "end": 1000
            }
        },
        "sort": {
            "campaign_id": 1
        },
        "page": {
            "index": 1,
            "items": 10
        }
    };
    
    const campaignResponse = await fetch('http://10.10.40.145:8010/pds/collections/campaign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Session-Key': session_key
      },
      body: JSON.stringify(mainData),
    });
    
    const data: LoginResponse = await campaignResponse.json();
    
    if (!campaignResponse.ok || data.result_code !== 0) {
      throw new Error(data.result_msg || '로그인 실패');
    }
    // const userInfo:UserInfoData = {
    //   id: dataFirst.id,
    //   tenant_id: data.tenant_id
    // }
    // useStore.setState(userInfo);

    return data;
  }
};