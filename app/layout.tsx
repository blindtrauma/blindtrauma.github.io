import type { Metadata } from 'next';
import { Cormorant_Garamond, Playfair_Display, DM_Sans, Great_Vibes } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';


import LoadingScreen from '@/components/layout/LoadingScreen';
import ogImage from '@/images/wedding_couple/wedding_couple_013.jpg';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmsans',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-greatvibes',
});

export const metadata: Metadata = {
  title: {
    default: 'Manan Bajaj Portfolio | Luxury Makeup & Photography',
    template: '%s | Manan Bajaj Portfolio',
  },
  description: 'Where Every Moment Becomes Forever. Luxury Bridal Makeup Artistry & Wedding Photography.',
  keywords: ['bridal makeup', 'wedding photography', 'luxury bridal', 'makeup artist', 'wedding photographer', 'Manan Bajaj Portfolio'],
  authors: [{ name: 'Manan Bajaj Portfolio' }],
  creator: 'Manan Bajaj Portfolio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lumierebridal.com',
    title: 'Manan Bajaj Portfolio | Luxury Makeup & Photography',
    description: 'Where Every Moment Becomes Forever. Luxury Bridal Makeup Artistry & Wedding Photography.',
    siteName: 'Manan Bajaj Portfolio',
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: 'Manan Bajaj Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manan Bajaj Portfolio | Luxury Makeup & Photography',
    description: 'Where Every Moment Becomes Forever. Luxury Bridal Makeup Artistry & Wedding Photography.',
    images: [ogImage.src],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${dmSans.variable} ${greatVibes.variable}`}>
      <body suppressHydrationWarning className="bg-cream text-charcoal font-dmsans antialiased">
        <LoadingScreen />

        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
