import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Soulcare - Hypnotherapy & Healing Center | Heal Your Mind, Restore Your Inner Peace',
  description: 'Professional hypnotherapy and holistic healing services. Transform your life through clinical hypnotherapy, energy healing, past life regression, and spiritual counseling.',
  keywords: 'hypnotherapy, energy healing, reiki, past life regression, spiritual counseling, meditation, sound healing',
  authors: [{ name: 'Soulcare Hypnotherapy and Healing Center' }],
  openGraph: {
    title: 'Soulcare - Hypnotherapy & Healing Center',
    description: 'Heal Your Mind. Restore Your Inner Peace.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

