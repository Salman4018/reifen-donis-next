import { test, expect } from '@playwright/test';

test.describe('Kontakt page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/kontakt/');
  });

  test('shows the contact form with required fields', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Kontaktformular' })).toBeVisible();
    await expect(page.getByLabel(/ihre e-mail-adresse/i)).toBeVisible();
    await expect(page.getByLabel(/ihre nachricht/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /absenden/i })).toBeVisible();
  });

  test('requires email, message and privacy consent before submitting', async ({ page }) => {
    const email = page.getByLabel(/ihre e-mail-adresse/i);
    const message = page.getByLabel(/ihre nachricht/i);
    const consent = page.getByLabel(/ich akzeptiere/i);

    await expect(email).toHaveAttribute('required', '');
    await expect(message).toHaveAttribute('required', '');
    await expect(consent).toHaveAttribute('required', '');
  });

  test('submitting the form triggers the placeholder confirmation', async ({ page }) => {
    await page.getByLabel(/ihre e-mail-adresse/i).fill('kunde@example.com');
    await page.getByLabel(/ihre nachricht/i).fill('Ich h\u00e4tte gern einen Termin.');
    await page.getByLabel(/ich akzeptiere/i).check();

    let dialogMessage = '';
    page.once('dialog', async (dialog) => {
      dialogMessage = dialog.message();
      await dialog.accept();
    });
    await page.getByRole('button', { name: /absenden/i }).click();

    await expect.poll(() => dialogMessage).toContain('Formular-Demo');
  });

  test('address and opening hours are shown side by side', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Adresse' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Merscheider Straße 326' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Öffnungszeiten' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Mo – Fr' })).toBeVisible();
  });

  test('privacy link opens the privacy page', async ({ page }) => {
    await page.getByRole('link', { name: 'Datenschutzerklärung' }).click();
    await expect(page).toHaveURL(/\/datenschutz\/?$/);
    await expect(page.getByRole('heading', { name: 'Datenschutz' })).toBeVisible();
  });
});
