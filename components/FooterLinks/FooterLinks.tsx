'use client';
import { Text, Container, ActionIcon, Group, rem, Image } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { FaTripadvisor } from 'react-icons/fa';

import classes from './FooterLinks.module.css';

import ListLinks from './ListLinks';
import Link from 'next/link';

const data = [
  {
    title: 'Kerala Cabs',
    links: [
      { label: 'Home', link: '/' },
      { label: 'Taxi Rentals', link: '/rentals' },
      { label: 'Sabarimala', link: '/sabarimala' },
      { label: 'Gallery', link: '/gallery' },
    ],
  },
  {
    title: 'Kerala Traveller',
    links: [
      { label: 'Traveller', link: '/traveller' },
      { label: 'Urbania', link: '/urbania' },
      { label: 'Changelog', link: '#' },
      { label: 'Releases', link: '#' },
    ],
  },
  {
    title: 'House Boat',
    links: [
      { label: 'House Boat booking', link: '/houseboat' },
      { label: 'Follow on Twitter', link: '#' },
      { label: 'Email newsletter', link: '#' },
      { label: 'GitHub discussions', link: '#' },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>
          <strong> {group.title}</strong>
        </Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image
            src="https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r"
            width={120}
            height={120}
            about="Cochin Dream Destinations Logo"
            alt="Cochin Dream Destinations Logo"
          />
          <Text size="xs" c="dimmed" className={classes.description}>
            Make your next trip memmorable and safe with us.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 cochindreamdestinations.in All rights reserved.
        </Text>

        <Group gap={3} className={classes.social} justify="flex-end" wrap="nowrap">
          
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component={Link}
            aria-label="Youtube"
            href="https://www.youtube.com/channel/UCq8LnG9DHyyHnCJtLFAQUcg"
            target="_blank"
          >
            <Image fit="contain" alt='Youtube' src="https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/icons/youtube" />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            aria-label="Facebook"
            component={Link}
            href="https://www.youtube.com/@ReelsOnwheels-he4vf"
            target="_blank"
          >
           <Image fit="contain" alt='Facebook' src="https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/icons/facebook" />
           </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            aria-label="Instagram"
            component={Link}
            href="https://www.instagram.com/cochindreamdestinations"
            target="_blank"
          >
            <Image fit="contain" alt='Instagram' src="https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/icons/instagram" />
            </ActionIcon>

          <ActionIcon
            size="lg"
            
            variant="subtle"
            aria-label="Trip Advisor"
            component={Link}
            href="https://www.tripadvisor.in/Profile/dreamdestinations"
            target="_blank"
          >
            <Image fit="contain" alt='Youtube' src="https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/icons/tripadvisor" />
            </ActionIcon>
        </Group>
      </Container>
      <Container>
        <ListLinks />
      </Container>
    </footer>
  );
}
