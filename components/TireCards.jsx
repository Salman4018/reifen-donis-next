import Link from 'next/link';
import Image from 'next/image';
import ServiceIcon from './ServiceIcon';
import { TIRE_CATEGORIES } from '../data/tires';

const TIRE_ICON_BY_SLUG = {
  sommerreifen: 'SUMMER',
  winterreifen: 'WINTER',
  ganzjahresreifen: 'ALL_SEASON',
  offroad: 'OFFROAD',
  rdks: 'TPMS',
  'eu-reifenlabel': 'LABEL',
};

export default function TireCards() {
  return (
    <div className="service-grid tire-card-grid">
      {TIRE_CATEGORIES.map(({ slug, title, intro, image, imageAlt }) => (
        <Link className="service-card tire-service-card" href={`/reifen/${slug}/`} key={slug}>
          <Image className="tire-card-image" src={image} alt={imageAlt} width={600} height={150} sizes="(max-width: 900px) 50vw, 25vw" />
          <span className="code">REIFEN</span>
          <div className="service-card-title">
            <h3>{title}</h3>
            <ServiceIcon category={title} icon={TIRE_ICON_BY_SLUG[slug]} />
          </div>
          <p style={{ margin: '.6em 0 0', fontSize: '.9rem', color: 'var(--steel)' }}>{intro}</p>
        </Link>
      ))}
    </div>
  );
}
