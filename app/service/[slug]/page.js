import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CtaBand } from '../../../components/Bits';
import { SERVICE_DETAILS, getService } from '../../../data/services';
import { localAsset } from '../../../lib/assets';

export function generateStaticParams() {
  return SERVICE_DETAILS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  return { title: service?.title || 'Leistung', description: service?.intro };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="tread" aria-hidden="true"></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Link className="back-link" href="/unsere-services-rund-um-auto-reifen/">← Alle Leistungen</Link>
          <p className="eyebrow">{service.category}</p>
          <h1>{service.title}</h1>
          <p className="lead">{service.intro}</p>
          <img
            className="service-hero-image"
            src={localAsset(service.image)}
            alt={service.imageAlt}
            width="1200"
            height="280"
          />
        </div>
      </section>
      <section>
        <div className="wrap legal-content tire-article">
          {service.sections.map(([heading, text]) => (
            <article key={heading}>
              {heading !== 'TEXT' && <h2>{heading}</h2>}
              <p>{text}</p>
            </article>
          ))}
          <Link className="btn btn-primary" href="/kontakt/">Persönlich beraten lassen</Link>
        </div>
      </section>
      <CtaBand title="Fragen zu dieser Leistung? Rufen Sie an." ctaLabel="0212 / 880239-0" ctaHref="tel:0212880239-0" />
    </>
  );
}
