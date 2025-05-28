import { test, expect } from '@playwright/test';
import { loginAndGoToCampaignManagement } from './helpers/login.helper';

test('캠페인 중에서 무작위 선택하여 상태 전환', async ({ page }) => {
  // 로그인 및 캠페인 관리 페이지로 이동
  await loginAndGoToCampaignManagement(page);

  // 멈춤 또는 중지 상태인 캠페인들만 찾기
  const pausedCampaigns = page.locator('div.campaign-node img[src*="tree_pause"]').locator('..');
  const stoppedCampaigns = page.locator('div.campaign-node img[src*="tree_stop"]').locator('..');
  
  const pausedCount = await pausedCampaigns.count();
  const stoppedCount = await stoppedCampaigns.count();
  const totalCount = pausedCount + stoppedCount;

  if (totalCount === 0) {
    console.log('⚠️ 상태 변경 가능한 캠페인이 없습니다. 테스트 중단');
    return;
  }

  console.log(`📋 상태 변경 가능한 캠페인: 멈춤 ${pausedCount}개, 중지 ${stoppedCount}개`);

  // 무작위로 선택
  const randomNum = Math.random() * totalCount;
  let selectedCampaign;
  let currentState;

  if (randomNum < pausedCount) {
    // 멈춤 상태 캠페인 선택
    const randomPausedIndex = Math.floor(Math.random() * pausedCount);
    selectedCampaign = pausedCampaigns.nth(randomPausedIndex);
    currentState = 'pause';
  } else {
    // 중지 상태 캠페인 선택
    const randomStoppedIndex = Math.floor(Math.random() * stoppedCount);
    selectedCampaign = stoppedCampaigns.nth(randomStoppedIndex);
    currentState = 'stop';
  }

  // 선택된 캠페인 정보 출력
  const campaignText = await selectedCampaign.textContent();
  console.log(`🎯 선택된 캠페인: ${campaignText?.trim()} (현재: ${currentState})`);

  // 컨텍스트 메뉴 열기
  await selectedCampaign.click({ button: 'right' });
  await page.waitForTimeout(500);
  await page.getByText('시작구분:').first().hover();

  // 상태 전환
  if (currentState === 'pause') {
    console.log('🟡 멈춤 → 중지로 전환');
    await page.getByText('중지').click();
  } else {
    console.log('🟠 중지 → 멈춤으로 전환');
    await page.getByText('멈춤').click();
  }

  // 성공 확인
  await expect(page.getByText('캠페인 상태가 성공적으로 변경되었습니다!')).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: '확인' }).click();
  console.log('✅ 캠페인 상태 변경 성공');
});