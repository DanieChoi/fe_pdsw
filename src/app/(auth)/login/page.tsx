'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useApiForLogin } from '@/features/auth/hooks/useApiForLogin';
import CustomAlert from '@/components/shared/layout/CustomAlert';

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
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100">
      <Card className="w-[400px] shadow-lg">
        <CardContent className="pt-8">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo/NEXPDS_LOGO.svg"
              alt="NEXPDS"
              width={150}
              height={40}
              priority
            />
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <Input
                  type="text"
                  placeholder="아이디를 입력하세요"
                  className="h-12 bg-gray-50 border border-gray-200"
                  value={formData.user_name}
                  onChange={(e) => setFormData(prev => ({ ...prev, user_name: e.target.value }))}
                  disabled={isPending}
                />
              </div>
              
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <div className="relative flex-grow">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="비밀번호를 입력하세요"
                    className="h-12 pr-10 bg-gray-50 border border-gray-200"
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
              type="submit"
              className="w-full h-12 bg-[#5BC2C1] hover:bg-[#4BA3A2] text-white text-lg font-medium"
              disabled={isPending}
            >
              {isPending ? '로그인 중...' : '로그인'}
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <p className="mt-6 text-sm text-gray-500">
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