import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './Galery-modules.css'
import DramaFilmes1 from "./Filmes/Drama/RoutesDrama1/DramaRoutes";
import DramaFilmes2 from "./Filmes/Drama/RoutesDrama2/DramaRoutes";
import DramaFilmes3 from "./Filmes/Drama/RoutesDrama3/DramaRoutes";
import DramaFilmes4 from "./Filmes/Drama/RoutesDrama4/DramaRoutes";
import DramaFilmes5 from "./Filmes/Drama/RoutesDrama5/DramaRoutes";



const GaleryFilmesRoutes = () => {

    return(
         <div className="Galery">


            <div className="caixaFilmes-div">
                <div className="Drama"><DramaFilmes1 /></div>
                <div className="Romance"><DramaFilmes2 /></div>
                <div className="Religiao"><DramaFilmes3 />  </div>
                <div className="Infantil"><DramaFilmes4 /></div>
                <div className="Historia"><DramaFilmes5 /></div>
            </div>
            
         
        </div>
    )
}

export default GaleryFilmesRoutes