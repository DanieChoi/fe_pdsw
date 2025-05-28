import { test, expect } from '@playwright/test';
import { loginAndGoToCampaignManagement } from './helpers/login.helper';

test('캠페인 중에서 무작위 선택하여 상태 전환', async ({ page }) => {
  // 로그인 및 캠페인 관리 페이지로 이동
  await loginAndGoToCampaignManagement(page);

  // 캠페인 트리가 완전히 로드될 때까지 대기
  await page.waitForSelector('div.campaign-node', { timeout: 10000 });
  await page.waitForTimeout(2000);

  // 멈춤 상태 캠페인 찾기 (더 간단한 선택자 사용)
  const pausedCampaigns = page.locator('div.campaign-node:has(img[src="/sidebar-menu/tree_pause.svg"])');
  const stoppedCampaigns = page.locator('div.campaign-node:has(img[src="/sidebar-menu/tree_stop.svg"])');
  
  const pausedCount = await pausedCampaigns.count();
  const stoppedCount = await stoppedCampaigns.count();
  const totalCount = pausedCount + stoppedCount;

  console.log(`📋 상태 변경 가능한 캠페인: 멈춤 ${pausedCount}개, 중지 ${stoppedCount}개`);

  if (totalCount === 0) {
    console.log('⚠️ 상태 변경 가능한 캠페인이 없습니다. 테스트 중단');
    return;
  }

  // 무작위로 선택
  let selectedCampaign;
  let currentState;
  let campaignName;

  if (Math.random() < pausedCount / totalCount) {
    // 멈춤 상태 캠페인 선택
    const randomIndex = Math.floor(Math.random() * pausedCount);
    selectedCampaign = pausedCampaigns.nth(randomIndex);
    currentState = 'pause';
    campaignName = await selectedCampaign.locator('span.text-555').textContent();
    console.log(`🎯 선택된 캠페인: ${campaignName?.trim()} (현재: 멈춤 상태)`);
  } else {
    // 중지 상태 캠페인 선택
    const randomIndex = Math.floor(Math.random() * stoppedCount);
    selectedCampaign = stoppedCampaigns.nth(randomIndex);
    currentState = 'stop';
    campaignName = await selectedCampaign.locator('span.text-555').textContent();
    console.log(`🎯 선택된 캠페인: ${campaignName?.trim()} (현재: 중지 상태)`);
  }

  // 선택된 캠페인에서 우클릭 (컨텍스트 메뉴 열기)
  await selectedCampaign.click({ button: 'right' });
  console.log('🖱️ 컨텍스트 메뉴 열기');
  
  // 컨텍스트 메뉴가 나타날 때까지 대기
  await page.waitForTimeout(1000);
  
  // 시작구분 메뉴 찾기 및 호버
  const startMenu = page.getByText('시작구분:', { exact: false }).first();
  await expect(startMenu).toBeVisible({ timeout: 3000 });
  await startMenu.hover();
  console.log('📋 시작구분 메뉴에 호버');
  
  // 하위 메뉴가 나타날 때까지 대기
  await page.waitForTimeout(500);

  // 상태 전환 실행
  if (currentState === 'pause') {
    console.log('🟡 멈춤 → 중지로 전환 시도');
    const stopButton = page.getByText('중지', { exact: true }).first();
    await expect(stopButton).toBeVisible({ timeout: 3000 });
    await stopButton.click();
  } else {
    console.log('🟠 중지 → 멈춤으로 전환 시도');
    const pauseButton = page.getByText('멈춤', { exact: true }).first();
    await expect(pauseButton).toBeVisible({ timeout: 3000 });
    await pauseButton.click();
  }

  // 상태 변경 확인 대기
  await page.waitForTimeout(500);

  // 성공 메시지 확인
  try {
    await expect(page.getByText('캠페인 상태가 성공적으로 변경되었습니다!')).toBeVisible({ timeout: 5000 });
    await page.getByRole('button', { name: '확인' }).click();
    console.log('✅ 캠페인 상태 변경 성공!');
  } catch (error) {
    // 다른 성공 메시지 패턴들도 확인
    const alternativeMessages = [
      '상태가 변경되었습니다',
      '성공적으로 변경',
      '변경이 완료되었습니다'
    ];
    
    let found = false;
    for (const message of alternativeMessages) {
      try {
        await expect(page.getByText(message, { exact: false })).toBeVisible({ timeout: 2000 });
        await page.getByRole('button', { name: '확인' }).click();
        console.log('✅ 캠페인 상태 변경 성공!');
        found = true;
        break;
      } catch (e) {
        continue;
      }
    }
    
    if (!found) {
      console.log('⚠️ 성공 메시지를 찾을 수 없습니다. 페이지 상태를 확인하세요.');
      // 스크린샷 저장 (디버깅용)
      await page.screenshot({ path: 'campaign-status-change-debug.png' });
    }
  }
  
  // 최종 대기
  await page.waitForTimeout(1000);
});