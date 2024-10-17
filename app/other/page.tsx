import Link from 'next/link';

export const metadata = {
    title: 'Cochin Dream Destinations | Kerala Taxi Packages | Other Links',
    description: 'List of available taxi service packages with Cochin dream destinations',
    twitter: {
      card: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Logo/kpg21czdrjbzclztwj5r',
      url: 'https://cochindreamdestinations.in/other',
      title: 'Cochin Dream Destinations | Kerala Taxi Cab Services | Other Links',
      description: 'List of available taxi service packages with Cochin dream destinations',
    },
    openGraph: {
      title: 'Cochin Dream Destinations | Kerala Taxi Cab Services',
      description: 'List of available taxi service packages with Cochin dream destinations',
      url: 'https://cochindreamdestinations.in/other',
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

export default function OtherLinks() {
  return (
    <>
     
      <h1>Other Links</h1>
      <ul>
        <li><Link href="https://www.greenydirectory.com/">Greeny Directory.com</Link></li>
        <li><Link href="https://www.alive2directory.com/">Alive 2 Directory.com</Link></li>
        <li><Link href="https://www.direct-directory.com/">Direct-Directory.com</Link></li>
        <li><a href="https://www.greenydirectory.com/">Greeny Directory.com</a></li>
        <li><a href="https://www.alive2directory.com/">Alive 2 Directory.com</a></li>
        <li><a href="https://www.direct-directory.com/">Direct-Directory.com</a></li>
      </ul>
      <table>
        <tr>
            <th>Title</th>
            <th>Back Links</th>
        </tr>
        <tr>
            <td>Green Directory</td>
            <td><Link href="https://www.greenydirectory.com/">Greeny Directory.com</Link></td>
        </tr>
        <tr>
            <td>Alive to us</td>
            <td><Link href="https://www.alive2directory.com/">Alive 2 Directory.com</Link></td>
        </tr>
        <tr>
            <td>Another Link</td>
            <td><Link href="https://www.direct-directory.com/">Direct-Directory.com</Link></td>
        </tr>
        <tr>
            <td>Row 4, Cell 1</td>
            <td>Row 4, Cell 2</td>
        </tr>
        <tr>
            <td>Row 5, Cell 1</td>
            <td>Row 5, Cell 2</td>
        </tr>
    </table>
    </>
  );
}
