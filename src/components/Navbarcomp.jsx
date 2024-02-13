import React from 'react';
import './style/nav.css'

const Navbarcomp = ({cart}) => {
    return (
//nav bar for this page include cart button
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                {/* title for webpage */}
                <a class="navbar-brand title" href="#">Happy Nuts <i class="fa-sharp fa-regular fa-face-smile"></i></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">about</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Shop
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">All Products</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Popular Items</a></li>
                                <li><a class="dropdown-item" href="#">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <button className="btn btn-outline-dark" type="submit"><i class="fa-solid fa-cart-shopping"></i> Cart <span id='count'>{cart}</span></button>
                    </div>
                </div>
            </nav>
    );
};

export default Navbarcomp;