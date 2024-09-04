
import { AddBusMasterDetailsDefault, AddBusRateDefaults, AddDefaultValuesForCars, AddDefaultValuesForCarsRate, AddDefaultValuesForTravellerPg, AddDefaultValuesForTravellerRatePg, AddImagesForCarouselPg, AddUrbaniaDefaults, AddUrbaniaDetails, clearAllVehicleRates } from '@/actions/defaultPg';
import {
  addDefaultValuesForPlaces,
  addSightSeeingDefaults,
  saveVehicleRatesCar,
} from '@/actions/places';

import { Button, Container, Stack } from '@mantine/core';

export default async function Defaultpage() {
  await clearAllVehicleRates()
  await AddImagesForCarouselPg();
  await AddBusMasterDetailsDefault()
  
  await AddUrbaniaDetails();
 
  await AddDefaultValuesForTravellerPg();
  await AddDefaultValuesForTravellerRatePg();
  await AddDefaultValuesForCars();
  await AddDefaultValuesForCarsRate();
  await AddBusRateDefaults();
  await addDefaultValuesForPlaces();
  
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
