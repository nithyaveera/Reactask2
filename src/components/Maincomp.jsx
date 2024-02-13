import React from 'react';
import './style/maincomp.css'
import Cartpro from './Cartpro';

const Maincomp = ({ setCartCount, cartData }) => {
    return (
        <div className='container'> 
            <div className='row'>
            {cartData.map((item,index) => { 
                return (
                    <> 
                        <Cartpro item={item} index={index} setCartCount={setCartCount} />
                    </>
                 )
            })}
            
            </div>
        </div>
    );
};

export default Maincomp;