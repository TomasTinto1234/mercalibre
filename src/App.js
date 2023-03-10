import React,{useState} from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../src/components/home/Home"
import Results from '../src/components/results/Results';
import Details from '../src/components/details/Details';
// import Cart from './pages/Cart.js';
// import BuyProducts from './pages/BuyProducts.js';
import Navbar from './components/navBar/NavBar.jsx';
import Footer from './components/footer/Footer';
// import Footer from './components/Footer.js';
// import './App.css';
// import Footerend from './components/FooterEnd.js';

function App() {
  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (products) => {
    const existingItem = cartItems.find((x) => x.id === products.id);
    console.log(existingItem);
    if (existingItem) {
      setCartItems(
        cartItems.map((x) =>
          x.id === products.id
            ? { ...existingItem, qty: existingItem.qty + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...products, qty: 1 }]);
    }
  };

  return (
    <div>
      <Navbar countCartItems={cartItems.length}/>
      {/* <Home/> */}
        <Routes>
           <Route exact path='/' element={<Home/>}/>
           <Route exact path='/detail/:id' element={<Details/>}/>
           <Route exact path='/results' element={<Results/>}/>
          {/*
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/buy' element={<BuyProducts/>}/> */}
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
