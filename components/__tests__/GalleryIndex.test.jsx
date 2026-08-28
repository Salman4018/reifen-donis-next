import { render, screen } from '@testing-library/react';
import GalleryIndex from '../GalleryIndex';

jest.mock('next/navigation', () => ({
  usePathname: () => '/bilder/',
  useSearchParams: () => new URLSearchParams('page=3'),
}));

jest.mock('next/link', () => function MockLink({ children, ...props }) {
  return <a {...props}>{children}</a>;
});

jest.mock('next/image', () => function MockImage(props) {
  const { fill, ...imageProps } = props;
  return <img {...imageProps} />;
});

describe('GalleryIndex pagination', () => {
  it('renders only the requested page slice', () => {
    const collections = Array.from({ length: 62 }, (_, index) => ({
      slug: `car-${index}`,
      title: `Fahrzeug ${index}`,
      cover: `/images/gallery/car-${index}.jpg`,
      imageCount: 1,
    }));

    render(<GalleryIndex collections={collections} />);
    expect(screen.getByRole('heading', { name: 'Fahrzeug 60' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Fahrzeug 0' })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: '4' })).toHaveAttribute('aria-current', 'page');
  });

  it('uses zero-based query parameters for page links', () => {
    const collections = Array.from({ length: 20 }, (_, index) => ({
      slug: `car-${index}`,
      title: `Fahrzeug ${index}`,
      cover: `/images/gallery/car-${index}.jpg`,
      imageCount: 1,
    }));

    render(<GalleryIndex collections={collections} />);

    expect(screen.getByRole('link', { name: '1' })).toHaveAttribute('href', '/bilder/');
    expect(screen.getByRole('link', { name: '2' })).toHaveAttribute('href', '/bilder/?page=1');
    expect(screen.getByRole('link', { name: '3' })).toHaveAttribute('href', '/bilder/?page=2');
    expect(screen.getByRole('link', { name: '4' })).toHaveAttribute('href', '/bilder/?page=3');
  });
});
