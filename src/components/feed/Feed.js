import { Card, CardContent, CircularProgress } from '@mui/material'
import { getAllFeed } from '../../services/feedApi';
import CreatePost from './createPost/CreatePost';
import { useQuery } from "react-query";
import { Fragment } from 'react';

export default function BasicCard() {
    const { data, error, isLoading } = useQuery("getFeed", getAllFeed);

    if (isLoading) {
        return (
            <Card>
                <CircularProgress />
            </Card>
        )
    }
    if (error) {
        return (
            <Card>
                <CardContent>
                    {"Error loading your feed data :("}
                </CardContent>
            </Card>
        )
    }
    return (
        <Fragment>
            <CreatePost />
            {data && data.map(item => {
                return (
                    <Card sx={{ minWidth: 275 }} key={item.id}>
                        <CardContent >
                            {item.title}
                            {item.text_body}
                        </CardContent>
                    </Card>
                )
            }
            )}
        </Fragment>
    );
}