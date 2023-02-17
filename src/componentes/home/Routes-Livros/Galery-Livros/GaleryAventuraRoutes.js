import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './Galery-modules.css'
import AventurasLivros1 from "./livros/Aventuras/RoutesAventura1/aventurasRoutes.js";
import AventurasLivros2 from "./livros/Aventuras/RoutesAventura2/aventurasRoutes.js";
import AventurasLivros3 from "./livros/Aventuras/RoutesAventura3/aventurasRoutes.js";
import AventurasLivros4 from "./livros/Aventuras/RoutesAventura4/aventurasRoutes.js";
import AventurasLivros5 from "./livros/Aventuras/RoutesAventura5/aventurasRoutes.js";



const GaleryLivrosRoutes = () => {

    return(
         <div className="Galery">


            <div className="caixaLivros-aventura">
                <div><AventurasLivros1 /></div>
                <div><AventurasLivros2 /></div>
                <div><AventurasLivros3 /> </div>
                <div><AventurasLivros4 /></div>
                <div><AventurasLivros5 /></div>
            </div>
            
         
        </div>
    )
}

export default GaleryLivrosRoutes