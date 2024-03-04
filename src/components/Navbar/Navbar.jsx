import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import axios from "axios";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import {useSelector} from "react-redux";

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const products = useSelector((state) => state.cart.products);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("https://book-service-r6tn.onrender.com/book/all");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    const handleChange = event => {
        setSearchTerm(event.target.value);
        filterResults(event.target.value);
    };

    const filterResults = searchTerm => {
        const results = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    };

    const handleCartToggle = () => {
        setOpen(!open);
    };

    return (
        <div className="navbar">
            <div className="wrapper">


                <div className="left">
                    <Link className="link" onClick={() => {window.location.href="/"}}>Tome Treasures</Link>
                </div>



                <div className="center">
                    <div className="search-box">
                        <div className="row">
                            <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange} />
                            <SearchIcon className="searchIcon" />
                        </div>
                        {searchTerm && ( // Only render .result-box if there is something typed in the search bar
                            <div className="result-box">
                                <ul>
                                    {searchResults.map((item, index) => (
                                        <li key={index}>
                                            <Card className="card" item={item} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>


                <div className="right">
                    <div className="item">
                        <Link className="link" onClick={() => {window.location.href="/"}}>About</Link>
                    </div>

                    <div className="item">
                        <Link className="link" onClick={() => {window.location.href="/"}}>Contact</Link>
                    </div>

                    <div className="icons">
                        <PersonOutlineOutlinedIcon className="personIcon" />
                        <a>My account</a>
                        <div className="cartIcon" onClick={handleCartToggle}>
                            <ShoppingCartOutlinedIcon className="shoppingCartIcon" />
                            <span className="shoppingCartCounter">{products.length}</span>
                        </div>
                        <a onClick={handleCartToggle}>Shopping cart</a>
                    </div>

                </div>


            </div>
            {open && <Cart status={open ? 'Open' : 'Closed'} onToggle={handleCartToggle} />}
        </div>
    );
}

export default Navbar;
