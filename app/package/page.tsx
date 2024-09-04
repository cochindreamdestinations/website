import {  TravellerWithData } from '@/actions/traveller';
import ServerCarousel from '@/components/Carousel/ServerCarousel';
import CallUsNowButtons from '@/components/GetInTouch/CallUsNowButton';

import RateTablePredata from '@/components/RateTable/RateTablePreData';



export default async function Pricing() {
  const res = await fetch('https://cochindreamdestinations.vercel.app/api/public/packages', {method:'GET'})
  const results = await res.json();
  const imgres = await fetch('https://cochindreamdestinations.vercel.app/api/public/packages/carousel', {method:'GET'})
  const imagesList = await imgres.json();
  const isImagesExistForId = (id: string) => {
    return imagesList.filter((i: any) => i.vehicle_type === id)[0]?.list?.length > 0;
  };
  const components = results?.map((item: TravellerWithData) => (
    <div key={item.id} id={item.vehicle_type}>
      {isImagesExistForId(item.vehicle_type) && (
        <ServerCarousel
          title={item.description}
          data={imagesList.filter((i: any) => i.vehicle_type === item.vehicle_type)[0]?.list}
        />
      )}
      <RateTablePredata
        key={item.id}
        data={item.data}
        extra_km={item.extra_per_km}
        description={item.description}
      />
      <CallUsNowButtons />
    </div>
  ));
  return <>{components}</>;
}
