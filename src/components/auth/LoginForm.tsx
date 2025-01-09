'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { User, Lock } from 'lucide-react'

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add login logic here
    console.log('Form submitted:', formData)
  }

  return (
    <Card className="w-full max-w-md mx-auto border-0 shadow-none">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl text-center">
          <div className="mb-4 relative h-8">
            <Image 
              src="/logo/pds-logo.png" 
              alt="NEXPDS" 
              width={120}
              height={32}
              className="mx-auto"
              priority
            />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2 relative">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="email"
                placeholder="아이디를 입력하세요"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 pl-10 hover:border-[#5BC2C1] focus:border-[#5BC2C1] focus:ring-0"
              />
            </div>
          </div>
          <div className="space-y-2 relative">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="password"
                placeholder="패스워드를 입력하세요"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="h-12 pl-10 hover:border-[#5BC2C1] focus:border-[#5BC2C1] focus:ring-0"
              />
            </div>
          </div>
          <Button 
            type="submit" 
            className="w-full h-12 bg-[#5BC2C1] hover:bg-[#4BA3A2] text-white font-medium"
          >
            로그인
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}