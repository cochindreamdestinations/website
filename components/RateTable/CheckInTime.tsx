'use client';
import { Container, List, Title } from '@mantine/core';

export default async function CheckInTime() {
  return (
    <Container my="md" bg="var(--mantine-color-blue-light)">
      <Title size="h5" role="h5">
        Note
      </Title>
      <List>
        <List.Item>
        Check in Time: 12 noon - Check out Time 09 am.

        </List.Item>
        <List.Item>Meal Inclusions: Welcome drink, Lunch, Tea with Snack, Dinner & Breakfast.
        </List.Item>
        <List.Item>
        Above rates are subjected to change during festive/season days / as per the availability

        </List.Item>
       
      </List>
    </Container>
  );
}
