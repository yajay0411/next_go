import { test, expect } from '@playwright/test';

test.describe('HomePage', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto('/');
  });

  test('should display the home page with navigation buttons', async ({ page }) => {
    // Check if the page title or heading exists
    await expect(page).toHaveTitle(/Next Go/);

    // Check if all three navigation buttons are visible
    await expect(page.locator('button:has-text("Professionals")')).toBeVisible();
    await expect(page.locator('button:has-text("Obesity")')).toBeVisible();
    await expect(page.locator('button:has-text("Metabolic Test")')).toBeVisible();
  });

  test('should navigate to professionals page when clicking Professionals button', async ({ page }) => {
    // Click the Professionals button
    await page.click('button:has-text("Professionals")');

    // Should navigate to /professionals
    await expect(page).toHaveURL('/professionals');

    // Check if we're on the professionals page
    await expect(page.locator('body')).toContainText('professionals');
  });

  test('should navigate to obesity page when clicking Obesity button', async ({ page }) => {
    // Click the Obesity button
    await page.click('button:has-text("Obesity")');

    // Should navigate to /obesity
    await expect(page).toHaveURL('/obesity');

    // Check if we're on the obesity page
    await expect(page.locator('body')).toContainText('obesity');
  });

  test('should navigate to metabolic test page when clicking Metabolic Test button', async ({ page }) => {
    // Click the Metabolic Test button
    await page.click('button:has-text("Metabolic Test")');

    // Should navigate to /metabolic-test
    await expect(page).toHaveURL('/metabolic-test');

    // Check if we're on the metabolic test page
    await expect(page.locator('body')).toContainText('metabolic');
  });

  test('should have properly styled buttons', async ({ page }) => {
    // Check button styling
    const professionalsButton = page.locator('button:has-text("Professionals")');
    await expect(professionalsButton).toHaveCSS('background-color', 'rgb(0, 112, 243)');
    await expect(professionalsButton).toHaveCSS('color', 'rgb(255, 255, 255)');
    await expect(professionalsButton).toHaveCSS('border', '0px none rgb(0, 112, 243)');

    const obesityButton = page.locator('button:has-text("Obesity")');
    await expect(obesityButton).toHaveCSS('background-color', 'rgb(40, 167, 69)');

    const metabolicTestButton = page.locator('button:has-text("Metabolic Test")');
    await expect(metabolicTestButton).toHaveCSS('background-color', 'rgb(220, 53, 69)');
  });
});
