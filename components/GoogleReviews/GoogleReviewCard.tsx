import { Anchor, Avatar, Badge, Card, Group, ScrollArea, Text } from "@mantine/core";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

export type ReviewItem = {
    user_name: string;
    profile_pic: string | null;
    review: string;
    rating: number;
    link_to_review?: string;
}

export default function GoogleReviewCard(item: ReviewItem) {
    return (
        <div >
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Group mt="md" mb="xs">
                    {item.profile_pic && <Avatar src={item.profile_pic} radius="xl" size="lg" alt={`${item.user_name}'s photo`} />}
                    {!item.profile_pic && <Avatar color="cyan" radius="xl" size="lg" alt={`${item.user_name}'s avatar`}>
                        {item.user_name?.charAt(0)}
                    </Avatar>
                    }

                    <Anchor href={item.link_to_review} target="_blank" variant="text" fw={500} style={{ color: 'black' }} underline="always">
                        {item.user_name}
                    </Anchor>

                    <Avatar src="google.svg" alt="it's me" size="sm" />


                </Group>
                <Rating style={{ maxWidth: 100 }} value={5} />
                <ScrollArea h={125}>
                    <Text size="sm">
                        {item.review}
                    </Text>
                </ScrollArea>
            </Card>
        </div>
    )
}