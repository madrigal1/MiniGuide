import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardActions, Chip, CardContent } from '@material-ui/core'
import LocationOn from '@material-ui/icons/LocationOn';
import Phone from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';
const PlaceDetails = ({ place }) => {
    const classes = useStyles();

    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography variant="subtitle1" gutterBottom>{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Rating value={Number(place.rating)} readOnly></Rating>
                    <Typography variant="subtitle1" gutterBottom>out of {place.num_reviews} reviews </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography variant="subtitle1" gutterBottom>{place.ranking}</Typography>
                </Box>
                {
                    place?.awards?.map((award, i) => (
                        <Box key={i} my={1} display="flex" justifyContent="space-between" alignItems="center">
                            <img src={award.images.small} alt={award.display_name} />
                            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                        </Box>
                    ))
                }
                {
                    place?.cuisine?.map(({ name }) => (
                        <Chip key={name} size="small" label={name} className={classes.chip} />
                    ))
                }
                {
                    place?.address && (
                        <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle} >
                            <LocationOn /> {place.address}
                        </Typography>
                    )
                }
                {
                    place?.phone && (
                        <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing} >
                            <Phone /> {place.address}
                        </Typography>
                    )
                }
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(place.web_url, "_blank")}>Trip Advisor</Button>
                <Button size="small" color="primary" onClick={() => window.open(place.website, "_blank")}>Website</Button>
            </CardActions>
        </Card>
    )
}

export default PlaceDetails;
