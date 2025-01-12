// src/app/(auth)/login/page.tsx
'use client'

import LoginForm from '@/components/auth/LoginForm'
import { useApiForLogin } from '@/features/auth/hooks/useApiForLogin'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import CustomAlert from '@/components/common/layout/CustomAlert'

interface LoginFormData {
  user_name: string
  password: string
}

export default function LoginPage() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('fail');

  const { mutate: login } = useApiForLogin({
    onSuccess: () => {
      setIsPending(false);
      router.push('/main') // 로그인 성공 시 리다이렉트
    },onError: (e) => {
      setAlertMessage(e.message);
      setAlertVisible(true);
      setIsPending(false);
    }
  })

  const handleLogin = (formData: LoginFormData) => {
    setIsPending(true);
    login(formData);
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        <LoginForm 
          onSubmit={handleLogin} 
          isLoading={isPending}
        />
        <footer className="text-center mt-8 text-sm text-gray-500">
          © 2025 NEXUS COMMUNITY All rights reserved.
        </footer>
        {alertVisible && (
          <CustomAlert 
            message={alertMessage} 
            type={alertType} 
            onClose={() => setAlertVisible(false)} 
          />
        )}
      </div>
    </main>
  )
}