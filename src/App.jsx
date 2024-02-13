import React, { useState } from 'react';
import Navbarcomp from './components/Navbarcomp';
import Headercomp from './components/Headercomp';
import Maincomp from './components/Maincomp';
import Foodercomp from './components/Foodercomp';

const App = () => {
  let [cartcount, setCartCount] = useState(0)
  let cartData = [{
    img: "./img/walnut.png",
    name: "Walnuts",
    gram: "100gms",
    price: "₹180"
  }, {
    img: "./img/pista.png",
    name: "Pista",
    gram: "100gms",
    price: "₹300",
    sales: true,
    dropprice: "₹240"
  }, {
    img: "./img/almond.png",
    name: "Almond",
    gram: "500gms",
    price: "₹450",
    sales: true,
    dropprice: "₹399"
  }, {
    img: "./img/fig.png",
    name: "Figs",
    gram: "100gms",
    price: "100gms : ₹350"
  }, {
    img: "./img/cashew.png",
    name: "Cashews",
    gram: "500gms",
    price: "₹600",
    sales: true,
    dropprice: "₹540"
  }, {
    img: "./img/raisin.png",
    name: "Raisins",
    gram: "100gms",
    price: "₹50"
  }, {
    img: "./img/dates.png",
    name: "Dates",
    gram: "250gms",
    price: "₹180"
  }, {
    img: "./img/coffee-beans.png",
    name: "Coffee Beans",
    gram: "100gms",
    price: "₹250",
    sales: true,
    dropprice: "₹210"
  }]
  return (
    <div>
      <Navbarcomp cart={cartcount} />
      <Headercomp />
      <Maincomp setCartCount={setCartCount} cartData={cartData} />
      <Foodercomp />
    </div>
  );
};

export default App;