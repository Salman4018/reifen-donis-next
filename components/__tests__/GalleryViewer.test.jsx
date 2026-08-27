import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GalleryViewer from '../GalleryViewer';

describe('GalleryViewer', () => {
  it('shows all images and supports next, previous, and thumbnail controls', async () => {
    const user = userEvent.setup();
    render(<GalleryViewer title="Testfahrzeug" images={['one.JPG', 'two.JPG', 'three.JPG']} />);

    expect(screen.getByRole('img', { name: 'Testfahrzeug, Bild 1 von 3' })).toHaveAttribute(
      'src',
      '/images/gallery/one.JPG'
    );
    expect(screen.getByRole('button', { name: 'Nächstes Bild' })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Bild \d+ anzeigen/ })).toHaveLength(3);

    await user.click(screen.getByRole('button', { name: 'Nächstes Bild' }));
    expect(screen.getByRole('img', { name: 'Testfahrzeug, Bild 2 von 3' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Bild 3 anzeigen' }));
    expect(screen.getByRole('img', { name: 'Testfahrzeug, Bild 3 von 3' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Vorheriges Bild' }));
    expect(screen.getByRole('img', { name: 'Testfahrzeug, Bild 2 von 3' })).toBeInTheDocument();
  });
});
