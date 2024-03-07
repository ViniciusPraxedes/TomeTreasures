import Card from "../Card/Card";
import "./BestSeller.scss"
import {useEffect, useState} from "react";
import axios from "axios";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Link} from "react-router-dom";


const BestSeller = ({type}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("https://book-service-r6tn.onrender.com/book/books/BEST_SELLER");
                setData(response.data);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
            slidesToSlide: 6 // optional, default to 1.

        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 6 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.

        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };



    return(
        <div>
            <div className="first">

                <div className="left">
                    <h1>Best sellers</h1>
                </div>

                <div className="right">
                    <div className="link">
                        <Link className="link" to="/products/best_seller"><h2>Go to Best sellers</h2></Link>
                    </div>
                    <div className="icon">
                        <ChevronRightIcon className="icon-right"/>
                    </div>
                </div>

            </div>





            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                infinite={true}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {data.map((item, index) => (
                    <Card className="card" item={item} key={index}/>
                ))}
            </Carousel>
        </div>
    );

}

export default BestSeller