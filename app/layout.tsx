import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'P.P. Maniya Education and Medical Trust',
  description: 'Serving society through education, healthcare, and social welfare initiatives. Dedicated to legacy, transparency, and compassion.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="font-sans bg-[#f8f9ff] text-[#0b1c30] overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
