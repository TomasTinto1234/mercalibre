import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Carousel from '../carrusel/Carrusel';
import {offers, vendidos, products} from '../../redux/actions.js';
// import Payments from '../components/Payments.js';
import Offers from '../offers/Offers';
import {number} from "../../redux/actions.js";
import { Link, useSearchParams } from 'react-router-dom';
import Details from '../details/Details';
// import Subscription from '../components/Subscription.js';
// import Benefits from '../components/Benefits.js';
// import Advertising from '../components/Advertising';
// import Discover from '../components/Discover.js';
import Categories from '../categories/Categories';
// import Footer from '../components/Footer.js';





function Home() {
  const dispatch = useDispatch()
//   const discover = useSelector((state) => state.discover);
//   const interests = useSelector((state) => state.interests);
    const products = useSelector((state) => state.searchProduct)
    const listOffers = useSelector((state) => state.offers)
  const listVendidos = useSelector((state) => state.vendidos)

  useEffect(() => {
    dispatch(offers());
    // dispatch(vendidos());
    // dispatch(products())

    window.scrollTo(0, 0)
  }, [])

  return (

    <div className='container-home'>
        <Carousel/>
        <Offers title="Ofertas" listOffers={listOffers}/>
                <Offers title="Mas vendidos" listOffers={listVendidos}/>
        <Categories/>
        <div className="results">
                    {products?.map(result => {
                    return (
                        <Link to={`/detail/${result.id}`} style={{"textDecoration":"none"}}  key={result.id}>
                            <div className='card-results'>
                                <img src={result.thumbnail} width="140" className='img-results' alt='producto'/>
                                <div className='container-card-results'>
                                    <p className='title-results'>{result.title} </p>
                                    <p className='price-results'> $ {number(Math.floor(result.price))}</p>
                                    {result.shipping.free_shipping ? <p className='free-today'> Llega gratis hoy </p> : null}
              <button className='btn-buy'> Comprar ahora </button>

                                </div>
                                    
                            </div>
                        </Link>
                    )
                    })}
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