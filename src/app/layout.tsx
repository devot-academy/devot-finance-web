'use client'

import type { Metadata } from "next";
import { Mina, Roboto } from 'next/font/google';
import { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme'
 
const mina = Mina({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mina.className} ${roboto.className}`}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
 