import getAllTravelerInsideImages, {
  RateList,
  Traveller,
  TravellerWithData,
  getTravelerCarouselImages,
} from '@/actions/traveller';
import ServerCarousel from '@/components/Carousel/ServerCarousel';
import CallUsNowButtons from '@/components/GetInTouch/CallUsNowButton';
import RateTableComponent from '@/components/RateTable/RateTable';
import RateTablePredata from '@/components/RateTable/RateTablePreData';
import TempoTravellerHeading from '@/components/TempTravellerHeading/TempoTravellerHeading';

export default async function Pricing() {

  const res = await fetch('http://localhost:3000/api/public/traveller', {method:'GET'})
  const results = await res.json();
  const imgres = await fetch('http://localhost:3000/api/public/traveller/carousel', {method:'GET'})
  const imagesList = await imgres.json();
  
  const components = results?.map((item: TravellerWithData) => (
    <div key={item.id} id={item.vehicle_type}>
      <ServerCarousel
        title={item.description}
        data={imagesList.filter((i: any) => i.vehicle_type === item.vehicle_type)[0]?.list}
      />
      <RateTablePredata
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
      <TempoTravellerHeading />
      {components}
    </>
  );
}
