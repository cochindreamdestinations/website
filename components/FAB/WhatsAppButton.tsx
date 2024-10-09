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
        href="https://wa.me/+918547992024"
        target="_blank"
        aria-label='Whatsapp Icon'
      >
        <RiWhatsappFill size={30} name="WHatsapp button" />
      </ActionIcon>
    </Affix>
  );
}
