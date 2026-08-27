import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FleetGallery from '../FleetGallery';

const images = [
  { src: '/fleet-one.jpg', alt: 'Erstes Flottenbild', label: 'Erstes Bild' },
  { src: '/fleet-two.jpg', alt: 'Zweites Flottenbild', label: 'Zweites Bild' },
];

describe('FleetGallery', () => {
  it('shows the selected image and allows viewing another image', async () => {
    const user = userEvent.setup();
    render(<FleetGallery images={images} />);

    expect(screen.getByAltText('Erstes Flottenbild')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Zweites Bild anzeigen' }));
    expect(screen.getByAltText('Zweites Flottenbild')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Zweites Bild anzeigen' })).toHaveAttribute('aria-pressed', 'true');
  });
});
