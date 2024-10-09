import dynamic from 'next/dynamic';
import { GetInTouch } from '@/components/GetInTouch/GetInTouch';
import { getReviews } from '@/actions/bus';
import { TaxiPackagesCarousel } from '@/components/Carousel/TaxiPackagesCarousel';
import Head from 'next/head';
import Link from 'next/link';
import { Suspense } from 'react';
import LoadingSkleton from '@/components/LoadingSkleton/LoadingSkleton';
import LoadingChunk from '@/components/LoadingSkleton/LoadingChunkSkleton';

const TestimonialCarousel = dynamic(() => import('@/components/Carousel/Testimonial'));
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

export default async function HomePage() {
  const reviews = await getReviews();

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
        <TestimonialCarousel data={reviews} title="Testimonials" />
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
