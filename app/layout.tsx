import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';
import Head from 'next/head';
import { Viewport } from 'next';
import LoadingSkleton from '@/components/LoadingSkleton/LoadingSkleton';
const WhatsAppFAB = dynamic(() => import('@/components/FAB/WhatsAppButton'));

const HeaderSearch = dynamic(
  () => import('@/components/Header/Header').then((mod) => mod.HeaderSearch),
  {
    ssr: false, // This option disables server-side rendering for this component
    loading: () => (
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/taxi">Taxi</a>
          </li>
          <li>
            <a href="/rentals">Rentals</a>
          </li>
          <li>
            <a href="/traveller">Traveller</a>
          </li>
          <li>
            <a href="/bus">Bus</a>
          </li>
        </ul>
      </nav>
    ), // Optional: A fallback component to show while loading
  }
);

const FooterLinks = dynamic(
  () => import('@/components/FooterLinks/FooterLinks').then((mod) => mod.FooterLinks),
  {
    ssr: false, // This option disables server-side rendering for this component
    loading: () => <footer >
      <ul>
        <li><a href="https://www.alive2directory.com/">Alive 2 Directory.com</a></li>
        <li><a href="https://www.greenydirectory.com/">Greeny Directory.com</a></li>
        <li><a href="https://www.direct-directory.com/">Direct-Directory.com</a></li>
      </ul>
    </footer>, // Optional: A fallback component to show while loading
  }
);

export const metadata = {
  title: 'Cochin Dream Destinations | Kerala Taxi Cab Services',
  description: 'High Quality and Most Affordable tour cabs services kerala',
  twitter: {
    card: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r',
    url: 'https://cochindreamdestinations.in',
    title: 'Cochin Dream Destinations | Kerala Taxi Cab Services',
    description: 'High Quality, Highly Trusted and Most Affordable tour cabs services kerala',
  },
  openGraph: {
    title: 'Cochin Dream Destinations | Kerala Taxi Cab Services',
    description: 'High Quality, Highly Trusted and Most Affordable tour cabs services kerala',
    url: 'https://cochindreamdestinations.in',
    siteName: 'Cochin Dream Destinations Taxi Service',
    images: [
      {
        url: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    videos: [
      {
        url: 'https://nextjs.org/video.mp4', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    audio: [
      {
        url: 'https://nextjs.org/audio.mp3', // Must be an absolute URL
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default async function RootLayout({ children }: { children: any }) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <Head>
          <ColorSchemeScript />
          <link rel="shortcut icon" href="/favicon.svg" />
          <link
            rel="preload"
            href="https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Innova/movn7u4wkdnpm3tivrk3"
            as="image"
          />
        </Head>
        <body>
          <MantineProvider theme={theme}>
            <SpeedInsights />
            <Suspense
              fallback={
                <nav>
                  <ul dir="row">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/taxi">Taxi</a>
                    </li>
                    <li>
                      <a href="/rentals">Rentals</a>
                    </li>
                    <li>
                      <a href="/traveller">Traveller</a>
                    </li>
                  </ul>
                </nav>
              }
            >
              <HeaderSearch />
            </Suspense>
            <Suspense fallback={<LoadingSkleton />}>{children}</Suspense>
            <Suspense fallback={<button>whatsapp</button>}>
              <WhatsAppFAB />
            </Suspense>
            <Suspense fallback={<footer><footer >
              <ul>
                <li><a href="https://www.alive2directory.com/">Alive 2 Directory.com</a></li>
                <li><a href="https://www.greenydirectory.com/">Greeny Directory.com</a></li>
                <li><a href="https://www.direct-directory.com/">Direct-Directory.com</a></li>
              </ul>
            </footer></footer>}>
              <FooterLinks />
            </Suspense>
          </MantineProvider>
          <Analytics />
        </body>
      </html>
    </SessionProvider>
  );
}
