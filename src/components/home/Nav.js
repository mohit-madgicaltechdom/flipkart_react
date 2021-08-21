import {navData} from '../../constant/data'
import {Box, Typography, makeStyles} from '@material-ui/core'
const useStyle = makeStyles({
    component:{
        display:"flex",
        justifyContent:'space-between',
        margin: "33px 130px 0 130px" 
    },
    container:{
        textAlign:"center",
        padding:"12px 8px"
    },
    img:{
        width:"64px"
    },
    text:{
        fontSize:14,
        fontWeight:600
    }
})
export default function Nav() {
    const classes = useStyle()
    return (
        <Box className={classes.component}>
            {
            navData.map(data =>(
            <Box className={classes.container} >
                <img src={data.url} className={classes.img} />
                <Typography className={classes.text} >{data.text}</Typography>
            </Box>
        ))
            }
        
        </Box>
    )
}
