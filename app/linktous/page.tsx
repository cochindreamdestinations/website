import { Center, Title } from '@mantine/core';

export const metadata = {
  title: 'Link To Us | Cochin Dream Destinations | Kerala Taxi Packages | Other Links',
  description: 'List of available taxi service packages with Cochin dream destinations',
  twitter: {
    card: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r',
    url: 'https://cochindreamdestinations.in/linktous',
    title: 'Link To Us | Cochin Dream Destinations | Kerala Taxi Cab Services | Other Links',
    description: 'List of available taxi service packages with Cochin dream destinations',
  },
  openGraph: {
    title: 'Link To Us | Cochin Dream Destinations | Kerala Taxi Cab Services',
    description: 'List of available taxi service packages with Cochin dream destinations',
    url: 'https://cochindreamdestinations.in/linktous',
    siteName: 'Cochin Dream Destinations Taxi Service',
    images: [
      {
        url: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    videos: [
      {
        url: 'https://nextjs.org/video.mp4', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    audio: [
      {
        url: 'https://nextjs.org/audio.mp3', // Must be an absolute URL
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function LinktoUs() {
  return (
    <>
      <Center>
        <Title order={1} size="h2">Link to Us</Title>
      </Center>
     <section>
     We are more than happy to provide Free link exchange to relevant sites & blogs related travel & tour industry.
All we need is that you copy the following into your web page. Once you inserted our link on your page,
E-mail your title, URL, reciprocal link and 1 line description of your site to "cochindreamdestinations@gmail.com"
Please make sure to include our link on your page and also mention the URL of the page where the link is placed for a guaranteed inclusion in 5 working days.
Links to Other Web Sites: https://cochindreamdestinations.in/ may contain hyperlinks to web sites operated by parties other than Pepper Kerala.
Such hyperlinks are provided for your reference only. Pepper Kerala does not control such Web sites and is not responsible for their contents.
     </section>
     <section>
     Copy and paste the following
Kerala Taxi Packages from Cochin Dream Destinations -Cochin Dream Destinations is the leading prominent service provider of kerala taxi packages/services,
kerala car rentals, tours and travels in Cochin (kochi, Kerala).
     </section>
    </>
  );
}
