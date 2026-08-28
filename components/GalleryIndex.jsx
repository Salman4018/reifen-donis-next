'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { localAsset } from '../lib/assets';

const PAGE_SIZE = 20;
const PAGE_COUNT = 4;

export default function GalleryIndex({ collections }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryPage = Number(searchParams.get('page') || 0);
  const page = Number.isInteger(queryPage) && queryPage >= 0 && queryPage < PAGE_COUNT ? queryPage : 0;
  const visibleCollections = collections.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <section>
      <div className="wrap">
        <p className="eyebrow">Galerie</p>
        <h1>Unsere Bilder</h1>
        <p className="lead">Fahrzeuge, Räder und Werkstattimpressionen aus dem Reifen-Donis-Archiv.</p>
        <div className="gallery-grid">
          {visibleCollections.map((collection) => (
            <Link className="gallery-card" href={`/bilder/${collection.slug}/`} key={collection.slug}>
              <div className="gallery-card-media">
                <Image
                  src={localAsset(collection.cover)}
                  alt={collection.title}
                  fill
                  sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
              <span className="code">{collection.imageCount} BILDER</span>
              <h2>{collection.title}</h2>
            </Link>
          ))}
        </div>
        <nav className="gallery-pagination" aria-label="Galerieseiten">
          {Array.from({ length: PAGE_COUNT }, (_, index) => (
            <Link href={`${pathname}${index ? `?page=${index}` : ''}`} aria-current={index === page ? 'page' : undefined} key={index}>
              {index + 1}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
