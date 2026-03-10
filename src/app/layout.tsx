import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'QLM Atlas Studio',
  description: 'Structured editorial cartography video generator'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
