import { db } from '@/lib/db';
import { kv } from '@vercel/kv';

export async function AddDefaultValuesForTravellerPg() {
  const data = [
    {
      vehicle_type: 'traveller_ultra_luxury_08',
      name: 'Luxury Tempo Traveller - 8 seater',
      description: '08 SEATER ULTRA LUXURY TEMPO TRAVELLER',
      pax: 8,
      extra_per_km: 24,
      
    },
    {
      vehicle_type: 'traveller_ultra_luxury_10',
      name: 'Luxury Tempo Traveller - 10 seater',
      description: '10 SEATER ULTRA LUXURY TEMPO TRAVELLER',
      pax: 10,
      extra_per_km: 28,
      
    },
    {
      vehicle_type: 'traveller_premium_10',
      name: 'Premium Tempo Traveller - 10 seater',
      description: '10 SEATER PREMIUM TEMPO TRAVELLER',
      pax: 10,
      extra_per_km: 23,
      
    },
    {
      vehicle_type: 'traveller_premium_12',
      name: 'Premium Tempo Traveller - 12 seater',
      description: '12 SEATER PREMIUM TEMPO TRAVELLER',
      pax: 12,
      extra_per_km: 23,
      
    },
    {
      vehicle_type: 'traveller_executive_12',
      name: 'Executive Tempo Traveller - 10-12 seater',
      description: '10-12 SEATER EXECUTIVE TEMPO TRAVELLER',
      extra_per_km: 23,
      pax: 12,
      
    },
    {
      vehicle_type: 'traveller_premium_17',
      name: 'Premium Tempo Traveller - 17 seater',
      pax: 17,
      description: '17 SEATER PREMIUM TEMPO TRAVELLER',
      extra_per_km: 25,
      
    },
    {
      vehicle_type: 'traveller_executive_17',
      name: 'Executive Tempo Traveller - 17 seater',
      extra_per_km: 25,
      pax: 17,
      description: '17 SEATER EXECUTIVE TEMPO TRAVELLER',
      
    },
    {
      vehicle_type: 'traveller_premium_20',
      name: 'Premium Tempo Traveller - 20 seater',
      pax: 20,
      description: '20 SEATER PREMIUM TEMPO TRAVELLER',
      extra_per_km: 28,
      
    },
    {
      vehicle_type: 'traveller_executive_20',
      name: 'Executive Tempo Traveller - 20 seater',
      pax: 20,
      description: '20 SEATER EXECUTIVE TEMPO TRAVELLER',
      extra_per_km: 28,
      
    },
    {
      vehicle_type: 'traveller_premium_26',
      name: 'Premium Tempo Traveller - 26 seater',
      pax: 26,
      description: '26 SEATER PREMIUM TEMPO TRAVELLER',
      extra_per_km: 28,
      
    },
    {
      vehicle_type: 'traveller_executive_26',
      name: 'Executive Tempo Traveller - 26 seater',
      pax: 20,
      description: '26 SEATER EXECUTIVE TEMPO TRAVELLER',
      extra_per_km: 28,
      
    },
  ];
  await db.vehiclesMaster.createMany({ data });
}

export async function AddDefaultValuesForCars() {
  const data = [
    {
      vehicle_type: 'swift',
      name: 'Maruthi Swift',
      description: 'SWIFT Hactchback',
      pax: 3,
      extra_per_km: 15,
    },
    {
      vehicle_type: 'swift_dzire',
      name: 'Maruthi Swift Dzire',
      description: 'SWIFT Dzire Sedan',
      pax: 3,
      extra_per_km: 15,
    },
    {
      vehicle_type: 'etios',
      name: 'Toyota Etios',
      description: 'Etios Sedan',
      pax: 3,
      extra_per_km: 15,
    },
    {
      vehicle_type: 'ertiga',
      name: 'SUZUKI ERTIGA',
      description: 'SUZUKI ERTIGA',
      pax: 5,
      extra_per_km: 18,
    },
    {
      vehicle_type: 'innova',
      name: 'TOYOTA INNOVA',
      description: 'TOYOTA INNOVA',
      pax: 6,
      extra_per_km: 20,
    },
    {
      vehicle_type: 'crysta',
      name: 'TOYOTA INNOVA CRYSTA',
      description: 'TOYOTA INNOVA CRYSTA',
      pax: 6,
      extra_per_km: 22,
    },
    {
      vehicle_type: 'hycross',
      name: 'TOYOTA INNOVA HYCROSS',
      description: 'TOYOTA INNOVA HYCROSS',
      pax: 6,
      extra_per_km: 30,
    },
  ];
  await db.vehiclesMaster.createMany({ data });
}

export async function AddDefaultValuesForCarsRate() {
  const swiftRate = [
    {
      vehicle_id: 'swift',
      number_of_days: '1 night - 2 days',
      max_km: 160,
      ac_rate: 3200,
      bata: 1200,
    },
    {
      vehicle_id: 'swift',
      number_of_days: '2 nights - 3 days',
      max_km: 300,
      ac_rate: 4800,
      bata: 1800,
    },
    {
      vehicle_id: 'swift',
      number_of_days: '3 nights - 4 days',
      max_km: 400,
      ac_rate: 6400,
      bata: 2400,
    },
    {
      vehicle_id: 'swift',
      number_of_days: '4 nights - 5 days',
      max_km: 500,
      ac_rate: 8000,
      bata: 3000,
    },
    {
      vehicle_id: 'swift',
      number_of_days: '5 nights - 6 days',
      max_km: 600,
      ac_rate: 9600,
      bata: 3600,
    },
    {
      vehicle_id: 'swift',
      number_of_days: '6 nights - 7 days',
      max_km: 700,
      ac_rate: 11200,
      bata: 4200,
    },
    {
      vehicle_id: 'swift',
      number_of_days: '7 nights - 8 days',
      max_km: 800,
      ac_rate: 12800,
      bata: 4800,
    },
    {
      vehicle_id: 'swift',
      number_of_days: '8 nights - 9 days',
      max_km: 900,
      ac_rate: 14400,
      bata: 5400,
    },
    {
      vehicle_id: 'swift',
      number_of_days: '9 nights - 10 days',
      max_km: 1000,
      ac_rate: 16000,
      bata: 6000,
    },
  ];
  const swiftDzireRate = [
    {
      vehicle_id: 'swift_dzire',
      number_of_days: '1 night - 2 days',
      max_km: 160,
      ac_rate: 3200,
      bata: 1200,
    },
    {
      vehicle_id: 'swift_dzire',
      number_of_days: '2 nights - 3 days',
      max_km: 300,
      ac_rate: 4800,
      bata: 1800,
    },
    {
      vehicle_id: 'swift_dzire',
      number_of_days: '3 nights - 4 days',
      max_km: 400,
      ac_rate: 6400,
      bata: 2400,
    },
    {
      vehicle_id: 'swift_dzire',
      number_of_days: '4 nights - 5 days',
      max_km: 500,
      ac_rate: 8000,
      bata: 3000,
    },
    {
      vehicle_id: 'swift_dzire',
      number_of_days: '5 nights - 6 days',
      max_km: 600,
      ac_rate: 9600,
      bata: 3600,
    },
    {
      vehicle_id: 'swift_dzire',
      number_of_days: '6 nights - 7 days',
      max_km: 700,
      ac_rate: 11200,
      bata: 4200,
    },
    {
      vehicle_id: 'swift_dzire',
      number_of_days: '7 nights - 8 days',
      max_km: 800,
      ac_rate: 12800,
      bata: 4800,
    },
    {
      vehicle_id: 'swift_dzire',
      number_of_days: '8 nights - 9 days',
      max_km: 900,
      ac_rate: 14400,
      bata: 5400,
    },
    {
      vehicle_id: 'swift_dzire',
      number_of_days: '9 nights - 10 days',
      max_km: 1000,
      ac_rate: 16000,
      bata: 6000,
    },
  ];

  const etiosRate = [
    {
      vehicle_id: 'etios',
      number_of_days: '1 night - 2 days',
      max_km: 160,
      ac_rate: 3200,
      bata: 1200,
    },
    {
      vehicle_id: 'etios',
      number_of_days: '2 nights - 3 days',
      max_km: 300,
      ac_rate: 4800,
      bata: 1800,
    },
    {
      vehicle_id: 'etios',
      number_of_days: '3 nights - 4 days',
      max_km: 400,
      ac_rate: 6400,
      bata: 2400,
    },
    {
      vehicle_id: 'etios',
      number_of_days: '4 nights - 5 days',
      max_km: 500,
      ac_rate: 8000,
      bata: 3000,
    },
    {
      vehicle_id: 'etios',
      number_of_days: '5 nights - 6 days',
      max_km: 600,
      ac_rate: 9600,
      bata: 3600,
    },
    {
      vehicle_id: 'etios',
      number_of_days: '6 nights - 7 days',
      max_km: 700,
      ac_rate: 11200,
      bata: 4200,
    },
    {
      vehicle_id: 'etios',
      number_of_days: '7 nights - 8 days',
      max_km: 800,
      ac_rate: 12800,
      bata: 4800,
    },
    {
      vehicle_id: 'etios',
      number_of_days: '8 nights - 9 days',
      max_km: 900,
      ac_rate: 14400,
      bata: 5400,
    },
    {
      vehicle_id: 'etios',
      number_of_days: '9 nights - 10 days',
      max_km: 1000,
      ac_rate: 16000,
      bata: 6000,
    },
  ];

  const ertigaRate = [
    {
      vehicle_id: 'ertiga',
      number_of_days: '1 night - 2 days',
      max_km: 160,
      ac_rate: 3800,
      bata: 1200,
    },
    {
      vehicle_id: 'ertiga',
      number_of_days: '2 nights - 3 days',
      max_km: 300,
      ac_rate: 5700,
      bata: 1800,
    },
    {
      vehicle_id: 'ertiga',
      number_of_days: '3 nights - 4 days',
      max_km: 400,
      ac_rate: 7600,
      bata: 2400,
    },
    {
      vehicle_id: 'ertiga',
      number_of_days: '4 nights - 5 days',
      max_km: 500,
      ac_rate: 9500,
      bata: 3000,
    },
    {
      vehicle_id: 'ertiga',
      number_of_days: '5 nights - 6 days',
      max_km: 600,
      ac_rate: 11400,
      bata: 3600,
    },
    {
      vehicle_id: 'ertiga',
      number_of_days: '6 nights - 7 days',
      max_km: 700,
      ac_rate: 13300,
      bata: 4200,
    },
    {
      vehicle_id: 'ertiga',
      number_of_days: '7 nights - 8 days',
      max_km: 800,
      ac_rate: 15200,
      bata: 4800,
    },
    {
      vehicle_id: 'ertiga',
      number_of_days: '8 nights - 9 days',
      max_km: 900,
      ac_rate: 17100,
      bata: 5400,
    },
    {
      vehicle_id: 'ertiga',
      number_of_days: '9 nights - 10 days',
      max_km: 1000,
      ac_rate: 19000,
      bata: 6000,
    },
  ];

  const innovaRate = [
    {
      vehicle_id: 'innova',
      number_of_days: '1 night - 2 days',
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
  ];
  const crystaRate = [
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
  const hycrossRate = [
    {
      vehicle_id: 'hycross',
      number_of_days: '1 night - 2 days',
      max_km: 160,
      ac_rate: 6400,
      bata: 1500,
    },
    {
      vehicle_id: 'hycross',
      number_of_days: '2 nights - 3 days',
      max_km: 300,
      ac_rate: 9100,
      bata: 2100,
    },
    {
      vehicle_id: 'hycross',
      number_of_days: '3 nights - 4 days',
      max_km: 400,
      ac_rate: 11800,
      bata: 2700,
    },
    {
      vehicle_id: 'hycross',
      number_of_days: '4 nights - 5 days',
      max_km: 500,
      ac_rate: 14500,
      bata: 3300,
    },
    {
      vehicle_id: 'hycross',
      number_of_days: '5 nights - 6 days',
      max_km: 600,
      ac_rate: 17200,
      bata: 3900,
    },
    {
      vehicle_id: 'hycross',
      number_of_days: '6 nights - 7 days',
      max_km: 700,
      ac_rate: 19900,
      bata: 4600,
    },
    {
      vehicle_id: 'hycross',
      number_of_days: '7 nights - 8 days',
      max_km: 800,
      ac_rate: 22600,
      bata: 5200,
    },
    {
      vehicle_id: 'hycross',
      number_of_days: '8 nights - 9 days',
      max_km: 900,
      ac_rate: 54300,
      bata: 5800,
    },
    {
      vehicle_id: 'hycross',
      number_of_days: '9 nights - 10 days',
      max_km: 1000,
      ac_rate: 28000,
      bata: 6400,
    },
  ];

  
  await db.vehicleRates.createMany({ data: hycrossRate });
  await db.vehicleRates.createMany({ data: crystaRate });
  await db.vehicleRates.createMany({ data: swiftRate });
  await db.vehicleRates.createMany({ data: swiftDzireRate });
  await db.vehicleRates.createMany({ data: ertigaRate });
  await db.vehicleRates.createMany({ data: etiosRate });
  await db.vehicleRates.createMany({ data: innovaRate });
}

export async function clearAllVehicleRates (){
  await db.vehiclesMaster.deleteMany()
  await db.vehicleRates.deleteMany()
}

export async function AddDefaultValuesForTravellerRatePg() {
  const ultraLuxury8seat = [
    {
      vehicle_id: 'traveller_ultra_luxury_08',
      number_of_days: '1 night - 2 days',
      max_km: 160,
      ac_rate: 8400,
      bata: 1600,
    },
    {
      vehicle_id: 'traveller_ultra_luxury_08',
      number_of_days: '2 nights - 3 days',
      max_km: 300,
      ac_rate: 12600,
      bata: 2400,
    },
    {
      vehicle_id: 'traveller_ultra_luxury_08',
      number_of_days: '3 nights - 4 days',
      max_km: 400,
      ac_rate: 16800,
      bata: 3200,
    },
    {
      vehicle_id: 'traveller_ultra_luxury_08',
      number_of_days: '4 nights - 5 days',
      max_km: 500,
      ac_rate: 21000,
      bata: 4000,
    },
    {
      vehicle_id: 'traveller_ultra_luxury_08',
      number_of_days: '5 nights - 6 days',
      max_km: 600,
      ac_rate: 25200,
      bata: 4800,
    },
    {
      vehicle_id: 'traveller_ultra_luxury_08',
      number_of_days: '6 nights - 7 days',
      max_km: 700,
      ac_rate: 29400,
      bata: 5600,
    },
    {
      vehicle_id: 'traveller_ultra_luxury_08',
      number_of_days: '7 nights - 8 days',
      max_km: 800,
      ac_rate: 33600,
      bata: 6400,
    },
    {
      vehicle_id: 'traveller_ultra_luxury_08',
      number_of_days: '8 nights - 9 days',
      max_km: 900,
      ac_rate: 37800,
      bata: 7200,
    },
    {
      vehicle_id: 'traveller_ultra_luxury_08',
      number_of_days: '9 nights - 10 days',
      max_km: 1000,
      ac_rate: 42000,
      bata: 8000,
    },
  ];
  const ultraLuxury10seat = [
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
  ];
  const premium10seat = [
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
  ];

  const premium12seat = [
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
  ];
  const premium17seat = [
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
  ];

  const premium20seat = [
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
  ];

  const premium26seat = [
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
  ];
  const executive12Seat = [
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
  ];

  const executive20Seat = [
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
  ];
  const executive26Seat = [
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
  ];

   
  await db.vehicleRates.createMany({data:ultraLuxury8seat})
  await db.vehicleRates.createMany({data:ultraLuxury10seat})
  await db.vehicleRates.createMany({data:premium10seat})
  await db.vehicleRates.createMany({data:premium12seat})
  await db.vehicleRates.createMany({data:premium17seat})
  await db.vehicleRates.createMany({data:premium20seat})
  await db.vehicleRates.createMany({data:premium26seat})
  await db.vehicleRates.createMany({data:executive12Seat})
  await db.vehicleRates.createMany({data:executive20Seat})
  await db.vehicleRates.createMany({data:executive26Seat})
 
}

export async function AddUrbaniaDetails() {
  const data = [
    {
      vehicle_type: 'urbania_15_premium',
      name: '15 SEATER PREMIUM URBANIA IN KERALA',
      description: '15 SEATER PREMIUM URBANIA IN KERALA',
      pax: 15,
      extra_per_km: 30,
    },
    {
      vehicle_type: 'urbania_15_luxury',
      name: 'Executive Tempo Traveller - 26 seater',
      pax: 15,
      description: '15 SEATER LUXURY URBANIA RATES IN KERALA',
      extra_per_km: 30,
    },
  ];
  
  await db.vehiclesMaster.createMany({ data });
}



export async function AddBusMasterDetailsDefault() {
  const data = [
    {
      vehicle_type: 'bus_26_benz',
      name: '26 SEATER BENZ',
      description: '26 SEATER BENZ',
      pax: 26,
      extra_per_km: 40,
      
    },
    {
      vehicle_type: 'bus_34',
      name: '34 SEATER MINI BUS ',
      description: '34 SEATER MINI BUS ',
      pax: 34,
      extra_per_km: 40,
      
    },
    {
      vehicle_type: 'bus_35_benz',
      name: '35 SEATER BENZ ',
      description: '35 SEATER BENZ ',
      pax: 35,
      extra_per_km: 45,
      
    },
    {
      vehicle_type: 'bus_45_benz',
      name: '45 SEATER LUXURY BENZ GLIDER',
      description: '45 SEATER LUXURY BENZ GLIDER',
      pax: 45,
      extra_per_km: 60,
      
    },
    {
      vehicle_type: 'bus_53_benz',
      name: '53 SEATER LUXURY MULTI BENZ GLIDER',
      description: '53 SEATER LUXURY MULTI BENZ GLIDER',
      pax: 53,
      extra_per_km: 70,
      
    },
  ];
  await db.vehiclesMaster.createMany({data})
}

export async function AddBusRateDefaults() {
  const bus26seat = [
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
  ];

  const bus34Seat = [
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
  ];

  const bus35Seat = [
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
  ];

  const bus45Seat = [
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
  ];
  const bus53Seat = [
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
  await db.vehicleRates.createMany({data:bus26seat})
  await db.vehicleRates.createMany({data:bus34Seat})
  await db.vehicleRates.createMany({data:bus35Seat})
  await db.vehicleRates.createMany({data:bus45Seat})
  await db.vehicleRates.createMany({data:bus53Seat})
}

export async function AddUrbaniaDefaults() {
  const urbania15Seat = [
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
  ];

  const urbania15Premium = [
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
  ];

  
  await db.vehicleRates.createMany({ data: urbania15Premium });
  await db.vehicleRates.createMany({ data: urbania15Seat });
}


export async function AddImagesForCarouselPg() {
  const carData = [
    {
      vehicle_type: 'swift',
      title: 'SWIFT HATCHBACK IMAGES',
      list: [
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Swift/eghskbpdguepnhozermj',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Swift/u4rdntlhwj097x5mcgts',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Swift/sctldq5clevvtgorevji',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Swift/fr6hpfup9zzs4ybbqx4p',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Swift/eghskbpdguepnhozermj',
      ],
    },
    {
      vehicle_type: 'swift_dzire',
      title: 'SWIFT DZIRE SEDAN',
      list: [
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Dzire/xkthu4hmzuyfqsusifit',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Dzire/fsv2lnxpncd3cxqithlu',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Dzire/cz9hllrx1eqqcqb0dpzy',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Dzire/ntuagvyxxmnnpyfve8dc',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Dzire/mijwlidnecfwmegextbq',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Dzire/xqxu3uwgdmnmxdscnuil',
      ],
    },
    {
      vehicle_type: 'etios',
      title: 'TOYOTA ETIOS',
      list: [
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Ethios/ulkjbsmculculkjpdbsg',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Ethios/rr0sy5v8yihhwyrhsjsv',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Ethios/mb9dqntpnydtgazi6mvv',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Ethios/xxgvmabhrp29wdzwzioo',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Ethios/dhboxum2hzokmkjilkqq',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Ethios/kvqniirwxdfnmqvynvvl',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Ethios/jfggo0oo1ycxsqexbvma'
      ],
    },
    {
      vehicle_type: 'ertiga',
      title: 'MARUTHI SUZUKI ERTIGA',
      list: [
       'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Ertiga/wyfmj9p7myxqn3mcktde',
       'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Ertiga/i32xmj9yix7aukpqhodf',
       'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Ertiga/zurr5hcn1cvoaknxjhlb',
       'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Ertiga/tpcsmpsknbx80qkixctg',
       'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Ertiga/o29ghzvesxblzumqmgtn',
       'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Ertiga/ypwykb809mwnzvggkcfy',
       'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Ertiga/ftylp3twvbfxvgy7syw7'
      ],
    },
    {
      vehicle_type: 'innova',
      title: 'TOYOTA INNOVA',
      list: [
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Innova/aicxeq3ok8b2qhenl2qe',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Innova/lr5kzcjyedxydr0kotri',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Innova/okkuf2vdpohi965n2a62',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Hycross/vthizg9cjic9pdis6wcm',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Hycross/c3zysorzw7la3tsitubc',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Hycross/yi2a53obetz6m9bkxr5l',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Hycross/bkytaat8y261e3gue3no'
      ],
    },
    {
      vehicle_type: 'hycross',
      title: 'TOYOTA HYCROSS',
      list: [
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Hycross/amhmn1geccy6iqjf6sgc',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Hycross/xodcknl6xgykur9dusps',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Hycross/t5sxxkbmp4z3xnyjhznx',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Hycross/vthizg9cjic9pdis6wcm',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Hycross/c3zysorzw7la3tsitubc',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Hycross/yi2a53obetz6m9bkxr5l',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Hycross/bkytaat8y261e3gue3no'
      ],
    },
    {
      vehicle_type: 'crysta',
      title: 'TOYOTA CRYSTA',
      list: [
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Crysta/neycmidlnxpws7ko0dli',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Crysta/qnu99oo2hpcf4v4i1jbp',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Crysta/kwegrepglabgztaomk3e',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Crysta/oim99fbukko170asrylm',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Crysta/a0o5pmgqs5dyamxj6iye',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Crysta/tuipy2zjcphnhivx5vh0'
      ],
    },
   
   
  ];
  const travellerdata = [
    {
      vehicle_type: 'traveller_ultra_luxury_08',
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
      vehicle_type: 'traveller_ultra_luxury_10',
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
      vehicle_type: 'traveller_premium_10',
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
      vehicle_type: 'traveller_premium_12',
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
      vehicle_type: 'traveller_premium_17',
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
      vehicle_type: 'traveller_premium_20',
      title:'TRAVELLER PREMIUM 20 SEATER',
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
      vehicle_type: 'traveller_premium_26',
      title: '26 SEATER PREMIUM TEMPO TRAVELLER IMAGES',
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
      vehicle_type: 'traveller_executive_12',
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
      vehicle_type: 'traveller_executive_17',
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
      vehicle_type: 'traveller_executive_20',
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
      vehicle_type: 'traveller_executive_26',
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

  const urbania = [
    {
      vehicle_type: 'urbania_15_premium',
      title: '15 SEATER PREMIUM URBANIA IN KERALA',
      list: [
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Urbania/i71y25fvcbii21req00p',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Urbania/vnxdvssauzjffxozmmci',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Urbania/uet1zhej3huu6jlbjcji',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Urbania/sxsvrjvv7pqeu3pxp6yx',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/bmucesyidjtbpq5okrcb',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/dzx6d0qbubi7ewctmktm',
      ],
    },
    {
      vehicle_type: 'urbania_15_luxury',
      title: '15 SEATER LUXURY URBANIA IN KERALA',
      list: [
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/nff58q9vbs5gd8n5l1nl',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Urbania/g8bcbsto1ociogt11zui',
        'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Urbania/lgbfwh9kjyhho4int4kv',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/dzx6d0qbubi7ewctmktm',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/bmucesyidjtbpq5okrcb',
        'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/dzx6d0qbubi7ewctmktm',
      ],
    },
  ];

  const busData = [
    {
      vehicle_type: 'bus_26_benz',
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
      vehicle_type: 'bus_34',
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
      vehicle_type: 'bus_35_benz',
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
      vehicle_type: 'bus_45_benz',
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
      vehicle_type: 'bus_53_benz',
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

  console.log('Setting default values');
  //   await kv.set('traveller_images', data);
  //   await kv.set('bus_images', busData);
  //   await kv.set('urbania_images', urbania);
  await db.carouselImages.deleteMany();
  await db.carouselImages.createMany({data: carData})
  await db.carouselImages.createMany({ data: urbania });
  await db.carouselImages.createMany({data:busData})
  await db.carouselImages.createMany({data:travellerdata})
}

export const DefaultReviews = async () => {
  const data = [
    {
      reviewer: 'Kavir Bhati',
      text: 'Service provided by Cochin Dream Destinations team was more from the expected level. My great experience started even before i begun my trip. They had upgraded my vehicle without any extra charges. Mr Sunil, the driver made the trip more memorable by bringing us to many different places.By that we went to more sights within short period of time.I would like to thank the whole team for their service. Keep up the good job.I would definitely recommend them',
    },
    {
      reviewer: 'Gopinath P',
      text: 'We had trip from Cochin to Munnar to Thekkady to Cochin with Cochin Dream Destinations Kerala Taxi service. It was a nice trip with Gokul who taken care of our tour for entire 4 days. Very decent, very patience, very respectful. I will recommend this kochi taxi service company for my friends',
    },
    {
      reviewer: 'Manish Singhal',
      text: " Initially, I was worried about the trip and nature of driver but after few minutes of meeting with Mr. Shaji, I got relief and literally have awesome experience with him. Apart from driver, he is an artistic photographer and familiar person. Hat's Off to his punctuality and car cleanliness KL07 CE 4345 (Linea). I highly recommend him. Thanks to Pepperkerla for this wonderful experience",
    },
    {
      reviewer: 'Kavir Bhati ',
      text: 'Service provided by Cochin Dream Destinations team was more from the expected level. My great experience started even before i begun my trip. They had upgraded my vehicle without any extra charges. Mr Sunil, the driver made the trip more memorable by bringing us to many different places.By that we went to more sights within short period of time.I would like to thank the whole team for their service. Keep up the good job.I would definitely recommend them',
    },
  ];
  await kv.set('reviews', data);
  console.log('Setting default values');
  return data;
};
