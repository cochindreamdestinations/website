import { db } from '@/lib/db';
import { kv } from '@vercel/kv';

export interface bus_35_benz {
  id: string;
  name: string;
  extra_per_km: number;
  description: string;
  pax: number;
  image: string;
}

export interface BusRate {
  id: number;
  number_of_days: string;
  max_km: number;
  ac_rate: number;
  bata: number;
}

export default async function getAllBusTypes(id?: string) {
  'use server';
  const result: any = await db.vehiclesMaster.findMany({
    where: {
      vehicle_type: 'bus',
    },
  });
  return id ? result?.filter((i: any) => i.id === id) : result;
}

export const getRateTableForId = async (id: string) => {
  'use server';
  const result: BusRate[] | null = await db.vehicleRates.findMany({
    where: {
      vehicle_id: id,
    },
    orderBy: {
      max_km: 'asc',
    },
  });
  return result;
};

export const getBusCarouselImages = async (id?: string) => {
  'use server';
  const result: any = await db.carouselImages.findMany({
    where: {
      AND: {
        vehicle_type: 'bus',
      },
    },
  });

  return id ? result.filter((i: any) => i.id === id) : result;
};

export const getReviews = async () => {
  try {
  const result: any = await kv.get('reviews');
  return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

/**
 * Get vehicle by id generic master
 * @param id
 * @returns
 */
export const getVehicleById = async (id: string) => {
  const result: any = await db.vehiclesMaster.findMany({
    where: {
      id: id,
    },
  });
  return result;
};
