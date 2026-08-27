import Link from 'next/link';
import { notFound } from 'next/navigation';
import GalleryViewer from '../../../components/GalleryViewer';
import { GALLERY_COLLECTIONS, getGalleryCollection } from '../../../data/gallery';

export function generateStaticParams() {
  return GALLERY_COLLECTIONS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const collection = getGalleryCollection(slug);
  return { title: collection?.title || 'Bildergalerie' };
}

export default async function GalleryDetailPage({ params }) {
  const { slug } = await params;
  const collection = getGalleryCollection(slug);
  if (!collection) notFound();

  return (
    <section>
      <div className="wrap gallery-detail">
        <Link className="back-link" href="/bilder/">← Zurück zur Galerie</Link>
        <p className="eyebrow">Galerie · {collection.imageCount} Bilder</p>
        <h1>{collection.title}</h1>
        <GalleryViewer title={collection.title} images={collection.images} />
      </div>
    </section>
  );
}
