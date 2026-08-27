import './globals.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: {
    default: 'Reifen Donis | Reifen- & Autowerkstatt in Solingen',
    template: '%s | Reifen Donis',
  },
  description:
    'Reifen Donis – seit 1988 Ihre Reifen- und KFZ-Werkstatt in Solingen. Reifenwechsel, Inspektion, HU/AU, Bremsen, Klimaservice und mehr.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <a className="skip-link" href="#main-content">
          Direkt zum Inhalt
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
