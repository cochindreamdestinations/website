import { Urbania } from '@/actions/urbania';

import ServerCarousel from '@/components/Carousel/ServerCarousel';
import CallUsNowButtons from '@/components/GetInTouch/CallUsNowButton';
import RateTableComponent from '@/components/RateTable/RateTable';
import UrbaniaHead from '@/components/UrbaniaHead/UrbaniaHead';
import UrbaniaImage from '@/components/UrbaniaHead/UrbaniaImage';

export default async function UrbaniaPage() {
  const res = await fetch("https://cochindreamdestinations.vercel.app/api/public/urbania",{method:"GET"});
  const results = await res.json();
  const imgli = await fetch("https://cochindreamdestinations.vercel.app/api/public/urbania/carousel", {method:'GET'});
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
      <UrbaniaImage />
      <UrbaniaHead />
      {components}
    </>
  );
}
