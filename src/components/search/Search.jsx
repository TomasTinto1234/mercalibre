import React, { useState } from 'react';
import {IoSearchOutline} from "react-icons/io5"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchProduct } from '../../redux/actions';
import './search.css';


function Search () {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    
    const handleInputChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchProduct(name))
        navigate(`/results/?search=${name}`)
        setName("")
    }

    return (
        <form className="input" onSubmit={handleSubmit}>
            <input
            className="form-input"
            type="text"
            placeholder="Buscar productos"
            onChange={(e) => handleInputChange(e)} 
            value={name}
            />
            <button className="btn-search" type="button">
                <p className='linea-search'>|</p>
                <IoSearchOutline className='search-icon'  size="30px"
                color='black'
                onMouseOut={({ target }) => (target.style.color = "black")}
                cursor="pointer"/>
            </button>
        </form>
    )
};


  export default Search