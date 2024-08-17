import getAllBusTypes from '@/actions/bus';
import {
  AddBusDefaults,
  AddBusDetails,
  
  AddDefaultValuesForTraveller,
  AddDefaultValuesForTravellerRate,
  AddImagesForCarousel,
  DefaultReviews,
} from '@/actions/defaultKv';
import { AddBusMasterDetailsDefault, AddBusRateDefaults, AddDefaultValuesForCars, AddDefaultValuesForCarsRate, AddImagesForCarouselPg, AddUrbaniaDefaults, AddUrbaniaDetails, clearAllVehicleRates } from '@/actions/defaultPg';
import {
  addDefaultValuesForPlaces,
  addSightSeeingDefaults,
  saveVehicleRatesCar,
} from '@/actions/places';
import getAllTravelerInsideImages, {
  getRateTableForId,
  getTravelerCarouselImages,
} from '@/actions/traveller';
import { Button, Container, Stack } from '@mantine/core';

export default async function Defaultpage() {
  await clearAllVehicleRates()
  await AddImagesForCarouselPg();
  await AddBusMasterDetailsDefault()
  await AddBusRateDefaults();
  await AddDefaultValuesForTravellerRate();
  await AddDefaultValuesForTraveller();
  await AddDefaultValuesForCars();
  await AddDefaultValuesForCarsRate();
  await addDefaultValuesForPlaces();
  await AddUrbaniaDetails();
  await AddUrbaniaDefaults();

 

  

  return (
    <Container my="md">
      <Stack>
        <Button variant="filled" color="blue">
          Update Default Traveller
        </Button>
        <Button variant="filled" color="green">
          Update Default Rate
        </Button>
      </Stack>
    </Container>
  );
}
