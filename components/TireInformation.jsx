import Image from 'next/image';
import { localAsset } from '../lib/assets';

export default function TireInformation() {
  return (
    <section className="tire-information">
      <div className="wrap">
        <Image className="service-hero-image tire-overview-image" src={localAsset('/images/tires/reifen-raeder.jpg')} alt="" width={1200} height={280} sizes="(max-width: 900px) 100vw, 1200px" />
        <div className="section-head">
          <h2>Das High-Tech-Produkt Reifen verlangt nach dem richtigen Service</h2>
          <p>Der Reifen ist ein wichtiger Bestandteil der Fahrsicherheit, denn er ist die einzige Kontaktfläche zur Fahrbahn. Er hat die Aufgabe sicher auf der Straße zu haften sowie alle auf ihn einwirkenden Kräfte aufzunehmen und weiterzuleiten. Außerdem tragen die Räder erheblich zum Fahrkomfort des Fahrzeuges bei.</p>
          <p>Um die Fahrsicherheit und den Fahrkomfort zu erhalten empfiehlt der Fachmann, Sommerreifen bei einer Profiltiefe von 3 mm und Winterreifen bei 4 mm auszuwechseln. Spätestens ist der Austausch jedoch bei einem Profil von 1,6 mm gesetzlich vorgeschrieben.</p>
          <p>Der Zustand des Reifens ist somit besonders wichtig. Wir bieten Ihnen dafür zahlreiche Reifenservices sowie ein großes Angebot diverser Markenreifen und -felgen. Informieren Sie sich bei uns vor Ort und überzeugen Sie sich von unseren Produkten!</p>
        </div>
      </div>
    </section>
  );
}
