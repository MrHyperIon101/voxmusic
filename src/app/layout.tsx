import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://voxtrona.souvikbagchi.social'),
  title: {
    default: 'Voxtrona Music | Next-Gen Audio Experience',
    template: '%s | Voxtrona Music',
  },
  description: 'The ultimate audiophile music player for Android & Windows, featuring Meridian Audio spatial processing, lossless playback, and a stunning liquid glass interface.',
  keywords: [
    'Voxtrona', 'Music Player', 'Android Music Client', 'YouTube Music Client',
    'Spatial Audio', 'Meridian Audio', 'Lossless Audio', 'FLAC Player',
    'Hi-Res Audio', 'Gapless Playback', 'Bit-perfect', 'Audiophile',
    'Glassmorphism', 'Liquid UI', 'Best Android Music Player 2026'
  ],
  authors: [{ name: 'MrHyperIon101', url: 'https://github.com/MrHyperIon101' }],
  creator: 'Voxtrona Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://voxtrona.souvikbagchi.social',
    title: 'Voxtrona Music | Deploy the Core',
    description: 'Experience music like never before with Voxtrona. Native Spatial Audio, Meridian processing, and a sci-fi inspired liquid glass interface.',
    siteName: 'Voxtrona Music',
    images: [
      {
        url: '/hero-dancer.png', // Assuming this is a good OG image
        width: 1200,
        height: 630,
        alt: 'Voxtrona Music Hero Visual',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voxtrona Music',
    description: 'Next-Gen Audio Experience. Iconic. Now supersonic.',
    images: ['/hero-dancer.png'],
    creator: '@MrHyperIon101', // Placeholder or actual handle if known
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png', // Ideally should be a specific apple icon
  },
  alternates: {
    canonical: '/',
  },
};

import JsonLd from '@/components/StructuredData/JsonLd';
import FaqJsonLd from '@/components/StructuredData/FaqJsonLd';
import HowToJsonLd from '@/components/StructuredData/HowToJsonLd';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional head elements if needed */}
      </head>
      <body>
        <JsonLd />
        <FaqJsonLd />
        <HowToJsonLd />
        {children}
      </body>
    </html>
  );
}
