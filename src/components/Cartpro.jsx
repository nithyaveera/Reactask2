import React, { useState } from 'react';
import './style/cartpro.css'

const Cartpro = ({ item, index, setCartCount }) => {
    let [status, setStatus] = useState(true)
    let addcart = () => {
        setStatus(false)
        setCartCount((pval) => pval + 1)
    }
    let removecart = () => {
        setStatus(true)
        setCartCount((pval) => pval - 1)
    }
    return (
        <div key={index} class="col-md-3 pt-4 mt-4 mb-3">
            <div className='card h-100'>
                {item.sales ? <h6 id="sale"><span>sale</span></h6> : " "}
                <img src={item.img} class="card-img-top productimg" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    {item.sales ? <p class="card-text">{item.gram} : <span id="saleprice">{item.price}</span> {item.dropprice}</p> : <p class="card-text">{item.gram} : {item.price}</p>}               {index == 1 || index == 3 || index == 6 || index == 7 ? <p><i class="fa-sharp fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                        <i class="fa-sharp fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                        <i class="fa-sharp fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                        <i class="fa-sharp fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                        <i class="fa-sharp fa-solid fa-star" style={{ color: "#FFD43B" }}></i></p> : " "}
                    <div id='btn'>
                    {status ? <button className='btn btn-outline-dark' onClick={addcart}>Add to cart</button> :
                        <button className='btn btn-outline-dark' onClick={removecart}>Remove from cart</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartpro;