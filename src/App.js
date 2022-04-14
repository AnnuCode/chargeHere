import React, {useEffect, useState} from 'react'
import { CssBaseline, Grid } from '@material-ui/core'

import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'



const App = ()=>{
    const[childClicked, setChildClicked] = useState(null)

//  const[coordinates, setCoordinates] = useState({})   
// useEffect(()=>{
//     navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} })=>{
//         setCoordinates({lat: latitude, lng: longitude })
//     })
// }, [])

    return (
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{ width:'100%'}}>
                <Grid item xs={12} md={4}> 
                    <List childClicked={childClicked} />
                </Grid>
                <Grid item xs={12} md={8}> 
                    <Map setChildClicked={setChildClicked} />
                </Grid>
                 </Grid>
            </>
        
    )   
}
export default App
