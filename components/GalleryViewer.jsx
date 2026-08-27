'use client';

import Image from 'next/image';
import { useState } from 'react';
import { localAsset } from '../lib/assets';

export default function GalleryViewer({ title, images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = images[selectedIndex];
  const imagePath = (file) => localAsset(`/images/gallery/${file}`);

  function move(step) {
    setSelectedIndex((index) => (index + step + images.length) % images.length);
  }

  return (
    <div className="vehicle-gallery" role="group" aria-label={`${title} Bildergalerie`}>
      <div className="vehicle-gallery-main">
        <button type="button" className="gallery-arrow previous" aria-label="Vorheriges Bild" onClick={() => move(-1)}>
          ‹
        </button>
        <Image
          src={imagePath(selected)}
          alt={`${title}, Bild ${selectedIndex + 1} von ${images.length}`}
          width={1200}
          height={800}
          sizes="(max-width: 760px) 100vw, 760px"
        />
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
            <Image src={imagePath(image)} alt="" aria-hidden="true" width={150} height={150} sizes="12vw" />
          </button>
        ))}
      </div>
    </div>
  );
}
