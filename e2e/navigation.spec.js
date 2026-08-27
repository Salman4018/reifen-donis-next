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

    await page.goto('/');
    await openMobileMenuIfNeeded();
    await nav.getByRole('link', { name: 'Über uns' }).click();
    await expect(page).toHaveURL(/\/%C3%BCber-uns\/?$/);

    await page.goto('/');
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

  test('gallery index and detail pages are available', async ({ page }) => {
    await page.goto('/bilder/');
    await expect(page.getByRole('heading', { name: 'Unsere Bilder' })).toBeVisible();
    const firstGalleryLink = page.locator('a.gallery-card').first();
    await expect(firstGalleryLink).toHaveAttribute(
      'href',
      '/bilder/lamborghini-diabolo-se-30-1993-1995-spezial-edition-150-stueck/'
    );
    await page.goto('/bilder/lamborghini-diabolo-se-30-1993-1995-spezial-edition-150-stueck/');
    await expect(page).toHaveURL(/\/bilder\/lamborghini-diabolo-se-30-1993-1995-spezial-edition-150-stueck\/?$/);
    await expect(page.getByRole('heading', { name: /Lamborghini Diabolo SE 30/ })).toBeVisible();
    const vehicleGallery = page.getByRole('group', { name: /Lamborghini Diabolo SE 30.*Bildergalerie/ });
    await expect(vehicleGallery.getByRole('button', { name: /Bild \d+ anzeigen/ })).toHaveCount(8);
    await vehicleGallery.getByRole('button', { name: 'Nächstes Bild' }).click();
    await expect(vehicleGallery.getByRole('img', { name: /Bild 2 von 8/ })).toBeVisible();
    await page.getByRole('link', { name: /Zurück zur Galerie/ }).click();
    await expect(page).toHaveURL(/\/bilder\/?$/);
  });

  test('tire overview links to every tire category page', async ({ page }) => {
    await page.goto('/reifen/');
    await expect(page.getByRole('heading', { name: 'Das richtige Profil für jede Fahrt' })).toBeVisible();
    for (const category of ['Sommerreifen', 'Winterreifen', 'Ganzjahresreifen', 'RDKS', 'EU-Reifenlabel', 'Offroad']) {
      await expect(page.getByRole('link', { name: new RegExp(`^REIFEN ${category} `) })).toBeVisible();
    }
    await page.goto('/reifen/rdks/');
    await expect(page).toHaveURL(/\/reifen\/rdks\/?$/);
    await expect(page.getByRole('heading', { name: 'RDKS', exact: true })).toBeVisible();
    await expect(page.getByText(/Reifendruckkontrollsysteme informieren/)).toBeVisible();
  });

  test('fleet page exposes additional selectable images', async ({ page }) => {
    await page.goto('/firmenwagen/');
    await expect(page.getByRole('heading', { name: /Ihr Fuhrpark/ })).toBeVisible();
    const gallery = page.getByRole('group', { name: 'Bildergalerie Firmenwagen' });
    await expect(gallery).toBeVisible();
    await expect(gallery.getByRole('button')).toHaveCount(4);
    await gallery.getByRole('button', { name: 'Lieferwagen anzeigen' }).click();
    await expect(gallery.getByRole('img', { name: 'Lieferwagen eines Flottenkunden' })).toBeVisible();
  });

  test('gallery images use local asset paths', async ({ page }) => {
    await page.goto('/bilder/');
    await expect(page.locator('img').first()).toHaveAttribute('src', /\/images\/gallery\//);
  });
});
