
// // features/auth/api/login.ts
// import { LoginCredentials, LoginRequest, LoginResponse, LoginResponseFirst } from '../types/loginIndex';
// import { axiosInstance, externalAxiosInstance } from '@/lib/axios';
// import useStore, { UserInfoData } from '@/features/auth/hooks/store';
// import Cookies from 'js-cookie';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { getRuntimeEnv } from '@/lib/getRuntimeEnv';
// import { useSSEStore } from '@/store/useSSEStore';

// export const loginApi = {
//   login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
//     try {
//       // ✅ 반드시 함수 안에서 호출해야 env.js 로딩 이후 window 객체에 접근 가능
//       const LOGIN_URL = getRuntimeEnv('LOGIN_API_URL');

//       if (!LOGIN_URL) {
//         console.log("🚨 LOGIN_URL이 정의되지 않았습니다.");
//         throw new Error('LOGIN_URL이 정의되지 않았습니다.');
//       }

//       // 🔐 첫 번째 로그인 (외부 인증)
//       const { data: dataFirst } = await externalAxiosInstance.get<LoginResponseFirst>(
//         LOGIN_URL,
//         {
//           params: {
//             id: credentials.user_name,
//             passwd: credentials.password
//           }
//         }
//       );

//       if (!dataFirst.id) {
//         throw new Error('서버 에러입니다.');
//       }

//       // 🔐 두 번째 로그인 (내부 인증)
//       const loginData: LoginRequest = {
//         grant_type: 'password',
//         device_id: 'WEB',
//         user_name: dataFirst.id,
//         password: dataFirst.passwd,
//       };

//       const { data } = await axiosInstance.post<LoginResponse>('/login', loginData);

//       if (data.result_code !== 0) {
//         throw new Error(data.result_msg || '로그인 실패');
//       }

//       // 🌐 클라이언트 IP 조회
//       const { data: dataSecond } = await axios.get<{ ip: string }>(
//         `https://api.ipify.org?format=json`
//       );

//       // 🍪 쿠키 저장
//       Cookies.set('userHost', dataSecond.ip, {
//         expires: 1,
//         secure: false,
//         sameSite: 'Lax',
//         path: '/',
//       });

//       Cookies.set('id', dataFirst.id, {
//         expires: 1,
//         secure: false,
//         sameSite: 'Lax',
//         path: '/'
//       });

//       // ###### 로그인 시간 기준으로 세션키 만료시간 설정 ######
//       const currentDate = new Date();
//       const expiredDate = new Date(currentDate.getTime() + data.expires_in); // 밀리세컨드 더하기
      
//       data.expires_in = expiredDate.getTime(); // 만료일시를 밀리세컨드로 변환하여 저장

//       // 쿠키 설정
//       Cookies.set('session_key', data.session_key, {
//         expires: 1,
//         path: '/',
//         secure: false,
//         sameSite: 'Lax',
//         domain: window.location.hostname,
//       });

//       Cookies.set('tenant_id', String(data.tenant_id), { expires: 1, path: '/' });
//       Cookies.set('role_id', String(data.role_id), { expires: 1, path: '/' });
//       Cookies.set('menu_role_id', String(data.menu_role_id), { expires: 1, path: '/' });

//       console.log("🍪 Cookies after setting:", {
//         session_key: Cookies.get('session_key'),
//         tenant_id: Cookies.get('tenant_id'),
//         role_id: Cookies.get('role_id'),
//         menu_role_id: Cookies.get('menu_role_id'),
//       });

//       // 🧠 사용자 정보 저장 (Zustand)
//       const userInfo: UserInfoData = {
//         id: dataFirst.id,
//         tenant_id: data.tenant_id,
//         session_key: data.session_key,
//         role_id: data.role_id,
//         menu_role_id: data.menu_role_id,
//       };

//       useStore.getState().setUserInfo(userInfo);

//       // 🔄 SSE 연결 초기화 (Zustand 스토어 사용)
//       // 브라우저 환경에서만 실행
//       if (typeof window !== 'undefined' && window.EventSource) {
//         try {
//           // SSE 메시지 핸들러 함수
//           const sseMessageHandler = (eventData: any) => {
//             // CustomEvent를 발생시켜 Footer 등의 컴포넌트에서 처리할 수 있도록 함
//             const sseEvent = new CustomEvent('sse-message', { 
//               detail: eventData 
//             });
//             window.dispatchEvent(sseEvent);
//           };
          
//           // useSSEStore의 initSSE 메서드 호출하여 SSE 연결 초기화
//           useSSEStore.getState().initSSE(
//             dataFirst.id,
//             String(data.tenant_id),
//             sseMessageHandler
//           );
          
//           console.log("🔌 로그인 성공 - SSE 연결 초기화됨");
//         } catch (error) {
//           console.error("🚨 SSE 초기화 오류:", error);
//           // SSE 연결 실패는 로그인 실패로 취급하지 않음 - 사용자 경험을 위해
//         }
//       }

//       return data;
//     } catch (error: Error | unknown) {
//       const err = error as Error;
//       toast.error(`❌ 로그인 실패: ${err.message}`);
//       throw err;
//     }
//   },
// };

// features/auth/api/login.ts
import { LoginCredentials, LoginRequest, LoginResponse, LoginResponseFirst } from '../types/loginIndex';
import { axiosInstance, externalAxiosInstance } from '@/lib/axios';
import useStore, { UserInfoData } from '@/features/auth/hooks/store'; // Assuming this is your user info store
import Cookies from 'js-cookie';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getRuntimeEnv } from '@/lib/getRuntimeEnv';
import { useSSEStore } from '@/store/useSSEStore'; // Import the SSE store

// Define the expected structure of SSE data for clarity
type EventData = {
  announce: string;
  command: string;
  data: any;
  kind: string;
  campaign_id: string;
  skill_id?: string;
  [key: string]: any;
};


export const loginApi = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    try {
      // ✅ Ensure environment variable access is safe
      const LOGIN_URL = typeof window !== 'undefined' ? getRuntimeEnv('LOGIN_API_URL') : process.env.LOGIN_API_URL;

      if (!LOGIN_URL) {
        console.error("🚨 LOGIN_URL is not defined.");
        throw new Error('Login configuration error.');
      }

      // --- 1. External Authentication ---
      console.log("🔐 [Login] Step 1: External Authentication...");
      const { data: dataFirst } = await externalAxiosInstance.get<LoginResponseFirst>(
        LOGIN_URL,
        {
          params: {
            id: credentials.user_name,
            passwd: credentials.password
          }
        }
      );

      if (!dataFirst || !dataFirst.id) { // Added check for dataFirst itself
        console.error("🚨 [Login] External authentication failed or returned invalid data.");
        throw new Error('External authentication failed.');
      }
      console.log("👍 [Login] Step 1: Success", { id: dataFirst.id });


      // --- 2. Internal Authentication ---
      console.log("🔐 [Login] Step 2: Internal Authentication...");
      const loginData: LoginRequest = {
        grant_type: 'password',
        device_id: 'WEB', // Consider making this dynamic if needed
        user_name: dataFirst.id,
        password: dataFirst.passwd, // Assuming external auth returns the password needed here
      };

      const { data: internalLoginResponse } = await axiosInstance.post<LoginResponse>('/login', loginData);

      if (internalLoginResponse.result_code !== 0) {
        console.error("🚨 [Login] Internal authentication failed:", internalLoginResponse.result_msg);
        throw new Error(internalLoginResponse.result_msg || 'Internal login failed');
      }
      console.log("👍 [Login] Step 2: Success", { tenant_id: internalLoginResponse.tenant_id });


      // --- 3. Client IP (Optional but kept from original) ---
      let clientIp = 'unknown';
      try {
         console.log("🌐 [Login] Fetching client IP...");
         // Ensure protocol is specified
         const { data: ipData } = await axios.get<{ ip: string }>(
           'https://api.ipify.org?format=json'
         );
         clientIp = ipData.ip;
         console.log("   Client IP:", clientIp);
      } catch (ipError) {
         console.warn("⚠️ [Login] Could not fetch client IP:", ipError);
      }


      // --- 4. Set Cookies ---
      console.log("🍪 [Login] Setting cookies...");
      const cookieOptions = {
        expires: 1, // Expires in 1 day
        path: '/',
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'Lax' as const, // Lax is generally recommended
         // domain: window.location.hostname // Domain might cause issues on localhost, be careful
      };

      Cookies.set('userHost', clientIp, cookieOptions);
      Cookies.set('id', dataFirst.id, cookieOptions);
      Cookies.set('tenant_id', String(internalLoginResponse.tenant_id), cookieOptions);
      Cookies.set('role_id', String(internalLoginResponse.role_id), cookieOptions);
      Cookies.set('menu_role_id', String(internalLoginResponse.menu_role_id), cookieOptions);

      // Session Key with specific expiry
      const expiresDate = new Date(Date.now() + internalLoginResponse.expires_in * 1000); // Convert seconds to milliseconds
      Cookies.set('session_key', internalLoginResponse.session_key, {
        ...cookieOptions,
        expires: expiresDate, // Set specific expiry date
      });

      // Add expires_in back to the response object if needed downstream, converting it to timestamp
      internalLoginResponse.expires_in = expiresDate.getTime();

      console.log("   Cookies set."); // Avoid logging sensitive values like session_key


      // --- 5. Update Zustand User Store ---
      console.log("🧠 [Login] Updating user store...");
      const userInfo: UserInfoData = {
        id: dataFirst.id,
        tenant_id: internalLoginResponse.tenant_id,
        session_key: internalLoginResponse.session_key, // Store if needed, or rely on cookie
        role_id: internalLoginResponse.role_id,
        menu_role_id: internalLoginResponse.menu_role_id,
      };
      useStore.getState().setUserInfo(userInfo); // Assuming useStore is your user info Zustand store
      console.log("   User store updated.");


      // --- 6. Initialize SSE Connection ---
      // Check if running in a browser environment where EventSource is available
      if (typeof window !== 'undefined' && window.EventSource) {
        console.log("⚡ [Login] Initializing SSE connection via store...");
        try {
          // Define the handler function that will process SSE messages
          // This handler dispatches a custom browser event
          const sseMessageHandler = (eventData: EventData) => {
             // console.log("✉️ [Login -> SSE Handler] Received data:", eventData); // Debugging
             const sseEvent = new CustomEvent('sse-message', {
               detail: eventData // Pass the parsed data
             });
             window.dispatchEvent(sseEvent);
          };

          // Call the initSSE action from the zustand store
          useSSEStore.getState().initSSE(
            dataFirst.id,
            String(internalLoginResponse.tenant_id),
            sseMessageHandler // Pass the handler function
          );

          console.log("👍 [Login] SSE initialization requested.");

        } catch (sseError) {
          console.error("🚨 [Login] Failed to initialize SSE connection:", sseError);
          toast.error('⚠️ Login successful, but real-time updates might be unavailable.');
          // Do not throw an error here, login itself was successful
        }
      } else {
        console.warn("⚠️ [Login] SSE not initialized: Not in a compatible browser environment.");
      }

      console.log("✅ [Login] Login process completed successfully.");
      return internalLoginResponse; // Return the internal login response

    } catch (error) {
      console.error("🚨 [Login] Login failed:", error);
      // Display a user-friendly error message
      const message = error instanceof Error ? error.message : 'An unknown error occurred during login.';
      // Use backticks for template literal if needed, ensure toast content is a string
      toast.error(`❌ Login Failed: ${message}`);
      // Re-throw the error so the calling code knows login failed
      throw error;
    }
  },
};