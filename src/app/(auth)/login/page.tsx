// src/app/(auth)/login/page.tsx
'use client'

import LoginForm from '@/components/auth/LoginForm'
import { useApiForLogin } from '@/features/auth/hooks/useApiForLogin'
import { useRouter } from 'next/navigation'

interface LoginFormData {
  email: string
  password: string
}

export default function LoginPage() {
  const router = useRouter()
  const { mutate: login, isPending } = useApiForLogin({
    onSuccess: () => {
      router.push('/main') // 로그인 성공 시 리다이렉트
    }
  })

  const handleLogin = (formData: LoginFormData) => {
    login(formData)
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
      </div>
    </main>
  )
}