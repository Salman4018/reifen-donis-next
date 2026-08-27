import { Suspense } from 'react';
import GalleryIndex from '../../components/GalleryIndex';
import { GALLERY_COLLECTIONS } from '../../data/gallery';
import { GALLERY_ADDITIONAL_COLLECTIONS } from '../../data/gallery-additional';

export const metadata = {
  title: 'Bilder',
  description: 'Bildergalerie mit Fahrzeugen und Impressionen von Reifen Donis in Solingen.',
};

export default function BilderPage() {
  return (
    <Suspense fallback={<GalleryIndexFallback />}>
      <GalleryIndex collections={[...GALLERY_COLLECTIONS, ...GALLERY_ADDITIONAL_COLLECTIONS]} />
    </Suspense>
  );
}

function GalleryIndexFallback() {
  return (
    <section>
      <div className="wrap">
        <p className="eyebrow">Galerie</p>
        <h1>Unsere Bilder</h1>
      </div>
    </section>
  );
}
