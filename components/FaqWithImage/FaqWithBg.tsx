'use client';
import { Title, Container, Accordion, ThemeIcon, rem } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import classes from './FaqWithBg.module.css';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export default function FaqWithBg() {
  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Title ta="center" className={classes.title}>
          Frequently Asked Questions
        </Title>

        <Accordion
          chevronPosition="right"
          defaultValue="reset-password"
          chevronSize={26}
          variant="separated"
          disableChevronRotation
          styles={{ label: { color: 'var(--mantine-color-black)' }, item: { border: 0 } }}
          chevron={
            <ThemeIcon radius="xl" className={classes.gradient} size={26}>
              <IconPlus style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ThemeIcon>
          }
        >
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>
              <b>Is it required to book a taxi in advance?</b>
            </Accordion.Control>
            <Accordion.Panel>
              Booking a taxi in advance has many benefits. It's likely that no cabs would be
              available at that particular time as the seasonal rush is completely unpredictable in
              Kerala. So, in that case, booking a cab in advance will save you some time and fetch
              you safe ride with happy memories.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>
              <b>What are safety measures for covid-19?</b>
            </Accordion.Control>
            <Accordion.Panel>
              Our cabs are approved partitioned (“cabin separated”) sanitized cars (“fumigated after
              each trip”) which are specifically suited as per the present situation prevailing due
              to this pandemic.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control>
              <b>What is the travel time from kochi to munnar?</b>
            </Accordion.Control>
            <Accordion.Panel>
              Travel time from Cochin to Munnar is approximately 4 hours by road
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control>
              <b>Which is better Munnar or Alleppy?</b>
            </Accordion.Control>
            <Accordion.Panel>
              Munnar and Alleppey are completely different destinations. Munnar is all about Hill
              station where as Alleppey is best famous for backwaters and houseboats
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="payment">
            <Accordion.Control>
              <b>How taxi fare is calculated in kerala?</b>
            </Accordion.Control>
            <Accordion.Panel>
              Our rates are calculated based only on the number of days and not based on any travel
              plan/schedule, thereby providing customers the freedom to visit any places of their
              choice.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="km">
            <Accordion.Control>
              <b>How is km calculated in kerala?</b>
            </Accordion.Control>
            <Accordion.Panel>
              Our Km is calculated from Cochin Airport to Cochin Airport
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="book">
            <Accordion.Control>
              <b>How can I book taxi to Cochin Airport?</b>
            </Accordion.Control>
            <Accordion.Panel>
              You can call us @ <a href="tel:+9175393921784">75393921784</a> or whats app with your
              details to undertake immediate booking with the best cab and experienced driver to
              make your holidays memorable.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="road">
            <Accordion.Control>
              <b>How is the road from Cochin to Munnar?</b>
            </Accordion.Control>
            <Accordion.Panel>
              The road trip from Cochin to Munnar is extremely beautiful and scenic all the way with
              lush green uphill ride. As we climb uphill, the roads will be bit narrow and curvy as
              its common among hill stations
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="safe">
            <Accordion.Control>
              <b>Is it safe to travel from Kochi to Munnar at night?</b>
            </Accordion.Control>
            <Accordion.Panel>
              It is not advisable to travel by road to munnar at night due to fog, curling roads &
              wildlife. moreover by travelling at night, one will miss out all the scenic beauty and
              waterfalls along the way.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
