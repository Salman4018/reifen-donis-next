export const metadata = {
  title: 'Erklärung zur Barrierefreiheit',
  description: 'Erklärung zur Barrierefreiheit der Website von Reifen Donis.',
};

export default function BarrierefreiheitPage() {
  return (
    <section>
      <div className="wrap legal-content">
        <p className="eyebrow">Rechtliches</p>
        <h1>Erklärung zur Barrierefreiheit</h1>
        <p>
          Die Donis Kfz-Werkstatt &amp; Reifendienst ist bemüht, diese Website im Einklang mit dem
          Barrierefreiheitsstärkungsgesetz (BFSG) barrierefrei zugänglich zu machen.
        </p>
        <h2>Geltungsbereich</h2>
        <p>
          Diese Erklärung gilt für das Webangebot der Hauptwebseite. Angebote auf anderen Domains, insbesondere die
          externe Terminbuchung, werden hinsichtlich ihrer Barrierefreiheit separat bewertet.
        </p>
        <h2>Stand der Vereinbarkeit</h2>
        <p>
          Die Website ist teilweise mit den Anforderungen des BFSG vereinbar. Einzelne Bilder können unzureichende
          Alternativtexte besitzen; außerdem können bei einzelnen Inhalten Kontrast- oder semantische Mängel
          bestehen. Wir arbeiten kontinuierlich an der Verbesserung der Zugänglichkeit.
        </p>
        <h2>Bereits umgesetzte Maßnahmen</h2>
        <ul>
          <li>Responsive Schriftgrößen und Layouts für mobile Endgeräte</li>
          <li>Skip-Link und semantische Seitenbereiche</li>
          <li>Beschriftete Formularfelder und sichtbare Fokuszustände</li>
          <li>Alternative Texte für vorhandene informative Bilder</li>
          <li>Unterstützung reduzierter Bewegung</li>
        </ul>
        <h2>Feedback und Kontakt</h2>
        <p>
          Wenn Sie Mängel beim barrierefreien Zugang bemerken oder Fragen haben, kontaktieren Sie uns bitte unter
          <a href="mailto:info@reifen-donis.de"> info@reifen-donis.de</a> oder postalisch:
        </p>
        <p>
          Donis Kfz-Werkstatt &amp; Reifendienst<br />
          Merscheider Straße 326<br />
          42699 Solingen, Deutschland
        </p>
        <h2>Erstellung</h2>
        <p>Diese Erklärung wurde am 28.07.2025 erstellt und zuletzt am 28.07.2025 überprüft.</p>
      </div>
    </section>
  );
}
