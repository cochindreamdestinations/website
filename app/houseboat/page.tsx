import CallUsNowButtons from '@/components/GetInTouch/CallUsNowButton';
import HouseboatTables from '@/components/houseboat/Tables';
import { Container, Center, Title, Table } from '@mantine/core';

export default function Houseboat() {
  return (
    <>
      
      <Container my="md">
        <Center>
          <Title size="h2" style={{ color: 'green' }}>
            Alleppey Houseboats
          </Title>
        </Center>
       <HouseboatTables/>
       <CallUsNowButtons />
      </Container>
    </>
  );
}
