import { render, screen } from '@testing-library/react';

import SiteFooter from '../SiteFooter';

describe('SiteFooter', () => {
  it('renders the navigation links to every page', () => {
    render(<SiteFooter />);

    expect(screen.getByRole('link', { name: 'Startseite' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Leistungen' })).toHaveAttribute('href', '/leistungen');
    expect(screen.getByRole('link', { name: 'Über uns' })).toHaveAttribute('href', '/ueber-uns');
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

  it('renders the copyright notice', () => {
    render(<SiteFooter />);
    expect(screen.getByText(/© 2026 Reifen Donis, Solingen/)).toBeInTheDocument();
  });
});
