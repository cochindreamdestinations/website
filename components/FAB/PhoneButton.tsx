import { RiWhatsappFill } from 'react-icons/ri';
import { FaPhone } from 'react-icons/fa6';

import { ActionIcon, Affix } from '@mantine/core';
import Link from 'next/link';

export default function PhoneFAB() {
  return (
    <Affix position={{ bottom: 100, right: 40 }}>
      <ActionIcon
        color="blue"
        radius="xl"
        size={60}
        component={Link}
        href="tel:+918281611024"
        target="_blank"
        aria-label='Phone Icon'
      >
        <FaPhone size={30} name="Phone button" />
      </ActionIcon>
    </Affix>
  );
}
