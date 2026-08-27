import { CtaBand, TreadDivider } from '../../components/Bits';
import FleetGallery from '../../components/FleetGallery';
import { FLEET_IMAGES } from '../../data/fleet';

export const metadata = {
  title: 'Firmenwagen',
  description: 'Reifenservice und Fuhrparkbetreuung für Firmenkunden in Solingen.',
};

export default function FirmenwagenPage() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="tread" aria-hidden="true"></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <p className="eyebrow">Firmenwagen</p>
          <h1>Ihr Fuhrpark in <em>besten Händen</em></h1>
          <p className="lead">Reifenmanagement und zuverlässiger Service für Pkw-, Transporter- und Nutzfahrzeugflotten.</p>
        </div>
      </section>
      <TreadDivider />
      <section>
        <div className="wrap split">
          <div>
            <p className="eyebrow">Flottenkunden</p>
            <h2>Der richtige Partner für Ihren Fuhrpark</h2>
            <p>
              Donis Kfz-Werkstatt &amp; Reifendienst unterstützt Geschäftskunden bei der Wartung ihrer Fahrzeugflotten
              und ist zertifizierter Servicebetrieb der 4Fleet Group. Bei uns sind Pkw, Transporter und Nutzfahrzeuge
              in erfahrenen Händen.
            </p>
            <p>
              Wir stimmen Reifenwechsel-Termine ab, beraten bei der Wahl und Montage neuer Reifen und helfen dabei,
              Ausfallzeiten sowie unnötige Verwaltungskosten zu reduzieren.
            </p>
          </div>
          <FleetGallery images={FLEET_IMAGES} />
        </div>
      </section>
      <section className="bg-dim">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Dienstleistungen</p>
            <h2>Alles aus einer Hand</h2>
            <ul>
              <li>Professionelles Reifenmanagement</li>
              <li>Reifen- und Radwechsel</li>
              <li>Reifenmontage und Reifenreparatur</li>
              <li>Einlagerung und professionelles Wuchten</li>
              <li>Professionelle Räderwäsche</li>
            </ul>
          </div>
          <div>
            <p>
              Bereits bei kleinen Fahrzeugflotten werden Kosten und Wartungsaufwand schnell unübersichtlich. Mit einem
              festen Reifenpartner behalten Sie Termine, Verschleiß und Abrechnung im Blick und können sich auf Ihr
              Kerngeschäft konzentrieren.
            </p>
            <p>
              Als Partner der 4Fleet Group bieten wir klassische Leistungen des Reifenfachhandels und unterstützen
              Geschäftskunden mit passenden Lösungen für ihre individuelle Flotte.
            </p>
          </div>
        </div>
      </section>
      <CtaBand title="Sie suchen einen Partner für Ihren Fuhrpark?" ctaLabel="Kontakt aufnehmen" ctaHref="/kontakt/" />
    </>
  );
}
