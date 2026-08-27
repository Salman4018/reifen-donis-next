export const metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung von Reifen Donis.',
};

export default function DatenschutzPage() {
  return (
    <section>
      <div className="wrap legal-content">
        <p className="eyebrow">Rechtliches</p>
        <h1>Datenschutz</h1>
        <h2>Verantwortlicher</h2>
        <p>
          Donis Kfz-Werkstatt &amp; Reifendienst<br />
          Merscheider Straße 326<br />
          42699 Solingen<br />
          Deutschland<br />
          <a href="mailto:info@reifen-donis.de">info@reifen-donis.de</a>
        </p>
        <h2>Erhebung und Verarbeitung</h2>
        <p>
          Bei der informatorischen Nutzung dieser Website werden technisch erforderliche Zugriffsdaten verarbeitet,
          insbesondere IP-Adresse, Datum und Uhrzeit, angeforderte Seite, HTTP-Status, übertragene Datenmenge,
          Referrer, Browser, Betriebssystem und Sprache. Die Verarbeitung dient der sicheren und stabilen
          Bereitstellung des Angebots.
        </p>
        <h2>Kontakt und Terminbuchung</h2>
        <p>
          Wenn Sie uns per E-Mail, Kontaktformular oder über die externe Terminbuchung kontaktieren, verarbeiten wir
          die von Ihnen übermittelten Daten zur Bearbeitung Ihrer Anfrage und zur Terminabwicklung. Dazu können Name,
          E-Mail-Adresse, Telefonnummer, Anschrift und Fahrzeugdaten gehören. Die Daten werden nur so lange
          gespeichert, wie es für den jeweiligen Zweck und gesetzliche Aufbewahrungspflichten erforderlich ist.
        </p>
        <h2>Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch. Eine erteilte Einwilligung können Sie jederzeit für die Zukunft
          widerrufen. Anfragen richten Sie bitte an{' '}
          <a href="mailto:info@reifen-donis.de">info@reifen-donis.de</a>. Außerdem besteht ein Beschwerderecht bei
          einer Datenschutzaufsichtsbehörde.
        </p>
        <h2>Externe Dienste</h2>
        <p>
          Diese Website kann Inhalte von Google Maps und Google Fonts laden. Die externe Terminbuchung wird über
          <a href="https://reifendonis.myneonis.de/mitarbeiter/public/booking/booking.html"> MyNeonis</a> bereitgestellt.
          Beim Aufruf externer Inhalte können Daten, insbesondere die IP-Adresse, an den jeweiligen Anbieter
          übertragen werden. Die jeweiligen Datenschutzinformationen der Anbieter sind zu beachten.
        </p>
        <h2>Cookies und Analyse</h2>
        <p>
          Technisch erforderliche Speicherungen können für den Betrieb der Website eingesetzt werden. Nicht
          erforderliche Analyse- oder Marketingdienste dürfen erst nach einer wirksamen Einwilligung aktiviert
          werden. Die konkrete Konfiguration ist vor dem Produktionsbetrieb zu prüfen.
        </p>
      </div>
    </section>
  );
}
