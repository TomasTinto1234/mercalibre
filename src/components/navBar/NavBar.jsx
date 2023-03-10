import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BiUser,
  BiMenu,
} from "react-icons/bi";
import {
  BsCart4
} from "react-icons/bs";
// import AllProducts from "../../products";
import { useNavigate } from 'react-router'
import carrito from "../../assets/carrito.png"
import "./navBar.css"
import {BsCart2} from "react-icons/bs";
import Search from "../search/Search";

  const NavBar = (props) => {

    function responsiveMenu() {
      const x = document.getElementById("elnav");
      if (x.className === "elnav") {
          x.className = "responsive";
      } else {
          x.className = "elnav";
      }
  }
  const navigate = useNavigate()
  const handleBack = () => {
      navigate(-1) 
  }

  const handleToIndex = () => {
      navigate('/')
  }

  
return (
        <section id="inicio">
      <div className ="contenido">
        <header>
          <div className="contenido-header">
         <h1 className="pages" onClick={handleToIndex}>Venta Libre</h1>
         <Search/>
         <nav id="elnav" onClick={()=>responsiveMenu()}>
            <ul id="links" >
             {/* <li className="pages"><a href="#products" >PRODUCTOS</a></li> */}
             {/* <li><span> <select className="btn">
            <option>Category</option>
            {allCategories?.map((e)=>{
              return (
                <option onClick={getCat(e)} id={e} key={e} value={e}>{e}
                </option>
                )
              })
            }
          </select></span></li> */}
          {/* <li className="pages"><select className="btn">
            <option>Name</option>
            <option value="az">a-z</option>
            <option value="za">z-a</option>
          </select></li> */}
             {/* <li className="pages"><a href="#users" ><Link to={`/Users` }>USERS</Link></a></li> */}
             {/* <li className="pages"><a href="#CreateProduct" ><Link to={`/CreateProduct`}>CREATE</Link></a></li> */}
             {/* <li className="pages"><a href="#contacto" >CONTACT</a></li> */}
             <li className="pages"><a href="#offers"><Link to={"/offers"}>Ofertas</Link></a></li>
             <li className="pages"><a href="#carrito"><Link to='/cart'>{props.countCartItems ? (<button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
            <BsCart2 color="white"
            className="pages"
                size="25px"
                onMouseOver={({ target }) => (target.style.color = "#5697FA")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                cursor="pointer"/>
          </Link></a></li>
             <li className="pages"><a href="#login" ><Link to={"/Login"}><BiUser color="white"
                className="pages"
                size="25px"
                onMouseOver={({ target }) => (target.style.color = "#5697FA")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                cursor="pointer"/></Link></a></li>
            </ul>
           </nav>
             <nav id="icono-nav" onClick={()=>responsiveMenu()}>
              <BiMenu color="gray"
              className="pages"
                size="35px"
                onMouseOver={({ target }) => (target.style.color = "#5697FA")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                cursor="pointer"/>
          </nav>
          </div>
        </header>
      </div>
    </section>
)


  }

  export default NavBar