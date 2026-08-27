'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Startseite' },
  { href: '/leistungen/', label: 'Leistungen' },
  { href: '/leistungen/#reifen', label: 'Reifen' },
  { href: '/ueber-uns/', label: 'Über uns' },
  { href: '/kontakt/', label: 'Kontakt' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-bar wrap">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          REIFEN DONIS
          <span>KFZ-WERKSTATT · SOLINGEN</span>
        </Link>

        <nav className={`main-nav${open ? ' open' : ''}`} id="main-nav" aria-label="Hauptnavigation">
          {NAV_LINKS.map((link) => {
            const isCurrent = link.href !== '/' ? pathname?.startsWith(link.href.split('#')[0]) : pathname === '/';
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
          <button
            className="nav-toggle"
            aria-label="Menü öffnen"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
