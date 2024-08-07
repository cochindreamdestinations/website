'use client';

import { Button, Center, Container, Group } from '@mantine/core';
import Link from 'next/link';

export default function CallUsNowButtons() {
  return (
    <Container my="md">
      <Center>
        <Group>
          <Button
            component={Link}
            variant="filled"
            color="green"
            href="tel:+919744716911"
            target="_blank"
          >
            CALL US +919744716911
          </Button>
          <Button
            component={Link}
            variant="filled"
            color="green"
            href="tel:+919744716911"
            target="_blank"
          >
            CALL US +919744716911
          </Button>
        </Group>
      </Center>
    </Container>
  );
}
