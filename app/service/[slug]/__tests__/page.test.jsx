import { render, screen } from '@testing-library/react';
import ServiceDetailPage from '../page';

jest.mock('next/link', () => function MockLink({ children, ...props }) {
  return <a {...props}>{children}</a>;
});

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));

describe('ServiceDetailPage', () => {
  it('renders a service article with navigation and contact actions', async () => {
    render(await ServiceDetailPage({ params: Promise.resolve({ slug: 'bremsenservice' }) }));

    expect(screen.getByRole('heading', { name: 'Bremsenservice' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Bremsenservice' })).toHaveAttribute('src', '/images/services/bremsenservice.jpg');
    expect(screen.getByRole('link', { name: /Alle Leistungen/ })).toHaveAttribute(
      'href',
      '/unsere-services-rund-um-auto-reifen/'
    );
    expect(screen.getByRole('link', { name: 'Persönlich beraten lassen' })).toHaveAttribute('href', '/kontakt/');
    expect(screen.getByRole('heading', { name: 'Bremsen kontrollieren' })).toBeInTheDocument();
  });
});
