import React from 'react'
import GoogleMapReact from 'google-map-react'
import {Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Rating from '@material-ui/lab'
import Chargers from '../../data.json'

import useStyles from './styles'


const Map = ({setChildClicked}) => {
    const classes = useStyles()
    // const isDesktop = useMediaQuery('(min-width:600px)')
    const coordinates = { lat: 28.644800, lng: 77.216721}
    // console.log(Number(Chargers.chargers[0].latitude))


    return (
        <div className ={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            // options={''}
            // onChange={''}
            onChildClick={(child)=>{setChildClicked(child)}}
            >
                <div
                className={classes.markerContainer}
                lat={coordinates.lat}
                lng={coordinates.lng}
                >
                    <LocationOnOutlinedIcon color="secondary" fontSize="large"/>
                </div>

                {Chargers.chargers.map((charger, i)=>(
                    <div
                    className={classes.markerContainer}
                    lat={Number(charger.latitude)}
                    lng={Number(charger.longitude)}
                    key={i}
                    >
                        {/* {
                            !isDesktop ? (
                                <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                        {charger.name}
                                    </Typography>
                                </Paper>
                            )
                        } */}
                         <LocationOnOutlinedIcon color="primary" fontSize="large"/>

                    </div>
                ))

                }

            </GoogleMapReact>
        </div>
    )
}
export default Map