import { TreadDivider, CtaBand } from '../../components/Bits';
import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie Reifen Donis in Solingen über das Kontaktformular, telefonisch oder per E-Mail.',
};

export default function KontaktPage() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="tread" aria-hidden="true"></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <p className="eyebrow">Kontakt</p>
          <h1 style={{ maxWidth: '20ch' }}>
            Wir freuen uns auf <em>Sie</em>
          </h1>
          <p className="lead">
            Donis Kfz-Werkstatt &amp; Reifendienst, Merscheider Straße 326, Solingen. Schreiben Sie uns oder
            rufen Sie direkt an.
          </p>
        </div>
      </section>

      <TreadDivider />

      <section>
        <div className="wrap contact-layout">
          <div>
            <p className="eyebrow">Nachricht senden</p>
            <h2 style={{ marginBottom: '.6em' }}>Kontaktformular</h2>
            <ContactForm />
          </div>

          <div>
            <p className="eyebrow">Vor Ort</p>
            <h2 style={{ marginBottom: '.6em' }}>So finden Sie uns</h2>
            <div className="map-frame">
              <iframe
                title="Karte: Reifen Donis, Merscheider Straße 326, Solingen"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Merscheider+Stra%C3%9Fe+326,+42699+Solingen&output=embed"
              ></iframe>
            </div>
            <div className="card-row card-row-2" style={{ marginTop: 24 }}>
              <div className="info-card">
                <h3>
                  <span className="dot" aria-hidden="true"></span>Adresse
                </h3>
                <table className="hours-table address-table">
                  <tbody>
                    <tr>
                      <td colSpan={2}>Merscheider Straße 326</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>42699 Solingen</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>Deutschland</td>
                    </tr>
                  </tbody>
                </table>
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
          </div>
        </div>
      </section>

      <CtaBand
        title="Lieber gleich einen Termin buchen?"
        ctaLabel="Zum Terminplaner"
        ctaHref="https://reifendonis.myneonis.de/mitarbeiter/public/booking/booking.html"
      />
    </>
  );
}
