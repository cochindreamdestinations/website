'use client';
import { Group, Burger, rem, Drawer, List } from '@mantine/core';

import classes from './Header.module.css';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { link: '/', label: 'Home' },
  { link: '/rentals', label: 'Kerala Taxi Rentals' },
  { link: '/package', label: 'Kerala Taxi Packages' },
  { link: '/traveller', label: 'Kerala Tempo Traveller' },
  { link: '/urbania', label: 'Urbania Rentals' },
  { link: '/bus', label: 'Kerala Bus' },
  { link: '/sabarimala', label: 'Sabarimala Taxi' },
];

export function HeaderSearch() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const pathname = usePathname();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={pathname === link.link || undefined}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            hiddenFrom="sm"
            aria-label="Open Menu"
          />
          <Image src="/logo.webp" height={60} width={60} alt="Image background" />
          <Drawer opened={opened} onClose={close} title="Menu">
            <List spacing="xs" size="sm" center>
              {items.map((i, index) => (
                <List.Item key={index}>{i}</List.Item>
              ))}
            </List>
          </Drawer>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          {/* <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom="xs"
          /> */}
        </Group>
      </div>
    </header>
  );
}
