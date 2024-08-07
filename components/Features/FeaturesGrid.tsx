import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';
import classes from './FeaturesGrid.module.css';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Multiple Cars',
    description: 'You can choose from wide varity of contract carriges based on your requirement',
  },
  {
    icon: IconUser,
    title: 'Privacy focused',
    description: 'We give priority to your privacy. Our drivers are well mannered and behaved.',
  },
  {
    icon: IconCookie,
    title: 'No third parties',
    description:
      'All our drivers are staffs of our organiztion and each of them have gone through police verification',
  },
  {
    icon: IconLock,
    title: 'Secure by default',
    description:
      'All our drivers can manage English and Malayalam. Also each of them have gone through Police verification for criminal history',
  },
  {
    icon: IconMessage2,
    title: '24/7 Support',
    description: 'Dedicated customer support services to help you throughout your journey',
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function FeaturesGrid() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>
        Kerala Taxi Packages-Kochi Taxi-Kerala Tempo Traveller
      </Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Handled by industry experts with 10+ years in travel and tourism industry
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
