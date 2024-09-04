import getAllTravelerInsideImages, {
  RateList,
  Traveller,
  TravellerWithData,
  getTravelerCarouselImages,
} from '@/actions/traveller';
import ServerCarousel from '@/components/Carousel/ServerCarousel';
import CallUsNowButtons from '@/components/GetInTouch/CallUsNowButton';
import RateTableComponent from '@/components/RateTable/RateTable';
import RateTablePredata from '@/components/RateTable/RateTablePreData';
import TempoTravellerHeading from '@/components/TempTravellerHeading/TempoTravellerHeading';

const travellerData = [
  {
      "id": "cm0o6vedv000wr92wyjl57wiq",
      "name": "Luxury Tempo Traveller - 8 seater",
      "vehicle_type": "traveller_ultra_luxury_08",
      "description": "08 SEATER ULTRA LUXURY TEMPO TRAVELLER",
      "pax": 8,
      "extra_per_km": 24,
      "data": [
          {
              "id": 8011,
              "number_of_days": "1 night - 2 days",
              "max_km": 160,
              "vehicle_id": "traveller_ultra_luxury_08",
              "ac_rate": 8400,
              "bata": 1600
          },
          {
              "id": 8012,
              "number_of_days": "2 nights - 3 days",
              "max_km": 300,
              "vehicle_id": "traveller_ultra_luxury_08",
              "ac_rate": 12600,
              "bata": 2400
          },
          {
              "id": 8013,
              "number_of_days": "3 nights - 4 days",
              "max_km": 400,
              "vehicle_id": "traveller_ultra_luxury_08",
              "ac_rate": 16800,
              "bata": 3200
          },
          {
              "id": 8014,
              "number_of_days": "4 nights - 5 days",
              "max_km": 500,
              "vehicle_id": "traveller_ultra_luxury_08",
              "ac_rate": 21000,
              "bata": 4000
          },
          {
              "id": 8015,
              "number_of_days": "5 nights - 6 days",
              "max_km": 600,
              "vehicle_id": "traveller_ultra_luxury_08",
              "ac_rate": 25200,
              "bata": 4800
          },
          {
              "id": 8016,
              "number_of_days": "6 nights - 7 days",
              "max_km": 700,
              "vehicle_id": "traveller_ultra_luxury_08",
              "ac_rate": 29400,
              "bata": 5600
          },
          {
              "id": 8017,
              "number_of_days": "7 nights - 8 days",
              "max_km": 800,
              "vehicle_id": "traveller_ultra_luxury_08",
              "ac_rate": 33600,
              "bata": 6400
          },
          {
              "id": 8018,
              "number_of_days": "8 nights - 9 days",
              "max_km": 900,
              "vehicle_id": "traveller_ultra_luxury_08",
              "ac_rate": 37800,
              "bata": 7200
          },
          {
              "id": 8019,
              "number_of_days": "9 nights - 10 days",
              "max_km": 1000,
              "vehicle_id": "traveller_ultra_luxury_08",
              "ac_rate": 42000,
              "bata": 8000
          }
      ]
  },
  {
      "id": "cm0o6vedv000xr92w8lapkot0",
      "name": "Luxury Tempo Traveller - 10 seater",
      "vehicle_type": "traveller_ultra_luxury_10",
      "description": "10 SEATER ULTRA LUXURY TEMPO TRAVELLER",
      "pax": 10,
      "extra_per_km": 28,
      "data": [
          {
              "id": 8020,
              "number_of_days": "1 night - 2 days",
              "max_km": 160,
              "vehicle_id": "traveller_ultra_luxury_10",
              "ac_rate": 9400,
              "bata": 1600
          },
          {
              "id": 8021,
              "number_of_days": "2 nights - 3 days",
              "max_km": 300,
              "vehicle_id": "traveller_ultra_luxury_10",
              "ac_rate": 14100,
              "bata": 2400
          },
          {
              "id": 8022,
              "number_of_days": "3 nights - 4 days",
              "max_km": 400,
              "vehicle_id": "traveller_ultra_luxury_10",
              "ac_rate": 18800,
              "bata": 3200
          },
          {
              "id": 8023,
              "number_of_days": "4 nights - 5 days",
              "max_km": 500,
              "vehicle_id": "traveller_ultra_luxury_10",
              "ac_rate": 23500,
              "bata": 4000
          },
          {
              "id": 8024,
              "number_of_days": "5 nights - 6 days",
              "max_km": 600,
              "vehicle_id": "traveller_ultra_luxury_10",
              "ac_rate": 28200,
              "bata": 4800
          },
          {
              "id": 8025,
              "number_of_days": "6 nights - 7 days",
              "max_km": 700,
              "vehicle_id": "traveller_ultra_luxury_10",
              "ac_rate": 32900,
              "bata": 5600
          },
          {
              "id": 8026,
              "number_of_days": "7 nights - 8 days",
              "max_km": 800,
              "vehicle_id": "traveller_ultra_luxury_10",
              "ac_rate": 37600,
              "bata": 6400
          },
          {
              "id": 8027,
              "number_of_days": "8 nights - 9 days",
              "max_km": 900,
              "vehicle_id": "traveller_ultra_luxury_10",
              "ac_rate": 42300,
              "bata": 7200
          },
          {
              "id": 8028,
              "number_of_days": "9 nights - 10 days",
              "max_km": 1000,
              "vehicle_id": "traveller_ultra_luxury_10",
              "ac_rate": 47000,
              "bata": 8000
          }
      ]
  },
  {
      "id": "cm0o6vedv000yr92wsmc8ovzk",
      "name": "Premium Tempo Traveller - 10 seater",
      "vehicle_type": "traveller_premium_10",
      "description": "10 SEATER PREMIUM TEMPO TRAVELLER",
      "pax": 10,
      "extra_per_km": 23,
      "data": [
          {
              "id": 8029,
              "number_of_days": "1 night - 2 days",
              "max_km": 160,
              "vehicle_id": "traveller_premium_10",
              "ac_rate": 7600,
              "bata": 1400
          },
          {
              "id": 8030,
              "number_of_days": "2 nights - 3 days",
              "max_km": 300,
              "vehicle_id": "traveller_premium_10",
              "ac_rate": 11400,
              "bata": 2100
          },
          {
              "id": 8031,
              "number_of_days": "3 nights - 4 days",
              "max_km": 400,
              "vehicle_id": "traveller_premium_10",
              "ac_rate": 15200,
              "bata": 2800
          },
          {
              "id": 8032,
              "number_of_days": "4 nights - 5 days",
              "max_km": 500,
              "vehicle_id": "traveller_premium_10",
              "ac_rate": 19000,
              "bata": 3500
          },
          {
              "id": 8033,
              "number_of_days": "5 nights - 6 days",
              "max_km": 600,
              "vehicle_id": "traveller_premium_10",
              "ac_rate": 22800,
              "bata": 4200
          },
          {
              "id": 8034,
              "number_of_days": "6 nights - 7 days",
              "max_km": 700,
              "vehicle_id": "traveller_premium_10",
              "ac_rate": 26600,
              "bata": 4900
          },
          {
              "id": 8035,
              "number_of_days": "7 nights - 8 days",
              "max_km": 800,
              "vehicle_id": "traveller_premium_10",
              "ac_rate": 30400,
              "bata": 5600
          },
          {
              "id": 8036,
              "number_of_days": "8 nights - 9 days",
              "max_km": 900,
              "vehicle_id": "traveller_premium_10",
              "ac_rate": 34200,
              "bata": 6300
          },
          {
              "id": 8037,
              "number_of_days": "9 nights - 10 days",
              "max_km": 1000,
              "vehicle_id": "traveller_premium_10",
              "ac_rate": 38000,
              "bata": 7000
          }
      ]
  },
  {
      "id": "cm0o6vedv000zr92wvffzcyzt",
      "name": "Premium Tempo Traveller - 12 seater",
      "vehicle_type": "traveller_premium_12",
      "description": "12 SEATER PREMIUM TEMPO TRAVELLER",
      "pax": 12,
      "extra_per_km": 23,
      "data": [
          {
              "id": 8038,
              "number_of_days": "1 night - 2 days",
              "max_km": 160,
              "vehicle_id": "traveller_premium_12",
              "ac_rate": 8000,
              "bata": 1400
          },
          {
              "id": 8039,
              "number_of_days": "2 nights - 3 days",
              "max_km": 300,
              "vehicle_id": "traveller_premium_12",
              "ac_rate": 12000,
              "bata": 2100
          },
          {
              "id": 8040,
              "number_of_days": "3 nights - 4 days",
              "max_km": 400,
              "vehicle_id": "traveller_premium_12",
              "ac_rate": 16000,
              "bata": 2800
          },
          {
              "id": 8041,
              "number_of_days": "4 nights - 5 days",
              "max_km": 500,
              "vehicle_id": "traveller_premium_12",
              "ac_rate": 20000,
              "bata": 3500
          },
          {
              "id": 8042,
              "number_of_days": "5 nights - 6 days",
              "max_km": 600,
              "vehicle_id": "traveller_premium_12",
              "ac_rate": 24000,
              "bata": 4200
          },
          {
              "id": 8043,
              "number_of_days": "6 nights - 7 days",
              "max_km": 700,
              "vehicle_id": "traveller_premium_12",
              "ac_rate": 28000,
              "bata": 4900
          },
          {
              "id": 8044,
              "number_of_days": "7 nights - 8 days",
              "max_km": 800,
              "vehicle_id": "traveller_premium_12",
              "ac_rate": 32000,
              "bata": 5600
          },
          {
              "id": 8045,
              "number_of_days": "8 nights - 9 days",
              "max_km": 900,
              "vehicle_id": "traveller_premium_12",
              "ac_rate": 36000,
              "bata": 6300
          },
          {
              "id": 8046,
              "number_of_days": "9 nights - 10 days",
              "max_km": 1000,
              "vehicle_id": "traveller_premium_12",
              "ac_rate": 40000,
              "bata": 7000
          }
      ]
  },
  {
      "id": "cm0o6vedv0010r92wfoj47dbu",
      "name": "Executive Tempo Traveller - 10-12 seater",
      "vehicle_type": "traveller_executive_12",
      "description": "10-12 SEATER EXECUTIVE TEMPO TRAVELLER",
      "pax": 12,
      "extra_per_km": 23,
      "data": [
          {
              "id": 8074,
              "number_of_days": "1 night - 2 days",
              "max_km": 160,
              "vehicle_id": "traveller_executive_12",
              "ac_rate": 6600,
              "bata": 1400
          },
          {
              "id": 8075,
              "number_of_days": "2 nights - 3 days",
              "max_km": 300,
              "vehicle_id": "traveller_executive_12",
              "ac_rate": 9900,
              "bata": 2100
          },
          {
              "id": 8076,
              "number_of_days": "3 nights - 4 days",
              "max_km": 400,
              "vehicle_id": "traveller_executive_12",
              "ac_rate": 13200,
              "bata": 2800
          },
          {
              "id": 8077,
              "number_of_days": "4 nights - 5 days",
              "max_km": 500,
              "vehicle_id": "traveller_executive_12",
              "ac_rate": 16500,
              "bata": 3500
          },
          {
              "id": 8078,
              "number_of_days": "5 nights - 6 days",
              "max_km": 600,
              "vehicle_id": "traveller_executive_12",
              "ac_rate": 19800,
              "bata": 4200
          },
          {
              "id": 8079,
              "number_of_days": "6 nights - 7 days",
              "max_km": 700,
              "vehicle_id": "traveller_executive_12",
              "ac_rate": 23100,
              "bata": 4900
          },
          {
              "id": 8080,
              "number_of_days": "7 nights - 8 days",
              "max_km": 800,
              "vehicle_id": "traveller_executive_12",
              "ac_rate": 26400,
              "bata": 5600
          },
          {
              "id": 8081,
              "number_of_days": "8 nights - 9 days",
              "max_km": 900,
              "vehicle_id": "traveller_executive_12",
              "ac_rate": 29700,
              "bata": 6300
          },
          {
              "id": 8082,
              "number_of_days": "9 nights - 10 days",
              "max_km": 1000,
              "vehicle_id": "traveller_executive_12",
              "ac_rate": 33000,
              "bata": 7000
          }
      ]
  },
  {
      "id": "cm0o6vedv0011r92w9cirda8m",
      "name": "Premium Tempo Traveller - 17 seater",
      "vehicle_type": "traveller_premium_17",
      "description": "17 SEATER PREMIUM TEMPO TRAVELLER",
      "pax": 17,
      "extra_per_km": 25,
      "data": [
          {
              "id": 8047,
              "number_of_days": "1 night - 2 days",
              "max_km": 160,
              "vehicle_id": "traveller_premium_17",
              "ac_rate": 7400,
              "bata": 1600
          },
          {
              "id": 8048,
              "number_of_days": "2 nights - 3 days",
              "max_km": 300,
              "vehicle_id": "traveller_premium_17",
              "ac_rate": 11100,
              "bata": 2400
          },
          {
              "id": 8049,
              "number_of_days": "3 nights - 4 days",
              "max_km": 400,
              "vehicle_id": "traveller_premium_17",
              "ac_rate": 14800,
              "bata": 3200
          },
          {
              "id": 8050,
              "number_of_days": "4 nights - 5 days",
              "max_km": 500,
              "vehicle_id": "traveller_premium_17",
              "ac_rate": 18500,
              "bata": 4000
          },
          {
              "id": 8051,
              "number_of_days": "5 nights - 6 days",
              "max_km": 600,
              "vehicle_id": "traveller_premium_17",
              "ac_rate": 22200,
              "bata": 4800
          },
          {
              "id": 8052,
              "number_of_days": "6 nights - 7 days",
              "max_km": 700,
              "vehicle_id": "traveller_premium_17",
              "ac_rate": 25900,
              "bata": 5600
          },
          {
              "id": 8053,
              "number_of_days": "7 nights - 8 days",
              "max_km": 800,
              "vehicle_id": "traveller_premium_17",
              "ac_rate": 29600,
              "bata": 6400
          },
          {
              "id": 8054,
              "number_of_days": "8 nights - 9 days",
              "max_km": 900,
              "vehicle_id": "traveller_premium_17",
              "ac_rate": 33300,
              "bata": 7200
          },
          {
              "id": 8055,
              "number_of_days": "9 nights - 10 days",
              "max_km": 1000,
              "vehicle_id": "traveller_premium_17",
              "ac_rate": 37000,
              "bata": 8000
          }
      ]
  },
  {
      "id": "cm0o6vedv0012r92w78hfsjv2",
      "name": "Executive Tempo Traveller - 17 seater",
      "vehicle_type": "traveller_executive_17",
      "description": "17 SEATER EXECUTIVE TEMPO TRAVELLER",
      "pax": 17,
      "extra_per_km": 25,
      "data": []
  },
  {
      "id": "cm0o6vedv0013r92wi6ucypp9",
      "name": "Premium Tempo Traveller - 20 seater",
      "vehicle_type": "traveller_premium_20",
      "description": "20 SEATER PREMIUM TEMPO TRAVELLER",
      "pax": 20,
      "extra_per_km": 28,
      "data": [
          {
              "id": 8056,
              "number_of_days": "1 night - 2 days",
              "max_km": 160,
              "vehicle_id": "traveller_premium_20",
              "ac_rate": 10400,
              "bata": 2000
          },
          {
              "id": 8057,
              "number_of_days": "2 nights - 3 days",
              "max_km": 300,
              "vehicle_id": "traveller_premium_20",
              "ac_rate": 15600,
              "bata": 3000
          },
          {
              "id": 8058,
              "number_of_days": "3 nights - 4 days",
              "max_km": 400,
              "vehicle_id": "traveller_premium_20",
              "ac_rate": 20800,
              "bata": 4000
          },
          {
              "id": 8059,
              "number_of_days": "4 nights - 5 days",
              "max_km": 500,
              "vehicle_id": "traveller_premium_20",
              "ac_rate": 26000,
              "bata": 5000
          },
          {
              "id": 8060,
              "number_of_days": "5 nights - 6 days",
              "max_km": 600,
              "vehicle_id": "traveller_premium_20",
              "ac_rate": 31200,
              "bata": 6000
          },
          {
              "id": 8061,
              "number_of_days": "6 nights - 7 days",
              "max_km": 700,
              "vehicle_id": "traveller_premium_20",
              "ac_rate": 36400,
              "bata": 7000
          },
          {
              "id": 8062,
              "number_of_days": "7 nights - 8 days",
              "max_km": 800,
              "vehicle_id": "traveller_premium_20",
              "ac_rate": 41600,
              "bata": 8000
          },
          {
              "id": 8063,
              "number_of_days": "8 nights - 9 days",
              "max_km": 900,
              "vehicle_id": "traveller_premium_20",
              "ac_rate": 46800,
              "bata": 9000
          },
          {
              "id": 8064,
              "number_of_days": "9 nights - 10 days",
              "max_km": 1000,
              "vehicle_id": "traveller_premium_20",
              "ac_rate": 52000,
              "bata": 10000
          }
      ]
  },
  {
      "id": "cm0o6vedv0014r92wf03rj8rm",
      "name": "Executive Tempo Traveller - 20 seater",
      "vehicle_type": "traveller_executive_20",
      "description": "20 SEATER EXECUTIVE TEMPO TRAVELLER",
      "pax": 20,
      "extra_per_km": 28,
      "data": [
          {
              "id": 8083,
              "number_of_days": "1 night - 2 days",
              "max_km": 160,
              "vehicle_id": "traveller_executive_20",
              "ac_rate": 9000,
              "bata": 2000
          },
          {
              "id": 8084,
              "number_of_days": "2 nights - 3 days",
              "max_km": 300,
              "vehicle_id": "traveller_executive_20",
              "ac_rate": 13500,
              "bata": 3000
          },
          {
              "id": 8085,
              "number_of_days": "3 nights - 4 days",
              "max_km": 400,
              "vehicle_id": "traveller_executive_20",
              "ac_rate": 18000,
              "bata": 4000
          },
          {
              "id": 8086,
              "number_of_days": "4 nights - 5 days",
              "max_km": 500,
              "vehicle_id": "traveller_executive_20",
              "ac_rate": 22500,
              "bata": 5000
          },
          {
              "id": 8087,
              "number_of_days": "5 nights - 6 days",
              "max_km": 600,
              "vehicle_id": "traveller_executive_20",
              "ac_rate": 27000,
              "bata": 6000
          },
          {
              "id": 8088,
              "number_of_days": "6 nights - 7 days",
              "max_km": 700,
              "vehicle_id": "traveller_executive_20",
              "ac_rate": 31500,
              "bata": 7000
          },
          {
              "id": 8089,
              "number_of_days": "7 nights - 8 days",
              "max_km": 800,
              "vehicle_id": "traveller_executive_20",
              "ac_rate": 36000,
              "bata": 8000
          },
          {
              "id": 8090,
              "number_of_days": "8 nights - 9 days",
              "max_km": 900,
              "vehicle_id": "traveller_executive_20",
              "ac_rate": 40500,
              "bata": 9000
          },
          {
              "id": 8091,
              "number_of_days": "9 nights - 10 days",
              "max_km": 1000,
              "vehicle_id": "traveller_executive_20",
              "ac_rate": 45000,
              "bata": 10000
          }
      ]
  },
  {
      "id": "cm0o6vedv0015r92w0voxg2h5",
      "name": "Premium Tempo Traveller - 26 seater",
      "vehicle_type": "traveller_premium_26",
      "description": "26 SEATER PREMIUM TEMPO TRAVELLER",
      "pax": 26,
      "extra_per_km": 28,
      "data": [
          {
              "id": 8065,
              "number_of_days": "1 night - 2 days",
              "max_km": 160,
              "vehicle_id": "traveller_premium_26",
              "ac_rate": 13000,
              "bata": 2000
          },
          {
              "id": 8066,
              "number_of_days": "2 nights - 3 days",
              "max_km": 300,
              "vehicle_id": "traveller_premium_26",
              "ac_rate": 19500,
              "bata": 3000
          },
          {
              "id": 8067,
              "number_of_days": "3 nights - 4 days",
              "max_km": 400,
              "vehicle_id": "traveller_premium_26",
              "ac_rate": 26000,
              "bata": 4000
          },
          {
              "id": 8068,
              "number_of_days": "4 nights - 5 days",
              "max_km": 500,
              "vehicle_id": "traveller_premium_26",
              "ac_rate": 32500,
              "bata": 5000
          },
          {
              "id": 8069,
              "number_of_days": "5 nights - 6 days",
              "max_km": 600,
              "vehicle_id": "traveller_premium_26",
              "ac_rate": 39000,
              "bata": 6000
          },
          {
              "id": 8070,
              "number_of_days": "6 nights - 7 days",
              "max_km": 700,
              "vehicle_id": "traveller_premium_26",
              "ac_rate": 45500,
              "bata": 7000
          },
          {
              "id": 8071,
              "number_of_days": "7 nights - 8 days",
              "max_km": 800,
              "vehicle_id": "traveller_premium_26",
              "ac_rate": 52000,
              "bata": 8000
          },
          {
              "id": 8072,
              "number_of_days": "8 nights - 9 days",
              "max_km": 900,
              "vehicle_id": "traveller_premium_26",
              "ac_rate": 58500,
              "bata": 9000
          },
          {
              "id": 8073,
              "number_of_days": "9 nights - 10 days",
              "max_km": 1000,
              "vehicle_id": "traveller_premium_26",
              "ac_rate": 65000,
              "bata": 10000
          }
      ]
  },
  {
      "id": "cm0o6vedv0016r92wx1szuudn",
      "name": "Executive Tempo Traveller - 26 seater",
      "vehicle_type": "traveller_executive_26",
      "description": "26 SEATER EXECUTIVE TEMPO TRAVELLER",
      "pax": 20,
      "extra_per_km": 28,
      "data": [
          {
              "id": 8092,
              "number_of_days": "1 night - 2 days",
              "max_km": 160,
              "vehicle_id": "traveller_executive_26",
              "ac_rate": 11000,
              "bata": 2000
          },
          {
              "id": 8093,
              "number_of_days": "2 nights - 3 days",
              "max_km": 300,
              "vehicle_id": "traveller_executive_26",
              "ac_rate": 16500,
              "bata": 3000
          },
          {
              "id": 8094,
              "number_of_days": "3 nights - 4 days",
              "max_km": 400,
              "vehicle_id": "traveller_executive_26",
              "ac_rate": 22000,
              "bata": 4000
          },
          {
              "id": 8095,
              "number_of_days": "4 nights - 5 days",
              "max_km": 500,
              "vehicle_id": "traveller_executive_26",
              "ac_rate": 27500,
              "bata": 5000
          },
          {
              "id": 8096,
              "number_of_days": "5 nights - 6 days",
              "max_km": 600,
              "vehicle_id": "traveller_executive_26",
              "ac_rate": 33000,
              "bata": 6000
          },
          {
              "id": 8097,
              "number_of_days": "6 nights - 7 days",
              "max_km": 700,
              "vehicle_id": "traveller_executive_26",
              "ac_rate": 38500,
              "bata": 7000
          },
          {
              "id": 8098,
              "number_of_days": "7 nights - 8 days",
              "max_km": 800,
              "vehicle_id": "traveller_executive_26",
              "ac_rate": 44000,
              "bata": 8000
          },
          {
              "id": 8099,
              "number_of_days": "8 nights - 9 days",
              "max_km": 900,
              "vehicle_id": "traveller_executive_26",
              "ac_rate": 49500,
              "bata": 9000
          },
          {
              "id": 8100,
              "number_of_days": "9 nights - 10 days",
              "max_km": 1000,
              "vehicle_id": "traveller_executive_26",
              "ac_rate": 55000,
              "bata": 10000
          }
      ]
  }
]

export default async function Pricing() {

  
  const imgres = await fetch('https://cochindreamdestinations.vercel.app/api/public/traveller/carousel', {method:'GET'})
  const imagesList = await imgres.json();
  
  const components = travellerData?.map((item: TravellerWithData) => (
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
      <TempoTravellerHeading />
      {components}
    </>
  );
}
