import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './Galery-modules.css'
import RomancesLivros1 from "./livros/Romance/RoutesRomance1/Romance";
import RomancesLivros2 from "./livros/Romance/RoutesRomance2/Romance";
import RomancesLivros3 from "./livros/Romance/RoutesRomance3/Romance";
import RomancesLivros4 from "./livros/Romance/RoutesRomance4/Romance";
import RomancesLivros5 from "./livros/Romance/RoutesRomance5/Romance";



const GaleryLivrosRoutes = () => {

    return(
         <div className="Galery">


            <div className="caixaLivros-Romance">
                <div className="Romance"><RomancesLivros1 /></div>
                <div className="Romance"><RomancesLivros2 />  </div>
                <div className="Romance"><RomancesLivros3 /></div>
                <div className="Romance"><RomancesLivros4 /></div>
                <div className="Romance"><RomancesLivros5 /></div>
            </div>
            
         
        </div>
    )
}

export default GaleryLivrosRoutes