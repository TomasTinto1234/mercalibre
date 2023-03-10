import React from "react";
import { Link } from 'react-router-dom';
import Card from "../card/Card";
import './offers.css';


export default function Offers({title, listOffers}) {

    return (

        <div className="offers-container">
            <div className="offers-top">
                <h2 className="offers-title"> {title} </h2>
                <p className="offers-seeAll"> Ver todas </p>
            </div>
            
            <div className="offers-slider">
                {listOffers?.map(offer => {
                return (
                    <div key={offer.id}>
                        <Link to={`/detail/${offer.id}`} style={{"textDecoration":"none"}}>
                            <Card offer={offer}/>
                        </Link>
                    </div>
                )
                })} 
            </div>
            <div className='detail-right-payment'>
              <p className='detail-information'>Medios de pago</p>
              <p className='detail-credit'>Hasta 12 cuotas sin tarjeta</p>
              <img src="https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg" width="75" alt="Mercado crédito"/>
              <p className='payment-type'>Tarjetas de crédito</p>
              <div className='credit-contatiner'>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" width="40" alt="Visa"/>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/fbf867c0-9108-11ed-87b1-fd4dd99fac51-m.svg" width="30" alt="American Express"/>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg" width="65" alt="Naranja"/>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" width="40" alt="MasterCard"/>
              </div>
              <p className='payment-type'>Tarjetas de débito</p>
              <div className='credit-contatiner'>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg"  width="70" alt="Visa"/>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg"  width="33" alt="Maestro"/>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg"  width="60" alt="MasterCard"/>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg"  width="60" alt="Cabal"/>  
              </div>
              <p className='payment-type'>Efectivo</p>
              <div className='efectivo-container'>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg"  width="33"alt="Pago Facil"/>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg"  width="63"alt="RapiPago"/> 
              </div>
              <p className='detail-date'>Conocé otros medios de pago</p>
                <p className='detail-platinum'><img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/medal.svg" alt="medal" style={{"marginRight":"3%"}}/>MercadoLíder Platinum</p>
              <p className='detail-site'>¡Es uno de los mejores del sitio!</p>
              <ul className='seller-calification-container'>
                <li className='seller-calification' style={{"backgroundColor":"#FFF0F0"}}></li>
                <li className='seller-calification' style={{"backgroundColor":"#FFF5E8"}}></li>
                <li className='seller-calification' style={{"backgroundColor":"#FFFCDA"}}></li>
                <li className='seller-calification' style={{"backgroundColor":"#F1FDD7"}}></li>
                <li className='seller-calification' style={{"height":"0.7rem"}}></li>
              </ul>
            </div>
             
        </div>
    );
}
  