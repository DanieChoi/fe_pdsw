// C:\nproject2\fe_pdsw_for_playwright\tests\campaign-management-navigation.spec.ts
import { test, expect } from '@playwright/test';
import { loginAsAdmin } from './helpers/login.helper';

test('메인 페이지에서 캠페인 관리 클릭 시 캠페인 관리 탭이 등록되는지 테스트', async ({ page }) => {
  // 로그인 헬퍼 사용
  await loginAsAdmin(page);
  
  // 헤더의 캠페인 관리 버튼 찾기
  const campaignManagementButton = page.locator('button:has(span:text("캠페인 관리"))');
  await expect(campaignManagementButton).toBeVisible();
  
  // 캠페인 관리 클릭
  await campaignManagementButton.click();
  await page.waitForTimeout(1500);
  
  // 캠페인 관리 탭이 탭바에 등록되었는지 확인
  const campaignTab = page.locator('div[data-tab-id]:has(span:text("캠페인 관리"))');
  await expect(campaignTab).toBeVisible();
  
  // 활성화된 탭인지 확인 (배경색이 파란색인지)
  await expect(campaignTab).toHaveClass(/bg-\[#56CAD6\]/);
  
  console.log('🎉 캠페인 관리 탭 등록 테스트 완료');
});