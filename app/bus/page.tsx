import getAllBusTypes, { getBusCarouselImages } from '@/actions/bus';
import { Urbania } from '@/actions/urbania';
import ServerCarousel from '@/components/Carousel/ServerCarousel';
import CallUsNowButtons from '@/components/GetInTouch/CallUsNowButton';
import RateTableComponent from '@/components/RateTable/RateTable';

import BusHead from '@/components/bus/BusHead';

export default async function BusPage() {
  const results = await getAllBusTypes();
  const imagesList = await getBusCarouselImages();
  const components = results?.map((item: Urbania) => (
    <div key={item.id} id={item.id}>
      <ServerCarousel
        title={item.description}
        data={imagesList.filter((i: any) => i.id === item.id)[0]?.list}
      />
      <RateTableComponent
        key={item.id}
        id={item.id}
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
