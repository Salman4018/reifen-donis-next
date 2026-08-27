'use client';

import { useState } from 'react';

export default function FleetGallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = images[selectedIndex];

  return (
    <div className="fleet-gallery" role="group" aria-label="Bildergalerie Firmenwagen">
      <div className="fleet-gallery-main">
        <img src={selected.src} alt={selected.alt} />
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
            <img src={image.src} alt="" aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  );
}
