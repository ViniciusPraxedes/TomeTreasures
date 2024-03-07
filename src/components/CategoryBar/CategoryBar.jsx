import "./CategoryBar.scss"

import {Link} from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CategoryBar = () => {
    return (
        <div className="category">
            <div className="wrapper">
                <div className="items">
                    <Link  to="/products/best_seller">Best seller</Link>
                    <Link  to="/products/trending">Trending</Link>
                    <Link  to="/products/science_fiction">Sci-Fi</Link>
                    <Link  to="/products/mystery">Mystery</Link>
                    <Link  to="/products/fantasy">Fantasy</Link>
                    <Link  to="/products/history">History</Link>
                    <Link  to="/products/poetry">Poetry</Link>
                    <Link  to="/products/romance">Romance</Link>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropdown-button">Categories<KeyboardArrowDownIcon className="arrow"/></button>
                <div className="dropdown-content">
                    <Link to="/products/best_seller" to="/products/best_seller"
                          onClick={() => {
                              window.location.reload();
                              window.location.href = "/products/best_seller";
                          }} >Best seller</Link>
                    <Link to="/products/trending">Trending</Link>
                    <Link  to="/products/science_fiction">Sci-Fi</Link>
                    <Link  to="/products/mystery">Mystery</Link>
                    <Link  to="/products/fantasy">Fantasy</Link>
                    <Link  to="/products/history">History</Link>
                    <Link to="/products/poetry">Poetry</Link>
                    <Link  to="/products/romance">Romance</Link>
                </div>
            </div>
        </div>

    );
};

export default CategoryBar;