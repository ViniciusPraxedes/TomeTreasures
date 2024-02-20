import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss"
import {useState} from "react";

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.wallpaperscraft.com/image/single/books_library_shelves_138556_2560x1024.jpg",
        "https://images.wallpaperscraft.com/image/single/books_library_stairs_964478_2560x1024.jpg",
        "https://www.muralunique.com/wp-content/uploads/2020/02/1667_V.jpg",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    }

    return(
        <div className="slider">

            <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt=""/>
                <img src={data[1]} alt=""/>
                <img src={data[2]} alt=""/>
            </div>

            <div className="icons">


                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon/>
                </div>

                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon/>
                </div>

            </div>

        </div>

    )
}

export default Slider