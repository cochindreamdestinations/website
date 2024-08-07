import { Urbania, getUrbaniaCarouselImages } from '@/actions/urbania';
import getAllUrbaniaTypes from '@/actions/urbania';
import { CardsCarousel } from '@/components/Carousel/Carousel';
import ServerCarousel from '@/components/Carousel/ServerCarousel';
import CallUsNowButtons from '@/components/GetInTouch/CallUsNowButton';
import RateTableComponent from '@/components/RateTable/RateTable';
import UrbaniaHead from '@/components/UrbaniaHead/UrbaniaHead';
import UrbaniaImage from '@/components/UrbaniaHead/UrbaniaImage';

export default async function UrbaniaPage() {
  const results = await getAllUrbaniaTypes();
  const imagesList = await getUrbaniaCarouselImages();
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
      <UrbaniaImage />
      <UrbaniaHead />
      {components}
    </>
  );
}
