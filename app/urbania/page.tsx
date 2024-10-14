import { Urbania } from '@/actions/urbania';
import LoadingChunk from '@/components/LoadingSkleton/LoadingChunkSkleton';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';



const ServerCarousel = dynamic(() => import('@/components/Carousel/ServerCarousel'));
const CallUsNowButtons = dynamic(() => import('@/components/GetInTouch/CallUsNowButton'));
const RateTableComponent = dynamic(() => import('@/components/RateTable/RateTable'))
const UrbaniaHead = dynamic(() => import('@/components/UrbaniaHead/UrbaniaHead'))
const UrbaniaImage = dynamic(() => import('@/components/UrbaniaHead/UrbaniaImage'))

export const metadata = {
  title: 'Kerala Urbania Rentals | Cochin Dream Destinations | Kerala Traveller Packages',
  description: 'List of available Urbania service packages with Cochin dream destinations',
  twitter: {
    card: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r',
    url: 'https://cochindreamdestinations.in/urbania',
    title: 'Cochin Dream Destinations | Kerala Traveller Packages',
    description: 'List of available traveller service packages with Cochin dream destinations',
  },
  openGraph: {
    title: 'Kerala Urbania Rentals | Cochin Dream Destinations | Kerala Traveller Packages',
    description: 'List of available Urbania service packages with Cochin dream destinations',
    url: 'https://cochindreamdestinations.in/urbania',
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

export default async function UrbaniaPage() {
  const res = await fetch("https://cochindreamdestinations.vercel.app/api/public/urbania", { method: "GET" });
  const results = await res.json();
  const imgli = await fetch("https://cochindreamdestinations.vercel.app/api/public/urbania/carousel", { method: 'GET' });
  const imagesList = await imgli.json();

  const components = results?.map((item: Urbania) => (
    <div key={item.id} id={item.id}>
      <ServerCarousel
        title={item.description}
        data={imagesList.filter((i: any) => i.vehicle_type === item.vehicle_type)[0]?.list}
      />
      <RateTableComponent
        key={item.id}
        id={item.vehicle_type}
        extra_km={item.extra_per_km}
        description={item.description}
      />
      <CallUsNowButtons />
    </div>
  ));
  return (
    <>
      <Suspense fallback={<div>Loading image...</div>}>
        <UrbaniaImage />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>      <UrbaniaHead />
      </Suspense>
      <Suspense fallback={<LoadingChunk />}>
        {components}
      </Suspense>
    </>
  );
}
