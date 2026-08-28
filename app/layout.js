import { Inter } from 'next/font/google';
import './globals.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

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
    <html lang="de" className={inter.variable}>
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
