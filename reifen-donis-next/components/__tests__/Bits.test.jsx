import { render, screen } from '@testing-library/react';

import { TreadDivider, CtaBand, Partners } from '../Bits';

describe('TreadDivider', () => {
  it('renders a decorative, non-semantic divider', () => {
    const { container } = render(<TreadDivider />);
    const divider = container.querySelector('.tread-divider');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveAttribute('aria-hidden', 'true');
  });
});

describe('CtaBand', () => {
  it('renders the title and call-to-action link', () => {
    render(<CtaBand title="Jetzt Termin buchen" ctaLabel="Termin buchen" ctaHref="/kontakt/" />);

    expect(screen.getByRole('heading', { name: 'Jetzt Termin buchen' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Termin buchen' })).toHaveAttribute('href', '/kontakt/');
  });
});

describe('Partners', () => {
  it('renders the partner links and brand chips', () => {
    render(<Partners />);

    expect(screen.getByRole('link', { name: '4Fleet Group' })).toHaveAttribute('href', 'http://4fleet.de');
    expect(screen.getByRole('link', { name: 'GRS' })).toHaveAttribute('href', 'https://g-rs.com');
    expect(screen.getByRole('link', { name: 'BRV' })).toHaveAttribute('href', 'http://brv-bonn.de');
    expect(screen.getByText('Goodyear')).toBeInTheDocument();
    expect(screen.getByText('Fulda')).toBeInTheDocument();
    expect(screen.getByText('Sava')).toBeInTheDocument();
  });
});
