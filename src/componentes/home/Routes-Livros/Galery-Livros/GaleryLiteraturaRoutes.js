import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './Galery-modules.css'
import LiteraturasLivros1 from "./livros/Literatura/RoutesLiteratura1/Literatura";
import LiteraturasLivros2 from "./livros/Literatura/RoutesLiteratura2/Literatura";
import LiteraturasLivros3 from "./livros/Literatura/RoutesLiteratura3/Literatura";
import LiteraturasLivros4 from "./livros/Literatura/RoutesLiteratura4/Literatura";
import LiteraturasLivros5 from "./livros/Literatura/RoutesLiteratura5/Literatura";



const GaleryLivrosRoutes = () => {

    return(
         <div className="Galery">


            <div className="caixaLivros-Literatura">
                <div className="Literaturas"><LiteraturasLivros1 /></div>
                <div className="Romance"><LiteraturasLivros2 /></div>
                <div className="Religiao"> <LiteraturasLivros3 /> </div>
                <div className="Literatura"><LiteraturasLivros4 /></div>
                <div className="Literatura"><LiteraturasLivros5 /></div>
            </div>
            
         
        </div>
    )
}

export default GaleryLivrosRoutes