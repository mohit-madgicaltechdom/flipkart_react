import Carousel from 'react-material-ui-carousel'
import {bannerData} from '../../constant/data'
import {makeStyles} from '@material-ui/core'
const useStyle = makeStyles({
    img:{
        width:"100%",
        height:280
    },
    carousel:{
        marginTop:1
    }
})
export default function Banner() {
    const classes = useStyle()
    const items = bannerData
    return (
        <div>
         <Carousel
         className={classes.carousel}
          autoPlay={true}
          animation="slide"
          indicators={false}
          navButtonsAlwaysVisible={true}
          cycleNavigation={true}
          navButtonsProps={{
              style:{
                  borderRadius:0,
                  margin:0,
                  height:80,
                  color:"#494949",
                  background:"#ffffff"
              }
          }}
          >
            {
                items.map( (item) => <img className={classes.img} src={item} /> )
            }
        </Carousel>
            
        </div>
    )
}
