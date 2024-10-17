"use client";
import { Center, rem, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import GoogleReviewCard, { ReviewItem } from "./GoogleReviewCard";
import { Carousel } from "@mantine/carousel";
import { quicksand } from "@/app/font";
import classes from '../Carousel/TaxiCarousel.module.css';
const data: ReviewItem[] = [
    {
        user_name: 'Akhil Ramesh',
        profile_pic: 'https://lh3.googleusercontent.com/a-/ALV-UjUGAZfAxC2dBW6CZ2qpGmsE1kcVfVa7yFLxmRJPw2mtTuBWmZJK=s50-c-mo',
        review: 'An amazing experience, the trip went well. The driver was very punctual and was kind enough to guide us with the information. Kl 47 L 1551',
        rating: 5,
        link_to_review: 'https://maps.app.goo.gl/KtELyBciNzuEofA1A'

    },
    {
        user_name: 'Varsha Jain',
        profile_pic: 'https://lh3.googleusercontent.com/a-/ALV-UjXsC7ZFqs32MW5Q-rnk3iynYrX73DbXRye7Fn0_8C4TOu1YH98=s50-c-mo',
        review: 'Best experience. Very safe and knowledgeable about the places and timing.',
        rating: 5,
        link_to_review: 'https://maps.app.goo.gl/ysLgHjo3irkw3qLw5',
    },
    {
        user_name: 'Divya Jain',
        profile_pic: 'https://lh3.googleusercontent.com/a-/ALV-UjUff_FtgAGflGXNdJsDuMuocoaLWc9kVAJHN_54EY7-ceg-o8Y=s50-c-mo',
        review: 'Very good experience and a awesome person 10 out of 10',
        rating: 5,
        link_to_review: ''
    },
    {
        user_name: 'Bineesh K R',
        link_to_review: 'https://maps.app.goo.gl/jgJdAvjqFiJLxFqh9',
        profile_pic: null,
        review: 'Good service..neat and clean cab.. Thankyou dream destination cochin',
        rating: 5
    },
    {
        user_name: 'Aamod Pathak',
        profile_pic: 'https://lh3.googleusercontent.com/a-/ALV-UjXC6N7QoHcRAJ5JeIQIH9GLn4MC2D9YmnhkC1INxd1fXKw_bIJcXg=s50-c-mo',
        review: 'Me and family had been to Kochi, Munnar, Thekkady and back. During entire tour Mr Mithun was assigned to us with his bucket seat Innova car. I would definitely say, it was one of the best travelling experience we had due to excellent driving skills of Mr Mithun, in hilly areas. Also he is well versed with all nooks and corners of the region and hence tour guide was not needed too. Professionalism of Mr Mithun can be vouched from the fact that he used to be ready with vehicle half an hour before any journey. One must ask services of Mr Mithun. Thank you Mithunji for making our trip a memorable one.',
        rating: 5,
        link_to_review: 'https://maps.app.goo.gl/hT4mXByUBKoFwAQDA'
    },
    {
        user_name: 'Priya R',
        profile_pic: null,
        review: 'Had a wonderful experience with cochin dream destinations for our munnar trip with family Driver was very friendly, suggested many new places. Almost covered most sites in munnar. Will choose and recommend cochin dream destination for further trip ahead.',
        rating: 5,
        link_to_review: 'https://maps.app.goo.gl/27HdxoLk7EcShhJV8'
    },
    {
        user_name: 'Mayur Jain',
        profile_pic: null,
        review: 'Cab service was very efficient and the driver was informative about places and guided to must see places for our 7 day trip. Highly recommended.👍🏼',
        rating: 5,
        link_to_review: 'https://maps.app.goo.gl/cfP3Kt7U9pER7uJS9'
    },
    {
        user_name: 'Jaideep ratnawat',
        profile_pic: null,
        review: 'Best travel agency in kerala Good experience',
        rating: 5,
        link_to_review: 'https://maps.app.goo.gl/nEJPtSXrSbRSgkjP9'
    },
    {
        user_name: 'Maneesh P',
        profile_pic: null,
        review: 'We had an amazing tour with cochin dream destinations. Sreeraj was very prompt from beginning and he arranged our itinerary as per our preference. The hotels were very good and the highlight was Mr. Ajith our driver who was so great and nothing was a problem for him he recommended us great stops on the way , great places to eat explained about the area his culture and not the least he was very welcoming . Many thanks dream holidays Mr sreeraj and Ajith for arranging the great tour and your warm hospitality. Highly recommend and we will definitely use your service again the future 🙏❤️',
        rating: 5,
        link_to_review: 'https://maps.app.goo.gl/XGDeSLzk5btdaVQp8'
    }
]

export default function ReviewCarousel() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item: any) => (
        <Carousel.Slide key={item.user_name}>
            <GoogleReviewCard {...item} />
        </Carousel.Slide>
    ));

    return (<>
        <Center>
            <Title order={3} className={quicksand.className} size="h3">
                Testimonials
            </Title>
        </Center>
        <Center>
            <span className={classes.borderOrange}></span>
        </Center>
        <Carousel
            slideSize={{ base: '100%', sm: '45%', xs: '50%', md: '33.333333%', lg: '20%' }}
            slideGap={{ base: rem(1) }}
            previousControlProps={{
                'aria-label': 'Previous',
            }}
            nextControlProps={{
                'aria-label': 'Next',
            }}
            align="start"
            loop
            slidesToScroll={mobile ? 1 : 2}
        >
            {slides}
        </Carousel>
    </>)
}