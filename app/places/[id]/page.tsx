import { PlaceDataType, getPlaceWithId, getSightsBasedonId } from '@/actions/places';
import { SightSeeingCarousel } from '@/components/Carousel/SightSeeingCarousel';
import CallUsNowButtons from '@/components/GetInTouch/CallUsNowButton';
import PlaceBanner from '@/components/PlaceDescription/PlaceBanner';

export default async function Page({ params }: any) {
  const { id } = params;
  const result: PlaceDataType | null = await getPlaceWithId(id);
  const sights = await getSightsBasedonId(id);
  return (
    <>
      <PlaceBanner result={result} />

      <SightSeeingCarousel data={sights} />
      <CallUsNowButtons />
    </>
  );
}

export async function generateStaticParams() {
  const posts = ['kochi', 'kovalam', 'munnar', 'vagamon', 'thekkady', 'kanyakumari', 'kollam'];

  return posts.map((post) => ({
    id: post,
  }));
}
