export function TreadDivider() {
  return <div className="tread-divider" aria-hidden="true"></div>;
}

export function CtaBand({ title, ctaLabel, ctaHref }) {
  return (
    <div className="cta-band">
      <div className="wrap">
        <h2>{title}</h2>
        <a className="btn btn-amber" href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}

export function Partners() {
  return (
    <section className="bg-dim">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Wir handeln mit den Besten</p>
          <h2>Unsere Partner &amp; Marken</h2>
        </div>
        <div className="partners">
          <a className="partner-chip" href="http://4fleet.de">4Fleet Group</a>
          <a className="partner-chip" href="https://g-rs.com">GRS</a>
          <a className="partner-chip" href="http://brv-bonn.de">BRV</a>
          <span className="partner-chip">Goodyear</span>
          <span className="partner-chip">Fulda</span>
          <span className="partner-chip">Sava</span>
        </div>
      </div>
    </section>
  );
}
