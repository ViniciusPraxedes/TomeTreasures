import {useEffect, useState} from "react";
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LanguageIcon from '@mui/icons-material/Language';
import { useParams } from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import DoneIcon from '@mui/icons-material/Done';

import {addToCart} from "../../redux/cartReducer";

const Product = () =>{

    const id = useParams().id;
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch()

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://book-service-r6tn.onrender.com/book/${id}`);
                setData(response.data);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);


    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: id,
            title: data.name,
            desc: data.author,
            price: data.price,
            img: data.imageLink,
            quantity,
        }));
        setIsAdded(true);
        setTimeout(() => {
            setIsAdded(false); // Reset state after 3 seconds
        }, 2000);
    };
    return(
        <div className="product">

            <div className="left">

                <div className="mainImg">
                    <img src={data.imageLink} alt=""/>
                </div>

            </div>

            <div className="right">

                <h1>{data.name}</h1>
                <h2>{data.author}</h2>
                <span className="price">${data.price}</span>

                <div className="quantity">
                    <button onClick={()=>setQuantity(prev => prev === 1 ? 1 : prev-1)}>-</button>
                    {quantity}
                    <button onClick={()=>setQuantity(prev => prev+1)}>+</button>
                </div>

                <button className={isAdded ? "add-success" : "add"} onClick={handleAddToCart}>
                    {isAdded ? <DoneIcon/> : <AddShoppingCartIcon/>} {isAdded ? 'Succesfully added to cart' : 'ADD TO CART'}
                </button>


                <p>{data.description}</p>


                <div className="language">
                    <LanguageIcon className="icon"/>
                    <span>Language: English</span>
                </div>

                <div className="pages">
                    <AutoStoriesIcon className="icon"/>
                    <span>{data.numberOfPages} pages</span>
                </div>

                <div className="shipping">
                    <LocalShippingIcon className="icon"/>
                    <span>Expected delivery time <span className="deliveryTime"> 1-3 working days</span></span>
                </div>

                <div className="info">
                    <span>Product code: {data.itemCode}</span>
                </div>
            </div>

        </div>





    )
}

export default Product