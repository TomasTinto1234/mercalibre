import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../carrusel/Carrusel";
import { offers, vendidos, productos } from "../../redux/actions.js";
// import Payments from '../components/Payments.js';
import Offers from "../offers/Offers";
import { number } from "../../redux/actions.js";
import { Link, useSearchParams } from "react-router-dom";
import Details from "../details/Details";
// import Subscription from '../components/Subscription.js';
// import Benefits from '../components/Benefits.js';
// import Advertising from '../components/Advertising';
// import Discover from '../components/Discover.js';
import Categories from "../categories/Categories";
// import Footer from '../components/Footer.js';
import Products from "../products/Products"
import Card from '../card/Card'

function Home() {
  const dispatch = useDispatch();
  //   const discover = useSelector((state) => state.discover);
  //   const interests = useSelector((state) => state.interests);
  const products = useSelector((state) => state.searchProduct);
  const listOffers = useSelector((state) => state.offers);
  const listVendidos = useSelector((state) => state.vendidos);

  useEffect(() => {
    dispatch(offers());
    // dispatch(vendidos());
    dispatch(productos())

    window.scrollTo(0, 0);
  }, []);

  const [cartItems, setCartItems] = useState([]);
  const vaciarCarrito = () => {
    setCartItems([]);
  };
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
  // console.log(cartItems);
  const onRemove = (products) => {
    const existingItem = cartItems.find((x) => x.id === products.id);
    if (existingItem) {
      setCartItems(cartItems.filter((x) => x.id !== products.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === products.id
            ? { ...existingItem, qty: existingItem.qty - 1 }
            : x
        )
      );
    }
  };
  const onSum = (products) => {
    const existingItem = cartItems.find((x) => x.id === products.id);
    console.log(existingItem);
    if (!existingItem) {
      setCartItems(
        cartItems.map((x) =>
          x.id === products.id
            ? { ...existingItem, qty: [...(existingItem.qty + 1)] }
            : x
        )
      );
    }
  };
  const onKick = (products) => {
    const existingItem = cartItems.find((x) => x.id === products.id);
    if (!existingItem) {
      setCartItems(
        cartItems.map((x) =>
          x.id === products.id
            ? { ...existingItem, qty: [...(existingItem.qty - 1)] }
            : x
        )
      );
    }
  };
  return (
    <div className="container-home">
      <Carousel />
      {/* <Offers title="Ofertas" listOffers={listOffers} /> */}
      <Categories />
      {/* <Offers title="Mas vendidos" listOffers={listVendidos} /> */}
      <Products title="Productos" products={listOffers} />
      <div className="products-container">
           
              <h2 className="products-title">Ultimas busquedas</h2>
            <div className="products-slider">
                {products.slice(0, 5).map(offer => {
                return (
                    <div key={offer.id}>
                        <Link to={`/detail/${offer.id}`} style={{"textDecoration":"none"}}>
                            <Card offer={offer}/>
                        </Link>
                    </div>
                )
                })} 
            </div>
           
        </div>
      {/* <Payments/>
        <Subscription/>
        <Benefits/>
        <Advertising/>
        <Discover data={discover} title="Descubrí"/>
        <Discover data={interests} title="Te puede interesar"/>
        <Categories/>
        <Footer/> */}
    </div>
  );
}

export default Home;
