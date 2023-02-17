import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './Galery-modules.css'
import ComediaFilmes1 from "./Filmes/Comedia/RoutesComedia1/ComediaRoutes";
import ComediaFilmes2 from "./Filmes/Comedia/RoutesComedia2/ComediaRoutes";
import ComediaFilmes3 from "./Filmes/Comedia/RoutesComedia3/ComediaRoutes";
import ComediaFilmes4 from "./Filmes/Comedia/RoutesComedia4/ComediaRoutes";
import ComediaFilmes5 from "./Filmes/Comedia/RoutesComedia5/ComediaRoutes";



const GaleryFilmesRoutes = () => {

    return(
         <div className="Galery">


            <div className="caixaFilmes-div">
                <div className="Comedia"><ComediaFilmes1 /></div>
                <div className="Romance"><ComediaFilmes2 /></div>
                <div className="Religiao"><ComediaFilmes3 /></div>
                <div className="Infantil"><ComediaFilmes4 /></div>
                <div className="Historia"><ComediaFilmes5 /></div>
            </div>
            
         
        </div>
    )
}

export default GaleryFilmesRoutes