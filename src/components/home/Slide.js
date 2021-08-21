import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from "../../constant/data";
import { Box, Button, Divider, makeStyles, Typography } from "@material-ui/core";
import Countdown from "react-countdown"
const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

const useStyle = makeStyles({
  img: {
    height: 150
  },
  component: {
    marginTop: 12,
    backgroundColor: "#ffffff"
  },
  deal: {
    padding: "15px 20px",
    display: "flex"
  },
  dealText: {
    fontSize: 22,
    lineHeight: "32px",
    fontWeight: 600,
    marginRight: 25
  },
  timer: {
    color: "#7f7f7f",
    marginLeft: 10,
    display: "flex",
    alignItems: 'center'
  },
  button: {
    marginLeft: 'auto',
    backgroundColor: '#2874f0',
    borderRadius: 2,
    fontSize: 13
  },
  text: {
    fontSize: 14,
    marginTop: 5
  },
  wrapper: {
    padding: "35px 15px"
  }
})
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



export default function Slide({ timer, title }) {

  const classes = useStyle()
  const renderer = ({ hours, minutes, seconds }) => {
    return <span className={classes.timer} > {hours}:{minutes}:{seconds} Left </span>
  }

  return (
    <Box className={classes.component}>
      <Box className={classes.deal} >
        <Typography className={classes.dealText} >{title}</Typography>
        {timer && 
        <>
          <img src={timerURL} style={{ width: 24 }} />
          <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
          <Button variant='contained' className={classes.button} color='primary' > View All </Button>
        </>}
      </Box>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        autoPlay={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlaySpeed={10000}
        showDots={false}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map(prod => (
          <Box textAlign='center' className={classes.wrapper} >
            <img className={classes.img} src={prod.url} />
            <Typography className={classes.text} style={{ color: "#212121", fontWeight: 600 }} > {prod.title.shortTitle} </Typography>
            <Typography className={classes.text} style={{ color: "green", fontWeight: "normal" }}> {prod.discount} </Typography>
            <Typography className={classes.text} style={{ color: "#212121", fontWeight: 600, opacity: 0.56 }}> {prod.tagline} </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}
