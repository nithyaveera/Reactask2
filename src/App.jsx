import React, { useState } from 'react';
import Navbarcomp from './components/Navbarcomp';
import Maincomp from './components/Maincomp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartDisplay from './components/CartDisplay';

const App = () => {
  let [cartcount, setCartCount] = useState(0)
  const [cart, setCart] = useState([]);
  
  
  const addToCart = (item) => {
    setCart((prevCartData) => [...prevCartData, item]);
  };

  const removeFromCart = (id) => {
    setCart((prevCartData) => prevCartData.filter((item) => item.id !== id));
  };
  
  const removeCart = (indexToRemove) => {
    setCart((prevCartData) => prevCartData.filter((_, index) => index !== indexToRemove));
  };


console.log(cart)
  let cartData = [{
    id:1,
    img: "https://img.freepik.com/free-photo/side-view-bowl-with-walnuts-rustic_141793-6221.jpg?t=st=1720868302~exp=1720871902~hmac=8a514305c7e34ab1ee3b8d85c3f5eef40cf2a42368accc88c33acc9479b7749d&w=740",
    name: "Walnuts",
    gram: "100gms",
    price: "₹180",
    category:"nuts"
  },
    {
      id: 2,
    img: "https://img.freepik.com/free-photo/close-up-pistachio-texture_53876-47166.jpg?t=st=1720868376~exp=1720871976~hmac=a39e04c93487d9ea921be222b8452e24c3625de5272e8baa8f68c972d05d282a&w=740",
    name: "Pista",
    gram: "100gms",
    price: "₹300",
    sales: true,
    dropprice: "₹240",
    category: "nuts"
    },
    {
      id: 3,
    img: "./img/almond.png",
    name: "Almond",
    gram: "500gms",
    price: "₹450",
    sales: true,
    dropprice: "₹399",
    category: "nuts"
    }, {
      id: 4,
    img: "https://img.freepik.com/free-photo/raw-cashews-nuts-bowl-dark-background_1150-45357.jpg?t=st=1720867266~exp=1720870866~hmac=e017b29aadf3c12c50967c663116441e064efd448bfc21cae913b132e51d38d8&w=740",
    name: "Cashews",
    gram: "500gms",
    price: "₹600",
    sales: true,
    dropprice: "₹540",
    category: "nuts"
    },
    {
      id:5,
      img: "https://img.freepik.com/free-photo/different-dried-fruits_144627-16150.jpg?t=st=1720868862~exp=1720872462~hmac=7ca3b06feec7881c1e34e6d1d0c180b20cbedb9ff4938a71a6c53cacfe3634db&w=740",
      name: "Mix Dry Nuts",
      gram: "500gms",
      price: "₹700",
      category: "nuts"
    },
    {
      id: 6,
      img: "https://img.freepik.com/free-photo/close-up-view-almonds-arrangement_23-2148431063.jpg?t=st=1720869580~exp=1720873180~hmac=8e858a130856fbfc83fd187281ca62079d76583e01dc06318af4ffe123b8fbdd&w=740",
      name: "Almond Sliced",
      gram: "100gms",
      price: "270",
      category: "nuts"
    }, {
      id: 7,
      img: "https://img.freepik.com/free-photo/hazelnuts_144627-16142.jpg?t=st=1720870261~exp=1720873861~hmac=6dbed48bc43a92b2af3be0fa564e05b77cde789f4a98989b4996738fcc9cf181&w=740",
      name: "Hazelnuts",
      gram: "200gms",
      price: "₹270",
      category: "nuts"
    },
    {
      id: 8,
      img: "https://img.freepik.com/free-photo/assortment-peanuts-with-shells_23-2150361213.jpg?t=st=1720870343~exp=1720873943~hmac=94bac2e35fdd68b0e75860c7f8192dea808b6fc5b522451aa09ddf6ab1222145&w=740",
      name: "Peanuts",
      gram: "500gms",
      price: "₹180",
      category: "nuts"
    },
    {
      id: 9,
      img: "https://img.freepik.com/free-photo/kiwi-dried-white_1368-6580.jpg?t=st=1720872262~exp=1720875862~hmac=416b03a02c30c04e6830763d82153c702386d64a60cdbe3ce3371bdf42fd5a37&w=740",
      name: "Dried Kiwi",
      gram: "250gms",
      price: "₹238",
      category: "dryfruits"
    },
    {
      id: 10,
      img: "https://img.freepik.com/free-photo/raisin-currant_1339-7227.jpg?t=st=1720872043~exp=1720875643~hmac=640c5ace8ff9cd172fdd7e08302bfb9caf33044a850a83ce388ee7e11f856756&w=740",
    name: "Raisins",
    gram: "100gms",
    price: "₹50",
    category: "dryfruits"
    }, {
      id: 11,
      img: "https://img.freepik.com/free-photo/sweet-dates-clay-plate-stone-tile-wooden-background_176474-5655.jpg?t=st=1720871973~exp=1720875573~hmac=3298d008cf32051525ba68c4ee36fed4da7ce5d2592bf03eca49b59cf42b3bd8&w=740",
    name: "Dates",
    gram: "250gms",
      price: "₹180",
      category: "dryfruits"
    },
    {
      id: 12,
      img: "https://img.freepik.com/free-photo/dry-cherry-bowl-marble-table_114579-74859.jpg?t=st=1720872720~exp=1720876320~hmac=96712997fcc9509fd4c00e145a0f8e9c8a5c944c9313a1bf3bb388d4decfa59c&w=740",
      name: "Dried Blueberries",
      gram: "200gms",
      price: "₹450",
      category: "dryfruits"
    },
    {
      id: 13,
      img: "https://img.freepik.com/free-photo/raisins-dried_1368-9147.jpg?t=st=1720873155~exp=1720876755~hmac=76981d653c561994353c1593f1b33b7aa73dcb14baa72b96d51faa782f568b89&w=740",
      name: "Black Raisins",
      gram: "200gms",
      price: "₹190",
      category: "dryfruits"
    },
    {
      id: 14,
      img: "https://img.freepik.com/free-photo/side-view-dried-orange-slices-isolated-white-background_141793-7806.jpg?t=st=1720873370~exp=1720876970~hmac=6ea8c3687b93c34af0b01a83e479ee44eae0268485bb61b9b94d2ef9dbaabd5c&w=740",
      name: "Dried Orange Slices",
      gram: "100gms",
      price: "₹350",
      category: "dryfruits"
    },
    {
      id: 15,
      img: "https://img.freepik.com/free-photo/various-dried-fruits-bowl-trivet-marble-surface_114579-84050.jpg?t=st=1720871324~exp=1720874924~hmac=61f5a02f2ed89c7f1a9d2480a24f4657a798c86421decf5a8ab16a3fb8dd1440&w=740",
      name: "Figs",
      gram: "100gms",
      price: "₹350",
      category: "dryfruits"
    },
    {
      id: 16,
      img: "https://img.freepik.com/free-photo/dried-green-bay-leaves-wooden-plate_114579-25164.jpg?t=st=1720873777~exp=1720877377~hmac=8b7c9fd17c1356c9ffcce8b4ad341542b35a284e03b0a8fc41f8868d37c8f715&w=740",
      name: "Whole Bay Leaf",
      gram: "200gms",
      price: "₹97",
      category: "spices"
    },
    {
      id: 17,
      img: "https://img.freepik.com/free-photo/close-up-spoon-with-condiment-seeds_23-2148461674.jpg?t=st=1720873982~exp=1720877582~hmac=d4022bba122180108c9f647dd5148ee276d5cccf9818f47d6ffd6c4a640c2859&w=740",
      name: "Black Pepper",
      gram: "100gms",
      price: "₹145",
      category: "spices"
    },
    {
      id: 18,
      img: "https://img.freepik.com/free-photo/anise-seeds-texture-background-top-view_141793-7630.jpg?t=st=1720963395~exp=1720966995~hmac=abdee430a5bc2cc5512614be491690bdfbcb54bf39dd3cebade2f6085f27c6e0&w=740",
      name: "Cumin Jeera",
      gram: "100gms",
      price: "₹95",
      category: "spices"
    },
    {
      id: 19,
      img: "https://img.freepik.com/free-photo/top-view-anise-grains_23-2148170663.jpg?t=st=1720963151~exp=1720966751~hmac=f53dfedbb6f6555cee5859583bb103e843ed29426f548ab6c7bcb9eb33dd9766&w=740",
      name: "Star Anise",
      gram: "200gms",
      price: "₹460",
      category: "spices"
    },
    {
      id: 20,
      img: "https://img.freepik.com/free-photo/cinnamon-sticks-wrapped-with-rustic-thread_114579-11903.jpg?t=st=1720874264~exp=1720877864~hmac=4bea3cb47e27699962916c2c22eb1ef806b1e4a82e32a2a6057ec1f48041b563&w=740",
      name: "Cinnamon",
      gram: "100gms",
      price: "₹175",
      category: "spices"
    },
    {
      id: 21,
      img: "https://img.freepik.com/free-photo/dry-leaves-coming-out-from-fallen-jar_23-2148211169.jpg?t=st=1720874965~exp=1720878565~hmac=49eb66f8417ca845003cf6216016f9e6eece2c70bb6e4925eb48cfb4e97424b7&w=740",
      name: "Dried Rosemary",
      gram: "100gms",
      price: "₹260",
      category: "spices"
    },
    {
      id: 22,
      img: "https://img.freepik.com/free-photo/top-view-bowl-with-seeds_23-2148734696.jpg?t=st=1720874101~exp=1720877701~hmac=76dbd8fdfa8d62bb5f71753c6741c397b8190f39541df4c66391120040622cde&w=740",
      name: "Cardamom Elaichi",
      gram: "100gms",
      price: "₹345",
      category: "spices"
    },
    {
      id: 23,
      img: "https://img.freepik.com/free-photo/top-view-dried-cloves-with-wooden-spoon_140725-9082.jpg?t=st=1720963703~exp=1720967303~hmac=38fcbe2b4c8cc8516227b92295adeaf3f0022f31febe3eb403ca7b6b0bde8739&w=740",
      name: "Cloves",
      gram: "100gms",
      price: "₹220",
      category: "spices"
    },
    {
      id: 24,
      img: "https://img.freepik.com/free-psd/box-chocolate-candies-isolated-transparent-background_191095-17385.jpg?t=st=1720964881~exp=1720968481~hmac=0bbc064b8afdaf27e1436e7b31183709d378eec45197eb97fdee06cf5e072745&w=740",
      name: "Dark Chocolate",
      gram: "100gms",
      price: "₹370",
      category: "snacks"
    },
    {
      id: 25,
      img: "https://img.freepik.com/free-photo/pieces-white-chocolate_144627-15864.jpg?t=st=1720965024~exp=1720968624~hmac=6d9651d2455569c525383350b53425420cddfb7b90aa0b1ce82e12c8c070dc84&w=740",
      name: " White Chocolate",
      gram: "100gms",
      price: "₹290",
      category: "snacks"
    },
    {
      id: 26,
      img: "https://img.freepik.com/free-photo/delicious-mexican-sweets-arrangement_23-2150172376.jpg?t=st=1720965318~exp=1720968918~hmac=40b728bdaba8fc3d8a69ffcdba69a541980165939fc22008aa84d1a81576f0da&w=740",
      name: "Peanut Burfi",
      gram: "100gms",
      price: "₹80",
      category: "snacks"
    },
    {
      id:27,
      img: "https://img.freepik.com/free-photo/slices-dry-bread-with-hazelnuts_114579-28214.jpg?t=st=1720966534~exp=1720970134~hmac=588ed8a373fef710460c6342fb55582fc39952f2a97d482913511a748a3d02c3&w=740",
      name: "Nuts Chocolae",
      gram: "100gms",
      price: "₹280",
      category: "snacks"
    },
    {
      id: 28,
    img: "./img/coffee-beans.png",
    name: "Coffee Beans",
    gram: "100gms",
    price: "₹250",
    sales: true,
    dropprice: "₹210",
    category: "snacks"
  }]
  return (
    <div style={{ backgroundColor:"#f2ead7"}}>
      <BrowserRouter>
        <Navbarcomp cart={cartcount} />
        <Routes>
          <Route path='/' element={<Maincomp setCartCount={setCartCount} cartData={cartData} removeFromCart={removeFromCart} addToCart={addToCart} />} />
          <Route path='/cartitem' element={<CartDisplay cart={cart} removeCart={removeCart} setCartCount={setCartCount} /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;