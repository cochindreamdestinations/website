import { RiWhatsappFill } from 'react-icons/ri';
import { FaPhoneFlip } from "react-icons/fa6";

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
                                                                  >
                                                                          <FaPhoneFlip size={30} />
                                                                                </ActionIcon>
                                                                                    </Affix>
                                                                                      );
                                                                                      }