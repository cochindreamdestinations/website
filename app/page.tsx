import dynamic from 'next/dynamic';
import { HeroImageBackground } from '../components/hero/HeroComponent';
import { FeaturesGrid } from '@/components/Features/FeaturesGrid';
import { GetInTouch } from '@/components/GetInTouch/GetInTouch';
import { getReviews } from '@/actions/bus';
import { TaxiPackagesCarousel } from '@/components/Carousel/TaxiPackagesCarousel';
import Head from 'next/head';

const TestimonialCarousel = dynamic(() => import('@/components/Carousel/Testimonial'));
const ServerCarousel = dynamic(() => import('@/components/Carousel/ServerCarousel'));
const WhatsAppFAB = dynamic(() => import('@/components/FAB/WhatsAppButton'));
const PhoneFAB = dynamic(() => import('@/components/FAB/PhoneButton'));

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
        <link
          rel="preload"
          href="https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Innova/movn7u4wkdnpm3tivrk3"
        />
      </Head>
      <HeroImageBackground />
      <WhatsAppFAB />
      <PhoneFAB />

      <FeaturesGrid />
      <TaxiPackagesCarousel data={taxiData} />

      <TestimonialCarousel data={reviews} title="Testimonials" />

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
