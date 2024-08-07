'use client';
import { PlaceDataType, getPlaceWithId } from '@/actions/places';
import { smoochSans } from '@/app/font';
import { Container, Grid, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';

interface PlaceBannerProps {
  result: PlaceDataType | null;
}

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/places/aefrp2ovri012uiq0r0a';

export default async function PlaceBanner({ result }: PlaceBannerProps) {
  return (
    <Container my="md">
      <Title size="h2" className={smoochSans.className}>
        EXPLORING DESTINATIONS WITH PASSION
      </Title>
      <Text>
        Trip Wagon is the most prominent holiday makers when it comes to transportation with well
        experienced chauffer cum guide. We are dedicated to providing our customers the best holiday
        experiences without compromising in service quality. We have a team of well experienced
        staff to assist and guide you to feel the beauty of nature and enjoy their holidays at God's
        Own Country.
      </Text>
      <br />
      <Grid>
        <Grid.Col span={{ base: 12, md: 4, sm: 3 }}>
          <Image
            src={result?.image || DEFAULT_IMAGE}
            alt={`${result?.category} ${result?.id}`}
            width="280"
            height="200"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8, sm: 9 }}>
          <Stack>
            <Title size="h3" className={smoochSans.className}>
              {result?.place}
            </Title>
            <Text>{result?.description}</Text>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
