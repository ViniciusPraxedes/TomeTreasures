import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './CategoryBar.scss';

const CategoryBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const hideDropdown = () => {
        setIsOpen(false);
    };

    const scrollToMiddle = () => {
        window.scrollTo({
            top: window.innerHeight / 3,
            behavior: 'smooth'
        });
    };

    return (
        <div className="category">
            <div className="wrapper">
                <div className="items">
                    <Link to="/products/best_seller">Best seller</Link>
                    <Link to="/products/trending">Trending</Link>
                    <Link to="/products/science_fiction">Sci-Fi</Link>
                    <Link to="/products/mystery">Mystery</Link>
                    <Link to="/products/fantasy">Fantasy</Link>
                    <Link to="/products/history">History</Link>
                    <Link to="/products/poetry">Poetry</Link>
                    <Link to="/products/romance">Romance</Link>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropdown-button" onMouseDown={toggleDropdown}>
                    Categories
                    <KeyboardArrowDownIcon className="arrow" />
                </button>
                {isOpen && (
                    <div className="dropdown-content" onMouseDown={(e) => e.stopPropagation()}>
                        <Link onClick={() => { hideDropdown(); scrollToMiddle(); }} to="/products/best_seller">Best seller</Link>
                        <Link onClick={() => { hideDropdown(); scrollToMiddle(); }} to="/products/trending">Trending</Link>
                        <Link onClick={() => { hideDropdown(); scrollToMiddle(); }} to="/products/science_fiction">Sci-Fi</Link>
                        <Link onClick={() => { hideDropdown(); scrollToMiddle(); }} to="/products/mystery">Mystery</Link>
                        <Link onClick={() => { hideDropdown(); scrollToMiddle(); }} to="/products/fantasy">Fantasy</Link>
                        <Link onClick={() => { hideDropdown(); scrollToMiddle(); }} to="/products/history">History</Link>
                        <Link onClick={() => { hideDropdown(); scrollToMiddle(); }} to="/products/poetry">Poetry</Link>
                        <Link onClick={() => { hideDropdown(); scrollToMiddle(); }} to="/products/romance">Romance</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryBar;
