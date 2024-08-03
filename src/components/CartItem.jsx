import React from 'react';

const CartItem = ({ item, index, removeCart, quantity, setCartCount}) => {
    let remove = () => {
        removeCart(index)
        console.log(index)
        setCartCount((pval) => pval - 1)
    }
    return (
        <div key={index} className='container ' >
            <div className="card mb-3 mx-auto" style={{ maxWidth: '50vw', display: "flex", justifyContent: "center" }} >
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={item.img} className="img-fluid rounded-start mx-auto d-block" alt="Single Image" />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h4 className="card-title">{item.name}</h4>
                            <p className="card-text">{item.gram}</p>
                            <p>Price:  <span id="saleprice">{item.price}</span> {item.dropprice}</p>
                            <p>Quantity: {quantity}</p>
                            <button className='btn btn-outline-secondary shadow' onClick={remove}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;


