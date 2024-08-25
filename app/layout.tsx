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
  title: 'Cochin Dream Destinations | Kerala Taxi Cab Services',
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
          <link rel="preload" href="https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Innova/movn7u4wkdnpm3tivrk3" as="image" />
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
