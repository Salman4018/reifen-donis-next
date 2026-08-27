export const metadata = {
  title: 'Impressum',
  description: 'Impressum von Donis Kfz-Werkstatt & Reifendienst in Solingen.',
};

export default function ImpressumPage() {
  return (
    <section>
      <div className="wrap legal-content">
        <p className="eyebrow">Rechtliches</p>
        <h1>Impressum</h1>
        <h2>Donis Kfz-Werkstatt &amp; Reifendienst</h2>
        <p>
          Merscheider Straße 326<br />
          42699 Solingen<br />
          Deutschland
        </p>
        <p>
          E-Mail: <a href="mailto:info@reifen-donis.de">info@reifen-donis.de</a><br />
          Telefon: <a href="tel:+492128802390">+49 212 8802390</a>
        </p>
        <h2>Vertretungsberechtigt</h2>
        <p>Inhaber: Herr Hans-Peter Donis</p>
        <h2>Anschrift</h2>
        <p>Merscheider Straße 326, 42699 Solingen, Deutschland</p>
        <h2>Umsatzsteuer-Identifikationsnummer</h2>
        <p>DE 120 931 759</p>
        <h2>Konzeption und Realisation</h2>
        <p><a href="https://aha.biz">aha! Agentur für Handelsmarketing GmbH</a></p>
        <h2>Verbraucherschlichtung</h2>
        <p>
          Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder
          bereit noch verpflichtet. Die zuständige Allgemeine Verbraucherschlichtungsstelle ist das Zentrum für
          Schlichtung e. V., Straßburger Straße 8, 77694 Kehl am Rhein,{' '}
          <a href="https://www.verbraucher-schlichter.de">www.verbraucher-schlichter.de</a>.
        </p>
        <h2>Haftung und Urheberrecht</h2>
        <p>
          Die Informationen dieser Website werden mit größtmöglicher Sorgfalt bereitgestellt. Eine Haftung für
          Aktualität, Richtigkeit und Vollständigkeit ist im gesetzlich zulässigen Umfang ausgeschlossen. Inhalte
          und Werke auf dieser Website unterliegen dem deutschen Urheberrecht und dürfen ohne schriftliche
          Genehmigung nicht vervielfältigt oder veröffentlicht werden.
        </p>
      </div>
    </section>
  );
}
