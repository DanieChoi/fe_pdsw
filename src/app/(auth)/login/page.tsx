import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        <LoginForm />
        <footer className="text-center mt-8 text-sm text-gray-500">
          © 2025 NEXUS COMMUNITY All rights reserved.
        </footer>
      </div>
    </main>
  )
}