import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the welcome message', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Welcome to Next Learn');
  });

  test('should display the project scaffold message', async ({ page }) => {
    await expect(page.locator('p')).toContainText('development');
  });
});
