import getAllTravelerInsideImages, {
  RateList,
  Traveller,
  getTravelerCarouselImages,
} from '@/actions/traveller';
import ServerCarousel from '@/components/Carousel/ServerCarousel';
import CallUsNowButtons from '@/components/GetInTouch/CallUsNowButton';
import RateTableComponent from '@/components/RateTable/RateTable';
import TempoTravellerHeading from '@/components/TempTravellerHeading/TempoTravellerHeading';

export default async function Pricing() {
  const results = await getAllTravelerInsideImages();

  const imagesList = await getTravelerCarouselImages();
  console.log('results list list', results);
  const components = results?.map((item: Traveller) => (
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
      <TempoTravellerHeading />
      {components}
    </>
  );
}
