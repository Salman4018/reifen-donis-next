import Link from 'next/link';
import { TIRE_CATEGORIES } from '../../data/tires';

export const metadata = {
  title: 'Reifen & Räder',
  description: 'Reifen, Räder und Reifenservice von Reifen Donis in Solingen.',
};

export default function ReifenPage() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="tread" aria-hidden="true"></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <p className="eyebrow">Reifen &amp; Räder</p>
          <h1>Das richtige Profil für <em>jede Fahrt</em></h1>
          <p className="lead">
            Reifen sind die einzige Verbindung zwischen Ihrem Fahrzeug und der Straße. Wir beraten Sie bei der
            Auswahl, Montage, Pflege und Einlagerung Ihrer Reifen und Räder.
          </p>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Reifenwissen</p>
            <h2>Für jede Saison und jedes Fahrzeug</h2>
            <p>
              Informieren Sie sich über unsere Reifenbereiche oder sprechen Sie uns direkt an. Wir führen diverse
              Markenreifen und beraten Sie passend zu Ihrem Fahrzeug und Einsatzzweck.
            </p>
          </div>
          <div className="service-grid">
            {TIRE_CATEGORIES.map(({ slug, title, intro }) => {
              return (
                <Link className="service-card" href={`/reifen/${slug}/`} key={title}>
                  <span className="code">REIFEN</span>
                  <h3>{title}</h3>
                  <p style={{ margin: '.6em 0 0', fontSize: '.9rem', color: 'var(--steel)' }}>{intro}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
