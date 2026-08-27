import Link from 'next/link';

export const metadata = {
  title: 'Reifen & Räder',
  description: 'Reifen, Räder und Reifenservice von Reifen Donis in Solingen.',
};

const CATEGORIES = [
  ['Sommerreifen', 'Für optimale Performance und Sicherheit in der warmen Jahreszeit.'],
  ['Winterreifen', 'Sicher unterwegs bei winterlichen Bedingungen.'],
  ['Ganzjahresreifen', 'Ein Reifensatz für unterschiedliche Witterungsverhältnisse.'],
  ['RDKS', 'Service für Reifendruckkontrollsysteme.'],
  ['EU-Reifenlabel', 'Informationen zu den Kennwerten neuer Reifen.'],
  ['Offroad', 'Reifen für SUVs und anspruchsvolles Gelände.'],
];

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
            {CATEGORIES.map(([title, text]) => {
              const slug = title.toLowerCase().replace('ä', 'ae').replace('ö', 'oe').replace('ü', 'ue').replace(' ', '-');
              return (
                <Link className="service-card" href={`/reifen/${slug}/`} key={title}>
                  <span className="code">REIFEN</span>
                  <h3>{title}</h3>
                  <p style={{ margin: '.6em 0 0', fontSize: '.9rem', color: 'var(--steel)' }}>{text}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
