import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Voxtrona Music',
  description: 'Iconic. Now supersonic.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
