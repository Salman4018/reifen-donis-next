import { TreadDivider, CtaBand, Partners } from '../../components/Bits';
import Reveal from '../../components/Reveal';

export const metadata = {
  title: 'Über uns',
  description: 'Hier erfahren Sie mehr über unseren Betrieb.',
};

const TIMELINE = [
  {
    year: '1988',
    title: 'Gründung an der Heresbachstraße',
    text: 'Hans Peter Donis startet mit einer Aushilfe seinen Reifenservice in Solingen-Wald — inklusive Alufelgen und Autozubehör.',
  },
  {
    year: '1992',
    title: 'Umzug an die Beethovenstraße',
    text: 'Größeres Gebäude, eine zweite Bühne für die 4-Kopf-Computer-Achsvermessung. Fahrwerksservice, Autoservice und Autotuning erweitern das Angebot.',
  },
  {
    year: '1996',
    title: 'Neue Lagerhalle',
    text: 'Reifen & Autoservice Donis erweitert das Sortiment und die Kapazität für die Einlagerung von Kundenrädern.',
  },
  {
    year: '2007',
    title: 'Umzug an die Merscheider Straße',
    text: 'Der gesamte Betrieb zieht auf eine Ebene: großzügiger Verkaufsraum, zwei zusätzliche Montagebühnen, modernste Montagegeräte und deutlich mehr Lagerkapazität.',
  },
  {
    year: '2008',
    title: 'Sechs feste Mitarbeiter',
    text: 'Das Team besteht aus sechs festangestellten Mitarbeitern sowie einer Aushilfe — Reifen- und KFZ-Technik wachsen weiter zusammen.',
  },
  {
    year: '2021',
    title: 'Heutiges Team',
    text: 'Drei KFZ-Mechaniker, ein Vulkaniseur, ein Reifenmonteur und zwei Personen in Beratung und Verkauf betreuen unsere Kunden.',
  },
];

const TEAM = [
  { role: 'Gründer', name: 'Hans Peter Donis' },
  { role: 'Beratung & Werkstatt', name: 'Karsten Genzel' },
  { role: 'Beratung & Werkstatt', name: 'Thomas Jochum' },
];

export default function UeberUnsPage() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="tread" aria-hidden="true"></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <p className="eyebrow">Über uns</p>
          <h1 style={{ maxWidth: '18ch' }}>
            Ein Familienbetrieb, gewachsen seit <em>1988</em>
          </h1>
          <p className="lead">
            Aus einer kleinen Werkstatt an der Heresbachstraße wurde die Reifen &amp; KFZ-Werkstatt Donis von
            heute — auf einer Ebene, mit vier Montagebühnen und einem eingespielten Team.
          </p>
        </div>
      </section>

      <TreadDivider />

      <section>
        <div className="wrap split">
          <div>
            <p className="eyebrow">Firmengeschichte</p>
            <h2>Vom Ein-Mann-Betrieb zur Fachwerkstatt</h2>
            <p>
              Im Jahre 1988 gründete Hans Peter Donis sein Unternehmen Reifen Donis. Zusammen mit einer Aushilfe
              bot er an der Heresbachstraße in Solingen-Wald seinen Reifenservice an. Schon damals gehörten auch
              Alufelgen und Autozubehör zu seinem Sortiment.
            </p>
            <p>
              Unser Fachpersonal wird laufend geschult und erwirbt Kompetenzen im Umgang mit neuen Technikarten —
              etwa beim Reifenwechsel von RDKS- und Runflatreifen oder bei E- und Hybridfahrzeugen. Modernste
              Maschinen und gut ausgebildete Mitarbeiter sind der Garant für unsere Dienstleistung.
            </p>
          </div>
          <Reveal as="div" className="timeline">
            {TIMELINE.map((item) => (
              <div className="item" key={item.year}>
                <span className="year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-dim">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Ihre Ansprechpartner</p>
            <h2>Rund ums Auto — egal ob Kauf, Montage oder Reparatur</h2>
            <p>
              Ob Reifenkauf, Reifenmontage, Einlagerung, Autoreparaturen, Inspektion, Klimaservice oder
              Saisoncheck: diese Herren sind Ihre Ansprechpartner bei Reifen Donis.
            </p>
          </Reveal>
          <Reveal as="div" stagger className="team-grid">
            {TEAM.map((member) => (
              <div className="team-card" key={member.name}>
                <span className="role">{member.role}</span>
                <h3>{member.name}</h3>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            Unser Motto
          </p>
          <h2 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', maxWidth: '26ch', margin: '0 auto' }}>
            Ihr Partner mit dem besseren Service
          </h2>
        </div>
      </section>

      <Partners />

      <CtaBand title="Lernen Sie uns persönlich kennen." ctaLabel="Kontakt aufnehmen" ctaHref="/kontakt/" />
    </>
  );
}
