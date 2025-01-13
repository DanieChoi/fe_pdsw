// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // const sessionKey = request.cookies.get('session_key')
  
  // // 로그인 페이지는 통과
  // if (request.nextUrl.pathname.startsWith('/login')) {
  //   return NextResponse.next()
  // }

  // // 인증되지 않은 사용자는 로그인 페이지로 리다이렉트
  // if (!sessionKey) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
  ],
}