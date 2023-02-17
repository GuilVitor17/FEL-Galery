import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './Galery-modules.css'
import RomanceFilmes1 from "./Filmes/Romance/RoutesRomance1/RomanceRoutes";
import RomanceFilmes2 from "./Filmes/Romance/RoutesRomance2/RomanceRoutes";
import RomanceFilmes3 from "./Filmes/Romance/RoutesRomance3/RomanceRoutes";
import RomanceFilmes4 from "./Filmes/Romance/RoutesRomance4/RomanceRoutes";
import RomanceFilmes5 from "./Filmes/Romance/RoutesRomance5/RomanceRoutes";



const GaleryFilmesRoutes = () => {

    return(
         <div className="Galery">


            <div className="caixaFilmes-div">
                <div className="Romance"><RomanceFilmes1 /></div>
                <div className="Romance"><RomanceFilmes2 /></div>
                <div className="Religiao"><RomanceFilmes3 />  </div>
                <div className="Infantil"><RomanceFilmes4 /></div>
                <div className="Historia"><RomanceFilmes5 /></div>
            </div>
            
         
        </div>
    )
}

export default GaleryFilmesRoutes