import { render, screen } from '@testing-library/react';

import SiteFooter from '../SiteFooter';

describe('SiteFooter', () => {
  it('renders the navigation links to every page', () => {
    render(<SiteFooter />);

    expect(screen.getByRole('link', { name: 'Startseite' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Galerie' })).toHaveAttribute('href', '/bilder');
    expect(screen.getByRole('link', { name: 'Leistungen' })).toHaveAttribute('href', '/unsere-services-rund-um-auto-reifen');
    expect(screen.getByRole('link', { name: 'Über uns' })).toHaveAttribute('href', '/über-uns');
    expect(screen.getByRole('link', { name: 'Kontakt' })).toHaveAttribute('href', '/kontakt');
  });

  it('renders contact details', () => {
    render(<SiteFooter />);

    expect(screen.getByRole('link', { name: '0212 / 880239-0' })).toHaveAttribute('href', 'tel:0212880239-0');
    expect(screen.getByRole('link', { name: 'info@reifen-donis.de' })).toHaveAttribute(
      'href',
      'mailto:info@reifen-donis.de'
    );
    expect(screen.getByText(/Merscheider Straße 326, 42699 Solingen/)).toBeInTheDocument();
  });

  it('renders working legal links', () => {
    render(<SiteFooter />);

    expect(screen.getByRole('link', { name: 'Impressum' })).toHaveAttribute('href', '/impressum');
    expect(screen.getByRole('link', { name: 'Datenschutz' })).toHaveAttribute('href', '/datenschutz');
    expect(screen.getByRole('link', { name: 'Barrierefreiheit' })).toHaveAttribute(
      'href',
      '/barrierefreiheit'
    );
  });

  it('renders the copyright notice', () => {
    render(<SiteFooter />);
    expect(screen.getByText(/© 2026 Reifen Donis, Solingen/)).toBeInTheDocument();
  });
});
