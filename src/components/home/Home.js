import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Slide from './Slide'
import { Box, makeStyles } from '@material-ui/core'
import MidSection from './MidSection'
const useStyle = makeStyles({
    component: {
        padding: 10,
        background: "#f2f2f2"
    },
    rightWrapper:{
        backgroundColor:'#ffffff',
        padding:5,
        margin:"12px 0 0 10px",
        width:"17%"

    }
})
export default function Home() {
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return (
        <div style={{backgroundColor:"#f2f2f2", padding:10}}>
            home page
            <Nav />
            <Box className={classes.component} >
                <Banner />
            </Box>
            <Box style={{display:"flex", background: "#f2f2f2"}} >
                <Box style={{width:"80%"}}>
                    <Slide timer={true} title='Deal of the day'/>
                </Box>
                <Box className={classes.rightWrapper} >
                    <img src={adURL} style={{width:"100%", height:"auto"}} />
                </Box>
            </Box>
                <Slide timer={false} title='Discount For you' />
                <MidSection />
                <Slide timer={false} title='Suggested Items' />
                <Slide timer={false} title='Top Selection' />
                <MidSection />
                <Slide timer={false} title='Recomended Items'/>
                <Slide timer={false} title='Best Sellers'/>

        </div>
    )
}
