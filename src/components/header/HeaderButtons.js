import { Button, Box, Badge ,makeStyles, Typography } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'
import LoginDialog from '../login/Login';
import {useState} from 'react'

const useStyle = makeStyles({
        login:{
            background:'#ffffff',
            color:"#2874f0",
            textTransform:'unset',
            fontWeight:600,
            borderRadius:2,
            padding:"5px 40px",
            boxShadow:"none"
        },
        wrapper:{
            margin:"0 7% 0 auto ",
            display:"flex",
            '& > * ': {
            marginRight:"50px",
            textDecoration:'none',
            color:"#fff"
            }
        },
        container:{
            display:'flex',
            alignItems:'center'
        }
})
export default function HeaderButtons() {
    const [open, setOpen] = useState(false);
    
    const classes = useStyle();
    const openLoginDialog = ()=>{
        setOpen(true);
    }
    return (
        <Box className={classes.wrapper} >
            <Link> 
                <Button onClick={openLoginDialog} variant="contained" color="" className={classes.login}>
                    Login
                </Button>
            </Link>
            <Link>
                <Typography style={{marginTop:'5px'}} >
                    More
                </Typography>
            </Link>
            <Link to='/cart' className={classes.container} >
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon />
                </Badge>
                <Typography style={{marginLeft:"10px"}} >
                    Cart
                </Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} />
        </Box>
    )
}
