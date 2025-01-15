'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useApiForLogin } from '@/features/auth/hooks/useApiForLogin';
import CustomAlert from '@/components/shared/layout/CustomAlert';
import { Button } from "@/components/ui/button";

interface LoginFormData {
  user_name: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({
    user_name: '',
    password: ''
  });
  const [isPending, setIsPending] = useState(false);
  const [alertState, setAlertState] = useState({
    isOpen: false,
    message: '',
    title: '로그인',
    type: '0',
  });

  const { mutate: login } = useApiForLogin({
    onSuccess: () => {
      setIsPending(false);
      router.push('/main');
    },
    onError: (e) => {
      setAlertState({
        isOpen: true,
        message: e.message,
        title: '로그인',
        type: '0',
      });
      setIsPending(false);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    login(formData);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <Card className="w-[500px] shadow-none border-0 py-7 px-10">
          <div className="flex mb-8 mb-70">
              <Image 
              src="/logo/pds-logo.svg" 
              alt="NEXPDS" 
              width={230}
              height={51}
              className=""
              priority
            />
          </div>
        <CardContent className="p-0">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="relative">
                <Image 
                  src="/logo/icon_id.svg" 
                  alt="id" 
                  width={14}
                  height={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
                <Input
                  type="text"
                  placeholder="아이디를 입력하세요"
                  className="h-12 pl-10 border-b-1 border-black shadow-none border-t-0 border-l-0 border-r-0 focus:border-black focus:border-b-[0px] focus:outline-none focus:ring-0 rounded-none focus:bg-[#F0F0F0] placeholder-[#aaa] font-16"
                  value={formData.user_name}
                  onChange={(e) => setFormData(prev => ({ ...prev, user_name: e.target.value }))}
                  disabled={isPending}
                />
              </div>
              
              <div className="relative">
                <Image 
                  src="/logo/icon_pw.svg" 
                  alt="id" 
                  width={14}
                  height={19}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10"
                />
                <div className="relative flex-grow">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="비밀번호를 입력하세요"
                    className="h-12 pl-10 border-b-1 border-black shadow-none border-t-0 border-l-0 border-r-0 focus:border-black focus:border-b-[0px] focus:outline-none focus:ring-0 rounded-none focus:bg-[#F0F0F0] placeholder-[#aaa] font-16"
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

            <Button 
              variant="login"
              type="submit" 
              className="mt-100"
              // disabled={isLoading}
            >
              {isPending ? '로그인 중...' : '로그인'}
            </Button>          
          </form>
        </CardContent>
      </Card>
      
      <p className="footer-text">
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