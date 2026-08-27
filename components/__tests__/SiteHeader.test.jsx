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
    expect(screen.getByRole('link', { name: /startseite/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Leistungen' })).toHaveAttribute('href', '/leistungen');
    expect(screen.getByRole('link', { name: 'Reifen' })).toHaveAttribute('href', '/leistungen#reifen');
    expect(screen.getByRole('link', { name: 'Über uns' })).toHaveAttribute('href', '/ueber-uns');
    expect(screen.getByRole('link', { name: 'Kontakt' })).toHaveAttribute('href', '/kontakt');
  });

  it('marks the current page link with aria-current', () => {
    render(<SiteHeader />);
    expect(screen.getByRole('link', { name: /startseite/i })).toHaveAttribute('aria-current', 'page');
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

    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes the mobile navigation menu after a nav link is clicked', async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const toggle = screen.getByRole('button', { name: /menü öffnen/i });
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    await user.click(screen.getByRole('link', { name: 'Kontakt' }));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
});
