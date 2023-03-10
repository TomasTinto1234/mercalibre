import React, { useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import "./categories.css";
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io"
import { searchProduct } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';


function Categories() {
    const [slide, setSlide] = useState("start")
    const listCategories = useSelector((state) => state.categories)
    const [name, setName] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const handleCategories = (product) => {
        console.log("soy product",product);
        // product.preventDefault()
        dispatch(searchProduct(product))
        navigate(`/results/?search=${product}`)
        setName("")
    }

    return (
        <div className='container-categories'>
            <div className='category-top'>
                <h2 className="category-title">Categorías populares </h2>
                <div className='botones'>
                    <button onClick={() => setSlide('start')} className={`category-btn ${slide === 'start' ? "active" : ""}`}></button>
                    <button onClick={() => setSlide('middle')} className={`category-btn ${slide === 'middle' ? "active" : ""}`}></button>
                    <button onClick={() => setSlide('end')} className={`category-btn ${slide === 'end' ? "active" : ""}`}></button>
                </div>
            </div>

            <div className='category-bottom'>
                <button onClick={handleClickPrev} className={`category-btn-arrow-left ${slide === 'start' ? "noShow" : ""}`}><IoIosArrowBack/></button>

                <div className={`categories ${slide}`}>
                    {listCategories?.map(category => {
                        return (
                            <button onClick={(category)=>handleCategories(category.name)}>
                            <div key={category.id} className="category-card" >
                            {category.icon}
                            <p className='category-name'>{category.name}</p>
                            
                        </div>
                </button>
                    )
                })}
                </div>

                <button onClick={handleClickNext} className={`category-btn-arrow-right ${slide === 'end' ? "noShow" : ""}`}><IoIosArrowForward/></button>
            </div>
        
        
        </div>
    );
}

export default Categories;