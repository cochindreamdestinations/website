'use server';
import { db } from '@/lib/db';
import { BusRate } from './bus';
import { RateList } from './traveller';

export const getRateTableForId = async (id: string) => {
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

/**
 * Get vehicle by id generic master
 * @param id
 * @returns
 */
export const getVehicleByType = async (id: string) => {
  const result: any = await db.vehiclesMaster.findMany({
    where: {
      vehicle_type: id,
    },
  });
  return result;
};

export const editRates = async (data: RateList) => {
  try {
    const result: any = await db.vehicleRates.update({
      data: {
        bata: Number(data.bata),
        ac_rate: Number(data.ac_rate),
      },
      where: {
        id: data.id,
      },
    });
    return result;
  } catch (e) {
    return e;
  }
};
