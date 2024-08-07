import { RateList } from './traveller';
import { db } from '@/lib/db';

/**
 * Gets all cars avaiable
 * @param id
 * @returns
 */
export async function getAllCars(id?: string) {
  'use server';
  const result: any = await db.vehiclesMaster.findMany({
    where: {
      vehicle_type: 'car',
    },
  });
  return id ? result?.filter((i: any) => i.id === id) : result;
}

export async function getCarCarouselImages() {
  'use server';
  const result = await db.carouselImages.findMany({
    where: {
      vehicle_type: 'car',
    },
  });
  return result;
}

/**
 * Gets rate table for car Id
 * @param id
 * @returns
 */
export const getRateTableForId = async (id: string) => {
  const result: RateList[] | null = await db.vehicleRates.findMany({
    where: {
      vehicle_id: id,
    },
  });
  return result;
};
