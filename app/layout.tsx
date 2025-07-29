import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ImmobilierDAO - Location Premium Marrakech & Tanger',
  description: 'Découvrez nos propriétés d\'exception au Maroc. Location premium avec service haut de gamme à Marrakech et Tanger.',
  keywords: 'location, immobilier, Marrakech, Tanger, Maroc, villa, riad, premium, DAO',
  openGraph: {
    title: 'ImmobilierDAO - Location Premium',
    description: 'Propriétés d\'exception au Maroc',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ImmobilierDAO - Location Premium',
    description: 'Propriétés d\'exception au Maroc',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}