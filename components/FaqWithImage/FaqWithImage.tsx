'use client';
import { Image, Accordion, Grid, Container, Title } from '@mantine/core';
import image from './image.svg';
import classes from './FaqWithImage.module.css';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

export default function FaqWithImage() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={image.src} alt="Frequently Asked Questions" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>Is it required to book a taxi in advance?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>What is the travel time from kochi to munnar?</Accordion.Control>
                <Accordion.Panel>
                  Travel time from Cochin to Munnar is approximately 4 hours by road
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>What are the safety measures for covid-19?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>Which is better Munnar or Alleppy?</Accordion.Control>
                <Accordion.Panel>
                  Munnar and Alleppey are completely different destinations. Munnar is all about
                  Hill station where as Alleppey is best famous for backwaters and houseboats
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
