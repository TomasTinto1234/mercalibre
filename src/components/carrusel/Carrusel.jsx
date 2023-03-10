import React from "react";
import "../carrusel/carrusel.css"
import argentina from "../../assets/images1.jpeg";
import full from "../../assets/images7.jpg";
import herramientas from "../../assets/images5.jpeg";
import belleza from "../../assets/images4.jpg";
import ofertas from "../../assets/images3.jpeg";
import notebooks from "../../assets/images.jpeg";



function Carousel() {
  return (

    <div className="slider">
      <ul>
        <li>
          <img src={argentina}alt="argentina" />
        </li>
        <li>
          <img src={full}alt="full" />
        </li>
        <li>
            <img src={belleza}alt="belleza"/>
        </li>
        <li>
          <img src={ofertas} alt="ofertas" />
        </li>
        <li>
          <img src={notebooks} alt="notebooks" />
        </li>
        <li>
          <img src={herramientas}alt="herramientas" />
        </li>
      </ul>
    </div>
  
  );
}

export default Carousel;