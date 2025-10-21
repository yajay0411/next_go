import './globals.scss';
import { Inria_Sans, Averia_Sans_Libre } from 'next/font/google';

import Provider from '@/core/Provider/Provider';

const inriaSans = Inria_Sans({
  variable: '--font-inria-sans',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const averiaSansLibre = Averia_Sans_Libre({
  variable: '--font-averia-sans-libre',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inriaSans.variable} ${averiaSansLibre.variable}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
