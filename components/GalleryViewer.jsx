'use client';

import { useState } from 'react';

export default function GalleryViewer({ title, images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = images[selectedIndex];
  const imagePath = (file) => `/images/gallery/${file}`;

  function move(step) {
    setSelectedIndex((index) => (index + step + images.length) % images.length);
  }

  return (
    <div className="vehicle-gallery" role="group" aria-label={`${title} Bildergalerie`}>
      <div className="vehicle-gallery-main">
        <button type="button" className="gallery-arrow previous" aria-label="Vorheriges Bild" onClick={() => move(-1)}>
          ‹
        </button>
        <img src={imagePath(selected)} alt={`${title}, Bild ${selectedIndex + 1} von ${images.length}`} />
        <button type="button" className="gallery-arrow next" aria-label="Nächstes Bild" onClick={() => move(1)}>
          ›
        </button>
        <span className="gallery-counter">{selectedIndex + 1} / {images.length}</span>
      </div>
      <div className="vehicle-gallery-thumbs" role="list" aria-label="Galeriebilder">
        {images.map((image, index) => (
          <button
            type="button"
            className={index === selectedIndex ? 'active' : ''}
            aria-label={`Bild ${index + 1} anzeigen`}
            aria-pressed={index === selectedIndex}
            onClick={() => setSelectedIndex(index)}
            key={image}
          >
            <img src={imagePath(image)} alt="" aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  );
}
