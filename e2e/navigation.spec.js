import { test, expect } from '@playwright/test';

test.describe('Site navigation', () => {
  test('home page loads with hero content', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Reifen Donis/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('besseren Service');
  });

  test('main navigation exposes and opens the original public routes', async ({ page }) => {
    await page.goto('/');

    const nav = page.getByRole('navigation', { name: 'Hauptnavigation' });
    const toggle = page.locator('.nav-toggle');
    async function openMobileMenuIfNeeded() {
      const isMobile = await page.evaluate(() => window.innerWidth <= 900);
      if (isMobile && (await toggle.getAttribute('aria-expanded')) === 'false') {
        await toggle.click();
      }
    }

    await openMobileMenuIfNeeded();
    await nav.getByRole('link', { name: 'Leistungen' }).click();
    await expect(page).toHaveURL(/\/unsere-services-rund-um-auto-reifen\/?$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('unter einem Dach');

    await openMobileMenuIfNeeded();
    await nav.getByRole('link', { name: 'Über uns' }).click();
    await expect(page).toHaveURL(/\/%C3%BCber-uns\/?$/);

    await openMobileMenuIfNeeded();
    await nav.getByRole('link', { name: 'Galerie' }).click();
    await expect(page).toHaveURL(/\/bilder\/?$/);

    await page.goto('/');
    await openMobileMenuIfNeeded();
    await nav.getByRole('link', { name: 'Reifen' }).click();
    await expect(page).toHaveURL(/\/reifen\/?$/);

    await page.goto('/');
    await openMobileMenuIfNeeded();
    await nav.getByRole('link', { name: 'Firmenwagen' }).click();
    await expect(page).toHaveURL(/\/firmenwagen\/?$/);
  });

  test('logo link returns to the home page', async ({ page }) => {
    await page.goto('/kontakt/');
    await page.getByRole('link', { name: /REIFEN DONIS/ }).click();
    await expect(page).toHaveURL(/\/$/);
  });

  test('footer links move between pages', async ({ page }) => {
    await page.goto('/');
    await page.locator('footer').getByRole('link', { name: 'Leistungen' }).click();
    await expect(page).toHaveURL(/\/unsere-services-rund-um-auto-reifen\/?$/);
  });

  test('legacy redesigned routes remain available', async ({ page }) => {
    await page.goto('/leistungen/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('unter einem Dach');

    await page.goto('/ueber-uns/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Familienbetrieb');
  });
});
