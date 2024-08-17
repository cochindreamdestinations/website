import { db } from '@/lib/db';

export interface Urbania {
  id: string;
  name: string;
  extra_per_km: number;
  vehicle_type:string;
  description: string;
  pax: number;
  
}

export interface UrbaniaRate {
  id: number;
  vehicle_id: string;
  number_of_days: string;
  max_km: number;
  ac_rate: number;
  bata: number;
}

export default async function getAllUrbaniaTypes(id?: string) {
  const result: any = await db.vehiclesMaster.findMany({
    where: {
      OR:[{
      vehicle_type: 'urbania_15_luxury',

      }, {
        vehicle_type: 'urbania_15_premium'
      }]
    },
  });
  return id ? result?.filter((i: any) => i.id === id) : result;
}

export const getRateTableForId = async (id: string) => {
  const result: UrbaniaRate[] | null = await db.vehicleRates.findMany({
    where: {
      vehicle_id: id,
    },
    orderBy: {
      max_km: 'asc',
    },
  });
  return result;
};

export const getUrbaniaCarouselImages = async (id?: string) => {
  'use server';
  const result: any = await db.carouselImages.findMany({
    where: {
      OR: [
        {
          vehicle_type: 'urbania_15_premium'
        },
        { vehicle_type: 'urbania_15_luxury' },
      ],
    },
  });
  return id ? result.filter((i: any) => i.id === id) : result;
};
