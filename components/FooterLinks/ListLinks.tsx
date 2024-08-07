import { Divider, Group } from '@mantine/core';
import Link from 'next/link';

export default function ListLinks() {
  return (
    <Group>
      <Link href="/" role="link">
        Home
      </Link>
      <Divider orientation="vertical" />
      <Link href="/rentals" role="link">
        Kerala Taxi Rentals
      </Link>
      <Divider orientation="vertical" />
      <Link href="#" role="link">
        Kochi Taxi Services
      </Link>
      <Divider orientation="vertical" />
      <Link href="/traveller" role="link">
        Kerala Tempo Traveller
      </Link>
      <Divider orientation="vertical" />
      <Link href="/urbania" role="link">
        Urbania Rentals
      </Link>
      <Divider orientation="vertical" />
      <Link href="/airport" role="link">
        Kochi Airport Taxi
      </Link>
      <Divider orientation="vertical" />
      <Link href="/houseboat" role="link">
        Alleppy House boats
      </Link>
      <Divider orientation="vertical" />
      <Link href="/bus" role="link">
        Kerala Bus Rentals
      </Link>
      <Divider orientation="vertical" />
      <Link href="/sabarimala">Sabarimala</Link>
      <Divider orientation="vertical" />
      <Link href="/taxi" role="link">
        Taxi Services
      </Link>
      <Divider orientation="vertical" />
      <Link href="/testimonials" role="link">
        Testimonials
      </Link>
      <Divider orientation="vertical" />
      <Link href="/gallery" role="link">
        Gallery
      </Link>
      <Divider orientation="vertical" />
      <Link href="#" role="link">
        Link to Us
      </Link>
      <Divider orientation="vertical" />
      <Link href="/terms" role="link">
        Terms and Conditions
      </Link>
      <Divider orientation="vertical" />
      <Link href="#" role="link">
        Usefull links
      </Link>
      <Divider orientation="vertical" />
      <Link href="#" role="link">
        Other links
      </Link>
      <Divider orientation="vertical" />
      <Link href="#" role="link">
        Latest news
      </Link>
      <Divider orientation="vertical" />
      <Link href="#" role="link">
        Contact Us
      </Link>
      <Divider orientation="vertical" />
    </Group>
  );
}
