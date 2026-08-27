'use client';

import Image from 'next/image';
import { useState } from 'react';
import { localAsset } from '../lib/assets';

export default function FleetGallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = images[selectedIndex];

  return (
    <div className="fleet-gallery" role="group" aria-label="Bildergalerie Firmenwagen">
      <div className="fleet-gallery-main">
        <Image
          src={localAsset(selected.src)}
          alt={selected.alt}
          width={1200}
          height={900}
          sizes="(max-width: 760px) 100vw, 760px"
        />
        <p>{selected.label}</p>
      </div>
      <div className="fleet-gallery-thumbs" role="list" aria-label="Weitere Bilder">
        {images.map((image, index) => (
          <button
            type="button"
            className={index === selectedIndex ? 'active' : ''}
            aria-label={`${image.label} anzeigen`}
            aria-pressed={index === selectedIndex}
            onClick={() => setSelectedIndex(index)}
            key={image.src}
          >
            <Image src={localAsset(image.src)} alt="" aria-hidden="true" width={150} height={150} sizes="12vw" />
          </button>
        ))}
      </div>
    </div>
  );
}
