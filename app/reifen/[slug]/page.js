import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TIRE_CATEGORIES, getTireCategory } from '../../../data/tires';

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
        </div>
      </section>
      <section>
        <div className="wrap legal-content tire-article">
          {category.sections.map(([heading, text]) => (
            <article key={heading}>
              <h2>{heading}</h2>
              <p>{text}</p>
            </article>
          ))}
          <Link className="btn btn-primary" href="/kontakt/">Persönlich beraten lassen</Link>
        </div>
      </section>
    </>
  );
}
