import { render, screen } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));

jest.mock('next/link', () => {
  return function MockLink({ children, ...props }) {
    return <a {...props}>{children}</a>;
  };
});

import BilderPage from '../../app/bilder/page';
import GalleryDetailPage from '../../app/bilder/[slug]/page';
import GalleryIndex from '../GalleryIndex';

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
  usePathname: () => '/bilder/',
  useSearchParams: () => new URLSearchParams(),
}));

describe('Gallery pages', () => {
  it('renders the first page of gallery collections with detail links', async () => {
    render(await BilderPage());

    expect(screen.getByRole('heading', { name: 'Unsere Bilder' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Lamborghini Diabolo SE 30/ })).toHaveAttribute(
      'href',
      '/bilder/lamborghini-diabolo-se-30-1993-1995-spezial-edition-150-stueck/'
    );
    expect(screen.getByAltText(/Lamborghini Diabolo SE 30/)).toHaveAttribute(
      'src',
      '/images/gallery/P1040959.JPG'
    );
    expect(screen.getByRole('link', { name: '2' })).toHaveAttribute('href', '/bilder/?page=1');
  });

  it('renders a gallery detail page and its return link', async () => {
    render(await GalleryDetailPage({ params: Promise.resolve({ slug: 'ferrari-365-gt-22-1967-1971' }) }));

    expect(screen.getByRole('heading', { name: 'Ferrari 365 GT 2+2 (1967-1971)' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Zurück zur Galerie/ })).toHaveAttribute('href', '/bilder/');
    expect(screen.getByRole('img', { name: 'Ferrari 365 GT 2+2 (1967-1971), Bild 1 von 10' })).toBeInTheDocument();
    expect(screen.queryByText(/Weitere Bilder dieser Sammlung/)).not.toBeInTheDocument();
  });

  it('renders different collections for each pagination page', () => {
    const collections = Array.from({ length: 80 }, (_, index) => ({
      slug: `car-${index}`,
      title: `Fahrzeug ${index}`,
      cover: `/images/gallery/car-${index}.jpg`,
      imageCount: 1,
    }));

    const { rerender } = render(<GalleryIndex collections={collections} />);
    expect(screen.getByRole('heading', { name: 'Fahrzeug 0' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Fahrzeug 20' })).not.toBeInTheDocument();

    jest.spyOn(require('next/navigation'), 'useSearchParams').mockReturnValue(new URLSearchParams('page=3'));
    rerender(<GalleryIndex collections={collections} />);
    expect(screen.getByRole('heading', { name: 'Fahrzeug 60' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Fahrzeug 0' })).not.toBeInTheDocument();
  });
});
