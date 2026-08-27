import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

import SiteHeader from '../SiteHeader';

describe('SiteHeader', () => {
  it('renders the logo and all navigation links', () => {
    render(<SiteHeader />);

    expect(screen.getByText('REIFEN DONIS')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Galerie' })).toHaveAttribute('href', '/bilder');
    expect(screen.getByRole('link', { name: 'Reifen' })).toHaveAttribute('href', '/reifen');
    expect(screen.getByRole('link', { name: 'Leistungen' })).toHaveAttribute(
      'href',
      '/unsere-services-rund-um-auto-reifen'
    );
    expect(screen.getByRole('link', { name: 'Firmenwagen' })).toHaveAttribute('href', '/firmenwagen');
    expect(screen.getByRole('link', { name: 'Über uns' })).toHaveAttribute('href', '/über-uns');
  });

  it('marks the current page link with aria-current', () => {
    render(<SiteHeader />);
    expect(screen.getByRole('link', { name: /REIFEN DONIS/i })).toHaveAttribute('aria-current', 'page');
  });

  it('renders the phone contact link', () => {
    render(<SiteHeader />);
    expect(screen.getByRole('link', { name: /0212/ })).toHaveAttribute('href', 'tel:0212880239-0');
  });

  it('toggles the mobile navigation menu when the hamburger button is clicked', async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const toggle = screen.getByRole('button', { name: /menü öffnen/i });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(toggle).toHaveAccessibleName('Menü schließen');

    await user.click(screen.getByRole('button', { name: /menü schließen/i }));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes the mobile navigation menu after a nav link is clicked', async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const toggle = screen.getByRole('button', { name: /menü öffnen/i });
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    await user.click(screen.getByRole('link', { name: 'Galerie' }));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
});
