import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { TIRE_CATEGORIES, getTireCategory } from '../../../data/tires';
import { localAsset } from '../../../lib/assets';

export function generateStaticParams() {
  return TIRE_CATEGORIES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getTireCategory(slug);
  return { title: category?.title || 'Reifen' };
}

export default async function TireCategoryPage({ params }) {
  const { slug } = await params;
  const category = getTireCategory(slug);
  if (!category) notFound();

  return (
    <>
      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="tread" aria-hidden="true"></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Link className="back-link" href="/reifen/">← Alle Reifen</Link>
          <p className="eyebrow">Reifen</p>
          <h1>{category.title}</h1>
          <p className="lead">{category.intro}</p>
          <Image className="service-hero-image" src={localAsset(category.image)} alt={category.imageAlt} width={1200} height={280} sizes="(max-width: 900px) 100vw, 1200px" />
        </div>
      </section>
      <section>
        <div className="wrap legal-content tire-article">
          {category.sections.map((section, index) => (
            <article key={`${section.type}-${section.text}-${index}`}>
              {section.type === 'heading' && (section.level === 4 ? <h4>{section.text}</h4> : section.level === 3 ? <h3>{section.text}</h3> : <h2>{section.text}</h2>)}
              {section.type === 'paragraph' && section.text.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.type === 'list' && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
            </article>
          ))}
          {category.inlineImage && <Image className="tire-inline-image" src={localAsset(category.inlineImage)} alt={category.inlineImageAlt} width={245} height={359} />}
          <Link className="btn btn-primary" href="/kontakt/">Persönlich beraten lassen</Link>
        </div>
      </section>
    </>
  );
}
