import { Card, CardContent, CircularProgress, Typography, Box, IconButton } from '@mui/material'
import { getAllFeed, getViewedPosts, viewPost } from '../../services/feedApi';
import { useQuery } from "react-query";
import { Fragment } from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { getAccountId } from '../../config';

export default function Feed() {
    const { data: allFeedData, error: allFeedError, isLoading: allFeedLoading } = useQuery("getFeed", getAllFeed, { retry: false });
    const { data: viewedData } = useQuery("getViewed", getViewedPosts, { retry: false });

    const isPostViewed = (postId) => {
        if (viewedData) {
            const accountId = getAccountId();
            const found = viewedData.find(link => link.account_id === accountId && link.post_id === postId)
            if (found) {
                return found.viewed_date;
            }
        }
        return undefined;
    }

    if (allFeedLoading) {
        return (
            <Card>
                <CircularProgress />
            </Card>
        )
    }
    if (allFeedError) {
        return (
            <CardContent>
                {"Error loading your feed data :("}
            </CardContent>

        )
    }
    return (
        <Fragment>
            <div className='centerItems'>
                {allFeedData && allFeedData.map(item => {
                    const isViewedTime = isPostViewed(item.id);
                    return (
                        <div className='cardStyle'>
                            <Card sx={{ maxWidth: 800, }} key={item.id}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                        {item.title}
                                        {viewedData && isViewedTime ?
                                            <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                                                Seen at {isViewedTime}!
                                            </Typography>
                                            :
                                            <IconButton onClick={() => { viewPost(item.id) }}>
                                                <EmojiEmotionsIcon />
                                            </IconButton>
                                        }
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {item.text_body}
                                    </Typography>
                                    <Box>
                                        {item.image_id ?
                                            <img src={`${`https://i.imgur.com`}/${item.image_id}.jpeg`} height={500} width={500} alt="" />
                                            : null}
                                    </Box>
                                </CardContent>
                            </Card>
                        </div>
                    )
                }
                )}
            </div>
        </Fragment>
    );
}