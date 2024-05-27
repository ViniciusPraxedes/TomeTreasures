import "./Reviews.scss"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Reviews = () =>{




    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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

        <div className="review-wrapper">

            <div className="favorites">
                <div className="favorite-icon">
                    <FavoriteBorderIcon className="icon"/>
                </div>
                <div>
                    <h1>Reviews from our customers</h1>
                </div>
            </div>

            <Carousel swipeable={true}
                      draggable={true}
                      removeArrowOnDeviceType={"mobile"}
                      showDots={false}
                      responsive={responsive}
                      autoPlay={true}
                      infinite={true}
                      autoPlaySpeed={2500}
                      keyBoardControl={true}
                      transitionDuration={2000}
                      containerClass="slider-container"
                      dotListClass="custom-dot-list-style"
                      itemClass="slider-item">

                <div className="review">
                    <div className="right">
                        <h2>"A mesmerizing journey into a richly imagined world."</h2>
                        <div className="user-review">
                            <div className="user-image">
                                <img src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B" alt="user image"/>
                            </div>
                            <div className="user-info">
                                <h3>Emma Müller</h3>
                                <p>Berlin, Germany</p>
                            </div>
                        </div>
                    </div>
                            <div className="left">
                                <img src="https://m.media-amazon.com/images/I/81nq+ewtkcL._AC_UF1000,1000_QL80_.jpg" alt="book cover"/>
                            </div>

                </div>

                <div className="review">
                    <div className="right">
                        <h2>"An amazing classical book"</h2>

                        <div className="user-review">

                            <div className="user-image">
                                <img src="https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg" alt="user image"/>
                            </div>

                            <div className="user-info">
                                <h3>Klara Anderson</h3>
                                <p>Gothenburg, Sweden</p>
                            </div>

                        </div>

                    </div>
                        <div className="left">
                            <img src="https://m.media-amazon.com/images/I/71auePo1a8L._AC_UF1000,1000_QL80_.jpg" alt="book cover"/>
                        </div>

                </div>

                <div className="review">
                    <div className="right">
                        <h2>"A fascinating journey through ancient Rome."</h2>

                        <div className="user-review">

                            <div className="user-image">
                                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="user image"/>
                            </div>

                            <div className="user-info">
                                <h3>John Smith</h3>
                                <p>New York, USA</p>
                            </div>

                        </div>

                    </div>
                        <div className="left">
                            <img src="https://m.media-amazon.com/images/I/71596LpQnQL._AC_UF1000,1000_QL80_.jpg" alt="book cover"/>
                        </div>

                </div>

                <div className="review">
                    <div className="right">
                        <h2>"A gripping mystery set in modern Sweden."</h2>

                        <div className="user-review">

                            <div className="user-image">
                                <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="user image"/>
                            </div>

                            <div className="user-info">
                                <h3>Emily Johnson</h3>
                                <p>London, UK</p>
                            </div>

                        </div>

                    </div>
                        <div className="left">
                            <img src="https://m.media-amazon.com/images/I/81UOA8fDGaL._AC_UF1000,1000_QL80_.jpg" alt="book cover"/>
                        </div>

                </div>

                <div className="review">
                    <div className="right">
                        <h2>"An enchanting romance that will tug at your heartstrings."</h2>

                        <div className="user-review">

                            <div className="user-image">
                                <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="user image"/>
                            </div>

                            <div className="user-info">
                                <h3>Michael Brown</h3>
                                <p>Sydney, Australia</p>
                            </div>

                        </div>

                    </div>
                        <div className="left">
                            <img src="https://m.media-amazon.com/images/I/91qnLT5qrbL._AC_UF1000,1000_QL80_.jpg" alt="book cover"/>
                        </div>

                </div>

                <div className="review">
                    <div className="right">
                        <h2>"A thrilling adventure in the wizarding world."</h2>

                        <div className="user-review">

                            <div className="user-image">
                                <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="user image"/>
                            </div>

                            <div className="user-info">
                                <h3>Sophia Martinez</h3>
                                <p>Madrid, Spain</p>
                            </div>

                        </div>

                    </div>
                        <div className="left">
                            <img src="https://m.media-amazon.com/images/I/71RVt35ZAbL._AC_UF1000,1000_QL80_.jpg" alt="book cover"/>
                        </div>

                </div>

            </Carousel>

        </div>
    );
}

export default Reviews