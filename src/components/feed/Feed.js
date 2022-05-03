import { Card, CardContent, CircularProgress, Typography } from '@mui/material'
import { getAllFeed } from '../../services/feedApi';
import CreatePost from './createPost/CreatePost';
import { useQuery } from "react-query";
import { Fragment } from 'react';
import DeleteAccount from "../accounts/delete/DeleteAccount";
import Logout from "../accounts/logout/Logout"

export default function BasicCard() {
    const { data, error, isLoading } = useQuery("getFeed", getAllFeed, {retry: false});

    if (isLoading) {
        return (
            <Card>
                <CreatePost />
                <DeleteAccount />
                <Logout />
                <CircularProgress />
            </Card>
        )
    }
    if (error) {
        return (
            <Card>
                <CreatePost />
                <DeleteAccount />
                <Logout />
                <CardContent>
                    {"Error loading your feed data :("}
                </CardContent>
            </Card>
        )
    }
    return (
        <Fragment>
            <CreatePost />
            <DeleteAccount />
            <Logout />
            {data && data.map(item => {
                return (
                    <Card sx={{ maxWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {item.title}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {item.text_body}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            }
            )}
        </Fragment>
    );
}