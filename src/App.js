import React,{useState} from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../src/components/home/Home"
import Results from '../src/components/results/Results';
import Details from '../src/components/details/Details';
// import Cart from './pages/Cart.js';
// import BuyProducts from './pages/BuyProducts.js';
import Navbar from './components/navBar/NavBar.jsx';
import Footer from './components/footer/Footer';
import { useDispatch, useSelector } from "react-redux";
import Offers from './components/offers/Offers';
// import Footer from './components/Footer.js';
// import './App.css';
// import Footerend from './components/FooterEnd.js';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const listOffers = useSelector((state) => state.offers);

  return (
    <div>
      <Navbar countCartItems={cartItems.length}/>
      {/* <Home/> */}
        <Routes>
           <Route exact path='/' element={<Home/>}/>
           <Route exact path='/detail/:id' element={<Details/>}/>
           <Route exact path='/results' element={<Results/>}/>
           <Route exact path= '/offers' element={<Offers title="Ofertas" listOffers={listOffers}/>}/>
          {/*
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/buy' element={<BuyProducts/>}/> */}
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
