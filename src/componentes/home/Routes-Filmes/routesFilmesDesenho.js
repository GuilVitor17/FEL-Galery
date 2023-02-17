import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/navbar";
import PrivatesForm from "../private-formulario/form-private-home";
import './routesFilmes-modules.css'
import GaleryFilmesRoutes from "./Galery-Filmes/GaleryDesenhoRoutes";

const RoutesPrivatesFilmesDesenho = () => {

    return(
         <div className="Rota-Privada">
             <Navbar />
             <div className="Galery-Filmes">

                <GaleryFilmesRoutes />

             </div>
             <PrivatesForm />
          
         
        </div>
    )
}

export default RoutesPrivatesFilmesDesenho