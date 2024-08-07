import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { HeaderSearch } from '@/components/Header/Header';
import { FooterLinks } from '@/components/FooterLinks/FooterLinks';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import WhatsAppFAB from '@/components/FAB/WhatsAppButton';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';

export const metadata = {
  title: 'TripWagon | Kerala Taxi Cab Services',
  description: 'High Quality and Most Affordable tour cabs services kerala',
};

export default async function RootLayout({ children }: { children: any }) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <head>
          <ColorSchemeScript />
          <link rel="shortcut icon" href="/favicon.svg" />
          <link rel="preload" href="/cars.webp" as="image" />
          <meta
            name="viewport"
            content="minimum-scale=1, maximum-scale=2, initial-scale=1, width=device-width, user-scalable=no"
          />
        </head>
        <body>
          <MantineProvider theme={theme}>
            <SpeedInsights />
            <HeaderSearch />
            {children}
            <WhatsAppFAB />
            <FooterLinks />
          </MantineProvider>
          <Analytics />
        </body>
      </html>
    </SessionProvider>
  );
}
