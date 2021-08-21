import React from 'react'
import { AppBar, Toolbar, makeStyles,withStyles, Typography, Box } from '@material-ui/core'
import Searchbar from './Searchbar'
import HeaderButtons from './HeaderButtons'
import {Link} from 'react-router-dom'
const useStyle = makeStyles({

    header: {
        background: '#2874f0',
        height: 55
    },
    logo: {
        width: 75
    },
    subURL: {
        width: 10,
        marginLeft: 4,
        height: 10
    },
    main: {
        marginLeft: '12%',
        lineHeight: 0
    },
    container: {
        display: "flex"
    },
    subHeading: {
        fontSize: '10px',
        fontStyle: "italic"
    }
})

const ToolBar = withStyles({
    root:{
        minHeight:55
    }
})(Toolbar);


export default function Header() {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <div>
            <AppBar className={classes.header} >
                <ToolBar >
                    
                    <Link to='/' className={classes.main} >
                        <img src={logoURL} className={classes.logo} />
                        <Box className={classes.container}>
                            <Typography className={classes.subHeading} >
                                Explore 
                                <span style={{color:'#ffe500'}}> plus </span> 
                            </Typography>
                            <img src={subURL} className={classes.subURL} />
                        </Box>
                    </Link>
                    <Searchbar />
                    <HeaderButtons />
                </ToolBar>
            </AppBar>
        </div>
    )
}
