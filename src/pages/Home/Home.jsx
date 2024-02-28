import Slider from "../../components/Slider/Slider";
import "./Home.scss"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Reviews from "../../components/Reviews/Reviews";
import BestSeller from "../../components/FeaturedProducts/BestSeller";
import Contact from "../../components/Contact/Contact";
import CategoryBar from "../../components/CategoryBar/CategoryBar";

const Home = () => {
    return(
        <div className="home">
            <Slider></Slider>
            <BestSeller/>
            <Reviews/>
            <FeaturedProducts type="Trending"/>
        </div>
    )
}

export default Home
