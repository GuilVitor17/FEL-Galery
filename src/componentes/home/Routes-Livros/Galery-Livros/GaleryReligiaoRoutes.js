import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './Galery-modules.css'
import ReligiaosLivros1 from "./livros/Religiao/RoutesReligiao1/Religiao";
import ReligiaosLivros2 from "./livros/Religiao/RoutesReligiao2/Religiao";
import ReligiaosLivros3 from "./livros/Religiao/RoutesReligiao3/Religiao";
import ReligiaosLivros4 from "./livros/Religiao/RoutesReligiao4/Religiao";
import ReligiaosLivros5 from "./livros/Religiao/RoutesReligiao5/Religiao";



const GaleryLivrosRoutes = () => {

    return(
         <div className="Galery">


            <div className="caixaLivros-Religiao">
                <div className="Religiaos"><ReligiaosLivros1 /></div>
                <div className="Romance"><ReligiaosLivros2 /></div>
                <div className="Religiao"> <ReligiaosLivros3 /> </div>
                <div className="Religiao"><ReligiaosLivros4 /></div>
                <div className="Religiao"><ReligiaosLivros5 /></div>
            </div>
            
         
        </div>
    )
}

export default GaleryLivrosRoutes