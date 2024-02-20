import Slider from "../../components/Slider/Slider";
import "./Home.scss"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import BestSeller from "../../components/FeaturedProducts/BestSeller";
import Contact from "../../components/Contact/Contact";
import CategoryBar from "../../components/CategoryBar/CategoryBar";

const Home = () => {
    return(
        <div className="home">
            <Slider></Slider>
            <BestSeller/>
            <Categories/>
            <FeaturedProducts type="Trending"/>
        </div>
    )
}

export default Home
