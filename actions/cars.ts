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
      OR: [
        {
          vehicle_type: 'swift',
        },
        {
          vehicle_type: 'swift_dzire',
        },
        {
          vehicle_type: 'etios',
        },
        {
          vehicle_type: 'ertiga',
        },
        {
          vehicle_type: 'innova',
        },
        {
          vehicle_type: 'hycross',
        },
        {
          vehicle_type: 'crysta',
        },
      ],
    },
  });
  return id ? result?.filter((i: any) => i.id === id) : result;
}

export async function getCarCarouselImages() {
  'use server';
  const result = await db.carouselImages.findMany({
    where: {
      OR:[
        {
          vehicle_type: 'swift',
        },
        {
          vehicle_type: 'swift_dzire',
        },
        {
          vehicle_type: 'etios',
        },
        {
          vehicle_type: 'ertiga',
        },
        {
          vehicle_type: 'innova',
        },
        {
          vehicle_type: 'hycross',
        },
        {
          vehicle_type: 'crysta',
        },
      ]
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
