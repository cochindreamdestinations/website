import getAllBusTypes from '@/actions/bus';
import {
  AddBusDefaults,
  AddBusDetails,
  AddDefaultValuesForCars,
  AddDefaultValuesForCarsRate,
  AddDefaultValuesForTraveller,
  AddDefaultValuesForTravellerRate,
  AddImagesForCarousel,
  AddUrbaniaDefaults,
  AddUrbaniaDetails,
  DefaultReviews,
} from '@/actions/defaultKv';
import getAllTravelerInsideImages, {
  getRateTableForId,
  getTravelerCarouselImages,
} from '@/actions/traveller';
import { Button, Container, Stack } from '@mantine/core';

export default async function Defaultpage() {
  await AddImagesForCarousel();
  await AddBusDetails();
  await AddDefaultValuesForTravellerRate();
  await AddDefaultValuesForTraveller();
  await AddDefaultValuesForCars();
  await AddDefaultValuesForCarsRate();

  await AddUrbaniaDetails();
  await AddUrbaniaDefaults();
  await DefaultReviews();

  await AddBusDefaults();

  console.log('tempo carousel  ', await getTravelerCarouselImages());

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
