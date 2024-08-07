import { HeroImageBackground } from '../components/hero/HeroComponent';
import { FeaturesGrid } from '@/components/Features/FeaturesGrid';
import WhatsAppFAB from '@/components/FAB/WhatsAppButton';
import { GetInTouch } from '@/components/GetInTouch/GetInTouch';
import { Suspense } from 'react';
import LoadingSkleton from '@/components/LoadingSkleton/LoadingSkleton';
import { StatsGroup } from '@/components/StatusGroup/StatusGroup';
import { getReviews } from '@/actions/bus';
import TestimonialCarousel from '@/components/Carousel/Testimonial';
import { TaxiPackagesCarousel } from '@/components/Carousel/TaxiPackagesCarousel';
import ServerCarousel from '@/components/Carousel/ServerCarousel';
import { DefaultReviews } from '@/actions/defaultKv';

const taxiData = [
  {
    id: 1,
    name: 'KOCHI AIRPORT TAXI',
    image: 'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/group_1',
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
    image: 'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/1',
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
  const reviewsadd = await DefaultReviews();
  const reviews = await getReviews();

  console.log('reviews ', reviews);
  return (
    <>
      <HeroImageBackground />
      <WhatsAppFAB />

      <FeaturesGrid />
      <TaxiPackagesCarousel data={taxiData} />
      <TestimonialCarousel data={reviews} title="Testimonials" />

      <GetInTouch />

      <ServerCarousel
        title="Happy Customers"
        data={[
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/enqyhgentwj1etwxehcn',
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/customers/nyn0vpxuc6hbp1lxkddz',
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/customers/bzjitcbhc2krzbkvvvld',
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/customers/k5n0ptylg7meebzfenpq',
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/customers/lewkwqqfsw9pdkju8bnb',
        ]}
      />
    </>
  );
}
