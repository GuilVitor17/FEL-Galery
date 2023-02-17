import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Props from '../PropsDiv';
import Navbar from "../Navbar/navbar";
import './PrivateCarrossel-modules.css'
import Logo from '../img/Logomarca.png'
import CapaLivros from '../img/CapaLivros.png'
import CapaFilmes from '../img/CapaFilmes.png'
import CapaLogos from '../img/CapaLogos.png'


const PrivateHome = () => {

    return(
         <div className="home-Privada"> 
         <div className="div-home-header"> 
         
         <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={CapaLivros} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={CapaFilmes} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={CapaLogos} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

       
        </div>
    )
}

export default PrivateHome