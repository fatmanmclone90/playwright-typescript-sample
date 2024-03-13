import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('');
});

test.describe('Todo', { tag: '@visual' }, () => {
  test('empty to do', async ({ page }) => {
    await expect(page).toHaveScreenshot();
  });

  test('to do items are displayed', async ({ page }) => {
    const locator = page.getByPlaceholder('What needs to be done?');
    await locator.fill('text');
    await locator.press('Enter');

    await expect(page).toHaveScreenshot();
  });
});
