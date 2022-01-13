import React from 'react';

import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab'

import useStyles from './styles';


const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery("(min-width:600px)");

    const co_ords = { lat: 0, lng: 0 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBmOmgxR1rb1siGKh2-guEqGVsGJLRUSaw' }}
                defaultCenter={co_ords}
                center={co_ords}
                yesIWantToUseGoogleMapApiInternals
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildCLick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map
