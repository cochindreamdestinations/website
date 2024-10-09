import Heading from '@/components/sabarimala/Sabarimala';
export const metadata = {
  title: 'Cochin Dream Destinations | Sabarimala Packages',
  description: 'Sabarimala packages with Cochin dream destinations',
  twitter: {
    card: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r',
    url: 'https://cochindreamdestinations.in/sabarimala',
    title: 'Cochin Dream Destinations | Sabarimala Packages',
    description: 'Sabarimala packages with Cochin dream destinations',
  },
  openGraph: {
    title: 'Cochin Dream Destinations | Sabarimala Packages',
    description: 'Sabarimala packages with Cochin dream destinations',
    url: 'https://cochindreamdestinations.in/sabarimala',
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

export default function Pricing() {
  return (
    <>
      <Heading />
    </>
  );
}
