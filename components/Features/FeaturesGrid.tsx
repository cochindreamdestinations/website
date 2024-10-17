import { ThemeIcon, Text, Title, Container, SimpleGrid, Image } from '@mantine/core';
// import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';
import classes from './FeaturesGrid.module.css';

export const MOCKDATA = [
  {
    icon: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/icons/multiple_cars',
    title: 'Multiple Cars',
    description: 'You can choose from wide varity of contract carriges based on your requirement',
  },
  {
    icon: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/icons/privacy',
    title: 'Privacy focused',
    description: 'We give priority to your privacy. Our drivers are well mannered and behaved.',
  },
  {
    icon: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/icons/nothirdparty',
    title: 'No third parties',
    description:
      'All our drivers are staffs of our organiztion and each of them have gone through police verification',
  },
  {
    icon: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/icons/secure_by_default',
    title: 'Secure by default',
    description:
      'All our drivers can manage English and Malayalam. Also each of them have gone through Police verification for criminal history',
  },
  {
    icon: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/icons/24x7',
    title: '24/7 Support',
    description: 'Dedicated customer support services to help you throughout your journey',
  },
  {
    icon: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/icons/customer_feedback',
    title: 'Customer Feedbacks',
    description: 'Customer feedback from Google maps. No more faking from the users',
  },
];

interface FeatureProps {
  icon: any;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div>
      <Image src={icon} width={80} height={80} fit="contain" alt={`${title} image`} />
      <Title order={3} mt="sm" mb={7} style={{textAlign:'center'}}>
        {title}
      </Title>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function FeaturesGrid() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <section style={{ background: `url('/feature-bg.webp')`,backgroundRepeat: 'no-repeat' }}>
      <Container className={classes.wrapper}>
        <Title order={1} className={classes.title}>
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
    </section>
  );
}
