'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/bilder/', label: 'Galerie' },
  { href: '/reifen/', label: 'Reifen' },
  { href: '/unsere-services-rund-um-auto-reifen/', label: 'Leistungen' },
  { href: '/firmenwagen/', label: 'Firmenwagen' },
  { href: '/ueber-uns/', label: 'Über uns' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-bar wrap">
        <Link href="/" className="logo" aria-current={pathname === '/' ? 'page' : undefined} onClick={() => setOpen(false)}>
          REIFEN DONIS
          <span>KFZ-WERKSTATT · SOLINGEN</span>
        </Link>

        <nav className={`main-nav${open ? ' open' : ''}`} id="main-nav" aria-label="Hauptnavigation">
          {NAV_LINKS.map((link) => {
            const isCurrent = pathname?.startsWith(link.href.replace(/\/$/, ''));
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent && !link.href.includes('#') ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-cta">
          <a className="phone-pill" href="tel:0212880239-0">
            <span aria-hidden="true">☎</span>
            <span className="full">0212 / 880239-0</span>
          </a>
          <a
            className="btn btn-amber btn-sm header-book"
            href="https://reifendonis.myneonis.de/mitarbeiter/public/booking/booking.html"
          >
            Termin buchen
          </a>
          <button
            className="nav-toggle"
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
          </button>
        </div>
      </div>
      <div
        className={`nav-backdrop${open ? ' open' : ''}`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      ></div>
    </header>
  );
}
