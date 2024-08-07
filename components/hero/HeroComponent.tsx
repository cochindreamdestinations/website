import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './HeroComponent.module.css';
import Link from 'next/link';

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Trip Wagon | Kerala Cab Services
          <Text component="span" inherit className={classes.highlight}></Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Reliable and fastest Cab Services in Kerala with 10+ years of experinace in the field
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            variant="white"
            size="lg"
            component={Link}
            href="#contact"
          >
            Contact Us
          </Button>

          <Button
            className={cx(classes.control, classes.secondaryControl)}
            size="lg"
            component={Link}
            href="/rentals"
          >
            View Rates
          </Button>
        </div>
      </div>
    </div>
  );
}
