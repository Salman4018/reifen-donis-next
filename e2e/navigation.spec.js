import { test, expect } from '@playwright/test';

test.describe('Site navigation', () => {
  test('home page loads with hero content', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Reifen Donis/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('besseren Service');
  });

  test('main navigation links move between pages', async ({ page }) => {
    await page.goto('/');

    const nav = page.getByRole('navigation', { name: 'Hauptnavigation' });
    const toggle = page.getByRole('button', { name: /menü öffnen/i });
    async function openMobileMenuIfNeeded() {
      if (await toggle.isVisible()) {
        await toggle.click();
      }
    }

    await openMobileMenuIfNeeded();
    await nav.getByRole('link', { name: 'Leistungen' }).click();
    await expect(page).toHaveURL(/\/leistungen\/?$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('unter einem Dach');

    await openMobileMenuIfNeeded();
    await nav.getByRole('link', { name: 'Über uns' }).click();
    await expect(page).toHaveURL(/\/ueber-uns\/?$/);

    await openMobileMenuIfNeeded();
    await nav.getByRole('link', { name: 'Kontakt' }).click();
    await expect(page).toHaveURL(/\/kontakt\/?$/);
  });

  test('logo link returns to the home page', async ({ page }) => {
    await page.goto('/kontakt/');
    await page.getByRole('link', { name: /REIFEN DONIS/ }).click();
    await expect(page).toHaveURL(/\/$/);
  });

  test('footer links move between pages', async ({ page }) => {
    await page.goto('/');
    await page.locator('footer').getByRole('link', { name: 'Leistungen' }).click();
    await expect(page).toHaveURL(/\/leistungen\/?$/);
  });
});
