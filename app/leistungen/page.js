import { TreadDivider, CtaBand } from '../../components/Bits';
import Link from 'next/link';
import { SERVICE_DETAILS } from '../../data/services';
import ServiceIcon from '../../components/ServiceIcon';

const OVERVIEW_ONLY_SERVICES = [
  ['ZUBEHÖR', 'Alufelgen'],
  ['ELEKTRIK', 'Batterie'],
  ['ENTSORGUNG', 'Reifenentsorgung'],
];

export const metadata = {
  title: 'Leistungen',
  description:
    'Alle Leistungen von Reifen Donis: Reifenwechsel, Achsvermessung, Inspektion, HU/AU, Bremsenservice, Klimaservice und mehr.',
};

const TIRE_TYPES = [
  ['REIFEN', 'Sommerreifen', 'SUMMER'],
  ['REIFEN', 'Winterreifen', 'WINTER'],
  ['REIFEN', 'Ganzjahresreifen', 'ALL_SEASON'],
  ['REIFEN', 'Offroad-Reifen', 'OFFROAD'],
  ['SICHERHEIT', 'RDKS', 'TPMS'],
  ['INFO', 'EU-Reifenlabel', 'LABEL'],
];

export default function LeistungenPage() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="tread" aria-hidden="true"></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <p className="eyebrow">Leistungen</p>
          <h1 style={{ maxWidth: '20ch' }}>
            Alles, was Ihr Auto braucht — <em>unter einem Dach</em>
          </h1>
          <p className="lead">
            20 Leistungen rund um Reifen, Fahrwerk, Wartung und Sicherheit. Verfügbar bei der Donis
            Kfz-Werkstatt &amp; Reifendienst, Merscheider Straße 326.
          </p>
        </div>
      </section>

      <TreadDivider />

      <section id="reifen">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Reifen</p>
            <h2>Sommer, Winter, Ganzjahr — für jede Saison</h2>
            <p>
              Der Wechsel des Rads bzw. Reifens erfolgt saisonal, um die Bereifung an die Witterung anzupassen.
              Bei winterlichen Bedingungen ist eine entsprechende Bereifung sogar gesetzlich vorgeschrieben.
            </p>
          </div>
          <div className="service-grid">
            {TIRE_TYPES.map(([code, title, icon]) => (
              <div className="service-card" key={title}>
                <span className="code">{code}</span>
                <div className="service-card-title">
                  <h4>{title}</h4>
                  <ServiceIcon category={title} icon={icon} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dim">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Werkstatt &amp; Service</p>
            <h2>Unsere Leistungen im Überblick</h2>
          </div>
          <div className="service-grid">
            {SERVICE_DETAILS.map(({ slug, category, title, intro }) => (
              <Link className="service-card" href={`/service/${slug}/`} key={slug}>
                <span className="code">{category}</span>
                <div className="service-card-title">
                  <h4>{title}</h4>
                  <ServiceIcon category={category} />
                </div>
                <p style={{ margin: '.6em 0 0', fontSize: '.9rem', color: 'var(--steel)' }}>{intro}</p>
              </Link>
            ))}
            {OVERVIEW_ONLY_SERVICES.map(([category, title]) => (
              <div className="service-card" key={title}>
                <span className="code">{category}</span>
                <div className="service-card-title">
                  <h4>{title}</h4>
                  <ServiceIcon category={category} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Fragen zu einer Leistung? Rufen Sie an." ctaLabel="0212 / 880239-0" ctaHref="tel:0212880239-0" />
    </>
  );
}
