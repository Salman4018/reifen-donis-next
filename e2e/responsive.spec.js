import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 390, height: 844 } });

test.describe('Mobile responsiveness', () => {
  test('no horizontal overflow on the home page', async ({ page }) => {
    await page.goto('/');
    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });

  test('no horizontal overflow on the kontakt page', async ({ page }) => {
    await page.goto('/kontakt/');
    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });

  test('hamburger menu opens and closes the navigation', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('.nav-toggle');
    const nav = page.getByRole('navigation', { name: 'Hauptnavigation' });

    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(toggle).toHaveAccessibleName('Menü schließen');
    await expect(nav.getByRole('link', { name: 'Galerie' })).toBeVisible();

    await page.getByRole('button', { name: /menü schließen/i }).click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  test('address and opening hours cards stack on narrow screens', async ({ page }) => {
    await page.goto('/kontakt/');
    const addressCard = page.locator('.info-card', { hasText: 'Adresse' });
    const hoursCard = page.locator('.info-card', { hasText: '\u00d6ffnungszeiten' });

    const addressBox = await addressCard.boundingBox();
    const hoursBox = await hoursCard.boundingBox();

    expect(addressBox).not.toBeNull();
    expect(hoursBox).not.toBeNull();
    // stacked vertically means the hours card starts below the address card, not beside it
    expect(hoursBox.y).toBeGreaterThanOrEqual(addressBox.y + addressBox.height - 1);
  });
});
