import "./CategoryBar.scss"

import {Link} from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CategoryBar = () => {
    return (
        <div className="category">
            <div className="wrapper">
                <div className="items">
                    <Link onClick={() => {window.location.href="/products/best_seller"}} to="/products/best_seller">Best seller</Link>
                    <Link onClick={() => {window.location.href="/products/trending"}} to="/products/trending">Trending</Link>
                    <Link onClick={() => {window.location.href="/products/science_fiction"}} to="/products/science_fiction">Sci-Fi</Link>
                    <Link onClick={() => {window.location.href="/products/mystery"}} to="/products/mystery">Mystery</Link>
                    <Link onClick={() => {window.location.href="/products/fantasy"}} to="/products/fantasy">Fantasy</Link>
                    <Link onClick={() => {window.location.href="/products/history"}} to="/products/history">History</Link>
                    <Link onClick={() => {window.location.href="/products/poetry"}} to="/products/poetry">Poetry</Link>
                    <Link onClick={() => {window.location.href="/products/romance"}} to="/products/romance">Romance</Link>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropdown-button">Categories<KeyboardArrowDownIcon className="arrow"/></button>
                <div className="dropdown-content">
                    <Link onClick={() => {window.location.href="/products/best_seller"}} to="/products/best_seller">Best seller</Link>
                    <Link onClick={() => {window.location.href="/products/trending"}} to="/products/trending">Trending</Link>
                    <Link onClick={() => {window.location.href="/products/science_fiction"}} to="/products/science_fiction">Sci-Fi</Link>
                    <Link onClick={() => {window.location.href="/products/mystery"}} to="/products/mystery">Mystery</Link>
                    <Link onClick={() => {window.location.href="/products/fantasy"}} to="/products/fantasy">Fantasy</Link>
                    <Link onClick={() => {window.location.href="/products/history"}} to="/products/history">History</Link>
                    <Link onClick={() => {window.location.href="/products/poetry"}} to="/products/poetry">Poetry</Link>
                    <Link onClick={() => {window.location.href="/products/romance"}} to="/products/romance">Romance</Link>
                </div>
            </div>
        </div>

    );
};

export default CategoryBar;