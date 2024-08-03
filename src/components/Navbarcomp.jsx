import React from 'react';
import './style/nav.css';
import { Link } from 'react-router-dom';

const Navbarcomp = ({cart}) => {
    return (
//nav bar for this page include cart button
        <nav class="navbar navbar-expand-lg ">
            <div class="container">
                {/* title for webpage */}
                <a class="navbar-brand title " href="#">Happy Nuts <i class="fa-sharp fa-regular fa-face-smile"></i></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                           <Link to='/' class="nav-link">ALL PRODUCTS</Link>
                        </li>
                    
                    </ul>
                    <Link to='/cartitem'><button className="btn btn-light" type="submit">
                        Cart <span id='count'>{cart}</span></button></Link>
                    
                    </div>
                </div>
            </nav>
    );
};

export default Navbarcomp;