import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";
 const Cart = ({status, onToggle}) =>{

     const data = [
         {
             id: 1,
             img: "https://images.lululemon.com/is/image/lululemon/EMEA_ece_w_tops_swiftly_sep23",
             img2: "https://images.lululemon.com/is/image/lululemon/LW3BQ4S_028850_1?size=800,800",
             title: "Long sleeve graphic",
             isNew:true,
             oldPrice: 19,
             price: 12,
         },
         {
             id: 1,
             img: "https://images.lululemon.com/is/image/lululemon/EMEA_ece_w_tops_swiftly_sep23",
             img2: "https://images.lululemon.com/is/image/lululemon/LW3BQ4S_028850_1?size=800,800",
             title: "Long sleeve graphic",
             isNew:true,
             oldPrice: 19,
             price: 12,
         },
         {
             id: 1,
             img: "https://images.lululemon.com/is/image/lululemon/EMEA_ece_w_tops_swiftly_sep23",
             img2: "https://images.lululemon.com/is/image/lululemon/LW3BQ4S_028850_1?size=800,800",
             title: "Long sleeve graphic",
             isNew:true,
             oldPrice: 19,
             price: 12,
         }
     ]

    return(
        <div className="cart">

            <div className="top">
                <CloseIcon className="close" onClick={onToggle}/>
                <h1>Shopping cart</h1>


            </div>

            <div className="middle">
                {data?.map(item=>(
                    <div className="item" key={item.id}>
                        <img src={item.img} alt="" />

                        <div className="details">
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                            <div className="price">1 x ${item.price}</div>
                        </div>

                        <DeleteOutlinedIcon className="delete"/>
                    </div>
                ))}
            </div>

            <div className="bottom">
                <div className="total">
                    <span>SUBTOTAL</span>
                    <span>$123</span>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>



        </div>
    )
 }

 export default Cart