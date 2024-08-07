import { RiWhatsappFill } from 'react-icons/ri';

import { ActionIcon, Affix } from '@mantine/core';
import Link from 'next/link';

export default function WhatsAppFAB() {
  return (
    <Affix position={{ bottom: 40, right: 40 }}>
      <ActionIcon
        color="green"
        radius="xl"
        size={60}
        component={Link}
        href="https://wa.me/+919539295705"
        target="_blank"
      >
        <RiWhatsappFill size={30} />
      </ActionIcon>
    </Affix>
  );
}
