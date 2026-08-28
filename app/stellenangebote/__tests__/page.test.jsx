import { render, screen } from '@testing-library/react';
import StellenangebotePage from '../page';

jest.mock('next/link', () => function MockLink({ children, ...props }) {
  return <a {...props}>{children}</a>;
});

describe('StellenangebotePage', () => {
  it('renders the intentional no-vacancy state and contact options', () => {
    render(<StellenangebotePage />);

    expect(screen.getByRole('heading', { name: /Gemeinsam anpacken/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Derzeit keine offenen Stellen' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Kontaktseite öffnen' })).toHaveAttribute('href', '/kontakt/');
    expect(screen.getByRole('link', { name: 'info@reifen-donis.de' })).toHaveAttribute(
      'href',
      'mailto:info@reifen-donis.de'
    );
    expect(screen.getByRole('link', { name: '0212 / 880239-0' })).toHaveAttribute('href', 'tel:0212880239-0');
  });
});
