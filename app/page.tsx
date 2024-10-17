import dynamic from 'next/dynamic';
import { GetInTouch } from '@/components/GetInTouch/GetInTouch';
import { getReviews } from '@/actions/bus';
import { TaxiPackagesCarousel } from '@/components/Carousel/TaxiPackagesCarousel';
import Head from 'next/head';
import Link from 'next/link';
import { Suspense } from 'react';
import LoadingSkleton from '@/components/LoadingSkleton/LoadingSkleton';
import LoadingChunk from '@/components/LoadingSkleton/LoadingChunkSkleton';

const ReviewCarousel = dynamic(() => import('@/components/GoogleReviews/ReviewCarsousel'));
const ServerCarousel = dynamic(() => import('@/components/Carousel/ServerCarousel'));
const WhatsAppFAB = dynamic(() => import('@/components/FAB/WhatsAppButton'));
const PhoneFAB = dynamic(() => import('@/components/FAB/PhoneButton'));
const FeaturesGrid = dynamic(
  () => import('@/components/Features/FeaturesGrid').then((mod) => mod.FeaturesGrid),
  {
    ssr: false, // This option disables server-side rendering for this component
    loading: () => <section>Loading...</section>, // Optional: A fallback component to show while loading
  }
);
const HeroImageBackground = dynamic(
  () => import('../components/hero/HeroComponent').then((mod) => mod.HeroImageBackground),
  {
    ssr: false, // This option disables server-side rendering for this component
    loading: () => (
      <img src="https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/b1zuzcfgsvu7fzkhinrl" />
    ), // Optional: A fallback component to show while loading
  }
);

const taxiData = [
  {
    id: 1,
    name: 'KOCHI AIRPORT TAXI',
    image:
      'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Stylsed/yznwtp50tjtjlyeiejgi',
    link: '/taxi',
  },
  {
    id: 2,
    name: 'SABARIMALA TAXI PACKAGES',
    image: 'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/crysta_4',
    link: '/sabarimala',
  },
  {
    id: 3,
    name: 'KERALA TAXI PACAKGES',
    image:
      'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Innova/mzfpypbsgml2ysv64hxl',
    link: '/package',
  },
  {
    id: 3,
    name: 'KERALA TEMPO TRAVELLER',
    image:
      'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/prlrpohyx89eiun8h11d',
    link: '/traveller',
  },
  {
    id: 4,
    name: 'KERALA URBANIA RENTALS',
    link: '/urbania',
    image:
      'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/zp5vnssxozioffctpqoe',
  },
];


export const metadata = {
  title: 'Kerala Taxi - Kerala Taxi Packages - Kochi Taxi| Cochin Dream Destinations ',
  description: 'Kerala Taxi - Kerala Taxi Packages - Kochi Taxi Cochin dream destinations',
  twitter: {
    card: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r',
    url: 'https://cochindreamdestinations.in',
    title: 'Kerala Taxi - Kerala Taxi Packages - Kochi Taxi | Cochin Dream Destinations | Kerala Taxi Cab Services | Other Links',
    description: 'Kerala Taxi - Kerala Taxi Packages - Kochi Taxi taxi service packages with Cochin dream destinations',
  },
  openGraph: {
    title: 'Kerala Taxi - Kerala Taxi Packages - Kochi Taxi | Cochin Dream Destinations | Kerala Taxi Cab Services',
    description: 'List of available taxi service packages with Cochin dream destinations',
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


export default async function HomePage() {
  

  return (
    <>
      <Head>
        <Link
          rel="preload"
          as="image"
          type="image/webp"
          href="https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/b1zuzcfgsvu7fzkhinrl"
        />
      </Head>
      <Suspense
        fallback={
          <img src="https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/b1zuzcfgsvu7fzkhinrl" />
        }
      >
        <HeroImageBackground />
      </Suspense>

      <WhatsAppFAB />
      <PhoneFAB />
      <Suspense fallback={<LoadingSkleton />}>
        <FeaturesGrid />
      </Suspense>
      <Suspense fallback={<LoadingChunk />}>
        <TaxiPackagesCarousel data={taxiData} />
      </Suspense>

      <Suspense fallback={<LoadingSkleton />}>
        <ReviewCarousel/>
      </Suspense>

      <GetInTouch />
      

      <ServerCarousel
        title="Happy Customers"
        data={[
          'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Reviews/resized/t2wgyjzb5qdri1o0720e',
          'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Reviews/resized/c6vemjeejldww3aq2h81',
          'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Reviews/resized/m1gmbkjtlritllvelcbw',
          'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Reviews/resized/b0io6kt1cwqjhnevzo3f',
          'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Reviews/resized/sxpaqcqkepnbdumh1psn',
          'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Reviews/resized/dxwxnsex96pubmbo2cqi',
          'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/1000145440_ma1g5f',
          'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/1000145443_sreyh5',
        ]}
      />
    </>
  );
}
