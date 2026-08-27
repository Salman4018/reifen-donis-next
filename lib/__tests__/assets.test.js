import { localAsset } from '../assets';

describe('localAsset', () => {
  const originalBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

  afterEach(() => {
    if (originalBasePath === undefined) delete process.env.NEXT_PUBLIC_BASE_PATH;
    else process.env.NEXT_PUBLIC_BASE_PATH = originalBasePath;
  });

  it('keeps local paths at the domain root by default', () => {
    delete process.env.NEXT_PUBLIC_BASE_PATH;
    expect(localAsset('/images/gallery/car.jpg')).toBe('/images/gallery/car.jpg');
  });

  it('prefixes local paths for a GitHub Pages project site', () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '/reifen-donis-next';
    expect(localAsset('/images/gallery/car.jpg')).toBe('/reifen-donis-next/images/gallery/car.jpg');
  });

  it('normalizes paths without a leading slash', () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '/reifen-donis-next';
    expect(localAsset('images/fleet/van.jpg')).toBe('/reifen-donis-next/images/fleet/van.jpg');
  });
});
