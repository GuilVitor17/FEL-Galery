import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './Galery-modules.css'
import InfantilsLivros1 from "./livros/Infantil/RoutesInfantil1/Infantil.js";
import InfantilsLivros2 from "./livros/Infantil/RoutesInfantil2/Infantil.js";
import InfantilsLivros3 from "./livros/Infantil/RoutesInfantil3/Infantil.js";
import InfantilsLivros4 from "./livros/Infantil/RoutesInfantil4/Infantil.js";
import InfantilsLivros5 from "./livros/Infantil/RoutesInfantil5/Infantil.js";



const GaleryLivrosRoutes = () => {

    return(
         <div className="Galery">


            <div className="caixaLivros-Infantil">
                <div className="Infantils"><InfantilsLivros1 /></div>
                <div className="Romance"><InfantilsLivros2 /></div>
                <div className="Religiao"> <InfantilsLivros3 /> </div>
                <div className="Infantil"><InfantilsLivros4 /></div>
                <div className="Infantil"><InfantilsLivros5 /></div>
            </div>
            
         
        </div>
    )
}

export default GaleryLivrosRoutes