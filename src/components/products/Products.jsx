import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Card from "../card/Card";
import './products.css';
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io"


export default function Products({title, products}) {
    const [slide, setSlide] = useState("start")

    const handleClickNext = () => {
        if (slide === 'start') {
            setSlide('middle')
        } else if (slide === 'middle') {
            setSlide('end')
        }
    }

    const handleClickPrev = () => {
        if (slide === 'end') {
            setSlide('middle')
        } else if (slide === 'middle') {
            setSlide('start')
        }
    }
    return (

        <div className="products-container">
            <div className="products-top">
                <h2 className="products-title"> {title} </h2>
                <p className="products-seeAll"> Ver todas </p>
            </div>
            <div className='botones'>
                    <button onClick={() => setSlide('start')} className={`category-btn ${slide === 'start' ? "active" : ""}`}></button>
                    <button onClick={() => setSlide('middle')} className={`category-btn ${slide === 'middle' ? "active" : ""}`}></button>
                    <button onClick={() => setSlide('end')} className={`category-btn ${slide === 'end' ? "active" : ""}`}></button>
                </div>
                <div className='category-bottom'>
                <button onClick={handleClickPrev} className={`category-btn-arrow-left ${slide === 'start' ? "noShow" : ""}`}><IoIosArrowBack/></button>
            <div className="products-slider">
                {products?.map(offer => {
                return (
                    <div key={offer.id}>
                        <Link to={`/detail/${offer.id}`} style={{"textDecoration":"none"}}>
                            <Card offer={offer}/>
                        </Link>
                    </div>
                )
                })} 
            </div>
            <button onClick={handleClickNext} className={`category-btn-arrow-right ${slide === 'end' ? "noShow" : ""}`}><IoIosArrowForward/></button>
            </div>
        </div>
    );
}