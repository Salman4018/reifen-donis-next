import Link from 'next/link';
import { GALLERY_COLLECTIONS } from '../../data/gallery';
import { localAsset } from '../../lib/assets';

export const metadata = {
  title: 'Bilder',
  description: 'Bildergalerie mit Fahrzeugen und Impressionen von Reifen Donis in Solingen.',
};

const PAGE_SIZE = 20;
const SOURCE_PAGE_COUNT = 4;

export default function BilderPage() {
  const page = 0;
  const collections = GALLERY_COLLECTIONS.slice(0, PAGE_SIZE);
  const pageCount = SOURCE_PAGE_COUNT;

  return (
    <section>
      <div className="wrap">
        <p className="eyebrow">Galerie</p>
        <h1>Unsere Bilder</h1>
        <p className="lead">Fahrzeuge, Räder und Werkstattimpressionen aus dem Reifen-Donis-Archiv.</p>
        <div className="gallery-grid">
          {collections.map((collection) => (
            <Link className="gallery-card" href={`/bilder/${collection.slug}/`} key={collection.slug}>
              <img src={localAsset(collection.cover)} alt={collection.title} loading="lazy" />
              <span className="code">{collection.imageCount} BILDER</span>
              <h2>{collection.title}</h2>
            </Link>
          ))}
        </div>
        <nav className="gallery-pagination" aria-label="Galerieseiten">
          {Array.from({ length: pageCount }, (_, index) => (
            <Link href={`/bilder/${index ? `?page=${index}` : ''}`} aria-current={index === page ? 'page' : undefined} key={index}>
              {index + 1}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
