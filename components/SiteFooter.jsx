import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h4>Reifen Donis</h4>
            <p style={{ maxWidth: '32ch', color: 'var(--steel-light)', fontSize: '.92rem' }}>
              Donis Kfz-Werkstatt &amp; Reifendienst — Ihr Ansprechpartner rund ums Auto in Solingen seit 1988.
            </p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/">Startseite</Link></li>
              <li><Link href="/leistungen/">Leistungen</Link></li>
              <li><Link href="/ueber-uns/">Über uns</Link></li>
              <li><Link href="/kontakt/">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h4>Kontakt</h4>
            <ul>
              <li><a href="tel:0212880239-0">0212 / 880239-0</a></li>
              <li><a href="mailto:info@reifen-donis.de">info@reifen-donis.de</a></li>
              <li>Merscheider Straße 326, 42699 Solingen</li>
            </ul>
          </div>
          <div>
            <h4>Rechtliches</h4>
            <ul>
              <li><a href="#">Impressum</a></li>
              <li><a href="#">Datenschutz</a></li>
              <li><a href="#">Barrierefreiheit</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Reifen Donis, Solingen</span>
        </div>
      </div>
    </footer>
  );
}
