import { ImageURL } from "../../constant/data"

import { makeStyles } from "@material-ui/core"
const useStyle = makeStyles({
    wrapper: {
        display: "flex",
        margin: "20px 0",
        justifyContent: "space-between"

    }
})
export default function MidSection() {
    const classes = useStyle();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (
        <>
            <div className={classes.wrapper}>
                {ImageURL.map(img => (
                    <img src={img} style={{ width: '33%' }} />
                ))}
            </div>
            <div>
                <img src={coronaURL} style={{width:'100%', marginTop:20}}  />
            </div>
        </>
    )
}
