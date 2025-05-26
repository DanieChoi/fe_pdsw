// // playwright.config.ts
// import { defineConfig, devices } from '@playwright/test';

// export default defineConfig({
//   testDir: './tests',
//   fullyParallel: true,
//   forbidOnly: !!process.env.CI,
//   retries: process.env.CI ? 2 : 0,
//   workers: process.env.CI ? 1 : undefined,

//   // ✅ 보고서 자동 열기 설정
//   reporter: [['html', { open: 'always' }]], // 'always' 로 바꾸면 항상 열림

//   use: {
//     trace: 'on-first-retry',
//     headless: false // ← 원한다면 항상 브라우저 보이게
//   },

//   // ✅ 파이어폭스만 남기고 나머지 제거
//   projects: [
//     {
//       name: 'firefox', // ✅ 추가
//       use: { ...devices['Desktop Firefox'] },
//     },
//   ],
// });

// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  
  // 🔄 순차 실행 설정 (로그인 안정성을 위해)
  fullyParallel: false,  // 병렬 실행 비활성화
  workers: 1,           // 항상 순차 실행 (CI든 로컬이든)
  
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,  // 로컬에서도 1번 재시도

  // ⏱️ 타임아웃 설정
  timeout: 60000,       // 각 테스트 60초 타임아웃
  expect: {
    timeout: 10000      // expect 타임아웃 10초
  },

  // 📊 보고서 설정
  reporter: [
    ['html', { open: 'always' }],  // HTML 보고서 항상 열기
    ['list']                       // 콘솔 출력도 유지
  ],

  use: {
    // 🌐 기본 URL 설정
    baseURL: 'http://localhost:3000',
    
    // 🎬 디버깅 설정
    trace: 'on-first-retry',
    headless: false,  // 브라우저 항상 보이기
    
    // 📸 스크린샷과 비디오
    screenshot: 'only-on-failure',  // 실패 시에만 스크린샷
    video: 'retain-on-failure',     // 실패 시에만 비디오 저장
    
    // 🖥️ 뷰포트 설정
    viewport: { width: 1280, height: 720 },
    
    // 🔒 네트워크 설정
    ignoreHTTPSErrors: true,
  },

  // 🦊 Firefox만 사용
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],

  // 🖥️ 로컬 개발 서버 설정 (필요시 - 주석 해제)
  // webServer: {
  //   command: 'npm run dev',
  //   port: 3000,
  //   reuseExistingServer: !process.env.CI,
  // },
});