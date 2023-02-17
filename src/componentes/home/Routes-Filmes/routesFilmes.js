import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/navbar";
import PrivatesForm from "../private-formulario/form-private-home";
import './routesFilmes-modules.css'
import GaleryFilmes from "./Galery-Filmes/GaleryFilmes";

const RoutesPrivatesFilmes = () => {

    return(
         <div className="Rota-Privada">
             <Navbar />
             <div className="Galery-filmes">

                <GaleryFilmes />

             </div>
             <PrivatesForm />
          
         
        </div>
    )
}

export default RoutesPrivatesFilmes