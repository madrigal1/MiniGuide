import React from 'react';

import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles';


const Map = ({ setBounds, setCoords, coords, places }) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery("(min-width:600px)");


    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBmOmgxR1rb1siGKh2-guEqGVsGJLRUSaw' }}
                defaultCenter={{ lat: 0, lng: 0 }}
                center={coords}
                defaultZoom={15}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true }}
                onChange={(e) => {
                    setCoords({
                        lat: e.center.lat,
                        lng: e.center.lng,
                    });
                    setBounds({
                        ne: e.marginBounds.ne,
                        sw: e.marginBounds.sw,
                    })
                }}
                onChildClick={() => { }}
            >
                {places?.map((place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}>
                        {
                            !isDesktop ? (
                                <LocationOnOutlined color="primary" fontSize="large" />
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2" >
                                        {place.name}
                                    </Typography>
                                    <img className={classes.pointer} src={place.photo ? place.photo.images.large.url : "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt={place.name} />
                                    <Rating size="small" value={Number(place.rating)}></Rating>
                                </Paper>
                            )
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    )
}

export default Map
