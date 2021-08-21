import { Dialog, DialogContent, TextField, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { useState } from "react";
const useStyle = makeStyles({
    component: {
        height: "70vh",
        width: '90vh'
    }
    ,
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: "70vh",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#2874f0",
        width: "40%",
        marginTop: "auto",
        backgroundPosition: "center 85%",
        padding: "45px 35px",
        "& > *": {
            color: "#ffffff",
            fontWeight: 600,
        }
    },
    signup: {
        padding: '25px 35px',
        display: "flex",
        flex: "1",
        flexDirection: "column",
        "& > *": {
            marginTop: "13px"
        }
    },
    login: {
        padding: '25px 35px',
        display: "flex",
        flex: "1",
        flexDirection: "column",
        "& > *": {
            marginTop: "20px"
        }
    },
    text: {
        color: "#878787",
        fontSize: 12
    },
    loginBtn: {
        textTransform: "none",
        background: "#FB641B",
        color: "#ffffff",
        height: 48,
        radius: 2
    },
    requestBtn: {
        textTransform: "none",
        background: "#ffffff",
        color: "#2874f0",
        height: 48,
        radius: 2,
        boxShadow: "0px 2px 4px 0 rgb(0 0 0 / 20%)"
    },
    createText: {
        textAlign: "center",
        marginTop: "auto",
        fontSize: 14,
        color: "#2874f0",
        fontWeight: "600",
        cursor: "pointer"
    }

})

const initialValue = {
    login: {
        view: "login",
        heading: "Login",
        subHeading: "Get Access to your orders, Wishlist and Recommendations"
    },
    signup: {
        view: "signup",
        heading: "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
}

export default function Login({ open, setOpen }) {
    const classes = useStyle();
    const [account, setaccount] = useState(initialValue.login)

    const toggleAccount = () => {
        setaccount(initialValue.signup)
    }
    const handleClose = () => {
        setOpen(false);
        setaccount(initialValue.login)

    }
    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogContent className={classes.component}>
                <Box style={{ display: "flex" }}>
                    <Box className={classes.image} >
                        <Typography variant='h5' > {account.heading} </Typography>
                        <Typography style={{ marginTop: 20 }} > {account.subHeading} </Typography>
                    </Box>
                    {account.view === "login" ?

                        <Box className={classes.login} >
                            <TextField name="userName" label="Enter Email/Mobile number" ></TextField>
                            <TextField name="password" label="Enter Password" ></TextField>
                            <Typography className={classes.text} >By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button className={classes.loginBtn} variant="contained" >Login</Button>
                            <Typography style={{ textAlign: "center" }} className={classes.text}  >OR</Typography>
                            <Button variant="contained" className={classes.requestBtn} >Request OPT </Button>
                            <Typography onClick={toggleAccount} className={classes.createText} >New to Flipkart? Create an account</Typography>
                        </Box>
                        :

                        <Box className={classes.signup}  >
                            <TextField name="firstName" label="Enter First Name" ></TextField>
                            <TextField name="lastName" label="Enter Last Name" ></TextField>
                            <TextField name="userName" label="Enter Username" ></TextField>
                            <TextField name="email" label="Enter Email" ></TextField>
                            <TextField name="password" label="Enter Password" ></TextField>
                            <TextField name="password" label="Enter Phone number" ></TextField>
                            <Button variant="contained" className={classes.loginBtn} >Signup</Button>
                        </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
}
