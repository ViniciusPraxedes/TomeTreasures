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
                    <a href="/products/best_seller">Best seller</a>
                    <a href="/products/trending">Trending</a>
                    <a href="/products/science_fiction">Sci-Fi</a>
                    <a href="/products/mystery">Mystery</a>
                    <a href="/products/fantasy">Fantasy</a>
                    <a href="/products/history">History</a>
                    <a href="/products/poetry">Poetry</a>
                    <a href="/products/romance">Romance</a>
                </div>
            </div>
        </div>

    );
};

export default CategoryBar;