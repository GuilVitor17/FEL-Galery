import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './Galery-modules.css'
import DesenhoFilmes1 from "./Filmes/Desenho/RoutesDesenho1/DesenhoRoutes";
import DesenhoFilmes2 from "./Filmes/Desenho/RoutesDesenho2/DesenhoRoutes";
import DesenhoFilmes3 from "./Filmes/Desenho/RoutesDesenho3/DesenhoRoutes";
import DesenhoFilmes4 from "./Filmes/Desenho/RoutesDesenho4/DesenhoRoutes";
import DesenhoFilmes5 from "./Filmes/Desenho/RoutesDesenho5/DesenhoRoutes";



const GaleryFilmesRoutes = () => {

    return(
         <div className="Galery">


            <div className="caixaFilmes-div">
                <div className="Desenho"><DesenhoFilmes1 /></div>
                <div className="Romance"><DesenhoFilmes2 /></div>
                <div className="Religiao"><DesenhoFilmes3 /></div>
                <div className="Infantil"><DesenhoFilmes4 /></div>
                <div className="Historia"><DesenhoFilmes5 /></div>
            </div>
            
         
        </div>
    )
}

export default GaleryFilmesRoutes