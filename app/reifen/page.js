import TireInformation from '../../components/TireInformation';
import TireCards from '../../components/TireCards';

export const metadata = {
  title: 'Reifen & Räder',
  description: 'Reifen und Räder kaufen bei Reifen Donis. Sommerreifen, Ganzjahresreifen, Winterreifen und Reifenservice in Solingen.',
};

export default function ReifenPage() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="tread" aria-hidden="true"></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <p className="eyebrow">Reifen &amp; Räder</p>
          <h1>Das richtige Profil für <em>jede Fahrt</em></h1>
          <p className="lead">
            Reifen sind die einzige Verbindung zwischen Ihrem Fahrzeug und der Straße. Wir beraten Sie bei der
            Auswahl, Montage, Pflege und Einlagerung Ihrer Reifen und Räder.
          </p>
        </div>
      </section>
      <TireInformation />
      <section>
        <div className="wrap">
          <TireCards />
        </div>
      </section>
    </>
  );
}
