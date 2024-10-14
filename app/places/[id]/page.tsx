import { PlaceDataType, getPlaceWithId, getSightsBasedonId } from '@/actions/places';
import { SightSeeingCarousel } from '@/components/Carousel/SightSeeingCarousel';
import CallUsNowButtons from '@/components/GetInTouch/CallUsNowButton';
import PlaceBanner from '@/components/PlaceDescription/PlaceBanner';

export async function generateMetadata({params}:any) {
  const { id } = params;
  const result: PlaceDataType | null = await getPlaceWithId(id);
  return {
    title: `${result?.place} | Cochin Dream Destinations | Kerala Taxi Cab Services`,
    description: `${result?.description} High Quality and Most Affordable tour cabs services kerala`,
    twitter: {
      card: result?.image,
      url: `https://cochindreamdestinations.in/places/${result?.id}`,
      title: 'Cochin Dream Destinations | Kerala Taxi Cab Services',
      description: 'High Quality, Highly Trusted and Most Affordable tour cabs services kerala',
    },
    openGraph: {
      title: `${result?.place} | Cochin Dream Destinations | Kerala Taxi Cab Services`,
      description: result?.description,
      url: `https://cochindreamdestinations.in/places/${result?.id}`,
      siteName: 'Cochin Dream Destinations Taxi Service',
      images: [
        {
          url: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r', // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r', // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: result?.place,
        },
      ],
      videos: [
        {
          url: 'https://nextjs.org/video.mp4', // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
      audio: [
        {
          url: 'https://nextjs.org/audio.mp3', // Must be an absolute URL
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  }
};

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
  const posts = ['kochi', 'kovalam', 'munnar', 'vagamon', 'thekkady', 'kanyakumari', 'kollam', 'alappuzha', 'kumarakom'];

  return posts.map((post) => ({
    id: post,
  }));
}
