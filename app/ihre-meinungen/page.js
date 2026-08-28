import Link from 'next/link';
import { CtaBand, Partners } from '../../components/Bits';
import { REVIEWS } from '../../data/reviews';
import Reveal from '../../components/Reveal';

export const metadata = {
  title: 'Ihre Meinungen',
  description: 'Aktuelle Kundenbewertungen für Reifen Donis in Solingen.',
};

export default function ReviewsPage() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="tread" aria-hidden="true"></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <p className="eyebrow">Kundenbewertungen</p>
          <h1>Ihre <em>Meinungen</em></h1>
          <p className="lead">Was unsere Kundinnen und Kunden über Reifen Donis und unseren Service sagen.</p>
        </div>
      </section>
      <section>
        <Reveal as="div" className="wrap reviews-summary">
          <div className="review-score" aria-label={`${REVIEWS.rating} von ${REVIEWS.scale} Sternen aus ${REVIEWS.count} Berichten`}>
            <span className="review-score-value">{REVIEWS.rating}</span>
            <span className="review-score-scale">/ {REVIEWS.scale}</span>
            <div className="review-stars" aria-hidden="true">★★★★★</div>
            <p>Google-Bewertung</p>
          </div>
          <div className="review-copy">
            <p className="eyebrow">Aktueller Stand</p>
            <h2>{REVIEWS.count} Berichte</h2>
            <p>
              Ihre Rückmeldungen helfen uns, unseren Reifen- und Autoservice in Solingen laufend zu verbessern. Die
              Bewertung und Anzahl der Berichte werden von der öffentlichen Quelle übernommen und können sich ändern.
            </p>
            <div className="review-actions">
              <a className="btn btn-amber" href={REVIEWS.writeReviewUrl} target="_blank" rel="noreferrer">
                Rezension schreiben
              </a>
              <a className="btn btn-outline" href={REVIEWS.sourceUrl} target="_blank" rel="noreferrer">
              Bewertungen bei Google ansehen
              </a>
            </div>
            <p className="review-source">Quelle: Google, geprüft am {REVIEWS.checkedAt}</p>
          </div>
        </Reveal>
      </section>
      <section className="bg-dim">
        <Reveal as="div" stagger className="wrap card-row card-row-2">
          <div className="info-card">
            <h3><span className="dot" aria-hidden="true"></span>Persönlicher Service</h3>
            <p>Wir nehmen uns Zeit für eine verständliche Beratung und eine passende Lösung für Ihr Fahrzeug.</p>
          </div>
          <div className="info-card">
            <h3><span className="dot" aria-hidden="true"></span>Rund ums Auto</h3>
            <p>Von Reifen und Rädern bis Werkstattservice: Unser Team begleitet Sie zuverlässig durch alle Jahreszeiten.</p>
          </div>
        </Reveal>
      </section>
      <Partners />
      <CtaBand title="Sie möchten unseren Service kennenlernen?" ctaLabel="Kontakt aufnehmen" ctaHref="/kontakt/" />
    </>
  );
}
