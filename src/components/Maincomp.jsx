import React from 'react';
import './style/maincomp.css'
import Cartpro from './Cartpro';

const Maincomp = ({ setCartCount, cartData, addToCart, removeFromCart }) => {
    return (
        <div>
            <div className=' header '>
                <div className='mt-5 pt-5'>
                    <h1>Happy Nuts <i class="fa-sharp fa-regular fa-face-smile"></i></h1>
                    <h6>Choose Your Healthy Snacks</h6>
                </div>
            </div>
        <div className='container'>
            <div className='row'>
            {cartData.map((item,index) => { 
                return (
                    <> 
                        <Cartpro item={item} index={index} setCartCount={setCartCount} addToCart={addToCart} removeFromCart={removeFromCart} />
                    </>
                 )
            })}
            
            </div>
            </div>
            <div className='fooder'>
                <h4>Copyright © Your Website 2023</h4>
            </div>
        </div>
    );
};

export default Maincomp;