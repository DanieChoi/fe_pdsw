// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 로그인, 공개 페이지는 제외
  if (request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.next();
  }

  const sessionKey = request.cookies.get('session_key');
  
  if (!sessionKey) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/main/:path*',
    '/api/collections/:path*'
  ]
};