import { Button, Card, CardContent, Typography } from '@mui/material'
import { getAllFeed } from '../../services/feedApi';

export default function BasicCard() {
    return (
    <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() =>{ getAllFeed() }}
            >
            Get Feed
            </Button>
            <Typography sx={{ fontSize: 14 }} >
                Word of the Day
            </Typography>
        </CardContent>
    </Card>
    );
}