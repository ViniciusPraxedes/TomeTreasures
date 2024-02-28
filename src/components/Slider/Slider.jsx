import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss"
import {useState} from "react";
import Card from "../Card/Card";
import Carousel from "react-multi-carousel";

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://marketplace.canva.com/EAE6uxzge6c/1/0/1600w/canva-yellow-and-white-minimalist-big-sale-banner-BjBIq-T_6j4.jpg",
        "https://marketplace.canva.com/EAFED0hv9G0/1/0/1600w/canva-blue-pink-modern-special-offer-sale-banner-J5VkNReQ8WA.jpg",
        "https://marketplace.canva.com/EAFIEXwl7lg/1/0/1600w/canva-blue-dynamic-fashion-special-sale-banner-T47g_lhdiAA.jpg",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    }


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(
        <div>
            <Carousel swipeable={true}
                      draggable={true}
                      showDots={true}
                      responsive={responsive}
                      removeArrowOnDeviceType={"mobile"}
                      autoPlay={true}
                      infinite={true}
                      autoPlaySpeed={2500}
                      keyBoardControl={true}
                      transitionDuration={2000}
                      containerClass="slider-container"
                      dotListClass="custom-dot-list-style"
                      itemClass="slider-item">

                <div className="img-container"><img src={data[0]} alt=""/></div>
                <div className="img-container"><img src={data[1]} alt=""/></div>
                <div className="img-container"><img src={data[2]} alt=""/></div>

            </Carousel>
        </div>




    )
}

export default Slider