import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch, useSelector} from "react-redux";
import {removeItem, resetCart} from "../../redux/cartReducer";
import {useEffect, useState} from "react";
 const Cart = ({status, onToggle}) =>{

     const products = useSelector((state) => state.cart.products);
     const dispatch = useDispatch();
     const [showButton, setShowButton] = useState(false);

     const totalPrice = () => {
         let total = 0;
         products.forEach((item) => {
             total += item.quantity * item.price;
         });
         return total.toFixed(2);
     };

     useEffect(() => {
         // Check if totalPrice is above 0 and update showButton accordingly
         setShowButton(totalPrice() > 0);
     }, [totalPrice]);

    return(
        <div className="cart">

            <div className="top">
                <CloseIcon className="close" onClick={onToggle}/>
                <h1>Shopping cart</h1>
            </div>

            <div className="middle">
                {products?.map(item=>(
                    <div className="item" key={item.id}>
                        <img src={item.img} alt="" />

                        <div className="details">
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                            <div className="price">{item.quantity}x<span> ${item.price}</span> </div>
                        </div>

                        <DeleteOutlinedIcon className="delete" onClick={() => dispatch(removeItem(item.id))}/>
                    </div>
                ))}
            </div>

            <div className="bottom">
                <div className="total">
                    <span>SUBTOTAL:</span>
                    <span>${totalPrice()}</span>
                </div>
                    <form action="https://book-service-r6tn.onrender.com/order/create-checkout-session"  method="POST">
                        <input type="hidden" name="price" id="priceInput" value={totalPrice()}/>
                        {showButton && (
                            <button type="submit">
                                PROCEED TO CHECKOUT
                            </button>
                        )}
                    </form>
            </div>
        </div>
    )
 }

 export default Cart