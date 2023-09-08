import React, { useState } from "react";
import "./Top.css";

function header() {
  const [headerBackg , setHeaderBackg] = useState(false)
  const [hamburgHeader, setHamburgHeader] = useState(false)

  const changeHeaderBackground = () => {
    if(window.scrollY >= 100){
      setHeaderBackg(true)
    }else{
      setHeaderBackg(false)
    }
  }

  window.addEventListener("scroll", changeHeaderBackground)



  return (
    
    
       <div className={headerBackg ? "TopColor" : "Top"}>

      <div className="logo" data-aos="fade-right" >
        <img src="../../icones/coffee-cup.png" alt="icon" />
        <h1>
          <strong>Delicia</strong> Divina
        </h1>
      </div>
      <div className="menuOptions" data-aos="fade-up">
        <nav>
          <a href="#home">Home</a>
          <a href="#products">Produtos</a>
          <a href="#Contato">Contato</a>
          <a href="#localizacao">Localização</a>
        
        </nav>
      </div>
      </div>

    
    
    
    
    
  );
}

export default header;
