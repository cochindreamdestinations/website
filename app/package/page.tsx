import { getAllCars, getCarCarouselImages } from '@/actions/cars';
import { Traveller } from '@/actions/traveller';
import ServerCarousel from '@/components/Carousel/ServerCarousel';
import CallUsNowButtons from '@/components/GetInTouch/CallUsNowButton';
import RateTableCar from '@/components/RateTable/RateTableCar';

import Image from 'next/image';

export default async function Pricing() {
  const results = await getAllCars();
  const imagesList = await getCarCarouselImages();
  const isImagesExistForId = (id: string) => {
    return imagesList.filter((i: any) => i.id === id)[0]?.list?.length > 0;
  };
  const components = results?.map((item: Traveller) => (
    <div key={item.id} id={item.id}>
      {isImagesExistForId(item.id) && (
        <ServerCarousel
          title={item.description}
          data={imagesList.filter((i: any) => i.id === item.id)[0]?.list}
        />
      )}
      <RateTableCar
        key={item.id}
        id={item.id}
        extra_km={item.extra_per_km}
        description={item.description}
      />
      <CallUsNowButtons />
    </div>
  ));
  return <>{components}</>;
}
