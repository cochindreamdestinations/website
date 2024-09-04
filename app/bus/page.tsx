
import { TravellerWithData } from '@/actions/traveller';
import ServerCarousel from '@/components/Carousel/ServerCarousel';
import CallUsNowButtons from '@/components/GetInTouch/CallUsNowButton';
import RateTableComponent from '@/components/RateTable/RateTable';

import BusHead from '@/components/bus/BusHead';

export default async function BusPage() {
  const res = await fetch('http://localhost:3000/api/public/bus', {method:'GET'})
  const results = await res.json();
  const imgres = await fetch('http://localhost:3000/api/public/bus/carousel', {method:'GET'})
  const imagesList = await imgres.json();
  const components = results?.map((item: TravellerWithData) => (
    <div key={item.id} id={item.vehicle_type}>
      <ServerCarousel
        title={item.description}
        data={imagesList.filter((i: any) => i.vehicle_type === item.vehicle_type)[0]?.list}
      />
      <RateTableComponent
        key={item.id}
        data={item.data}
        extra_km={item.extra_per_km}
        description={item.description}
      />
      <CallUsNowButtons />
    </div>
  ));
  return (
    <>
      <BusHead />
      {components}
    </>
  );
}
