import { Urbania } from '@/actions/urbania';
import LoadingChunk from '@/components/LoadingSkleton/LoadingChunkSkleton';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';



const ServerCarousel = dynamic(() => import('@/components/Carousel/ServerCarousel'));
const CallUsNowButtons = dynamic(() => import('@/components/GetInTouch/CallUsNowButton'));
const RateTableComponent = dynamic(() => import('@/components/RateTable/RateTable'))
const UrbaniaHead = dynamic(() => import('@/components/UrbaniaHead/UrbaniaHead'))
const UrbaniaImage = dynamic(() => import('@/components/UrbaniaHead/UrbaniaImage'))

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
