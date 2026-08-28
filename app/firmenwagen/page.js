import { CtaBand, TreadDivider } from '../../components/Bits';
import Reveal from '../../components/Reveal';
import FleetGallery from '../../components/FleetGallery';
import { FLEET_IMAGES } from '../../data/fleet';

const FLEET_CUSTOMERS = [
  'Alphabet',
  'Arval',
  'Ayvens',
  'DKV',
  'Interleasing',
  'Impuls Leasing',
  'Raiffeisen Leasing Fuhrparkmanagement',
];

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
              Ob Handwerksbetrieb, Pflegedienst, Catering-Service oder Außendienst: Wir stimmen Reifenwechsel-Termine
              ab, beraten bei der Wahl und Montage neuer Reifen und helfen dabei, Ausfallzeiten sowie unnötige
              Verwaltungskosten zu reduzieren.
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
              <li>Einlagerung</li>
              <li>Professionelles Wuchten</li>
              <li>Professionelle Räderwäsche</li>
              <li>Und weitere Leistungen nach Bedarf</li>
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
      <section>
        <div className="wrap split">
          <div>
            <p className="eyebrow">4Fleet Group</p>
            <h2>Einfacher Ablauf, klare Kosten</h2>
            <p>
              Als autorisierter Reifenpartner der 4Fleet Group betreuen wir Firmenfahrzeuge im vereinbarten
              Leistungsumfang. Sie können die Leistungen rund um Räder und Reifen unkompliziert in Anspruch nehmen;
              die Abrechnung erfolgt zentral über die 4Fleet Group und Ihre Firmenzentrale.
            </p>
          </div>
          <div className="fleet-benefits">
            <h3>Ihre Vorteile als Flottenkunde</h3>
            <ul>
              <li>Keine kleinteiligen Einzelverträge</li>
              <li>Weniger Mikromanagement für Ihr Unternehmen</li>
              <li>Kostensenkung durch Zentralfaktura</li>
              <li>Transparente Reports für mehr Effizienz und Qualität</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-dim">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Unser Kunden-Netzwerk</p>
            <h2>Betreut über die 4Fleet Group</h2>
            <p className="lead">Wir betreuen Firmenfahrzeuge namhafter Flottenmanagement- und Leasingpartner.</p>
          </Reveal>
          <Reveal as="div" stagger className="fleet-customers" aria-label="Flottenmanagement- und Leasingpartner">
            {FLEET_CUSTOMERS.map((customer) => <span className="fleet-customer" key={customer}>{customer}</span>)}
          </Reveal>
          <p className="fleet-note">Die genannten Unternehmen sind Netzwerkpartner der 4Fleet Group. Markenlogos werden nur mit entsprechender Freigabe verwendet.</p>
        </div>
      </section>
      <CtaBand title="Sie suchen einen Partner für Ihren Fuhrpark?" ctaLabel="Kontakt aufnehmen" ctaHref="/kontakt/" />
    </>
  );
}
