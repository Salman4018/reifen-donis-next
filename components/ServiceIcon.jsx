const ICON_PATHS = {
  SUMMER: (
    <>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
    </>
  ),
  WINTER: (
    <>
      <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1" />
      <path d="m12 2-1.5 2M12 2l1.5 2M12 22l-1.5-2M12 22l1.5-2M2 12l2 1.5M2 12l2-1.5M22 12l-2 1.5M22 12l-2-1.5" />
    </>
  ),
  ALL_SEASON: (
    <>
      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3 10.5 5M12 3l1.5 2M21 12l-2-1.5M21 12l-2 1.5" />
    </>
  ),
  OFFROAD: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="m6 6 3 3M18 6l-3 3M6 18l3-3M18 18l-3-3" />
      <path d="M4 9 2.5 7.5M20 9l1.5-1.5M4 15l-1.5 1.5M20 15l1.5 1.5" />
    </>
  ),
  TPMS: (
    <>
      <path d="M5 17a7 7 0 1 1 14 0" />
      <path d="M12 17V9M9 20h6M5 17H3M21 17h-2" />
      <circle cx="12" cy="17" r="1" />
    </>
  ),
  LABEL: (
    <>
      <path d="M4 5h10l6 6-8 8-8-8V5Z" />
      <circle cx="9" cy="9" r="1.3" />
      <path d="M12 12h5M12 15h3" />
    </>
  ),
  FAHRWERK: (
    <>
      <path d="M6 5v14M18 5v14M3 8h6M15 8h6M3 16h6M15 16h6" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 3v3M12 18v3" />
    </>
  ),
  ABGAS: (
    <>
      <path d="M4 14h7a3 3 0 0 0 3-3V7" />
      <path d="M14 7h3a3 3 0 0 1 3 3v4" />
      <path d="M17 17h.01M20 17h.01" />
      <path d="M4 10h4M4 6h3" />
    </>
  ),
  SICHERHEIT: (
    <>
      <path d="M12 3 20 6v5c0 5-3.3 8.5-8 10-4.7-1.5-8-5-8-10V6l8-3Z" />
      <path d="m8 12 2.5 2.5L16 9" />
    </>
  ),
  REIFEN: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v5M20 12h-5M12 20v-5M4 12h5" />
    </>
  ),
  PRÜFUNG: (
    <>
      <path d="M7 4h10v17H7zM9 2h6v4H9z" />
      <path d="m9.5 11 1.5 1.5 3-3M9.5 16h5" />
    </>
  ),
  WARTUNG: (
    <>
      <path d="m14.5 5.5 4-2 2 2-2 4-3 .5-6.8 6.8a2.1 2.1 0 1 1-3-3L12.5 7l.5-3 4-2" />
      <path d="m5 19 2 2" />
    </>
  ),
  KAROSSERIE: (
    <>
      <path d="m3 15 1.5-5h15L21 15v4H3zM6 10l2-4h8l2 4" />
      <circle cx="7" cy="17" r="1.5" />
      <circle cx="17" cy="17" r="1.5" />
    </>
  ),
  KOMFORT: (
    <>
      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  PFLEGE: (
    <>
      <path d="M12 3v4M5.6 5.6l2.8 2.8M3 12h4M5.6 18.4l2.8-2.8M18.4 18.4l-2.8-2.8M21 12h-4M18.4 5.6l-2.8 2.8" />
      <path d="M8 13a4 4 0 0 0 8 0c0-2.2-1.8-4-4-4s-4 1.8-4 4Z" />
    </>
  ),
  SAISON: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
    </>
  ),
  GLAS: (
    <>
      <path d="M4 18 6 6h12l2 12M6 6l6 8 6-8M8 18h8" />
    </>
  ),
  ZUBEHÖR: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2" />
      <path d="m12 4 1.5 6.5M20 12l-6.5 1.5M12 20l-1.5-6.5M4 12l6.5-1.5" />
    </>
  ),
  ELEKTRIK: (
    <>
      <path d="M4 7h16v10H4zM2 10v4M8 7v3M16 7v3" />
      <path d="M10 12h4M12 10v4" />
    </>
  ),
  ENTSORGUNG: (
    <>
      <path d="M8 5h8M9 5V3h6v2M6 8h12M8 8l1 12h6l1-12" />
      <path d="M10 11v6M14 11v6" />
    </>
  ),
  INFO: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6M12 7h.01" />
    </>
  ),
};

export default function ServiceIcon({ category, icon = category }) {
  return (
    <span className="service-icon" role="img" aria-label={`${category} Symbol`}>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        {ICON_PATHS[icon] || ICON_PATHS.INFO}
      </svg>
    </span>
  );
}
