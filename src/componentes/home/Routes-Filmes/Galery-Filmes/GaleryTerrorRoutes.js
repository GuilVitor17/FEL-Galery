import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './Galery-modules.css'
import TerrorFilmes1 from "./Filmes/Terror/RoutesTerror1/TerrorRoutes";
import TerrorFilmes2 from "./Filmes/Terror/RoutesTerror2/TerrorRoutes";
import TerrorFilmes3 from "./Filmes/Terror/RoutesTerror3/TerrorRoutes";
import TerrorFilmes4 from "./Filmes/Terror/RoutesTerror4/TerrorRoutes";
import TerrorFilmes5 from "./Filmes/Terror/RoutesTerror5/TerrorRoutes";



const GaleryFilmesRoutes = () => {

    return(
         <div className="Galery">


            <div className="caixaFilmes-div">
                <div className="Terror"><TerrorFilmes1 /></div>
                <div className="Romance"><TerrorFilmes2 /></div>
                <div className="Religiao"><TerrorFilmes3 />  </div>
                <div className="Infantil"><TerrorFilmes4 /></div>
                <div className="Historia"><TerrorFilmes5 /></div>
            </div>
            
         
        </div>
    )
}

export default GaleryFilmesRoutes