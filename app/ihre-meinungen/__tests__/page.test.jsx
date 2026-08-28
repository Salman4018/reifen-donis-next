import { render, screen } from '@testing-library/react';
import ReviewsPage from '../page';

jest.mock('next/link', () => function MockLink({ children, ...props }) {
  return <a {...props}>{children}</a>;
});

describe('ReviewsPage', () => {
  it('renders the current source-linked rating and review count', () => {
    render(<ReviewsPage />);

    expect(screen.getByRole('heading', { name: 'Ihre Meinungen' })).toBeInTheDocument();
    expect(screen.getByText('4.7')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '90 Berichte' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Rezension schreiben' })).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: 'Bewertungen bei Google ansehen' })).toHaveAttribute(
      'href',
      expect.stringContaining('https://www.google.com/search?')
    );
  });
});
