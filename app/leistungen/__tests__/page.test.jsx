import { render, screen } from '@testing-library/react';
import LeistungenPage from '../page';

jest.mock('next/link', () => function MockLink({ children, ...props }) {
  return <a {...props}>{children}</a>;
});

describe('LeistungenPage', () => {
  it('renders local images for all detailed service cards', () => {
    render(<LeistungenPage />);

    const serviceImages = screen.getAllByRole('img');
    const detailedServiceImages = serviceImages.filter((image) => image.className === 'service-card-image');

    expect(detailedServiceImages).toHaveLength(20);
    expect(detailedServiceImages[0]).toHaveAttribute('src', '/images/services/achsvermessung-3.jpg');
    expect(detailedServiceImages.filter((image) => image.getAttribute('src').startsWith('/images/services/'))).toHaveLength(18);
  });

  it('renders images for overview-only services', () => {
    render(<LeistungenPage />);

    expect(screen.getByRole('img', { name: 'Alufelgen und Reifen' })).toHaveAttribute(
      'src',
      '/images/tires/reifen-raeder.jpg'
    );
    expect(screen.getByRole('img', { name: 'Fahrzeugbatterie im Werkstattservice' })).toHaveAttribute(
      'src',
      '/images/services/inspektion-bei-reifen-donis.jpg'
    );
    expect(screen.getByRole('img', { name: 'Reifen zur fachgerechten Entsorgung' })).toHaveAttribute(
      'src',
      '/images/tires/reifen-raeder.jpg'
    );
  });
});
