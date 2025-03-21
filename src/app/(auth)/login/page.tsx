// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { Eye, EyeOff } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Checkbox } from "@/components/ui/checkbox";
// import { useApiForLogin } from '@/features/auth/hooks/useApiForLogin';
// import CustomAlert from '@/components/shared/layout/CustomAlert';
// import { Button } from "@/components/ui/button";
// import { useAuthStore } from '@/store/authStore';
// import { useEnvironmentStore } from '@/store/environmentStore';
// import { useApirForEnvironmentList } from '@/features/auth/hooks/useApiForEnvironment';

// interface LoginFormData {
//   user_name: string;
//   password: string;
//   remember: boolean;
// }

// export default function LoginPage() {
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState<LoginFormData>({
//     user_name: '',
//     password: '',
//     remember: false
//   });
//   const [isPending, setIsPending] = useState(false);
//   const [alertState, setAlertState] = useState({
//     isOpen: false,
//     message: '',
//     title: '로그인',
//     type: '0',
//   });

//   const { setAuth } = useAuthStore();
//   const { setEnvironment } = useEnvironmentStore(); // 새로운 환경설정 스토어 사용

//   const { mutate: environment } = useApirForEnvironmentList({
//     onSuccess: (data) => {
//       console.log('환경설정 데이터:', data);

//       // 환경설정 데이터를 별도 스토어에 저장
//       setEnvironment(data);
//     },
//     onError: (error) => {
//       console.error('환경설정 데이터 로드 실패:', error);
//       setAlertState({
//         isOpen: true,
//         message: '환경설정 데이터를 불러오는데 실패했습니다.',
//         title: '환경설정',
//         type: '2',
//       });
//     }
//   });

//   const { mutate: login } = useApiForLogin({
//     onSuccess: (data) => {
//       setIsPending(false);

//       console.log('data (로그인 응답)', data);

//       setAuth(
//         formData.user_name,              // id
//         data.tenant_id,                  // tenant_id
//         data.session_key,                // session_key
//         data.role_id,                    // role_id 추가
//         data.menu_role_id
//       );

//       // 기억하기가 체크되어 있다면 로컬 스토리지에 저장
//       if (formData.remember) {
//         localStorage.setItem('remembered_username', formData.user_name);
//       } else {
//         localStorage.removeItem('remembered_username');
//       }

//       // 환경설정 정보 요청
//       environment({
//         centerId: 1,                 // 하드코딩된 값
//         tenantId: data.tenant_id,    // 로그인 응답에서 받은 tenant_id
//         employeeId: formData.user_name  // 로그인 시 입력한 user_name
//       });

//       router.push('/main');
//     },
//     onError: (e) => {
//       if( e.message === 'Request failed with status code 500'){
//         setAlertState({
//           isOpen: true,
//           message: '아이디, 또는 암호가 잘못 입력되었습니다.',
//           title: '로그인',
//           type: '2',
//         });
//       }else if( e.message === 'User does not exist.'){
//         setAlertState({
//           isOpen: true,
//           message: 'API인증이 정상적으로 이루어 지지 않았습니다.',
//           title: '로그인',
//           type: '2',
//         });
//       }else if( e.message === 'Password is wrong.'){
//         setAlertState({
//           isOpen: true,
//           message: '접근권한이 없습니다.',
//           title: '로그인',
//           type: '2',
//         });
//       }else if( e.message === 'Device is unknown.'){
//         setAlertState({
//           isOpen: true,
//           message: '접근권한이 없습니다.',
//           title: '로그인',
//           type: '2',
//         });
//       }else{
//         setAlertState({
//           isOpen: true,
//           message: e.message,
//           title: '로그인',
//           type: '2',
//         });
//       }
//       setIsPending(false);
//     },
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsPending(true);
//     if( formData.user_name === ''){
//       setAlertState({
//         isOpen: true,
//         message: '아이디를 입력하세요',
//         title: '로그인',
//         type: '2',
//       });
//       setIsPending(false);
//     }else if( formData.password === ''){
//       setAlertState({
//         isOpen: true,
//         message: '비밀번호를 입력하세요',
//         title: '로그인',
//         type: '2',
//       });
//       setIsPending(false);
//     }else{
//       login(formData);
//     }
//   };

//   // 컴포넌트 마운트 시 저장된 사용자 이름 불러오기
//   useEffect(() => {
//     const rememberedUsername = localStorage.getItem('remembered_username');
//     if (rememberedUsername) {
//       setFormData(prev => ({
//         ...prev,
//         user_name: rememberedUsername,
//         remember: true
//       }));
//     }
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center">
//       <Card className="w-[500px] shadow-none border-0 py-7 px-10">
//         <div className="flex mb-8 mb-70">
//           <Image
//             src="/logo/pds-logo.svg"
//             alt="NEXPDS"
//             width={230}
//             height={51}
//             className=""
//             priority
//           />
//         </div>
//         <CardContent className="p-0">
//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div className="relative">
//                 <Image
//                   src="/logo/icon_id.svg"
//                   alt="id"
//                   width={14}
//                   height={16}
//                   className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                 />
//                 <Input
//                   type="text"
//                   placeholder="아이디를 입력하세요"
//                   className="h-12 pl-10 
//                   border-b-1 
//                   border-black shadow-none 
//                   border-t-transparent border-l-transparent border-r-transparent 
//                   focus:border-b-[0px] 
//                   focus:outline-none focus:ring-0 rounded-none
//                    focus:bg-[#F0F0F0] placeholder-[#aaa] font-16"
//                   value={formData.user_name}
//                   onChange={(e) => setFormData(prev => ({ ...prev, user_name: e.target.value }))}
//                   disabled={isPending}
//                 />
//               </div>

//               <div className="relative">
//                 <Image
//                   src="/logo/icon_pw.svg"
//                   alt="id"
//                   width={14}
//                   height={19}
//                   className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10"
//                 />
//                 <div className="relative flex-grow">
//                   <Input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="비밀번호를 입력하세요"
//                     className="h-12 pl-10 
//                     border-b-1 
//                     border-black shadow-none 
//                     border-t-transparent border-l-transparent border-r-transparent 
//                     focus:border-b-[0px] 
//                     focus:outline-none focus:ring-0 rounded-none
//                     focus:bg-[#F0F0F0] placeholder-[#aaa] font-16"
//                     value={formData.password}
//                     onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
//                     disabled={isPending}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
//                     disabled={isPending}
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-5 w-5" />
//                     ) : (
//                       <Eye className="h-5 w-5" />
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-end mt-10 gap-2">
//                 <Checkbox
//                   id="remember"
//                   checked={formData.remember}
//                   onCheckedChange={(checked) =>
//                     setFormData(prev => ({ ...prev, remember: checked as boolean }))
//                   }
//                    className="peer h-5 w-5 rounded-full border border-[#8E8E8E] data-[state=checked]:!border-[#8E8E8E] focus:ring-0 focus:outline-none transition-colors duration-200"
//                 />
//                 <label
//                   htmlFor="remember"
//                   className="text-sm font-medium  cursor-pointer select-none"
//                 >
//                   ID 기억하기
//                 </label>
//             </div>

//             <Button
//               variant="login"
//               type="submit"
//               className="mt-12"
//             >
//               {isPending ? '로그인 중...' : '로그인'}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>

//       <p className="footer-text">
//         © {new Date().getFullYear()} NEXUS COMMUNITY All rights reserved.
//       </p>

//       <CustomAlert
//         message={alertState.message}
//         title={alertState.title}
//         type={alertState.type}
//         isOpen={alertState.isOpen}
//         onClose={() => setAlertState((prev) => ({ ...prev, isOpen: false }))}
//       />
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from "@/components/ui/checkbox";
import { useApiForLogin } from '@/features/auth/hooks/useApiForLogin';
import CustomAlert from '@/components/shared/layout/CustomAlert';
import { Button } from "@/components/ui/button";
import { useAuthStore } from '@/store/authStore';
import { useEnvironmentStore } from '@/store/environmentStore';
import { useApirForEnvironmentList } from '@/features/auth/hooks/useApiForEnvironment';

interface LoginFormData {
  user_name: string;
  password: string;
  remember: boolean;
}

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({
    user_name: '',
    password: '',
    remember: false
  });
  const [isPending, setIsPending] = useState(false);
  const [alertState, setAlertState] = useState({
    isOpen: false,
    message: '',
    title: '로그인',
    type: '0',
  });

  const { setAuth } = useAuthStore();
  const { setEnvironment } = useEnvironmentStore(); // 새로운 환경설정 스토어 사용

  const { mutate: environment } = useApirForEnvironmentList({
    onSuccess: (data) => {
      console.log('환경설정 데이터:', data);

      // 환경설정 데이터를 별도 스토어에 저장
      setEnvironment(data);
    },
    onError: (error) => {
      console.error('환경설정 데이터 로드 실패:', error);
      setAlertState({
        isOpen: true,
        message: '환경설정 데이터를 불러오는데 실패했습니다.',
        title: '환경설정',
        type: '2',
      });
    }
  });

  const { mutate: login } = useApiForLogin({
    onSuccess: (data) => {
      setIsPending(false);

      console.log('data (로그인 응답)', data);

      setAuth(
        formData.user_name,              // id
        data.tenant_id,                  // tenant_id
        data.session_key,                // session_key
        data.role_id,                    // role_id 추가
        data.menu_role_id
      );

      // 기억하기가 체크되어 있다면 로컬 스토리지에 저장
      if (formData.remember) {
        localStorage.setItem('remembered_username', formData.user_name);
      } else {
        localStorage.removeItem('remembered_username');
      }

      // 환경설정 정보 요청
      environment({
        centerId: 1,                 // 하드코딩된 값
        tenantId: data.tenant_id,    // 로그인 응답에서 받은 tenant_id
        employeeId: formData.user_name  // 로그인 시 입력한 user_name
      });

      router.push('/main');
    },
    onError: (e) => {
      if (e.message === 'Request failed with status code 500') {
        setAlertState({
          isOpen: true,
          message: '아이디, 또는 암호가 잘못 입력되었습니다.',
          title: '로그인',
          type: '2',
        });
      } else if (e.message === 'User does not exist.') {
        setAlertState({
          isOpen: true,
          message: 'API인증이 정상적으로 이루어 지지 않았습니다.',
          title: '로그인',
          type: '2',
        });
      } else if (e.message === 'Password is wrong.') {
        setAlertState({
          isOpen: true,
          message: '접근권한이 없습니다.',
          title: '로그인',
          type: '2',
        });
      } else if (e.message === 'Device is unknown.') {
        setAlertState({
          isOpen: true,
          message: '접근권한이 없습니다.',
          title: '로그인',
          type: '2',
        });
      } else {
        setAlertState({
          isOpen: true,
          message: e.message,
          title: '로그인',
          type: '2',
        });
      }
      setIsPending(false);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    if (formData.user_name === '') {
      setAlertState({
        isOpen: true,
        message: '아이디를 입력하세요',
        title: '로그인',
        type: '2',
      });
      setIsPending(false);
    } else if (formData.password === '') {
      setAlertState({
        isOpen: true,
        message: '비밀번호를 입력하세요',
        title: '로그인',
        type: '2',
      });
      setIsPending(false);
    } else {
      login(formData);
    }
  };

  // 컴포넌트 마운트 시 저장된 사용자 이름 불러오기
  useEffect(() => {
    const rememberedUsername = localStorage.getItem('remembered_username');
    if (rememberedUsername) {
      setFormData(prev => ({
        ...prev,
        user_name: rememberedUsername,
        remember: true
      }));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">

      <Card className="w-[500px] shadow-none border-0 py-7 px-10">
        <div className="flex mb-8 mb-70">
          <Image
            src="/logo/pds-logo.svg"
            alt="NEXPDS"
            width={230}
            height={51}
            priority
          />
        </div>
        <CardContent className="p-0">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="relative">
                {/* 작은 아이콘은 공통된 방식 사용 */}
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <Image
                    src="/logo/icon_id.svg"
                    alt="id"
                    width={14}
                    height={16}
                    priority
                  />
                </div>
                <Input
                  type="text"
                  placeholder="아이디를 입력하세요"
                  className="h-12 pl-10 
                  border-b-1 
                  border-black shadow-none 
                  border-t-transparent border-l-transparent border-r-transparent 
                  focus:border-b-[0px] 
                  focus:outline-none focus:ring-0 rounded-none
                  focus:bg-[#F0F0F0] placeholder-[#aaa] font-16"
                  value={formData.user_name}
                  onChange={(e) => setFormData(prev => ({ ...prev, user_name: e.target.value }))}
                  disabled={isPending}
                />
              </div>

              <div className="relative">
                {/* 작은 아이콘은 공통된 방식 사용 */}
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10">
                  <Image
                    src="/logo/icon_pw.svg"
                    alt="password"
                    width={14}
                    height={19}
                    priority
                  />
                </div>
                <div className="relative flex-grow">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="비밀번호를 입력하세요"
                    className="h-12 pl-10 
                    border-b-1 
                    border-black shadow-none 
                    border-t-transparent border-l-transparent border-r-transparent 
                    focus:border-b-[0px] 
                    focus:outline-none focus:ring-0 rounded-none
                    focus:bg-[#F0F0F0] placeholder-[#aaa] font-16"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    disabled={isPending}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    disabled={isPending}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end mt-10 gap-2">
              <Checkbox
                id="remember"
                checked={formData.remember}
                onCheckedChange={(checked) =>
                  setFormData(prev => ({ ...prev, remember: checked as boolean }))
                }
                className="peer h-5 w-5 rounded-full border border-[#8E8E8E] data-[state=checked]:!border-[#8E8E8E] focus:ring-0 focus:outline-none transition-colors duration-200"
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium cursor-pointer select-none"
              >
                ID 기억하기
              </label>
            </div>

            <Button
              variant="login"
              type="submit"
              className="mt-12 w-full"
            >
              {isPending ? '로그인 중...' : '로그인'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <p className="footer-text mt-4">
        © {new Date().getFullYear()} NEXUS COMMUNITY All rights reserved.
      </p>

      <CustomAlert
        message={alertState.message}
        title={alertState.title}
        type={alertState.type}
        isOpen={alertState.isOpen}
        onClose={() => setAlertState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}