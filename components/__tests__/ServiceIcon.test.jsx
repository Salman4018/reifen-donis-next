import { render, screen } from '@testing-library/react';
import ServiceIcon from '../ServiceIcon';

describe('ServiceIcon', () => {
  it('renders an accessible decorative category icon', () => {
    render(<ServiceIcon category="REIFEN" />);

    expect(screen.getByRole('img', { name: 'REIFEN Symbol' })).toBeInTheDocument();
    expect(screen.getByRole('img').querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });
});
