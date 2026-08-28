import Link from 'next/link';
import { CtaBand, TreadDivider } from '../../components/Bits';

export const metadata = {
  title: 'Stellenangebote',
  description: 'Karriere und Stellenangebote bei Reifen Donis in Solingen.',
};

export default function StellenangebotePage() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="tread" aria-hidden="true"></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <p className="eyebrow">Karriere bei Reifen Donis</p>
          <h1>Gemeinsam anpacken, <em>gemeinsam weiterkommen</em></h1>
          <p className="lead">
            Sie möchten Teil unseres Teams in Solingen werden? Hier finden Sie unsere aktuellen
            Stellenangebote.
          </p>
        </div>
      </section>

      <TreadDivider />

      <section>
        <div className="wrap split">
          <div>
            <p className="eyebrow">Aktuelle Stellenangebote</p>
            <h2>Derzeit keine offenen Stellen</h2>
            <p>
              Aktuell haben wir keine offenen Stellen ausgeschrieben. Schauen Sie zu einem späteren
              Zeitpunkt wieder vorbei oder nehmen Sie direkt Kontakt mit uns auf.
            </p>
            <p>
              Auch wenn gerade keine passende Stelle veröffentlicht ist, freuen wir uns über Ihre
              Nachricht und prüfen Ihre Anfrage gern.
            </p>
          </div>

          <div className="info-card">
            <h3>
              <span className="dot" aria-hidden="true"></span>Kontakt für Bewerbungen
            </h3>
            <p>
              <a href="mailto:info@reifen-donis.de">info@reifen-donis.de</a>
              <br />
              <a href="tel:0212880239-0">0212 / 880239-0</a>
            </p>
            <p style={{ marginTop: 16 }}>
              <Link className="btn btn-outline" href="/kontakt/">
                Kontaktseite öffnen
              </Link>
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Sie möchten uns kennenlernen?" ctaLabel="Kontakt aufnehmen" ctaHref="/kontakt/" />
    </>
  );
}
