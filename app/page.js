import Link from 'next/link';
import { TreadDivider, CtaBand, Partners } from '../components/Bits';
import { REVIEWS } from '../data/reviews';

const QUICK_LINKS = [
  { tag: 'Werkstatt', title: 'Leistungen', href: '/leistungen/' },
  { tag: 'Sommer · Winter · Ganzjahr', title: 'Reifen', href: '/leistungen/#reifen' },
  {
    tag: 'In 2 Minuten gebucht',
    title: 'Terminplaner',
    href: 'https://reifendonis.myneonis.de/mitarbeiter/public/booking/booking.html',
  },
  { tag: 'Familienbetrieb seit 1988', title: 'Über uns', href: '/ueber-uns/' },
];

const SERVICE_PREVIEW = [
  ['01 · FAHRWERK', 'Achsvermessung'],
  ['02 · REIFEN', 'Reifen- und Radwechsel'],
  ['03 · REIFEN', 'Wuchten'],
  ['04 · REIFEN', 'Einlagerung'],
  ['05 · PRÜFUNG', 'HU / AU'],
  ['06 · PRÜFUNG', 'UVV-Prüfung'],
  ['07 · WARTUNG', 'Inspektion'],
  ['08 · WARTUNG', 'Ölwechsel'],
  ['09 · SICHERHEIT', 'Bremsenservice'],
  ['10 · SICHERHEIT', 'Stoßdämpfer'],
  ['11 · KOMFORT', 'Klimaservice'],
  ['12 · KAROSSERIE', 'Karosseriearbeiten'],
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="tread" aria-hidden="true"></div>
        <div className="wrap hero-inner">
          <div>
            <p className="eyebrow">Seit 1988 in Solingen</p>
            <h1>
              Ihr Partner mit dem <em>besseren Service</em> rund ums Auto
            </h1>
            <p className="lead">
              Reifenwechsel, Achsvermessung, Inspektion, HU/AU und mehr — ein familiengeführter Betrieb mit
              erfahrenem Fachpersonal an der Merscheider Straße.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-amber"
                href="https://reifendonis.myneonis.de/mitarbeiter/public/booking/booking.html"
              >
                Termin online buchen
              </a>
              <Link className="btn btn-outline-light" href="/leistungen/">
                Alle Leistungen ansehen
              </Link>
            </div>
          </div>
          <div className="badge-wheel" aria-hidden="true">
            <svg viewBox="0 0 200 200">
              <defs>
                <path id="ring" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
              </defs>
              <circle cx="100" cy="100" r="96" fill="none" stroke="rgba(247,246,243,.15)" strokeWidth="1" />
              <circle cx="100" cy="100" r="78" fill="none" stroke="#F5B324" strokeWidth="1.5" />
              <text fontFamily="IBM Plex Mono, monospace" fontSize="9.5" letterSpacing="3" fill="#F7F6F3">
                <textPath href="#ring" startOffset="0%">
                  REIFEN DONIS • SOLINGEN • FAHRWERK • REIFEN • KFZ ·
                </textPath>
              </text>
            </svg>
            <div className="center-year">
              <b>1988</b>
              <small>
                GEGRÜNDET&nbsp;VON
                <br />
                H.&nbsp;P.&nbsp;DONIS
              </small>
            </div>
          </div>
        </div>

        <div className="wrap hero-stats">
          <div>
            <b>1988</b>
            <span>Gegründet</span>
          </div>
          <div>
            <b>7</b>
            <span>Fachkräfte im Team</span>
          </div>
          <div>
            <b>20+</b>
            <span>Leistungen im Angebot</span>
          </div>
          <div>
            <b className="mono">{REVIEWS.rating} / {REVIEWS.scale}</b>
            <span><Link href="/ihre-meinungen/">Google-Bewertung</Link></span>
          </div>
        </div>
      </section>

      <TreadDivider />

      <section>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Schnellzugriff</p>
            <h2>Wonach suchen Sie?</h2>
          </div>
          <div className="tile-grid">
            {QUICK_LINKS.map((tile) => (
              <a className="tile" href={tile.href} key={tile.title}>
                <span className="tile-tag">{tile.tag}</span>
                <h3>{tile.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dim" id="reifen">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Unsere Leistungen</p>
            <h2>Alles, was Ihr Auto braucht — unter einem Dach</h2>
            <p>
              Vom saisonalen Reifenwechsel bis zur kompletten Fahrzeuginspektion: unser Fachpersonal ist laufend
              geschult, auch für RDKS- und Runflatreifen sowie E- und Hybridfahrzeuge.
            </p>
          </div>
          <div className="service-grid">
            {SERVICE_PREVIEW.map(([code, title]) => (
              <div className="service-card" key={title}>
                <span className="code">{code}</span>
                <h4>{title}</h4>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <Link className="btn btn-outline" href="/leistungen/">
              Alle 20 Leistungen im Detail
            </Link>
          </p>
        </div>
      </section>

      <section>
        <div className="wrap card-row">
          <div className="info-card">
            <h3>
              <span className="dot" aria-hidden="true"></span>Adresse
            </h3>
            <address>
              Donis Kfz-Werkstatt &amp; Reifendienst
              <br />
              Merscheider Straße 326
              <br />
              42699 Solingen
            </address>
          </div>
          <div className="info-card">
            <h3>
              <span className="dot" aria-hidden="true"></span>Kontakt
            </h3>
            <span className="mono-line">
              <a href="tel:0212880239-0">0212 / 880239-0</a>
            </span>
            <span className="mono-line">
              <a href="mailto:info@reifen-donis.de">info@reifen-donis.de</a>
            </span>
          </div>
          <div className="info-card">
            <h3>
              <span className="dot" aria-hidden="true"></span>Öffnungszeiten
            </h3>
            <table className="hours-table">
              <tbody>
                <tr>
                  <td>Mo – Fr</td>
                  <td>8:00 – 12:00</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>13:00 – 17:00</td>
                </tr>
                <tr>
                  <td>Samstag</td>
                  <td>geschlossen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Partners />

      <CtaBand
        title="Reifenwechsel fällig? Termin sichern."
        ctaLabel="Termin online buchen"
        ctaHref="https://reifendonis.myneonis.de/mitarbeiter/public/booking/booking.html"
      />
    </>
  );
}
