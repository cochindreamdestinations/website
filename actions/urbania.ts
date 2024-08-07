import { db } from '@/lib/db';

export interface Urbania {
  id: string;
  name: string;
  extra_per_km: number;
  description: string;
  pax: number;
  image: string;
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
      vehicle_type: 'urbania',
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
      AND: {
        vehicle_type: 'urbania',
      },
    },
  });
  return id ? result.filter((i: any) => i.id === id) : result;
};
