import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './Galery-modules.css'
import HistoriasLivros1 from "./livros/Historia/RoutesHistoria1/historia.js";
import HistoriasLivros2 from "./livros/Historia/RoutesHistoria2/historia.js";
import HistoriasLivros3 from "./livros/Historia/RoutesHistoria3/historia.js";
import HistoriasLivros4 from "./livros/Historia/RoutesHistoria4/historia.js";
import HistoriasLivros5 from "./livros/Historia/RoutesHistoria5/historia.js";



const GaleryLivrosRoutes = () => {

    return(
         <div className="Galery">


            <div className="caixaLivros-Historia">
                <div className="Historias"><HistoriasLivros1 /></div>
                <div className="Romance"><HistoriasLivros2 /></div>
                <div className="Religiao"> <HistoriasLivros3 /> </div>
                <div className="Infantil"><HistoriasLivros4 /></div>
                <div className="Historia"><HistoriasLivros5 /></div>
            </div>
            
         
        </div>
    )
}

export default GaleryLivrosRoutes