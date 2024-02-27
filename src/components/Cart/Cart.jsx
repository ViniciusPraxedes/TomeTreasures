import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeItem} from "../../redux/cartReducer";
 const Cart = ({status, onToggle}) =>{

     const products = useSelector((state) => state.cart.products);
     const dispatch = useDispatch();

     const totalPrice = () => {
         let total = 0;
         products.forEach((item) => {
             total += item.quantity * item.price;
         });
         return total.toFixed(2);
     };

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
                <button>PROCEED TO CHECKOUT</button>
            </div>



        </div>
    )
 }

 export default Cart