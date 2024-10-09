import { TravellerWithData } from '@/actions/traveller';
import ServerCarousel from '@/components/Carousel/ServerCarousel';
import CallUsNowButtons from '@/components/GetInTouch/CallUsNowButton';

import RateTablePredata from '@/components/RateTable/RateTablePreData';
import Head from 'next/head';

const carData = [
  {
    id: 'cm0o6vgsr0017r92wbi5nrt4k',
    name: 'Maruthi Swift',
    vehicle_type: 'swift',
    description: 'SWIFT Hactchback',
    pax: 3,
    extra_per_km: 15,
    data: [
      {
        id: 8119,
        number_of_days: '1 night - 2 days',
        max_km: 160,
        vehicle_id: 'swift',
        ac_rate: 3200,
        bata: 1200,
      },
      {
        id: 8120,
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        vehicle_id: 'swift',
        ac_rate: 4800,
        bata: 1800,
      },
      {
        id: 8121,
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        vehicle_id: 'swift',
        ac_rate: 6400,
        bata: 2400,
      },
      {
        id: 8122,
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        vehicle_id: 'swift',
        ac_rate: 8000,
        bata: 3000,
      },
      {
        id: 8123,
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        vehicle_id: 'swift',
        ac_rate: 9600,
        bata: 3600,
      },
      {
        id: 8124,
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        vehicle_id: 'swift',
        ac_rate: 11200,
        bata: 4200,
      },
      {
        id: 8125,
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        vehicle_id: 'swift',
        ac_rate: 12800,
        bata: 4800,
      },
      {
        id: 8126,
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        vehicle_id: 'swift',
        ac_rate: 14400,
        bata: 5400,
      },
      {
        id: 8127,
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        vehicle_id: 'swift',
        ac_rate: 16000,
        bata: 6000,
      },
    ],
  },
  {
    id: 'cm0o6vgsr0018r92wam27lwwp',
    name: 'Maruthi Swift Dzire',
    vehicle_type: 'swift_dzire',
    description: 'SWIFT Dzire Sedan',
    pax: 3,
    extra_per_km: 15,
    data: [
      {
        id: 8128,
        number_of_days: '1 night - 2 days',
        max_km: 160,
        vehicle_id: 'swift_dzire',
        ac_rate: 3200,
        bata: 1200,
      },
      {
        id: 8129,
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        vehicle_id: 'swift_dzire',
        ac_rate: 4800,
        bata: 1800,
      },
      {
        id: 8130,
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        vehicle_id: 'swift_dzire',
        ac_rate: 6400,
        bata: 2400,
      },
      {
        id: 8131,
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        vehicle_id: 'swift_dzire',
        ac_rate: 8000,
        bata: 3000,
      },
      {
        id: 8132,
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        vehicle_id: 'swift_dzire',
        ac_rate: 9600,
        bata: 3600,
      },
      {
        id: 8133,
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        vehicle_id: 'swift_dzire',
        ac_rate: 11200,
        bata: 4200,
      },
      {
        id: 8134,
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        vehicle_id: 'swift_dzire',
        ac_rate: 12800,
        bata: 4800,
      },
      {
        id: 8135,
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        vehicle_id: 'swift_dzire',
        ac_rate: 14400,
        bata: 5400,
      },
      {
        id: 8136,
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        vehicle_id: 'swift_dzire',
        ac_rate: 16000,
        bata: 6000,
      },
    ],
  },
  {
    id: 'cm0o6vgsr0019r92wq0qswejj',
    name: 'Toyota Etios',
    vehicle_type: 'etios',
    description: 'Etios Sedan',
    pax: 3,
    extra_per_km: 15,
    data: [
      {
        id: 8146,
        number_of_days: '1 night - 2 days',
        max_km: 160,
        vehicle_id: 'etios',
        ac_rate: 3200,
        bata: 1200,
      },
      {
        id: 8147,
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        vehicle_id: 'etios',
        ac_rate: 4800,
        bata: 1800,
      },
      {
        id: 8148,
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        vehicle_id: 'etios',
        ac_rate: 6400,
        bata: 2400,
      },
      {
        id: 8149,
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        vehicle_id: 'etios',
        ac_rate: 8000,
        bata: 3000,
      },
      {
        id: 8150,
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        vehicle_id: 'etios',
        ac_rate: 9600,
        bata: 3600,
      },
      {
        id: 8151,
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        vehicle_id: 'etios',
        ac_rate: 11200,
        bata: 4200,
      },
      {
        id: 8152,
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        vehicle_id: 'etios',
        ac_rate: 12800,
        bata: 4800,
      },
      {
        id: 8153,
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        vehicle_id: 'etios',
        ac_rate: 14400,
        bata: 5400,
      },
      {
        id: 8154,
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        vehicle_id: 'etios',
        ac_rate: 16000,
        bata: 6000,
      },
    ],
  },
  {
    id: 'cm0o6vgsr001ar92web83l7v1',
    name: 'SUZUKI ERTIGA',
    vehicle_type: 'ertiga',
    description: 'SUZUKI ERTIGA',
    pax: 5,
    extra_per_km: 18,
    data: [
      {
        id: 8137,
        number_of_days: '1 night - 2 days',
        max_km: 160,
        vehicle_id: 'ertiga',
        ac_rate: 3800,
        bata: 1200,
      },
      {
        id: 8138,
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        vehicle_id: 'ertiga',
        ac_rate: 5700,
        bata: 1800,
      },
      {
        id: 8139,
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        vehicle_id: 'ertiga',
        ac_rate: 7600,
        bata: 2400,
      },
      {
        id: 8140,
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        vehicle_id: 'ertiga',
        ac_rate: 9500,
        bata: 3000,
      },
      {
        id: 8141,
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        vehicle_id: 'ertiga',
        ac_rate: 11400,
        bata: 3600,
      },
      {
        id: 8142,
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        vehicle_id: 'ertiga',
        ac_rate: 13300,
        bata: 4200,
      },
      {
        id: 8143,
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        vehicle_id: 'ertiga',
        ac_rate: 15200,
        bata: 4800,
      },
      {
        id: 8144,
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        vehicle_id: 'ertiga',
        ac_rate: 17100,
        bata: 5400,
      },
      {
        id: 8145,
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        vehicle_id: 'ertiga',
        ac_rate: 19000,
        bata: 6000,
      },
    ],
  },
  {
    id: 'cm0o6vgsr001br92wn4jvxoiy',
    name: 'TOYOTA INNOVA',
    vehicle_type: 'innova',
    description: 'TOYOTA INNOVA',
    pax: 6,
    extra_per_km: 20,
    data: [
      {
        id: 8155,
        number_of_days: '1 night - 2 days',
        max_km: 160,
        vehicle_id: 'innova',
        ac_rate: 4400,
        bata: 1200,
      },
      {
        id: 8156,
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        vehicle_id: 'innova',
        ac_rate: 6600,
        bata: 1800,
      },
      {
        id: 8157,
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        vehicle_id: 'innova',
        ac_rate: 8800,
        bata: 2400,
      },
      {
        id: 8158,
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        vehicle_id: 'innova',
        ac_rate: 11000,
        bata: 3000,
      },
      {
        id: 8159,
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        vehicle_id: 'innova',
        ac_rate: 13200,
        bata: 3600,
      },
      {
        id: 8160,
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        vehicle_id: 'innova',
        ac_rate: 15400,
        bata: 4200,
      },
      {
        id: 8161,
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        vehicle_id: 'innova',
        ac_rate: 17600,
        bata: 4800,
      },
      {
        id: 8162,
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        vehicle_id: 'innova',
        ac_rate: 19800,
        bata: 5400,
      },
      {
        id: 8163,
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        vehicle_id: 'innova',
        ac_rate: 22000,
        bata: 6000,
      },
    ],
  },
  {
    id: 'cm0o6vgsr001cr92wfp8wwa48',
    name: 'TOYOTA INNOVA CRYSTA',
    vehicle_type: 'crysta',
    description: 'TOYOTA INNOVA CRYSTA',
    pax: 6,
    extra_per_km: 22,
    data: [
      {
        id: 8110,
        number_of_days: '1 night - 2 days',
        max_km: 160,
        vehicle_id: 'crysta',
        ac_rate: 5400,
        bata: 1200,
      },
      {
        id: 8111,
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        vehicle_id: 'crysta',
        ac_rate: 8100,
        bata: 1800,
      },
      {
        id: 8112,
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        vehicle_id: 'crysta',
        ac_rate: 10800,
        bata: 2400,
      },
      {
        id: 8113,
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        vehicle_id: 'crysta',
        ac_rate: 13500,
        bata: 3000,
      },
      {
        id: 8114,
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        vehicle_id: 'crysta',
        ac_rate: 16200,
        bata: 3600,
      },
      {
        id: 8115,
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        vehicle_id: 'crysta',
        ac_rate: 18900,
        bata: 4200,
      },
      {
        id: 8116,
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        vehicle_id: 'crysta',
        ac_rate: 21600,
        bata: 4800,
      },
      {
        id: 8117,
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        vehicle_id: 'crysta',
        ac_rate: 24300,
        bata: 5400,
      },
      {
        id: 8118,
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        vehicle_id: 'crysta',
        ac_rate: 27000,
        bata: 6000,
      },
    ],
  },
  {
    id: 'cm0o6vgsr001dr92w8levbtlx',
    name: 'TOYOTA INNOVA HYCROSS',
    vehicle_type: 'hycross',
    description: 'TOYOTA INNOVA HYCROSS',
    pax: 6,
    extra_per_km: 30,
    data: [
      {
        id: 8101,
        number_of_days: '1 night - 2 days',
        max_km: 160,
        vehicle_id: 'hycross',
        ac_rate: 6400,
        bata: 1500,
      },
      {
        id: 8102,
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        vehicle_id: 'hycross',
        ac_rate: 9100,
        bata: 2100,
      },
      {
        id: 8103,
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        vehicle_id: 'hycross',
        ac_rate: 11800,
        bata: 2700,
      },
      {
        id: 8104,
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        vehicle_id: 'hycross',
        ac_rate: 14500,
        bata: 3300,
      },
      {
        id: 8105,
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        vehicle_id: 'hycross',
        ac_rate: 17200,
        bata: 3900,
      },
      {
        id: 8106,
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        vehicle_id: 'hycross',
        ac_rate: 19900,
        bata: 4600,
      },
      {
        id: 8107,
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        vehicle_id: 'hycross',
        ac_rate: 22600,
        bata: 5200,
      },
      {
        id: 8108,
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        vehicle_id: 'hycross',
        ac_rate: 54300,
        bata: 5800,
      },
      {
        id: 8109,
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        vehicle_id: 'hycross',
        ac_rate: 28000,
        bata: 6400,
      },
    ],
  },
];

export default async function Pricing() {
  const imgres = await fetch(
    'https://cochindreamdestinations.vercel.app/api/public/packages/carousel',
    { method: 'GET' }
  );
  const imagesList = await imgres.json();
  const isImagesExistForId = (id: string) => {
    return imagesList.filter((i: any) => i.vehicle_type === id)[0]?.list?.length > 0;
  };

  const components = carData?.map((item: TravellerWithData) => (
    <div key={item.id} id={item.vehicle_type}>
      <Head>
        <title>Cochin Dream Destinations | Kerala Taxi Cab Services | Packages</title>
        <meta
          name="title"
          content="Cochin Dream Destinations | Kerala Taxi Cab Services | Packages"
        />
        <meta
          name="description"
          content="Various taxi packages curated according to client requirement. More than 10 years of experience in tourism sector with high number of satisfied clients"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cochindreamdestinations.in/package" />
        <meta
          property="og:title"
          content="Cochin Dream Destinations | Kerala Taxi Cab Services | Packages"
        />
        <meta
          property="og:description"
          content="Various taxi packages curated according to client requirement. More than 10 years of experience in tourism sector with high number of satisfied clients"
        />
        <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cochindreamdestinations.in/package" />
        <meta
          property="twitter:title"
          content="Cochin Dream Destinations | Kerala Taxi Cab Services | Packages"
        />
        <meta
          property="twitter:description"
          content="Various taxi packages curated according to client requirement. More than 10 years of experience in tourism sector with high number of satisfied clients"
        />
        <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
      </Head>
      {isImagesExistForId(item.vehicle_type) && (
        <ServerCarousel
          title={item.description}
          data={imagesList.filter((i: any) => i.vehicle_type === item.vehicle_type)[0]?.list}
        />
      )}
      <RateTablePredata
        key={item.id}
        data={item.data}
        extra_km={item.extra_per_km}
        description={item.description}
      />
      <CallUsNowButtons />
    </div>
  ));
  return <>{components}</>;
}
