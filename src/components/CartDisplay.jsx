import React, { useState } from 'react';
import "./style/cartdisplay.css"
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';


const CartDisplay = ({ cart,removeCart,setCartCount}) => {
    const [quantity, setquantity] = useState(1)
    const navigate=useNavigate()
    let totalprice = cart.reduce((accum, item) => {
        let price = item.dropprice ? parseFloat(item.dropprice.replace('₹', '')) : parseFloat(item.price.replace('₹', ''));
        return accum + price;
    }, 0);
    const gohome = () => {
      navigate('/')
  }
    return (
        <div >
            {cart.length === 0 ? (
                <div>
                    <div style={{display:"flex",justifyContent:"center",height:"89vh",alignItems:"center"}}  role="alert">
                        <h1>The cart is empty  <i class="fa-sharp fa-regular fa-face-smile"></i></h1>
                    </div>
                </div>
            ) : (
             cart.map((item, index) => {
                 return (
                     <> 
                         <CartItem item={item} setCartCount={setCartCount} index={index} quantity={quantity} removeCart={removeCart}/>   
                     </>
                    )
                }

                    )
            )}
            < div className='cartfooder'>
                <div className='box mx-auto p-2' >
                    <h5>Total Price :₹{totalprice}</h5>
                    <button className='btn btn-primary' onClick={gohome}>Back Home</button>
                </div>

            </div>
        </div>
    );
};

export default CartDisplay;