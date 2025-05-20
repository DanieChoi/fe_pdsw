// // src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//   const sessionKey = request.cookies.get('session_key')
  
//   // 로그인 페이지는 통과
//   if (request.nextUrl.pathname.startsWith('/login')) {
//     return NextResponse.next()
//   }

//   // 인증되지 않은 사용자는 로그인 페이지로 리다이렉트
//   if (!sessionKey) {
//     return NextResponse.redirect(new URL('/login', request.url))
//   }

//   return NextResponse.next()
// }

export function middleware(request: NextRequest) {
  const sessionKey = request.cookies.get('session_key');
  const isLoginPage = request.nextUrl.pathname.startsWith('/login');

  // ✅ 로그인 안 한 상태에서 로그인 페이지가 아닌 다른 곳에 접근하면 로그인으로 보냄
  if (!sessionKey && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // ✅ 나머지는 모두 허용 (로그인 했거나 로그인 페이지 요청이면)
  return NextResponse.next();
}


export const config = {
  matcher: [
    '/((?!_next|favicon.ico|login|env.js|images|icons|assets|public|api|pds|logo).*)',
  ],
}

