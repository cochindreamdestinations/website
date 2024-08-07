import { db } from '@/lib/db';

export interface PlaceDataType {
  id: string;
  place: string;
  description: string;
  image: string;
  category: string;
}

/**
 * Gets all places
 * @returns {Promise<PlaceDataType[]>}
 */
export const getAllPlaces = async (): Promise<PlaceDataType[]> => {
  const result = await db.touristPlace.findMany({});
  return result;
};

/**
 * Only used to add default values of places
 * @param formData
 */
export const addDefaultValues = async (formData: FormData) => {
  'use server';
  try {
    const data = [
      {
        id: 'kochi',
        place: 'Kochi',
        description:
          'The Major city in Kerala also known as the Queen of Arabian Sea, Cochin (Kochi) is well known over the world from the ancient times as spice trade centre of India and was explored by many countries. The foot prints of those countries still exists in cochin and the visitors can experience it at the Fort Cochin, Dutch palace, Jewish synagogue, Chinese fishing net and the grave of Vasco Da Gama the famous Portuguese sailor.',
        image:
          'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/ae4mtinb0cacwj3f8uya',
        category: 'Beach',
      },
    ];
    const result = await db.touristPlace.createMany({ data: data });
    return result;
  } catch (e) {
    console.log('Error in get user by email', e);
    return null;
  }
};

export const getSightsBasedonId = async (id: string) => {
  const result = await db.sightSeeingSpots.findMany({
    where: {
      place_id: id,
    },
  });
  return result;
};

export const addSightSeeing = async (formData: FormData) => {
  'use server';
  const data = [
    {
      id: 1,
      place_id: 'kochi',
      sight_name: 'KERALA KATHAKALI CENTRE',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/o9djorcg6tbzz23zp4cy',
      carousel_images: [],
      location: '',
    },
    {
      id: 2,
      place_id: 'kochi',
      sight_name: 'EDAPPALI CHURCH',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/fvrvw4uzeuhw46fkmxca',
      carousel_images: [],
      location: '',
    },
    {
      id: 3,
      place_id: 'kochi',
      sight_name: 'KASHI ART GALLERY',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/uml1z7hpiq7fnojuxvly',
      carousel_images: [],
      location: '',
    },
    {
      id: 4,
      place_id: 'kochi',
      sight_name: 'CHERAI BEACH',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/rhrl7wqyacxhkbae4pi2',
      carousel_images: [],
      location: '',
    },
    {
      id: 5,
      place_id: 'kochi',
      sight_name: 'KERALA FOLKLORE MUSEUM',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/sntlgmwa4010qjbsfk40',
      carousel_images: [],
      location: '',
    },
    {
      id: 6,
      place_id: 'thekkady',
      sight_name: 'KALARI CENTRE',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/e3wjkteyk9soeywydyw4',
      carousel_images: [],
      location: '',
    },
    {
      id: 7,
      place_id: 'thekkady',
      sight_name: 'SPICE GARDEN',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/ab9fw38jpbtsjjwotuet',
      carousel_images: [],
      location: '',
    },
    {
      id: 8,
      place_id: 'thekkady',
      sight_name: 'PERIYAR LAKE',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/oqgy8iluml32rydq1ne3',
      carousel_images: [],
      location: '',
    },
    {
      id: 9,
      place_id: 'thekkady',
      sight_name: 'PERIYAR WILDLIFE SANCTURY',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/eodg3gpobyuxj6kdjicm',
      carousel_images: [],
      location: '',
    },
    {
      id: 10,
      place_id: 'alappuzha',
      sight_name: 'HOUSE BOATS',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/grkdoczhuhtexchjvgyb',
      carousel_images: [],
      location: '',
    },
    {
      id: 11,
      place_id: 'alappuzha',
      sight_name: 'INTERNATIONAL COIR MUSEUM',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/fewsfz87ia2laptfhbyr',
      carousel_images: [],
      location: '',
    },
    {
      id: 12,
      place_id: 'alappuzha',
      sight_name: 'BOATING',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/enlge1yew233gbp6i9bb',
      carousel_images: [],
      location: '',
    },
    {
      id: 13,
      place_id: 'alappuzha',
      sight_name: 'REVI KARUNAKARAN MEMORIAL MUSEUM',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/xrnkffpgrcj438fswaed',
      carousel_images: [],
      location: '',
    },
    {
      id: 14,
      place_id: 'munnar',
      sight_name: 'ATTUKAL WATERFALLS',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/xrnkffpgrcj438fswaed',
      carousel_images: [],
      location: '',
    },
    {
      id: 15,
      place_id: 'munnar',
      sight_name: 'MATTUPETTY RESERVOIR',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/xwfo1zd2a4upxviz9khk',
      carousel_images: [],
      location: '',
    },
    {
      id: 16,
      place_id: 'munnar',
      sight_name: 'ERAVIKULAM NATIONAL PARK',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/l3cks8jx4elktax6bufz',
      carousel_images: [],
      location: '',
    },
    {
      id: 17,
      place_id: 'munnar',
      sight_name: 'KOLUKKUMALAI TEA ESTATE',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/dd5a9j3srxycy6ssw5s3',
      carousel_images: [],
      location: '',
    },
    {
      id: 18,
      place_id: 'vagamon',
      sight_name: 'BARREN HILLS',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/lrzu8vwrdwm4vapmus4a',
      carousel_images: [],
      location: '',
    },
    {
      id: 19,
      place_id: 'vagamon',
      sight_name: 'PINE FOREST',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/tzh2sqezcfgnwdv1uiim',
      carousel_images: [],
      location: '',
    },
    {
      id: 33,
      place_id: 'vagamon',
      sight_name: 'VAGAMON LAKE',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/lzmydvc7qn5yn10rftm5',
      carousel_images: [],
      location: '',
    },
    {
      id: 20,
      place_id: 'vagamon',
      sight_name: 'VAGAMON KURISHUMALA',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/o9i6unotm0ymvus9cfe4',
      carousel_images: [],
      location: '',
    },
    {
      id: 21,
      place_id: 'kovalam',
      sight_name: 'PADMANABHASWAMY TEMPLE',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/soed1msn4vfrkrsjywn8',
      carousel_images: [],
      location: '',
    },
    {
      id: 22,
      place_id: 'kovalam',
      sight_name: 'KOVALAM LIGHT HOUSE',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/liqk5i64hluxmeactmpg',
      carousel_images: [],
      location: '',
    },
    {
      id: 23,
      place_id: 'kovalam',
      sight_name: 'KOVALAM BEACH',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/nv4lsdivurfaidajtrsc',
      carousel_images: [],
      location: '',
    },
    {
      id: 24,
      place_id: 'kovalam',
      sight_name: 'POOVAR BACKWATERS',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/dcnwj0eowhcunkqtwbee',
      carousel_images: [],
      location: '',
    },
    {
      id: 25,
      place_id: 'kollam',
      sight_name: 'JADAYU STATUE',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/dcnwj0eowhcunkqtwbee',
      carousel_images: [],
      location: '',
    },
    {
      id: 26,
      place_id: 'kollam',
      sight_name: 'THENMALA ECO TOURISM',
      sight_image:
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/sightseeing/dcnwj0eowhcunkqtwbee',
      carousel_images: [],
      location: '',
    },
  ];
  const result = await db.sightSeeingSpots.createMany({ data: data });
  return result;
};
/**
 * Adding carousel images for cars
 * @param formData
 * @returns
 */

export const addCarouselImages = async (formData: FormData) => {
  'use server';
  const data = [
    {
      id: 'traveller_ultra_luxury_08',
      vehicle_type: 'traveller',
      title: 'ULTRA LUXURY TEMPO TRAVELLER IMAGES',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/glwbzppvwrqlmlfs7hnm',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/j3ncafbvumzzg0sau245',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/yevhmurjudhwjz63pkhi',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/hnmhphfn9vd0nddosku2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_1',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/inside_2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/j3ncafbvumzzg0sau245',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/chi36huby8tlul2nbvz3',
      ],
    },
    {
      id: 'traveller_ultra_luxury_10',
      vehicle_type: 'traveller',
      title: '10 SEATER LUXURY TEMPO TRAVELLER IMAGES',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/euf1asoo8ozsxg1prz42',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/dj4jd0rqjjzqvq0is1oh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/f8ppiwq0u5wobuwnbfm6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jhx7gyldxejlbmq6jtlj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/s1bx3ed4grfujssv0xt6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/k8kqmmrkbbs9ksgultw2',
      ],
    },
    {
      id: 'traveller_premium_10',
      vehicle_type: 'traveller',
      title: '10 SEATER PREMIUM TEMPO TRAVELLER IMAGES',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/ivygitotxycfzxibrivd',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/zmboxeuuxb9sx2lvhnb0',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/tbtcv5ouq8atoxaimc29',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_3',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jgbaw4yifjdd2vpvx7uk',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/a2ny9xm7mvmfib9rprso',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/chi36huby8tlul2nbvz3',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/ivygitotxycfzxibrivd',
      ],
    },
    {
      id: 'traveller_premium_12',
      vehicle_type: 'traveller',
      title: '10-12 SEATER EXECUTIVE TEMPO TRAVELLER IMAGES',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jgbaw4yifjdd2vpvx7uk',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/ez2mrbrjsb7bear64wmx',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/dj4jd0rqjjzqvq0is1oh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/f8ppiwq0u5wobuwnbfm6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jhx7gyldxejlbmq6jtlj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/s1bx3ed4grfujssv0xt6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/k8kqmmrkbbs9ksgultw2',
      ],
    },
    {
      id: 'traveller_premium_17',
      vehicle_type: 'traveller',
      title: '17 SEATER PREMIUM TEMPO TRAVELLER IMAGES',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/euf1asoo8ozsxg1prz42',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/dj4jd0rqjjzqvq0is1oh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/f8ppiwq0u5wobuwnbfm6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jhx7gyldxejlbmq6jtlj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/s1bx3ed4grfujssv0xt6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/k8kqmmrkbbs9ksgultw2',
      ],
    },
    {
      id: 'traveller_premium_20',
      title: '20 SEATER PREMIUM TEMPO TRAVELLER IMAGES',
      vehicle_type: 'traveller',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_5',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/euf1asoo8ozsxg1prz42',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/dj4jd0rqjjzqvq0is1oh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/k8kqmmrkbbs9ksgultw2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jhx7gyldxejlbmq6jtlj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/s1bx3ed4grfujssv0xt6',
      ],
    },
    {
      id: 'traveller_premium_26',
      title: '26 SEATER PREMIUM TEMPO TRAVELLER IMAGES',
      vehicle_type: 'traveller',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/hyuiiiw4zccol9jatwhj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/euf1asoo8ozsxg1prz42',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/dj4jd0rqjjzqvq0is1oh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_4',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jhx7gyldxejlbmq6jtlj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/s1bx3ed4grfujssv0xt6',
      ],
    },
    {
      id: 'traveller_executive_12',
      vehicle_type: 'traveller',
      title: '12 SEATER EXECUTIVE TEMPO TRAVELLER IMAGES',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/euf1asoo8ozsxg1prz42',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/dj4jd0rqjjzqvq0is1oh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/f8ppiwq0u5wobuwnbfm6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jhx7gyldxejlbmq6jtlj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/s1bx3ed4grfujssv0xt6',
      ],
    },
    {
      id: 'traveller_executive_17',
      vehicle_type: 'traveller',
      title: '17 SEATER EXECUTIVE TEMPO TRAVELLER IMAGES',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/euf1asoo8ozsxg1prz42',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/dj4jd0rqjjzqvq0is1oh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/f8ppiwq0u5wobuwnbfm6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jhx7gyldxejlbmq6jtlj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/s1bx3ed4grfujssv0xt6',
      ],
    },
    {
      id: 'traveller_executive_20',
      vehicle_type: 'traveller',
      title: '20 SEATER EXECUTIVE TEMPO TRAVELLER IMAGES',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/rmup4b6wvkg3rh1iepwu',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/euf1asoo8ozsxg1prz42',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/dj4jd0rqjjzqvq0is1oh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/f8ppiwq0u5wobuwnbfm6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jhx7gyldxejlbmq6jtlj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/s1bx3ed4grfujssv0xt6',
      ],
    },
    {
      id: 'traveller_executive_26',
      vehicle_type: 'traveller',
      title: '26 SEATER EXECUTIVE TEMPO TRAVELLER IMAGES',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/euf1asoo8ozsxg1prz42',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/or9qny9fxtczbepwvo3r',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/f8ppiwq0u5wobuwnbfm6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/jhx7gyldxejlbmq6jtlj',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/traveller/s1bx3ed4grfujssv0xt6',
      ],
    },
  ];
  const result = await db.carouselImages.createMany({ data: data });
  return result;
};

export const addCarouselImagesUrbania = async (formData: FormData) => {
  'use server';
  const data = [
    {
      id: 'urbania_15_premium',
      vehicle_type: 'urbania',
      title: '15 SEATER PREMIUM URBANIA IN KERALA',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/nff58q9vbs5gd8n5l1nl',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/zp5vnssxozioffctpqoe',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/lui6keqwuzn7cabnrkim',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/dzx6d0qbubi7ewctmktm',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/bmucesyidjtbpq5okrcb',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/dzx6d0qbubi7ewctmktm',
      ],
    },
    {
      id: 'urbania_15_luxury',
      title: '15 SEATER LUXURY URBANIA IN KERALA',
      vehicle_type: 'urbania',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/nff58q9vbs5gd8n5l1nl',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/zp5vnssxozioffctpqoe',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/lui6keqwuzn7cabnrkim',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/dzx6d0qbubi7ewctmktm',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/bmucesyidjtbpq5okrcb',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/dzx6d0qbubi7ewctmktm',
      ],
    },
  ];
  const result = await db.carouselImages.createMany({ data: data });
  return result;
};

export const addCarouselImagesBus = async (formData: FormData) => {
  'use server';
  const data = [
    {
      id: 'bus_26_benz',
      vehicle_type: 'bus',
      title: '26 SEATER BENZ IN KERALA',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/hzfx8rh6ewhahzydbfeh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/wcx1qqhmsezz8nye6umt',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/o7avkq0rcdfxwagazosv',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/rnm9ypzmnkveeungss8t',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/zon0wr9mflhiugbiiveo',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/or9vcnkpyknh2ciatu3d',
      ],
    },
    {
      id: 'bus_34',
      vehicle_type: 'bus',
      title: '34 SEATER MINI BUS IN KERALA',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/vmjhfbxjsll2slgi3suy',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/zhuzajuknhdkzwm7zhxi',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/wki84n0cee7tu9qe8wft',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/i5gspuvrciaazy4fdclp',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/ik0z0otcoffo0usxuz9g',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/qk0hiqlekermwa1w3vfs',
      ],
    },
    {
      id: 'bus_35_benz',
      vehicle_type: 'bus',
      title: '35 SEATER BENZ IN KERALA',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/mf9jl49uagiaknh78zmd',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/zhuzajuknhdkzwm7zhxi',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/dzjzktbtffq0a6mtg7o8',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/rkbu8yhxbexfucuc5xd1',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/ctukjdobhhdpugrjblq6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/wki84n0cee7tu9qe8wft',
      ],
    },
    {
      id: 'bus_45_benz',
      vehicle_type: 'bus',
      title: '45 SEATER LUXURY BENZ GLIDER IN KERALA',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/jypqrqwtmyn9ajlzqrsu',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/ctukjdobhhdpugrjblq6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/bsv85p5obbkyqx6f90vh',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/ctukjdobhhdpugrjblq6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/zwvrrfhytl0nbmjwdkja',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/qiceyts4oiuyl2xgw2pe',
      ],
    },
    {
      id: 'bus_53_benz',
      vehicle_type: 'bus',
      title: '53 SEATER LUXURY MULTI BENZ GLIDER IN KERALA',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus/lknnhqkbbevdzpsuwdsk',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/cbghp0hzz6wk2zgxsxmk',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/sawslvy9sloriizew1j4',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/pcqpd5d2ampudrcwvm9m',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/biqz7qqhbinoktb3ug9h',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/bus_new/ihairm1yj3brtcabyqy4',
      ],
    },
  ];
  const result = await db.carouselImages.createMany({ data: data });
  return result;
};

export const addCarouselImagesSedan = async (formData: FormData) => {
  'use server';
  const data = [
    {
      id: 'sedan_taxi',
      vehicle_type: 'car',
      title: 'SEDAN / SWIFT DEZIRE',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/swift/mcyvy6yunwxdmrfgn9vk',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/swift/b148q8cxhqzkjqbtpwpl',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/swift/yrui6barte93wx7kguhm',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/swift/iqgxasw6zgtvt1w6zs1d',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/swift/dnywcbneedh9u1beiwqf',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/swift/xneqil1mxay9jmuktjkv',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/swift/ntykdbps1wwgr6hworw2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/swift/gn7unydh9vlwha3aqvzt',
      ],
    },
  ];
  const result = await db.carouselImages.createMany({ data: data });
  return result;
};

export const addCarouselImagesCrysta = async (formData: FormData) => {
  'use server';
  const data = [
    {
      id: 'crysta',
      vehicle_type: 'car',
      title: 'INNOVA CRYSTA',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/crysta_2',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/inside_1',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/crysta_6',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/eel1ma5vsyngfoluhe6e',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/uwxgz90deehf6tamlztj',
      ],
    },
  ];
  const result = await db.carouselImages.createMany({ data: data });
  return result;
};
export const addCarouselImageInnova = async (formData: FormData) => {
  'use server';
  const data = [
    {
      id: 'innova',
      vehicle_type: 'car',
      title: 'TOYOTA INNOVA',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/c_crop,g_auto,h_800,w_800/cars/sm5z79zky2mriqznu1ey.jpg',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/innova_1',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/group_1',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/cz1dxshl7omq2dwqso3c',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/auucanvywfnvzwjzzq8j',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/xfmh5ujwcb0kfctvmj2k',
      ],
    },
  ];
  const result = await db.carouselImages.createMany({ data: data });
  return result;
};

/**
 * Gets the place with Id
 * @param id
 * @returns {Promise<PlaceDataType?> }
 */
export const getPlaceWithId = async (id: string): Promise<PlaceDataType | null> => {
  try {
    const result = await db.touristPlace.findFirst({
      where: {
        AND: {
          id,
        },
      },
    });
    return result;
  } catch (e) {
    return null;
  }
};

export async function saveUrbaniaDefaults() {
  'use server';
  const data = [
    {
      id: 'urbania_15_premium',
      vehicle_type: 'urbania',
      name: '15 SEATER PREMIUM URBANIA IN KERALA',
      description: '15 SEATER PREMIUM URBANIA IN KERALA',
      pax: 15,
      extra_per_km: 30,
    },
    {
      id: 'urbania_15_luxury',
      vehicle_type: 'urbania',
      name: 'Executive Tempo Traveller - 26 seater',
      pax: 15,
      description: '15 SEATER LUXURY URBANIA RATES IN KERALA',
      extra_per_km: 30,
    },
  ];
  await db.vehiclesMaster.createMany({ data: data });
}

export const saveVehicleRatesCar = async (formData: FormData) => {
  'use server';
  try {
    const data = [
      {
        number_of_days: '1 night - 2 days',
        vehicle_id: 'sedan_taxi',
        max_km: 160,
        ac_rate: 3200,
        bata: 1200,
      },
      {
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        vehicle_id: 'sedan_taxi',
        ac_rate: 4800,
        bata: 1800,
      },
      {
        number_of_days: '3 nights - 4 days',
        vehicle_id: 'sedan_taxi',
        max_km: 400,
        ac_rate: 6400,
        bata: 2400,
      },
      {
        number_of_days: '4 nights - 5 days',
        vehicle_id: 'sedan_taxi',
        max_km: 500,
        ac_rate: 8000,
        bata: 3000,
      },
      {
        number_of_days: '5 nights - 6 days',
        vehicle_id: 'sedan_taxi',
        max_km: 600,
        ac_rate: 9600,
        bata: 3600,
      },
      {
        number_of_days: '6 nights - 7 days',
        vehicle_id: 'sedan_taxi',
        max_km: 700,
        ac_rate: 11200,
        bata: 4200,
      },
      {
        number_of_days: '7 nights - 8 days',
        vehicle_id: 'sedan_taxi',
        max_km: 800,
        ac_rate: 12800,
        bata: 4800,
      },
      {
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        vehicle_id: 'sedan_taxi',
        ac_rate: 14400,
        bata: 5400,
      },
      {
        number_of_days: '9 nights - 10 days',
        vehicle_id: 'sedan_taxi',
        max_km: 1000,
        ac_rate: 16000,
        bata: 6000,
      },
      {
        number_of_days: '1 night - 2 days',
        vehicle_id: 'suzuki_ertiga',
        max_km: 160,
        ac_rate: 3800,
        bata: 1200,
      },
      {
        number_of_days: '2 nights - 3 days',
        vehicle_id: 'suzuki_ertiga',
        max_km: 300,
        ac_rate: 5700,
        bata: 1800,
      },
      {
        number_of_days: '3 nights - 4 days',
        vehicle_id: 'suzuki_ertiga',
        max_km: 400,
        ac_rate: 7600,
        bata: 2400,
      },
      {
        number_of_days: '4 nights - 5 days',
        vehicle_id: 'suzuki_ertiga',
        max_km: 500,
        ac_rate: 9500,
        bata: 3000,
      },
      {
        number_of_days: '5 nights - 6 days',
        vehicle_id: 'suzuki_ertiga',
        max_km: 600,
        ac_rate: 11400,
        bata: 3600,
      },
      {
        number_of_days: '6 nights - 7 days',
        vehicle_id: 'suzuki_ertiga',
        max_km: 700,
        ac_rate: 13300,
        bata: 4200,
      },
      {
        number_of_days: '7 nights - 8 days',
        vehicle_id: 'suzuki_ertiga',
        max_km: 800,
        ac_rate: 15200,
        bata: 4800,
      },
      {
        number_of_days: '8 nights - 9 days',
        vehicle_id: 'suzuki_ertiga',
        max_km: 900,
        ac_rate: 17100,
        bata: 5400,
      },
      {
        number_of_days: '9 nights - 10 days',
        vehicle_id: 'suzuki_ertiga',
        max_km: 1000,
        ac_rate: 19000,
        bata: 6000,
      },
      {
        number_of_days: '1 night - 2 days',
        vehicle_id: 'innova',
        max_km: 160,
        ac_rate: 4400,
        bata: 1200,
      },
      {
        vehicle_id: 'innova',
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        ac_rate: 6600,
        bata: 1800,
      },
      {
        vehicle_id: 'innova',
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        ac_rate: 8800,
        bata: 2400,
      },
      {
        vehicle_id: 'innova',
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        ac_rate: 11000,
        bata: 3000,
      },
      {
        vehicle_id: 'innova',
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        ac_rate: 13200,
        bata: 3600,
      },
      {
        vehicle_id: 'innova',
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        ac_rate: 15400,
        bata: 4200,
      },
      {
        vehicle_id: 'innova',
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        ac_rate: 17600,
        bata: 4800,
      },
      {
        vehicle_id: 'innova',
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        ac_rate: 19800,
        bata: 5400,
      },
      {
        vehicle_id: 'innova',
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        ac_rate: 22000,
        bata: 6000,
      },
      {
        vehicle_id: 'crysta',
        number_of_days: '1 night - 2 days',
        max_km: 160,
        ac_rate: 5400,
        bata: 1200,
      },
      {
        vehicle_id: 'crysta',
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        ac_rate: 8100,
        bata: 1800,
      },
      {
        vehicle_id: 'crysta',
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        ac_rate: 10800,
        bata: 2400,
      },
      {
        vehicle_id: 'crysta',
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        ac_rate: 13500,
        bata: 3000,
      },
      {
        vehicle_id: 'crysta',
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        ac_rate: 16200,
        bata: 3600,
      },
      {
        vehicle_id: 'crysta',
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        ac_rate: 18900,
        bata: 4200,
      },
      {
        vehicle_id: 'crysta',
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        ac_rate: 21600,
        bata: 4800,
      },
      {
        vehicle_id: 'crysta',
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        ac_rate: 24300,
        bata: 5400,
      },
      {
        vehicle_id: 'crysta',
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        ac_rate: 27000,
        bata: 6000,
      },
    ];
    const result = await db.vehicleRates.createMany({ data: data });
    return result;
  } catch (e) {
    console.log('Error in place', e);
    return null;
  }
};
/**
 * Default values insert funciton for rates of travellers and bus
 * @param formData
 *
 * @returns
 */
export const saveVehicleRatesTravellerBus = async (formData: FormData) => {
  'use server';
  try {
    const data = [
      {
        number_of_days: '1 night - 2 days',
        max_km: 160,
        vehicle_id: 'traveller_ultra_luxury_08',
        ac_rate: 8400,
        bata: 1600,
      },
      {
        number_of_days: '2 nights - 3 days',
        vehicle_id: 'traveller_ultra_luxury_08',
        max_km: 300,
        ac_rate: 12600,
        bata: 2400,
      },
      {
        number_of_days: '3 nights - 4 days',
        vehicle_id: 'traveller_ultra_luxury_08',
        max_km: 400,
        ac_rate: 16800,
        bata: 3200,
      },
      {
        number_of_days: '4 nights - 5 days',
        vehicle_id: 'traveller_ultra_luxury_08',
        max_km: 500,
        ac_rate: 21000,
        bata: 4000,
      },
      {
        number_of_days: '5 nights - 6 days',
        vehicle_id: 'traveller_ultra_luxury_08',
        max_km: 600,
        ac_rate: 25200,
        bata: 4800,
      },
      {
        number_of_days: '6 nights - 7 days',
        vehicle_id: 'traveller_ultra_luxury_08',
        max_km: 700,
        ac_rate: 29400,
        bata: 5600,
      },
      {
        number_of_days: '7 nights - 8 days',
        vehicle_id: 'traveller_ultra_luxury_08',
        max_km: 800,
        ac_rate: 33600,
        bata: 6400,
      },
      {
        number_of_days: '8 nights - 9 days',
        vehicle_id: 'traveller_ultra_luxury_08',
        max_km: 900,
        ac_rate: 37800,
        bata: 7200,
      },
      {
        number_of_days: '9 nights - 10 days',
        vehicle_id: 'traveller_ultra_luxury_08',
        max_km: 1000,
        ac_rate: 42000,
        bata: 8000,
      },

      {
        vehicle_id: 'traveller_ultra_luxury_10',

        number_of_days: '1 night - 2 days',
        max_km: 160,
        ac_rate: 9400,
        bata: 1600,
      },
      {
        vehicle_id: 'traveller_ultra_luxury_10',

        number_of_days: '2 nights - 3 days',
        max_km: 300,
        ac_rate: 14100,
        bata: 2400,
      },
      {
        vehicle_id: 'traveller_ultra_luxury_10',

        number_of_days: '3 nights - 4 days',
        max_km: 400,
        ac_rate: 18800,
        bata: 3200,
      },
      {
        vehicle_id: 'traveller_ultra_luxury_10',

        number_of_days: '4 nights - 5 days',
        max_km: 500,
        ac_rate: 23500,
        bata: 4000,
      },
      {
        vehicle_id: 'traveller_ultra_luxury_10',

        number_of_days: '5 nights - 6 days',
        max_km: 600,
        ac_rate: 28200,
        bata: 4800,
      },
      {
        vehicle_id: 'traveller_ultra_luxury_10',

        number_of_days: '6 nights - 7 days',
        max_km: 700,
        ac_rate: 32900,
        bata: 5600,
      },
      {
        vehicle_id: 'traveller_ultra_luxury_10',

        number_of_days: '7 nights - 8 days',
        max_km: 800,
        ac_rate: 37600,
        bata: 6400,
      },
      {
        vehicle_id: 'traveller_ultra_luxury_10',

        number_of_days: '8 nights - 9 days',
        max_km: 900,
        ac_rate: 42300,
        bata: 7200,
      },
      {
        vehicle_id: 'traveller_ultra_luxury_10',

        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        ac_rate: 47000,
        bata: 8000,
      },

      {
        vehicle_id: 'traveller_premium_10',

        number_of_days: '1 night - 2 days',
        max_km: 160,
        ac_rate: 7600,
        bata: 1400,
      },
      {
        vehicle_id: 'traveller_premium_10',
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        ac_rate: 11400,
        bata: 2100,
      },
      {
        vehicle_id: 'traveller_premium_10',
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        ac_rate: 15200,
        bata: 2800,
      },
      {
        vehicle_id: 'traveller_premium_10',
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        ac_rate: 19000,
        bata: 3500,
      },
      {
        vehicle_id: 'traveller_premium_10',
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        ac_rate: 22800,
        bata: 4200,
      },
      {
        vehicle_id: 'traveller_premium_10',
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        ac_rate: 26600,
        bata: 4900,
      },
      {
        vehicle_id: 'traveller_premium_10',
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        ac_rate: 30400,
        bata: 5600,
      },
      {
        vehicle_id: 'traveller_premium_10',
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        ac_rate: 34200,
        bata: 6300,
      },
      {
        vehicle_id: 'traveller_premium_10',
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        ac_rate: 38000,
        bata: 7000,
      },

      {
        vehicle_id: 'traveller_premium_12',
        number_of_days: '1 night - 2 days',
        max_km: 160,
        ac_rate: 8000,
        bata: 1400,
      },
      {
        vehicle_id: 'traveller_premium_12',
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        ac_rate: 12000,
        bata: 2100,
      },
      {
        vehicle_id: 'traveller_premium_12',
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        ac_rate: 16000,
        bata: 2800,
      },
      {
        vehicle_id: 'traveller_premium_12',
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        ac_rate: 20000,
        bata: 3500,
      },
      {
        vehicle_id: 'traveller_premium_12',
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        ac_rate: 24000,
        bata: 4200,
      },
      {
        vehicle_id: 'traveller_premium_12',
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        ac_rate: 28000,
        bata: 4900,
      },
      {
        vehicle_id: 'traveller_premium_12',
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        ac_rate: 32000,
        bata: 5600,
      },
      {
        vehicle_id: 'traveller_premium_12',
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        ac_rate: 36000,
        bata: 6300,
      },
      {
        vehicle_id: 'traveller_premium_12',
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        ac_rate: 40000,
        bata: 7000,
      },

      {
        vehicle_id: 'traveller_premium_17',

        number_of_days: '1 night - 2 days',
        max_km: 160,
        ac_rate: 7400,
        bata: 1600,
      },
      {
        vehicle_id: 'traveller_premium_17',
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        ac_rate: 11100,
        bata: 2400,
      },
      {
        vehicle_id: 'traveller_premium_17',
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        ac_rate: 14800,
        bata: 3200,
      },
      {
        vehicle_id: 'traveller_premium_17',
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        ac_rate: 18500,
        bata: 4000,
      },
      {
        vehicle_id: 'traveller_premium_17',
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        ac_rate: 22200,
        bata: 4800,
      },
      {
        vehicle_id: 'traveller_premium_17',
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        ac_rate: 25900,
        bata: 5600,
      },
      {
        vehicle_id: 'traveller_premium_17',
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        ac_rate: 29600,
        bata: 6400,
      },
      {
        vehicle_id: 'traveller_premium_17',
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        ac_rate: 33300,
        bata: 7200,
      },
      {
        vehicle_id: 'traveller_premium_17',
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        ac_rate: 37000,
        bata: 8000,
      },

      {
        vehicle_id: 'traveller_premium_20',
        number_of_days: '1 night - 2 days',
        max_km: 160,
        ac_rate: 10400,
        bata: 2000,
      },
      {
        vehicle_id: 'traveller_premium_20',
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        ac_rate: 15600,
        bata: 3000,
      },
      {
        vehicle_id: 'traveller_premium_20',
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        ac_rate: 20800,
        bata: 4000,
      },
      {
        vehicle_id: 'traveller_premium_20',
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        ac_rate: 26000,
        bata: 5000,
      },
      {
        vehicle_id: 'traveller_premium_20',
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        ac_rate: 31200,
        bata: 6000,
      },
      {
        vehicle_id: 'traveller_premium_20',
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        ac_rate: 36400,
        bata: 7000,
      },
      {
        vehicle_id: 'traveller_premium_20',
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        ac_rate: 41600,
        bata: 8000,
      },
      {
        vehicle_id: 'traveller_premium_20',
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        ac_rate: 46800,
        bata: 9000,
      },
      {
        vehicle_id: 'traveller_premium_20',
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        ac_rate: 52000,
        bata: 10000,
      },

      {
        vehicle_id: 'traveller_premium_26',
        number_of_days: '1 night - 2 days',
        max_km: 160,
        ac_rate: 13000,
        bata: 2000,
      },
      {
        vehicle_id: 'traveller_premium_26',
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        ac_rate: 19500,
        bata: 3000,
      },
      {
        vehicle_id: 'traveller_premium_26',
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        ac_rate: 26000,
        bata: 4000,
      },
      {
        vehicle_id: 'traveller_premium_26',
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        ac_rate: 32500,
        bata: 5000,
      },
      {
        vehicle_id: 'traveller_premium_26',
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        ac_rate: 39000,
        bata: 6000,
      },
      {
        vehicle_id: 'traveller_premium_26',
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        ac_rate: 45500,
        bata: 7000,
      },
      {
        vehicle_id: 'traveller_premium_26',
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        ac_rate: 52000,
        bata: 8000,
      },
      {
        vehicle_id: 'traveller_premium_26',
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        ac_rate: 58500,
        bata: 9000,
      },
      {
        vehicle_id: 'traveller_premium_26',
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        ac_rate: 65000,
        bata: 10000,
      },

      {
        vehicle_id: 'traveller_executive_12',
        number_of_days: '1 night - 2 days',
        max_km: 160,
        ac_rate: 6600,
        bata: 1400,
      },
      {
        vehicle_id: 'traveller_executive_12',
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        ac_rate: 9900,
        bata: 2100,
      },
      {
        vehicle_id: 'traveller_executive_12',
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        ac_rate: 13200,
        bata: 2800,
      },
      {
        vehicle_id: 'traveller_executive_12',
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        ac_rate: 16500,
        bata: 3500,
      },
      {
        vehicle_id: 'traveller_executive_12',
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        ac_rate: 19800,
        bata: 4200,
      },
      {
        vehicle_id: 'traveller_executive_12',
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        ac_rate: 23100,
        bata: 4900,
      },
      {
        vehicle_id: 'traveller_executive_12',
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        ac_rate: 26400,
        bata: 5600,
      },
      {
        vehicle_id: 'traveller_executive_12',
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        ac_rate: 29700,
        bata: 6300,
      },
      {
        vehicle_id: 'traveller_executive_12',
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        ac_rate: 33000,
        bata: 7000,
      },

      {
        vehicle_id: 'traveller_executive_20',
        number_of_days: '1 night - 2 days',
        max_km: 160,
        ac_rate: 9000,
        bata: 2000,
      },
      {
        vehicle_id: 'traveller_executive_20',
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        ac_rate: 13500,
        bata: 3000,
      },
      {
        vehicle_id: 'traveller_executive_20',
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        ac_rate: 18000,
        bata: 4000,
      },
      {
        vehicle_id: 'traveller_executive_20',
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        ac_rate: 22500,
        bata: 5000,
      },
      {
        vehicle_id: 'traveller_executive_20',
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        ac_rate: 27000,
        bata: 6000,
      },
      {
        vehicle_id: 'traveller_executive_20',
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        ac_rate: 31500,
        bata: 7000,
      },
      {
        vehicle_id: 'traveller_executive_20',
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        ac_rate: 36000,
        bata: 8000,
      },
      {
        vehicle_id: 'traveller_executive_20',
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        ac_rate: 40500,
        bata: 9000,
      },
      {
        vehicle_id: 'traveller_executive_20',
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        ac_rate: 45000,
        bata: 10000,
      },

      {
        vehicle_id: 'traveller_executive_26',
        number_of_days: '1 night - 2 days',
        max_km: 160,
        ac_rate: 11000,
        bata: 2000,
      },
      {
        vehicle_id: 'traveller_executive_26',
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        ac_rate: 16500,
        bata: 3000,
      },
      {
        vehicle_id: 'traveller_executive_26',
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        ac_rate: 22000,
        bata: 4000,
      },
      {
        vehicle_id: 'traveller_executive_26',
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        ac_rate: 27500,
        bata: 5000,
      },
      {
        vehicle_id: 'traveller_executive_26',
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        ac_rate: 33000,
        bata: 6000,
      },
      {
        vehicle_id: 'traveller_executive_26',
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        ac_rate: 38500,
        bata: 7000,
      },
      {
        vehicle_id: 'traveller_executive_26',
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        ac_rate: 44000,
        bata: 8000,
      },
      {
        vehicle_id: 'traveller_executive_26',
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        ac_rate: 49500,
        bata: 9000,
      },
      {
        vehicle_id: 'traveller_executive_26',
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        ac_rate: 55000,
        bata: 10000,
      },

      {
        vehicle_id: 'urbania_15_luxury',

        number_of_days: '1 night - 2 days',
        max_km: 160,
        ac_rate: 14000,
        bata: 2000,
      },
      {
        vehicle_id: 'urbania_15_luxury',
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        ac_rate: 21000,
        bata: 3000,
      },
      {
        vehicle_id: 'urbania_15_luxury',
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        ac_rate: 28000,
        bata: 4000,
      },
      {
        vehicle_id: 'urbania_15_luxury',
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        ac_rate: 35000,
        bata: 5000,
      },
      {
        vehicle_id: 'urbania_15_luxury',
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        ac_rate: 42000,
        bata: 6000,
      },
      {
        vehicle_id: 'urbania_15_luxury',
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        ac_rate: 49000,
        bata: 7000,
      },
      {
        vehicle_id: 'urbania_15_luxury',
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        ac_rate: 56000,
        bata: 8000,
      },
      {
        vehicle_id: 'urbania_15_luxury',
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        ac_rate: 63000,
        bata: 9000,
      },
      {
        vehicle_id: 'urbania_15_luxury',
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        ac_rate: 70000,
        bata: 10000,
      },

      {
        vehicle_id: 'urbania_15_premium',

        number_of_days: '1 night - 2 days',
        max_km: 160,
        ac_rate: 12000,
        bata: 2000,
      },
      {
        vehicle_id: 'urbania_15_premium',
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        ac_rate: 18000,
        bata: 3000,
      },
      {
        vehicle_id: 'urbania_15_premium',
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        ac_rate: 24000,
        bata: 4000,
      },
      {
        vehicle_id: 'urbania_15_premium',
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        ac_rate: 30000,
        bata: 5000,
      },
      {
        vehicle_id: 'urbania_15_premium',
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        ac_rate: 36000,
        bata: 6000,
      },
      {
        vehicle_id: 'urbania_15_premium',
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        ac_rate: 42000,
        bata: 7000,
      },
      {
        vehicle_id: 'urbania_15_premium',
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        ac_rate: 48000,
        bata: 8000,
      },
      {
        vehicle_id: 'urbania_15_premium',
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        ac_rate: 54000,
        bata: 9000,
      },
      {
        vehicle_id: 'urbania_15_premium',
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        ac_rate: 60000,
        bata: 10000,
      },

      {
        vehicle_id: 'bus_26_benz',
        number_of_days: '1 night - 2 days',
        max_km: 160,
        ac_rate: 14000,
        bata: 2000,
      },
      {
        vehicle_id: 'bus_26_benz',
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        ac_rate: 21000,
        bata: 3000,
      },
      {
        vehicle_id: 'bus_26_benz',
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        ac_rate: 28000,
        bata: 4000,
      },
      {
        vehicle_id: 'bus_26_benz',
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        ac_rate: 35000,
        bata: 5000,
      },
      {
        vehicle_id: 'bus_26_benz',
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        ac_rate: 42000,
        bata: 6000,
      },
      {
        vehicle_id: 'bus_26_benz',
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        ac_rate: 49000,
        bata: 7000,
      },
      {
        vehicle_id: 'bus_26_benz',
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        ac_rate: 56000,
        bata: 8000,
      },
      {
        vehicle_id: 'bus_26_benz',
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        ac_rate: 63000,
        bata: 9000,
      },
      {
        vehicle_id: 'bus_26_benz',
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        ac_rate: 70000,
        bata: 10000,
      },

      {
        vehicle_id: 'bus_34',
        number_of_days: '1 night - 2 days',
        max_km: 160,
        ac_rate: 17000,
        bata: 2000,
      },
      {
        vehicle_id: 'bus_34',
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        ac_rate: 25500,
        bata: 3000,
      },
      {
        vehicle_id: 'bus_34',
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        ac_rate: 34000,
        bata: 4000,
      },
      {
        vehicle_id: 'bus_34',
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        ac_rate: 42500,
        bata: 5000,
      },
      {
        vehicle_id: 'bus_34',
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        ac_rate: 51000,
        bata: 6000,
      },
      {
        vehicle_id: 'bus_34',
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        ac_rate: 59500,
        bata: 7000,
      },
      {
        vehicle_id: 'bus_34',
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        ac_rate: 68000,
        bata: 8000,
      },
      {
        vehicle_id: 'bus_34',
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        ac_rate: 76500,
        bata: 9000,
      },
      {
        vehicle_id: 'bus_34',
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        ac_rate: 85000,
        bata: 10000,
      },

      {
        vehicle_id: 'bus_35_benz',
        number_of_days: '1 night - 2 days',
        max_km: 160,
        ac_rate: 19000,
        bata: 2000,
      },
      {
        vehicle_id: 'bus_35_benz',
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        ac_rate: 28500,
        bata: 3000,
      },
      {
        vehicle_id: 'bus_35_benz',
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        ac_rate: 38000,
        bata: 4000,
      },
      {
        vehicle_id: 'bus_35_benz',
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        ac_rate: 47500,
        bata: 5000,
      },
      {
        vehicle_id: 'bus_35_benz',
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        ac_rate: 57000,
        bata: 6000,
      },
      {
        vehicle_id: 'bus_35_benz',
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        ac_rate: 66500,
        bata: 7000,
      },
      {
        vehicle_id: 'bus_35_benz',
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        ac_rate: 76000,
        bata: 8000,
      },
      {
        vehicle_id: 'bus_35_benz',
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        ac_rate: 85500,
        bata: 9000,
      },
      {
        vehicle_id: 'bus_35_benz',
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        ac_rate: 95000,
        bata: 10000,
      },

      {
        vehicle_id: 'bus_45_benz',
        number_of_days: '1 night - 2 days',
        max_km: 160,
        ac_rate: 25000,
        bata: 2000,
      },
      {
        vehicle_id: 'bus_45_benz',
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        ac_rate: 37500,
        bata: 3000,
      },
      {
        vehicle_id: 'bus_45_benz',
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        ac_rate: 38000,
        bata: 4000,
      },
      {
        vehicle_id: 'bus_45_benz',
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        ac_rate: 50000,
        bata: 5000,
      },
      {
        vehicle_id: 'bus_45_benz',
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        ac_rate: 62500,
        bata: 6000,
      },
      {
        vehicle_id: 'bus_45_benz',
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        ac_rate: 75000,
        bata: 7000,
      },
      {
        vehicle_id: 'bus_45_benz',
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        ac_rate: 87500,
        bata: 8000,
      },
      {
        vehicle_id: 'bus_45_benz',
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        ac_rate: 100000,
        bata: 9000,
      },
      {
        vehicle_id: 'bus_45_benz',
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        ac_rate: 112500,
        bata: 10000,
      },

      {
        vehicle_id: 'bus_53_benz',
        number_of_days: '1 night - 2 days',
        max_km: 160,
        ac_rate: 29000,
        bata: 2000,
      },
      {
        vehicle_id: 'bus_53_benz',
        number_of_days: '2 nights - 3 days',
        max_km: 300,
        ac_rate: 43500,
        bata: 3000,
      },
      {
        vehicle_id: 'bus_53_benz',
        number_of_days: '3 nights - 4 days',
        max_km: 400,
        ac_rate: 58000,
        bata: 4000,
      },
      {
        vehicle_id: 'bus_53_benz',
        number_of_days: '4 nights - 5 days',
        max_km: 500,
        ac_rate: 72500,
        bata: 5000,
      },
      {
        vehicle_id: 'bus_53_benz',
        number_of_days: '5 nights - 6 days',
        max_km: 600,
        ac_rate: 87000,
        bata: 6000,
      },
      {
        vehicle_id: 'bus_53_benz',
        number_of_days: '6 nights - 7 days',
        max_km: 700,
        ac_rate: 101500,
        bata: 7000,
      },
      {
        vehicle_id: 'bus_53_benz',
        number_of_days: '7 nights - 8 days',
        max_km: 800,
        ac_rate: 116000,
        bata: 8000,
      },
      {
        vehicle_id: 'bus_53_benz',
        number_of_days: '8 nights - 9 days',
        max_km: 900,
        ac_rate: 130500,
        bata: 9000,
      },
      {
        vehicle_id: 'bus_53_benz',
        number_of_days: '9 nights - 10 days',
        max_km: 1000,
        ac_rate: 145000,
        bata: 10000,
      },
    ];
    const result = await db.vehicleRates.createMany({ data: data });
    return result;
  } catch (e) {
    console.log('Error in place', e);
    return null;
  }
};

export const saveNewPlace = async (formData: FormData) => {
  'use server';
  try {
    console.log('saving new place ');

    const id = formData.get('id') ? String(formData.get('id')) : '';
    const place = formData.get('place') ? String(formData.get('place')) : '';
    const description = formData.get('description') ? String(formData.get('description')) : '';
    const category = formData.get('category') ? String(formData.get('category')) : '';
    const image = formData.get('image') ? String(formData.get('image')) : '';

    const newData = {
      id,
      place,
      description,
      category,
      image,
    };
    const user = await db.touristPlace.create({ data: newData });
    return user;
  } catch (e) {
    console.log('Error in get user by email', e);
    return null;
  }
};
