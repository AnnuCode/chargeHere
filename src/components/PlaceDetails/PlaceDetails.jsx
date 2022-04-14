import React from 'react'
import { Box, Typography, Card, CardContent, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import useStyles from './styles'

const PlaceDetails = ({charger, selected, refProp}) => {
const classes = useStyles()
console.log(refProp)
if(selected){
    // console.log(refProp.current)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start"})
    
} 


    return (
        <Card elevation={6}>
            <CardContent>
                <Typography gutterBottom variant="h5">{charger.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">{charger.address}</Typography>
                    <Typography variant="subtitle1">{`${parseInt(charger.distance)/1000} Km`}</Typography>
                </Box>
                <Typography variant="h6">Supported connections:</Typography>
                
                <Box display="flex" justifyContent="space-between" >
                <Chip size="small" label={`Level 1 DC`} className={classes.chip}/>
                <Chip size="small" label={charger.connector_types[0].split('-')[1]} className={classes.chip}/>
                </Box>

                
                <Box display="flex" justifyContent="space-between" >
                <Chip size="small" label={`Level 2 DC`} className={classes.chip}/>
                <Chip size="small" label={charger.connector_types[1].split('-')[1]} className={classes.chip}/>
                </Box>


                
                <Box display="flex" justifyContent="space-between" >
                <Chip size="small" label={`Normal AC`} className={classes.chip}/>
                <Chip size="small" label={charger.connector_types[2].split('-')[1]} className={classes.chip}/>
                </Box>
            </CardContent>

        </Card>
    )
}
export default PlaceDetails