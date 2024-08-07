import { Container, List, Title } from '@mantine/core';

export default function Notes() {
  const containerProps = {
    bg: 'chocolate',
    mt: 'md',
  };
  return (
    <Container {...containerProps}>
      <Title size="h4">Note:</Title>
      <List>
        <List.Item>Above rates are inclusive of toll, parking & driver bata.</List.Item>
        <List.Item>Above rates are subjected to change during festive/season days.</List.Item>
        <List.Item>
          Above rates are subjected to change based on availability/changes in fuel rates, etc.
        </List.Item>
      </List>
    </Container>
  );
}
