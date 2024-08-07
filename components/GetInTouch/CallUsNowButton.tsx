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
            href="tel:+918547992024"
            target="_blank"
          >
            CALL US +918547992024
          </Button>
          <Button
            component={Link}
            variant="filled"
            color="green"
            href="tel:+918547992024"
            target="_blank"
          >
            CALL US +918547992024
          </Button>
        </Group>
      </Center>
    </Container>
  );
}
