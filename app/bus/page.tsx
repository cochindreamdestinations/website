import { TravellerWithData } from '@/actions/traveller';
import ServerCarousel from '@/components/Carousel/ServerCarousel';
import CallUsNowButtons from '@/components/GetInTouch/CallUsNowButton';
import RateTableComponent from '@/components/RateTable/RateTable';
import RateTablePredata from '@/components/RateTable/RateTablePreData';

import BusHead from '@/components/bus/BusHead';

const busData = [
  {
    id: 'cm0o6vdy9000pr92wgbs8bihu',
    name: '26 SEATER BENZ',
    vehicle_type: 'bus_26_benz',
    description: '26 SEATER BENZ',
    pax: 26,
    extra_per_km: 40,
    data: [
      {
        id: 8164,
        number_of_days: '1 night - 2 days',
        max_km: 160,
        vehicle_id: 'bus_26_benz',
        ac_rate: 14000,
        bata: 2000,
      },
      {
        id: 8165,
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        vehicle_id: 'bus_26_benz',
        ac_rate: 21000,
        bata: 3000,
      },
      {
        id: 8166,
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        vehicle_id: 'bus_26_benz',
        ac_rate: 28000,
        bata: 4000,
      },
      {
        id: 8167,
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        vehicle_id: 'bus_26_benz',
        ac_rate: 35000,
        bata: 5000,
      },
      {
        id: 8168,
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        vehicle_id: 'bus_26_benz',
        ac_rate: 42000,
        bata: 6000,
      },
      {
        id: 8169,
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        vehicle_id: 'bus_26_benz',
        ac_rate: 49000,
        bata: 7000,
      },
      {
        id: 8170,
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        vehicle_id: 'bus_26_benz',
        ac_rate: 56000,
        bata: 8000,
      },
      {
        id: 8171,
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        vehicle_id: 'bus_26_benz',
        ac_rate: 63000,
        bata: 9000,
      },
      {
        id: 8172,
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        vehicle_id: 'bus_26_benz',
        ac_rate: 70000,
        bata: 10000,
      },
    ],
  },
  {
    id: 'cm0o6vdy9000qr92wlk4z2ady',
    name: '34 SEATER MINI BUS ',
    vehicle_type: 'bus_34',
    description: '34 SEATER MINI BUS ',
    pax: 34,
    extra_per_km: 40,
    data: [
      {
        id: 8173,
        number_of_days: '1 night - 2 days',
        max_km: 160,
        vehicle_id: 'bus_34',
        ac_rate: 17000,
        bata: 2000,
      },
      {
        id: 8174,
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        vehicle_id: 'bus_34',
        ac_rate: 25500,
        bata: 3000,
      },
      {
        id: 8175,
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        vehicle_id: 'bus_34',
        ac_rate: 34000,
        bata: 4000,
      },
      {
        id: 8176,
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        vehicle_id: 'bus_34',
        ac_rate: 42500,
        bata: 5000,
      },
      {
        id: 8177,
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        vehicle_id: 'bus_34',
        ac_rate: 51000,
        bata: 6000,
      },
      {
        id: 8178,
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        vehicle_id: 'bus_34',
        ac_rate: 59500,
        bata: 7000,
      },
      {
        id: 8179,
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        vehicle_id: 'bus_34',
        ac_rate: 68000,
        bata: 8000,
      },
      {
        id: 8180,
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        vehicle_id: 'bus_34',
        ac_rate: 76500,
        bata: 9000,
      },
      {
        id: 8181,
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        vehicle_id: 'bus_34',
        ac_rate: 85000,
        bata: 10000,
      },
    ],
  },
  {
    id: 'cm0o6vdy9000rr92we0wgnwhb',
    name: '35 SEATER BENZ ',
    vehicle_type: 'bus_35_benz',
    description: '35 SEATER BENZ ',
    pax: 35,
    extra_per_km: 45,
    data: [
      {
        id: 8182,
        number_of_days: '1 night - 2 days',
        max_km: 160,
        vehicle_id: 'bus_35_benz',
        ac_rate: 19000,
        bata: 2000,
      },
      {
        id: 8183,
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        vehicle_id: 'bus_35_benz',
        ac_rate: 28500,
        bata: 3000,
      },
      {
        id: 8184,
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        vehicle_id: 'bus_35_benz',
        ac_rate: 38000,
        bata: 4000,
      },
      {
        id: 8185,
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        vehicle_id: 'bus_35_benz',
        ac_rate: 47500,
        bata: 5000,
      },
      {
        id: 8186,
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        vehicle_id: 'bus_35_benz',
        ac_rate: 57000,
        bata: 6000,
      },
      {
        id: 8187,
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        vehicle_id: 'bus_35_benz',
        ac_rate: 66500,
        bata: 7000,
      },
      {
        id: 8188,
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        vehicle_id: 'bus_35_benz',
        ac_rate: 76000,
        bata: 8000,
      },
      {
        id: 8189,
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        vehicle_id: 'bus_35_benz',
        ac_rate: 85500,
        bata: 9000,
      },
      {
        id: 8190,
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        vehicle_id: 'bus_35_benz',
        ac_rate: 95000,
        bata: 10000,
      },
    ],
  },
  {
    id: 'cm0o6vdy9000sr92wljrwjqgt',
    name: '45 SEATER LUXURY BENZ GLIDER',
    vehicle_type: 'bus_45_benz',
    description: '45 SEATER LUXURY BENZ GLIDER',
    pax: 45,
    extra_per_km: 60,
    data: [
      {
        id: 8191,
        number_of_days: '1 night - 2 days',
        max_km: 160,
        vehicle_id: 'bus_45_benz',
        ac_rate: 25000,
        bata: 2000,
      },
      {
        id: 8192,
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        vehicle_id: 'bus_45_benz',
        ac_rate: 37500,
        bata: 3000,
      },
      {
        id: 8193,
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        vehicle_id: 'bus_45_benz',
        ac_rate: 38000,
        bata: 4000,
      },
      {
        id: 8194,
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        vehicle_id: 'bus_45_benz',
        ac_rate: 50000,
        bata: 5000,
      },
      {
        id: 8195,
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        vehicle_id: 'bus_45_benz',
        ac_rate: 62500,
        bata: 6000,
      },
      {
        id: 8196,
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        vehicle_id: 'bus_45_benz',
        ac_rate: 75000,
        bata: 7000,
      },
      {
        id: 8197,
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        vehicle_id: 'bus_45_benz',
        ac_rate: 87500,
        bata: 8000,
      },
      {
        id: 8198,
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        vehicle_id: 'bus_45_benz',
        ac_rate: 100000,
        bata: 9000,
      },
      {
        id: 8199,
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        vehicle_id: 'bus_45_benz',
        ac_rate: 112500,
        bata: 10000,
      },
    ],
  },
  {
    id: 'cm0o6vdy9000tr92wk7vv9o6t',
    name: '53 SEATER LUXURY MULTI BENZ GLIDER',
    vehicle_type: 'bus_53_benz',
    description: '53 SEATER LUXURY MULTI BENZ GLIDER',
    pax: 53,
    extra_per_km: 70,
    data: [
      {
        id: 8200,
        number_of_days: '1 night - 2 days',
        max_km: 160,
        vehicle_id: 'bus_53_benz',
        ac_rate: 29000,
        bata: 2000,
      },
      {
        id: 8201,
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        vehicle_id: 'bus_53_benz',
        ac_rate: 43500,
        bata: 3000,
      },
      {
        id: 8202,
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        vehicle_id: 'bus_53_benz',
        ac_rate: 58000,
        bata: 4000,
      },
      {
        id: 8203,
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        vehicle_id: 'bus_53_benz',
        ac_rate: 72500,
        bata: 5000,
      },
      {
        id: 8204,
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        vehicle_id: 'bus_53_benz',
        ac_rate: 87000,
        bata: 6000,
      },
      {
        id: 8205,
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        vehicle_id: 'bus_53_benz',
        ac_rate: 101500,
        bata: 7000,
      },
      {
        id: 8206,
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        vehicle_id: 'bus_53_benz',
        ac_rate: 116000,
        bata: 8000,
      },
      {
        id: 8207,
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        vehicle_id: 'bus_53_benz',
        ac_rate: 130500,
        bata: 9000,
      },
      {
        id: 8208,
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        vehicle_id: 'bus_53_benz',
        ac_rate: 145000,
        bata: 10000,
      },
    ],
  },
];

export const metadata = {
  title: 'Kerala Bus Rentals | Cochin Dream Destinations | Kerala Traveller Packages',
  description: 'List of available Bus service packages with Cochin dream destinations',
  twitter: {
    card: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r',
    url: 'https://cochindreamdestinations.in/bus',
    title: 'Cochin Dream Destinations | Kerala Traveller Packages',
    description: 'List of available traveller service packages with Cochin dream destinations',
  },
  openGraph: {
    title: 'Kerala Bus Rentals | Cochin Dream Destinations | Kerala Traveller Packages',
    description: 'List of available Bus service packages with Cochin dream destinations',
    url: 'https://cochindreamdestinations.in/bus',
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
        alt: 'Kerala Bus Rentals by Cochin Dream Destinations',
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
};

export default async function BusPage() {
  const imgres = await fetch('https://cochindreamdestinations.vercel.app/api/public/bus/carousel', {
    method: 'GET',
  });
  const imagesList = await imgres.json();

  const components = busData?.map((item: TravellerWithData) => (
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
      <BusHead />
      {components}
    </>
  );
}
