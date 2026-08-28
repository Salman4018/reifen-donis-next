import { TIRE_CATEGORIES, getTireCategory } from '../tires';

describe('tire content', () => {
  it('contains source images and structured content for all tire categories', () => {
    expect(TIRE_CATEGORIES).toHaveLength(6);
    for (const category of TIRE_CATEGORIES) {
      expect(category.image).toMatch(/^\/images\/tires\//);
      expect(category.imageAlt).toBeTruthy();
      expect(category.sections.length).toBeGreaterThan(0);
    }
  });

  it('includes the additional EU-Reifenlabel image', () => {
    expect(getTireCategory('eu-reifenlabel').inlineImage).toBe('/images/tires/eu-reifenlabel-detail.jpg');
  });
});
