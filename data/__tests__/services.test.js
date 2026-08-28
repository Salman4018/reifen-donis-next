import { SERVICE_DETAILS, getService } from '../services';

describe('service details', () => {
  it('contains every source-listed service detail route', () => {
    expect(SERVICE_DETAILS).toHaveLength(17);
    expect(SERVICE_DETAILS.map(({ slug }) => slug)).toEqual(expect.arrayContaining([
      'achsvermessung-3',
      'auspuffservice-2',
      'bremsenservice',
      'einlagerung-1',
      'hauptuntersuchung-huau-donis',
      'inspektion-bei-reifen-donis',
      'karosseriearbeiten',
      'klimaservice-1',
      'oelwechsel-1',
      'professionelle-raederwaesche-2',
      'radnabenreinigung',
      'reifen-und-radwechsel-bei-reifen-donis',
      'saisoncheck-0',
      'scheibenreparatur',
      'stossdaempfer-0',
      'uvv-pruefung',
      'wuchten-bei-reifen-donis',
    ]));
  });

  it('looks up known services and rejects unknown slugs', () => {
    expect(getService('bremsenservice').title).toBe('Bremsenservice');
    expect(getService('stoßdämpfer-0')).toBeUndefined();
    expect(getService('not-a-service')).toBeUndefined();
  });

  it('has a local source image and article content for every service', () => {
    for (const service of SERVICE_DETAILS) {
      expect(service.image).toMatch(/^\/images\/services\//);
      expect(service.imageAlt).toBeTruthy();
      expect(service.sections.length).toBeGreaterThan(0);
    }
  });
});
