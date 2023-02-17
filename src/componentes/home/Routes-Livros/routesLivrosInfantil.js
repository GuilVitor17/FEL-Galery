import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/navbar";
import PrivatesForm from "../private-formulario/form-private-home";
import './routesLivros-modules.css'
import GaleryLivrosRoutes from "./Galery-Livros/GaleryInfantilRoutes";

const RoutesPrivatesLivrosInfantil = () => {

    return(
         <div className="Rota-Privada">
             <Navbar />
             <div className="Galery-livros">

                <GaleryLivrosRoutes />

             </div>
             <PrivatesForm />
          
         
        </div>
    )
}

export default RoutesPrivatesLivrosInfantil