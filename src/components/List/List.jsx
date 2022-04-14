import React, {useState, useEffect, createRef} from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'

import useStyles from './styles'
import Chargers from '../../data.json'
import PlaceDetails from '../PlaceDetails/PlaceDetails'


const List = ({childClicked}) => {
    const classes = useStyles()
    
const [type, setType] = useState('')
const[rating, setRating] = useState('')
// console.log({childClicked})
const[elRefs, setElRefs]= useState([])


useEffect(()=>{
    const refs = Array(Chargers.chargers.length).fill().map((_, i)=> elRefs[i] || createRef())
    setElRefs(refs)
}, [])
   
    
    




    return (
        <div className={classes.container}>
            <Typography variant="h4">
                Charging stations around you
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="lvl1dc">Level 1 DC</MenuItem>
                    <MenuItem value="lvl2dc">Level 2 DC</MenuItem>
                    <MenuItem value="normalac">Normal AC</MenuItem>
                </Select>

            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>

            </FormControl>
            <Grid container sapcing={3} className={classes.list}>
                {Chargers.chargers.map((charger, i)=> (
                    <Grid ref={elRefs[i]} item key={i} xs={12}>
                        <PlaceDetails charger={charger} selected={Number(childClicked) === i} refProp = {elRefs[i]} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
export default List