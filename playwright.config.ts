// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // ✅ 보고서 자동 열기 설정
  reporter: [['html', { open: 'always' }]], // 'always' 로 바꾸면 항상 열림

  use: {
    trace: 'on-first-retry',
    headless: false // ← 원한다면 항상 브라우저 보이게
  },

  // ✅ 크롬만 남기고 나머지 제거
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },
    {
      name: 'firefox', // ✅ 추가
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
