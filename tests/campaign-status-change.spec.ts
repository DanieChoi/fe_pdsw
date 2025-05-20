import { test, expect } from '@playwright/test';

test('캠페인 상태가 멈춤이면 중지로, 중지면 멈춤으로 1회만 전환', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.getByPlaceholder('아이디를 입력하세요').fill('NEX21004');
  await page.getByPlaceholder('비밀번호를 입력하세요').fill('Nexus62402580@');
  await page.getByRole('button', { name: '로그인' }).click();
  await page.waitForURL('**/main');
  await expect(page.getByText('캠페인 관리')).toBeVisible();
  await page.waitForTimeout(1500);

  const campaignNode = page.locator('div.tree-item:has-text("[12]12")').first();
  await expect(campaignNode).toBeVisible();

  // 현재 상태 아이콘의 src 파악
  const statusImg = campaignNode.locator('img[alt="status"]');
  const statusSrc = await statusImg.getAttribute('src');

  // 컨텍스트 메뉴 열기
  await campaignNode.click({ button: 'right' });
  await page.getByText('시작구분:').hover();

  // 상태에 따라 한 번만 전환
  if (statusSrc?.includes('tree_pause')) {
    console.log('🟡 현재 상태: 멈춤 → 중지로 전환');
    await page.getByText('중지').click();
  } else if (statusSrc?.includes('tree_stop')) {
    console.log('🟠 현재 상태: 중지 → 멈춤으로 전환');
    await page.getByText('멈춤').click();
  } else {
    console.log('⚠️ 현재 상태가 멈춤이나 중지가 아님. 테스트 중단');
    return;
  }

  await expect(page.getByText('캠페인 상태가 성공적으로 변경되었습니다!')).toBeVisible();
  await page.getByRole('button', { name: '확인' }).click();
});
