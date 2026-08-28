import { render, screen } from '@testing-library/react';

jest.mock('next/link', () => function MockLink({ children, ...props }) {
  return <a {...props}>{children}</a>;
});

jest.mock('next/navigation', () => ({ notFound: jest.fn() }));

import ReifenPage from '../../app/reifen/page';
import TireCategoryPage from '../../app/reifen/[slug]/page';

describe('Tire pages', () => {
  it('lists all six source tire categories', () => {
    render(<ReifenPage />);

    for (const slug of ['sommerreifen', 'winterreifen', 'ganzjahresreifen', 'rdks', 'eu-reifenlabel', 'offroad']) {
      expect(screen.getByRole('link', { name: new RegExp(`REIFEN ${slug.replace('-', '[- ]')}`, 'i') })).toHaveAttribute(
        'href',
        `/reifen/${slug}/`
      );
    }
  });

  it('renders source-based category content', async () => {
    render(await TireCategoryPage({ params: Promise.resolve({ slug: 'rdks' }) }));

    expect(screen.getByRole('heading', { name: 'RDKS' })).toBeInTheDocument();
    expect(screen.getByText(/Reifendruckkontrollsysteme – kurz RDKS/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Alle Reifen/ })).toHaveAttribute('href', '/reifen/');
  });
});
