import { test, expect } from '@playwright/test';

test.describe('Legal pages', () => {
  test('footer legal links open real pages', async ({ page }) => {
    await page.goto('/');

    await page.locator('footer').getByRole('link', { name: 'Impressum' }).click();
    await expect(page).toHaveURL(/\/impressum\/?$/);
    await expect(page.getByRole('heading', { name: 'Impressum' })).toBeVisible();
    await expect(page.getByText('DE 120 931 759')).toBeVisible();

    await page.goto('/datenschutz/');
    await expect(page).toHaveURL(/\/datenschutz\/?$/);
    await expect(page.getByRole('heading', { name: 'Datenschutz' })).toBeVisible();

    await page.goto('/barrierefreiheit/');
    await expect(page).toHaveURL(/\/barrierefreiheit\/?$/);
    await expect(page.locator('h1')).toContainText('Erklärung zur Barrierefreiheit');
  });
});
